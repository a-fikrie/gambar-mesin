/** Pure math for shortest separation between two finite 3D segments. */
export function closestSegmentPoints(p0,p1,q0,q1){
  const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
  const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
  const addScaled=(a,b,s)=>[a[0]+b[0]*s,a[1]+b[1]*s,a[2]+b[2]*s];
  const u=sub(p1,p0),v=sub(q1,q0),w=sub(p0,q0);
  const a=dot(u,u),b=dot(u,v),c=dot(v,v),d=dot(u,w),e=dot(v,w);
  const EPS=1e-14;
  // Algorithm for closest points on finite segments, including parallel and degenerate cases.
  let s=0,t=0;
  if(a<EPS&&c<EPS){s=0;t=0;}
  else if(a<EPS){s=0;t=Math.max(0,Math.min(1,e/c));}
  else if(c<EPS){t=0;s=Math.max(0,Math.min(1,-d/a));}
  else{
    const D=a*c-b*b;
    let sN,sD=D,tN,tD=D;
    if(D<EPS){sN=0;sD=1;tN=e;tD=c;}
    else{
      sN=b*e-c*d;
      tN=a*e-b*d;
      if(sN<0){sN=0;tN=e;tD=c;}
      else if(sN>sD){sN=sD;tN=e+b;tD=c;}
    }
    if(tN<0){
      tN=0;
      if(-d<0)sN=0;
      else if(-d>a)sN=sD;
      else{sN=-d;sD=a;}
    }else if(tN>tD){
      tN=tD;
      if(-d+b<0)sN=0;
      else if(-d+b>a)sN=sD;
      else{sN=-d+b;sD=a;}
    }
    s=Math.abs(sN)<EPS?0:sN/sD;
    t=Math.abs(tN)<EPS?0:tN/tD;
  }
  const pa=addScaled(p0,u,s),pb=addScaled(q0,v,t),dif=sub(pa,pb);
  return {a:pa,b:pb,distance:Math.hypot(...dif)};
}
