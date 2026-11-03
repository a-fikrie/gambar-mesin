/*
 * CAD Viewer STEP v4.5 — rotasi intuitif: Y-up komponen, Z-up rakitan; pengukuran berbasis B-Rep.
 * Dependencies installed separately by the user: three, opencascade.js@beta, vite.
 * STEP input in public/step/ (Vite copies it into dist/step during build).
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import createOpenCascade from 'opencascade.js/dist/opencascade.full.js';
import openCascadeWasmURL from 'opencascade.js/dist/opencascade.full.wasm?url';
import './style.css';
import { closestSegmentPoints } from './measure-math.js';

const $ = s => document.querySelector(s);
const canvas = $('#viewport');
const overlay = $('#overlay');
const status = $('#status');
const result = $('#result');
const method = $('#method');
const modelSelect = $('#model');
const clearButton = $('#clear');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0xffffff, 0x43546b, 2.6));
const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(130,180,160);scene.add(light);
// Jangan memaksa Z-up untuk semua file: AXLE akan tampak berdiri tegak,
// dan putar kiri-kanan tampak tidak berubah karena poros simetris.
// Arah atas dipilih sesuai model di showModel() tanpa mengubah STEP.
const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 100000);
camera.up.set(0, 1, 0);
camera.position.set(90,90,90);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const group = new THREE.Group(); scene.add(group);
const measurementGroup = new THREE.Group(); scene.add(measurementGroup);
const edgeGuideGroup = new THREE.Group(); scene.add(edgeGuideGroup);
// Garis pada Visual Style diekstrak dari B-Rep, bukan triangulasi mesh.
const displayEdgeGroup = new THREE.Group();scene.add(displayEdgeGroup);
let visualStyle='shaded-edges';
let circleEdges = [], straightEdges = [], selectedRings = [];
let pendingFeature = null;
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let oc, mode='auto', ready=false, loading=false, labels=[];

// Di bilah bawah tampilkan nama STEP saja ketika model siap.
function setStatus(msg){status.textContent=(ready&&!loading)?modelSelect.value:msg;}
function setLog(msg){console.info('[CAD Viewer]',msg);}
function setResult(text, detail=''){result.textContent=text;method.textContent=detail;}
function fmt(n){return Number(n).toLocaleString('id-ID',{minimumFractionDigits:2,maximumFractionDigits:2});}

function resize(){
  const p=canvas.parentElement;
  const w=p.clientWidth, h=p.clientHeight;
  renderer.setSize(w,h,false);
  camera.aspect=w/h;camera.updateProjectionMatrix();
}
const observer=new ResizeObserver(resize);observer.observe(canvas.parentElement);

function emptyMeasurements(){
  selectedRings=[];pendingFeature=null;
  while(measurementGroup.children.length){
    const obj=measurementGroup.children.pop();
    obj.parent=null;
    obj.geometry?.dispose();
    obj.material?.dispose();
  }
  for(const m of labels)m.el.remove();
  labels=[];setResult('—','Pilih mode pengukuran.');
}
function clearModel(){
  emptyMeasurements();
  circleEdges=[];straightEdges=[];
  while(edgeGuideGroup.children.length){
    const o=edgeGuideGroup.children.pop(); o.parent=null;
    o.geometry?.dispose(); o.material?.dispose();
  }
  while(displayEdgeGroup.children.length){
    const o=displayEdgeGroup.children.pop(); o.parent=null;
    o.geometry?.dispose(); o.material?.dispose();
  }
  while(group.children.length){
    const obj=group.children.pop();obj.parent=null;
    obj.geometry?.dispose();obj.material?.dispose();
  }
}
function marker(point, color=0xffbc4f){
  const box=new THREE.Box3().setFromObject(group);
  const size=Math.max(box.getSize(new THREE.Vector3()).length()*0.006,0.25);
  const m=new THREE.Mesh(new THREE.SphereGeometry(size,12,9),new THREE.MeshBasicMaterial({color,depthTest:false}));
  m.position.copy(point);m.renderOrder=10;measurementGroup.add(m);
}
function lineBetween(a,b){
  const geometry=new THREE.BufferGeometry().setFromPoints([a,b]);
  const line=new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0xffc35d,depthTest:false}));
  line.renderOrder=9;measurementGroup.add(line);
}
function addLabel(text,at){
  const el=document.createElement('span');
  el.className='measure-label';el.textContent=text;overlay.appendChild(el);
  labels.push({el, at:at.clone()});
}
function updateLabels(){
  const w=canvas.clientWidth,h=canvas.clientHeight;
  for(const m of labels){
    const v=m.at.clone().project(camera);
    m.el.style.display=v.z>=1 || v.z<=-1 ? 'none':'block';
    m.el.style.left=`${(v.x*.5+.5)*w}px`;
    m.el.style.top=`${(-v.y*.5+.5)*h}px`;
  }
}
function animate(){
  controls.update();resizeIfNeeded();updateLabels();renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
function resizeIfNeeded(){
  if(canvas.width!==Math.floor(canvas.clientWidth*renderer.getPixelRatio())||
      canvas.height!==Math.floor(canvas.clientHeight*renderer.getPixelRatio()))resize();
}

function showModel(){
  const box=new THREE.Box3().setFromObject(group);
  if(box.isEmpty())return;
  const center=box.getCenter(new THREE.Vector3());
  const size=Math.max(box.getSize(new THREE.Vector3()).length(),1);
  // Rakitan memakai Z-up agar base plate berada di atas seperti Inventor.
  // Komponen tunggal memakai Y-up agar putaran mouse terasa seperti versi awal.
  // Ini hanya orientasi kamera: posisi dan ukuran B-Rep tidak berubah.
  const assembly = modelSelect.value.toUpperCase().includes('WHEEL ASSEMBLY');
  camera.up.set(0, assembly ? 0 : 1, assembly ? 1 : 0);
  const offset = assembly
    ? new THREE.Vector3(size*.90,size*.72,size*.96)
    : new THREE.Vector3(size*.90,size*.72,size*.90);
  camera.position.copy(center).add(offset);
  camera.near=Math.max(0.01,size/1000); camera.far=size*30;
  camera.updateProjectionMatrix();
  controls.target.copy(center);
  controls.enableRotate=true;
  controls.update();
}

/*
 * Measurement of a conical (circular) chamfer from STEP B-Rep.
 * No triangulation points are used for its nominal length: the bounds come
 * from exact topological vertices of the conical face.
 * Valid only if its vertices form two planes perpendicular to the cone axis.
 */
function measureConicalChamfer(face, cone){
  const axis=cone.Axis().Direction();
  const axisVector=new THREE.Vector3(axis.X(),axis.Y(),axis.Z()).normalize();
  const origin=cone.Location();
  const zero=new THREE.Vector3(origin.X(),origin.Y(),origin.Z());
  const angleDeg=Math.abs(cone.SemiAngle()*180/Math.PI);
  if(!Number.isFinite(angleDeg)||angleDeg<=0.001||angleDeg>=89.999)return null;

  const offsets=[];
  const vertexExplorer=new oc.TopExp_Explorer_2(
    face,oc.TopAbs_ShapeEnum.TopAbs_VERTEX,oc.TopAbs_ShapeEnum.TopAbs_SHAPE
  );
  try{
    while(vertexExplorer.More()){
      const v=oc.TopoDS.Vertex_1(vertexExplorer.Current());
      const p=oc.BRep_Tool.Pnt(v);
      const proj=(p.X()-zero.x)*axisVector.x+
                 (p.Y()-zero.y)*axisVector.y+
                 (p.Z()-zero.z)*axisVector.z;
      if(Number.isFinite(proj))offsets.push(proj);
      vertexExplorer.Next();
    }
  }finally{vertexExplorer.delete();}
  if(offsets.length<2)return {angleDeg, supported:false, reason:'Tepi chamfer tidak memiliki cukup vertex B-Rep.'};
  const low=Math.min(...offsets), high=Math.max(...offsets);
  const axial=high-low;
  if(axial<1e-6)return {angleDeg,supported:false,reason:'Dua batas aksial chamfer tidak dapat dibedakan.'};

  // A complete circular chamfer is bounded by two circles in two axial planes.
  // Reject skew/irregular trimming to prevent presenting a false dimension.
  const tol=Math.max(0.02,axial*0.002);
  const allOnEnds=offsets.every(t=>Math.min(Math.abs(t-low),Math.abs(t-high))<=tol);
  if(!allOnEnds)return {angleDeg,supported:false,reason:'Batas bukan dua lingkaran pada bidang tegak lurus sumbu.'};

  const radial=axial*Math.tan(angleDeg*Math.PI/180);
  if(!Number.isFinite(radial)||radial<1e-6)return {angleDeg,supported:false,reason:'Ukuran radial tidak valid.'};
  return {angleDeg,axial,radial,supported:true};
}

/* Attach B-Rep metadata to each meshed FACE for exact cylinder R / Ø readings. */
function meshShapeFromBrep(shape){
  const mesher=new oc.BRepMesh_IncrementalMesh_2(shape,0.08,false,0.18,false);
  mesher.Perform(new oc.Message_ProgressRange_1());
  const exp=new oc.TopExp_Explorer_2(shape,oc.TopAbs_ShapeEnum.TopAbs_FACE,oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
  let faceIndex=0, faceCount=0;
  while(exp.More()){
    faceIndex++;
    const face=oc.TopoDS.Face_1(exp.Current());
    const loc=new oc.TopLoc_Location_1();
    const handle=oc.BRep_Tool.Triangulation(face,loc,0);
    if(handle?.IsNull?.()){exp.Next();continue;}
    const tri=handle.get();
    if(!tri || tri.NbTriangles()<1){exp.Next();continue;}
    const tf=loc.Transformation();
    const vertices=[];
    for(let i=1;i<=tri.NbTriangles();i++){
      const t=tri.Triangle(i);
      let i1=t.Value(1),i2=t.Value(2),i3=t.Value(3);
      if(face.Orientation_1()===oc.TopAbs_Orientation.TopAbs_REVERSED){const tmp=i2;i2=i3;i3=tmp;}
      for(const index of [i1,i2,i3]){
        const p=tri.Node(index).Transformed(tf);
        vertices.push(p.X(),p.Y(),p.Z());
      }
    }
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
    geo.computeVertexNormals();
    const mat=new THREE.MeshStandardMaterial({
      color:0xa9becf,roughness:0.54,metalness:0.13,side:THREE.DoubleSide,
      polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1
    });
    const mesh=new THREE.Mesh(geo,mat);
    mesh.userData.faceIndex=faceIndex;
    try{
      const surface=new oc.BRepAdaptor_Surface_2(face,true);
      // Cylinder() is only valid for cylindrical faces; verify the surface enum first.
      if(surface.GetType()===oc.GeomAbs_SurfaceType.GeomAbs_Cylinder){
        mesh.userData.cylinderRadius=surface.Cylinder().Radius();
      }else if(surface.GetType()===oc.GeomAbs_SurfaceType.GeomAbs_Cone){
        mesh.userData.chamfer=measureConicalChamfer(face,surface.Cone());
      }
      surface.delete();
    }catch(err){console.debug('Face type unavailable',faceIndex,err);}
    group.add(mesh);faceCount++;
    exp.Next();
  }
  exp.delete();
  mesher.delete();
  return faceCount;
}


/**
 * Garis tepi CAD untuk 3 visual style.
 * Memakai TopAbs_EDGE dan BRepAdaptor_Curve (kurva geometri asli STEP),
 * bukan EdgesGeometry(mesh) yang menampilkan tepi segitiga.
 * Sampel hanya digunakan untuk menggambar; ukuran tetap dari B-Rep.
 */
function collectDisplayEdges(shape){
  let rendered=0, skipped=0;
  const explorer=new oc.TopExp_Explorer_2(
    shape,oc.TopAbs_ShapeEnum.TopAbs_EDGE,oc.TopAbs_ShapeEnum.TopAbs_SHAPE
  );
  try{
    while(explorer.More()){
      let curve=null;
      try{
        const edge=oc.TopoDS.Edge_1(explorer.Current());
        curve=new oc.BRepAdaptor_Curve_2(edge);
        const first=curve.FirstParameter(),last=curve.LastParameter();
        if(!Number.isFinite(first)||!Number.isFinite(last)||Math.abs(last-first)<1e-9){
          explorer.Next();continue;
        }
        const curveType=curve.GetType();
        const isLine=curveType===oc.GeomAbs_CurveType.GeomAbs_Line;
        const isCircle=curveType===oc.GeomAbs_CurveType.GeomAbs_Circle;
        const isEllipse=curveType===oc.GeomAbs_CurveType.GeomAbs_Ellipse;
        // Tepi lengkung disampling untuk visualisasi; geometri ukuran tidak diubah.
        let count=isLine?1:(isCircle||isEllipse?Math.max(24,Math.min(160,Math.ceil(Math.abs(last-first)*24))):64);
        const points=[];
        for(let i=0;i<=count;i++){
          const point=curve.Value(first+(last-first)*i/count);
          if(Number.isFinite(point.X())&&Number.isFinite(point.Y())&&Number.isFinite(point.Z())){
            points.push(new THREE.Vector3(point.X(),point.Y(),point.Z()));
          }
        }
        if(points.length>1){
          const geometry=new THREE.BufferGeometry().setFromPoints(points);
          const material=new THREE.LineBasicMaterial({color:0x283d52,depthTest:true,depthWrite:false});
          const line=new THREE.Line(geometry,material);
          line.renderOrder=3;displayEdgeGroup.add(line);rendered++;
        }
      }catch(error){skipped++;console.debug('Kurva visual tidak bisa ditampilkan',error);}
      finally{try{curve?.delete();}catch{}}
      explorer.Next();
    }
  }finally{explorer.delete();}
  return {rendered,skipped};
}
function applyVisualStyle(){
  const wire=visualStyle==='wireframe';
  const withEdges=visualStyle==='shaded-edges';
  // Wireframe menampilkan kurva B-Rep asli. Sebelumnya warna 0xc4d9ee
  // hampir sama dengan latar CAD (#deebf7), sehingga tampak kosong.
  const hasBrepEdges=displayEdgeGroup.children.length>0;
  for(const mesh of group.children){
    if(mesh.material){
      // Jika sebuah STEP tidak punya kurva visual yang bisa dibaca,
      // jangan membuat model menghilang: fallback visual mesh wireframe.
      const fallback=wire&&!hasBrepEdges;
      mesh.material.visible=!wire||fallback;
      mesh.material.wireframe=fallback;
      mesh.material.color.setHex(fallback?0x183650:0xa9becf);
      mesh.material.needsUpdate=true;
    }
  }
  displayEdgeGroup.visible=(wire||withEdges)&&hasBrepEdges;
  for(const line of displayEdgeGroup.children){
    line.material.color.setHex(wire?0x244760:0x38576c);
    // Pada Wireframe, garis harus tetap tampak meski permukaan disembunyikan.
    line.material.depthTest=!wire;
    line.material.depthWrite=false;
    line.material.transparent=false;
    line.material.opacity=1;
    line.material.needsUpdate=true;
    line.renderOrder=wire?4:3;
  }
  document.querySelectorAll('[data-style]').forEach(button=>{
    const selected=button.dataset.style===visualStyle;
    button.setAttribute('aria-checked',String(selected));
    button.textContent=button.dataset.style==='shaded'?'Shaded':
      button.dataset.style==='shaded-edges'?'Shaded with Edges': 'Wireframe';
    if(selected)button.textContent+=' ✓';
  });
}
function initVisualStyleMenu(){
  const trigger=$('#visualStyleButton');
  const choices=$('#visualStyleOptions');
  const close=()=>{choices.hidden=true;trigger.setAttribute('aria-expanded','false');};
  trigger.addEventListener('click',()=>{
    const willOpen=choices.hidden;
    choices.hidden=!willOpen;
    trigger.setAttribute('aria-expanded',String(willOpen));
  });
  choices.querySelectorAll('[data-style]').forEach(b=>{
    b.addEventListener('click',()=>{
      visualStyle=b.dataset.style;
      applyVisualStyle();close();
    });
  });
  document.addEventListener('click',event=>{
    if(!$('#visualMenu').contains(event.target))close();
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape')close();
  });
  applyVisualStyle();
}

/** Exact analytic circular edges from Open CASCADE, not from the triangle mesh.
 *  The sampled vertices below ONLY draw/pick highlights; reported lengths use
 *  the analytic gp_Circ center/axis (B-Rep).
 */
function collectCircularEdges(shape){
  const explorer=new oc.TopExp_Explorer_2(
    shape,oc.TopAbs_ShapeEnum.TopAbs_EDGE,oc.TopAbs_ShapeEnum.TopAbs_SHAPE
  );
  let count=0, skipped=0;
  try{
    while(explorer.More()){
      let curve=null;
      try{
        const edge=oc.TopoDS.Edge_1(explorer.Current());
        curve=new oc.BRepAdaptor_Curve_2(edge);
        if(curve.GetType()!==oc.GeomAbs_CurveType.GeomAbs_Circle){explorer.Next();continue;}
        const c=curve.Circle(), origin=c.Location(), axis=c.Axis().Direction();
        const center=new THREE.Vector3(origin.X(),origin.Y(),origin.Z());
        const direction=new THREE.Vector3(axis.X(),axis.Y(),axis.Z()).normalize();
        const radius=c.Radius();
        if(!Number.isFinite(radius)||radius<1e-6){explorer.Next();continue;}
        const first=curve.FirstParameter(),last=curve.LastParameter();
        if(!Number.isFinite(first)||!Number.isFinite(last)||Math.abs(last-first)<1e-8){explorer.Next();continue;}
        // For circles with the same center/radius/plane, avoid repeated identical guides.
        const already=circleEdges.some(e=>e.center.distanceTo(center)<0.0001&&
          Math.abs(e.radius-radius)<0.0001&&Math.abs(e.axis.dot(direction))>0.99999&&
          Math.abs(e.end-e.start-(last-first))<0.0001);
        if(already){explorer.Next();continue;}
        const n=Math.max(24,Math.ceil(Math.abs(last-first)/(Math.PI*2)*120));
        const points=[];
        for(let i=0;i<=n;i++){
          const p=curve.Value(first+(last-first)*i/n);
          points.push(new THREE.Vector3(p.X(),p.Y(),p.Z()));
        }
        const geometry=new THREE.BufferGeometry().setFromPoints(points);
        const visual=new THREE.Line(geometry,new THREE.LineBasicMaterial({
          color:0x2baba8,transparent:true,opacity:0.92,depthTest:false
        }));
        visual.renderOrder=6;visual.visible=false;edgeGuideGroup.add(visual);
        circleEdges.push({center,axis:direction,radius,visual,points,start:first,end:last});
        count++;
      }catch(err){skipped++;console.debug('Tepi B-Rep tidak didukung:',err);}
      finally{try{curve?.delete();}catch{}}
      explorer.Next();
    }
  }finally{explorer.delete();}
  edgeGuideGroup.visible=mode==='auto';
  return {count,skipped};
}

function pointToSegment2D(p,a,b){
  const abx=b.x-a.x, aby=b.y-a.y;
  const t=THREE.MathUtils.clamp(((p.x-a.x)*abx+(p.y-a.y)*aby)/(abx*abx+aby*aby||1),0,1);
  return Math.hypot(p.x-a.x-abx*t,p.y-a.y-aby*t);
}
function projectPixels(v){
  const p=v.clone().project(camera);
  return {x:(p.x*.5+.5)*canvas.clientWidth,y:(-.5*p.y+.5)*canvas.clientHeight,z:p.z};
}
function collectStraightEdges(shape){
  straightEdges=[];
  const exp=new oc.TopExp_Explorer_2(shape,oc.TopAbs_ShapeEnum.TopAbs_EDGE,oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
  try{
    while(exp.More()){
      let curve=null;
      try{
        const edge=oc.TopoDS.Edge_1(exp.Current());
        curve=new oc.BRepAdaptor_Curve_2(edge);
        if(curve.GetType()!==oc.GeomAbs_CurveType.GeomAbs_Line){exp.Next();continue;}
        const t0=curve.FirstParameter(),t1=curve.LastParameter();
        if(!Number.isFinite(t0)||!Number.isFinite(t1)) {exp.Next();continue;}
        const a=curve.Value(t0),b=curve.Value(t1);
        const start=new THREE.Vector3(a.X(),a.Y(),a.Z());
        const end=new THREE.Vector3(b.X(),b.Y(),b.Z());
        if(start.distanceTo(end)<1e-5){exp.Next();continue;}
        // Deduplicate geometric lines shared between faces of an assembly.
        const duplicate=straightEdges.some(e=>(e.a.distanceTo(start)<1e-5&&e.b.distanceTo(end)<1e-5)||
          (e.a.distanceTo(end)<1e-5&&e.b.distanceTo(start)<1e-5));
        if(!duplicate)straightEdges.push({a:start,b:end});
      }catch(err){console.debug('Tepi lurus dilewati',err);}
      finally{try{curve?.delete();}catch{}}
      exp.Next();
    }
  }finally{exp.delete();}
  return {count:straightEdges.length};
}
function restoreCircleGuides(){
  for(const r of circleEdges){
    const selected=pendingFeature?.kind==='circle' && pendingFeature.item===r;
    r.visual.visible=Boolean(selected);
    r.visual.material.color.setHex(selected?0xffb74e:0x2baba8);
  }
}
function getClosestMeasureFeature(event){
  const rect=canvas.getBoundingClientRect();
  const mouse={x:(event.clientX-rect.left)*canvas.clientWidth/rect.width,
    y:(event.clientY-rect.top)*canvas.clientHeight/rect.height};
  let best=null,bestDistance=13;
  for(const ring of circleEdges){
    for(let i=1;i<ring.points.length;i++){
      const a=projectPixels(ring.points[i-1]),b=projectPixels(ring.points[i]);
      if((a.z>1&&b.z>1)||(a.z< -1&&b.z< -1))continue;
      const d=pointToSegment2D(mouse,a,b);
      if(d<bestDistance){bestDistance=d;best={kind:'circle',item:ring};}
    }
  }
  for(const edge of straightEdges){
    const a=projectPixels(edge.a),b=projectPixels(edge.b);
    if((a.z>1&&b.z>1)||(a.z< -1&&b.z< -1))continue;
    const d=pointToSegment2D(mouse,a,b);
    if(d<bestDistance){bestDistance=d;best={kind:'line',item:edge};}
  }
  return best;
}
function pointMeasurement(a,b,label,detail){
  lineBetween(a,b);marker(a,0x67dfce);marker(b,0x67dfce);
  addLabel(label,a.clone().add(b).multiplyScalar(.5));
  setResult(label,detail);
}
function pickMeasureFeature(feature){
  const current=pendingFeature;
  if(!current){
    pendingFeature=feature;restoreCircleGuides();
    if(feature.kind==='circle'){
      const r=feature.item.radius;
      setResult(`Ø${fmt(2*r)} / R${fmt(r)}`, 'Tepi lingkaran A dipilih. Klik lingkaran kedua untuk panjang aksial atau jarak pusat (mm).');
    }else{
      setResult('Tepi A dipilih','Klik tepi lurus kedua untuk jarak terpendek antartepi (mm).');
    }
    return;
  }
  if(current.kind!==feature.kind){
    pendingFeature=feature;restoreCircleGuides();
    setResult('Pilihan pertama diganti','Klik tepi kedua dengan jenis yang sama (lingkaran atau garis lurus).');
    return;
  }
  pendingFeature=null;restoreCircleGuides();
  const a=current.item,b=feature.item;
  if(a===b){
    setResult('Pilih dua tepi berbeda','Klik lingkaran atau garis lain untuk pengukuran jarak.');
    return;
  }
  if(current.kind==='circle'){
    // Pusat dan arah sumbu diperoleh dari gp_Circ (B-Rep asli).
    const parallel=Math.abs(a.axis.dot(b.axis))>0.9999;
    if(!parallel){
      setResult('Sumbu berbeda arah','Dua pusat lubang hanya dibandingkan jika sumbu lingkarannya sejajar.');
      return;
    }
    const diff=b.center.clone().sub(a.center);
    const axial=diff.dot(a.axis);
    const radial=diff.clone().addScaledVector(a.axis,-axial).length();
    const diagonal=new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3()).length();
    const tol=Math.max(0.02,diagonal*0.0002);
    if(radial<=tol){
      const distance=Math.abs(axial);
      if(distance<1e-6){setResult('Pusat berimpit','Pilih lingkaran pada posisi yang berbeda.');return;}
      let normal=camera.up.clone().addScaledVector(a.axis,-camera.up.dot(a.axis));
      if(normal.lengthSq()<1e-8)normal=camera.position.clone().sub(controls.target).addScaledVector(a.axis,-camera.position.clone().sub(controls.target).dot(a.axis));
      if(normal.lengthSq()<1e-8)normal=new THREE.Vector3(1,0,0).cross(a.axis);
      normal.normalize();
      const offset=Math.max(a.radius,b.radius)+Math.max(2,diagonal*0.045);
      const v=normal.multiplyScalar(offset);
      const a2=a.center.clone().add(v),b2=b.center.clone().add(v);
      lineBetween(a.center,a2);lineBetween(b.center,b2);
      pointMeasurement(a2,b2,`${fmt(distance)} mm`,'Panjang aksial dari dua lingkaran sesumbu; posisi pusat analitik STEP.');
    }else{
      const dist=diff.length();
      const samePlane=Math.abs(axial)<=tol;
      pointMeasurement(a.center,b.center,`${fmt(dist)} mm`,samePlane?
        'Jarak pusat dua lingkaran pada bidang yang sama (geometri STEP).':
        'Jarak pusat 3D antarlingkaran; kedua pusat berada pada bidang aksial berbeda.');
    }
  }else{
    // Hanya edge LINEAR B-Rep yang didukung; bukan seluruh kurva bebas.
    const p=closestSegmentPoints(a.a.toArray(),a.b.toArray(),b.a.toArray(),b.b.toArray());
    if(!Number.isFinite(p.distance)){
      setResult('Tidak dapat diukur','Kurva tepi belum didukung.');return;
    }
    pointMeasurement(new THREE.Vector3(...p.a),new THREE.Vector3(...p.b),
      `${fmt(p.distance)} mm`,'Jarak terpendek 3D antara dua segmen garis lurus B-Rep STEP.');
  }
}

async function loadModel(filename){
  if(!oc||loading)return;
  loading=true;modelSelect.disabled=true;ready=false;clearModel();
  setResult('—','Sedang membaca file STEP…');
  setStatus(`Membaca ${filename} (B-Rep)…`);setLog(`Membaca /step/${filename}…`);
  try{
    const url=`${import.meta.env.BASE_URL}step/${encodeURIComponent(filename)}`;
    const response=await fetch(url);
    if(!response.ok)throw new Error(`HTTP ${response.status}: ${url}`);
    const bytes=new Uint8Array(await response.arrayBuffer());
    const path='/current-model.step';
    try{oc.FS.unlink(path);}catch{}
    oc.FS.writeFile(path,bytes);
    const reader=new oc.STEPControl_Reader_1();
    const readStatus=reader.ReadFile(path);
    // IFSelect_RetDone usually equals 1. TransferRoots may return count or void by bindings.
    const doneStatus=oc.IFSelect_ReturnStatus?.IFSelect_RetDone;
    if(doneStatus!==undefined && readStatus!==doneStatus){
      throw new Error(`STEP reader mengembalikan status ${String(readStatus)}`);
    }
    reader.TransferRoots(new oc.Message_ProgressRange_1());
    const shape=reader.OneShape();
    if(shape.IsNull())throw new Error('STEP tidak menghasilkan shape.');
    const count=meshShapeFromBrep(shape);
    const edgeData=collectCircularEdges(shape);
    const allEdges=collectDisplayEdges(shape);
    const straightData=collectStraightEdges(shape);
    applyVisualStyle();
    if(count===0)throw new Error('Tidak ditemukan face B-Rep yang bisa digambar.');
    showModel();ready=true;
    setLog(`${filename}\n${count} face, ${edgeData.count} tepi lingkaran, ${allEdges.rendered} garis B-Rep, ${straightData.count} tepi lurus.`);
    setStatus(filename);
    setResult('Model siap','Klik permukaan silinder/chamfer, atau pilih dua lingkaran atau dua tepi lurus.');
    // Do not call reader.delete() until meshes have been built. Meshes store only numbers.
    reader.delete();
  }catch(e){
    console.error(e);setStatus('Gagal membaca model '+filename+'. Tekan F12 → Console.');
    setLog(`ERROR: ${e.message}\nBuka F12 → Console untuk informasi lebih lengkap.`);
    setResult('Gagal memuat','Periksa nama file dan versi OpenCascade.js.');
  }finally{loading=false;modelSelect.disabled=false;if(ready)status.textContent=filename;}
}

function onPick(event){
  if(!ready||mode!=='auto')return;
  // Prioritaskan tepi B-Rep apabila mouse dekat snap; selain itu baca face B-Rep.
  const feature=getClosestMeasureFeature(event);
  if(feature){pickMeasureFeature(feature);return;}
  pendingFeature=null;selectedRings=[];restoreCircleGuides();
  const bounds=canvas.getBoundingClientRect();
  pointer.set(((event.clientX-bounds.left)/bounds.width)*2-1,-((event.clientY-bounds.top)/bounds.height)*2+1);
  raycaster.setFromCamera(pointer,camera);
  const hits=raycaster.intersectObjects(group.children,false);
  if(!hits.length){setStatus('Klik permukaan model yang terlihat.');return;}
  const hit=hits[0],point=hit.point.clone();
  if(mode==='auto' && typeof hit.object.userData.cylinderRadius==='number'){
    const radius=hit.object.userData.cylinderRadius;
    if(typeof radius !== 'number'){
      setStatus('Bidang ini bukan silinder. Klik sisi lengkung lubang atau poros.');
      setResult('Bukan silinder','Pengukuran Ø/R B-Rep berlaku pada permukaan silinder.');
      return;
    }
    const text=`Ø${fmt(radius*2)} / R${fmt(radius)}`;
    marker(point);addLabel(`Ø${fmt(radius*2)} · R${fmt(radius)}`,point);
    setResult(text,'Diameter dan radius nominal dari permukaan silinder STEP (mm).');
  }else if(mode==='auto' && hit.object.userData.chamfer){
    const data=hit.object.userData.chamfer;
    if(!data){
      setResult('Bukan chamfer kerucut','Klik permukaan miring melingkar (CONICAL_SURFACE), bukan permukaan datar atau silinder.');
      setStatus('Bidang ini bukan permukaan kerucut. Klik bevel di ujung AXLE.');
      return;
    }
    if(!data.supported){
      const angleText=Number.isFinite(data.angleDeg)?`${fmt(data.angleDeg)}°`:'—';
      marker(point);addLabel(`Sudut ${angleText}`,point);
      setResult(`Sudut ${angleText}`,'Permukaan kerucut terdeteksi, tetapi ukuran chamfer tidak dapat dipastikan: '+data.reason);
      setStatus('Terdeteksi kerucut, tetapi batasnya tidak sesuai chamfer melingkar sederhana.');
      return;
    }
    const formattedAngle=fmt(data.angleDeg);
    // Convention: x45° is the radial/axial chamfer leg for a 45-degree bevel.
    // For other angles explicitly display both legs to avoid ambiguity.
    const is45=Math.abs(data.angleDeg-45)<0.01;
    const text=is45?`${fmt(data.axial)} × 45°`:`${fmt(data.axial)} × ${formattedAngle}°`;
    marker(point);addLabel(text,point);
    setResult(text,`Chamfer B-Rep: arah sumbu ${fmt(data.axial)} mm, arah radial ${fmt(data.radial)} mm; sudut ${formattedAngle}°. Nilai nominal model CAD.`);
    setStatus(`Face ${hit.object.userData.faceIndex}: chamfer ${text}; klik bevel lain untuk mengukur.`);
  }else{
    setResult('Pilih fitur CAD','Klik silinder, chamfer, tepi lingkaran, atau tepi lurus. Untuk jarak, pilih dua tepi sejenis.');
  }
}

// Sorot tepi lingkaran hanya saat kursor mendekati geometri B-Rep.
// Garis hijau tak lagi selalu menimpa Shaded with Edges / Wireframe.
let hoverFrame=0;
let latestPointer=null;
function clearHoverGuide(){
  restoreCircleGuides();
  canvas.style.cursor='grab';
}
canvas.addEventListener('pointermove',e=>{
  if(!ready||mode!=='auto'||e.buttons!==0){
    clearHoverGuide();
    return;
  }
  latestPointer={clientX:e.clientX,clientY:e.clientY};
  if(hoverFrame)return;
  hoverFrame=requestAnimationFrame(()=>{
    hoverFrame=0;
    if(!ready||mode!=='auto'||!latestPointer)return;
    const near=getClosestMeasureFeature(latestPointer);
    restoreCircleGuides();
    if(near?.kind==='circle'){
      near.item.visual.visible=true;
      if(pendingFeature?.item!==near.item)near.item.visual.material.color.setHex(0x239d98);
    }
    canvas.style.cursor=near?'crosshair':'grab';
  });
});
canvas.addEventListener('pointerleave',()=>{latestPointer=null;clearHoverGuide();});

// Disable measurement picking when the user dragged the orbit camera.
let pointerDown=null;
canvas.addEventListener('pointerdown',e=>pointerDown={x:e.clientX,y:e.clientY});
canvas.addEventListener('pointerup',e=>{
  if(!pointerDown)return;
  const delta=Math.hypot(e.clientX-pointerDown.x,e.clientY-pointerDown.y);
  if(delta<5 && e.button===0)onPick(e);
  pointerDown=null;
});

for(const b of document.querySelectorAll('[data-mode]')){
  b.addEventListener('click',()=>{
    mode=(mode==='auto')?'orbit':'auto';
    pendingFeature=null;selectedRings=[];restoreCircleGuides();
    edgeGuideGroup.visible=mode==='auto';
    b.classList.toggle('active',mode==='auto');
    b.setAttribute('aria-pressed',String(mode==='auto'));
    $('#cadModeHint').textContent=mode==='auto'?'Klik fitur CAD untuk mengukur':'Ukur tidak aktif';
    setResult(mode==='auto'?'Ukur otomatis aktif':'Ukur nonaktif',
      mode==='auto'?'Klik permukaan silinder/chamfer atau pilih dua tepi.':'Klik Ukur otomatis untuk mengukur lagi.');
  });
}
modelSelect.addEventListener('change',()=>loadModel(modelSelect.value));
$('#resetView').addEventListener('click',showModel);
clearButton.addEventListener('click',()=>{emptyMeasurements();setStatus('Pengukuran dihapus.');});

async function boot(){
  setStatus('Menjalankan mesin Open CASCADE WebAssembly…');
  setLog('Memuat opencascade.full.wasm… (unduhan awal cukup besar)');
  try{
    oc=await createOpenCascade({locateFile:()=>openCascadeWasmURL});
    setLog('Mesin Open CASCADE berhasil dimuat.');
    await loadModel(modelSelect.value);
  }catch(e){
    console.error(e);setStatus('Gagal menjalankan OpenCascade.js');
    setLog('ERROR: '+e.message+'\nCek file WASM dan console browser (F12).');
  }
}
initVisualStyleMenu();
resize();
animate();
let didBoot=false;
function beginCAD(){if(didBoot)return;didBoot=true;boot();}
const cadSection=document.querySelector('#pengukuran');
if('IntersectionObserver' in window){
  const lazyBoot=new IntersectionObserver(entries=>{
    if(entries.some(e=>e.isIntersecting)){
      lazyBoot.disconnect();
      beginCAD();
    }
  },{rootMargin:'500px 0px'});
  lazyBoot.observe(cadSection);
}else{beginCAD();}

