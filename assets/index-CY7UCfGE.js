var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,k=1027,A=1028,ee=1029,j=1030,te=1031,M=1033,N=33776,P=33777,ne=33778,re=33779,ie=35840,ae=35841,oe=35842,se=35843,ce=36196,le=37492,ue=37496,de=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,F=37812,I=37813,L=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,R=36286,Me=2300,Ne=2301,Pe=2302,z=2303,Fe=2400,Ie=2401,B=2402,Le=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Qe(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function H(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,V(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function st(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ut(e,t,n){return e===t?0:(n-e)/(t-e)}function dt(e,t,n){return(1-n)*e+n*t}function ft(e,t,n,r){return dt(e,t,1-Math.exp(-n*r))}function pt(e,t=1){return t-Math.abs(ct(e,t*2)-t)}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function gt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _t(e,t){return e+Math.random()*(t-e)}function vt(e){return e*(.5-Math.random())}function yt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bt(e){return e*it}function xt(e){return e*at}function St(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ct(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function wt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Tt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Et(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dt(e,t){if(t.constructor===Float32Array)return e;let n=Et(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ot(e,t){if(t.constructor===Float32Array)return e;let n=Et(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var kt={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:st,euclideanModulo:ct,mapLinear:lt,inverseLerp:ut,lerp:dt,damp:ft,pingpong:pt,smoothstep:mt,smootherstep:ht,randInt:gt,randFloat:_t,randFloatSpread:vt,seededRandom:yt,degToRad:bt,radToDeg:xt,isPowerOfTwo:St,ceilPowerOfTwo:Ct,floorPowerOfTwo:wt,setQuaternionFromProperEuler:Tt,normalize:Ot,denormalize:Dt},U=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},W=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return At.copy(this).projectOnVector(e),this.sub(At)}reflect(e){return this.sub(At.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},At=new G,jt=new W,Mt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return H(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return H(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return H(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new Mt,Pt=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Lt=It();function Rt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bt,Vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bt===void 0&&(Bt=qe(`canvas`)),Bt.width=e.width,Bt.height=e.height;let t=Bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rt(t[e]/255)*255):t[e]=Rt(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ht=0,Ut=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wt(r[t].image)):e.push(Wt(r[t]))}else e=Wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var Gt=0,Kt=new G,qt=class e extends tt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=D,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ot(),this.name=``,this.source=new Ut(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kt).x}get height(){return this.source.getSize(Kt).y}get depth(){return this.source.getSize(Kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=300,qt.DEFAULT_ANISOTROPY=1;var Jt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new qt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ut(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xt=class extends Yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zt=class extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qt=class extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$t=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new G,tn=new $t,nn=new G(0,0,0),rn=new G(1,1,1),an=new G,on=new G,sn=new G,cn=new $t,ln=new W,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-st(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fn=0,pn=new G,mn=new W,hn=new $t,gn=new G,_n=new G,vn=new G,yn=new W,bn=new G(1,0,0),xn=new G(0,1,0),Sn=new G(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new un,r=new W,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Mt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Qe(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):Qe(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new G(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Fn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=ct(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=jn[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}copyLinearToSRGB(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Lt.workingToColorSpace(In.copy(this),e),Math.round(st(In.r*255,0,255))*65536+Math.round(st(In.g*255,0,255))*256+Math.round(st(In.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,i=In.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Re){Lt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=dt(Mn.h,Nn.h,t),r=dt(Mn.s,Nn.s,t),i=dt(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Fn;Fn.NAMES=jn;var Ln=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new G,zn=new G,Bn=new G,Vn=new G,Hn=new G,Un=new G,Wn=new G,Gn=new G,Kn=new G,qn=new G,Jn=new Jt,Yn=new Jt,Xn=new Jt,Zn=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new G,new G,new G,new G,new G,new G,new G,new G],er=new G,tr=new Qn,nr=new G,rr=new G,ir=new G,ar=new G,or=new G,sr=new G,cr=new G,lr=new G,ur=new G,dr=new G;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new G,mr=new U,hr=0,gr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=v,this.version=0,this._normalizationScale=e===void 0?void 0:Et(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ot(e,this.array):Math.round(e*t)}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new G,Sr=new G,Cr=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new $t,Er=new Dn,Dr=new G,Or=new Qn,kr=new Qn,Ar=new G,jr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Mt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Qe(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Qe(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let l=new G,u=new G,d=new G,f=new U,p=new U,m=new U,h=new G,g=new G;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new G,b=new G,x=new G,S=new G;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=new G,Nr=new G,Pr=new Mt,Fr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mr.subVectors(n,t).cross(Nr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pr.getNormalMatrix(e),r=this.coplanarPoint(Mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ir=0,Lr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Rr=new G,zr=new G,Br=new G,Vr=new G,Hr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zr.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(zr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Vr.dot(this.direction),s=-Vr.dot(Br),c=Vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zr).addScaledVector(Br,d),f}intersectSphere(e,t){if(e.radius<0)return null;Rr.subVectors(e.center,this.origin);let n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,ne=T-M*D,re=E-N*D,ie=O-M*A,ae=k-N*A,oe=ee-M*te,se=j-N*te,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=P*(ce*D+le*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ur=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Fn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wr=new $t,Gr=new Hr,Kr=new Cr,qr=new G,Jr=new G,Yr=new G,Xr=new G,Zr=new G,Qr=new G,$r=new G,ei=new G,ti=class extends Dn{constructor(e=new jr,t=new Ur){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Zr.fromBufferAttribute(s,e),a?Qr.addScaledVector(Zr,r):Qr.addScaledVector(Zr.sub(t),r))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),Kr.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Kr,qr)===null||Gr.origin.distanceToSquared(qr)>(e.far-e.near)**2)||(Wr.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Wr),(n.boundingBox===null||Gr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ri(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ri(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ri(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ri(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ni(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ei.copy(s),ei.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ei);return l<n.near||l>n.far?null:{distance:l,point:ei.clone(),object:e}}function ri(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Jr),e.getVertexPosition(c,Yr),e.getVertexPosition(l,Xr);let u=ni(e,t,n,r,Jr,Yr,Xr,$r);if(u){let e=new G;Zn.getBarycoord($r,Jr,Yr,Xr,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};Zn.getNormal(Jr,Yr,Xr,t.normal),u.face=t,u.barycoord=e}return u}var ii=class extends qt{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ai=new Cr,oi=new U(.5,.5),si=new G,ci=class{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,i=new Fr,a=new Fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476+oi.distanceTo(e.center),ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(si.x=r.normal.x>0?e.max.x:e.min.x,si.y=r.normal.y>0?e.max.y:e.min.y,si.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(si)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},li=new $t,ui=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];li.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ci),n[e].setFromProjectionMatrix(li,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ci),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},di=class extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Fn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fi=new G,pi=new G,mi=new $t,hi=new Hr,gi=new Cr,_i=new G,vi=new G,yi=class extends Dn{constructor(e=new jr,t=new di){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)fi.fromBufferAttribute(t,e-1),pi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=fi.distanceTo(pi);e.setAttribute(`lineDistance`,new yr(n,1))}else V(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere),gi.applyMatrix4(r),gi.radius+=i,e.ray.intersectsSphere(gi)===!1)return;mi.copy(r).invert(),hi.copy(e.ray).applyMatrix4(mi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=bi(this,e,hi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=bi(this,e,hi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=bi(this,e,hi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=bi(this,e,hi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function bi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(fi.fromBufferAttribute(s,i),pi.fromBufferAttribute(s,a),n.distanceSqToSegment(fi,pi,_i,vi)>r)return;_i.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(_i);if(!(c<t.near||c>t.far))return{distance:c,point:vi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var xi=class extends qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},K=class extends qt{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=O,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ut(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},q=class extends K{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=O){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Si=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ci=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ti=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ei(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(J(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(J(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Di(e){let t={};for(let n=0;n<e.length;n++){let r=Ei(e[n]);for(let e in r)t[e]=r[e]}return t}function J(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Oi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ki(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}var Ai={clone:Ei,merge:Di},ji=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ni=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ji,this.fragmentShader=Mi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Oi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Fn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pi=class extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Fi=class extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Fn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Li=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ri(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Vi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case B:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case B:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Hi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ui=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class extends Bi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=qi(n,t,g,y,r);i[p]=Gi(x,o,_,b,m)}return i}};function Gi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ki(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function qi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Gi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ki(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ji=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ri(t,this.TimeBufferType),this.values=Ri(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ri(e.times,Array),values:Ri(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),zi(e.settings)&&(n.settings={inTangents:Ri(e.settings.inTangents,Array),outTangents:Ri(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ui(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case z:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return z}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;zi(this.settings)&&(Yi(this.settings.inTangents,e),Yi(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;zi(this.settings)&&(Xi(this.settings.inTangents,e),Xi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Qe(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Qe(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Qe(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Qe(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,zi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Yi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Xi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ji.prototype.ValueTypeName=``,Ji.prototype.TimeBufferType=Float32Array,Ji.prototype.ValueBufferType=Float32Array,Ji.prototype.DefaultInterpolation=Ne;var Zi=class extends Ji{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName=`bool`,Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=Me,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};Qi.prototype.ValueTypeName=`color`;var $i=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};$i.prototype.ValueTypeName=`number`;var ea=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)W.slerpFlat(i,0,a,c-o,a,c,s);return i}},ta=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName=`quaternion`,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Ji{constructor(e,t,n){super(e,t,n)}};na.prototype.ValueTypeName=`string`,na.prototype.ValueBufferType=Array,na.prototype.DefaultInterpolation=Me,na.prototype.InterpolantFactoryMethodLinear=void 0,na.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};ra.prototype.ValueTypeName=`vector`;var ia=class extends Dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Fn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},aa=class extends ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},oa=new $t,sa=new G,ca=new G,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ci,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sa.setFromMatrixPosition(e.matrixWorld),t.position.copy(sa),ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ca),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(oa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ua=new G,da=new W,fa=new G,pa=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,da,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,fa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,da,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ma=new G,ha=new U,ga=new U,_a=class extends pa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ma.x,ma.y).multiplyScalar(-e/ma.z),ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ma.x,ma.y).multiplyScalar(-e/ma.z)}getViewSize(e,t){return this.getViewBounds(e,ha,ga),t.subVectors(ga,ha)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},va=class extends pa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ya=class extends la{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new ya}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xa=-90,Sa=1,Ca=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _a(xa,Sa,e,t);r.layers=this.layers,this.add(r);let i=new _a(xa,Sa,e,t);i.layers=this.layers,this.add(i);let a=new _a(xa,Sa,e,t);a.layers=this.layers,this.add(a);let o=new _a(xa,Sa,e,t);o.layers=this.layers,this.add(o);let s=new _a(xa,Sa,e,t);s.layers=this.layers,this.add(s);let c=new _a(xa,Sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wa=class extends _a{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ta=`\\[\\]\\.:\\/`,Ea=RegExp(`[\\[\\]\\.:\\/]`,`g`),Da=`[^\\[\\]\\.:\\/]`,Oa=`[^`+Ta.replace(`\\.`,``)+`]`,ka=`((?:WC+[\\/:])*)`.replace(`WC`,Da),Aa=`(WCOD+)?`.replace(`WCOD`,Oa),ja=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Da),Ma=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Da),Na=RegExp(`^`+ka+Aa+ja+Ma+`$`),Pa=[`material`,`materials`,`bones`,`map`],Fa=class{constructor(e,t,n){let r=n||Ia.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ia=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ea,``)}static parseTrackName(e){let t=Na.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Pa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Qe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Qe(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Qe(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Qe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Qe(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Qe(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Qe(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Qe(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Qe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Qe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ia.Composite=Fa,Ia.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ia.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ia.prototype.GetterByBindingType=[Ia.prototype._getValue_direct,Ia.prototype._getValue_array,Ia.prototype._getValue_arrayElement,Ia.prototype._getValue_toArray],Ia.prototype.SetterByBindingTypeAndVersioning=[[Ia.prototype._setValue_direct,Ia.prototype._setValue_direct_setNeedsUpdate,Ia.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ia.prototype._setValue_array,Ia.prototype._setValue_array_setNeedsUpdate,Ia.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ia.prototype._setValue_arrayElement,Ia.prototype._setValue_arrayElement_setNeedsUpdate,Ia.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ia.prototype._setValue_fromArray,Ia.prototype._setValue_fromArray_setNeedsUpdate,Ia.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var La=new $t,Ra=class{constructor(e,t,n=0,r=1/0){this.ray=new Hr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new dn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return La.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(La),this}intersectObject(e,t=!0,n=[]){return Ba(e,this,n,t),n.sort(za),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ba(e[r],this,n,t);return n.sort(za),n}};function za(e,t){return e.distance-t.distance}function Ba(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ba(r[e],t,n,!0)}}var Va=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=st(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Ha=class extends tt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ua(e,t,n,r){let i=Wa(r);switch(n){case T:return e*t;case A:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case D:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case se:return Math.max(e,16)*Math.max(t,8)/4;case ie:case oe:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case F:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case I:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case L:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case R:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Wa(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ga(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ka(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var qa={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new Fn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Fn(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Ja={basic:{uniforms:Di([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:qa.meshbasic_vert,fragmentShader:qa.meshbasic_frag},lambert:{uniforms:Di([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new Fn(0)},envMapIntensity:{value:1}}]),vertexShader:qa.meshlambert_vert,fragmentShader:qa.meshlambert_frag},phong:{uniforms:Di([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new Fn(0)},specular:{value:new Fn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qa.meshphong_vert,fragmentShader:qa.meshphong_frag},standard:{uniforms:Di([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new Fn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qa.meshphysical_vert,fragmentShader:qa.meshphysical_frag},toon:{uniforms:Di([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new Fn(0)}}]),vertexShader:qa.meshtoon_vert,fragmentShader:qa.meshtoon_frag},matcap:{uniforms:Di([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:qa.meshmatcap_vert,fragmentShader:qa.meshmatcap_frag},points:{uniforms:Di([Y.points,Y.fog]),vertexShader:qa.points_vert,fragmentShader:qa.points_frag},dashed:{uniforms:Di([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qa.linedashed_vert,fragmentShader:qa.linedashed_frag},depth:{uniforms:Di([Y.common,Y.displacementmap]),vertexShader:qa.depth_vert,fragmentShader:qa.depth_frag},normal:{uniforms:Di([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:qa.meshnormal_vert,fragmentShader:qa.meshnormal_frag},sprite:{uniforms:Di([Y.sprite,Y.fog]),vertexShader:qa.sprite_vert,fragmentShader:qa.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qa.background_vert,fragmentShader:qa.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:qa.backgroundCube_vert,fragmentShader:qa.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qa.cube_vert,fragmentShader:qa.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qa.equirect_vert,fragmentShader:qa.equirect_frag},distance:{uniforms:Di([Y.common,Y.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qa.distance_vert,fragmentShader:qa.distance_frag},shadow:{uniforms:Di([Y.lights,Y.fog,{color:{value:new Fn(0)},opacity:{value:1}}]),vertexShader:qa.shadow_vert,fragmentShader:qa.shadow_frag}};Ja.physical={uniforms:Di([Ja.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Fn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Fn(0)},specularColor:{value:new Fn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:qa.meshphysical_vert,fragmentShader:qa.meshphysical_frag};var Ya={r:0,b:0,g:0},Xa=new $t,Za=new Mt;Za.set(-1,0,0,0,1,0,0,0,1);function Qa(e,t,n,r,i,a){let o=new Fn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ti(new Ci(1,1,1),new Ni({name:`BackgroundCubeMaterial`,uniforms:Ei(Ja.backgroundCube.uniforms),vertexShader:Ja.backgroundCube.vertexShader,fragmentShader:Ja.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xa.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Za),l.material.toneMapped=Lt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ti(new wi(2,2),new Ni({name:`BackgroundMaterial`,uniforms:Ei(Ja.background.uniforms),vertexShader:Ja.background.vertexShader,fragmentShader:Ja.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ya,ki(e)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function $a(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function eo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function to(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&V(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function no(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fr,s=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ro=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),i=new Ni({name:`CubemapFromEquirect`,uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ti(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new Ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},io=256,ao=3,oo=20,so=256,co=16,lo=3,uo=new G,fo=new Fn,po=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ca(1,10,null),this._boxMesh=new ti(new Ci(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=uo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(fo));let h=new Ca(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(io,wt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?io:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=mo(e,!1,!1),n=Math.log2(e)-ao;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=go(),this._integrationMaterial=_o());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/co);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-lo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(so*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function mo(e,t,n){return new ro(e,{minFilter:d,generateMipmaps:t,type:y,colorSpace:ze,depthBuffer:n})}function ho(e,t,n){return new Ni({name:e,uniforms:t,vertexShader:qa.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function go(){return ho(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${so}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _o(){return ho(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:co}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vo(){return ho(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${oo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function yo(){return ho(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function bo(){return ho(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ro(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new po(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new po(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function So(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&H(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Co(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?vr:_r)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function wo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function To(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Qe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Eo(e,t,n){let r=new WeakMap,i=new Jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Zt(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Do(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Oo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ko(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new jr;u.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let d=new Pi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ti(u,d),p=new va(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new Xt(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new K(t,n),a===!0&&(l.format=k,l.type=S)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Lt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Oo[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Ao=new qt,jo=new K(1,1),Mo=new q(1),No=new Zt,Po=new Qt,Fo=new xi,Io=[],Lo=[],Ro=new Float32Array(16),zo=new Float32Array(9),Bo=new Float32Array(4);function Vo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Io[i];if(a===void 0&&(a=new Float32Array(i),Io[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ho(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Uo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Wo(e,t){let n=Lo[t];n===void 0&&(n=new Int32Array(t),Lo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Go(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ho(n,t))return;e.uniform2fv(this.addr,t),Uo(n,t)}}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ho(n,t))return;e.uniform3fv(this.addr,t),Uo(n,t)}}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ho(n,t))return;e.uniform4fv(this.addr,t),Uo(n,t)}}function Yo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ho(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Uo(n,t)}else{if(Ho(n,r))return;Bo.set(r),e.uniformMatrix2fv(this.addr,!1,Bo),Uo(n,r)}}function Xo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ho(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Uo(n,t)}else{if(Ho(n,r))return;zo.set(r),e.uniformMatrix3fv(this.addr,!1,zo),Uo(n,r)}}function Zo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ho(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Uo(n,t)}else{if(Ho(n,r))return;Ro.set(r),e.uniformMatrix4fv(this.addr,!1,Ro),Uo(n,r)}}function Qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ho(n,t))return;e.uniform2iv(this.addr,t),Uo(n,t)}}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ho(n,t))return;e.uniform3iv(this.addr,t),Uo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ho(n,t))return;e.uniform4iv(this.addr,t),Uo(n,t)}}function ns(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ho(n,t))return;e.uniform2uiv(this.addr,t),Uo(n,t)}}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ho(n,t))return;e.uniform3uiv(this.addr,t),Uo(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ho(n,t))return;e.uniform4uiv(this.addr,t),Uo(n,t)}}function os(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?os(jo):Ao,n.setTexture2D(t||a,i)}function cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Po,i)}function ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?os(Mo):Fo,n.setTextureCube(t||a,i)}function us(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||No,i)}function ds(e){switch(e){case 5126:return Go;case 35664:return Ko;case 35665:return qo;case 35666:return Jo;case 35674:return Yo;case 35675:return Xo;case 35676:return Zo;case 5124:case 35670:return Qo;case 35667:case 35671:return $o;case 35668:case 35672:return es;case 35669:case 35673:return ts;case 5125:return ns;case 36294:return rs;case 36295:return is;case 36296:return as;case 35678:case 36198:case 36298:case 36306:case 35682:return ss;case 35679:case 36299:case 36307:return cs;case 35680:case 36300:case 36308:case 36293:return ls;case 36289:case 36303:case 36311:case 36292:return us}}function fs(e,t){e.uniform1fv(this.addr,t)}function ps(e,t){let n=Vo(t,this.size,2);e.uniform2fv(this.addr,n)}function ms(e,t){let n=Vo(t,this.size,3);e.uniform3fv(this.addr,n)}function hs(e,t){let n=Vo(t,this.size,4);e.uniform4fv(this.addr,n)}function gs(e,t){let n=Vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _s(e,t){let n=Vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vs(e,t){let n=Vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ys(e,t){e.uniform1iv(this.addr,t)}function bs(e,t){e.uniform2iv(this.addr,t)}function xs(e,t){e.uniform3iv(this.addr,t)}function Ss(e,t){e.uniform4iv(this.addr,t)}function Cs(e,t){e.uniform1uiv(this.addr,t)}function ws(e,t){e.uniform2uiv(this.addr,t)}function Ts(e,t){e.uniform3uiv(this.addr,t)}function Es(e,t){e.uniform4uiv(this.addr,t)}function Ds(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?os(jo):Ao;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Os(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Po,a[e])}function ks(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?os(Mo):Fo;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function As(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||No,a[e])}function js(e){switch(e){case 5126:return fs;case 35664:return ps;case 35665:return ms;case 35666:return hs;case 35674:return gs;case 35675:return _s;case 35676:return vs;case 5124:case 35670:return ys;case 35667:case 35671:return bs;case 35668:case 35672:return xs;case 35669:case 35673:return Ss;case 5125:return Cs;case 36294:return ws;case 36295:return Ts;case 36296:return Es;case 35678:case 36198:case 36298:case 36306:case 35682:return Ds;case 35679:case 36299:case 36307:return Os;case 35680:case 36300:case 36308:case 36293:return ks;case 36289:case 36303:case 36311:case 36292:return As}}var Ms=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ds(t.type)}},Ns=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=js(t.type)}},Ps=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fs=/(\w+)(\])?(\[|\.)?/g;function Is(e,t){e.seq.push(t),e.map[t.id]=t}function Ls(e,t,n){let r=e.name,i=r.length;for(Fs.lastIndex=0;;){let a=Fs.exec(r),o=Fs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Is(n,l===void 0?new Ms(s,e,t):new Ns(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ps(s),Is(n,e)),n=e}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ls(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bs=37297,Vs=0;function Hs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Us=new Mt;function Ws(e){Lt._getMatrix(Us,Lt.workingColorSpace,e);let t=`mat3( ${Us.elements.map(e=>e.toFixed(4))} )`;switch(Lt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hs(e.getShaderSource(t),r)}return i}function Ks(e,t){let n=Ws(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var qs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Js(e,t){let n=qs[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ys=new G;function Xs(){return Lt.getLuminanceCoefficients(Ys),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ys.x.toFixed(4)}, ${Ys.y.toFixed(4)}, ${Ys.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ec).join(`
`)}function Qs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $s(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ec(e){return e!==``}function tc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rc=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(e){return e.replace(rc,ac)}function ac(e,t){let n=qa[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ic(n)}var oc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(e){return e.replace(oc,cc)}function cc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function lc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var uc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function dc(e){return uc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var fc={302:`ENVMAP_MODE_REFRACTION`};function pc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:fc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var mc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function hc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:mc[e.combine]||`ENVMAP_BLENDING_NONE`}function gc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=dc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=pc(n),d=hc(n),f=Zs(n),p=Qs(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ec).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ec).join(`
`),g.length>0&&(g+=`
`)):(h=[lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ec).join(`
`),g=[lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:qa.tonemapping_pars_fragment,n.toneMapping===0?``:Js(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,qa.colorspace_pars_fragment,Ks(`linearToOutputTexel`,n.outputColorSpace),Xs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ec).join(`
`)),o=ic(o),o=tc(o,n),o=nc(o,n),s=ic(s),s=tc(s,n),s=nc(s,n),o=sc(o),s=sc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=zs(i,i.VERTEX_SHADER,v),x=zs(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Gs(i,b,`vertex`),n=Gs(i,x,`fragment`);Qe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Rs(i,m),w=$s(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Bs)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vs++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var _c=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yc(e),t.set(e,n)),n}},yc=class{constructor(e){this.id=_c++,this.code=e,this.usedTimes=0}};function bc(e){return e===1030||e===37490||e===36285}function xc(e,t,n,r,i,a){let o=new dn,s=new vc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ja[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,N=!!i.matcap,P=!!b,ne=P&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,F=de&&!!i.anisotropyMap,I=fe&&!!i.clearcoatMap,L=fe&&!!i.clearcoatNormalMap,ye=fe&&!!i.clearcoatRoughnessMap,be=pe&&!!i.diffuseRoughnessMap,xe=ge&&!!i.iridescenceMap,Se=ge&&!!i.iridescenceThicknessMap,Ce=_e&&!!i.sheenColorMap,we=_e&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ve&&!!i.transmissionMap,ke=ve&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,R=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let z=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:N,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?z.length-1:null,envMapSize:ne?z[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&bc(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:F,clearcoat:fe,clearcoatMap:I,clearcoatNormalMap:L,clearcoatRoughnessMap:ye,diffuseRoughness:pe,diffuseRoughnessMap:be,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:_e,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ve,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:R,alphaHash:Me,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:le&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:F&&p(i.anisotropyMap.channel),clearcoatMapUv:I&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:L&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(i.sheenRoughnessMap.channel),specularMapUv:Te&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:De&&p(i.specularIntensityMap.channel),transmissionMapUv:Oe&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:je&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||je),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Lt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ja[t];n=Ai.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new gc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Sc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Cc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Tc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Cc),r.length>1&&r.sort(t||wc),i.length>1&&i.sort(t||wc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ec(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Tc,e.set(t,[i])):n>=r.length?(i=new Tc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Dc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new Fn};break;case`SpotLight`:n={position:new G,direction:new G,color:new Fn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new Fn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new Fn,groundColor:new Fn};break;case`RectAreaLight`:n={color:new Fn,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function Oc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var kc=0;function Ac(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function jc(e){let t=new Dc,n=Oc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ac);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=kc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Mc(e){let t=new jc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Nc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Mc(e),t.set(n,[a])):r>=i.length?(a=new Mc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Pc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ic=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Lc=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Rc=new $t,zc=new G,Bc=new G;function Vc(e,t,n){let r=new ci,i=new U,a=new U,s=new Jt,c=new Ii,u=new Li,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Pc,fragmentShader:Fc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new jr;g.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ti(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){V(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Xt(i.x,i.y,{format:j,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new K(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=O,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new ro(i.x),p.map.depthTexture=new q(i.x,_)):(p.map=new Xt(i.x,i.y),p.map.depthTexture=new K(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=O,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);let S=p.camera.layers.mask&4294967294?p.camera.layers:c.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),zc.setFromMatrixPosition(d.matrixWorld),e.position.copy(zc),Bc.copy(e.position),Bc.add(Ic[t]),e.up.copy(Lc[t]),e.lookAt(Bc),e.updateMatrixWorld(),n.makeTranslation(-zc.x,-zc.y,-zc.z),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Rc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,c,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(i.x,i.y,{format:j,type:y}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Hc(e,t){function n(){let t=!1,n=new Jt,r=null,i=new Jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Fn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=M>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Jt().fromArray(re),oe=new Jt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),F(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Qe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Qe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Qe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Qe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),L(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function F(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function I(t){t!==k&&(te&&e.lineWidth(t),k=t)}function L(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function ye(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Se(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function R(){try{e.texImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function z(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ie(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function B(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Fn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:F,setLineWidth:I,setPolygonOffset:L,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:R,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Pe,viewport:z,reset:B}}function Uc(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function D(e,t,n){let r=1,i=B(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Be:Lt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function P(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ne(e){ie(e.target)}function re(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,ne),P(e),se(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ae(e){e.removeEventListener(`dispose`,re),P(e),le(e)}function oe(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}C.clear(),b.clear()}function se(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ce(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ce(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function le(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ie(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=p.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(t,r){let i=f.get(t);if(t.isVideoTexture&&Fe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function _e(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?we(i,t,r):(t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r))}function ve(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?we(i,t,r):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function F(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?Te(i,t,r):n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let I={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},L={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,I[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,I[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,I[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,L[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,L[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne),N(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=he(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Se(n.start,r.width,4),c=Se(t.start,r.width,4);n.start<=i+1&&a===c&&Se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function we(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=xe(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=Lt.getPrimaries(Lt.workingColorSpace),i=r.colorSpace===``?null:Lt.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=D(r.image,!1,p.maxTextureSize);t=Ie(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=j(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);be(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=M(r,t);if(r.isDepthTexture)d=te(r.format===k,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&Ce(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023){if(l!==null){if(g){if(v){if(r.layerUpdates.size>0){let t=Ua(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(r.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(r.layerUpdates.size>0){let i=Ua(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data)}else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=B(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=B(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);O(r)&&r.mipmapsAutoUpdate===!0&&A(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function Te(t,r,i){if(r.image.length!==6)return;let a=xe(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=Lt.getPrimaries(Lt.workingColorSpace),c=r.colorSpace===``?null:Lt.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=D(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=Ie(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=j(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=M(r,h);be(e.TEXTURE_CUBE_MAP,r);let C;if(r.isDepthTexture){if(v=te(r.format===k,r.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=B(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(r)&&r.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function Ee(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=j(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Pe(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=j(a.internalFormat,o,s,a.normalized,a.colorSpace);z(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=f.get(r.depthTexture);o.__renderTarget=r;let s=a?r.depthTexture.image[0]:r.depthTexture.image;o.__webglTexture&&s.width===r.width&&s.height===r.height||(s.width=r.width,s.height=r.height,r.depthTexture.needsUpdate=!0),a?F(r.depthTexture,0):ge(r.depthTexture,0);let c=o.__webglTexture,l=Pe(r),u=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,d=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)z(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(r.depthTexture.format===1027)z(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)for(let e=0;e<6;e++)Oe(r.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Oe(r.__webglFramebuffer[0],t,0):Oe(r.__webglFramebuffer,t,0)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),De(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),De(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){let i=f.get(t);n!==void 0&&Ee(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&ke(t)}function je(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,re),N(t);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&z(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=j(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),De(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),be(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)Ee(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else Ee(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(r)?A(e.TEXTURE_CUBE_MAP):r.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),be(c,a),Ee(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),O(a)&&A(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),be(o,r),r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)Ee(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else Ee(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);O(r)?A(o):r.mipmaps.length>0&&e.texParameteri(o,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&ke(t)}function R(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(O(i)&&i.mipmapsAutoUpdate===!0){let t=ee(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),A(t),n.unbindTexture()}}}let Me=[];function Ne(t){if(t.samples>0){if(z(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(Me.length=0,Me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Me.push(s),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function z(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Fe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Lt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Qe(`WebGLTextures: Unsupported texture color space:`,n)),t}function B(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=F,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=z,this.dispose=oe}function Wc(e,t){function n(n,r=``){let i,a=Lt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Gc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Si(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ni({vertexShader:Gc,fragmentShader:Kc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jc=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new qc,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new U,E=null,A=null,ee=new _a;ee.viewport=new Jt;let j=new _a;j.viewport=new Jt;let te=[ee,j],M=new wa,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function ne(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}N=null,P=null,g.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?k:O,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Xt(d.textureWidth,d.textureHeight,{format:D,type:f,depthTexture:new K(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Xt(p.framebufferWidth,p.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ae(M,i);for(let e=0;e<a.length;e++)ae(a[e],i);M.projectionMatrix.copy(ee.projectionMatrix),M.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,M,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=te[n];o===void 0&&(o=new _a,o.layers.enable(n),o.viewport=new Jt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Si,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let le=new Ga;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Yc=new $t,Xc=new Mt;Xc.set(-1,0,0,0,1,0,0,0,1);function Zc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ki(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Yc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Xc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Qc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var $c=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),el=null;function tl(){return el===null&&(el=new ii($c,16,16,j,y),el.name=`DFG_LUT`,el.minFilter=l,el.magFilter=l,el.wrapS=i,el.wrapT=i,el.generateMipmaps=!1,el.needsUpdate=!0),el}var nl=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([M,te,ee]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,A=[],j=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Re;let se=0,ce=0,le=null,ue=-1,de=null,fe=new Jt,pe=new Jt,me=null,he=new Fn(0),ge=0,_e=t.width,ve=t.height,F=1,I=null,L=null,ye=new Jt(0,0,_e,ve),be=new Jt(0,0,_e,ve),xe=!1,Se=new ci,Ce=new ui,we=!1,Te=!1,Ee=new $t,De=new G,Oe=new Jt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return le===null?F:1}let R=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,z,Fe,Ie,B,Le,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,H,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),R===null){let t=`webgl2`;if(R=Me(t,e),R===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe(`WebGLRenderer: `+e.message),e}function at(){Ne=new So(R),Ne.init(),nt=new Wc(R,Ne),Pe=new to(R,Ne,e,nt),z=new Hc(R,Ne),Pe.reversedDepthBuffer&&p&&z.buffers.depth.setReversed(!0),ie=R.createFramebuffer(),ae=R.createFramebuffer(),oe=R.createFramebuffer(),Fe=new To(R),Ie=new Sc,B=new Uc(R,Ne,z,Ie,Pe,nt,Fe),Le=new xo(P),ze=new Ka(R),rt=new $a(R,ze),Be=new Co(R,ze,Fe,rt),Ve=new Do(R,Be,ze,rt,Fe),H=new Eo(R,Pe,B),qe=new no(Ie),He=new xc(P,Le,Ne,Pe,rt,qe),Ue=new Zc(P,Ie),Ge=new Ec,Ke=new Nc(Ne),Ze=new Qa(P,Le,z,Ve,g,s),Ye=new Vc(P,Ve,Pe),it=new Qc(R,Fe,Pe,z),et=new eo(R,Ne,Fe),tt=new wo(R,Ne,Fe),Fe.programs=He.programs,P.capabilities=Pe,P.extensions=Ne,P.properties=Ie,P.renderLists=Ge,P.shadowMap=Ye,P.state=z,P.info=Fe}v!==1009&&(N=new ko(v,t.width,t.height,o,r,i));let ot=new Jc(P,R);this.xr=ot,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){ot.isPresenting?V(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*F,ve*F).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)Qe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.viewport(fe.copy(ye).multiplyScalar(je()).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.scissor(pe.copy(be).multiplyScalar(je()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){I=e},this.setTransparentSort=function(e){L=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(le!==null){let t=le.texture.format;e=C.has(t)}if(e){let e=le.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ze.dispose(),Ge.dispose(),Ke.dispose(),B.dispose(),Ie.dispose(),Le.dispose(),Ve.dispose(),Be.dispose(),rt.dispose(),it.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),ne=!0}function ct(){Xe(`WebGLRenderer: Context Restored.`),ne=!1;let e=Fe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;at(),Fe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function lt(e){Qe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),Ie.remove(e)}function ft(e){let t=Ie.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*je()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*je()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=Ie.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),we===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),k=Ke.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),re!==null&&re.updateLights(k.state.lightsArray),Te=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Te),we===!0&&qe.setGlobalState(this.clippingPlanes,t),re!==null&&Ye.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),k=j.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Ie.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Ga;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Qe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=N!==null&&(le===null||n)&&N.begin(P,le);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,le),k=Ke.get(e,j.length),k.init(t),k.state.textureUnits=B.getTextureUnits(),j.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ce.setFromArrayCamera(t):Se.setFromProjectionMatrix(Ee,We,t.reversedDepth),Te=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Te),O=Ge.get(e,A.length),O.init(),A.push(O),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,P.sortObjects)}yt(e,t,0,P.sortObjects),O.finish(),re!==null&&re.updateLights(k.state.lightsArray),P.sortObjects===!0&&O.sort(I,L),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Ze.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),we===!0&&qe.beginShadows();let i=k.state.shadowsArray;if(Ye.render(i,e,t),we===!0&&qe.endShadows(),(r&&N.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ae&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(O,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ae&&Ze.render(e),bt(O,e,t)}le!==null&&ce===0&&(B.updateMultisampleRenderTarget(le),B.updateRenderTargetMipmap(le)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),rt.resetDefaultState(),ue=-1,de=null,j.pop(),j.length>0?(k=j[j.length-1],B.setTextureUnits(k.state.textureUnits),we===!0&&qe.setGlobalState(P.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,re!==null&&re.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&qe.setGlobalState(P.clippingPlanes,n),r&&z.viewport(fe.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),l=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(he),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&Ze.render(n);let u=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&qe.setGlobalState(P.clippingPlanes,r),St(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}P.setRenderTarget(s,c,l),P.setClearColor(he,ge),p!==void 0&&(r.viewport=p),P.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=ke);let r=Ie.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=He.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Ot(e,s),r.needsLights=W(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=Ie.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=Ie.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t,n,r,i){t.isScene!==!0&&(t=ke),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=le===null?P.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Lt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Ie.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==de)){let t=e===de&&r.id===ue;qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Et(r,t,i,s,h):Tt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),C||de!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,B),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,B),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,B),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,B));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&H.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=tl()),w){if(E.setValue(R,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&U(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,F,ve,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Rs.upload(R,Dt(v),O,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rs.upload(R,Dt(v),O,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,S),it.bind(n,S)}}return S}function U(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function W(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(e,t,n){let r=Ie.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Ie.get(e.texture).__webglTexture=t,Ie.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Ie.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){le=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=Ie.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,z.viewport(fe),z.scissor(pe),z.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,Ie.get(e.texture).__webglTexture,Ie.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Ie.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Ie.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?Ie.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(ye).multiplyScalar(F).floor(),pe.copy(be).multiplyScalar(F).floor(),me=xe;if(n!==0&&(r=ie),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(fe),z.scissor(pe),z.setScissorTest(me),i){let r=Ie.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Ie.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Ie.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function At(e){let t=Ie.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Ie.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=le===null?null:Ie.get(le).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Ie.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=le===null?null:Ie.get(le).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await $e(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Ie.get(e),r=Ie.get(t),h=Ie.get(n.__renderTarget),g=Ie.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Ie.has(e)){let n=Ie.get(e),r=Ie.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,ae),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){Ie.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){se=0,ce=0,le=null,z.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}},rl={type:`change`},il={type:`start`},al={type:`end`},ol=new Hr,sl=new Fr,cl=Math.cos(70*kt.DEG2RAD),ll=new G,ul=2*Math.PI,dl={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fl=1e-6,pl=class extends Ha{constructor(e,r=null){super(e,r),this.state=dl.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:t.ROTATE,MIDDLE:t.DOLLY,RIGHT:t.PAN},this.touches={ONE:n.ROTATE,TWO:n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new W,this._lastTargetPosition=new G,this._quat=new W().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Va,this._sphericalDelta=new Va,this._scale=1,this._panOffset=new G,this._rotateStart=new U,this._rotateEnd=new U,this._rotateDelta=new U,this._panStart=new U,this._panEnd=new U,this._panDelta=new U,this._dollyStart=new U,this._dollyEnd=new U,this._dollyDelta=new U,this._dollyDirection=new G,this._mouse=new U,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hl.bind(this),this._onPointerDown=ml.bind(this),this._onPointerUp=gl.bind(this),this._onContextMenu=Cl.bind(this),this._onMouseWheel=yl.bind(this),this._onKeyDown=bl.bind(this),this._onTouchStart=xl.bind(this),this._onTouchMove=Sl.bind(this),this._onMouseDown=_l.bind(this),this._onMouseMove=vl.bind(this),this._interceptControlDown=wl.bind(this),this._interceptControlUp=Tl.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=dl.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rl),this.update(),this.state=dl.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ll.copy(t).sub(this.target),ll.applyQuaternion(this._quat),this._spherical.setFromVector3(ll),this.autoRotate&&this.state===dl.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=ul:n>Math.PI&&(n-=ul),r<-Math.PI?r+=ul:r>Math.PI&&(r-=ul),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(ll.setFromSpherical(this._spherical),ll.applyQuaternion(this._quatInverse),t.copy(this.target).add(ll),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=ll.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new G(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new G(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=ll.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<cl?this.object.lookAt(this.target):(sl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(sl,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fl||this._lastTargetPosition.distanceToSquared(this.target)>fl?(this.dispatchEvent(rl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?ul/60/60*this.autoRotateSpeed:ul/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ll.setFromMatrixColumn(t,0),ll.multiplyScalar(-e),this._panOffset.add(ll)}_panUp(e,t){this.screenSpacePanning===!0?ll.setFromMatrixColumn(t,1):(ll.setFromMatrixColumn(t,0),ll.crossVectors(this.object.up,ll)),ll.multiplyScalar(e),this._panOffset.add(ll)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ll.copy(r).sub(this.target);let i=ll.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ul*this._rotateDelta.x/t.clientHeight),this._rotateUp(ul*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ul*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ul*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ul*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ul*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ul*this._rotateDelta.x/t.clientHeight),this._rotateUp(ul*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new U,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ml(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function hl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function gl(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(al),this.state=dl.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function _l(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=dl.DOLLY;break;case t.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=dl.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=dl.ROTATE}break;case t.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=dl.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=dl.PAN}break;default:this.state=dl.NONE}this.state!==dl.NONE&&this.dispatchEvent(il)}function vl(e){switch(this.state){case dl.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case dl.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case dl.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function yl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===dl.NONE&&(e.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(al))}function bl(e){this.enabled!==!1&&this._handleKeyDown(e)}function xl(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case n.ROTATE:if(this.enableRotate===!1){this.state=dl.NONE;break}this._handleTouchStartRotate(e),this.state=dl.TOUCH_ROTATE;break;case n.PAN:if(this.enablePan===!1){this.state=dl.NONE;break}this._handleTouchStartPan(e),this.state=dl.TOUCH_PAN;break;default:this.state=dl.NONE}break;case 2:switch(this.touches.TWO){case n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=dl.TOUCH_DOLLY_PAN;break;case n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=dl.TOUCH_DOLLY_ROTATE;break;default:this.state=dl.NONE}break;default:this.state=dl.NONE}this.state!==dl.NONE&&this.dispatchEvent(il)}function Sl(e){switch(this._trackPointer(e),this.state){case dl.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case dl.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case dl.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case dl.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=dl.NONE}}function Cl(e){this.enabled!==!1&&e.preventDefault()}function wl(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Tl(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var El=e(((e,t)=>{t.exports={}})),Dl=(()=>{var e=typeof document<`u`&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<`u`&&(e||=__filename),(function(t){t||={};var t=t===void 0?{}:t,n,r;t.ready=new Promise(function(e,t){n=e,r=t});var i=Object.assign({},t),a=[],o=`./this.program`,s=(e,t)=>{throw t},c=typeof window==`object`,l=typeof importScripts==`function`,u=typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`,d=``;function f(e){return t.locateFile?t.locateFile(e,d):d+e}var p,m,h;function g(e){e instanceof hT||x(`exiting due to exception: `+e)}var _,v,y;u?(d=l?El().dirname(d)+`/`:__dirname+`/`,y=()=>{v||=(_=El(),El())},p=function(e,t){return y(),e=v.normalize(e),_.readFileSync(e,t?void 0:`utf8`)},h=e=>{var t=p(e,!0);return t.buffer||(t=new Uint8Array(t)),t},m=(e,t,n)=>{y(),e=v.normalize(e),_.readFile(e,function(e,r){e?n(e):t(r.buffer)})},process.argv.length>1&&(o=process.argv[1].replace(/\\/g,`/`)),a=process.argv.slice(2),process.on(`uncaughtException`,function(e){if(!(e instanceof hT))throw e}),process.on(`unhandledRejection`,function(e){throw e}),s=(e,t)=>{if(Ee())throw process.exitCode=e,t;g(t),process.exit(e)},t.inspect=function(){return`[Emscripten Module object]`}):(c||l)&&(l?d=self.location.href:typeof document<`u`&&document.currentScript&&(d=document.currentScript.src),e&&(d=e),d=d.indexOf(`blob:`)===0?``:d.substr(0,d.replace(/[?#].*/,``).lastIndexOf(`/`)+1),p=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.send(null),t.responseText},l&&(h=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),m=(e,t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n()},r.onerror=n,r.send(null)});var b=t.print||console.log.bind(console),x=t.printErr||console.warn.bind(console);Object.assign(t,i),i=null,t.arguments&&(a=t.arguments),t.thisProgram&&(o=t.thisProgram),t.quit&&(s=t.quit);var S=4;function C(e){C.shown||={},C.shown[e]||(C.shown[e]=1,x(e))}var w=0,T=e=>{w=e},E=()=>w,D;t.wasmBinary&&(D=t.wasmBinary);var O=t.noExitRuntime||!0;typeof WebAssembly!=`object`&&B(`no native wasm support detected`);var k,A=!1,ee;function j(e,t){e||B(t)}var te=typeof TextDecoder<`u`?new TextDecoder(`utf8`):void 0;function M(e,t,n){t>>>=0;for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.buffer&&te)return te.decode(e.subarray(t,i));for(var a=``;t<i;){var o=e[t++];if(!(o&128))a+=String.fromCharCode(o);else{var s=e[t++]&63;if((o&224)==192)a+=String.fromCharCode((o&31)<<6|s);else{var c=e[t++]&63;if(o=(o&240)==224?(o&15)<<12|s<<6|c:(o&7)<<18|s<<12|c<<6|e[t++]&63,o<65536)a+=String.fromCharCode(o);else{var l=o-65536;a+=String.fromCharCode(55296|l>>10,56320|l&1023)}}}}return a}function N(e,t){return e>>>=0,e?M(ge,e,t):``}function P(e,t,n,r){if(n>>>=0,!(r>0))return 0;for(var i=n,a=n+r-1,o=0;o<e.length;++o){var s=e.charCodeAt(o);if(s>=55296&&s<=57343){var c=e.charCodeAt(++o);s=65536+((s&1023)<<10)|c&1023}if(s<=127){if(n>=a)break;t[n++>>>0]=s}else if(s<=2047){if(n+1>=a)break;t[n++>>>0]=192|s>>6,t[n++>>>0]=128|s&63}else if(s<=65535){if(n+2>=a)break;t[n++>>>0]=224|s>>12,t[n++>>>0]=128|s>>6&63,t[n++>>>0]=128|s&63}else{if(n+3>=a)break;t[n++>>>0]=240|s>>18,t[n++>>>0]=128|s>>12&63,t[n++>>>0]=128|s>>6&63,t[n++>>>0]=128|s&63}}return t[n>>>0]=0,n-i}function ne(e,t,n){return P(e,ge,t,n)}function re(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((r&1023)<<10)|e.charCodeAt(++n)&1023),r<=127?++t:t+=r<=2047?2:r<=65535?3:4}return t}var ie=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0;function ae(e,t){for(var n=e,r=n>>1,i=r+t/2;!(r>=i)&&ve[r>>>0];)++r;if(n=r<<1,n-e>32&&ie)return ie.decode(ge.subarray(e>>>0,n>>>0));for(var a=``,o=0;!(o>=t/2);++o){var s=_e[e+o*2>>>1];if(s==0)break;a+=String.fromCharCode(s)}return a}function oe(e,t,n){if(n===void 0&&(n=2147483647),n<2)return 0;n-=2;for(var r=t,i=n<e.length*2?n/2:e.length,a=0;a<i;++a){var o=e.charCodeAt(a);_e[t>>>1]=o,t+=2}return _e[t>>>1]=0,t-r}function se(e){return e.length*2}function ce(e,t){for(var n=0,r=``;!(n>=t/4);){var i=F[e+n*4>>>2];if(i==0)break;if(++n,i>=65536){var a=i-65536;r+=String.fromCharCode(55296|a>>10,56320|a&1023)}else r+=String.fromCharCode(i)}return r}function le(e,t,n){if(t>>>=0,n===void 0&&(n=2147483647),n<4)return 0;for(var r=t,i=r+n-4,a=0;a<e.length;++a){var o=e.charCodeAt(a);if(o>=55296&&o<=57343){var s=e.charCodeAt(++a);o=65536+((o&1023)<<10)|s&1023}if(F[t>>>2]=o,t+=4,t+4>i)break}return F[t>>>2]=0,t-r}function ue(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&++n,t+=4}return t}function de(e){var t=re(e)+1,n=nf(t);return n&&P(e,he,n,t),n}function fe(e,t){he.set(e,t>>>0)}function pe(e,t,n){for(var r=0;r<e.length;++r)he[t++>>>0]=e.charCodeAt(r);n||(he[t>>>0]=0)}var me,he,ge,_e,ve,F,I,L,ye;function be(e){me=e,t.HEAP8=he=new Int8Array(e),t.HEAP16=_e=new Int16Array(e),t.HEAP32=F=new Int32Array(e),t.HEAPU8=ge=new Uint8Array(e),t.HEAPU16=ve=new Uint16Array(e),t.HEAPU32=I=new Uint32Array(e),t.HEAPF32=L=new Float32Array(e),t.HEAPF64=ye=new Float64Array(e)}t.INITIAL_MEMORY;var xe,Se=[],Ce=[],we=[],Te=[];function Ee(){return O}function De(){if(t.preRun)for(typeof t.preRun==`function`&&(t.preRun=[t.preRun]);t.preRun.length;)Ae(t.preRun.shift());V(Se)}function Oe(){!t.noFSInit&&!U.init.initialized&&U.init(),U.ignorePermissions=!1,wt.init(),V(Ce)}function ke(){if(t.postRun)for(typeof t.postRun==`function`&&(t.postRun=[t.postRun]);t.postRun.length;)R(t.postRun.shift());V(Te)}function Ae(e){Se.unshift(e)}function je(e){Ce.unshift(e)}function R(e){Te.unshift(e)}var Me=0,Ne=null,Pe=null;function z(e){return e}function Fe(e){Me++,t.monitorRunDependencies&&t.monitorRunDependencies(Me)}function Ie(e){if(Me--,t.monitorRunDependencies&&t.monitorRunDependencies(Me),Me==0&&(Ne!==null&&(clearInterval(Ne),Ne=null),Pe)){var n=Pe;Pe=null,n()}}function B(e){t.onAbort&&t.onAbort(e),e=`Aborted(`+e+`)`,x(e),A=!0,ee=1,e+=`. Build with -sASSERTIONS for more info.`;var n=new WebAssembly.RuntimeError(e);throw r(n),n}var Le=`data:application/octet-stream;base64,`;function Re(e){return e.startsWith(Le)}function ze(e){return e.startsWith(`file://`)}var Be=`opencascade.full.wasm`;Re(Be)||(Be=f(Be));function Ve(e){try{if(e==Be&&D)return new Uint8Array(D);if(h)return h(e);throw`both async and sync fetching of the wasm failed`}catch(e){B(e)}}function He(){if(!D&&(c||l)){if(typeof fetch==`function`&&!ze(Be))return fetch(Be,{credentials:`same-origin`}).then(function(e){if(!e.ok)throw`failed to load wasm binary file at '`+Be+`'`;return e.arrayBuffer()}).catch(function(){return Ve(Be)});if(m)return new Promise(function(e,t){m(Be,function(t){e(new Uint8Array(t))},t)})}return Promise.resolve().then(function(){return Ve(Be)})}function Ue(){var e={a:ef};function n(e,n){var r=e.exports;t.asm=r,k=t.asm.xt,be(k.buffer),xe=t.asm.Et,je(t.asm.yt),Ie(`wasm-instantiate`)}Fe(`wasm-instantiate`);function i(e){n(e.instance)}function a(t){return He().then(function(t){return WebAssembly.instantiate(t,e)}).then(function(e){return e}).then(t,function(e){x(`failed to asynchronously prepare wasm: `+e),B(e)})}function o(){return!D&&typeof WebAssembly.instantiateStreaming==`function`&&!Re(Be)&&!ze(Be)&&!u&&typeof fetch==`function`?fetch(Be,{credentials:`same-origin`}).then(function(t){return WebAssembly.instantiateStreaming(t,e).then(i,function(e){return x(`wasm streaming compile failed: `+e),x(`falling back to ArrayBuffer instantiation`),a(i)})}):a(i)}if(t.instantiateWasm)try{return t.instantiateWasm(e,n)}catch(e){return x(`Module.instantiateWasm callback failed with error: `+e),!1}return o().catch(r),{}}var We,Ge,Ke={12467972:(e,n,r,i)=>{t.ctx.getBufferSubData(e,n,ge.subarray(r>>>0,r+i>>>0))}};function qe(){return t.HEAP8.length}function Je(e){console.debug(N(e))}function Ye(e){console.error(N(e))}function Xe(e){console.info(N(e))}function Ze(e){console.warn(N(e))}function V(e){for(;e.length>0;){var n=e.shift();if(typeof n==`function`)n(t);else{var r=n.func;typeof r==`number`?n.arg===void 0?H(r)():H(r)(n.arg):r(n.arg===void 0?null:n.arg)}}}var Qe=[];function H(e){var t=Qe[e];return t||(e>=Qe.length&&(Qe.length=e+1),Qe[e]=t=xe.get(e)),t}function $e(e){if(e instanceof hT||e==`unwind`)return ee;s(1,e)}function et(){var e=Error();if(!e.stack){try{throw Error()}catch(t){e=t}if(!e.stack)return`(no stack trace available)`}return e.stack.toString()}function tt(e,t,n,r){B(`Assertion failed: `+N(e)+`, at: `+[t?N(t):`unknown filename`,n,r?N(r):`unknown function`])}function nt(e,t){H(e)(t)}function rt(e){return nf(e+24)+24}var it=[];function at(e){e.add_ref()}var ot=0;function st(e){var t=new lt(e);return t.get_caught()||(t.set_caught(!0),ot--),t.set_rethrown(!1),it.push(t),at(t),t.get_exception_ptr()}var ct=0;function lt(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){I[this.ptr+4>>>2]=e},this.get_type=function(){return I[this.ptr+4>>>2]},this.set_destructor=function(e){I[this.ptr+8>>>2]=e},this.get_destructor=function(){return I[this.ptr+8>>>2]},this.set_refcount=function(e){F[this.ptr>>>2]=e},this.set_caught=function(e){e=+!!e,he[this.ptr+12>>>0]=e},this.get_caught=function(){return he[this.ptr+12>>>0]!=0},this.set_rethrown=function(e){e=+!!e,he[this.ptr+13>>>0]=e},this.get_rethrown=function(){return he[this.ptr+13>>>0]!=0},this.init=function(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var e=F[this.ptr>>>2];F[this.ptr>>>2]=e+1},this.release_ref=function(){var e=F[this.ptr>>>2];return F[this.ptr>>>2]=e-1,e===1},this.set_adjusted_ptr=function(e){I[this.ptr+16>>>2]=e},this.get_adjusted_ptr=function(){return I[this.ptr+16>>>2]},this.get_exception_ptr=function(){if(df(this.get_type()))return I[this.excPtr>>>2];var e=this.get_adjusted_ptr();return e===0?this.excPtr:e}}function ut(e){return rf(new lt(e).ptr)}function dt(e){if(e.release_ref()&&!e.get_rethrown()){var t=e.get_destructor();t&&H(t)(e.excPtr),ut(e.excPtr)}}function ft(){Z(0),dt(it.pop()),ct=0}function pt(e){throw ct||=e,e}function mt(){var e=ct;if(!e)return T(0),0;var t=new lt(e);t.set_adjusted_ptr(e);var n=t.get_type();if(!n)return T(0),e;for(var r=Array.prototype.slice.call(arguments),i=0;i<r.length;i++){var a=r[i];if(a===0||a===n)break;var o=t.ptr+16;if(uf(a,n,o))return T(a),e}return T(n),e}function ht(){var e=ct;if(!e)return T(0),0;var t=new lt(e);t.set_adjusted_ptr(e);var n=t.get_type();if(!n)return T(0),e;for(var r=Array.prototype.slice.call(arguments),i=0;i<r.length;i++){var a=r[i];if(a===0||a===n)break;var o=t.ptr+16;if(uf(a,n,o))return T(a),e}return T(n),e}function gt(){var e=ct;if(!e)return T(0),0;var t=new lt(e);t.set_adjusted_ptr(e);var n=t.get_type();if(!n)return T(0),e;for(var r=Array.prototype.slice.call(arguments),i=0;i<r.length;i++){var a=r[i];if(a===0||a===n)break;var o=t.ptr+16;if(uf(a,n,o))return T(a),e}return T(n),e}function _t(){var e=ct;if(!e)return T(0),0;var t=new lt(e);t.set_adjusted_ptr(e);var n=t.get_type();if(!n)return T(0),e;for(var r=Array.prototype.slice.call(arguments),i=0;i<r.length;i++){var a=r[i];if(a===0||a===n)break;var o=t.ptr+16;if(uf(a,n,o))return T(a),e}return T(n),e}function vt(){var e=it.pop();e||B(`no exception to throw`);var t=e.excPtr;throw e.get_rethrown()||(it.push(e),e.set_rethrown(!0),e.set_caught(!1),ot++),ct=t,t}function yt(e,t,n){throw new lt(e).init(t,n),ct=e,ot++,e}function bt(){return ot}var xt={isAbs:e=>e.charAt(0)===`/`,splitPath:e=>/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),normalizeArray:(e,t)=>{for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];i===`.`?e.splice(r,1):i===`..`?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift(`..`);return e},normalize:e=>{var t=xt.isAbs(e),n=e.substr(-1)===`/`;return e=xt.normalizeArray(e.split(`/`).filter(e=>!!e),!t).join(`/`),!e&&!t&&(e=`.`),e&&n&&(e+=`/`),(t?`/`:``)+e},dirname:e=>{var t=xt.splitPath(e),n=t[0],r=t[1];return!n&&!r?`.`:(r&&=r.substr(0,r.length-1),n+r)},basename:e=>{if(e===`/`)return`/`;e=xt.normalize(e),e=e.replace(/\/$/,``);var t=e.lastIndexOf(`/`);return t===-1?e:e.substr(t+1)},join:function(){var e=Array.prototype.slice.call(arguments,0);return xt.normalize(e.join(`/`))},join2:(e,t)=>xt.normalize(e+`/`+t)};function St(){if(typeof crypto==`object`&&typeof crypto.getRandomValues==`function`){var e=new Uint8Array(1);return function(){return crypto.getRandomValues(e),e[0]}}if(u)try{var t=El();return function(){return t.randomBytes(1)[0]}}catch{}return function(){B(`randomDevice`)}}var Ct={resolve:function(){for(var e=``,t=!1,n=arguments.length-1;n>=-1&&!t;n--){var r=n>=0?arguments[n]:U.cwd();if(typeof r!=`string`)throw TypeError(`Arguments to path.resolve must be strings`);if(!r)return``;e=r+`/`+e,t=xt.isAbs(r)}return e=xt.normalizeArray(e.split(`/`).filter(e=>!!e),!t).join(`/`),(t?`/`:``)+e||`.`},relative:(e,t)=>{e=Ct.resolve(e).substr(1),t=Ct.resolve(t).substr(1);function n(e){for(var t=0;t<e.length&&e[t]===``;t++);for(var n=e.length-1;n>=0&&e[n]===``;n--);return t>n?[]:e.slice(t,n-t+1)}for(var r=n(e.split(`/`)),i=n(t.split(`/`)),a=Math.min(r.length,i.length),o=a,s=0;s<a;s++)if(r[s]!==i[s]){o=s;break}for(var c=[],s=o;s<r.length;s++)c.push(`..`);return c=c.concat(i.slice(o)),c.join(`/`)}},wt={ttys:[],init:function(){},shutdown:function(){},register:function(e,t){wt.ttys[e]={input:[],output:[],ops:t},U.registerDevice(e,wt.stream_ops)},stream_ops:{open:function(e){var t=wt.ttys[e.node.rdev];if(!t)throw new U.ErrnoError(43);e.tty=t,e.seekable=!1},close:function(e){e.tty.ops.flush(e.tty)},flush:function(e){e.tty.ops.flush(e.tty)},read:function(e,t,n,r,i){if(!e.tty||!e.tty.ops.get_char)throw new U.ErrnoError(60);for(var a=0,o=0;o<r;o++){var s;try{s=e.tty.ops.get_char(e.tty)}catch{throw new U.ErrnoError(29)}if(s===void 0&&a===0)throw new U.ErrnoError(6);if(s==null)break;a++,t[n+o]=s}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,n,r,i){if(!e.tty||!e.tty.ops.put_char)throw new U.ErrnoError(60);try{for(var a=0;a<r;a++)e.tty.ops.put_char(e.tty,t[n+a])}catch{throw new U.ErrnoError(29)}return r&&(e.node.timestamp=Date.now()),a}},default_tty_ops:{get_char:function(e){if(!e.input.length){var t=null;if(u){var n=256,r=Buffer.alloc(n),i=0;try{i=_.readSync(process.stdin.fd,r,0,n,-1)}catch(e){if(e.toString().includes(`EOF`))i=0;else throw e}t=i>0?r.slice(0,i).toString(`utf-8`):null}else typeof window<`u`&&typeof window.prompt==`function`?(t=window.prompt(`Input: `),t!==null&&(t+=`
`)):typeof readline==`function`&&(t=readline(),t!==null&&(t+=`
`));if(!t)return null;e.input=$d(t,!0)}return e.input.shift()},put_char:function(e,t){t===null||t===10?(b(M(e.output,0)),e.output=[]):t!=0&&e.output.push(t)},flush:function(e){e.output&&e.output.length>0&&(b(M(e.output,0)),e.output=[])}},default_tty1_ops:{put_char:function(e,t){t===null||t===10?(x(M(e.output,0)),e.output=[]):t!=0&&e.output.push(t)},flush:function(e){e.output&&e.output.length>0&&(x(M(e.output,0)),e.output=[])}}};function Tt(e,t){ge.fill(0,e,e+t)}function Et(e,t){return Math.ceil(e/t)*t}function Dt(e){e=Et(e,65536);var t=lf(65536,e);return t?(Tt(t,e),t):0}var Ot={ops_table:null,mount:function(e){return Ot.createNode(null,`/`,16895,0)},createNode:function(e,t,n,r){if(U.isBlkdev(n)||U.isFIFO(n))throw new U.ErrnoError(63);Ot.ops_table||={dir:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr,lookup:Ot.node_ops.lookup,mknod:Ot.node_ops.mknod,rename:Ot.node_ops.rename,unlink:Ot.node_ops.unlink,rmdir:Ot.node_ops.rmdir,readdir:Ot.node_ops.readdir,symlink:Ot.node_ops.symlink},stream:{llseek:Ot.stream_ops.llseek}},file:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr},stream:{llseek:Ot.stream_ops.llseek,read:Ot.stream_ops.read,write:Ot.stream_ops.write,allocate:Ot.stream_ops.allocate,mmap:Ot.stream_ops.mmap,msync:Ot.stream_ops.msync}},link:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr,readlink:Ot.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr},stream:U.chrdev_stream_ops}};var i=U.createNode(e,t,n,r);return U.isDir(i.mode)?(i.node_ops=Ot.ops_table.dir.node,i.stream_ops=Ot.ops_table.dir.stream,i.contents={}):U.isFile(i.mode)?(i.node_ops=Ot.ops_table.file.node,i.stream_ops=Ot.ops_table.file.stream,i.usedBytes=0,i.contents=null):U.isLink(i.mode)?(i.node_ops=Ot.ops_table.link.node,i.stream_ops=Ot.ops_table.link.stream):U.isChrdev(i.mode)&&(i.node_ops=Ot.ops_table.chrdev.node,i.stream_ops=Ot.ops_table.chrdev.stream),i.timestamp=Date.now(),e&&(e.contents[t]=i,e.timestamp=i.timestamp),i},getFileDataAsTypedArray:function(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array},expandFileStorage:function(e,t){t>>>=0;var n=e.contents?e.contents.length:0;if(!(n>=t)){t=Math.max(t,n*(n<1048576?2:1.125)>>>0),n!=0&&(t=Math.max(t,256));var r=e.contents;e.contents=new Uint8Array(t),e.usedBytes>0&&e.contents.set(r.subarray(0,e.usedBytes),0)}},resizeFileStorage:function(e,t){if(t>>>=0,e.usedBytes!=t){if(t==0)e.contents=null,e.usedBytes=0;else{var n=e.contents;e.contents=new Uint8Array(t),n&&e.contents.set(n.subarray(0,Math.min(t,e.usedBytes))),e.usedBytes=t}}},node_ops:{getattr:function(e){var t={};return t.dev=U.isChrdev(e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,t.size=U.isDir(e.mode)?4096:U.isFile(e.mode)?e.usedBytes:U.isLink(e.mode)?e.link.length:0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.blksize=4096,t.blocks=Math.ceil(t.size/t.blksize),t},setattr:function(e,t){t.mode!==void 0&&(e.mode=t.mode),t.timestamp!==void 0&&(e.timestamp=t.timestamp),t.size!==void 0&&Ot.resizeFileStorage(e,t.size)},lookup:function(e,t){throw U.genericErrors[44]},mknod:function(e,t,n,r){return Ot.createNode(e,t,n,r)},rename:function(e,t,n){if(U.isDir(e.mode)){var r;try{r=U.lookupNode(t,n)}catch{}if(r)for(var i in r.contents)throw new U.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=n,t.contents[n]=e,t.timestamp=e.parent.timestamp,e.parent=t},unlink:function(e,t){delete e.contents[t],e.timestamp=Date.now()},rmdir:function(e,t){for(var n in U.lookupNode(e,t).contents)throw new U.ErrnoError(55);delete e.contents[t],e.timestamp=Date.now()},readdir:function(e){var t=[`.`,`..`];for(var n in e.contents)e.contents.hasOwnProperty(n)&&t.push(n);return t},symlink:function(e,t,n){var r=Ot.createNode(e,t,41471,0);return r.link=n,r},readlink:function(e){if(!U.isLink(e.mode))throw new U.ErrnoError(28);return e.link}},stream_ops:{read:function(e,t,n,r,i){var a=e.node.contents;if(i>=e.node.usedBytes)return 0;var o=Math.min(e.node.usedBytes-i,r);if(o>8&&a.subarray)t.set(a.subarray(i,i+o),n);else for(var s=0;s<o;s++)t[n+s]=a[i+s];return o},write:function(e,t,n,r,i,a){if(t.buffer===he.buffer&&(a=!1),!r)return 0;var o=e.node;if(o.timestamp=Date.now(),t.subarray&&(!o.contents||o.contents.subarray)){if(a)return o.contents=t.subarray(n,n+r),o.usedBytes=r,r;if(o.usedBytes===0&&i===0)return o.contents=t.slice(n,n+r),o.usedBytes=r,r;if(i+r<=o.usedBytes)return o.contents.set(t.subarray(n,n+r),i),r}if(Ot.expandFileStorage(o,i+r),o.contents.subarray&&t.subarray)o.contents.set(t.subarray(n,n+r),i);else for(var s=0;s<r;s++)o.contents[i+s]=t[n+s];return o.usedBytes=Math.max(o.usedBytes,i+r),r},llseek:function(e,t,n){var r=t;if(n===1?r+=e.position:n===2&&U.isFile(e.node.mode)&&(r+=e.node.usedBytes),r<0)throw new U.ErrnoError(28);return r},allocate:function(e,t,n){Ot.expandFileStorage(e.node,t+n),e.node.usedBytes=Math.max(e.node.usedBytes,t+n)},mmap:function(e,t,n,r,i){if(!U.isFile(e.node.mode))throw new U.ErrnoError(43);var a,o,s=e.node.contents;if(!(i&2)&&s.buffer===me)o=!1,a=s.byteOffset;else{if((n>0||n+t<s.length)&&(s=s.subarray?s.subarray(n,n+t):Array.prototype.slice.call(s,n,n+t)),o=!0,a=Dt(t),!a)throw new U.ErrnoError(48);a>>>=0,he.set(s,a>>>0)}return{ptr:a,allocated:o}},msync:function(e,t,n,r,i){if(!U.isFile(e.node.mode))throw new U.ErrnoError(43);return i&2||Ot.stream_ops.write(e,t,0,r,n,!1),0}}};function kt(e,t,n,r){var i=r?``:z(`al `+e);m(e,function(n){j(n,`Loading data file "`+e+`" failed (no arrayBuffer).`),t(new Uint8Array(n)),i&&Ie(i)},function(t){if(n)n();else throw`Loading data file "`+e+`" failed.`}),i&&Fe(i)}var U={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:`/`,initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(e,t={})=>{if(e=Ct.resolve(U.cwd(),e),!e)return{path:``,node:null};if(t=Object.assign({follow_mount:!0,recurse_count:0},t),t.recurse_count>8)throw new U.ErrnoError(32);for(var n=xt.normalizeArray(e.split(`/`).filter(e=>!!e),!1),r=U.root,i=`/`,a=0;a<n.length;a++){var o=a===n.length-1;if(o&&t.parent)break;if(r=U.lookupNode(r,n[a]),i=xt.join2(i,n[a]),U.isMountpoint(r)&&(!o||o&&t.follow_mount)&&(r=r.mounted.root),!o||t.follow)for(var s=0;U.isLink(r.mode);){var c=U.readlink(i);if(i=Ct.resolve(xt.dirname(i),c),r=U.lookupPath(i,{recurse_count:t.recurse_count+1}).node,s++>40)throw new U.ErrnoError(32)}}return{path:i,node:r}},getPath:e=>{for(var t;;){if(U.isRoot(e)){var n=e.mount.mountpoint;return t?n[n.length-1]===`/`?n+t:n+`/`+t:n}t=t?e.name+`/`+t:e.name,e=e.parent}},hashName:(e,t)=>{for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%U.nameTable.length},hashAddNode:e=>{var t=U.hashName(e.parent.id,e.name);e.name_next=U.nameTable[t],U.nameTable[t]=e},hashRemoveNode:e=>{var t=U.hashName(e.parent.id,e.name);if(U.nameTable[t]===e)U.nameTable[t]=e.name_next;else for(var n=U.nameTable[t];n;){if(n.name_next===e){n.name_next=e.name_next;break}n=n.name_next}},lookupNode:(e,t)=>{var n=U.mayLookup(e);if(n)throw new U.ErrnoError(n,e);for(var r=U.hashName(e.id,t),i=U.nameTable[r];i;i=i.name_next){var a=i.name;if(i.parent.id===e.id&&a===t)return i}return U.lookup(e,t)},createNode:(e,t,n,r)=>{var i=new U.FSNode(e,t,n,r);return U.hashAddNode(i),i},destroyNode:e=>{U.hashRemoveNode(e)},isRoot:e=>e===e.parent,isMountpoint:e=>!!e.mounted,isFile:e=>(e&61440)==32768,isDir:e=>(e&61440)==16384,isLink:e=>(e&61440)==40960,isChrdev:e=>(e&61440)==8192,isBlkdev:e=>(e&61440)==24576,isFIFO:e=>(e&61440)==4096,isSocket:e=>(e&49152)==49152,flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:e=>{var t=U.flagModes[e];if(t===void 0)throw Error(`Unknown file open mode: `+e);return t},flagsToPermissionString:e=>{var t=[`r`,`w`,`rw`][e&3];return e&512&&(t+=`w`),t},nodePermissions:(e,t)=>U.ignorePermissions?0:t.includes(`r`)&&!(e.mode&292)||t.includes(`w`)&&!(e.mode&146)||t.includes(`x`)&&!(e.mode&73)?2:0,mayLookup:e=>U.nodePermissions(e,`x`)||(e.node_ops.lookup?0:2),mayCreate:(e,t)=>{try{return U.lookupNode(e,t),20}catch{}return U.nodePermissions(e,`wx`)},mayDelete:(e,t,n)=>{var r;try{r=U.lookupNode(e,t)}catch(e){return e.errno}var i=U.nodePermissions(e,`wx`);if(i)return i;if(n){if(!U.isDir(r.mode))return 54;if(U.isRoot(r)||U.getPath(r)===U.cwd())return 10}else if(U.isDir(r.mode))return 31;return 0},mayOpen:(e,t)=>e?U.isLink(e.mode)?32:U.isDir(e.mode)&&(U.flagsToPermissionString(t)!==`r`||t&512)?31:U.nodePermissions(e,U.flagsToPermissionString(t)):44,MAX_OPEN_FDS:4096,nextfd:(e=0,t=U.MAX_OPEN_FDS)=>{for(var n=e;n<=t;n++)if(!U.streams[n])return n;throw new U.ErrnoError(33)},getStream:e=>U.streams[e],createStream:(e,t,n)=>{U.FSStream||(U.FSStream=function(){this.shared={}},U.FSStream.prototype={},Object.defineProperties(U.FSStream.prototype,{object:{get:function(){return this.node},set:function(e){this.node=e}},isRead:{get:function(){return(this.flags&2097155)!=1}},isWrite:{get:function(){return!!(this.flags&2097155)}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(e){this.shared.flags=e}},position:{get:function(){return this.shared.position},set:function(e){this.shared.position=e}}})),e=Object.assign(new U.FSStream,e);var r=U.nextfd(t,n);return e.fd=r,U.streams[r]=e,e},closeStream:e=>{U.streams[e]=null},chrdev_stream_ops:{open:e=>{e.stream_ops=U.getDevice(e.node.rdev).stream_ops,e.stream_ops.open&&e.stream_ops.open(e)},llseek:()=>{throw new U.ErrnoError(70)}},major:e=>e>>8,minor:e=>e&255,makedev:(e,t)=>e<<8|t,registerDevice:(e,t)=>{U.devices[e]={stream_ops:t}},getDevice:e=>U.devices[e],getMounts:e=>{for(var t=[],n=[e];n.length;){var r=n.pop();t.push(r),n.push.apply(n,r.mounts)}return t},syncfs:(e,t)=>{typeof e==`function`&&(t=e,e=!1),U.syncFSRequests++,U.syncFSRequests>1&&x(`warning: `+U.syncFSRequests+` FS.syncfs operations in flight at once, probably just doing extra work`);var n=U.getMounts(U.root.mount),r=0;function i(e){return U.syncFSRequests--,t(e)}function a(e){if(e)return a.errored?void 0:(a.errored=!0,i(e));++r>=n.length&&i(null)}n.forEach(t=>{if(!t.type.syncfs)return a(null);t.type.syncfs(t,e,a)})},mount:(e,t,n)=>{var r=n===`/`,i=!n,a;if(r&&U.root)throw new U.ErrnoError(10);if(!r&&!i){var o=U.lookupPath(n,{follow_mount:!1});if(n=o.path,a=o.node,U.isMountpoint(a))throw new U.ErrnoError(10);if(!U.isDir(a.mode))throw new U.ErrnoError(54)}var s={type:e,opts:t,mountpoint:n,mounts:[]},c=e.mount(s);return c.mount=s,s.root=c,r?U.root=c:a&&(a.mounted=s,a.mount&&a.mount.mounts.push(s)),c},unmount:e=>{var t=U.lookupPath(e,{follow_mount:!1});if(!U.isMountpoint(t.node))throw new U.ErrnoError(28);var n=t.node,r=n.mounted,i=U.getMounts(r);Object.keys(U.nameTable).forEach(e=>{for(var t=U.nameTable[e];t;){var n=t.name_next;i.includes(t.mount)&&U.destroyNode(t),t=n}}),n.mounted=null;var a=n.mount.mounts.indexOf(r);n.mount.mounts.splice(a,1)},lookup:(e,t)=>e.node_ops.lookup(e,t),mknod:(e,t,n)=>{var r=U.lookupPath(e,{parent:!0}).node,i=xt.basename(e);if(!i||i===`.`||i===`..`)throw new U.ErrnoError(28);var a=U.mayCreate(r,i);if(a)throw new U.ErrnoError(a);if(!r.node_ops.mknod)throw new U.ErrnoError(63);return r.node_ops.mknod(r,i,t,n)},create:(e,t)=>(t=t===void 0?438:t,t&=4095,t|=32768,U.mknod(e,t,0)),mkdir:(e,t)=>(t=t===void 0?511:t,t&=1023,t|=16384,U.mknod(e,t,0)),mkdirTree:(e,t)=>{for(var n=e.split(`/`),r=``,i=0;i<n.length;++i)if(n[i]){r+=`/`+n[i];try{U.mkdir(r,t)}catch(e){if(e.errno!=20)throw e}}},mkdev:(e,t,n)=>(n===void 0&&(n=t,t=438),t|=8192,U.mknod(e,t,n)),symlink:(e,t)=>{if(!Ct.resolve(e))throw new U.ErrnoError(44);var n=U.lookupPath(t,{parent:!0}).node;if(!n)throw new U.ErrnoError(44);var r=xt.basename(t),i=U.mayCreate(n,r);if(i)throw new U.ErrnoError(i);if(!n.node_ops.symlink)throw new U.ErrnoError(63);return n.node_ops.symlink(n,r,e)},rename:(e,t)=>{var n=xt.dirname(e),r=xt.dirname(t),i=xt.basename(e),a=xt.basename(t),o=U.lookupPath(e,{parent:!0}),s=o.node,c;if(o=U.lookupPath(t,{parent:!0}),c=o.node,!s||!c)throw new U.ErrnoError(44);if(s.mount!==c.mount)throw new U.ErrnoError(75);var l=U.lookupNode(s,i),u=Ct.relative(e,r);if(u.charAt(0)!==`.`)throw new U.ErrnoError(28);if(u=Ct.relative(t,n),u.charAt(0)!==`.`)throw new U.ErrnoError(55);var d;try{d=U.lookupNode(c,a)}catch{}if(l!==d){var f=U.isDir(l.mode),p=U.mayDelete(s,i,f);if(p||(p=d?U.mayDelete(c,a,f):U.mayCreate(c,a),p))throw new U.ErrnoError(p);if(!s.node_ops.rename)throw new U.ErrnoError(63);if(U.isMountpoint(l)||d&&U.isMountpoint(d))throw new U.ErrnoError(10);if(c!==s&&(p=U.nodePermissions(s,`w`),p))throw new U.ErrnoError(p);U.hashRemoveNode(l);try{s.node_ops.rename(l,c,a)}catch(e){throw e}finally{U.hashAddNode(l)}}},rmdir:e=>{var t=U.lookupPath(e,{parent:!0}).node,n=xt.basename(e),r=U.lookupNode(t,n),i=U.mayDelete(t,n,!0);if(i)throw new U.ErrnoError(i);if(!t.node_ops.rmdir)throw new U.ErrnoError(63);if(U.isMountpoint(r))throw new U.ErrnoError(10);t.node_ops.rmdir(t,n),U.destroyNode(r)},readdir:e=>{var t=U.lookupPath(e,{follow:!0}).node;if(!t.node_ops.readdir)throw new U.ErrnoError(54);return t.node_ops.readdir(t)},unlink:e=>{var t=U.lookupPath(e,{parent:!0}).node;if(!t)throw new U.ErrnoError(44);var n=xt.basename(e),r=U.lookupNode(t,n),i=U.mayDelete(t,n,!1);if(i)throw new U.ErrnoError(i);if(!t.node_ops.unlink)throw new U.ErrnoError(63);if(U.isMountpoint(r))throw new U.ErrnoError(10);t.node_ops.unlink(t,n),U.destroyNode(r)},readlink:e=>{var t=U.lookupPath(e).node;if(!t)throw new U.ErrnoError(44);if(!t.node_ops.readlink)throw new U.ErrnoError(28);return Ct.resolve(U.getPath(t.parent),t.node_ops.readlink(t))},stat:(e,t)=>{var n=U.lookupPath(e,{follow:!t}).node;if(!n)throw new U.ErrnoError(44);if(!n.node_ops.getattr)throw new U.ErrnoError(63);return n.node_ops.getattr(n)},lstat:e=>U.stat(e,!0),chmod:(e,t,n)=>{var r=typeof e==`string`?U.lookupPath(e,{follow:!n}).node:e;if(!r.node_ops.setattr)throw new U.ErrnoError(63);r.node_ops.setattr(r,{mode:t&4095|r.mode&-4096,timestamp:Date.now()})},lchmod:(e,t)=>{U.chmod(e,t,!0)},fchmod:(e,t)=>{var n=U.getStream(e);if(!n)throw new U.ErrnoError(8);U.chmod(n.node,t)},chown:(e,t,n,r)=>{var i=typeof e==`string`?U.lookupPath(e,{follow:!r}).node:e;if(!i.node_ops.setattr)throw new U.ErrnoError(63);i.node_ops.setattr(i,{timestamp:Date.now()})},lchown:(e,t,n)=>{U.chown(e,t,n,!0)},fchown:(e,t,n)=>{var r=U.getStream(e);if(!r)throw new U.ErrnoError(8);U.chown(r.node,t,n)},truncate:(e,t)=>{if(t<0)throw new U.ErrnoError(28);var n=typeof e==`string`?U.lookupPath(e,{follow:!0}).node:e;if(!n.node_ops.setattr)throw new U.ErrnoError(63);if(U.isDir(n.mode))throw new U.ErrnoError(31);if(!U.isFile(n.mode))throw new U.ErrnoError(28);var r=U.nodePermissions(n,`w`);if(r)throw new U.ErrnoError(r);n.node_ops.setattr(n,{size:t,timestamp:Date.now()})},ftruncate:(e,t)=>{var n=U.getStream(e);if(!n)throw new U.ErrnoError(8);if(!(n.flags&2097155))throw new U.ErrnoError(28);U.truncate(n.node,t)},utime:(e,t,n)=>{var r=U.lookupPath(e,{follow:!0}).node;r.node_ops.setattr(r,{timestamp:Math.max(t,n)})},open:(e,n,r)=>{if(e===``)throw new U.ErrnoError(44);n=typeof n==`string`?U.modeStringToFlags(n):n,r=r===void 0?438:r,r=n&64?r&4095|32768:0;var i;if(typeof e==`object`)i=e;else{e=xt.normalize(e);try{i=U.lookupPath(e,{follow:!(n&131072)}).node}catch{}}var a=!1;if(n&64){if(i){if(n&128)throw new U.ErrnoError(20)}else i=U.mknod(e,r,0),a=!0}if(!i)throw new U.ErrnoError(44);if(U.isChrdev(i.mode)&&(n&=-513),n&65536&&!U.isDir(i.mode))throw new U.ErrnoError(54);if(!a){var o=U.mayOpen(i,n);if(o)throw new U.ErrnoError(o)}n&512&&!a&&U.truncate(i,0),n&=-131713;var s=U.createStream({node:i,path:U.getPath(i),flags:n,seekable:!0,position:0,stream_ops:i.stream_ops,ungotten:[],error:!1});return s.stream_ops.open&&s.stream_ops.open(s),t.logReadFiles&&!(n&1)&&(U.readFiles||={},e in U.readFiles||(U.readFiles[e]=1)),s},close:e=>{if(U.isClosed(e))throw new U.ErrnoError(8);e.getdents&&=null;try{e.stream_ops.close&&e.stream_ops.close(e)}catch(e){throw e}finally{U.closeStream(e.fd)}e.fd=null},isClosed:e=>e.fd===null,llseek:(e,t,n)=>{if(U.isClosed(e))throw new U.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new U.ErrnoError(70);if(n!=0&&n!=1&&n!=2)throw new U.ErrnoError(28);return e.position=e.stream_ops.llseek(e,t,n),e.ungotten=[],e.position},read:(e,t,n,r,i)=>{if(n>>>=0,r<0||i<0)throw new U.ErrnoError(28);if(U.isClosed(e)||(e.flags&2097155)==1)throw new U.ErrnoError(8);if(U.isDir(e.node.mode))throw new U.ErrnoError(31);if(!e.stream_ops.read)throw new U.ErrnoError(28);var a=i!==void 0;if(!a)i=e.position;else if(!e.seekable)throw new U.ErrnoError(70);var o=e.stream_ops.read(e,t,n,r,i);return a||(e.position+=o),o},write:(e,t,n,r,i,a)=>{if(n>>>=0,r<0||i<0)throw new U.ErrnoError(28);if(U.isClosed(e)||!(e.flags&2097155))throw new U.ErrnoError(8);if(U.isDir(e.node.mode))throw new U.ErrnoError(31);if(!e.stream_ops.write)throw new U.ErrnoError(28);e.seekable&&e.flags&1024&&U.llseek(e,0,2);var o=i!==void 0;if(!o)i=e.position;else if(!e.seekable)throw new U.ErrnoError(70);var s=e.stream_ops.write(e,t,n,r,i,a);return o||(e.position+=s),s},allocate:(e,t,n)=>{if(U.isClosed(e))throw new U.ErrnoError(8);if(t<0||n<=0)throw new U.ErrnoError(28);if(!(e.flags&2097155))throw new U.ErrnoError(8);if(!U.isFile(e.node.mode)&&!U.isDir(e.node.mode))throw new U.ErrnoError(43);if(!e.stream_ops.allocate)throw new U.ErrnoError(138);e.stream_ops.allocate(e,t,n)},mmap:(e,t,n,r,i)=>{if(r&2&&!(i&2)&&(e.flags&2097155)!=2||(e.flags&2097155)==1)throw new U.ErrnoError(2);if(!e.stream_ops.mmap)throw new U.ErrnoError(43);return e.stream_ops.mmap(e,t,n,r,i)},msync:(e,t,n,r,i)=>(n>>>=0,!e||!e.stream_ops.msync?0:e.stream_ops.msync(e,t,n,r,i)),munmap:e=>0,ioctl:(e,t,n)=>{if(!e.stream_ops.ioctl)throw new U.ErrnoError(59);return e.stream_ops.ioctl(e,t,n)},readFile:(e,t={})=>{if(t.flags=t.flags||0,t.encoding=t.encoding||`binary`,t.encoding!==`utf8`&&t.encoding!==`binary`)throw Error(`Invalid encoding type "`+t.encoding+`"`);var n,r=U.open(e,t.flags),i=U.stat(e).size,a=new Uint8Array(i);return U.read(r,a,0,i,0),t.encoding===`utf8`?n=M(a,0):t.encoding===`binary`&&(n=a),U.close(r),n},writeFile:(e,t,n={})=>{n.flags=n.flags||577;var r=U.open(e,n.flags,n.mode);if(typeof t==`string`){var i=new Uint8Array(re(t)+1),a=P(t,i,0,i.length);U.write(r,i,0,a,void 0,n.canOwn)}else if(ArrayBuffer.isView(t))U.write(r,t,0,t.byteLength,void 0,n.canOwn);else throw Error(`Unsupported data type`);U.close(r)},cwd:()=>U.currentPath,chdir:e=>{var t=U.lookupPath(e,{follow:!0});if(t.node===null)throw new U.ErrnoError(44);if(!U.isDir(t.node.mode))throw new U.ErrnoError(54);var n=U.nodePermissions(t.node,`x`);if(n)throw new U.ErrnoError(n);U.currentPath=t.path},createDefaultDirectories:()=>{U.mkdir(`/tmp`),U.mkdir(`/home`),U.mkdir(`/home/web_user`)},createDefaultDevices:()=>{U.mkdir(`/dev`),U.registerDevice(U.makedev(1,3),{read:()=>0,write:(e,t,n,r,i)=>r}),U.mkdev(`/dev/null`,U.makedev(1,3)),wt.register(U.makedev(5,0),wt.default_tty_ops),wt.register(U.makedev(6,0),wt.default_tty1_ops),U.mkdev(`/dev/tty`,U.makedev(5,0)),U.mkdev(`/dev/tty1`,U.makedev(6,0));var e=St();U.createDevice(`/dev`,`random`,e),U.createDevice(`/dev`,`urandom`,e),U.mkdir(`/dev/shm`),U.mkdir(`/dev/shm/tmp`)},createSpecialDirectories:()=>{U.mkdir(`/proc`);var e=U.mkdir(`/proc/self`);U.mkdir(`/proc/self/fd`),U.mount({mount:()=>{var t=U.createNode(e,`fd`,16895,73);return t.node_ops={lookup:(e,t)=>{var n=+t,r=U.getStream(n);if(!r)throw new U.ErrnoError(8);var i={parent:null,mount:{mountpoint:`fake`},node_ops:{readlink:()=>r.path}};return i.parent=i,i}},t}},{},`/proc/self/fd`)},createStandardStreams:()=>{t.stdin?U.createDevice(`/dev`,`stdin`,t.stdin):U.symlink(`/dev/tty`,`/dev/stdin`),t.stdout?U.createDevice(`/dev`,`stdout`,null,t.stdout):U.symlink(`/dev/tty`,`/dev/stdout`),t.stderr?U.createDevice(`/dev`,`stderr`,null,t.stderr):U.symlink(`/dev/tty1`,`/dev/stderr`),U.open(`/dev/stdin`,0),U.open(`/dev/stdout`,1),U.open(`/dev/stderr`,1)},ensureErrnoError:()=>{U.ErrnoError||(U.ErrnoError=function(e,t){this.node=t,this.setErrno=function(e){this.errno=e},this.setErrno(e),this.message=`FS error`},U.ErrnoError.prototype=Error(),U.ErrnoError.prototype.constructor=U.ErrnoError,[44].forEach(e=>{U.genericErrors[e]=new U.ErrnoError(e),U.genericErrors[e].stack=`<generic error, no stack>`}))},staticInit:()=>{U.ensureErrnoError(),U.nameTable=Array(4096),U.mount(Ot,{},`/`),U.createDefaultDirectories(),U.createDefaultDevices(),U.createSpecialDirectories(),U.filesystems={MEMFS:Ot}},init:(e,n,r)=>{U.init.initialized=!0,U.ensureErrnoError(),t.stdin=e||t.stdin,t.stdout=n||t.stdout,t.stderr=r||t.stderr,U.createStandardStreams()},quit:()=>{U.init.initialized=!1;for(var e=0;e<U.streams.length;e++){var t=U.streams[e];t&&U.close(t)}},getMode:(e,t)=>{var n=0;return e&&(n|=365),t&&(n|=146),n},findObject:(e,t)=>{var n=U.analyzePath(e,t);return n.exists?n.object:null},analyzePath:(e,t)=>{try{var n=U.lookupPath(e,{follow:!t});e=n.path}catch{}var r={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var n=U.lookupPath(e,{parent:!0});r.parentExists=!0,r.parentPath=n.path,r.parentObject=n.node,r.name=xt.basename(e),n=U.lookupPath(e,{follow:!t}),r.exists=!0,r.path=n.path,r.object=n.node,r.name=n.node.name,r.isRoot=n.path===`/`}catch(e){r.error=e.errno}return r},createPath:(e,t,n,r)=>{e=typeof e==`string`?e:U.getPath(e);for(var i=t.split(`/`).reverse();i.length;){var a=i.pop();if(a){var o=xt.join2(e,a);try{U.mkdir(o)}catch{}e=o}}return o},createFile:(e,t,n,r,i)=>{var a=xt.join2(typeof e==`string`?e:U.getPath(e),t),o=U.getMode(r,i);return U.create(a,o)},createDataFile:(e,t,n,r,i,a)=>{var o=t;e&&(e=typeof e==`string`?e:U.getPath(e),o=t?xt.join2(e,t):e);var s=U.getMode(r,i),c=U.create(o,s);if(n){if(typeof n==`string`){for(var l=Array(n.length),u=0,d=n.length;u<d;++u)l[u]=n.charCodeAt(u);n=l}U.chmod(c,s|146);var f=U.open(c,577);U.write(f,n,0,n.length,0,a),U.close(f),U.chmod(c,s)}return c},createDevice:(e,t,n,r)=>{var i=xt.join2(typeof e==`string`?e:U.getPath(e),t),a=U.getMode(!!n,!!r);U.createDevice.major||(U.createDevice.major=64);var o=U.makedev(U.createDevice.major++,0);return U.registerDevice(o,{open:e=>{e.seekable=!1},close:e=>{r&&r.buffer&&r.buffer.length&&r(10)},read:(e,t,r,i,a)=>{for(var o=0,s=0;s<i;s++){var c;try{c=n()}catch{throw new U.ErrnoError(29)}if(c===void 0&&o===0)throw new U.ErrnoError(6);if(c==null)break;o++,t[r+s]=c}return o&&(e.node.timestamp=Date.now()),o},write:(e,t,n,i,a)=>{for(var o=0;o<i;o++)try{r(t[n+o])}catch{throw new U.ErrnoError(29)}return i&&(e.node.timestamp=Date.now()),o}}),U.mkdev(i,a,o)},forceLoadFile:e=>{if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if(typeof XMLHttpRequest<`u`)throw Error(`Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.`);if(p)try{e.contents=$d(p(e.url),!0),e.usedBytes=e.contents.length}catch{throw new U.ErrnoError(29)}else throw Error(`Cannot load without read() or XMLHttpRequest.`)},createLazyFile:(e,t,n,r,i)=>{function a(){this.lengthKnown=!1,this.chunks=[]}if(a.prototype.get=function(e){if(!(e>this.length-1||e<0)){var t=e%this.chunkSize,n=e/this.chunkSize|0;return this.getter(n)[t]}},a.prototype.setDataGetter=function(e){this.getter=e},a.prototype.cacheLength=function(){var e=new XMLHttpRequest;if(e.open(`HEAD`,n,!1),e.send(null),!(e.status>=200&&e.status<300||e.status===304))throw Error(`Couldn't load `+n+`. Status: `+e.status);var t=Number(e.getResponseHeader(`Content-length`)),r,i=(r=e.getResponseHeader(`Accept-Ranges`))&&r===`bytes`,a=(r=e.getResponseHeader(`Content-Encoding`))&&r===`gzip`,o=1048576;i||(o=t);var s=(e,r)=>{if(e>r)throw Error(`invalid range (`+e+`, `+r+`) or no bytes requested!`);if(r>t-1)throw Error(`only `+t+` bytes available! programmer error!`);var i=new XMLHttpRequest;if(i.open(`GET`,n,!1),t!==o&&i.setRequestHeader(`Range`,`bytes=`+e+`-`+r),i.responseType=`arraybuffer`,i.overrideMimeType&&i.overrideMimeType(`text/plain; charset=x-user-defined`),i.send(null),!(i.status>=200&&i.status<300||i.status===304))throw Error(`Couldn't load `+n+`. Status: `+i.status);return i.response===void 0?$d(i.responseText||``,!0):new Uint8Array(i.response||[])},c=this;c.setDataGetter(e=>{var n=e*o,r=(e+1)*o-1;if(r=Math.min(r,t-1),c.chunks[e]===void 0&&(c.chunks[e]=s(n,r)),c.chunks[e]===void 0)throw Error(`doXHR failed!`);return c.chunks[e]}),(a||!t)&&(o=t=1,t=this.getter(0).length,o=t,b(`LazyFiles on gzip forces download of the whole file when length is accessed`)),this._length=t,this._chunkSize=o,this.lengthKnown=!0},typeof XMLHttpRequest<`u`){if(!l)throw`Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc`;var o=new a;Object.defineProperties(o,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var s={isDevice:!1,contents:o}}else var s={isDevice:!1,url:n};var c=U.createFile(e,t,s,r,i);s.contents?c.contents=s.contents:s.url&&(c.contents=null,c.url=s.url),Object.defineProperties(c,{usedBytes:{get:function(){return this.contents.length}}});var u={};Object.keys(c.stream_ops).forEach(e=>{var t=c.stream_ops[e];u[e]=function(){return U.forceLoadFile(c),t.apply(null,arguments)}});function d(e,t,n,r,i){var a=e.node.contents;if(i>=a.length)return 0;var o=Math.min(a.length-i,r);if(a.slice)for(var s=0;s<o;s++)t[n+s]=a[i+s];else for(var s=0;s<o;s++)t[n+s]=a.get(i+s);return o}return u.read=(e,t,n,r,i)=>(U.forceLoadFile(c),d(e,t,n,r,i)),u.mmap=(e,t,n,r,i)=>{U.forceLoadFile(c);var a=Dt(t);if(!a)throw new U.ErrnoError(48);return d(e,he,a,t,n),{ptr:a,allocated:!0}},c.stream_ops=u,c},createPreloadedFile:(e,t,n,r,i,a,o,s,c,l)=>{var u=t?Ct.resolve(xt.join2(e,t)):e,d=z(`cp `+u);function f(n){function f(n){l&&l(),s||U.createDataFile(e,t,n,r,i,c),a&&a(),Ie(d)}K.handledByPreloadPlugin(n,u,f,()=>{o&&o(),Ie(d)})||f(n)}Fe(d),typeof n==`string`?kt(n,e=>f(e),o):f(n)},indexedDB:()=>window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,DB_NAME:()=>`EM_FS_`+window.location.pathname,DB_VERSION:20,DB_STORE_NAME:`FILE_DATA`,saveFilesToDB:(e,t,n)=>{t||=(()=>{}),n||=(()=>{});var r=U.indexedDB();try{var i=r.open(U.DB_NAME(),U.DB_VERSION)}catch(e){return n(e)}i.onupgradeneeded=()=>{b(`creating db`),i.result.createObjectStore(U.DB_STORE_NAME)},i.onsuccess=()=>{var r=i.result.transaction([U.DB_STORE_NAME],`readwrite`),a=r.objectStore(U.DB_STORE_NAME),o=0,s=0,c=e.length;function l(){s==0?t():n()}e.forEach(e=>{var t=a.put(U.analyzePath(e).object.contents,e);t.onsuccess=()=>{o++,o+s==c&&l()},t.onerror=()=>{s++,o+s==c&&l()}}),r.onerror=n},i.onerror=n},loadFilesFromDB:(e,t,n)=>{t||=(()=>{}),n||=(()=>{});var r=U.indexedDB();try{var i=r.open(U.DB_NAME(),U.DB_VERSION)}catch(e){return n(e)}i.onupgradeneeded=n,i.onsuccess=()=>{var r=i.result;try{var a=r.transaction([U.DB_STORE_NAME],`readonly`)}catch(e){n(e);return}var o=a.objectStore(U.DB_STORE_NAME),s=0,c=0,l=e.length;function u(){c==0?t():n()}e.forEach(e=>{var t=o.get(e);t.onsuccess=()=>{U.analyzePath(e).exists&&U.unlink(e),U.createDataFile(xt.dirname(e),xt.basename(e),t.result,!0,!0,!0),s++,s+c==l&&u()},t.onerror=()=>{c++,s+c==l&&u()}}),a.onerror=n},i.onerror=n}},W={DEFAULT_POLLMASK:5,calculateAt:function(e,t,n){if(xt.isAbs(t))return t;var r;if(e===-100)r=U.cwd();else{var i=U.getStream(e);if(!i)throw new U.ErrnoError(8);r=i.path}if(t.length==0){if(!n)throw new U.ErrnoError(44);return r}return xt.join2(r,t)},doStat:function(e,t,n){try{var r=e(t)}catch(e){if(e&&e.node&&xt.normalize(t)!==xt.normalize(U.getPath(e.node)))return-54;throw e}return F[n>>>2]=r.dev,F[n+4>>>2]=0,F[n+8>>>2]=r.ino,F[n+12>>>2]=r.mode,F[n+16>>>2]=r.nlink,F[n+20>>>2]=r.uid,F[n+24>>>2]=r.gid,F[n+28>>>2]=r.rdev,F[n+32>>>2]=0,Ge=[r.size>>>0,(We=r.size,+Math.abs(We)>=1?We>0?(Math.min(+Math.floor(We/4294967296),4294967295)|0)>>>0:~~+Math.ceil((We-+(~~We>>>0))/4294967296)>>>0:0)],F[n+40>>>2]=Ge[0],F[n+44>>>2]=Ge[1],F[n+48>>>2]=4096,F[n+52>>>2]=r.blocks,F[n+56>>>2]=r.atime.getTime()/1e3|0,F[n+60>>>2]=0,F[n+64>>>2]=r.mtime.getTime()/1e3|0,F[n+68>>>2]=0,F[n+72>>>2]=r.ctime.getTime()/1e3|0,F[n+76>>>2]=0,Ge=[r.ino>>>0,(We=r.ino,+Math.abs(We)>=1?We>0?(Math.min(+Math.floor(We/4294967296),4294967295)|0)>>>0:~~+Math.ceil((We-+(~~We>>>0))/4294967296)>>>0:0)],F[n+80>>>2]=Ge[0],F[n+84>>>2]=Ge[1],0},doMsync:function(e,t,n,r,i){var a=ge.slice(e,e+n);U.msync(t,a,i,n,r)},varargs:void 0,get:function(){return W.varargs+=4,F[W.varargs-4>>>2]},getStr:function(e){return N(e)},getStreamFromFD:function(e){var t=U.getStream(e);if(!t)throw new U.ErrnoError(8);return t}};function G(e){try{return e=W.getStr(e),U.chdir(e),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function At(e,t){try{return e=W.getStr(e),U.chmod(e,t),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function jt(e,t,n,r){try{if(t=W.getStr(t),t=W.calculateAt(e,t),n&-8)return-28;var i=U.lookupPath(t,{follow:!0}).node;if(!i)return-44;var a=``;return n&4&&(a+=`r`),n&2&&(a+=`w`),n&1&&(a+=`x`),a&&U.nodePermissions(i,a)?-2:0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Mt(e){return F[af()>>>2]=e,e}function Nt(e,t,n){W.varargs=n;try{var r=W.getStreamFromFD(e);switch(t){case 0:var i=W.get();return i<0?-28:U.createStream(r,i).fd;case 1:case 2:return 0;case 3:return r.flags;case 4:var i=W.get();return r.flags|=i,0;case 5:var i=W.get(),a=0;return _e[i+a>>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return Mt(28),-1;default:return-28}}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Pt(e,t){try{var n=W.getStreamFromFD(e);return W.doStat(U.stat,n.path,t)}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Ft(e,t){try{if(t===0)return-28;var n=U.cwd(),r=re(n)+1;return t<r?-68:(ne(n,e,t),r)}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function It(e,t,n){try{var r=W.getStreamFromFD(e);r.getdents||=U.readdir(r.path);for(var i=280,a=0,o=U.llseek(r,0,1),s=Math.floor(o/i);s<r.getdents.length&&a+i<=n;){var c,l,u=r.getdents[s];if(u===`.`)c=r.node.id,l=4;else if(u===`..`)c=U.lookupPath(r.path,{parent:!0}).node.id,l=4;else{var d=U.lookupNode(r.node,u);c=d.id,l=U.isChrdev(d.mode)?2:U.isDir(d.mode)?4:U.isLink(d.mode)?10:8}Ge=[c>>>0,(We=c,+Math.abs(We)>=1?We>0?(Math.min(+Math.floor(We/4294967296),4294967295)|0)>>>0:~~+Math.ceil((We-+(~~We>>>0))/4294967296)>>>0:0)],F[t+a>>>2]=Ge[0],F[t+a+4>>>2]=Ge[1],Ge=[(s+1)*i>>>0,(We=(s+1)*i,+Math.abs(We)>=1?We>0?(Math.min(+Math.floor(We/4294967296),4294967295)|0)>>>0:~~+Math.ceil((We-+(~~We>>>0))/4294967296)>>>0:0)],F[t+a+8>>>2]=Ge[0],F[t+a+12>>>2]=Ge[1],_e[t+a+16>>>1]=280,he[t+a+18>>>0]=l,ne(u,t+a+19,256),a+=i,s+=1}return U.llseek(r,s*i,0),a}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Lt(e,t,n){W.varargs=n;try{var r=W.getStreamFromFD(e);switch(t){case 21509:case 21505:return r.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return r.tty?0:-59;case 21519:if(!r.tty)return-59;var i=W.get();return F[i>>>2]=0,0;case 21520:return r.tty?-28:-59;case 21531:var i=W.get();return U.ioctl(r,t,i);case 21523:return r.tty?0:-59;case 21524:return r.tty?0:-59;default:B(`bad ioctl syscall `+t)}}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Rt(e,t){try{return e=W.getStr(e),W.doStat(U.lstat,e,t)}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function zt(e,t,n){try{return t=W.getStr(t),t=W.calculateAt(e,t),t=xt.normalize(t),t[t.length-1]===`/`&&(t=t.substr(0,t.length-1)),U.mkdir(t,n,0),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Bt(e,t,n,r){try{t=W.getStr(t);var i=r&256,a=r&4096;return r&=-4353,t=W.calculateAt(e,t,a),W.doStat(i?U.lstat:U.stat,t,n)}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Vt(e,t,n,r){W.varargs=r;try{t=W.getStr(t),t=W.calculateAt(e,t);var i=r?W.get():0;return U.open(t,n,i).fd}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Ht(e){try{return e=W.getStr(e),U.rmdir(e),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Ut(e,t){try{return e=W.getStr(e),W.doStat(U.stat,e,t)}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Wt(e,t,n){try{return e=W.getStr(e),F[n+4>>>2]=4096,F[n+40>>>2]=4096,F[n+8>>>2]=1e6,F[n+12>>>2]=5e5,F[n+16>>>2]=5e5,F[n+20>>>2]=U.nextInode,F[n+24>>>2]=1e6,F[n+28>>>2]=42,F[n+44>>>2]=2,F[n+36>>>2]=255,0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Gt(e,t,n){try{return t=W.getStr(t),t=W.calculateAt(e,t),n===0?U.unlink(t):n===512?U.rmdir(t):B(`Invalid flags passed to unlinkat`),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function Kt(e){}var qt=`To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking`;function Jt(e,t){B(qt)}function Yt(e,t){B(qt)}function Xt(e,t,n,r,i){}function Zt(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw TypeError(`Unknown type size: `+e)}}function Qt(){for(var e=Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);$t=e}var $t=void 0;function en(e){for(var t=``,n=e;ge[n>>>0];)t+=$t[ge[n++>>>0]];return t}var tn={},nn={},rn={},an=48,on=57;function sn(e){if(e===void 0)return`_unknown`;e=e.replace(/[^a-zA-Z0-9_]/g,`$`);var t=e.charCodeAt(0);return t>=an&&t<=on?`_`+e:e}function cn(e,t){return e=sn(e),Function(`body`,`return function `+e+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(t)}function ln(e,t){var n=cn(t,function(e){this.name=t,this.message=e;var n=Error(e).stack;n!==void 0&&(this.stack=this.toString()+`
`+n.replace(/^Error(:[^\n]*)?\n/,``))});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+`: `+this.message},n}var un=void 0;function dn(e){throw new un(e)}var fn=void 0;function pn(e){throw new fn(e)}function mn(e,t,n){e.forEach(function(e){rn[e]=t});function r(t){var r=n(t);r.length!==e.length&&pn(`Mismatched type converter count`);for(var i=0;i<e.length;++i)hn(e[i],r[i])}var i=Array(t.length),a=[],o=0;t.forEach((e,t)=>{nn.hasOwnProperty(e)?i[t]=nn[e]:(a.push(e),tn.hasOwnProperty(e)||(tn[e]=[]),tn[e].push(()=>{i[t]=nn[e],++o,o===a.length&&r(i)}))}),a.length===0&&r(i)}function hn(e,t,n={}){if(!(`argPackAdvance`in t))throw TypeError(`registerType registeredInstance requires argPackAdvance`);var r=t.name;if(e||dn(`type "`+r+`" must have a positive integer typeid pointer`),nn.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;dn(`Cannot register type '`+r+`' twice`)}if(nn[e]=t,delete rn[e],tn.hasOwnProperty(e)){var i=tn[e];delete tn[e],i.forEach(e=>e())}}function gn(e,t,n,r,i){var a=Zt(n);t=en(t),hn(e,{name:t,fromWireType:function(e){return!!e},toWireType:function(e,t){return t?r:i},argPackAdvance:8,readValueFromPointer:function(e){var r;if(n===1)r=he;else if(n===2)r=_e;else if(n===4)r=F;else throw TypeError(`Unknown boolean type size: `+t);return this.fromWireType(r[e>>>a])},destructorFunction:null})}function _n(e){if(!(this instanceof Wn)||!(e instanceof Wn))return!1;for(var t=this.$$.ptrType.registeredClass,n=this.$$.ptr,r=e.$$.ptrType.registeredClass,i=e.$$.ptr;t.baseClass;)n=t.upcast(n),t=t.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return t===r&&n===i}function vn(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function yn(e){function t(e){return e.$$.ptrType.registeredClass.name}dn(t(e)+` instance already deleted`)}var bn=!1;function xn(e){}function Sn(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function Cn(e){--e.count.value,e.count.value===0&&Sn(e)}function wn(e,t,n){if(t===n)return e;if(n.baseClass===void 0)return null;var r=wn(e,t,n.baseClass);return r===null?null:n.downcast(r)}var Tn={};function En(){return Object.keys(Nn).length}function Dn(){var e=[];for(var t in Nn)Nn.hasOwnProperty(t)&&e.push(Nn[t]);return e}var On=[];function kn(){for(;On.length;){var e=On.pop();e.$$.deleteScheduled=!1,e.delete()}}var An=void 0;function jn(e){An=e,On.length&&An&&An(kn)}function Mn(){t.getInheritedInstanceCount=En,t.getLiveInheritedInstances=Dn,t.flushPendingDeletes=kn,t.setDelayFunction=jn}var Nn={};function Pn(e,t){for(t===void 0&&dn(`ptr should not be undefined`);e.baseClass;)t=e.upcast(t),e=e.baseClass;return t}function Fn(e,t){return t=Pn(e,t),Nn[t]}function In(e,t){return t.ptrType&&t.ptr||pn(`makeClassHandle requires ptr and ptrType`),!!t.smartPtrType!=!!t.smartPtr&&pn(`Both smartPtrType and smartPtr must be specified`),t.count={value:1},Rn(Object.create(e,{$$:{value:t}}))}function Ln(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var n=Fn(this.registeredClass,t);if(n!==void 0){if(n.$$.count.value===0)return n.$$.ptr=t,n.$$.smartPtr=e,n.clone();var r=n.clone();return this.destructor(e),r}function i(){return this.isSmartPointer?In(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):In(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var a=Tn[this.registeredClass.getActualType(t)];if(!a)return i.call(this);var o=this.isConst?a.constPointerType:a.pointerType,s=wn(t,this.registeredClass,o.registeredClass);return s===null?i.call(this):this.isSmartPointer?In(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:e}):In(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function Rn(e){return typeof FinalizationRegistry>`u`?(Rn=e=>e,e):(bn=new FinalizationRegistry(e=>{Cn(e.$$)}),Rn=e=>{var t=e.$$;if(t.smartPtr){var n={$$:t};bn.register(e,n,e)}return e},xn=e=>bn.unregister(e),Rn(e))}function zn(){if(this.$$.ptr||yn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=Rn(Object.create(Object.getPrototypeOf(this),{$$:{value:vn(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function Bn(){this.$$.ptr||yn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dn(`Object already scheduled for deletion`),xn(this),Cn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Vn(){return!this.$$.ptr}function Hn(){return this.$$.ptr||yn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dn(`Object already scheduled for deletion`),On.push(this),On.length===1&&An&&An(kn),this.$$.deleteScheduled=!0,this}function Un(){Wn.prototype.isAliasOf=_n,Wn.prototype.clone=zn,Wn.prototype.delete=Bn,Wn.prototype.isDeleted=Vn,Wn.prototype.deleteLater=Hn}function Wn(){}function Gn(e,t,n){if(e[t].overloadTable===void 0){var r=e[t];e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||dn(`Function '`+n+`' called with an invalid number of arguments (`+arguments.length+`) - expects one of (`+e[t].overloadTable+`)!`),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[r.argCount]=r}}function Kn(e,n,r){t.hasOwnProperty(e)?((r===void 0||t[e].overloadTable!==void 0&&t[e].overloadTable[r]!==void 0)&&dn(`Cannot register public name '`+e+`' twice`),Gn(t,e,e),t.hasOwnProperty(r)&&dn(`Cannot register multiple overloads of a function with the same number of arguments (`+r+`)!`),t[e].overloadTable[r]=n):(t[e]=n,r!==void 0&&(t[e].numArguments=r))}function qn(e,t,n,r,i,a,o,s){this.name=e,this.constructor=t,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=a,this.upcast=o,this.downcast=s,this.pureVirtualFunctions=[]}function Jn(e,t,n){for(;t!==n;)t.upcast||dn(`Expected null or instance of `+n.name+`, got an instance of `+t.name),e=t.upcast(e),t=t.baseClass;return e}function Yn(e,t){if(t===null)return this.isReference&&dn(`null is not a valid `+this.name),0;t.$$||dn(`Cannot pass "`+Pr(t)+`" as a `+this.name),t.$$.ptr||dn(`Cannot pass deleted object as a pointer of type `+this.name);var n=t.$$.ptrType.registeredClass;return Jn(t.$$.ptr,n,this.registeredClass)}function Xn(e,t){var n;if(t===null)return this.isReference&&dn(`null is not a valid `+this.name),this.isSmartPointer?(n=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,n),n):0;t.$$||dn(`Cannot pass "`+Pr(t)+`" as a `+this.name),t.$$.ptr||dn(`Cannot pass deleted object as a pointer of type `+this.name),!this.isConst&&t.$$.ptrType.isConst&&dn(`Cannot convert argument of type `+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+` to parameter type `+this.name);var r=t.$$.ptrType.registeredClass;if(n=Jn(t.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(t.$$.smartPtr===void 0&&dn(`Passing raw pointer to smart pointer is illegal`),this.sharingPolicy){case 0:t.$$.smartPtrType===this?n=t.$$.smartPtr:dn(`Cannot convert argument of type `+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+` to parameter type `+this.name);break;case 1:n=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)n=t.$$.smartPtr;else{var i=t.clone();n=this.rawShare(n,Or.toHandle(function(){i.delete()})),e!==null&&e.push(this.rawDestructor,n)}break;default:dn(`Unsupporting sharing policy`)}return n}function Zn(e,t){if(t===null)return this.isReference&&dn(`null is not a valid `+this.name),0;t.$$||dn(`Cannot pass "`+Pr(t)+`" as a `+this.name),t.$$.ptr||dn(`Cannot pass deleted object as a pointer of type `+this.name),t.$$.ptrType.isConst&&dn(`Cannot convert argument of type `+t.$$.ptrType.name+` to parameter type `+this.name);var n=t.$$.ptrType.registeredClass;return Jn(t.$$.ptr,n,this.registeredClass)}function Qn(e){return this.fromWireType(I[e>>>2])}function $n(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function er(e){this.rawDestructor&&this.rawDestructor(e)}function tr(e){e!==null&&e.delete()}function nr(){rr.prototype.getPointee=$n,rr.prototype.destructor=er,rr.prototype.argPackAdvance=8,rr.prototype.readValueFromPointer=Qn,rr.prototype.deleteObject=tr,rr.prototype.fromWireType=Ln}function rr(e,t,n,r,i,a,o,s,c,l,u){this.name=e,this.registeredClass=t,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=a,this.sharingPolicy=o,this.rawGetPointee=s,this.rawConstructor=c,this.rawShare=l,this.rawDestructor=u,!i&&t.baseClass===void 0?r?(this.toWireType=Yn,this.destructorFunction=null):(this.toWireType=Zn,this.destructorFunction=null):this.toWireType=Xn}function ir(e,n,r){t.hasOwnProperty(e)||pn(`Replacing nonexistant public symbol`),t[e].overloadTable!==void 0&&r!==void 0?t[e].overloadTable[r]=n:(t[e]=n,t[e].argCount=r)}function ar(e,n,r){var i=t[`dynCall_`+e];return r&&r.length?i.apply(null,[n].concat(r)):i.call(null,n)}function or(e,t,n){return e.includes(`j`)?ar(e,t,n):H(t).apply(null,n)}function sr(e,t){var n=[];return function(){return n.length=0,Object.assign(n,arguments),or(e,t,n)}}function cr(e,t){e=en(e);function n(){return e.includes(`j`)?sr(e,t):H(t)}var r=n();return typeof r!=`function`&&dn(`unknown function pointer with signature `+e+`: `+t),r}var lr=void 0;function ur(e){var t=of(e),n=en(t);return rf(t),n}function dr(e,t){var n=[],r={};function i(e){r[e]||nn[e]||(rn[e]?rn[e].forEach(i):(n.push(e),r[e]=!0))}throw t.forEach(i),new lr(e+`: `+n.map(ur).join([`, `]))}function fr(e,t,n,r,i,a,o,s,c,l,u,d,f){u=en(u),a=cr(i,a),s&&=cr(o,s),l&&=cr(c,l),f=cr(d,f);var p=sn(u);Kn(p,function(){dr(`Cannot construct `+u+` due to unbound types`,[r])}),mn([e,t,n],r?[r]:[],function(t){t=t[0];var n,i;r?(n=t.registeredClass,i=n.instancePrototype):i=Wn.prototype;var o=cn(p,function(){if(Object.getPrototypeOf(this)!==c)throw new un(`Use 'new' to construct `+u);if(d.constructor_body===void 0)throw new un(u+` has no accessible constructor`);var e=d.constructor_body[arguments.length];if(e===void 0)throw new un(`Tried to invoke ctor of `+u+` with invalid number of parameters (`+arguments.length+`) - expected (`+Object.keys(d.constructor_body).toString()+`) parameters instead!`);return e.apply(this,arguments)}),c=Object.create(i,{constructor:{value:o}});o.prototype=c;var d=new qn(u,o,c,f,n,a,s,l),m=new rr(u,d,!0,!1,!1),h=new rr(u+`*`,d,!1,!1,!1),g=new rr(u+` const*`,d,!1,!0,!1);return Tn[e]={pointerType:h,constPointerType:g},ir(p,o),[m,h,g]})}function pr(e,t){if(!(e instanceof Function))throw TypeError(`new_ called with constructor type `+typeof e+` which is not a function`);var n=cn(e.name||`unknownFunctionName`,function(){});n.prototype=e.prototype;var r=new n,i=e.apply(r,t);return i instanceof Object?i:r}function mr(e){for(;e.length;){var t=e.pop();e.pop()(t)}}function hr(e,t,n,r,i){var a=t.length;a<2&&dn(`argTypes array size mismatch! Must at least get return value and 'this' types!`);for(var o=t[1]!==null&&n!==null,s=!1,c=1;c<t.length;++c)if(t[c]!==null&&t[c].destructorFunction===void 0){s=!0;break}for(var l=t[0].name!==`void`,u=``,d=``,c=0;c<a-2;++c)u+=(c===0?``:`, `)+`arg`+c,d+=(c===0?``:`, `)+`arg`+c+`Wired`;var f=`return function `+sn(e)+`(`+u+`) {
if (arguments.length !== `+(a-2)+`) {
throwBindingError('function `+e+` called with ' + arguments.length + ' arguments, expected `+(a-2)+` args!');
}
`;s&&(f+=`var destructors = [];
`);var p=s?`destructors`:`null`,m=[`throwBindingError`,`invoker`,`fn`,`runDestructors`,`retType`,`classParam`],h=[dn,r,i,mr,t[0],t[1]];o&&(f+=`var thisWired = classParam.toWireType(`+p+`, this);
`);for(var c=0;c<a-2;++c)f+=`var arg`+c+`Wired = argType`+c+`.toWireType(`+p+`, arg`+c+`); // `+t[c+2].name+`
`,m.push(`argType`+c),h.push(t[c+2]);if(o&&(d=`thisWired`+(d.length>0?`, `:``)+d),f+=(l?`var rv = `:``)+`invoker(fn`+(d.length>0?`, `:``)+d+`);
`,s)f+=`runDestructors(destructors);
`;else for(var c=o?1:2;c<t.length;++c){var g=c===1?`thisWired`:`arg`+(c-2)+`Wired`;t[c].destructorFunction!==null&&(f+=g+`_dtor(`+g+`); // `+t[c].name+`
`,m.push(g+`_dtor`),h.push(t[c].destructorFunction))}return l&&(f+=`var ret = retType.fromWireType(rv);
return ret;
`),f+=`}
`,m.push(f),pr(Function,m).apply(null,h)}function gr(e,t){for(var n=[],r=0;r<e;r++)n.push(F[(t>>2)+r>>>0]);return n}function _r(e,t,n,r,i,a,o){var s=gr(n,r);t=en(t),a=cr(i,a),mn([],[e],function(e){e=e[0];var r=e.name+`.`+t;function i(){dr(`Cannot call `+r+` due to unbound types`,s)}t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]);var c=e.registeredClass.constructor;return c[t]===void 0?(i.argCount=n-1,c[t]=i):(Gn(c,t,r),c[t].overloadTable[n-1]=i),mn([],s,function(e){var i=hr(r,[e[0],null].concat(e.slice(1)),null,a,o);return c[t].overloadTable===void 0?(i.argCount=n-1,c[t]=i):c[t].overloadTable[n-1]=i,[]}),[]})}function vr(e,t,n,r,i,a){j(t>0);var o=gr(t,n);i=cr(r,i),mn([],[e],function(e){e=e[0];var n=`constructor `+e.name;if(e.registeredClass.constructor_body===void 0&&(e.registeredClass.constructor_body=[]),e.registeredClass.constructor_body[t-1]!==void 0)throw new un(`Cannot register multiple constructors with identical number of parameters (`+(t-1)+`) for class '`+e.name+`'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.registeredClass.constructor_body[t-1]=()=>{dr(`Cannot construct `+e.name+` due to unbound types`,o)},mn([],o,function(r){return r.splice(1,0,null),e.registeredClass.constructor_body[t-1]=hr(n,r,null,i,a),[]}),[]})}function yr(e,t,n,r,i,a,o,s){var c=gr(n,r);t=en(t),a=cr(i,a),mn([],[e],function(e){e=e[0];var r=e.name+`.`+t;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]),s&&e.registeredClass.pureVirtualFunctions.push(t);function i(){dr(`Cannot call `+r+` due to unbound types`,c)}var l=e.registeredClass.instancePrototype,u=l[t];return u===void 0||u.overloadTable===void 0&&u.className!==e.name&&u.argCount===n-2?(i.argCount=n-2,i.className=e.name,l[t]=i):(Gn(l,t,r),l[t].overloadTable[n-2]=i),mn([],c,function(i){var s=hr(r,i,e,a,o);return l[t].overloadTable===void 0?(s.argCount=n-2,l[t]=s):l[t].overloadTable[n-2]=s,[]}),[]})}function br(e,t,n){return e instanceof Object||dn(n+` with invalid "this": `+e),e instanceof t.registeredClass.constructor||dn(n+` incompatible with "this" of type `+e.constructor.name),e.$$.ptr||dn(`cannot call emscripten binding method `+n+` on deleted object`),Jn(e.$$.ptr,e.$$.ptrType.registeredClass,t.registeredClass)}function xr(e,t,n,r,i,a,o,s,c,l){t=en(t),i=cr(r,i),mn([],[e],function(e){e=e[0];var r=e.name+`.`+t,u={get:function(){dr(`Cannot access `+r+` due to unbound types`,[n,o])},enumerable:!0,configurable:!0};return u.set=c?()=>{dr(`Cannot access `+r+` due to unbound types`,[n,o])}:e=>{dn(r+` is a read-only property`)},Object.defineProperty(e.registeredClass.instancePrototype,t,u),mn([],c?[n,o]:[n],function(n){var o=n[0],u={get:function(){var t=br(this,e,r+` getter`);return o.fromWireType(i(a,t))},enumerable:!0};if(c){c=cr(s,c);var d=n[1];u.set=function(t){var n=br(this,e,r+` setter`),i=[];c(l,n,d.toWireType(i,t)),mr(i)}}return Object.defineProperty(e.registeredClass.instancePrototype,t,u),[]}),[]})}var Sr=[],Cr=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function wr(e){e>4&&--Cr[e].refcount===0&&(Cr[e]=void 0,Sr.push(e))}function Tr(){for(var e=0,t=5;t<Cr.length;++t)Cr[t]!==void 0&&++e;return e}function Er(){for(var e=5;e<Cr.length;++e)if(Cr[e]!==void 0)return Cr[e];return null}function Dr(){t.count_emval_handles=Tr,t.get_first_emval=Er}var Or={toValue:e=>(e||dn(`Cannot use deleted val. handle = `+e),Cr[e].value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Sr.length?Sr.pop():Cr.length;return Cr[t]={refcount:1,value:e},t}}};function kr(e,t){t=en(t),hn(e,{name:t,fromWireType:function(e){var t=Or.toValue(e);return wr(e),t},toWireType:function(e,t){return Or.toHandle(t)},argPackAdvance:8,readValueFromPointer:Qn,destructorFunction:null})}function Ar(e,t,n){switch(t){case 0:return function(e){var t=n?he:ge;return this.fromWireType(t[e>>>0])};case 1:return function(e){var t=n?_e:ve;return this.fromWireType(t[e>>>1])};case 2:return function(e){var t=n?F:I;return this.fromWireType(t[e>>>2])};default:throw TypeError(`Unknown integer type: `+e)}}function jr(e,t,n,r){var i=Zt(n);t=en(t);function a(){}a.values={},hn(e,{name:t,constructor:a,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,t){return t.value},argPackAdvance:8,readValueFromPointer:Ar(t,i,r),destructorFunction:null}),Kn(t,a)}function Mr(e,t){var n=nn[e];return n===void 0&&dn(t+` has unknown type `+ur(e)),n}function Nr(e,t,n){var r=Mr(e,`enum`);t=en(t);var i=r.constructor,a=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:cn(r.name+`_`+t,function(){})}});i.values[n]=a,i[t]=a}function Pr(e){if(e===null)return`null`;var t=typeof e;return t===`object`||t===`array`||t===`function`?e.toString():``+e}function Fr(e,t){switch(t){case 2:return function(e){return this.fromWireType(L[e>>>2])};case 3:return function(e){return this.fromWireType(ye[e>>>3])};default:throw TypeError(`Unknown float type: `+e)}}function Ir(e,t,n){var r=Zt(n);t=en(t),hn(e,{name:t,fromWireType:function(e){return e},toWireType:function(e,t){return t},argPackAdvance:8,readValueFromPointer:Fr(t,r),destructorFunction:null})}function Lr(e,t,n){switch(t){case 0:return n?function(e){return he[e>>>0]}:function(e){return ge[e>>>0]};case 1:return n?function(e){return _e[e>>>1]}:function(e){return ve[e>>>1]};case 2:return n?function(e){return F[e>>>2]}:function(e){return I[e>>>2]};default:throw TypeError(`Unknown integer type: `+e)}}function Rr(e,t,n,r,i){t=en(t),i===-1&&(i=4294967295);var a=Zt(n),o=e=>e;if(r===0){var s=32-8*n;o=e=>e<<s>>>s}var c=t.includes(`unsigned`)?function(e,t){return this.name,t>>>0}:function(e,t){return this.name,t};hn(e,{name:t,fromWireType:o,toWireType:c,argPackAdvance:8,readValueFromPointer:Lr(t,a,r!==0),destructorFunction:null})}function zr(e,t,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(e){e>>=2;var t=I,n=t[e>>>0],i=t[e+1>>>0];return new r(me,i,n)}n=en(n),hn(e,{name:n,fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})}function Br(e,t){t=en(t);var n=t===`std::string`;hn(e,{name:t,fromWireType:function(e){var t=I[e>>>2],r;if(n)for(var i=e+4,a=0;a<=t;++a){var o=e+4+a;if(a==t||ge[o>>>0]==0){var s=o-i,c=N(i,s);r===void 0?r=c:(r+=`\0`,r+=c),i=o+1}}else{for(var l=Array(t),a=0;a<t;++a)l[a]=String.fromCharCode(ge[e+4+a>>>0]);r=l.join(``)}return rf(e),r},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r,i=typeof t==`string`;i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||dn(`Cannot pass non-string to std::string`),r=n&&i?()=>re(t):()=>t.length;var a=r(),o=nf(4+a+1);if(o>>>=0,I[o>>>2]=a,n&&i)ne(t,o+4,a+1);else if(i)for(var s=0;s<a;++s){var c=t.charCodeAt(s);c>255&&(rf(o),dn(`String has UTF-16 code units that do not fit in 8 bits`)),ge[o+4+s>>>0]=c}else for(var s=0;s<a;++s)ge[o+4+s>>>0]=t[s];return e!==null&&e.push(rf,o),o},argPackAdvance:8,readValueFromPointer:Qn,destructorFunction:function(e){rf(e)}})}function Vr(e,t,n){n=en(n);var r,i,a,o,s;t===2?(r=ae,i=oe,o=se,a=()=>ve,s=1):t===4&&(r=ce,i=le,o=ue,a=()=>I,s=2),hn(e,{name:n,fromWireType:function(e){for(var n=I[e>>>2],i=a(),o,c=e+4,l=0;l<=n;++l){var u=e+4+l*t;if(l==n||i[u>>>s]==0){var d=u-c,f=r(c,d);o===void 0?o=f:(o+=`\0`,o+=f),c=u+t}}return rf(e),o},toWireType:function(e,r){typeof r!=`string`&&dn(`Cannot pass non-string to C++ string type `+n);var a=o(r),c=nf(4+a+t);return c>>>=0,I[c>>>2]=a>>s,i(r,c+4,a+t),e!==null&&e.push(rf,c),c},argPackAdvance:8,readValueFromPointer:Qn,destructorFunction:function(e){rf(e)}})}function Hr(e,t){t=en(t),hn(e,{isVoid:!0,name:t,argPackAdvance:0,fromWireType:function(){},toWireType:function(e,t){}})}function Ur(){return Date.now()}var Wr=!0;function Gr(){return Wr}function Kr(e,t,n){e=Or.toValue(e),t=Mr(t,`emval::as`);var r=[],i=Or.toHandle(r);return F[n>>>2]=i,t.toWireType(r,e)}function qr(e){var t=[];return F[e>>>2]=Or.toHandle(t),t}var Jr={};function Yr(e){var t=Jr[e];return t===void 0?en(e):t}var Xr=[];function Zr(e,t,n,r,i){return e=Xr[e],t=Or.toValue(t),n=Yr(n),e(t,n,qr(r),i)}function Qr(){return typeof globalThis==`object`?globalThis:function(){return Function}()(`return this`)()}function $r(e){return e===0?Or.toHandle(Qr()):(e=Yr(e),Or.toHandle(Qr()[e]))}function ei(e){var t=Xr.length;return Xr.push(e),t}function ti(e,t){for(var n=Array(e),r=0;r<e;++r)n[r]=Mr(I[t+r*S>>>2],`parameter `+r);return n}var ni=[];function ri(e,t){var n=ti(e,t),r=n[0],i=r.name+`_$`+n.slice(1).map(function(e){return e.name}).join(`_`)+`$`,a=ni[i];if(a!==void 0)return a;for(var o=[`retType`],s=[r],c=``,l=0;l<e-1;++l)c+=(l===0?``:`, `)+`arg`+l,o.push(`argType`+l),s.push(n[1+l]);for(var u=`return function `+sn(`methodCaller_`+i)+`(handle, name, destructors, args) {
`,d=0,l=0;l<e-1;++l)u+=`    var arg`+l+` = argType`+l+`.readValueFromPointer(args`+(d?`+`+d:``)+`);
`,d+=n[l+1].argPackAdvance;u+=`    var rv = handle[name](`+c+`);
`;for(var l=0;l<e-1;++l)n[l+1].deleteObject&&(u+=`    argType`+l+`.deleteObject(arg`+l+`);
`);return r.isVoid||(u+=`    return retType.toWireType(destructors, rv);
`),u+=`};
`,o.push(u),a=ei(pr(Function,o).apply(null,s)),ni[i]=a,a}function ii(e,t){return e=Or.toValue(e),t=Or.toValue(t),Or.toHandle(e[t])}function ai(e){e>4&&(Cr[e].refcount+=1)}function oi(e){return Or.toHandle(Yr(e))}function si(e){mr(Or.toValue(e)),wr(e)}function ci(e,t,n){e=Or.toValue(e),t=Or.toValue(t),n=Or.toValue(n),e[t]=n}function li(e,t){e=Mr(e,`_emval_take_value`);var n=e.readValueFromPointer(t);return Or.toHandle(n)}function ui(e){return e=Or.toValue(e),Or.toHandle(typeof e)}function di(e,t){var n=new Date(F[e>>>2]*1e3);F[t>>>2]=n.getSeconds(),F[t+4>>>2]=n.getMinutes(),F[t+8>>>2]=n.getHours(),F[t+12>>>2]=n.getDate(),F[t+16>>>2]=n.getMonth(),F[t+20>>>2]=n.getFullYear()-1900,F[t+24>>>2]=n.getDay();var r=new Date(n.getFullYear(),0,1),i=(n.getTime()-r.getTime())/864e5|0;F[t+28>>>2]=i,F[t+36>>>2]=-(n.getTimezoneOffset()*60);var a=new Date(n.getFullYear(),6,1).getTimezoneOffset(),o=r.getTimezoneOffset(),s=(a!=o&&n.getTimezoneOffset()==Math.min(o,a))|0;F[t+32>>>2]=s}function fi(e,t,n,r,i,a){try{e>>>=0;var o=U.getStream(i);o&&(n&2&&W.doMsync(e,o,t,r,a),U.munmap(o))}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return-e.errno}}function pi(e,t,n){var r=new Date().getFullYear(),i=new Date(r,0,1),a=new Date(r,6,1),o=i.getTimezoneOffset(),s=a.getTimezoneOffset(),c=Math.max(o,s);F[e>>>2]=c*60,F[t>>>2]=Number(o!=s);function l(e){var t=e.toTimeString().match(/\(([A-Za-z ]+)\)$/);return t?t[1]:`GMT`}var u=l(i),d=l(a),f=de(u),p=de(d);s<o?(I[n>>>2]=f,I[n+4>>>2]=p):(I[n>>>2]=p,I[n+4>>>2]=f)}function mi(e,t,n){mi.called||(mi.called=!0,pi(e,t,n))}function hi(){B(``)}function gi(e,n){if(K.mainLoop.timingMode=e,K.mainLoop.timingValue=n,!K.mainLoop.func)return 1;if(K.mainLoop.running||(K.mainLoop.running=!0),e==0)K.mainLoop.scheduler=function(){var e=Math.max(0,K.mainLoop.tickStartTime+n-_i())|0;setTimeout(K.mainLoop.runner,e)},K.mainLoop.method=`timeout`;else if(e==1)K.mainLoop.scheduler=function(){K.requestAnimationFrame(K.mainLoop.runner)},K.mainLoop.method=`rAF`;else if(e==2){if(typeof setImmediate>`u`){var r=[],i=`setimmediate`;addEventListener(`message`,function(e){(e.data===i||e.data.target===i)&&(e.stopPropagation(),r.shift()())},!0),setImmediate=function(e){r.push(e),l?(t.setImmediates===void 0&&(t.setImmediates=[]),t.setImmediates.push(e),postMessage({target:i})):postMessage(i,`*`)}}K.mainLoop.scheduler=function(){setImmediate(K.mainLoop.runner)},K.mainLoop.method=`immediate`}return 0}var _i=u?()=>{var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:()=>performance.now();function vi(e){_T(e)}function yi(e,t,n,r,i){j(!K.mainLoop.func,`emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.`),K.mainLoop.func=e,K.mainLoop.arg=r;var a=K.mainLoop.currentlyRunningMainloop;function o(){return!(a<K.mainLoop.currentlyRunningMainloop)}if(K.mainLoop.running=!1,K.mainLoop.runner=function(){if(!A){if(K.mainLoop.queue.length>0){var t=Date.now(),n=K.mainLoop.queue.shift();if(n.func(n.arg),K.mainLoop.remainingBlockers){var r=K.mainLoop.remainingBlockers,i=r%1==0?r-1:Math.floor(r);n.counted?K.mainLoop.remainingBlockers=i:(i+=.5,K.mainLoop.remainingBlockers=(8*r+i)/9)}if(b(`main loop blocker "`+n.name+`" took `+(Date.now()-t)+` ms`),K.mainLoop.updateStatus(),!o())return;setTimeout(K.mainLoop.runner,0)}else o()&&(K.mainLoop.currentFrameNumber=K.mainLoop.currentFrameNumber+1|0,K.mainLoop.timingMode==1&&K.mainLoop.timingValue>1&&K.mainLoop.currentFrameNumber%K.mainLoop.timingValue!=0?K.mainLoop.scheduler():(K.mainLoop.timingMode==0&&(K.mainLoop.tickStartTime=_i()),K.mainLoop.runIter(e),o()&&(typeof SDL==`object`&&SDL.audio&&SDL.audio.queueNewAudioData&&SDL.audio.queueNewAudioData(),K.mainLoop.scheduler())))}},i||(t&&t>0?gi(0,1e3/t):gi(1,1),K.mainLoop.scheduler()),n)throw`unwind`}function bi(e,t){if(!A){if(t)e();else try{e()}catch(e){$e(e)}}}function xi(e,t){return setTimeout(function(){bi(e)},t)}var K={mainLoop:{running:!1,scheduler:null,method:``,currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){K.mainLoop.scheduler=null,K.mainLoop.currentlyRunningMainloop++},resume:function(){K.mainLoop.currentlyRunningMainloop++;var e=K.mainLoop.timingMode,t=K.mainLoop.timingValue,n=K.mainLoop.func;K.mainLoop.func=null,yi(n,0,!1,K.mainLoop.arg,!0),gi(e,t),K.mainLoop.scheduler()},updateStatus:function(){if(t.setStatus){var e=t.statusMessage||`Please wait...`,n=K.mainLoop.remainingBlockers,r=K.mainLoop.expectedBlockers;n?n<r?t.setStatus(e+` (`+(r-n)+`/`+r+`)`):t.setStatus(e):t.setStatus(``)}},runIter:function(e){A||t.preMainLoop&&t.preMainLoop()===!1||(bi(e),t.postMainLoop&&t.postMainLoop())}},isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(t.preloadPlugins||(t.preloadPlugins=[]),K.initted)return;K.initted=!0;try{new Blob,K.hasBlobConstructor=!0}catch{K.hasBlobConstructor=!1,b(`warning: no blob constructor, cannot create blobs with mimetypes`)}K.BlobBuilder=typeof MozBlobBuilder<`u`?MozBlobBuilder:typeof WebKitBlobBuilder<`u`?WebKitBlobBuilder:K.hasBlobConstructor?null:b(`warning: no BlobBuilder`),K.URLObject=typeof window<`u`?window.URL?window.URL:window.webkitURL:void 0,!t.noImageDecoding&&K.URLObject===void 0&&(b(`warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.`),t.noImageDecoding=!0);var e={};e.canHandle=function(e){return!t.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(e)},e.handle=function(e,t,n,r){var i=null;if(K.hasBlobConstructor)try{i=new Blob([e],{type:K.getMimetype(t)}),i.size!==e.length&&(i=new Blob([new Uint8Array(e).buffer],{type:K.getMimetype(t)}))}catch(e){C(`Blob constructor present but fails: `+e+`; falling back to blob builder`)}if(!i){var a=new K.BlobBuilder;a.append(new Uint8Array(e).buffer),i=a.getBlob()}var o=K.URLObject.createObjectURL(i),s=new Image;s.onload=()=>{j(s.complete,`Image `+t+` could not be decoded`);var r=document.createElement(`canvas`);r.width=s.width,r.height=s.height,r.getContext(`2d`).drawImage(s,0,0),Jd[t]=r,K.URLObject.revokeObjectURL(o),n&&n(e)},s.onerror=e=>{b(`Image `+o+` could not be decoded`),r&&r()},s.src=o},t.preloadPlugins.push(e);var n={};n.canHandle=function(e){return!t.noAudioDecoding&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},n.handle=function(e,t,n,r){var i=!1;function a(r){i||(i=!0,Yd[t]=r,n&&n(e))}function o(){i||(i=!0,Yd[t]=new Audio,r&&r())}if(K.hasBlobConstructor){try{var s=new Blob([e],{type:K.getMimetype(t)})}catch{return o()}var c=K.URLObject.createObjectURL(s),l=new Audio;l.addEventListener(`canplaythrough`,function(){a(l)},!1),l.onerror=function(n){if(i)return;b(`warning: browser could not fully decode audio `+t+`, trying slower base64 approach`);function r(e){for(var t=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,n=`=`,r=``,i=0,a=0,o=0;o<e.length;o++)for(i=i<<8|e[o],a+=8;a>=6;){var s=i>>a-6&63;a-=6,r+=t[s]}return a==2?(r+=t[(i&3)<<4],r+=n+n):a==4&&(r+=t[(i&15)<<2],r+=n),r}l.src=`data:audio/x-`+t.substr(-3)+`;base64,`+r(e),a(l)},l.src=c,xi(function(){a(l)},1e4)}else return o()},t.preloadPlugins.push(n);function r(){K.pointerLock=document.pointerLockElement===t.canvas||document.mozPointerLockElement===t.canvas||document.webkitPointerLockElement===t.canvas||document.msPointerLockElement===t.canvas}var i=t.canvas;i&&(i.requestPointerLock=i.requestPointerLock||i.mozRequestPointerLock||i.webkitRequestPointerLock||i.msRequestPointerLock||function(){},i.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},i.exitPointerLock=i.exitPointerLock.bind(document),document.addEventListener(`pointerlockchange`,r,!1),document.addEventListener(`mozpointerlockchange`,r,!1),document.addEventListener(`webkitpointerlockchange`,r,!1),document.addEventListener(`mspointerlockchange`,r,!1),t.elementPointerLock&&i.addEventListener(`click`,function(e){!K.pointerLock&&t.canvas.requestPointerLock&&(t.canvas.requestPointerLock(),e.preventDefault())},!1))},handledByPreloadPlugin:function(e,n,r,i){K.init();var a=!1;return t.preloadPlugins.forEach(function(t){a||t.canHandle(n)&&(t.handle(e,n,r,i),a=!0)}),a},createContext:function(e,n,r,i){if(n&&t.ctx&&e==t.canvas)return t.ctx;var a,o;if(n){var s={antialias:!1,alpha:!1,majorVersion:1};if(i)for(var c in i)s[c]=i[c];J!==void 0&&(o=J.createContext(e,s),o&&(a=J.getContext(o).GLctx))}else a=e.getContext(`2d`);return a?(r&&(n||j(X===void 0,`cannot set in module if GLctx is used, but we are a non-GL context that would replace it`),t.ctx=a,n&&J.makeContextCurrent(o),t.useWebGL=n,K.moduleContextCreatedCallbacks.forEach(function(e){e()}),K.init()),a):null},destroyContext:function(e,t,n){},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen:function(e,n){K.lockPointer=e,K.resizeCanvas=n,K.lockPointer===void 0&&(K.lockPointer=!0),K.resizeCanvas===void 0&&(K.resizeCanvas=!1);var r=t.canvas;function i(){K.isFullscreen=!1;var e=r.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e?(r.exitFullscreen=K.exitFullscreen,K.lockPointer&&r.requestPointerLock(),K.isFullscreen=!0,K.resizeCanvas?K.setFullscreenCanvasSize():K.updateCanvasDimensions(r)):(e.parentNode.insertBefore(r,e),e.parentNode.removeChild(e),K.resizeCanvas?K.setWindowedCanvasSize():K.updateCanvasDimensions(r)),t.onFullScreen&&t.onFullScreen(K.isFullscreen),t.onFullscreen&&t.onFullscreen(K.isFullscreen)}K.fullscreenHandlersInstalled||(K.fullscreenHandlersInstalled=!0,document.addEventListener(`fullscreenchange`,i,!1),document.addEventListener(`mozfullscreenchange`,i,!1),document.addEventListener(`webkitfullscreenchange`,i,!1),document.addEventListener(`MSFullscreenChange`,i,!1));var a=document.createElement(`div`);r.parentNode.insertBefore(a,r),a.appendChild(r),a.requestFullscreen=a.requestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen||(a.webkitRequestFullscreen?function(){a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(a.webkitRequestFullScreen?function(){a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null),a.requestFullscreen()},exitFullscreen:function(){return K.isFullscreen?((document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]),!0):!1},nextRAF:0,fakeRequestAnimationFrame:function(e){var t=Date.now();if(K.nextRAF===0)K.nextRAF=t+1e3/60;else for(;t+2>=K.nextRAF;)K.nextRAF+=1e3/60;var n=Math.max(K.nextRAF-t,0);setTimeout(e,n)},requestAnimationFrame:function(e){if(typeof requestAnimationFrame==`function`)requestAnimationFrame(e);else{var t=K.fakeRequestAnimationFrame;t(e)}},safeSetTimeout:function(e){return xi(e)},safeRequestAnimationFrame:function(e){return K.requestAnimationFrame(function(){bi(e)})},getMimetype:function(e){return{jpg:`image/jpeg`,jpeg:`image/jpeg`,png:`image/png`,bmp:`image/bmp`,ogg:`audio/ogg`,wav:`audio/wav`,mp3:`audio/mpeg`}[e.substr(e.lastIndexOf(`.`)+1)]},getUserMedia:function(e){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(e)},getMovementX:function(e){return e.movementX||e.mozMovementX||e.webkitMovementX||0},getMovementY:function(e){return e.movementY||e.mozMovementY||e.webkitMovementY||0},getMouseWheelDelta:function(e){var t=0;switch(e.type){case`DOMMouseScroll`:t=e.detail/3;break;case`mousewheel`:t=e.wheelDelta/120;break;case`wheel`:switch(t=e.deltaY,e.deltaMode){case 0:t/=100;break;case 1:t/=3;break;case 2:t*=80;break;default:throw`unrecognized mouse wheel delta mode: `+e.deltaMode}break;default:throw`unrecognized mouse wheel event: `+e.type}return t},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(e){if(K.pointerLock)e.type!=`mousemove`&&`mozMovementX`in e?K.mouseMovementX=K.mouseMovementY=0:(K.mouseMovementX=K.getMovementX(e),K.mouseMovementY=K.getMovementY(e)),typeof SDL<`u`?(K.mouseX=SDL.mouseX+K.mouseMovementX,K.mouseY=SDL.mouseY+K.mouseMovementY):(K.mouseX+=K.mouseMovementX,K.mouseY+=K.mouseMovementY);else{var n=t.canvas.getBoundingClientRect(),r=t.canvas.width,i=t.canvas.height,a=window.scrollX===void 0?window.pageXOffset:window.scrollX,o=window.scrollY===void 0?window.pageYOffset:window.scrollY;if(e.type===`touchstart`||e.type===`touchend`||e.type===`touchmove`){var s=e.touch;if(s===void 0)return;var c=s.pageX-(a+n.left),l=s.pageY-(o+n.top);c*=r/n.width,l*=i/n.height;var u={x:c,y:l};if(e.type===`touchstart`)K.lastTouches[s.identifier]=u,K.touches[s.identifier]=u;else if(e.type===`touchend`||e.type===`touchmove`){var d=K.touches[s.identifier];d||=u,K.lastTouches[s.identifier]=d,K.touches[s.identifier]=u}return}var f=e.pageX-(a+n.left),p=e.pageY-(o+n.top);f*=r/n.width,p*=i/n.height,K.mouseMovementX=f-K.mouseX,K.mouseMovementY=p-K.mouseY,K.mouseX=f,K.mouseY=p}},resizeListeners:[],updateResizeListeners:function(){var e=t.canvas;K.resizeListeners.forEach(function(t){t(e.width,e.height)})},setCanvasSize:function(e,n,r){var i=t.canvas;K.updateCanvasDimensions(i,e,n),r||K.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if(typeof SDL<`u`){var e=I[SDL.screen>>>2];e|=8388608,F[SDL.screen>>>2]=e}K.updateCanvasDimensions(t.canvas),K.updateResizeListeners()},setWindowedCanvasSize:function(){if(typeof SDL<`u`){var e=I[SDL.screen>>>2];e&=-8388609,F[SDL.screen>>>2]=e}K.updateCanvasDimensions(t.canvas),K.updateResizeListeners()},updateCanvasDimensions:function(e,n,r){n&&r?(e.widthNative=n,e.heightNative=r):(n=e.widthNative,r=e.heightNative);var i=n,a=r;if(t.forcedAspectRatio&&t.forcedAspectRatio>0&&(i/a<t.forcedAspectRatio?i=Math.round(a*t.forcedAspectRatio):a=Math.round(i/t.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e.parentNode&&typeof screen<`u`){var o=Math.min(screen.width/i,screen.height/a);i=Math.round(i*o),a=Math.round(a*o)}K.resizeCanvas?(e.width!=i&&(e.width=i),e.height!=a&&(e.height=a),e.style!==void 0&&(e.style.removeProperty(`width`),e.style.removeProperty(`height`))):(e.width!=n&&(e.width=n),e.height!=r&&(e.height=r),e.style!==void 0&&(i!=n||a!=r?(e.style.setProperty(`width`,i+`px`,`important`),e.style.setProperty(`height`,a+`px`,`important`)):(e.style.removeProperty(`width`),e.style.removeProperty(`height`))))}},q={errorCode:12288,defaultDisplayInitialized:!1,currentContext:0,currentReadSurface:0,currentDrawSurface:0,contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1},stringCache:{},setErrorCode:function(e){q.errorCode=e},chooseConfig:function(e,t,n,r,i){if(e!=62e3)return q.setErrorCode(12296),0;if(t)for(;;){var a=F[t>>>2];if(a==12321){var o=F[t+4>>>2];q.contextAttributes.alpha=o>0}else if(a==12325){var s=F[t+4>>>2];q.contextAttributes.depth=s>0}else if(a==12326){var c=F[t+4>>>2];q.contextAttributes.stencil=c>0}else if(a==12337){var l=F[t+4>>>2];q.contextAttributes.antialias=l>0}else if(a==12338){var l=F[t+4>>>2];q.contextAttributes.antialias=l==1}else if(a==12544){var u=F[t+4>>>2];q.contextAttributes.lowLatency=u!=12547}else if(a==12344)break;t+=8}return(!n||!r)&&!i?(q.setErrorCode(12300),0):(i&&(F[i>>>2]=1),n&&r>0&&(F[n>>>2]=62002),q.setErrorCode(12288),1)}};function Si(e){return e==12448?(q.setErrorCode(12288),1):(q.setErrorCode(12300),0)}function Ci(e,t,n,r,i){return q.chooseConfig(e,t,n,r,i)}function wi(e){var t=e.getExtension(`ANGLE_instanced_arrays`);if(t)return e.vertexAttribDivisor=function(e,n){t.vertexAttribDivisorANGLE(e,n)},e.drawArraysInstanced=function(e,n,r,i){t.drawArraysInstancedANGLE(e,n,r,i)},e.drawElementsInstanced=function(e,n,r,i,a){t.drawElementsInstancedANGLE(e,n,r,i,a)},1}function Ti(e){var t=e.getExtension(`OES_vertex_array_object`);if(t)return e.createVertexArray=function(){return t.createVertexArrayOES()},e.deleteVertexArray=function(e){t.deleteVertexArrayOES(e)},e.bindVertexArray=function(e){t.bindVertexArrayOES(e)},e.isVertexArray=function(e){return t.isVertexArrayOES(e)},1}function Ei(e){var t=e.getExtension(`WEBGL_draw_buffers`);if(t)return e.drawBuffers=function(e,n){t.drawBuffersWEBGL(e,n)},1}function Di(e){return!!(e.multiDrawWebgl=e.getExtension(`WEBGL_multi_draw`))}var J={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],stringCache:{},unpackAlignment:4,recordError:function(e){J.lastError||=e},getNewId:function(e){for(var t=J.counter++,n=e.length;n<t;n++)e[n]=null;return t},getSource:function(e,t,n,r){for(var i=``,a=0;a<t;++a){var o=r?F[r+a*4>>>2]:-1;i+=N(F[n+a*4>>>2],o<0?void 0:o)}return i},createContext:function(e,t){if(!e.getContextSafariWebGL2Fixed){e.getContextSafariWebGL2Fixed=e.getContext;function t(t,n){var r=e.getContextSafariWebGL2Fixed(t,n);return t==`webgl`==r instanceof WebGLRenderingContext?r:null}e.getContext=t}var n=e.getContext(`webgl`,t);return n?J.registerContext(n,t):0},registerContext:function(e,t){var n=J.getNewId(J.contexts),r={handle:n,attributes:t,version:t.majorVersion,GLctx:e};return e.canvas&&(e.canvas.GLctxObject=r),J.contexts[n]=r,(t.enableExtensionsByDefault===void 0||t.enableExtensionsByDefault)&&J.initExtensions(r),n},makeContextCurrent:function(e){return J.currentContext=J.contexts[e],t.ctx=X=J.currentContext&&J.currentContext.GLctx,!(e&&!X)},getContext:function(e){return J.contexts[e]},deleteContext:function(e){J.currentContext===J.contexts[e]&&(J.currentContext=null),typeof Xi==`object`&&Xi.removeAllHandlersOnTarget(J.contexts[e].GLctx.canvas),J.contexts[e]&&J.contexts[e].GLctx.canvas&&(J.contexts[e].GLctx.canvas.GLctxObject=void 0),J.contexts[e]=null},initExtensions:function(e){if(e||=J.currentContext,!e.initExtensionsDone){e.initExtensionsDone=!0;var t=e.GLctx;wi(t),Ti(t),Ei(t),t.disjointTimerQueryExt=t.getExtension(`EXT_disjoint_timer_query`),Di(t),(t.getSupportedExtensions()||[]).forEach(function(e){!e.includes(`lose_context`)&&!e.includes(`debug`)&&t.getExtension(e)})}}};function Oi(e,n,r,i){if(e!=62e3)return q.setErrorCode(12296),0;for(var a=1;;){var o=F[i>>>2];if(o==12440)a=F[i+4>>>2];else if(o==12344)break;else return q.setErrorCode(12292),0;i+=8}return a==2?(q.contextAttributes.majorVersion=a-1,q.contextAttributes.minorVersion=0,q.context=J.createContext(t.canvas,q.contextAttributes),q.context==0?(q.setErrorCode(12297),0):(q.setErrorCode(12288),J.makeContextCurrent(q.context),t.useWebGL=!0,K.moduleContextCreatedCallbacks.forEach(function(e){e()}),J.makeContextCurrent(null),62004)):(q.setErrorCode(12293),0)}function ki(e,t,n,r){return e==62e3?t==62002?(q.setErrorCode(12288),62006):(q.setErrorCode(12293),0):(q.setErrorCode(12296),0)}function Ai(e,t){return e==62e3?t==62004?(J.deleteContext(q.context),q.setErrorCode(12288),q.currentContext==t&&(q.currentContext=0),1):(q.setErrorCode(12294),0):(q.setErrorCode(12296),0)}function ji(e,t){return e==62e3?t==62006?(q.currentReadSurface==t&&(q.currentReadSurface=0),q.currentDrawSurface==t&&(q.currentDrawSurface=0),q.setErrorCode(12288),1):(q.setErrorCode(12301),1):(q.setErrorCode(12296),0)}function Mi(){return q.currentContext}function Ni(){return q.currentContext?62e3:0}function Pi(e){return e==12378?q.currentReadSurface:e==12377?q.currentDrawSurface:(q.setErrorCode(12300),0)}function Fi(e){return q.setErrorCode(12288),62e3}function Ii(){return q.errorCode}function Li(e,t,n){return e==62e3?(t&&(F[t>>>2]=1),n&&(F[n>>>2]=4),q.defaultDisplayInitialized=!0,q.setErrorCode(12288),1):(q.setErrorCode(12296),0)}function Ri(e,t,n,r){return e==62e3?r!=0&&r!=62004?(q.setErrorCode(12294),0):n!=0&&n!=62006||t!=0&&t!=62006?(q.setErrorCode(12301),0):(J.makeContextCurrent(r?q.context:null),q.currentContext=r,q.currentDrawSurface=t,q.currentReadSurface=n,q.setErrorCode(12288),1):(q.setErrorCode(12296),0)}function zi(e,t){if(e!=62e3)return q.setErrorCode(12296),0;if(q.setErrorCode(12288),q.stringCache[t])return q.stringCache[t];var n;switch(t){case 12371:n=de(`Emscripten`);break;case 12372:n=de(`1.4 Emscripten EGL`);break;case 12373:n=de(``);break;case 12429:n=de(`OpenGL_ES`);break;default:return q.setErrorCode(12300),0}return q.stringCache[t]=n,n}function Bi(e,n,r,i){if(e!=62e3)return q.setErrorCode(12296),0;if(n!=62006)return q.setErrorCode(12301),0;if(!i)return q.setErrorCode(12300),0;switch(q.setErrorCode(12288),r){case 12328:return F[i>>>2]=62002,1;case 12376:return 1;case 12375:return F[i>>>2]=t.canvas.width,1;case 12374:return F[i>>>2]=t.canvas.height,1;case 12432:return F[i>>>2]=-1,1;case 12433:return F[i>>>2]=-1,1;case 12434:return F[i>>>2]=-1,1;case 12422:return F[i>>>2]=12420,1;case 12441:return F[i>>>2]=12442,1;case 12435:return F[i>>>2]=12437,1;case 12416:case 12417:case 12418:case 12419:return 1;default:return q.setErrorCode(12292),0}}function Vi(){if(!q.defaultDisplayInitialized)q.setErrorCode(12289);else if(!t.ctx)q.setErrorCode(12290);else if(t.ctx.isContextLost())q.setErrorCode(12302);else return q.setErrorCode(12288),1;return 0}function Hi(e,t){return e==62e3?(t==0?gi(0,0):gi(1,t),q.setErrorCode(12288),1):(q.setErrorCode(12296),0)}function Ui(e){return e==62e3?(q.currentContext=0,q.currentReadSurface=0,q.currentDrawSurface=0,q.defaultDisplayInitialized=!1,q.setErrorCode(12288),1):(q.setErrorCode(12296),0)}var Wi=[];function Gi(e,t){Wi.length=0;var n;for(t>>=2;n=ge[e++>>>0];)t+=n!=105&t,Wi.push(n==105?F[t>>>0]:ye[t++>>>1]),++t;return Wi}function Ki(e,t,n){var r=Gi(t,n);return Ke[e].apply(null,r)}function qi(e){if(!e||!e.callee||!e.callee.name)return[null,``,``];e.callee.toString();var t=e.callee.name,n=`(`,r=!0;for(var i in e){var a=e[i];r||(n+=`, `),r=!1,n+=typeof a==`number`||typeof a==`string`?a:`(`+typeof a+`)`}n+=`)`;var o=e.callee.caller;return e=o?o.arguments:[],r&&(n=``),[e,t,n]}function Ji(e){var t=et(),n=t.lastIndexOf(`_emscripten_log`),r=t.lastIndexOf(`_emscripten_get_callstack`),i=t.indexOf(`
`,Math.max(n,r))+1;t=t.slice(i),e&32&&C(`EM_LOG_DEMANGLE is deprecated; ignoring`),e&8&&typeof emscripten_source_map>`u`&&(C(`Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.`),e^=8,e|=16);var a=null;if(e&128)for(a=qi(arguments);a[1].includes(`_emscripten_`);)a=qi(a[0]);var o=t.split(`
`);t=``;var s=RegExp(`\\s*(.*?)@(.*?):([0-9]+):([0-9]+)`),c=RegExp(`\\s*(.*?)@(.*):(.*)(:(.*))?`),l=RegExp(`\\s*at (.*?) \\((.*):(.*):(.*)\\)`);for(var u in o){var d=o[u],f=``,p=``,m=0,h=0,g=l.exec(d);if(g&&g.length==5)f=g[1],p=g[2],m=g[3],h=g[4];else if(g=s.exec(d),g||=c.exec(d),g&&g.length>=4)f=g[1],p=g[2],m=g[3],h=g[4]|0;else{t+=d+`
`;continue}var _=!1;if(e&8){var v=emscripten_source_map.originalPositionFor({line:m,column:h});_=v&&v.source,_&&(e&64&&(v.source=v.source.substring(v.source.replace(/\\/g,`/`).lastIndexOf(`/`)+1)),t+=`    at `+f+` (`+v.source+`:`+v.line+`:`+v.column+`)
`)}(e&16||!_)&&(e&64&&(p=p.substring(p.replace(/\\/g,`/`).lastIndexOf(`/`)+1)),t+=(_?`     = `+f:`    at `+f)+` (`+p+`:`+m+`:`+h+`)
`),e&128&&a[0]&&(a[1]==f&&a[2].length>0&&(t=t.replace(/\s+$/,``),t+=` with values: `+a[1]+a[2]+`
`),a=qi(a[0]))}return t=t.replace(/\s+$/,``),t}function Yi(e,t,n){var r=Ji(e);return!t||n<=0?re(r)+1:ne(r,t,n)+1}var Xi={inEventHandler:0,removeAllEventListeners:function(){for(var e=Xi.eventHandlers.length-1;e>=0;--e)Xi._removeHandler(e);Xi.eventHandlers=[],Xi.deferredCalls=[]},registerRemoveEventListeners:function(){Xi.removeEventListenersRegistered||=(we.push(Xi.removeAllEventListeners),!0)},deferredCalls:[],deferCall:function(e,t,n){function r(e,t){if(e.length!=t.length)return!1;for(var n in e)if(e[n]!=t[n])return!1;return!0}for(var i in Xi.deferredCalls){var a=Xi.deferredCalls[i];if(a.targetFunction==e&&r(a.argsList,n))return}Xi.deferredCalls.push({targetFunction:e,precedence:t,argsList:n}),Xi.deferredCalls.sort(function(e,t){return e.precedence<t.precedence})},removeDeferredCalls:function(e){for(var t=0;t<Xi.deferredCalls.length;++t)Xi.deferredCalls[t].targetFunction==e&&(Xi.deferredCalls.splice(t,1),--t)},canPerformEventHandlerRequests:function(){return Xi.inEventHandler&&Xi.currentEventHandler.allowsDeferredCalls},runDeferredCalls:function(){if(Xi.canPerformEventHandlerRequests())for(var e=0;e<Xi.deferredCalls.length;++e){var t=Xi.deferredCalls[e];Xi.deferredCalls.splice(e,1),--e,t.targetFunction.apply(null,t.argsList)}},eventHandlers:[],removeAllHandlersOnTarget:function(e,t){for(var n=0;n<Xi.eventHandlers.length;++n)Xi.eventHandlers[n].target!=e||t&&t!=Xi.eventHandlers[n].eventTypeString||Xi._removeHandler(n--)},_removeHandler:function(e){var t=Xi.eventHandlers[e];t.target.removeEventListener(t.eventTypeString,t.eventListenerFunc,t.useCapture),Xi.eventHandlers.splice(e,1)},registerOrRemoveHandler:function(e){var t=function(t){++Xi.inEventHandler,Xi.currentEventHandler=e,Xi.runDeferredCalls(),e.handlerFunc(t),Xi.runDeferredCalls(),--Xi.inEventHandler};if(e.callbackfunc)e.eventListenerFunc=t,e.target.addEventListener(e.eventTypeString,t,e.useCapture),Xi.eventHandlers.push(e),Xi.registerRemoveEventListeners();else for(var n=0;n<Xi.eventHandlers.length;++n)Xi.eventHandlers[n].target==e.target&&Xi.eventHandlers[n].eventTypeString==e.eventTypeString&&Xi._removeHandler(n--)},getNodeNameForTarget:function(e){return e?e==window?`#window`:e==screen?`#screen`:e&&e.nodeName?e.nodeName:``:``},fullscreenEnabled:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}};function Zi(e){return e>2?N(e):e}var Qi=[0,typeof document<`u`?document:0,typeof window<`u`?window:0];function $i(e){return e=Zi(e),Qi[e]||(typeof document<`u`?document.querySelector(e):void 0)}function ea(e){return $i(e)}function ta(e,t,n){var r=ea(e);if(!r)return-4;F[t>>>2]=r.width,F[n>>>2]=r.height}function na(){return typeof devicePixelRatio==`number`&&devicePixelRatio||1}function ra(e){return Qi.indexOf(e)<0?e.getBoundingClientRect():{left:0,top:0}}function ia(e,t,n){if(e=$i(e),!e)return-4;var r=ra(e);return ye[t>>>3]=r.width,ye[n>>>3]=r.height,0}function aa(){return 4294901760}function oa(){return aa()}function sa(e,t,n){(e|0)===e&&(e=N(e)),e=Ct.resolve(e);var r=Jd[e];if(r){var i=r.getContext(`2d`).getImageData(0,0,r.width,r.height),a=nf(r.width*r.height*4);return ge.set(i.data,a>>>0),F[t>>>2]=r.width,F[n>>>2]=r.height,a}return 0}function ca(e){X.activeTexture(e)}function la(e,t){X.attachShader(J.programs[e],J.shaders[t])}function ua(e,t){X.disjointTimerQueryExt.beginQueryEXT(e,J.queries[t])}function da(e,t,n){X.bindAttribLocation(J.programs[e],t,N(n))}function fa(e,t){X.bindBuffer(e,J.buffers[t])}function pa(e,t){X.bindFramebuffer(e,J.framebuffers[t])}function ma(e,t){X.bindRenderbuffer(e,J.renderbuffers[t])}function ha(e,t){X.bindTexture(e,J.textures[t])}function ga(e){X.bindVertexArray(J.vaos[e])}function _a(e,t,n,r){X.blendColor(e,t,n,r)}function va(e){X.blendEquation(e)}function ya(e,t){X.blendEquationSeparate(e,t)}function ba(e,t){X.blendFunc(e,t)}function xa(e,t,n,r){X.blendFuncSeparate(e,t,n,r)}function Sa(e,t,n,r){X.bufferData(e,n?ge.subarray(n>>>0,n+t>>>0):t,r)}function Ca(e,t,n,r){X.bufferSubData(e,t,ge.subarray(r>>>0,r+n>>>0))}function wa(e){return X.checkFramebufferStatus(e)}function Ta(e){X.clear(e)}function Ea(e,t,n,r){X.clearColor(e,t,n,r)}function Da(e){X.clearDepth(e)}function Oa(e){X.clearStencil(e)}function ka(e,t,n,r){X.colorMask(!!e,!!t,!!n,!!r)}function Aa(e){X.compileShader(J.shaders[e])}function ja(e,t,n,r,i,a,o,s){X.compressedTexImage2D(e,t,n,r,i,a,s?ge.subarray(s>>>0,s+o>>>0):null)}function Ma(e,t,n,r,i,a,o,s,c){X.compressedTexSubImage2D(e,t,n,r,i,a,o,c?ge.subarray(c>>>0,c+s>>>0):null)}function Na(e,t,n,r,i,a,o,s){X.copyTexImage2D(e,t,n,r,i,a,o,s)}function Pa(e,t,n,r,i,a,o,s){X.copyTexSubImage2D(e,t,n,r,i,a,o,s)}function Fa(){var e=J.getNewId(J.programs),t=X.createProgram();return t.name=e,t.maxUniformLength=t.maxAttributeLength=t.maxUniformBlockNameLength=0,t.uniformIdCounter=1,J.programs[e]=t,e}function Ia(e){var t=J.getNewId(J.shaders);return J.shaders[t]=X.createShader(e),t}function La(e){X.cullFace(e)}function Ra(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.buffers[r];i&&(X.deleteBuffer(i),i.name=0,J.buffers[r]=null)}}function za(e,t){for(var n=0;n<e;++n){var r=F[t+n*4>>>2],i=J.framebuffers[r];i&&(X.deleteFramebuffer(i),i.name=0,J.framebuffers[r]=null)}}function Ba(e){if(e){var t=J.programs[e];t?(X.deleteProgram(t),t.name=0,J.programs[e]=null):J.recordError(1281)}}function Va(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.queries[r];i&&(X.disjointTimerQueryExt.deleteQueryEXT(i),J.queries[r]=null)}}function Ha(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.renderbuffers[r];i&&(X.deleteRenderbuffer(i),i.name=0,J.renderbuffers[r]=null)}}function Ua(e){if(e){var t=J.shaders[e];t?(X.deleteShader(t),J.shaders[e]=null):J.recordError(1281)}}function Wa(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.textures[r];i&&(X.deleteTexture(i),i.name=0,J.textures[r]=null)}}function Ga(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2];X.deleteVertexArray(J.vaos[r]),J.vaos[r]=null}}function Ka(e){X.depthFunc(e)}function qa(e){X.depthMask(!!e)}function Y(e,t){X.depthRange(e,t)}function Ja(e,t){X.detachShader(J.programs[e],J.shaders[t])}function Ya(e){X.disable(e)}function Xa(e){X.disableVertexAttribArray(e)}function Za(e,t,n){X.drawArrays(e,t,n)}function Qa(e,t,n,r){X.drawArraysInstanced(e,t,n,r)}var $a=[];function eo(e,t){for(var n=$a[e],r=0;r<e;r++)n[r]=F[t+r*4>>>2];X.drawBuffers(n)}function to(e,t,n,r){X.drawElements(e,t,n,r)}function no(e,t,n,r,i){X.drawElementsInstanced(e,t,n,r,i)}function ro(e){X.enable(e)}function io(e){X.enableVertexAttribArray(e)}function ao(e){X.disjointTimerQueryExt.endQueryEXT(e)}function oo(){X.finish()}function so(){X.flush()}function co(e,t,n,r){X.framebufferRenderbuffer(e,t,n,J.renderbuffers[r])}function lo(e,t,n,r,i){X.framebufferTexture2D(e,t,n,J.textures[r],i)}function uo(e){X.frontFace(e)}function fo(e,t,n,r){for(var i=0;i<e;i++){var a=X[n](),o=a&&J.getNewId(r);a?(a.name=o,r[o]=a):J.recordError(1282),F[t+i*4>>>2]=o}}function po(e,t){fo(e,t,`createBuffer`,J.buffers)}function mo(e,t){fo(e,t,`createFramebuffer`,J.framebuffers)}function ho(e,t){for(var n=0;n<e;n++){var r=X.disjointTimerQueryExt.createQueryEXT();if(!r){for(J.recordError(1282);n<e;)F[t+n++*4>>>2]=0;return}var i=J.getNewId(J.queries);r.name=i,J.queries[i]=r,F[t+n*4>>>2]=i}}function go(e,t){fo(e,t,`createRenderbuffer`,J.renderbuffers)}function _o(e,t){fo(e,t,`createTexture`,J.textures)}function vo(e,t){fo(e,t,`createVertexArray`,J.vaos)}function yo(e){X.generateMipmap(e)}function bo(e,t,n,r,i,a,o,s){t=J.programs[t];var c=X[e](t,n);if(c){var l=s&&ne(c.name,s,r);i&&(F[i>>>2]=l),a&&(F[a>>>2]=c.size),o&&(F[o>>>2]=c.type)}}function xo(e,t,n,r,i,a,o){bo(`getActiveAttrib`,e,t,n,r,i,a,o)}function So(e,t,n,r,i,a,o){bo(`getActiveUniform`,e,t,n,r,i,a,o)}function Co(e,t,n,r){var i=X.getAttachedShaders(J.programs[e]),a=i.length;a>t&&(a=t),F[n>>>2]=a;for(var o=0;o<a;++o){var s=J.shaders.indexOf(i[o]);F[r+o*4>>>2]=s}}function wo(e,t){return X.getAttribLocation(J.programs[e],N(t))}function To(e,t){I[e>>>2]=t,I[e+4>>>2]=(t-I[e>>>2])/4294967296}function Eo(e,t,n){if(!t)J.recordError(1281);else{var r=void 0;switch(e){case 36346:r=1;break;case 36344:n!=0&&n!=1&&J.recordError(1280);return;case 36345:r=0;break;case 34466:var i=X.getParameter(34467);r=i?i.length:0}if(r===void 0){var a=X.getParameter(e);switch(typeof a){case`number`:r=a;break;case`boolean`:r=+!!a;break;case`string`:J.recordError(1280);return;case`object`:if(a===null)switch(e){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:r=0;break;default:J.recordError(1280);return}else if(a instanceof Float32Array||a instanceof Uint32Array||a instanceof Int32Array||a instanceof Array){for(var o=0;o<a.length;++o)switch(n){case 0:F[t+o*4>>>2]=a[o];break;case 2:L[t+o*4>>>2]=a[o];break;case 4:he[t+o>>>0]=+!!a[o]}return}else try{r=a.name|0}catch(t){J.recordError(1280),x(`GL_INVALID_ENUM in glGet`+n+`v: Unknown object returned from WebGL getParameter(`+e+`)! (error: `+t+`)`);return}break;default:J.recordError(1280),x(`GL_INVALID_ENUM in glGet`+n+`v: Native code calling glGet`+n+`v(`+e+`) and it returns `+a+` of type `+typeof a+`!`);return}}switch(n){case 1:To(t,r);break;case 0:F[t>>>2]=r;break;case 2:L[t>>>2]=r;break;case 4:he[t>>>0]=+!!r}}}function Do(e,t){Eo(e,t,4)}function Oo(e,t,n){n?F[n>>>2]=X.getBufferParameter(e,t):J.recordError(1281)}function ko(){var e=X.getError()||J.lastError;return J.lastError=0,e}function Ao(e,t){Eo(e,t,2)}function jo(e,t,n,r){var i=X.getFramebufferAttachmentParameter(e,t,n);(i instanceof WebGLRenderbuffer||i instanceof WebGLTexture)&&(i=i.name|0),F[r>>>2]=i}function Mo(e,t){Eo(e,t,0)}function No(e,t,n,r){var i=X.getProgramInfoLog(J.programs[e]);i===null&&(i=`(unknown error)`);var a=t>0&&r?ne(i,r,t):0;n&&(F[n>>>2]=a)}function Po(e,t,n){if(!n)J.recordError(1281);else if(e>=J.counter)J.recordError(1281);else if(e=J.programs[e],t==35716){var r=X.getProgramInfoLog(e);r===null&&(r=`(unknown error)`),F[n>>>2]=r.length+1}else if(t==35719){if(!e.maxUniformLength)for(var i=0;i<X.getProgramParameter(e,35718);++i)e.maxUniformLength=Math.max(e.maxUniformLength,X.getActiveUniform(e,i).name.length+1);F[n>>>2]=e.maxUniformLength}else if(t==35722){if(!e.maxAttributeLength)for(var i=0;i<X.getProgramParameter(e,35721);++i)e.maxAttributeLength=Math.max(e.maxAttributeLength,X.getActiveAttrib(e,i).name.length+1);F[n>>>2]=e.maxAttributeLength}else if(t==35381){if(!e.maxUniformBlockNameLength)for(var i=0;i<X.getProgramParameter(e,35382);++i)e.maxUniformBlockNameLength=Math.max(e.maxUniformBlockNameLength,X.getActiveUniformBlockName(e,i).length+1);F[n>>>2]=e.maxUniformBlockNameLength}else F[n>>>2]=X.getProgramParameter(e,t)}function Fo(e,t,n){if(!n)J.recordError(1281);else{var r=J.queries[e],i=X.disjointTimerQueryExt.getQueryObjectEXT(r,t);To(n,typeof i==`boolean`?+!!i:i)}}function Io(e,t,n){if(!n)J.recordError(1281);else{var r=J.queries[e],i=X.disjointTimerQueryExt.getQueryObjectEXT(r,t),a=typeof i==`boolean`?+!!i:i;F[n>>>2]=a}}function Lo(e,t,n){if(!n)J.recordError(1281);else{var r=J.queries[e],i=X.disjointTimerQueryExt.getQueryObjectEXT(r,t);To(n,typeof i==`boolean`?+!!i:i)}}function Ro(e,t,n){if(!n)J.recordError(1281);else{var r=J.queries[e],i=X.disjointTimerQueryExt.getQueryObjectEXT(r,t),a=typeof i==`boolean`?+!!i:i;F[n>>>2]=a}}function zo(e,t,n){n?F[n>>>2]=X.disjointTimerQueryExt.getQueryEXT(e,t):J.recordError(1281)}function Bo(e,t,n){n?F[n>>>2]=X.getRenderbufferParameter(e,t):J.recordError(1281)}function Vo(e,t,n,r){var i=X.getShaderInfoLog(J.shaders[e]);i===null&&(i=`(unknown error)`);var a=t>0&&r?ne(i,r,t):0;n&&(F[n>>>2]=a)}function Ho(e,t,n,r){var i=X.getShaderPrecisionFormat(e,t);F[n>>>2]=i.rangeMin,F[n+4>>>2]=i.rangeMax,F[r>>>2]=i.precision}function Uo(e,t,n,r){var i=X.getShaderSource(J.shaders[e]);if(i){var a=t>0&&r?ne(i,r,t):0;n&&(F[n>>>2]=a)}}function Wo(e,t,n){if(!n)J.recordError(1281);else if(t==35716){var r=X.getShaderInfoLog(J.shaders[e]);r===null&&(r=`(unknown error)`);var i=r?r.length+1:0;F[n>>>2]=i}else if(t==35720){var a=X.getShaderSource(J.shaders[e]),o=a?a.length+1:0;F[n>>>2]=o}else F[n>>>2]=X.getShaderParameter(J.shaders[e],t)}function Go(e){var t=re(e)+1,n=nf(t);return ne(e,n,t),n}function Ko(e){var t=J.stringCache[e];if(!t){switch(e){case 7939:var n=X.getSupportedExtensions()||[];n=n.concat(n.map(function(e){return`GL_`+e})),t=Go(n.join(` `));break;case 7936:case 7937:case 37445:case 37446:var r=X.getParameter(e);r||J.recordError(1280),t=r&&Go(r);break;case 7938:var i=X.getParameter(7938);i=`OpenGL ES 2.0 (`+i+`)`,t=Go(i);break;case 35724:var a=X.getParameter(35724),o=a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);o!==null&&(o[1].length==3&&(o[1]+=`0`),a=`OpenGL ES GLSL ES `+o[1]+` (`+a+`)`),t=Go(a);break;default:J.recordError(1280)}J.stringCache[e]=t}return t}function qo(e,t,n){n?L[n>>>2]=X.getTexParameter(e,t):J.recordError(1281)}function Jo(e,t,n){n?F[n>>>2]=X.getTexParameter(e,t):J.recordError(1281)}function Yo(e){return parseInt(e)}function Xo(e){return e.slice(-1)==`]`&&e.lastIndexOf(`[`)}function Zo(e){var t=e.uniformLocsById,n=e.uniformSizeAndIdsByName,r,i;if(!t)for(e.uniformLocsById=t={},e.uniformArrayNamesById={},r=0;r<X.getProgramParameter(e,35718);++r){var a=X.getActiveUniform(e,r),o=a.name,s=a.size,c=Xo(o),l=c>0?o.slice(0,c):o,u=e.uniformIdCounter;for(e.uniformIdCounter+=s,n[l]=[s,u],i=0;i<s;++i)t[u]=i,e.uniformArrayNamesById[u++]=l}}function Qo(e,t){if(t=N(t),e=J.programs[e]){Zo(e);var n=e.uniformLocsById,r=0,i=t,a=Xo(t);a>0&&(r=Yo(t.slice(a+1))>>>0,i=t.slice(0,a));var o=e.uniformSizeAndIdsByName[i];if(o&&r<o[0]&&(r+=o[1],n[r]=n[r]||X.getUniformLocation(e,t)))return r}else J.recordError(1281);return-1}function $o(e){var t=X.currentProgram;if(t){var n=t.uniformLocsById[e];return typeof n==`number`&&(t.uniformLocsById[e]=n=X.getUniformLocation(t,t.uniformArrayNamesById[e]+(n>0?`[`+n+`]`:``))),n}J.recordError(1282)}function es(e,t,n,r){if(!n)J.recordError(1281);else{e=J.programs[e],Zo(e);var i=X.getUniform(e,$o(t));if(typeof i==`number`||typeof i==`boolean`)switch(r){case 0:F[n>>>2]=i;break;case 2:L[n>>>2]=i}else for(var a=0;a<i.length;a++)switch(r){case 0:F[n+a*4>>>2]=i[a];break;case 2:L[n+a*4>>>2]=i[a]}}}function ts(e,t,n){es(e,t,n,2)}function ns(e,t,n){es(e,t,n,0)}function rs(e,t,n){n?F[n>>>2]=X.getVertexAttribOffset(e,t):J.recordError(1281)}function is(e,t,n,r){if(!n)J.recordError(1281);else{var i=X.getVertexAttrib(e,t);if(t==34975)F[n>>>2]=i&&i.name;else if(typeof i==`number`||typeof i==`boolean`)switch(r){case 0:F[n>>>2]=i;break;case 2:L[n>>>2]=i;break;case 5:F[n>>>2]=Math.fround(i)}else for(var a=0;a<i.length;a++)switch(r){case 0:F[n+a*4>>>2]=i[a];break;case 2:L[n+a*4>>>2]=i[a];break;case 5:F[n+a*4>>>2]=Math.fround(i[a])}}}function as(e,t,n){is(e,t,n,2)}function os(e,t,n){is(e,t,n,5)}function ss(e,t){X.hint(e,t)}function cs(e){var t=J.buffers[e];return t?X.isBuffer(t):0}function ls(e){return X.isEnabled(e)}function us(e){var t=J.framebuffers[e];return t?X.isFramebuffer(t):0}function ds(e){return e=J.programs[e],e?X.isProgram(e):0}function fs(e){var t=J.queries[e];return t?X.disjointTimerQueryExt.isQueryEXT(t):0}function ps(e){var t=J.renderbuffers[e];return t?X.isRenderbuffer(t):0}function ms(e){var t=J.shaders[e];return t?X.isShader(t):0}function hs(e){var t=J.textures[e];return t?X.isTexture(t):0}function gs(e){var t=J.vaos[e];return t?X.isVertexArray(t):0}function _s(e){X.lineWidth(e)}function vs(e){e=J.programs[e],X.linkProgram(e),e.uniformLocsById=0,e.uniformSizeAndIdsByName={}}function ys(e,t){e==3317&&(J.unpackAlignment=t),X.pixelStorei(e,t)}function bs(e,t){X.polygonOffset(e,t)}function xs(e,t){X.disjointTimerQueryExt.queryCounterEXT(J.queries[e],t)}function Ss(e,t,n,r){function i(e,t){return e+t-1&-t}return t*i(e*n,r)}function Cs(e){return{5:3,6:4,8:2,29502:3,29504:4}[e-6402]||1}function ws(e){return e-=5120,e==1?ge:e==4?F:e==6?L:e==5||e==28922?I:ve}function Ts(e){return 31-Math.clz32(e.BYTES_PER_ELEMENT)}function Es(e,t,n,r,i,a){var o=ws(e),s=Ts(o),c=1<<s,l=Ss(n,r,Cs(t)*c,J.unpackAlignment);return o.subarray(i>>>s,i+l>>>s)}function Ds(e,t,n,r,i,a,o){var s=Es(a,i,n,r,o,i);s?X.readPixels(e,t,n,r,i,a,s):J.recordError(1280)}function Os(){}function ks(e,t,n,r){X.renderbufferStorage(e,t,n,r)}function As(e,t){X.sampleCoverage(e,!!t)}function js(e,t,n,r){X.scissor(e,t,n,r)}function Ms(){J.recordError(1280)}function Ns(e,t,n,r){var i=J.getSource(e,t,n,r);X.shaderSource(J.shaders[e],i)}function Ps(e,t,n){X.stencilFunc(e,t,n)}function Fs(e,t,n,r){X.stencilFuncSeparate(e,t,n,r)}function Is(e){X.stencilMask(e)}function Ls(e,t){X.stencilMaskSeparate(e,t)}function Rs(e,t,n){X.stencilOp(e,t,n)}function zs(e,t,n,r){X.stencilOpSeparate(e,t,n,r)}function Bs(e,t,n,r,i,a,o,s,c){X.texImage2D(e,t,n,r,i,a,o,s,c?Es(s,o,r,i,c,n):null)}function Vs(e,t,n){X.texParameterf(e,t,n)}function Hs(e,t,n){var r=L[n>>>2];X.texParameterf(e,t,r)}function Us(e,t,n){X.texParameteri(e,t,n)}function Ws(e,t,n){var r=F[n>>>2];X.texParameteri(e,t,r)}function Gs(e,t,n,r,i,a,o,s,c){var l=null;c&&(l=Es(s,o,i,a,c,0)),X.texSubImage2D(e,t,n,r,i,a,o,s,l)}function Ks(e,t){X.uniform1f($o(e),t)}var qs=[];function Js(e,t,n){if(t<=288)for(var r=qs[t-1],i=0;i<t;++i)r[i]=L[n+4*i>>>2];else var r=L.subarray(n>>>2,n+t*4>>>2);X.uniform1fv($o(e),r)}function Ys(e,t){X.uniform1i($o(e),t)}var Xs=[];function Zs(e,t,n){if(t<=288)for(var r=Xs[t-1],i=0;i<t;++i)r[i]=F[n+4*i>>>2];else var r=F.subarray(n>>>2,n+t*4>>>2);X.uniform1iv($o(e),r)}function Qs(e,t,n){X.uniform2f($o(e),t,n)}function $s(e,t,n){if(t<=144)for(var r=qs[2*t-1],i=0;i<2*t;i+=2)r[i]=L[n+4*i>>>2],r[i+1]=L[n+(4*i+4)>>>2];else var r=L.subarray(n>>>2,n+t*8>>>2);X.uniform2fv($o(e),r)}function ec(e,t,n){X.uniform2i($o(e),t,n)}function tc(e,t,n){if(t<=144)for(var r=Xs[2*t-1],i=0;i<2*t;i+=2)r[i]=F[n+4*i>>>2],r[i+1]=F[n+(4*i+4)>>>2];else var r=F.subarray(n>>>2,n+t*8>>>2);X.uniform2iv($o(e),r)}function nc(e,t,n,r){X.uniform3f($o(e),t,n,r)}function rc(e,t,n){if(t<=96)for(var r=qs[3*t-1],i=0;i<3*t;i+=3)r[i]=L[n+4*i>>>2],r[i+1]=L[n+(4*i+4)>>>2],r[i+2]=L[n+(4*i+8)>>>2];else var r=L.subarray(n>>>2,n+t*12>>>2);X.uniform3fv($o(e),r)}function ic(e,t,n,r){X.uniform3i($o(e),t,n,r)}function ac(e,t,n){if(t<=96)for(var r=Xs[3*t-1],i=0;i<3*t;i+=3)r[i]=F[n+4*i>>>2],r[i+1]=F[n+(4*i+4)>>>2],r[i+2]=F[n+(4*i+8)>>>2];else var r=F.subarray(n>>>2,n+t*12>>>2);X.uniform3iv($o(e),r)}function oc(e,t,n,r,i){X.uniform4f($o(e),t,n,r,i)}function sc(e,t,n){if(t<=72){var r=qs[4*t-1],i=L;n>>=2;for(var a=0;a<4*t;a+=4){var o=n+a;r[a]=i[o>>>0],r[a+1]=i[o+1>>>0],r[a+2]=i[o+2>>>0],r[a+3]=i[o+3>>>0]}}else var r=L.subarray(n>>>2,n+t*16>>>2);X.uniform4fv($o(e),r)}function cc(e,t,n,r,i){X.uniform4i($o(e),t,n,r,i)}function lc(e,t,n){if(t<=72)for(var r=Xs[4*t-1],i=0;i<4*t;i+=4)r[i]=F[n+4*i>>>2],r[i+1]=F[n+(4*i+4)>>>2],r[i+2]=F[n+(4*i+8)>>>2],r[i+3]=F[n+(4*i+12)>>>2];else var r=F.subarray(n>>>2,n+t*16>>>2);X.uniform4iv($o(e),r)}function uc(e,t,n,r){if(t<=72)for(var i=qs[4*t-1],a=0;a<4*t;a+=4)i[a]=L[r+4*a>>>2],i[a+1]=L[r+(4*a+4)>>>2],i[a+2]=L[r+(4*a+8)>>>2],i[a+3]=L[r+(4*a+12)>>>2];else var i=L.subarray(r>>>2,r+t*16>>>2);X.uniformMatrix2fv($o(e),!!n,i)}function dc(e,t,n,r){if(t<=32)for(var i=qs[9*t-1],a=0;a<9*t;a+=9)i[a]=L[r+4*a>>>2],i[a+1]=L[r+(4*a+4)>>>2],i[a+2]=L[r+(4*a+8)>>>2],i[a+3]=L[r+(4*a+12)>>>2],i[a+4]=L[r+(4*a+16)>>>2],i[a+5]=L[r+(4*a+20)>>>2],i[a+6]=L[r+(4*a+24)>>>2],i[a+7]=L[r+(4*a+28)>>>2],i[a+8]=L[r+(4*a+32)>>>2];else var i=L.subarray(r>>>2,r+t*36>>>2);X.uniformMatrix3fv($o(e),!!n,i)}function fc(e,t,n,r){if(t<=18){var i=qs[16*t-1],a=L;r>>=2;for(var o=0;o<16*t;o+=16){var s=r+o;i[o]=a[s>>>0],i[o+1]=a[s+1>>>0],i[o+2]=a[s+2>>>0],i[o+3]=a[s+3>>>0],i[o+4]=a[s+4>>>0],i[o+5]=a[s+5>>>0],i[o+6]=a[s+6>>>0],i[o+7]=a[s+7>>>0],i[o+8]=a[s+8>>>0],i[o+9]=a[s+9>>>0],i[o+10]=a[s+10>>>0],i[o+11]=a[s+11>>>0],i[o+12]=a[s+12>>>0],i[o+13]=a[s+13>>>0],i[o+14]=a[s+14>>>0],i[o+15]=a[s+15>>>0]}}else var i=L.subarray(r>>>2,r+t*64>>>2);X.uniformMatrix4fv($o(e),!!n,i)}function pc(e){e=J.programs[e],X.useProgram(e),X.currentProgram=e}function mc(e){X.validateProgram(J.programs[e])}function hc(e,t){X.vertexAttrib1f(e,t)}function gc(e,t){X.vertexAttrib1f(e,L[t>>>2])}function _c(e,t,n){X.vertexAttrib2f(e,t,n)}function vc(e,t){X.vertexAttrib2f(e,L[t>>>2],L[t+4>>>2])}function yc(e,t,n,r){X.vertexAttrib3f(e,t,n,r)}function bc(e,t){X.vertexAttrib3f(e,L[t>>>2],L[t+4>>>2],L[t+8>>>2])}function xc(e,t,n,r,i){X.vertexAttrib4f(e,t,n,r,i)}function Sc(e,t){X.vertexAttrib4f(e,L[t>>>2],L[t+4>>>2],L[t+8>>>2],L[t+12>>>2])}function Cc(e,t){X.vertexAttribDivisor(e,t)}function wc(e,t,n,r,i,a){X.vertexAttribPointer(e,t,n,!!r,i,a)}function Tc(e,t,n,r){X.viewport(e,t,n,r)}function Ec(e,t,n){ge.copyWithin(e>>>0,t>>>0,t+n>>>0)}function Dc(e){try{return k.grow(e-me.byteLength+65535>>>16),be(k.buffer),1}catch{}}function Oc(e){var t=ge.length;e>>>=0;var n=aa();if(e>n)return!1;let r=(e,t)=>e+(t-e%t)%t;for(var i=1;i<=4;i*=2){var a=t*(1+.2/i);if(a=Math.min(a,e+100663296),Dc(Math.min(n,r(Math.max(e,a),65536))))return!0}return!1}function kc(e,t,n){var r=ea(e);return r?(r.width=t,r.height=n,0):-4}function Ac(e,t,n){return e=$i(e),e?(e.style.width=t+`px`,e.style.height=n+`px`,0):-4}function jc(e,t){var n=J.getContext(e),r=N(t);return r.startsWith(`GL_`)&&(r=r.substr(3)),r==`ANGLE_instanced_arrays`&&wi(X),r==`OES_vertex_array_object`&&Ti(X),r==`WEBGL_draw_buffers`&&Ei(X),r==`WEBGL_multi_draw`&&Di(X),!!n.GLctx.getExtension(r)}var Mc=[`default`,`low-power`,`high-performance`];function Nc(e,t){if(!t)return-5;if(e=J.contexts[e],!e)return-3;var n=e.GLctx;if(!n)return-3;n=n.getContextAttributes(),F[t>>>2]=n.alpha,F[t+4>>>2]=n.depth,F[t+8>>>2]=n.stencil,F[t+12>>>2]=n.antialias,F[t+16>>>2]=n.premultipliedAlpha,F[t+20>>>2]=n.preserveDrawingBuffer;var r=n.powerPreference&&Mc.indexOf(n.powerPreference);return F[t+24>>>2]=r,F[t+28>>>2]=n.failIfMajorPerformanceCaveat,F[t+32>>>2]=e.version,F[t+36>>>2]=0,F[t+40>>>2]=e.attributes.enableExtensionsByDefault,0}function Pc(){return J.currentContext?J.currentContext.handle:0}function Fc(){return Pc()}var Ic={};function Lc(){return o||`./this.program`}function Rc(){if(!Rc.strings){var e={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:Lc()};for(var t in Ic)Ic[t]===void 0?delete e[t]:e[t]=Ic[t];var n=[];for(var t in e)n.push(t+`=`+e[t]);Rc.strings=n}return Rc.strings}function zc(e,t){var n=0;return Rc().forEach(function(r,i){var a=t+n;I[e+i*4>>>2]=a,pe(r,a),n+=r.length+1}),0}function Bc(e,t){var n=Rc();I[e>>>2]=n.length;var r=0;return n.forEach(function(e){r+=e.length+1}),I[t>>>2]=r,0}function Vc(e){try{var t=W.getStreamFromFD(e);return U.close(t),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return e.errno}}function Hc(e,t){try{var n=W.getStreamFromFD(e),r=n.tty?2:U.isDir(n.mode)?3:U.isLink(n.mode)?7:4;return he[t>>>0]=r,0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return e.errno}}function Uc(e,t,n,r){for(var i=0,a=0;a<n;a++){var o=I[t>>>2],s=I[t+4>>>2];t+=8;var c=U.read(e,he,o,s,r);if(c<0)return-1;if(i+=c,c<s)break}return i}function Wc(e,t,n,r){try{var i=Uc(W.getStreamFromFD(e),t,n);return F[r>>>2]=i,0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return e.errno}}function Gc(e,t){return t+2097152>>>0<4194305-!!e?(e>>>0)+t*4294967296:NaN}function Kc(e,t,n,r,i){try{var a=Gc(t,n);if(isNaN(a))return 61;var o=W.getStreamFromFD(e);return U.llseek(o,a,r),Ge=[o.position>>>0,(We=o.position,+Math.abs(We)>=1?We>0?(Math.min(+Math.floor(We/4294967296),4294967295)|0)>>>0:~~+Math.ceil((We-+(~~We>>>0))/4294967296)>>>0:0)],F[i>>>2]=Ge[0],F[i+4>>>2]=Ge[1],o.getdents&&a===0&&r===0&&(o.getdents=null),0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return e.errno}}function qc(e,t,n,r){for(var i=0,a=0;a<n;a++){var o=I[t>>>2],s=I[t+4>>>2];t+=8;var c=U.write(e,he,o,s,r);if(c<0)return-1;i+=c}return i}function Jc(e,t,n,r){try{var i=qc(W.getStreamFromFD(e),t,n);return I[r>>>2]=i,0}catch(e){if(U===void 0||!(e instanceof U.ErrnoError))throw e;return e.errno}}function Yc(){return E()}function Xc(e){for(var t=e.split(`.`),n=0;n<4;n++){var r=Number(t[n]);if(isNaN(r))return null;t[n]=r}return(t[0]|t[1]<<8|t[2]<<16|t[3]<<24)>>>0}function Zc(e){var t,n,r,i,a=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,o=[];if(!a.test(e))return null;if(e===`::`)return[0,0,0,0,0,0,0,0];for(e=e.startsWith(`::`)?e.replace(`::`,`Z:`):e.replace(`::`,`:Z:`),e.indexOf(`.`)>0?(e=e.replace(RegExp(`[.]`,`g`),`:`),t=e.split(`:`),t[t.length-4]=Yo(t[t.length-4])+Yo(t[t.length-3])*256,t[t.length-3]=Yo(t[t.length-2])+Yo(t[t.length-1])*256,t=t.slice(0,t.length-2)):t=e.split(`:`),r=0,i=0,n=0;n<t.length;n++)if(typeof t[n]==`string`){if(t[n]===`Z`){for(i=0;i<8-t.length+1;i++)o[n+i]=0;r=i-1}else o[n+r]=cf(parseInt(t[n],16))}else o[n+r]=t[n];return[o[1]<<16|o[0],o[3]<<16|o[2],o[5]<<16|o[4],o[7]<<16|o[6]]}var Qc={address_map:{id:1,addrs:{},names:{}},lookup_name:function(e){var t=Xc(e);if(t!==null||(t=Zc(e),t!==null))return e;var n;if(Qc.address_map.addrs[e])n=Qc.address_map.addrs[e];else{var r=Qc.address_map.id++;j(r<65535,`exceeded max address mappings of 65535`),n=`172.29.`+(r&255)+`.`+(r&65280),Qc.address_map.names[n]=e,Qc.address_map.addrs[e]=n}return n},lookup_addr:function(e){return Qc.address_map.names[e]?Qc.address_map.names[e]:null}};function $c(e){var t=nf(20),n=nf(e.length+1);ne(e,n,e.length+1),I[t>>>2]=n;var r=nf(4);I[r>>>2]=0,I[t+4>>>2]=r;var i=2;F[t+8>>>2]=i,F[t+12>>>2]=4;var a=nf(12);return I[a>>>2]=a+8,I[a+4>>>2]=0,F[a+8>>>2]=Xc(Qc.lookup_name(e)),I[t+16>>>2]=a,t}function el(e){return $c(N(e))}function tl(e){X.activeTexture(e)}function nl(e,t){X.attachShader(J.programs[e],J.shaders[t])}function rl(e,t,n){X.bindAttribLocation(J.programs[e],t,N(n))}function il(e,t){X.bindBuffer(e,J.buffers[t])}function al(e,t){X.bindFramebuffer(e,J.framebuffers[t])}function ol(e,t){X.bindRenderbuffer(e,J.renderbuffers[t])}function sl(e,t){X.bindTexture(e,J.textures[t])}function cl(e,t,n,r){X.blendColor(e,t,n,r)}function ll(e){X.blendEquation(e)}function ul(e,t){X.blendEquationSeparate(e,t)}function dl(e,t){X.blendFunc(e,t)}function fl(e,t,n,r){X.blendFuncSeparate(e,t,n,r)}function pl(e,t,n,r){X.bufferData(e,n?ge.subarray(n>>>0,n+t>>>0):t,r)}function ml(e,t,n,r){X.bufferSubData(e,t,ge.subarray(r>>>0,r+n>>>0))}function hl(e){return X.checkFramebufferStatus(e)}function gl(e){X.clear(e)}function _l(e,t,n,r){X.clearColor(e,t,n,r)}function vl(e){X.clearDepth(e)}function yl(e){X.clearStencil(e)}function bl(e,t,n,r){X.colorMask(!!e,!!t,!!n,!!r)}function xl(e){X.compileShader(J.shaders[e])}function Sl(e,t,n,r,i,a,o,s){X.compressedTexImage2D(e,t,n,r,i,a,s?ge.subarray(s>>>0,s+o>>>0):null)}function Cl(e,t,n,r,i,a,o,s,c){X.compressedTexSubImage2D(e,t,n,r,i,a,o,c?ge.subarray(c>>>0,c+s>>>0):null)}function wl(e,t,n,r,i,a,o,s){X.copyTexImage2D(e,t,n,r,i,a,o,s)}function Tl(e,t,n,r,i,a,o,s){X.copyTexSubImage2D(e,t,n,r,i,a,o,s)}function Dl(){var e=J.getNewId(J.programs),t=X.createProgram();return t.name=e,t.maxUniformLength=t.maxAttributeLength=t.maxUniformBlockNameLength=0,t.uniformIdCounter=1,J.programs[e]=t,e}function Ol(e){var t=J.getNewId(J.shaders);return J.shaders[t]=X.createShader(e),t}function kl(e){X.cullFace(e)}function Al(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.buffers[r];i&&(X.deleteBuffer(i),i.name=0,J.buffers[r]=null)}}function jl(e,t){for(var n=0;n<e;++n){var r=F[t+n*4>>>2],i=J.framebuffers[r];i&&(X.deleteFramebuffer(i),i.name=0,J.framebuffers[r]=null)}}function Ml(e){if(e){var t=J.programs[e];t?(X.deleteProgram(t),t.name=0,J.programs[e]=null):J.recordError(1281)}}function Nl(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.renderbuffers[r];i&&(X.deleteRenderbuffer(i),i.name=0,J.renderbuffers[r]=null)}}function Pl(e){if(e){var t=J.shaders[e];t?(X.deleteShader(t),J.shaders[e]=null):J.recordError(1281)}}function Fl(e,t){for(var n=0;n<e;n++){var r=F[t+n*4>>>2],i=J.textures[r];i&&(X.deleteTexture(i),i.name=0,J.textures[r]=null)}}function Il(e){X.depthFunc(e)}function Ll(e){X.depthMask(!!e)}function Rl(e,t){X.depthRange(e,t)}function zl(e,t){X.detachShader(J.programs[e],J.shaders[t])}function Bl(e){X.disable(e)}function Vl(e){X.disableVertexAttribArray(e)}function Hl(e,t,n){X.drawArrays(e,t,n)}function Ul(e,t,n,r){X.drawElements(e,t,n,r)}function Wl(e){X.enable(e)}function Gl(e){X.enableVertexAttribArray(e)}function Kl(){X.finish()}function ql(){X.flush()}function Jl(e,t,n,r){X.framebufferRenderbuffer(e,t,n,J.renderbuffers[r])}function Yl(e,t,n,r,i){X.framebufferTexture2D(e,t,n,J.textures[r],i)}function Xl(e){X.frontFace(e)}function Zl(e,t){fo(e,t,`createBuffer`,J.buffers)}function Ql(e,t){fo(e,t,`createFramebuffer`,J.framebuffers)}function $l(e,t){fo(e,t,`createRenderbuffer`,J.renderbuffers)}function eu(e,t){fo(e,t,`createTexture`,J.textures)}function tu(e){X.generateMipmap(e)}function nu(e,t,n,r,i,a,o){bo(`getActiveAttrib`,e,t,n,r,i,a,o)}function ru(e,t,n,r,i,a,o){bo(`getActiveUniform`,e,t,n,r,i,a,o)}function iu(e,t,n,r){var i=X.getAttachedShaders(J.programs[e]),a=i.length;a>t&&(a=t),F[n>>>2]=a;for(var o=0;o<a;++o){var s=J.shaders.indexOf(i[o]);F[r+o*4>>>2]=s}}function au(e,t){return X.getAttribLocation(J.programs[e],N(t))}function ou(e,t){Eo(e,t,4)}function su(e,t,n){n?F[n>>>2]=X.getBufferParameter(e,t):J.recordError(1281)}function cu(){var e=X.getError()||J.lastError;return J.lastError=0,e}function lu(e,t){Eo(e,t,2)}function uu(e,t,n,r){var i=X.getFramebufferAttachmentParameter(e,t,n);(i instanceof WebGLRenderbuffer||i instanceof WebGLTexture)&&(i=i.name|0),F[r>>>2]=i}function du(e,t){Eo(e,t,0)}function fu(e,t,n,r){var i=X.getProgramInfoLog(J.programs[e]);i===null&&(i=`(unknown error)`);var a=t>0&&r?ne(i,r,t):0;n&&(F[n>>>2]=a)}function pu(e,t,n){if(!n)J.recordError(1281);else if(e>=J.counter)J.recordError(1281);else if(e=J.programs[e],t==35716){var r=X.getProgramInfoLog(e);r===null&&(r=`(unknown error)`),F[n>>>2]=r.length+1}else if(t==35719){if(!e.maxUniformLength)for(var i=0;i<X.getProgramParameter(e,35718);++i)e.maxUniformLength=Math.max(e.maxUniformLength,X.getActiveUniform(e,i).name.length+1);F[n>>>2]=e.maxUniformLength}else if(t==35722){if(!e.maxAttributeLength)for(var i=0;i<X.getProgramParameter(e,35721);++i)e.maxAttributeLength=Math.max(e.maxAttributeLength,X.getActiveAttrib(e,i).name.length+1);F[n>>>2]=e.maxAttributeLength}else if(t==35381){if(!e.maxUniformBlockNameLength)for(var i=0;i<X.getProgramParameter(e,35382);++i)e.maxUniformBlockNameLength=Math.max(e.maxUniformBlockNameLength,X.getActiveUniformBlockName(e,i).length+1);F[n>>>2]=e.maxUniformBlockNameLength}else F[n>>>2]=X.getProgramParameter(e,t)}function mu(e,t,n){n?F[n>>>2]=X.getRenderbufferParameter(e,t):J.recordError(1281)}function hu(e,t,n,r){var i=X.getShaderInfoLog(J.shaders[e]);i===null&&(i=`(unknown error)`);var a=t>0&&r?ne(i,r,t):0;n&&(F[n>>>2]=a)}function gu(e,t,n,r){var i=X.getShaderPrecisionFormat(e,t);F[n>>>2]=i.rangeMin,F[n+4>>>2]=i.rangeMax,F[r>>>2]=i.precision}function _u(e,t,n,r){var i=X.getShaderSource(J.shaders[e]);if(i){var a=t>0&&r?ne(i,r,t):0;n&&(F[n>>>2]=a)}}function vu(e,t,n){if(!n)J.recordError(1281);else if(t==35716){var r=X.getShaderInfoLog(J.shaders[e]);r===null&&(r=`(unknown error)`);var i=r?r.length+1:0;F[n>>>2]=i}else if(t==35720){var a=X.getShaderSource(J.shaders[e]),o=a?a.length+1:0;F[n>>>2]=o}else F[n>>>2]=X.getShaderParameter(J.shaders[e],t)}function yu(e){var t=J.stringCache[e];if(!t){switch(e){case 7939:var n=X.getSupportedExtensions()||[];n=n.concat(n.map(function(e){return`GL_`+e})),t=Go(n.join(` `));break;case 7936:case 7937:case 37445:case 37446:var r=X.getParameter(e);r||J.recordError(1280),t=r&&Go(r);break;case 7938:var i=X.getParameter(7938);i=`OpenGL ES 2.0 (`+i+`)`,t=Go(i);break;case 35724:var a=X.getParameter(35724),o=a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);o!==null&&(o[1].length==3&&(o[1]+=`0`),a=`OpenGL ES GLSL ES `+o[1]+` (`+a+`)`),t=Go(a);break;default:J.recordError(1280)}J.stringCache[e]=t}return t}function bu(e,t,n){n?L[n>>>2]=X.getTexParameter(e,t):J.recordError(1281)}function xu(e,t,n){n?F[n>>>2]=X.getTexParameter(e,t):J.recordError(1281)}function Su(e,t){if(t=N(t),e=J.programs[e]){Zo(e);var n=e.uniformLocsById,r=0,i=t,a=Xo(t);a>0&&(r=Yo(t.slice(a+1))>>>0,i=t.slice(0,a));var o=e.uniformSizeAndIdsByName[i];if(o&&r<o[0]&&(r+=o[1],n[r]=n[r]||X.getUniformLocation(e,t)))return r}else J.recordError(1281);return-1}function Cu(e,t,n){es(e,t,n,2)}function wu(e,t,n){es(e,t,n,0)}function Tu(e,t,n){n?F[n>>>2]=X.getVertexAttribOffset(e,t):J.recordError(1281)}function Eu(e,t,n){is(e,t,n,2)}function Du(e,t,n){is(e,t,n,5)}function Ou(e,t){X.hint(e,t)}function ku(e){var t=J.buffers[e];return t?X.isBuffer(t):0}function Au(e){return X.isEnabled(e)}function ju(e){var t=J.framebuffers[e];return t?X.isFramebuffer(t):0}function Mu(e){return e=J.programs[e],e?X.isProgram(e):0}function Nu(e){var t=J.renderbuffers[e];return t?X.isRenderbuffer(t):0}function Pu(e){var t=J.shaders[e];return t?X.isShader(t):0}function Fu(e){var t=J.textures[e];return t?X.isTexture(t):0}function Iu(e){X.lineWidth(e)}function Lu(e){e=J.programs[e],X.linkProgram(e),e.uniformLocsById=0,e.uniformSizeAndIdsByName={}}function Ru(e,t){e==3317&&(J.unpackAlignment=t),X.pixelStorei(e,t)}function zu(e,t){X.polygonOffset(e,t)}function Bu(e,t,n,r,i,a,o){var s=Es(a,i,n,r,o,i);s?X.readPixels(e,t,n,r,i,a,s):J.recordError(1280)}function Vu(){}function Hu(e,t,n,r){X.renderbufferStorage(e,t,n,r)}function Uu(e,t){X.sampleCoverage(e,!!t)}function Wu(e,t,n,r){X.scissor(e,t,n,r)}function Gu(){J.recordError(1280)}function Ku(e,t,n,r){var i=J.getSource(e,t,n,r);X.shaderSource(J.shaders[e],i)}function qu(e,t,n){X.stencilFunc(e,t,n)}function Ju(e,t,n,r){X.stencilFuncSeparate(e,t,n,r)}function Yu(e){X.stencilMask(e)}function Xu(e,t){X.stencilMaskSeparate(e,t)}function Zu(e,t,n){X.stencilOp(e,t,n)}function Qu(e,t,n,r){X.stencilOpSeparate(e,t,n,r)}function $u(e,t,n,r,i,a,o,s,c){X.texImage2D(e,t,n,r,i,a,o,s,c?Es(s,o,r,i,c,n):null)}function ed(e,t,n){X.texParameterf(e,t,n)}function td(e,t,n){var r=L[n>>>2];X.texParameterf(e,t,r)}function nd(e,t,n){X.texParameteri(e,t,n)}function rd(e,t,n){var r=F[n>>>2];X.texParameteri(e,t,r)}function id(e,t,n,r,i,a,o,s,c){var l=null;c&&(l=Es(s,o,i,a,c,0)),X.texSubImage2D(e,t,n,r,i,a,o,s,l)}function ad(e,t){X.uniform1f($o(e),t)}function od(e,t,n){if(t<=288)for(var r=qs[t-1],i=0;i<t;++i)r[i]=L[n+4*i>>>2];else var r=L.subarray(n>>>2,n+t*4>>>2);X.uniform1fv($o(e),r)}function sd(e,t){X.uniform1i($o(e),t)}function cd(e,t,n){if(t<=288)for(var r=Xs[t-1],i=0;i<t;++i)r[i]=F[n+4*i>>>2];else var r=F.subarray(n>>>2,n+t*4>>>2);X.uniform1iv($o(e),r)}function ld(e,t,n){X.uniform2f($o(e),t,n)}function ud(e,t,n){if(t<=144)for(var r=qs[2*t-1],i=0;i<2*t;i+=2)r[i]=L[n+4*i>>>2],r[i+1]=L[n+(4*i+4)>>>2];else var r=L.subarray(n>>>2,n+t*8>>>2);X.uniform2fv($o(e),r)}function dd(e,t,n){X.uniform2i($o(e),t,n)}function fd(e,t,n){if(t<=144)for(var r=Xs[2*t-1],i=0;i<2*t;i+=2)r[i]=F[n+4*i>>>2],r[i+1]=F[n+(4*i+4)>>>2];else var r=F.subarray(n>>>2,n+t*8>>>2);X.uniform2iv($o(e),r)}function pd(e,t,n,r){X.uniform3f($o(e),t,n,r)}function md(e,t,n){if(t<=96)for(var r=qs[3*t-1],i=0;i<3*t;i+=3)r[i]=L[n+4*i>>>2],r[i+1]=L[n+(4*i+4)>>>2],r[i+2]=L[n+(4*i+8)>>>2];else var r=L.subarray(n>>>2,n+t*12>>>2);X.uniform3fv($o(e),r)}function hd(e,t,n,r){X.uniform3i($o(e),t,n,r)}function gd(e,t,n){if(t<=96)for(var r=Xs[3*t-1],i=0;i<3*t;i+=3)r[i]=F[n+4*i>>>2],r[i+1]=F[n+(4*i+4)>>>2],r[i+2]=F[n+(4*i+8)>>>2];else var r=F.subarray(n>>>2,n+t*12>>>2);X.uniform3iv($o(e),r)}function _d(e,t,n,r,i){X.uniform4f($o(e),t,n,r,i)}function vd(e,t,n){if(t<=72){var r=qs[4*t-1],i=L;n>>=2;for(var a=0;a<4*t;a+=4){var o=n+a;r[a]=i[o>>>0],r[a+1]=i[o+1>>>0],r[a+2]=i[o+2>>>0],r[a+3]=i[o+3>>>0]}}else var r=L.subarray(n>>>2,n+t*16>>>2);X.uniform4fv($o(e),r)}function yd(e,t,n,r,i){X.uniform4i($o(e),t,n,r,i)}function bd(e,t,n){if(t<=72)for(var r=Xs[4*t-1],i=0;i<4*t;i+=4)r[i]=F[n+4*i>>>2],r[i+1]=F[n+(4*i+4)>>>2],r[i+2]=F[n+(4*i+8)>>>2],r[i+3]=F[n+(4*i+12)>>>2];else var r=F.subarray(n>>>2,n+t*16>>>2);X.uniform4iv($o(e),r)}function xd(e,t,n,r){if(t<=72)for(var i=qs[4*t-1],a=0;a<4*t;a+=4)i[a]=L[r+4*a>>>2],i[a+1]=L[r+(4*a+4)>>>2],i[a+2]=L[r+(4*a+8)>>>2],i[a+3]=L[r+(4*a+12)>>>2];else var i=L.subarray(r>>>2,r+t*16>>>2);X.uniformMatrix2fv($o(e),!!n,i)}function Sd(e,t,n,r){if(t<=32)for(var i=qs[9*t-1],a=0;a<9*t;a+=9)i[a]=L[r+4*a>>>2],i[a+1]=L[r+(4*a+4)>>>2],i[a+2]=L[r+(4*a+8)>>>2],i[a+3]=L[r+(4*a+12)>>>2],i[a+4]=L[r+(4*a+16)>>>2],i[a+5]=L[r+(4*a+20)>>>2],i[a+6]=L[r+(4*a+24)>>>2],i[a+7]=L[r+(4*a+28)>>>2],i[a+8]=L[r+(4*a+32)>>>2];else var i=L.subarray(r>>>2,r+t*36>>>2);X.uniformMatrix3fv($o(e),!!n,i)}function Cd(e,t,n,r){if(t<=18){var i=qs[16*t-1],a=L;r>>=2;for(var o=0;o<16*t;o+=16){var s=r+o;i[o]=a[s>>>0],i[o+1]=a[s+1>>>0],i[o+2]=a[s+2>>>0],i[o+3]=a[s+3>>>0],i[o+4]=a[s+4>>>0],i[o+5]=a[s+5>>>0],i[o+6]=a[s+6>>>0],i[o+7]=a[s+7>>>0],i[o+8]=a[s+8>>>0],i[o+9]=a[s+9>>>0],i[o+10]=a[s+10>>>0],i[o+11]=a[s+11>>>0],i[o+12]=a[s+12>>>0],i[o+13]=a[s+13>>>0],i[o+14]=a[s+14>>>0],i[o+15]=a[s+15>>>0]}}else var i=L.subarray(r>>>2,r+t*64>>>2);X.uniformMatrix4fv($o(e),!!n,i)}function wd(e){e=J.programs[e],X.useProgram(e),X.currentProgram=e}function Td(e){X.validateProgram(J.programs[e])}function Ed(e,t){X.vertexAttrib1f(e,t)}function Dd(e,t){X.vertexAttrib1f(e,L[t>>>2])}function Od(e,t,n){X.vertexAttrib2f(e,t,n)}function kd(e,t){X.vertexAttrib2f(e,L[t>>>2],L[t+4>>>2])}function Ad(e,t,n,r){X.vertexAttrib3f(e,t,n,r)}function jd(e,t){X.vertexAttrib3f(e,L[t>>>2],L[t+4>>>2],L[t+8>>>2])}function Md(e,t,n,r,i){X.vertexAttrib4f(e,t,n,r,i)}function Nd(e,t){X.vertexAttrib4f(e,L[t>>>2],L[t+4>>>2],L[t+8>>>2],L[t+12>>>2])}function Pd(e,t,n,r,i,a){X.vertexAttribPointer(e,t,n,!!r,i,a)}function Fd(e,t,n,r){X.viewport(e,t,n,r)}function Id(e){return e}function Ld(e){T(e)}function Rd(e){return e%4==0&&(e%100!=0||e%400==0)}function zd(e,t){for(var n=0,r=0;r<=t;n+=e[r++]);return n}var Bd=[31,29,31,30,31,30,31,31,30,31,30,31],Vd=[31,28,31,30,31,30,31,31,30,31,30,31];function Hd(e,t){for(var n=new Date(e.getTime());t>0;){var r=Rd(n.getFullYear()),i=n.getMonth(),a=(r?Bd:Vd)[i];if(t>a-n.getDate())t-=a-n.getDate()+1,n.setDate(1),i<11?n.setMonth(i+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1));else return n.setDate(n.getDate()+t),n}return n}function Ud(e,t,n,r){var i=F[r+40>>>2],a={tm_sec:F[r>>>2],tm_min:F[r+4>>>2],tm_hour:F[r+8>>>2],tm_mday:F[r+12>>>2],tm_mon:F[r+16>>>2],tm_year:F[r+20>>>2],tm_wday:F[r+24>>>2],tm_yday:F[r+28>>>2],tm_isdst:F[r+32>>>2],tm_gmtoff:F[r+36>>>2],tm_zone:i?N(i):``},o=N(n),s={"%c":`%a %b %d %H:%M:%S %Y`,"%D":`%m/%d/%y`,"%F":`%Y-%m-%d`,"%h":`%b`,"%r":`%I:%M:%S %p`,"%R":`%H:%M`,"%T":`%H:%M:%S`,"%x":`%m/%d/%y`,"%X":`%H:%M:%S`,"%Ec":`%c`,"%EC":`%C`,"%Ex":`%m/%d/%y`,"%EX":`%H:%M:%S`,"%Ey":`%y`,"%EY":`%Y`,"%Od":`%d`,"%Oe":`%e`,"%OH":`%H`,"%OI":`%I`,"%Om":`%m`,"%OM":`%M`,"%OS":`%S`,"%Ou":`%u`,"%OU":`%U`,"%OV":`%V`,"%Ow":`%w`,"%OW":`%W`,"%Oy":`%y`};for(var c in s)o=o.replace(new RegExp(c,`g`),s[c]);var l=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],u=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];function d(e,t,n){for(var r=typeof e==`number`?e.toString():e||``;r.length<t;)r=n[0]+r;return r}function f(e,t){return d(e,t,`0`)}function p(e,t){function n(e){return e<0?-1:+(e>0)}var r;return(r=n(e.getFullYear()-t.getFullYear()))===0&&(r=n(e.getMonth()-t.getMonth()))===0&&(r=n(e.getDate()-t.getDate())),r}function m(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function h(e){var t=Hd(new Date(e.tm_year+1900,0,1),e.tm_yday),n=new Date(t.getFullYear(),0,4),r=new Date(t.getFullYear()+1,0,4),i=m(n),a=m(r);return p(i,t)<=0?p(a,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var g={"%a":function(e){return l[e.tm_wday].substring(0,3)},"%A":function(e){return l[e.tm_wday]},"%b":function(e){return u[e.tm_mon].substring(0,3)},"%B":function(e){return u[e.tm_mon]},"%C":function(e){return f((e.tm_year+1900)/100|0,2)},"%d":function(e){return f(e.tm_mday,2)},"%e":function(e){return d(e.tm_mday,2,` `)},"%g":function(e){return h(e).toString().substring(2)},"%G":function(e){return h(e)},"%H":function(e){return f(e.tm_hour,2)},"%I":function(e){var t=e.tm_hour;return t==0?t=12:t>12&&(t-=12),f(t,2)},"%j":function(e){return f(e.tm_mday+zd(Rd(e.tm_year+1900)?Bd:Vd,e.tm_mon-1),3)},"%m":function(e){return f(e.tm_mon+1,2)},"%M":function(e){return f(e.tm_min,2)},"%n":function(){return`
`},"%p":function(e){return e.tm_hour>=0&&e.tm_hour<12?`AM`:`PM`},"%S":function(e){return f(e.tm_sec,2)},"%t":function(){return`	`},"%u":function(e){return e.tm_wday||7},"%U":function(e){var t=e.tm_yday+7-e.tm_wday;return f(Math.floor(t/7),2)},"%V":function(e){var t=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&t++,!t){t=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(n==4||n==5&&Rd(e.tm_year%400-1))&&t++}else if(t==53){var r=(e.tm_wday+371-e.tm_yday)%7;r==4||r==3&&Rd(e.tm_year)||(t=1)}return f(t,2)},"%w":function(e){return e.tm_wday},"%W":function(e){var t=e.tm_yday+7-(e.tm_wday+6)%7;return f(Math.floor(t/7),2)},"%y":function(e){return(e.tm_year+1900).toString().substring(2)},"%Y":function(e){return e.tm_year+1900},"%z":function(e){var t=e.tm_gmtoff,n=t>=0;return t=Math.abs(t)/60,t=t/60*100+t%60,(n?`+`:`-`)+String(`0000`+t).slice(-4)},"%Z":function(e){return e.tm_zone},"%%":function(){return`%`}};for(var c in o=o.replace(/%%/g,`\0\0`),g)o.includes(c)&&(o=o.replace(new RegExp(c,`g`),g[c](a)));o=o.replace(/\0\0/g,`%`);var _=$d(o,!1);return _.length>t?0:(fe(_,e),_.length-1)}function Wd(e,t,n,r){return Ud(e,t,n,r)}var Gd=function(e,t,n,r){e||=this,this.parent=e,this.mount=e.mount,this.mounted=null,this.id=U.nextInode++,this.name=t,this.mode=n,this.node_ops={},this.stream_ops={},this.rdev=r},Kd=365,qd=146;Object.defineProperties(Gd.prototype,{read:{get:function(){return(this.mode&Kd)===Kd},set:function(e){e?this.mode|=Kd:this.mode&=~Kd}},write:{get:function(){return(this.mode&qd)===qd},set:function(e){e?this.mode|=qd:this.mode&=~qd}},isFolder:{get:function(){return U.isDir(this.mode)}},isDevice:{get:function(){return U.isChrdev(this.mode)}}}),U.FSNode=Gd,U.staticInit(),Qt(),un=t.BindingError=ln(Error,`BindingError`),fn=t.InternalError=ln(Error,`InternalError`),Un(),Mn(),nr(),lr=t.UnboundTypeError=ln(Error,`UnboundTypeError`),Dr(),t.requestFullscreen=function(e,t){K.requestFullscreen(e,t)},t.requestAnimationFrame=function(e){K.requestAnimationFrame(e)},t.setCanvasSize=function(e,t,n){K.setCanvasSize(e,t,n)},t.pauseMainLoop=function(){K.mainLoop.pause()},t.resumeMainLoop=function(){K.mainLoop.resume()},t.getUserMedia=function(){K.getUserMedia()},t.createContext=function(e,t,n,r){return K.createContext(e,t,n,r)};for(var Jd={},Yd={},X,Xd=0;Xd<32;++Xd)$a.push(Array(Xd));for(var Zd=new Float32Array(288),Xd=0;Xd<288;++Xd)qs[Xd]=Zd.subarray(0,Xd+1);for(var Qd=new Int32Array(288),Xd=0;Xd<288;++Xd)Xs[Xd]=Qd.subarray(0,Xd+1);function $d(e,t,n){var r=n>0?n:re(e)+1,i=Array(r),a=P(e,i,0,i.length);return t&&(i.length=a),i}var ef={mr:qe,za:tt,on:nt,p:rt,V:st,pa:ft,b:mt,q:ht,td:gt,xf:_t,r:ut,wh:vt,t:yt,kn:bt,e:pt,Jn:G,In:At,Kn:jt,qh:Nt,An:Pt,wn:Ft,qn:It,Ln:Lt,yn:Rt,sn:zt,xn:Bt,Cj:Vt,pn:Ht,zn:Ut,nn:Wt,ln:Gt,Fn:Kt,Hn:Jt,Gn:Yt,Ls:Xt,Tq:gn,i:fr,m:_r,k:vr,d:yr,R:xr,Sq:kr,Q:jr,P:Nr,Gj:Ir,Bd:Rr,jc:zr,Hj:Br,th:Vr,Uq:Hr,ph:Ur,Cn:Gr,Qa:Kr,pr:Zr,ts:wr,Hr:$r,lr:ri,wr:ii,as:ai,dr:oi,wt:si,Yq:ci,Pa:li,Rr:ui,Dn:di,rn:fi,En:mi,mh:hi,Zq:Si,Lj:Ci,Mj:Oi,er:ki,br:Ai,cr:ji,Qj:Mi,Rj:Ni,uh:Pi,$q:Fi,Kj:Ii,_q:Li,Pj:Ri,gr:zi,Nj:Bi,kr:Vi,jr:Hi,ar:Ui,fr:Ki,or:Yi,jf:ta,Tj:na,Sj:ia,mn:oa,oh:_i,Xq:sa,yq:ca,xq:la,Oq:ua,wq:da,vq:fa,uq:pa,tq:ma,sq:ha,Gq:ga,rq:_a,pq:va,oq:ya,nq:ba,mq:xa,lq:Sa,kq:Ca,jq:wa,iq:Ta,hq:Ea,gq:Da,fq:Oa,eq:ka,dq:Aa,cq:ja,bq:Ma,aq:Na,$p:Pa,_p:Fa,Zp:Ia,Yp:La,Wp:Ra,Vp:za,Up:Ba,Qq:Va,Tp:Ha,Sp:Ua,Rp:Wa,Fq:Ga,Qp:Ka,Pp:qa,Op:Y,Np:Ja,Mp:Ya,Lp:Xa,Kp:Za,Bq:Qa,Cq:eo,Jp:to,Aq:no,Ip:ro,Hp:io,Nq:ao,Gp:oo,Fp:so,Ep:co,Dp:lo,Cp:uo,Bp:po,zp:mo,Rq:ho,yp:go,xp:_o,Eq:vo,Ap:yo,wp:xo,vp:So,up:Co,tp:wo,sp:Do,rp:Oo,qp:ko,pp:Ao,op:jo,np:Mo,lp:No,mp:Po,Iq:Fo,Kq:Io,Hq:Lo,Jq:Ro,Lq:zo,kp:Bo,ip:Vo,hp:Ho,gp:Uo,jp:Wo,fp:Ko,ep:qo,dp:Jo,ap:Qo,cp:ts,bp:ns,Yo:rs,$o:as,Zo:os,Xo:ss,Wo:cs,Vo:ls,Uo:us,To:ds,Pq:fs,So:ps,Ro:ms,Qo:hs,Dq:gs,Oo:_s,No:vs,Mo:ys,Lo:bs,Mq:xs,Ko:Ds,Jo:Os,Io:ks,Ho:As,Go:js,Fo:Ms,Eo:Ns,Do:Ps,Co:Fs,Bo:Is,Ao:Ls,zo:Rs,yo:zs,xo:Bs,wo:Vs,vo:Hs,uo:Us,to:Ws,so:Gs,ro:Ks,qo:Js,po:Ys,oo:Zs,no:Qs,mo:$s,lo:ec,ko:tc,jo:nc,io:rc,ho:ic,go:ac,fo:oc,eo:sc,co:cc,bo:lc,ao:uc,_n:dc,Zn:fc,Yn:pc,Xn:mc,Wn:hc,Vn:gc,Un:_c,Tn:vc,Sn:yc,Rn:bc,Pn:xc,On:Sc,zq:Cc,Nn:wc,Mn:Tc,Bn:Ec,nh:Oc,ng:kc,mg:Ac,ir:jc,hr:Nc,Oj:Fc,un:zc,vn:Bc,Cd:vi,jg:Vc,tn:Hc,Ej:Wc,Ks:Kc,Dj:Jc,a:Yc,nr:el,Md:tl,Wk:nl,yr:rl,Ml:il,Vk:al,Tk:ol,pm:sl,ol:cl,Hf:ll,hl:ul,Fj:dl,ll:fl,Il:pl,Gl:ml,re:hl,Ac:gl,qq:_l,yj:vl,Vm:yl,Xp:bl,di:xl,Tl:Sl,Pl:Cl,cm:wl,_l:Tl,$h:Dl,Xh:Ol,sh:kl,Al,Dk:jl,Th:Ml,vk:Nl,Nh:Pl,tm:Fl,ed:Il,zc:Ll,vj:Rl,vt:zl,ub:Bl,Gh:Vl,kh:Hl,fg:Ul,Kb:Wl,Fh:Gl,Bj:Kl,Aj:ql,lt:Jl,dt:Yl,rh:Xl,yl:Zl,Xs:Ql,Qs:$l,wm:eu,$s:tu,xr:nu,vr:ru,Ms:iu,ur:au,$n:ou,vl:su,ic:cu,Qn:lu,Es:uu,Sc:du,tr:fu,ss:pu,rs:mu,sr:hu,Vj:gu,rr:_u,qs:vu,le:yu,Gm:bu,Em:xu,qr:Su,ps:Cu,os:wu,ls:Tu,ns:Eu,ms:Du,jn:Ou,tl:ku,kg:Au,ks:ju,js:Mu,is:Nu,hs:Pu,lm:Fu,lg:Iu,Uj:Lu,cn:Ru,_o:zu,bn:Bu,gs:Vu,fs:Hu,ql:Uu,Po:Wu,es:Gu,ds:Ku,hf:qu,$k:Ju,$m:Yu,Yk:Xu,fh:Zu,el:Qu,zm:$u,Tm:ed,Km:td,Pm:nd,Hm:rd,gm:id,cs:ad,bs:od,$r:sd,_r:cd,Zr:ld,Yr:ud,Xr:dd,Wr:fd,Vr:pd,Ur:md,Tr:hd,Sr:gd,Qr:_d,Pr:vd,Or:yd,Nr:bd,Mr:xd,Lr:Sd,Kr:Cd,og:wd,Jr:Td,Ir:Ed,Gr:Dd,Fr:Od,Er:kd,Dr:Ad,Cr:jd,Br:Md,Ar:Nd,zr:Pd,fn:Fd,Ji:Ty,X:Gy,Fa:Ax,Bk:VS,Za:Sh,ft:cw,Dm:Og,pc:xh,ze:Wv,Si:Kv,u:Yf,N:Dy,lc:sb,Bc:zC,ni:gx,yf:vx,gk:pw,Bh:Iw,ac:gb,Ts:Pw,yh:Uw,jd:zv,Ue:Sx,Lh:vC,y:mm,Aa:fh,_b:pS,Ra:Iy,mi:_x,dd:bh,Yc:Jv,id:Xv,Kl:Uv,Jl:Gv,Mb:Qv,wk:rC,$:pm,ie:dh,Qh:eC,Um:yh,Ng:ey,uk:iC,ab:Vg,Oh:aC,Zc:kv,Ri:qv,Hl:Yv,Qi:Zv,fc:Bg,Uc:zx,sf:dS,fk:_w,en:lm,n:Ep,bt:gw,ct:mw,qm:l_,km:x_,kf:Lw,Ah:Bw,ik:$C,ti:Vb,rd:qx,Vc:Px,oe:KS,nl:fb,_j:zw,pb:oS,kc:hS,Ym:lh,qf:WS,Zj:Gw,uj:Gp,Ni:dy,Im:Qh,f:Hf,O:xm,T:wh,ka:yp,Bb:rp,he:Dh,sl:Yy,pj:Oh,ui:zb,Be:c_,Jg:sx,_h:vS,nb:Om,tk:pC,hg:Zp,Fl:ny,Fk:MS,Ad:Wm,nm:p_,bi:lS,ci:cS,Pk:xS,cb:cm,_e:Iv,zk:qS,db:xp,cj:E_,Ch:dw,qt:WC,dm:z_,Te:Tx,Sm:Nh,Ti:Vv,Nl:Dv,ha:Ap,ye:wy,df:F_,Xl:iv,Vs:Mw,Hk:AS,Cg:Xx,fm:A_,wa:kp,Xb:Hg,Qk:_S,Ya:Z_,qc:Tm,Me:TC,tg:uw,Qe:eS,Se:Ox,qe:ES,jt:nw,Ha:Am,pd:tS,eg:km,c:Rf,F:$f,S:ep,bb:Fh,Sa:wm,Ud:Cm,ib:_h,Dl:oy,Ug:P_,ej:s_,Og:Hv,oj:jh,Zf:Ig,Fb:Sm,sj:Jm,af:Q_,Ps:Vw,Ga:gp,Sf:nv,_m:eh,od:Mh,eh:kh,Oc:Qm,tj:Um,om:f_,Oe:sS,ya:zp,sb:Xp,Nd:$_,vc:Ah,Ul:hv,ge:Ph,L:hp,Ag:FS,Of:bv,Rl:xv,Rf:ov,Xj:Jw,bl:$b,Ll:Bv,K:bp,mb:Th,Yl:rv,De:Mg,hh:Gm,Vl:pv,va:Zf,Xf:D_,ht:iw,Da:Xm,Vf:L_,xm:zg,ad:yg,Rh:ZS,Ed:tC,Hd:Qb,_c:gv,it:rw,_k:ix,j:Xf,J:Op,ea:Ip,Ja:Dp,ob:Qp,Rm:Ih,Nc:th,gf:nh,cg:Gh,nj:Uh,Zm:ih,an:qm,zd:rh,Le:BC,Tb:Vm,El:ay,rt:UC,xk:$S,Zl:tv,gc:sh,Mm:Kh,$g:Ag,fb:Wh,Mg:ry,fe:hg,Qb:Mm,Ba:fm,Od:b_,Bm:jg,Qf:sv,hm:k_,cc:S_,Xa:Ym,Wf:O_,Xi:mv,mm:m_,Pi:ty,Id:Zy,s:cp,ca:jp,Wa:Pp,Eb:Dm,wb:Em,gi:Zx,Vg:C_,ec:dm,Cm:kg,ne:QS,dc:Gg,ck:Ew,ak:Ow,dk:Sw,sg:xw,Yb:Nm,je:Fm,vm:Wg,hj:Ug,Pb:Km,zb:lv,$e:yv,ef:h_,Pf:cv,ri:Kb,z:tm,la:$m,La:Mp,gh:ah,Om:Bh,Nm:Vh,jh:bm,jm:w_,dg:ch,_g:Pg,Fe:Hh,Wd:Cw,He:Pm,Kf:Ny,pg:Qw,ud:Fv,ag:vg,Wl:av,Rk:Yx,w:ap,kb:Kp,dh:Rh,Ol:Ev,Qm:Lh,im:T_,qj:Eh,Am:Ng,Zg:Rg,Zs:Tw,bk:Dw,kt:ew,Yf:d_,_s:bw,D:$p,Nf:$v,Zk:ax,ue:ox,Dh:ZC,Dc:Lm,Vi:Lv,ym:Lg,xc:dC,rg:ww,Ce:$g,ld:Qg,Ui:Rv,dn:ym,Oi:iy,$f:bg,da:ip,rb:Hm,yd:gh,rj:mh,ut:EC,Qd:eg,wg:DC,xg:uC,Ia:Im,zf:rx,Wm:hh,Xm:ph,Tg:K_,ih:Bm,Ge:zm,ok:NC,Na:Cp,me:lC,Sh:XS,yg:YS,am:G_,Td:Rm,Va:Sp,se:Wx,Yd:xC,Jd:Ky,cd:Ch,Ki:Sy,Mc:R_,Lf:gy,nf:yC,Ih:OC,Di:hb,mf:SC,qd:$x,Kh:bC,Fi:Jy,fd:wC,Jh:CC,vg:PC,Zi:ev,us:pT,Is:eT,Hs:tT,ws:dT,Fs:rT,Js:$w,zs:cT,C:jm,Xd:aw,Je:sw,Ze:yy,em:j_,kd:a_,Zh:yS,bh:og,Ta:ab,Wb:by,Wj:Zw,Jb:u_,Ak:GS,Kc:uy,Jk:OS,fj:t_,sm:r_,Mi:_y,Wi:Av,Ae:jv,be:n_,Li:vy,Ic:db,Lb:ob,Ld:dv,Eh:KC,Vd:em,ah:lg,Af:nx,lj:cg,Ob:Xh,Rd:$h,Jm:Zh,Sb:ng,Ab:rg,bd:ig,ch:ag,Kk:DS,l:zf,H:Gf,ja:jy,Oa:My,yb:lb,ml:pb,Ib:ib,Hg:Dx,Fd:Qx,wf:kx,Bg:uS,te:hx,gg:im,Rs:Rw,Jc:my,uf:Hx,yc:om,Hh:MC,mt:QC,tb:$y,ae:Ey,$c:Yg,de:Dg,Zd:gS,ia:_m,Hi:Py,jb:Jp,Yh:bS,Wh:IS,Yj:Kw,Y:up,nd:_g,Gb:Tv,gn:Tp,Pe:iS,If:zy,E:sp,al:ex,Zb:fC,M:vp,wj:fp,ga:Vp,Ik:kS,gd:Wb,rc:sm,eb:mp,Sk:Kx,oc:v_,mj:sg,hc:um,zg:LS,g:Bf,x:gm,I:Rp,ba:Cy,Ua:Ly,sc:Nx,Ka:vh,Ve:dx,uc:M_,zh:Hw,Ie:rm,Rb:Qy,we:cb,ke:am,gl:Lb,Vb:NS,lf:hw,Xg,$d:Ib,md:Fg,Os:Ww,aa:vm,Ss:Fw,mk:RC,Lm:qh,Ph:nC,qa:qp,Ek:PS,Rc:lp,gt:ow,si:Ub,ee:gg,sk:gC,Gc:aS,hn:wp,ma:op,ta:rb,xe:Wy,pt:GC,Ke:VC,na:_p,Kg:Gb,xj:dp,hb:Bp,Kd:Cv,fi:nS,Dd:oC,vd:y_,Ub:pp,of:cC,wd:__,um:Jg,cf:I_,Wg:i_,tc:ub,rl:Xy,Ck:BS,Uh:zS,h:Kf,G:hm,Z:Lp,Nb:Mb,_a:Hy,vi:Nb,il:Fb,fl:Bb,jl:Pb,Ee:Jh,pk:jC,ji:wx,ff:qg,Yi:fv,zl:py,Xk:px,$a:fy,ii:Lx,Wc:tb,Ys:kw,ki:bx,Lc:Pv,Ns:Yw,Pd:wg,Ec:Wf,Ql:wv,gj:Zg,sa:Sg,vb:mx,lk:HC,xa:nm,_d:Jx,Hb:Yp,dl:Yb,Uk:Ix,Sd:Yh,Rg:Ov,ai:fS,li:yx,_f:Eg,dj:g_,o:Jf,U:oh,Ea:Fp,We:lx,Gg:jx,Fg:Mx,Yg:Kg,ei:rS,kk:qC,bf:B_,bg:tg,hk:fw,pl:nb,Fm:Cg,zj:Uf,ra:xg,st:LC,ot:JC,lb:fg,Fc:_C,Db:sy,jk:YC,Re:Fx,Mh:hC,ij:Tg,v:qf,fa:N_,Ca:Np,Hc:xx,Xc:Uy,Gk:jS,cl:Zb,Xe:Xb,rk:kC,Tc:mC,mc:Fy,Sg:_v,Ye:qb,qi:Jb,nk:IC,qb:dg,Pc:Zm,ce:e_,A:Qf,gb:Sv,Jf:Ry,vf:Bx,qk:AC,oi:fx,rm:o_,Gd:Ex,qg:Xw,Sl:vv,hi:Gx,et:lw,xd:ug,Eg:Rx,Ne:mS,Bf:tx,Cc:qy,B:Vf,rf:HS,pi:ux,Ii:Oy,Nk:CS,Ok:SS,pf:sC,ug:tw,xh:qw,Vh:RS,_:Wp,ve:Sb,Ei:eb,Ai:Tb,yi:Db,Ig:cx,pe:US,Df:Ob,Us:Nw,Bl:ly,ua:uh,Qc:Up,Gi:Vy,Cb:mb,yk:JS,Cl:cy,oa:zh,nt:XC,Lk:TS,Mk:wS,Dg:Vx,ul:By,Ma:np,lh:Hp,hd:Rb,Ci:xb,Cf:Hb,xb:tp,nc:xy,Bi:Cb,Qg:Mv,bc:uv,Mf:hy,$b:_b,tf:Ux,Uf:W_,Tf:X_,xi:kb,sd:Cx,Lg:vb,aj:U_,_i:Y_,Gf:yb,Ef:wb,zi:Eb,Ff:bb,kl:jb,Pg:Nv,tt:FC,bj:H_,$i:J_,wi:Ab,bm:V_,$l:q_,jj:mg,kj:pg,Ws:Aw,at:yw,$j:jw,ek:vw,xl:ky,wl:Ay,As:sT,Gs:nT,xs:uT,ys:lT,Bs:oT,Cs:aT,vs:fT,Ds:iT,W:Id,Wq:Je,Ij:Ye,Vq:Xe,Jj:Ze,ig:Ld,vh:Ud,wc:Wd};Ue();var tf=t.___wasm_call_ctors=function(){return(tf=t.___wasm_call_ctors=t.asm.yt).apply(null,arguments)},nf=t._malloc=function(){return(nf=t._malloc=t.asm.zt).apply(null,arguments)},rf=t._free=function(){return(rf=t._free=t.asm.At).apply(null,arguments)},af=t.___errno_location=function(){return(af=t.___errno_location=t.asm.Bt).apply(null,arguments)},of=t.___getTypeName=function(){return(of=t.___getTypeName=t.asm.Ct).apply(null,arguments)},sf=t.___embind_register_native_and_builtin_types=function(){return(sf=t.___embind_register_native_and_builtin_types=t.asm.Dt).apply(null,arguments)},cf=t._htons=function(){return(cf=t._htons=t.asm.Ft).apply(null,arguments)},lf=t._emscripten_builtin_memalign=function(){return(lf=t._emscripten_builtin_memalign=t.asm.Gt).apply(null,arguments)},Z=t._setThrew=function(){return(Z=t._setThrew=t.asm.Ht).apply(null,arguments)},Q=t.stackSave=function(){return(Q=t.stackSave=t.asm.It).apply(null,arguments)},$=t.stackRestore=function(){return($=t.stackRestore=t.asm.Jt).apply(null,arguments)},uf=t.___cxa_can_catch=function(){return(uf=t.___cxa_can_catch=t.asm.Kt).apply(null,arguments)},df=t.___cxa_is_pointer_type=function(){return(df=t.___cxa_is_pointer_type=t.asm.Lt).apply(null,arguments)},ff=t.dynCall_iiji=function(){return(ff=t.dynCall_iiji=t.asm.Mt).apply(null,arguments)},pf=t.dynCall_vijii=function(){return(pf=t.dynCall_vijii=t.asm.Nt).apply(null,arguments)},mf=t.dynCall_iijii=function(){return(mf=t.dynCall_iijii=t.asm.Ot).apply(null,arguments)},hf=t.dynCall_viijii=function(){return(hf=t.dynCall_viijii=t.asm.Pt).apply(null,arguments)},gf=t.dynCall_iiiiiji=function(){return(gf=t.dynCall_iiiiiji=t.asm.Qt).apply(null,arguments)},_f=t.dynCall_iiij=function(){return(_f=t.dynCall_iiij=t.asm.Rt).apply(null,arguments)},vf=t.dynCall_ji=function(){return(vf=t.dynCall_ji=t.asm.St).apply(null,arguments)},yf=t.dynCall_jii=function(){return(yf=t.dynCall_jii=t.asm.Tt).apply(null,arguments)},bf=t.dynCall_viij=function(){return(bf=t.dynCall_viij=t.asm.Ut).apply(null,arguments)},xf=t.dynCall_vij=function(){return(xf=t.dynCall_vij=t.asm.Vt).apply(null,arguments)},Sf=t.dynCall_viiji=function(){return(Sf=t.dynCall_viiji=t.asm.Wt).apply(null,arguments)},Cf=t.dynCall_viiiji=function(){return(Cf=t.dynCall_viiiji=t.asm.Xt).apply(null,arguments)},wf=t.dynCall_iiijj=function(){return(wf=t.dynCall_iiijj=t.asm.Yt).apply(null,arguments)},Tf=t.dynCall_iiiiij=function(){return(Tf=t.dynCall_iiiiij=t.asm.Zt).apply(null,arguments)},Ef=t.dynCall_viiiij=function(){return(Ef=t.dynCall_viiiij=t.asm._t).apply(null,arguments)},Df=t.dynCall_jiii=function(){return(Df=t.dynCall_jiii=t.asm.$t).apply(null,arguments)},Of=t.dynCall_vji=function(){return(Of=t.dynCall_vji=t.asm.au).apply(null,arguments)},kf=t.dynCall_vijj=function(){return(kf=t.dynCall_vijj=t.asm.bu).apply(null,arguments)},Af=t.dynCall_viijj=function(){return(Af=t.dynCall_viijj=t.asm.cu).apply(null,arguments)},jf=t.dynCall_vjj=function(){return(jf=t.dynCall_vjj=t.asm.du).apply(null,arguments)},Mf=t.dynCall_jiji=function(){return(Mf=t.dynCall_jiji=t.asm.eu).apply(null,arguments)},Nf=t.dynCall_iij=function(){return(Nf=t.dynCall_iij=t.asm.fu).apply(null,arguments)},Pf=t.dynCall_viiijj=function(){return(Pf=t.dynCall_viiijj=t.asm.gu).apply(null,arguments)},Ff=t.dynCall_viiiiji=function(){return(Ff=t.dynCall_viiiiji=t.asm.hu).apply(null,arguments)},If=t.dynCall_iiiiijj=function(){return(If=t.dynCall_iiiiijj=t.asm.iu).apply(null,arguments)},Lf=t.dynCall_iiiiiijj=function(){return(Lf=t.dynCall_iiiiiijj=t.asm.ju).apply(null,arguments)};function Rf(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function zf(e,t){var n=Q();try{H(e)(t)}catch(e){if($(n),e!==e+0)throw e;Z(1,0)}}function Bf(e,t,n){var r=Q();try{H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function Vf(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Hf(e,t){var n=Q();try{return H(e)(t)}catch(e){if($(n),e!==e+0)throw e;Z(1,0)}}function Uf(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Wf(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Gf(e,t,n){var r=Q();try{H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function Kf(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function qf(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Jf(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Yf(e,t){var n=Q();try{return H(e)(t)}catch(e){if($(n),e!==e+0)throw e;Z(1,0)}}function Xf(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function Zf(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Qf(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function $f(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function ep(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function tp(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function np(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function rp(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function ip(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function ap(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function op(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function sp(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function cp(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function lp(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function up(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function dp(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function fp(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function pp(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function mp(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function hp(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function gp(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function _p(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function vp(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function yp(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function bp(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function xp(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Sp(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Cp(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function wp(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Tp(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Ep(e){var t=Q();try{return H(e)()}catch(e){if($(t),e!==e+0)throw e;Z(1,0)}}function Dp(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Op(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function kp(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Ap(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function jp(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Mp(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Np(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Pp(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Fp(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Ip(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Lp(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Rp(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function zp(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Bp(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Vp(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Hp(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Up(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Wp(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Gp(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Kp(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function qp(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Jp(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Yp(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Xp(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Zp(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Qp(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function $p(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function em(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function tm(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function nm(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function rm(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function im(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function am(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function om(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function sm(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function cm(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function lm(e,t){var n=Q();try{return H(e)(t)}catch(e){if($(n),e!==e+0)throw e;Z(1,0)}}function um(e,t,n){var r=Q();try{H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function dm(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function fm(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function pm(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function mm(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function hm(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function gm(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function _m(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function vm(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function ym(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function bm(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function xm(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function Sm(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Cm(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function wm(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Tm(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Em(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Dm(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Om(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function km(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Am(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function jm(e){var t=Q();try{H(e)()}catch(e){if($(t),e!==e+0)throw e;Z(1,0)}}function Mm(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Nm(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Pm(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Fm(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Im(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Lm(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Rm(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function zm(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function Bm(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Vm(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Hm(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Um(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Wm(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Gm(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Km(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function qm(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Jm(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Ym(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Xm(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Zm(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Qm(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function $m(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function eh(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function th(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function nh(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function rh(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function ih(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function ah(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function oh(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function sh(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function ch(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function lh(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function uh(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function dh(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function fh(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function ph(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function mh(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function hh(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function gh(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function _h(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function vh(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function yh(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function bh(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function xh(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function Sh(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function Ch(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function wh(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function Th(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Eh(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Dh(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Oh(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function kh(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Ah(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function jh(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Mh(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Nh(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Ph(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Fh(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Ih(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Lh(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function Rh(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function zh(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Bh(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function Vh(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Hh(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Uh(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Wh(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Gh(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Kh(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function qh(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Jh(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Yh(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Xh(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Zh(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Qh(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function $h(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function eg(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function tg(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function ng(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function rg(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function ig(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function ag(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function og(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function sg(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function cg(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function lg(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function ug(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function dg(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function fg(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function pg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C){var w=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C)}catch(e){if($(w),e!==e+0)throw e;Z(1,0)}}function mg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S){var C=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S)}catch(e){if($(C),e!==e+0)throw e;Z(1,0)}}function hg(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function gg(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function _g(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function vg(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function yg(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function bg(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function xg(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Sg(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Cg(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function wg(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Tg(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Eg(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Dg(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Og(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function kg(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Ag(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function jg(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Mg(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Ng(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function Pg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function Fg(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Ig(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Lg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){var y=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v)}catch(e){if($(y),e!==e+0)throw e;Z(1,0)}}function Rg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){var v=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}catch(e){if($(v),e!==e+0)throw e;Z(1,0)}}function zg(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Bg(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Vg(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Hg(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Ug(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Wg(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Gg(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Kg(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function qg(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Jg(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Yg(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Xg(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Zg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){var b=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)}catch(e){if($(b),e!==e+0)throw e;Z(1,0)}}function Qg(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function $g(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function e_(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function t_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function n_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S){var C=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S)}catch(e){if($(C),e!==e+0)throw e;Z(1,0)}}function r_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function i_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function a_(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function o_(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function s_(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function c_(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function l_(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function u_(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function d_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function f_(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function p_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function m_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function h_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function g_(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function __(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function v_(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function y_(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function b_(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function x_(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function S_(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function C_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function w_(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function T_(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function E_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function D_(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function O_(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function k_(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function A_(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function j_(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function M_(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function N_(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function P_(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function F_(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function I_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function L_(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function R_(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function z_(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function B_(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function V_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te){var M=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te)}catch(e){if($(M),e!==e+0)throw e;Z(1,0)}}function H_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j){var te=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j)}catch(e){if($(te),e!==e+0)throw e;Z(1,0)}}function U_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D){var O=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D)}catch(e){if($(O),e!==e+0)throw e;Z(1,0)}}function W_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E){var D=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E)}catch(e){if($(D),e!==e+0)throw e;Z(1,0)}}function G_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C){var w=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C)}catch(e){if($(w),e!==e+0)throw e;Z(1,0)}}function K_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S){var C=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S)}catch(e){if($(C),e!==e+0)throw e;Z(1,0)}}function q_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j){var te=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j)}catch(e){if($(te),e!==e+0)throw e;Z(1,0)}}function J_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee){var j=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee)}catch(e){if($(j),e!==e+0)throw e;Z(1,0)}}function Y_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E){var D=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E)}catch(e){if($(D),e!==e+0)throw e;Z(1,0)}}function X_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T){var E=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T)}catch(e){if($(E),e!==e+0)throw e;Z(1,0)}}function Z_(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Q_(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function $_(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function ev(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te,M,N,P,ne,re,ie,ae,oe){var se=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te,M,N,P,ne,re,ie,ae,oe)}catch(e){if($(se),e!==e+0)throw e;Z(1,0)}}function tv(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function nv(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function rv(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function iv(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function av(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function ov(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function sv(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function cv(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function lv(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function uv(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function dv(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function fv(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function pv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function mv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function hv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function gv(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function _v(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function vv(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function yv(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function bv(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function xv(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Sv(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Cv(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function wv(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Tv(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Ev(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Dv(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Ov(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function kv(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Av(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){var y=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v)}catch(e){if($(y),e!==e+0)throw e;Z(1,0)}}function jv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){var b=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)}catch(e){if($(b),e!==e+0)throw e;Z(1,0)}}function Mv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function Nv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function Pv(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Fv(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Iv(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Lv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function Rv(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function zv(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Bv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function Vv(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Hv(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Uv(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Wv(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Gv(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Kv(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function qv(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Jv(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Yv(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Xv(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Zv(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Qv(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function $v(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function ey(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function ty(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function ny(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function ry(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function iy(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function ay(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function oy(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function sy(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function cy(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function ly(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function uy(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function dy(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function fy(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function py(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function my(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function hy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function gy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function _y(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){var v=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}catch(e){if($(v),e!==e+0)throw e;Z(1,0)}}function vy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E){var D=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E)}catch(e){if($(D),e!==e+0)throw e;Z(1,0)}}function yy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function by(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function xy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function Sy(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Cy(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function wy(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Ty(e){var t=Q();try{return H(e)()}catch(e){if($(t),e!==e+0)throw e;Z(1,0)}}function Ey(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Dy(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function Oy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function ky(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O){var k=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O)}catch(e){if($(k),e!==e+0)throw e;Z(1,0)}}function Ay(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te,M,N,P,ne,re,ie,ae){var oe=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te,M,N,P,ne,re,ie,ae)}catch(e){if($(oe),e!==e+0)throw e;Z(1,0)}}function jy(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function My(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Ny(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Py(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Fy(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Iy(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Ly(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Ry(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function zy(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function By(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function Vy(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Hy(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Uy(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Wy(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Gy(e,t){var n=Q();try{return H(e)(t)}catch(e){if($(n),e!==e+0)throw e;Z(1,0)}}function Ky(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){var b=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)}catch(e){if($(b),e!==e+0)throw e;Z(1,0)}}function qy(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Jy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O){var k=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O)}catch(e){if($(k),e!==e+0)throw e;Z(1,0)}}function Yy(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Xy(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Zy(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Qy(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function $y(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function eb(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function tb(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function nb(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function rb(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function ib(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function ab(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function ob(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function sb(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function cb(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function lb(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function ub(e,t,n,r){var i=Q();try{H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function db(e,t,n){var r=Q();try{H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function fb(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function pb(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function mb(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function hb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function gb(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function _b(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function vb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function yb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){var y=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v)}catch(e){if($(y),e!==e+0)throw e;Z(1,0)}}function bb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E){var D=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E)}catch(e){if($(D),e!==e+0)throw e;Z(1,0)}}function xb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S){var C=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S)}catch(e){if($(C),e!==e+0)throw e;Z(1,0)}}function Sb(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Cb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C){var w=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C)}catch(e){if($(w),e!==e+0)throw e;Z(1,0)}}function wb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S){var C=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S)}catch(e){if($(C),e!==e+0)throw e;Z(1,0)}}function Tb(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Eb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w){var T=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w)}catch(e){if($(T),e!==e+0)throw e;Z(1,0)}}function Db(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){var v=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}catch(e){if($(v),e!==e+0)throw e;Z(1,0)}}function Ob(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function kb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){var v=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}catch(e){if($(v),e!==e+0)throw e;Z(1,0)}}function Ab(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b){var x=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b)}catch(e){if($(x),e!==e+0)throw e;Z(1,0)}}function jb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te,M,N,P,ne,re){var ie=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,te,M,N,P,ne,re)}catch(e){if($(ie),e!==e+0)throw e;Z(1,0)}}function Mb(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Nb(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Pb(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Fb(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Ib(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Lb(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Rb(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function zb(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Bb(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Vb(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Hb(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function Ub(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Wb(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Gb(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Kb(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function qb(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Jb(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Yb(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Xb(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Zb(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Qb(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function $b(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function ex(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function tx(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function nx(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function rx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function ix(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function ax(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function ox(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S){var C=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S)}catch(e){if($(C),e!==e+0)throw e;Z(1,0)}}function sx(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function cx(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function lx(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function ux(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function dx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function fx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function px(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function mx(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function hx(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function gx(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function _x(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function vx(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function yx(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function bx(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function xx(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Sx(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Cx(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function wx(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Tx(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Ex(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Dx(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Ox(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function kx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Ax(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function jx(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Mx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Nx(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Px(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Fx(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Ix(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function Lx(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Rx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function zx(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Bx(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Vx(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Hx(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Ux(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){var y=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v)}catch(e){if($(y),e!==e+0)throw e;Z(1,0)}}function Wx(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Gx(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Kx(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function qx(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Jx(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Yx(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Xx(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Zx(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Qx(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function $x(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function eS(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function tS(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function nS(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function rS(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function iS(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function aS(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function oS(e,t,n,r){var i=Q();try{return H(e)(t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function sS(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function cS(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function lS(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function uS(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function dS(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function fS(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function pS(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function mS(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function hS(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function gS(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function _S(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function vS(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function yS(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function bS(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function xS(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function SS(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function CS(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function wS(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){var b=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)}catch(e){if($(b),e!==e+0)throw e;Z(1,0)}}function TS(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function ES(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function DS(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function OS(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function kS(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function AS(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function jS(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function MS(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function NS(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function PS(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function FS(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function IS(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function LS(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function RS(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function zS(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function BS(e,t,n,r,i){var a=Q();try{H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function VS(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function HS(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function US(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function WS(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function GS(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function KS(e,t,n){var r=Q();try{return H(e)(t,n)}catch(e){if($(r),e!==e+0)throw e;Z(1,0)}}function qS(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function JS(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function YS(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T){var E=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T)}catch(e){if($(E),e!==e+0)throw e;Z(1,0)}}function XS(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w){var T=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w)}catch(e){if($(T),e!==e+0)throw e;Z(1,0)}}function ZS(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function QS(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function $S(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function eC(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function tC(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function nC(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function rC(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function iC(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function aC(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function oC(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function sC(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function cC(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function lC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C){var w=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C)}catch(e){if($(w),e!==e+0)throw e;Z(1,0)}}function uC(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function dC(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function fC(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function pC(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function mC(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function hC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C){var w=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C)}catch(e){if($(w),e!==e+0)throw e;Z(1,0)}}function gC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function _C(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function vC(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function yC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E){var D=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E)}catch(e){if($(D),e!==e+0)throw e;Z(1,0)}}function bC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A){var ee=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A)}catch(e){if($(ee),e!==e+0)throw e;Z(1,0)}}function xC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k){var A=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k)}catch(e){if($(A),e!==e+0)throw e;Z(1,0)}}function SC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D){var O=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D)}catch(e){if($(O),e!==e+0)throw e;Z(1,0)}}function CC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee){var j=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee)}catch(e){if($(j),e!==e+0)throw e;Z(1,0)}}function wC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){var v=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}catch(e){if($(v),e!==e+0)throw e;Z(1,0)}}function TC(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function EC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function DC(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function OC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function kC(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function AC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function jC(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function MC(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function NC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b){var x=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b)}catch(e){if($(x),e!==e+0)throw e;Z(1,0)}}function PC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){var b=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)}catch(e){if($(b),e!==e+0)throw e;Z(1,0)}}function FC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A){var ee=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A)}catch(e){if($(ee),e!==e+0)throw e;Z(1,0)}}function IC(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function LC(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function RC(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function zC(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function BC(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function VC(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function HC(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function UC(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function WC(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function GC(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function KC(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function qC(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function JC(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function YC(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function XC(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function ZC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){var b=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)}catch(e){if($(b),e!==e+0)throw e;Z(1,0)}}function QC(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function $C(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function ew(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function tw(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function nw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if($(g),e!==e+0)throw e;Z(1,0)}}function rw(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function iw(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function aw(e,t,n,r,i,a,o,s){var c=Q();try{H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function ow(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function sw(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function cw(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function lw(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function uw(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function dw(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function fw(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function pw(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function mw(e,t,n,r,i,a,o,s,c){var l=Q();try{return H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function hw(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function gw(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function _w(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function vw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D){var O=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D)}catch(e){if($(O),e!==e+0)throw e;Z(1,0)}}function yw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T){var E=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T)}catch(e){if($(E),e!==e+0)throw e;Z(1,0)}}function bw(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function xw(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Sw(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Cw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function ww(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function Tw(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Ew(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if($(m),e!==e+0)throw e;Z(1,0)}}function Dw(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Ow(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){var h=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m)}catch(e){if($(h),e!==e+0)throw e;Z(1,0)}}function kw(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Aw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w){var T=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w)}catch(e){if($(T),e!==e+0)throw e;Z(1,0)}}function jw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E){var D=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E)}catch(e){if($(D),e!==e+0)throw e;Z(1,0)}}function Mw(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Nw(e,t,n,r,i,a,o,s,c,l,u,d){var f=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d)}catch(e){if($(f),e!==e+0)throw e;Z(1,0)}}function Pw(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Fw(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Iw(e,t,n,r,i,a,o){var s=Q();try{return H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function Lw(e,t,n,r,i,a){var o=Q();try{return H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Rw(e,t,n,r,i,a,o){var s=Q();try{H(e)(t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function zw(e,t,n,r,i,a,o,s){var c=Q();try{return H(e)(t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function Bw(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Vw(e,t,n,r,i,a,o,s,c,l,u){var d=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u)}catch(e){if($(d),e!==e+0)throw e;Z(1,0)}}function Hw(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Uw(e,t,n,r,i){var a=Q();try{return H(e)(t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function Ww(e,t,n,r,i,a,o,s,c,l){var u=Q();try{H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Gw(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Kw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D){var O=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D)}catch(e){if($(O),e!==e+0)throw e;Z(1,0)}}function qw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function Jw(e,t,n,r,i,a,o,s,c,l){var u=Q();try{return H(e)(t,n,r,i,a,o,s,c,l)}catch(e){if($(u),e!==e+0)throw e;Z(1,0)}}function Yw(e,t,n,r,i,a,o,s,c){var l=Q();try{H(e)(t,n,r,i,a,o,s,c)}catch(e){if($(l),e!==e+0)throw e;Z(1,0)}}function Xw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=Q();try{H(e)(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}catch(e){if($(_),e!==e+0)throw e;Z(1,0)}}function Zw(e,t,n,r,i,a){var o=Q();try{H(e)(t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function Qw(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=Q();try{return H(e)(t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if($(p),e!==e+0)throw e;Z(1,0)}}function $w(e,t,n,r,i,a){var o=Q();try{return mf(e,t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function eT(e,t,n,r,i){var a=Q();try{return _f(e,t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function tT(e,t,n,r,i,a,o){var s=Q();try{return wf(e,t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function nT(e,t,n,r,i,a,o,s){var c=Q();try{Ff(e,t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function rT(e,t,n,r,i){var a=Q();try{return ff(e,t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function iT(e,t,n,r,i){var a=Q();try{jf(e,t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function aT(e,t,n,r,i,a,o){var s=Q();try{hf(e,t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function oT(e,t,n,r,i,a){var o=Q();try{Sf(e,t,n,r,i,a)}catch(e){if($(o),e!==e+0)throw e;Z(1,0)}}function sT(e,t,n,r,i,a,o){var s=Q();try{Ef(e,t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}function cT(e,t){var n=Q();try{return vf(e,t)}catch(e){if($(n),e!==e+0)throw e;Z(1,0)}}function lT(e,t,n,r,i){var a=Q();try{bf(e,t,n,r,i)}catch(e){if($(a),e!==e+0)throw e;Z(1,0)}}function uT(e,t,n,r,i,a,o,s){var c=Q();try{Pf(e,t,n,r,i,a,o,s)}catch(e){if($(c),e!==e+0)throw e;Z(1,0)}}function dT(e,t,n,r){var i=Q();try{return Nf(e,t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function fT(e,t,n,r){var i=Q();try{Of(e,t,n,r)}catch(e){if($(i),e!==e+0)throw e;Z(1,0)}}function pT(e,t,n,r,i,a,o){var s=Q();try{return Tf(e,t,n,r,i,a,o)}catch(e){if($(s),e!==e+0)throw e;Z(1,0)}}t.FS=U;var mT;function hT(e){this.name=`ExitStatus`,this.message=`Program terminated with exit(`+e+`)`,this.status=e}Pe=function e(){mT||gT(),mT||(Pe=e)};function gT(e){if(e||=a,Me>0||(De(),Me>0))return;function r(){mT||(mT=!0,t.calledRun=!0,A||(Oe(),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),ke()))}t.setStatus?(t.setStatus(`Running...`),setTimeout(function(){setTimeout(function(){t.setStatus(``)},1),r()},1)):r()}t.run=gT;function _T(e,t){ee=e,vT(e)}function vT(e){ee=e,Ee()||(t.onExit&&t.onExit(e),A=!0),s(e,new hT(e))}if(t.preInit)for(typeof t.preInit==`function`&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return gT(),t.ready})})(),Ol=new URL(`opencascade.full-BROZOezB.wasm`,import.meta.url).href;function kl(e,t,n,r){let i=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],a=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],o=(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],s=i(t,e),c=i(r,n),l=i(e,n),u=a(s,s),d=a(s,c),f=a(c,c),p=a(s,l),m=a(c,l),h=1e-14,g=0,_=0;if(u<h&&f<h)g=0,_=0;else if(u<h)g=0,_=Math.max(0,Math.min(1,m/f));else if(f<h)_=0,g=Math.max(0,Math.min(1,-p/u));else{let e=u*f-d*d,t,n=e,r,i=e;e<h?(t=0,n=1,r=m,i=f):(t=d*m-f*p,r=u*m-d*p,t<0?(t=0,r=m,i=f):t>n&&(t=n,r=m+d,i=f)),r<0?(r=0,-p<0?t=0:-p>u?t=n:(t=-p,n=u)):r>i&&(r=i,-p+d<0?t=0:-p+d>u?t=n:(t=-p+d,n=u)),g=Math.abs(t)<h?0:t/n,_=Math.abs(r)<h?0:r/i}let v=o(e,s,g),y=o(n,c,_),b=i(v,y);return{a:v,b:y,distance:Math.hypot(...b)}}var Al=e=>document.querySelector(e),jl=Al(`#viewport`),Ml=Al(`#overlay`),Nl=Al(`#status`),Pl=Al(`#result`),Fl=Al(`#method`),Il=Al(`#model`),Ll=Al(`#clear`),Rl=new nl({canvas:jl,antialias:!0,alpha:!0});Rl.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rl.outputColorSpace=Re;var zl=new Ln;zl.add(new aa(16777215,4412523,2.6));var Bl=new ba(16777215,2.5);Bl.position.set(130,180,160),zl.add(Bl);var Vl=new _a(42,1,.01,1e5);Vl.up.set(0,1,0),Vl.position.set(90,90,90);var Hl=new pl(Vl,jl);Hl.enableDamping=!0;var Ul=new On;zl.add(Ul);var Wl=new On;zl.add(Wl);var Gl=new On;zl.add(Gl);var Kl=new On;zl.add(Kl);var ql=`shaded-edges`,Jl=[],Yl=[],Xl=null,Zl=new U,Ql=new Ra,$l,eu=`auto`,tu=!1,nu=!1,ru=[];function iu(e){Nl.textContent=tu&&!nu?Il.value:e}function au(e){console.info(`[CAD Viewer]`,e)}function ou(e,t=``){Pl.textContent=e,Fl.textContent=t}function su(e){return Number(e).toLocaleString(`id-ID`,{minimumFractionDigits:2,maximumFractionDigits:2})}function cu(){let e=jl.parentElement,t=e.clientWidth,n=e.clientHeight;Rl.setSize(t,n,!1),Vl.aspect=t/n,Vl.updateProjectionMatrix()}new ResizeObserver(cu).observe(jl.parentElement);function lu(){for(Xl=null;Wl.children.length;){let e=Wl.children.pop();e.parent=null,e.geometry?.dispose(),e.material?.dispose()}for(let e of ru)e.el.remove();ru=[],ou(`—`,`Pilih mode pengukuran.`)}function uu(){for(lu(),Jl=[],Yl=[];Gl.children.length;){let e=Gl.children.pop();e.parent=null,e.geometry?.dispose(),e.material?.dispose()}for(;Kl.children.length;){let e=Kl.children.pop();e.parent=null,e.geometry?.dispose(),e.material?.dispose()}for(;Ul.children.length;){let e=Ul.children.pop();e.parent=null,e.geometry?.dispose(),e.material?.dispose()}}function du(e,t=16759887){let n=new Qn().setFromObject(Ul),r=new ti(new Ti(Math.max(n.getSize(new G).length()*.006,.25),12,9),new Ur({color:t,depthTest:!1}));r.position.copy(e),r.renderOrder=10,Wl.add(r)}function fu(e,t){let n=new yi(new jr().setFromPoints([e,t]),new di({color:16761693,depthTest:!1}));n.renderOrder=9,Wl.add(n)}function pu(e,t){let n=document.createElement(`span`);n.className=`measure-label`,n.textContent=e,Ml.appendChild(n),ru.push({el:n,at:t.clone()})}function mu(){let e=jl.clientWidth,t=jl.clientHeight;for(let n of ru){let r=n.at.clone().project(Vl);n.el.style.display=r.z>=1||r.z<=-1?`none`:`block`,n.el.style.left=`${(r.x*.5+.5)*e}px`,n.el.style.top=`${(-r.y*.5+.5)*t}px`}}function hu(){Hl.update(),gu(),mu(),Rl.render(zl,Vl),requestAnimationFrame(hu)}function gu(){(jl.width!==Math.floor(jl.clientWidth*Rl.getPixelRatio())||jl.height!==Math.floor(jl.clientHeight*Rl.getPixelRatio()))&&cu()}function _u(){let e=new Qn().setFromObject(Ul);if(e.isEmpty())return;let t=e.getCenter(new G),n=Math.max(e.getSize(new G).length(),1),r=Il.value.toUpperCase().includes(`WHEEL ASSEMBLY`);Vl.up.set(0,+!r,+!!r);let i=r?new G(n*.9,n*.72,n*.96):new G(n*.9,n*.72,n*.9);Vl.position.copy(t).add(i),Vl.near=Math.max(.01,n/1e3),Vl.far=n*30,Vl.updateProjectionMatrix(),Hl.target.copy(t),Hl.enableRotate=!0,Hl.update()}function vu(e,t){let n=t.Axis().Direction(),r=new G(n.X(),n.Y(),n.Z()).normalize(),i=t.Location(),a=new G(i.X(),i.Y(),i.Z()),o=Math.abs(t.SemiAngle()*180/Math.PI);if(!Number.isFinite(o)||o<=.001||o>=89.999)return null;let s=[],c=new $l.TopExp_Explorer_2(e,$l.TopAbs_ShapeEnum.TopAbs_VERTEX,$l.TopAbs_ShapeEnum.TopAbs_SHAPE);try{for(;c.More();){let e=$l.TopoDS.Vertex_1(c.Current()),t=$l.BRep_Tool.Pnt(e),n=(t.X()-a.x)*r.x+(t.Y()-a.y)*r.y+(t.Z()-a.z)*r.z;Number.isFinite(n)&&s.push(n),c.Next()}}finally{c.delete()}if(s.length<2)return{angleDeg:o,supported:!1,reason:`Tepi chamfer tidak memiliki cukup vertex B-Rep.`};let l=Math.min(...s),u=Math.max(...s),d=u-l;if(d<1e-6)return{angleDeg:o,supported:!1,reason:`Dua batas aksial chamfer tidak dapat dibedakan.`};let f=Math.max(.02,d*.002);if(!s.every(e=>Math.min(Math.abs(e-l),Math.abs(e-u))<=f))return{angleDeg:o,supported:!1,reason:`Batas bukan dua lingkaran pada bidang tegak lurus sumbu.`};let p=d*Math.tan(o*Math.PI/180);return!Number.isFinite(p)||p<1e-6?{angleDeg:o,supported:!1,reason:`Ukuran radial tidak valid.`}:{angleDeg:o,axial:d,radial:p,supported:!0}}function yu(e){let t=new $l.BRepMesh_IncrementalMesh_2(e,.08,!1,.18,!1);t.Perform(new $l.Message_ProgressRange_1);let n=new $l.TopExp_Explorer_2(e,$l.TopAbs_ShapeEnum.TopAbs_FACE,$l.TopAbs_ShapeEnum.TopAbs_SHAPE),r=0,i=0;for(;n.More();){r++;let e=$l.TopoDS.Face_1(n.Current()),t=new $l.TopLoc_Location_1,a=$l.BRep_Tool.Triangulation(e,t,0);if(a?.IsNull?.()){n.Next();continue}let o=a.get();if(!o||o.NbTriangles()<1){n.Next();continue}let s=t.Transformation(),c=[];for(let t=1;t<=o.NbTriangles();t++){let n=o.Triangle(t),r=n.Value(1),i=n.Value(2),a=n.Value(3);if(e.Orientation_1()===$l.TopAbs_Orientation.TopAbs_REVERSED){let e=i;i=a,a=e}for(let e of[r,i,a]){let t=o.Node(e).Transformed(s);c.push(t.X(),t.Y(),t.Z())}}let l=new jr;l.setAttribute(`position`,new yr(c,3)),l.computeVertexNormals();let u=new ti(l,new Fi({color:11124431,roughness:.54,metalness:.13,side:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));u.userData.faceIndex=r;try{let t=new $l.BRepAdaptor_Surface_2(e,!0);t.GetType()===$l.GeomAbs_SurfaceType.GeomAbs_Cylinder?u.userData.cylinderRadius=t.Cylinder().Radius():t.GetType()===$l.GeomAbs_SurfaceType.GeomAbs_Cone&&(u.userData.chamfer=vu(e,t.Cone())),t.delete()}catch(e){console.debug(`Face type unavailable`,r,e)}Ul.add(u),i++,n.Next()}return n.delete(),t.delete(),i}function bu(e){let t=0,n=0,r=new $l.TopExp_Explorer_2(e,$l.TopAbs_ShapeEnum.TopAbs_EDGE,$l.TopAbs_ShapeEnum.TopAbs_SHAPE);try{for(;r.More();){let e=null;try{let n=$l.TopoDS.Edge_1(r.Current());e=new $l.BRepAdaptor_Curve_2(n);let i=e.FirstParameter(),a=e.LastParameter();if(!Number.isFinite(i)||!Number.isFinite(a)||Math.abs(a-i)<1e-9){r.Next();continue}let o=e.GetType(),s=o===$l.GeomAbs_CurveType.GeomAbs_Line,c=o===$l.GeomAbs_CurveType.GeomAbs_Circle,l=o===$l.GeomAbs_CurveType.GeomAbs_Ellipse,u=s?1:c||l?Math.max(24,Math.min(160,Math.ceil(Math.abs(a-i)*24))):64,d=[];for(let t=0;t<=u;t++){let n=e.Value(i+(a-i)*t/u);Number.isFinite(n.X())&&Number.isFinite(n.Y())&&Number.isFinite(n.Z())&&d.push(new G(n.X(),n.Y(),n.Z()))}if(d.length>1){let e=new yi(new jr().setFromPoints(d),new di({color:2637138,depthTest:!0,depthWrite:!1}));e.renderOrder=3,Kl.add(e),t++}}catch(e){n++,console.debug(`Kurva visual tidak bisa ditampilkan`,e)}finally{try{e?.delete()}catch{}}r.Next()}}finally{r.delete()}return{rendered:t,skipped:n}}function xu(){let e=ql===`wireframe`,t=ql===`shaded-edges`,n=Kl.children.length>0;for(let t of Ul.children)if(t.material){let r=e&&!n;t.material.visible=!e||r,t.material.wireframe=r,t.material.color.setHex(r?1586768:11124431),t.material.needsUpdate=!0}Kl.visible=(e||t)&&n;for(let t of Kl.children)t.material.color.setHex(e?2377568:3692396),t.material.depthTest=!e,t.material.depthWrite=!1,t.material.transparent=!1,t.material.opacity=1,t.material.needsUpdate=!0,t.renderOrder=e?4:3;document.querySelectorAll(`[data-style]`).forEach(e=>{let t=e.dataset.style===ql;e.setAttribute(`aria-checked`,String(t)),e.textContent=e.dataset.style===`shaded`?`Shaded`:e.dataset.style===`shaded-edges`?`Shaded with Edges`:`Wireframe`,t&&(e.textContent+=` ✓`)})}function Su(){let e=Al(`#visualStyleButton`),t=Al(`#visualStyleOptions`),n=()=>{t.hidden=!0,e.setAttribute(`aria-expanded`,`false`)};e.addEventListener(`click`,()=>{let n=t.hidden;t.hidden=!n,e.setAttribute(`aria-expanded`,String(n))}),t.querySelectorAll(`[data-style]`).forEach(e=>{e.addEventListener(`click`,()=>{ql=e.dataset.style,xu(),n()})}),document.addEventListener(`click`,e=>{Al(`#visualMenu`).contains(e.target)||n()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n()}),xu()}function Cu(e){let t=new $l.TopExp_Explorer_2(e,$l.TopAbs_ShapeEnum.TopAbs_EDGE,$l.TopAbs_ShapeEnum.TopAbs_SHAPE),n=0,r=0;try{for(;t.More();){let e=null;try{let r=$l.TopoDS.Edge_1(t.Current());if(e=new $l.BRepAdaptor_Curve_2(r),e.GetType()!==$l.GeomAbs_CurveType.GeomAbs_Circle){t.Next();continue}let i=e.Circle(),a=i.Location(),o=i.Axis().Direction(),s=new G(a.X(),a.Y(),a.Z()),c=new G(o.X(),o.Y(),o.Z()).normalize(),l=i.Radius();if(!Number.isFinite(l)||l<1e-6){t.Next();continue}let u=e.FirstParameter(),d=e.LastParameter();if(!Number.isFinite(u)||!Number.isFinite(d)||Math.abs(d-u)<1e-8||Jl.some(e=>e.center.distanceTo(s)<1e-4&&Math.abs(e.radius-l)<1e-4&&Math.abs(e.axis.dot(c))>.99999&&Math.abs(e.end-e.start-(d-u))<1e-4)){t.Next();continue}let f=Math.max(24,Math.ceil(Math.abs(d-u)/(Math.PI*2)*120)),p=[];for(let t=0;t<=f;t++){let n=e.Value(u+(d-u)*t/f);p.push(new G(n.X(),n.Y(),n.Z()))}let m=new yi(new jr().setFromPoints(p),new di({color:2861992,transparent:!0,opacity:.92,depthTest:!1}));m.renderOrder=6,m.visible=!1,Gl.add(m),Jl.push({center:s,axis:c,radius:l,visual:m,points:p,start:u,end:d}),n++}catch(e){r++,console.debug(`Tepi B-Rep tidak didukung:`,e)}finally{try{e?.delete()}catch{}}t.Next()}}finally{t.delete()}return Gl.visible=eu===`auto`,{count:n,skipped:r}}function wu(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=kt.clamp(((e.x-t.x)*r+(e.y-t.y)*i)/(r*r+i*i||1),0,1);return Math.hypot(e.x-t.x-r*a,e.y-t.y-i*a)}function Tu(e){let t=e.clone().project(Vl);return{x:(t.x*.5+.5)*jl.clientWidth,y:(-.5*t.y+.5)*jl.clientHeight,z:t.z}}function Eu(e){Yl=[];let t=new $l.TopExp_Explorer_2(e,$l.TopAbs_ShapeEnum.TopAbs_EDGE,$l.TopAbs_ShapeEnum.TopAbs_SHAPE);try{for(;t.More();){let e=null;try{let n=$l.TopoDS.Edge_1(t.Current());if(e=new $l.BRepAdaptor_Curve_2(n),e.GetType()!==$l.GeomAbs_CurveType.GeomAbs_Line){t.Next();continue}let r=e.FirstParameter(),i=e.LastParameter();if(!Number.isFinite(r)||!Number.isFinite(i)){t.Next();continue}let a=e.Value(r),o=e.Value(i),s=new G(a.X(),a.Y(),a.Z()),c=new G(o.X(),o.Y(),o.Z());if(s.distanceTo(c)<1e-5){t.Next();continue}Yl.some(e=>e.a.distanceTo(s)<1e-5&&e.b.distanceTo(c)<1e-5||e.a.distanceTo(c)<1e-5&&e.b.distanceTo(s)<1e-5)||Yl.push({a:s,b:c})}catch(e){console.debug(`Tepi lurus dilewati`,e)}finally{try{e?.delete()}catch{}}t.Next()}}finally{t.delete()}return{count:Yl.length}}function Du(){for(let e of Jl){let t=Xl?.kind===`circle`&&Xl.item===e;e.visual.visible=!!t,e.visual.material.color.setHex(t?16758606:2861992)}}function Ou(e){let t=jl.getBoundingClientRect(),n={x:(e.clientX-t.left)*jl.clientWidth/t.width,y:(e.clientY-t.top)*jl.clientHeight/t.height},r=null,i=13;for(let e of Jl)for(let t=1;t<e.points.length;t++){let a=Tu(e.points[t-1]),o=Tu(e.points[t]);if(a.z>1&&o.z>1||a.z<-1&&o.z<-1)continue;let s=wu(n,a,o);s<i&&(i=s,r={kind:`circle`,item:e})}for(let e of Yl){let t=Tu(e.a),a=Tu(e.b);if(t.z>1&&a.z>1||t.z<-1&&a.z<-1)continue;let o=wu(n,t,a);o<i&&(i=o,r={kind:`line`,item:e})}return r}function ku(e,t,n,r){fu(e,t),du(e,6807502),du(t,6807502),pu(n,e.clone().add(t).multiplyScalar(.5)),ou(n,r)}function Au(e){let t=Xl;if(!t){if(Xl=e,Du(),e.kind===`circle`){let t=e.item.radius;ou(`Ø${su(2*t)} / R${su(t)}`,`Tepi lingkaran A dipilih. Klik lingkaran kedua untuk panjang aksial atau jarak pusat (mm).`)}else ou(`Tepi A dipilih`,`Klik tepi lurus kedua untuk jarak terpendek antartepi (mm).`);return}if(t.kind!==e.kind){Xl=e,Du(),ou(`Pilihan pertama diganti`,`Klik tepi kedua dengan jenis yang sama (lingkaran atau garis lurus).`);return}Xl=null,Du();let n=t.item,r=e.item;if(n===r)ou(`Pilih dua tepi berbeda`,`Klik lingkaran atau garis lain untuk pengukuran jarak.`);else if(t.kind===`circle`){if(!(Math.abs(n.axis.dot(r.axis))>.9999)){ou(`Sumbu berbeda arah`,`Dua pusat lubang hanya dibandingkan jika sumbu lingkarannya sejajar.`);return}let e=r.center.clone().sub(n.center),t=e.dot(n.axis),i=e.clone().addScaledVector(n.axis,-t).length(),a=new Qn().setFromObject(Ul).getSize(new G).length(),o=Math.max(.02,a*2e-4);if(i<=o){let e=Math.abs(t);if(e<1e-6){ou(`Pusat berimpit`,`Pilih lingkaran pada posisi yang berbeda.`);return}let i=Vl.up.clone().addScaledVector(n.axis,-Vl.up.dot(n.axis));i.lengthSq()<1e-8&&(i=Vl.position.clone().sub(Hl.target).addScaledVector(n.axis,-Vl.position.clone().sub(Hl.target).dot(n.axis))),i.lengthSq()<1e-8&&(i=new G(1,0,0).cross(n.axis)),i.normalize();let o=Math.max(n.radius,r.radius)+Math.max(2,a*.045),s=i.multiplyScalar(o),c=n.center.clone().add(s),l=r.center.clone().add(s);fu(n.center,c),fu(r.center,l),ku(c,l,`${su(e)} mm`,`Panjang aksial dari dua lingkaran sesumbu; posisi pusat analitik STEP.`)}else{let i=e.length(),a=Math.abs(t)<=o;ku(n.center,r.center,`${su(i)} mm`,a?`Jarak pusat dua lingkaran pada bidang yang sama (geometri STEP).`:`Jarak pusat 3D antarlingkaran; kedua pusat berada pada bidang aksial berbeda.`)}}else{let e=kl(n.a.toArray(),n.b.toArray(),r.a.toArray(),r.b.toArray());if(!Number.isFinite(e.distance)){ou(`Tidak dapat diukur`,`Kurva tepi belum didukung.`);return}ku(new G(...e.a),new G(...e.b),`${su(e.distance)} mm`,`Jarak terpendek 3D antara dua segmen garis lurus B-Rep STEP.`)}}async function ju(e){if($l&&!nu){nu=!0,Il.disabled=!0,tu=!1,uu(),ou(`—`,`Sedang membaca file STEP…`),iu(`Membaca ${e} (B-Rep)…`),au(`Membaca /step/${e}…`);try{let t=`./step/${encodeURIComponent(e)}`,n=await fetch(t);if(!n.ok)throw Error(`HTTP ${n.status}: ${t}`);let r=new Uint8Array(await n.arrayBuffer()),i=`/current-model.step`;try{$l.FS.unlink(i)}catch{}$l.FS.writeFile(i,r);let a=new $l.STEPControl_Reader_1,o=a.ReadFile(i),s=$l.IFSelect_ReturnStatus?.IFSelect_RetDone;if(s!==void 0&&o!==s)throw Error(`STEP reader mengembalikan status ${String(o)}`);a.TransferRoots(new $l.Message_ProgressRange_1);let c=a.OneShape();if(c.IsNull())throw Error(`STEP tidak menghasilkan shape.`);let l=yu(c),u=Cu(c),d=bu(c),f=Eu(c);if(xu(),l===0)throw Error(`Tidak ditemukan face B-Rep yang bisa digambar.`);_u(),tu=!0,au(`${e}\n${l} face, ${u.count} tepi lingkaran, ${d.rendered} garis B-Rep, ${f.count} tepi lurus.`),iu(e),ou(`Model siap`,`Klik permukaan silinder/chamfer, atau pilih dua lingkaran atau dua tepi lurus.`),a.delete()}catch(t){console.error(t),iu(`Gagal membaca model `+e+`. Tekan F12 → Console.`),au(`ERROR: ${t.message}\nBuka F12 → Console untuk informasi lebih lengkap.`),ou(`Gagal memuat`,`Periksa nama file dan versi OpenCascade.js.`)}finally{nu=!1,Il.disabled=!1,tu&&(Nl.textContent=e)}}}function Mu(e){if(!tu||eu!==`auto`)return;let t=Ou(e);if(t){Au(t);return}Xl=null,Du();let n=jl.getBoundingClientRect();Zl.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),Ql.setFromCamera(Zl,Vl);let r=Ql.intersectObjects(Ul.children,!1);if(!r.length){iu(`Klik permukaan model yang terlihat.`);return}let i=r[0],a=i.point.clone();if(eu===`auto`&&typeof i.object.userData.cylinderRadius==`number`){let e=i.object.userData.cylinderRadius;if(typeof e!=`number`){iu(`Bidang ini bukan silinder. Klik sisi lengkung lubang atau poros.`),ou(`Bukan silinder`,`Pengukuran Ø/R B-Rep berlaku pada permukaan silinder.`);return}let t=`Ø${su(e*2)} / R${su(e)}`;du(a),pu(`Ø${su(e*2)} · R${su(e)}`,a),ou(t,`Diameter dan radius nominal dari permukaan silinder STEP (mm).`)}else if(eu===`auto`&&i.object.userData.chamfer){let e=i.object.userData.chamfer;if(!e){ou(`Bukan chamfer kerucut`,`Klik permukaan miring melingkar (CONICAL_SURFACE), bukan permukaan datar atau silinder.`),iu(`Bidang ini bukan permukaan kerucut. Klik bevel di ujung AXLE.`);return}if(!e.supported){let t=Number.isFinite(e.angleDeg)?`${su(e.angleDeg)}°`:`—`;du(a),pu(`Sudut ${t}`,a),ou(`Sudut ${t}`,`Permukaan kerucut terdeteksi, tetapi ukuran chamfer tidak dapat dipastikan: `+e.reason),iu(`Terdeteksi kerucut, tetapi batasnya tidak sesuai chamfer melingkar sederhana.`);return}let t=su(e.angleDeg),n=Math.abs(e.angleDeg-45)<.01?`${su(e.axial)} × 45°`:`${su(e.axial)} × ${t}°`;du(a),pu(n,a),ou(n,`Chamfer B-Rep: arah sumbu ${su(e.axial)} mm, arah radial ${su(e.radial)} mm; sudut ${t}°. Nilai nominal model CAD.`),iu(`Face ${i.object.userData.faceIndex}: chamfer ${n}; klik bevel lain untuk mengukur.`)}else ou(`Pilih fitur CAD`,`Klik silinder, chamfer, tepi lingkaran, atau tepi lurus. Untuk jarak, pilih dua tepi sejenis.`)}var Nu=0,Pu=null;function Fu(){Du(),jl.style.cursor=`grab`}jl.addEventListener(`pointermove`,e=>{!tu||eu!==`auto`||e.buttons!==0?Fu():(Pu={clientX:e.clientX,clientY:e.clientY},Nu||=requestAnimationFrame(()=>{if(Nu=0,!tu||eu!==`auto`||!Pu)return;let e=Ou(Pu);Du(),e?.kind===`circle`&&(e.item.visual.visible=!0,Xl?.item!==e.item&&e.item.visual.material.color.setHex(2334104)),jl.style.cursor=e?`crosshair`:`grab`}))}),jl.addEventListener(`pointerleave`,()=>{Pu=null,Fu()});var Iu=null;jl.addEventListener(`pointerdown`,e=>Iu={x:e.clientX,y:e.clientY}),jl.addEventListener(`pointerup`,e=>{Iu&&=(Math.hypot(e.clientX-Iu.x,e.clientY-Iu.y)<5&&e.button===0&&Mu(e),null)});for(let e of document.querySelectorAll(`[data-mode]`))e.addEventListener(`click`,()=>{eu=eu===`auto`?`orbit`:`auto`,Xl=null,Du(),Gl.visible=eu===`auto`,e.classList.toggle(`active`,eu===`auto`),e.setAttribute(`aria-pressed`,String(eu===`auto`)),Al(`#cadModeHint`).textContent=eu===`auto`?`Klik fitur CAD untuk mengukur`:`Ukur tidak aktif`,ou(eu===`auto`?`Ukur otomatis aktif`:`Ukur nonaktif`,eu===`auto`?`Klik permukaan silinder/chamfer atau pilih dua tepi.`:`Klik Ukur otomatis untuk mengukur lagi.`)});Il.addEventListener(`change`,()=>ju(Il.value)),Al(`#resetView`).addEventListener(`click`,_u),Ll.addEventListener(`click`,()=>{lu(),iu(`Pengukuran dihapus.`)});async function Lu(){iu(`Menjalankan mesin Open CASCADE WebAssembly…`),au(`Memuat opencascade.full.wasm… (unduhan awal cukup besar)`);try{$l=await Dl({locateFile:()=>Ol}),au(`Mesin Open CASCADE berhasil dimuat.`),await ju(Il.value)}catch(e){console.error(e),iu(`Gagal menjalankan OpenCascade.js`),au(`ERROR: `+e.message+`
Cek file WASM dan console browser (F12).`)}}Su(),cu(),hu();var Ru=!1;function zu(){Ru||(Ru=!0,Lu())}var Bu=document.querySelector(`#pengukuran`);if(`IntersectionObserver`in window){let e=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&(e.disconnect(),zu())},{rootMargin:`500px 0px`});e.observe(Bu)}else zu();