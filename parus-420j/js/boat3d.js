(()=>{var Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,Xh=1,cf=2;var Zs=1,lf=2,Gr=3,di=0,gn=1,ln=2,hn=0,Vr=1,jh=2,Kh=3,Yh=4,Nc=5;var fi=100,hf=101,uf=102,df=103,ff=104,$s=200,pf=201,mf=202,gf=203,Jh=204,Zh=205,Ja=206,bf=207,Za=208,_f=209,xf=210,vf=211,yf=212,Mf=213,Sf=214,sc=0,rc=1,ac=2,Mr=3,oc=4,cc=5,lc=6,hc=7,Fc=0,Ef=1,Tf=2,Ci=0,$a=1,Qa=2,eo=3,Qs=4,to=5,no=6,io=7,Ph="attached",wf="detached",$h=300,As=301,er=302,Uc=303,Oc=304,so=306,yn=1e3,li=1001,Sr=1002,nn=1003,Bc=1004;var tr=1005;var on=1006,Wr=1007;var Pi=1008;var Un=1009,Qh=1010,eu=1011,qr=1012,kc=1013,Ii=1014,ni=1015,Sn=1016,zc=1017,Hc=1018,Rs=1020,tu=35902,nu=35899,iu=1021,su=1022,Wn=1023,ki=1026,Yi=1027,Gc=1028,Vc=1029,Cs=1030,Wc=1031;var qc=1033,ro=33776,ao=33777,oo=33778,co=33779,Xc=35840,jc=35841,Kc=35842,Yc=35843,Jc=36196,Zc=37492,$c=37496,Qc=37488,el=37489,lo=37490,tl=37491,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,cl=37814,ll=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,ml=37821,gl=36492,bl=36494,_l=36495,xl=36283,vl=36284,ho=36285,yl=36286;var Hs=2300,Gs=2301,tc=2302,Ih=2303,Dh=2400,Lh=2401,Nh=2402,Af=2500;var ru=0,uo=1,Xr=2,Rf=3200;var jr=0,Cf=1,Di="",Jt="srgb",Gn="srgb-linear",ba="linear",Ht="srgb";var nc=7680;var Pf=519,If=512,Df=513,Lf=514,Ml=515,Nf=516,Ff=517,Sl=518,Uf=519,au=35044;var ou="300 es",Si=2e3,Er=2001;function Bp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Of(){let i=Tr("canvas");return i.style.display="block",i}var md={},wr=null;function _a(...i){let e="THREE."+i.shift();wr?wr("log",e,...i):console.log(e,...i)}function Bf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rt(...i){i=Bf(i);let e="THREE."+i.shift();if(wr)wr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function bt(...i){i=Bf(i);let e="THREE."+i.shift();if(wr)wr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){let e=i.join(" ");e in md||(md[e]=!0,rt(...i))}function kf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zf={[sc]:rc,[ac]:lc,[oc]:hc,[Mr]:cc,[rc]:sc,[lc]:ac,[hc]:oc,[cc]:Mr},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=1234567,vr=Math.PI/180,Vs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function cu(i,e){return(i%e+e)%e}function zp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hp(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function Gp(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function Vp(i,e=1){return e-Math.abs(cu(i,e*2)-e)}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jp(i,e){return i+Math.random()*(e-i)}function Kp(i){return i*(.5-Math.random())}function Yp(i){i!==void 0&&(gd=i);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(i){return i*vr}function Zp(i){return i*Vs}function $p(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ii={DEG2RAD:vr,RAD2DEG:Vs,generateUUID:hi,clamp:wt,euclideanModulo:cu,mapLinear:zp,inverseLerp:Hp,lerp:pa,damp:Gp,pingpong:Vp,smoothstep:Wp,smootherstep:qp,randInt:Xp,randFloat:jp,randFloatSpread:Kp,seededRandom:Yp,degToRad:Jp,radToDeg:Zp,isPowerOfTwo:$p,ceilPowerOfTwo:Qp,floorPowerOfTwo:em,setQuaternionFromProperEuler:tm,normalize:qt,denormalize:Mi},pu=class pu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pu.prototype.isVector2=!0;var pe=pu,Fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let b=l*d+c*f+h*g+u*y;b<0&&(d=-d,f=-f,g=-g,y=-y,b=-b);let m=1-o;if(b<.9995){let M=Math.acos(b),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mu=class mu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mu.prototype.isVector3=!0;var P=mu,nh=new P,bd=new Fn,gu=class gu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],b=s[3],m=s[6],M=s[1],A=s[4],p=s[7],S=s[2],R=s[5],C=s[8];return r[0]=a*y+o*M+l*S,r[3]=a*b+o*A+l*R,r[6]=a*m+o*p+l*C,r[1]=c*y+h*M+u*S,r[4]=c*b+h*A+u*R,r[7]=c*m+h*p+u*C,r[2]=d*y+f*M+g*S,r[5]=d*b+f*A+g*R,r[8]=d*m+f*p+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gu.prototype.isMatrix3=!0;var vt=gu,ih=new vt,_d=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nm(){let i={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ht&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ht&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gn]:{primaries:e,whitePoint:n,transfer:ba,toXYZ:_d,fromXYZ:xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:_d,fromXYZ:xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var Tt=nm();function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,uc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=Tr("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},im=0,Ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sh(s[a].image)):r.push(sh(s[a]))}else r=sh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var sm=0,rh=new P,mn=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=on,a=Pi,o=Wn,l=Un,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=hi(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=$h;mn.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],b=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-b)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+b)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,p=(f+1)/2,S=(m+1)/2,R=(h+d)/4,C=(u+y)/4,_=(g+b)/4;return A>p&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=R/n,r=C/n):p>S?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=R/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((b-g)*(b-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(b-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Gt=bu,dc=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new mn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Lc=class Lc{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,b)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,b){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rm,e,am)}lookAt(e,t,n){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),bs.crossVectors(n,Qn),bs.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),bs.crossVectors(n,Qn)),bs.normalize(),To.crossVectors(Qn,bs),s[0]=bs.x,s[4]=To.x,s[8]=Qn.x,s[1]=bs.y,s[5]=To.y,s[9]=Qn.y,s[2]=bs.z,s[6]=To.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],b=n[10],m=n[14],M=n[3],A=n[7],p=n[11],S=n[15],R=s[0],C=s[4],_=s[8],E=s[12],L=s[1],F=s[5],U=s[9],G=s[13],B=s[2],V=s[6],Y=s[10],J=s[14],he=s[3],q=s[7],te=s[11],Z=s[15];return r[0]=a*R+o*L+l*B+c*he,r[4]=a*C+o*F+l*V+c*q,r[8]=a*_+o*U+l*Y+c*te,r[12]=a*E+o*G+l*J+c*Z,r[1]=h*R+u*L+d*B+f*he,r[5]=h*C+u*F+d*V+f*q,r[9]=h*_+u*U+d*Y+f*te,r[13]=h*E+u*G+d*J+f*Z,r[2]=g*R+y*L+b*B+m*he,r[6]=g*C+y*F+b*V+m*q,r[10]=g*_+y*U+b*Y+m*te,r[14]=g*E+y*G+b*J+m*Z,r[3]=M*R+A*L+p*B+S*he,r[7]=M*C+A*F+p*V+S*q,r[11]=M*_+A*U+p*Y+S*te,r[15]=M*E+A*G+p*J+S*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],b=e[11],m=e[15],M=l*f-c*d,A=o*f-c*u,p=o*d-l*u,S=a*f-c*h,R=a*d-l*h,C=a*u-o*h;return t*(y*M-b*A+m*p)-n*(g*M-b*S+m*R)+s*(g*A-y*S+m*C)-r*(g*p-y*R+b*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],b=e[14],m=e[15],M=t*o-n*a,A=t*l-s*a,p=t*c-r*a,S=n*l-s*o,R=n*c-r*o,C=s*c-r*l,_=h*y-u*g,E=h*b-d*g,L=h*m-f*g,F=u*b-d*y,U=u*m-f*y,G=d*m-f*b,B=M*G-A*U+p*F+S*L-R*E+C*_;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/B;return e[0]=(o*G-l*U+c*F)*V,e[1]=(s*U-n*G-r*F)*V,e[2]=(y*C-b*R+m*S)*V,e[3]=(d*R-u*C-f*S)*V,e[4]=(l*L-a*G-c*E)*V,e[5]=(t*G-s*L+r*E)*V,e[6]=(b*p-g*C-m*A)*V,e[7]=(h*C-d*p+f*A)*V,e[8]=(a*U-o*L+c*_)*V,e[9]=(n*L-t*U-r*_)*V,e[10]=(g*R-y*p+m*M)*V,e[11]=(u*p-h*R-f*M)*V,e[12]=(o*E-a*F-l*_)*V,e[13]=(t*F-n*E+s*_)*V,e[14]=(y*A-g*S-b*M)*V,e[15]=(h*S-u*A+d*M)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,b=a*u,m=o*u,M=l*c,A=l*h,p=l*u,S=n.x,R=n.y,C=n.z;return s[0]=(1-(y+m))*S,s[1]=(f+p)*S,s[2]=(g-A)*S,s[3]=0,s[4]=(f-p)*R,s[5]=(1-(d+m))*R,s[6]=(b+M)*R,s[7]=0,s[8]=(g+A)*C,s[9]=(b-M)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),l=or.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xi.copy(this);let c=1/a,h=1/o,u=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,t.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Si,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Si)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Er)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Si,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Si)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Er)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Lc.prototype.isMatrix4=!0;var dt=Lc,or=new P,xi=new dt,rm=new P(0,0,0),am=new P(1,1,1),bs=new P,To=new P,Qn=new P,vd=new dt,yd=new Fn,zi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},om=0,Md=new P,cr=new Fn,es=new dt,wo=new P,ra=new P,cm=new P,lm=new Fn,Sd=new P(1,0,0),Ed=new P(0,1,0),Td=new P(0,0,1),wd={type:"added"},hm={type:"removed"},lr={type:"childadded",child:null},ah={type:"childremoved",child:null},Zt=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new zi,n=new Fn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new vt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(Td,e)}translateOnAxis(e,t){return Md.copy(e).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(Td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(ra,wo,this.up):es.lookAt(wo,ra,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(es),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),lr.child=e,this.dispatchEvent(lr),lr.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hm),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new P(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},um={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let b=t.getJointPose(y,n),m=this._getHandJoint(c,y);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function oh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=cu(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oh(a,r,e+1/3),this.g=oh(a,r,e),this.b=oh(a,r,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(wt(Nn.r*255,0,255))*65536+Math.round(wt(Nn.g*255,0,255))*256+Math.round(wt(Nn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,s=Nn.g,r=Nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Jt){Tt.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,s=Nn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Ao);let n=pa(_s.h,Ao.h,t),s=pa(_s.s,Ao.s,t),r=pa(_s.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new Ye;Ye.NAMES=Hf;var va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ss=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vi=new P,ts=new P,ch=new P,ns=new P,hr=new P,ur=new P,Ad=new P,lh=new P,hh=new P,uh=new P,dh=new Gt,fh=new Gt,ph=new Gt,as=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vi.subVectors(e,t),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vi.subVectors(s,t),ts.subVectors(n,t),ch.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(ts),l=vi.dot(ch),c=ts.dot(ts),h=ts.dot(ch),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(a,ns.y),l.addScaledVector(o,ns.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return dh.setScalar(0),fh.setScalar(0),ph.setScalar(0),dh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dh,r.x),a.addScaledVector(fh,r.y),a.addScaledVector(ph,r.z),a}static isFrontFacing(e,t,n,s){return vi.subVectors(n,t),ts.subVectors(e,t),vi.cross(ts).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),vi.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hr.subVectors(s,n),ur.subVectors(r,n),lh.subVectors(e,n);let l=hr.dot(lh),c=ur.dot(lh);if(l<=0&&c<=0)return t.copy(n);hh.subVectors(e,s);let h=hr.dot(hh),u=ur.dot(hh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(hr,a);uh.subVectors(e,r);let f=hr.dot(uh),g=ur.dot(uh);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ur,o);let b=h*g-f*u;if(b<=0&&u-h>=0&&f-g>=0)return Ad.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ad,o);let m=1/(b+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Co.subVectors(this.max,aa),dr.subVectors(e.a,aa),fr.subVectors(e.b,aa),pr.subVectors(e.c,aa),xs.subVectors(fr,dr),vs.subVectors(pr,fr),Fs.subVectors(dr,pr);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Fs.z,Fs.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Fs.z,0,-Fs.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Fs.y,Fs.x,0];return!mh(t,dr,fr,pr,Co)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,dr,fr,pr,Co))?!1:(Po.crossVectors(xs,vs),t=[Po.x,Po.y,Po.z],mh(t,dr,fr,pr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},is=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,Ro=new wn,dr=new P,fr=new P,pr=new P,xs=new P,vs=new P,Fs=new P,aa=new P,Co=new P,Po=new P,Us=new P;function mh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dn=new P,Io=new pe,dm=0,pn=class extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},fm=new wn,oa=new P,gh=new P,Kn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(gh)),this.expandByPoint(oa.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pm=0,ci=new dt,bh=new Zt,mr=new P,ei=new wn,ca=new wn,vn=new P,Ot=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bp(e)?Ma:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(ei.min,ca.min),ei.expandByPoint(vn),vn.addVectors(ei.max,ca.max),ei.expandByPoint(vn)):(ei.expandByPoint(ca.min),ei.expandByPoint(ca.max))}ei.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vn.fromBufferAttribute(o,c),l&&(mr.fromBufferAttribute(e,c),vn.add(mr)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,u=new P,d=new pe,f=new pe,g=new pe,y=new P,b=new P;function m(_,E,L){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,L),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,L),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(F),b.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),o[_].add(y),o[E].add(y),o[L].add(y),l[_].add(b),l[E].add(b),l[L].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let L=M[_],F=L.start,U=L.count;for(let G=F,B=F+U;G<B;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let A=new P,p=new P,S=new P,R=new P;function C(_){S.fromBufferAttribute(s,_),R.copy(S);let E=o[_];A.copy(E),A.sub(S.multiplyScalar(S.dot(E))).normalize(),p.crossVectors(R,E);let F=p.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,F)}for(let _=0,E=M.length;_<E;++_){let L=M[_],F=L.start,U=L.count;for(let G=F,B=F+U;G<B;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),b=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,b),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,b=l.length;y<b;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},zn=new P,Ir=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_h=new P,mm=new P,gm=new vt,Hn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_h.subVectors(n,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gm.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bm=0,An=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Vr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=Zh,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nc,this.stencilZFail=nc,this.stencilZPass=nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ss=new P,xh=new P,Do=new P,Lo=new P,Hi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ss.copy(this.origin).addScaledVector(this.direction,t),ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xh.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Lo.copy(this.origin).sub(xh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=Lo.dot(this.direction),l=-Lo.dot(Do),c=Lo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xh).addScaledVector(Do,d),f}intersectSphere(e,t){if(e.radius<0)return null;ss.subVectors(e.center,this.origin);let n=ss.dot(this.direction),s=ss.dot(ss)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ss)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,b=t.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,p=Math.abs(l),S=Math.abs(c),R=Math.abs(h),C,_,E,L,F,U,G,B,V,Y,J,he;if(p>=S&&p>=R?(E=l,U=u,V=g,he=m,l>=0?(C=c,_=h,L=d,F=f,G=y,B=b,Y=M,J=A):(C=h,_=c,L=f,F=d,G=b,B=y,Y=A,J=M)):S>=R?(E=c,U=d,V=y,he=M,c>=0?(C=h,_=l,L=f,F=u,G=b,B=g,Y=A,J=m):(C=l,_=h,L=u,F=f,G=g,B=b,Y=m,J=A)):(E=h,U=f,V=b,he=A,h>=0?(C=l,_=c,L=u,F=d,G=g,B=y,Y=m,J=M):(C=c,_=l,L=d,F=u,G=y,B=g,Y=M,J=m)),E===0)return null;let q=C/E,te=_/E,Z=1/E,ze=L-q*U,xe=F-te*U,At=G-q*V,yt=B-te*V,Mt=Y-q*he,Q=J-te*he,ae=Mt*yt-Q*At,Me=ze*Q-xe*Mt,je=At*xe-yt*ze;if(s){if(ae<0||Me<0||je<0)return null}else if((ae<0||Me<0||je<0)&&(ae>0||Me>0||je>0))return null;let Fe=ae+Me+je;if(Fe===0)return null;let lt=Z*(ae*U+Me*V+je*he);return(Fe>0?lt<0:lt>0)?null:this.at(lt/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rd=new dt,Os=new Hi,No=new Kn,Cd=new P,Fo=new P,Uo=new P,Oo=new P,vh=new P,Bo=new P,Pd=new P,ko=new P,re=class extends Zt{constructor(e=new Ot,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(vh.fromBufferAttribute(u,e),a?Bo.addScaledVector(vh,h):Bo.addScaledVector(vh.sub(t),h))}t.add(Bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(No.containsPoint(Os.origin)===!1&&(Os.intersectSphere(No,Cd)===null||Os.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(Rd.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let b=d[g],m=a[b.materialIndex],M=Math.max(b.start,f.start),A=Math.min(o.count,Math.min(b.start+b.count,f.start+f.count));for(let p=M,S=A;p<S;p+=3){let R=o.getX(p),C=o.getX(p+1),_=o.getX(p+2);s=zo(this,m,e,n,c,h,u,R,C,_),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=b.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let b=g,m=y;b<m;b+=3){let M=o.getX(b),A=o.getX(b+1),p=o.getX(b+2);s=zo(this,a,e,n,c,h,u,M,A,p),s&&(s.faceIndex=Math.floor(b/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let b=d[g],m=a[b.materialIndex],M=Math.max(b.start,f.start),A=Math.min(l.count,Math.min(b.start+b.count,f.start+f.count));for(let p=M,S=A;p<S;p+=3){let R=p,C=p+1,_=p+2;s=zo(this,m,e,n,c,h,u,R,C,_),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=b.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let b=g,m=y;b<m;b+=3){let M=b,A=b+1,p=b+2;s=zo(this,a,e,n,c,h,u,M,A,p),s&&(s.faceIndex=Math.floor(b/3),t.push(s))}}}};function _m(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;ko.copy(o),ko.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:i}}function zo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fo),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Oo);let h=_m(i,e,t,n,Fo,Uo,Oo,Pd);if(h){let u=new P;as.getBarycoord(Pd,Fo,Uo,Oo,u),s&&(h.uv=as.getInterpolatedAttribute(s,o,l,c,u,new pe)),r&&(h.uv1=as.getInterpolatedAttribute(r,o,l,c,u,new pe)),a&&(h.normal=as.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};as.getNormal(Fo,Uo,Oo,d.normal),h.face=d,h.barycoord=u}return h}var la=new Gt,Id=new Gt,Dd=new Gt,xm=new Gt,Ld=new dt,Ho=new P,yh=new Kn,Nd=new dt,Mh=new Hi,Sa=class extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ph,this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yh.copy(this.boundingSphere),yh.applyMatrix4(s),e.ray.intersectsSphere(yh)!==!1&&(Nd.copy(s).invert(),Mh.copy(e.ray).applyMatrix4(Nd),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ph?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Id.fromBufferAttribute(s.attributes.skinIndex,e),Dd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(la.copy(t),t.set(0,0,0,0)):(la.set(...t,1),t.set(0,0,0)),la.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Dd.getComponent(r);if(a!==0){let o=Id.getComponent(r);Ld.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xm.copy(la).applyMatrix4(Ld),a)}}return t.isVector4&&(t.w=la.w),t.applyMatrix4(this.bindMatrixInverse)}},Dr=class extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gi=class extends mn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fd=new dt,vm=new dt,Ea=class i{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new dt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:vm;Fd.multiplyMatrices(o,t[r]),Fd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gi(t,e,e,Wn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(rt("Skeleton: No bone found with UUID:",r),a=new Dr),this.bones.push(a),this.boneInverses.push(new dt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},cs=class extends pn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new dt,Ud=new dt,Go=[],Od=new wn,ym=new dt,ha=new re,ua=new Kn,Ws=class extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ym)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Od.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Od)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),ua.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),Ud.multiplyMatrices(n,gr),ha.matrixWorld=Ud,ha.raycast(e,Go);for(let a=0,o=Go.length;a<o;a++){let l=Go[a];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(s*this.count),s,this.count,Gc,ni));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new Kn,Mm=new pe(.5,.5),Vo=new P,Lr=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],b=r[10],m=r[11],M=r[12],A=r[13],p=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,m-g,S-M).normalize(),s[1].setComponents(c+a,f+h,m+g,S+M).normalize(),s[2].setComponents(c+o,f+u,m+y,S+A).normalize(),s[3].setComponents(c-o,f-u,m-y,S-A).normalize(),n)s[4].setComponents(l,d,b,p).normalize(),s[5].setComponents(c-l,f-d,m-b,S-p).normalize();else if(s[4].setComponents(c-l,f-d,m-b,S-p).normalize(),t===Si)s[5].setComponents(c+l,f+d,m+b,S+p).normalize();else if(t===Er)s[5].setComponents(l,d,b,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=Mm.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ls=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pc=new P,mc=new P,Bd=new dt,da=new Hi,Wo=new Kn,Sh=new P,kd=new P,hs=class extends Zt{constructor(e=new Ot,t=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pc.fromBufferAttribute(t,s-1),mc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new mt(n,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Bd.copy(s).invert(),da.copy(e.ray).applyMatrix4(Bd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,b=g-1;y<b;y+=c){let m=h.getX(y),M=h.getX(y+1),A=qo(this,e,da,l,m,M,y);A&&t.push(A)}if(this.isLineLoop){let y=h.getX(g-1),b=h.getX(f),m=qo(this,e,da,l,y,b,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,b=g-1;y<b;y+=c){let m=qo(this,e,da,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=qo(this,e,da,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(pc.fromBufferAttribute(o,s),mc.fromBufferAttribute(o,r),t.distanceSqToSegment(pc,mc,Sh,kd)>n)return;Sh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sh);if(!(c<e.near||c>e.far))return{distance:c,point:kd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var zd=new P,Hd=new P,qs=class extends hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zd.fromBufferAttribute(t,s),Hd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zd.distanceTo(Hd);e.setAttribute("lineDistance",new mt(n,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Nr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gd=new dt,Fh=new Hi,Xo=new Kn,jo=new P,wa=class extends Zt{constructor(e=new Ot,t=new Nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Gd.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(Gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let b=c.getX(g);jo.fromBufferAttribute(u,b),Vd(jo,b,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)jo.fromBufferAttribute(u,g),Vd(jo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vd(i,e,t,n,s,r,a){let o=Fh.distanceSqToPoint(i);if(o<t){let l=new P;Fh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Aa=class extends mn{constructor(e=[],t=As,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ui=class extends mn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends mn{constructor(e,t,n=Ii,s,r,a,o=nn,l=nn,c,h=ki,u=1){if(h!==ki&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gc=class extends Vi{constructor(e,t=Ii,n=As,s,r,a=nn,o=nn,l,c=ki){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(y,b,m,M,A,p,S,R,C,_,E){let L=p/C,F=S/_,U=p/2,G=S/2,B=R/2,V=C+1,Y=_+1,J=0,he=0,q=new P;for(let te=0;te<Y;te++){let Z=te*F-G;for(let ze=0;ze<V;ze++){let xe=ze*L-U;q[y]=xe*M,q[b]=Z*A,q[m]=B,c.push(q.x,q.y,q.z),q[y]=0,q[b]=0,q[m]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(ze/C),u.push(1-te/_),J+=1}}for(let te=0;te<_;te++)for(let Z=0;Z<C;Z++){let ze=d+Z+V*te,xe=d+Z+V*(te+1),At=d+(Z+1)+V*(te+1),yt=d+(Z+1)+V*te;l.push(ze,xe,yt),l.push(xe,At,yt),he+=6}o.addGroup(f,he,E),f+=he,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Es=class i extends Ot{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,y=s+1,b=new P,m=new P;for(let M=0;M<=g;M++){let A=0,p=0,S=0,R=0;if(M<=n){let E=M/n,L=E*Math.PI/2;p=-h-e*Math.cos(L),S=e*Math.sin(L),R=-e*Math.cos(L),A=E*u}else if(M<=n+r){let E=(M-n)/r;p=-h+E*t,S=e,R=0,A=u+E*d}else{let E=(M-n-r)/n,L=E*Math.PI/2;p=h+e*Math.sin(L),S=e*Math.cos(L),R=e*Math.sin(L),A=u+d+E*u}let C=Math.max(0,Math.min(1,A/f)),_=0;M===0?_=.5/s:M===g&&(_=-.5/s);for(let E=0;E<=s;E++){let L=E/s,F=L*Math.PI*2,U=Math.sin(F),G=Math.cos(F);m.x=-S*G,m.y=p,m.z=S*U,o.push(m.x,m.y,m.z),b.set(-S*G,R,S*U),b.normalize(),l.push(b.x,b.y,b.z),c.push(L+_,C)}if(M>0){let E=(M-1)*y;for(let L=0;L<s;L++){let F=E+L,U=E+L+1,G=M*y+L,B=M*y+L+1;a.push(F,U,G),a.push(U,B,G)}}}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ca=class i extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vn=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],b=n/2,m=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function M(){let p=new P,S=new P,R=0,C=(t-e)/n;for(let _=0;_<=r;_++){let E=[],L=_/r,F=L*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,B=G*l+o,V=Math.sin(B),Y=Math.cos(B);S.x=F*V,S.y=-L*n+b,S.z=F*Y,u.push(S.x,S.y,S.z),p.set(V,C,Y).normalize(),d.push(p.x,p.y,p.z),f.push(G,1-L),E.push(g++)}y.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let L=y[E][_],F=y[E+1][_],U=y[E+1][_+1],G=y[E][_+1];(e>0||E!==0)&&(h.push(L,F,G),R+=3),(t>0||E!==r-1)&&(h.push(F,U,G),R+=3)}c.addGroup(m,R,0),m+=R}function A(p){let S=g,R=new pe,C=new P,_=0,E=p===!0?e:t,L=p===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,b*L,0),d.push(0,L,0),f.push(.5,.5),g++;let F=g;for(let U=0;U<=s;U++){let B=U/s*l+o,V=Math.cos(B),Y=Math.sin(B);C.x=E*Y,C.y=b*L,C.z=E*V,u.push(C.x,C.y,C.z),d.push(0,L,0),R.x=V*.5+.5,R.y=Y*.5*L+.5,f.push(R.x,R.y),g++}for(let U=0;U<s;U++){let G=S+U,B=F+U;p===!0?h.push(B,B+1,G):h.push(B+1,B,G),_+=3}c.addGroup(m,_,p===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ko=new P,Yo=new P,Eh=new P,Jo=new as,Pa=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(vr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b,c:m}=Jo;if(y.fromBufferAttribute(o,c[0]),b.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Jo.getNormal(Eh),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let A=(M+1)%3,p=u[M],S=u[A],R=Jo[h[M]],C=Jo[h[A]],_=`${p}_${S}`,E=`${S}_${p}`;E in d&&d[E]?(Eh.dot(d[E].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(C.x,C.y,C.z)),d[E]=null):_ in d||(d[_]={index0:c[M],index1:c[A],normal:Eh.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:b}=d[g];Ko.fromBufferAttribute(o,y),Yo.fromBufferAttribute(o,b),f.push(Ko.x,Ko.y,Ko.z),f.push(Yo.x,Yo.y,Yo.z)}this.setAttribute("position",new mt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new dt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends ti{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends Fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wd=new P,qd=new P,Th=new lu,wh=new lu,Ah=new lu,Ts=class extends ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qd.subVectors(s[0],s[1]).add(s[0]),c=qd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),b<1e-4&&(b=y),Th.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,b),wh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,b),Ah.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,b)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ah.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Th.calc(l),wh.calc(l),Ah.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Sm(i,e){let t=1-i;return t*t*e}function Em(i,e){return 2*(1-i)*i*e}function Tm(i,e){return i*i*e}function ma(i,e,t,n){return Sm(i,e)+Em(i,t)+Tm(i,n)}function wm(i,e){let t=1-i;return t*t*t*e}function Am(i,e){let t=1-i;return 3*t*t*i*e}function Rm(i,e){return 3*(1-i)*i*i*e}function Cm(i,e){return i*i*i*e}function ga(i,e,t,n,s){return wm(i,e)+Am(i,t)+Rm(i,n)+Cm(i,s)}var Ia=class extends ti{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_c=class extends ti{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y),ga(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends ti{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends ti{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends ti{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ti{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y),ma(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xd(o,l.x,c.x,h.x,u.x),Xd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},vc=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Ts,CubicBezierCurve:Ia,CubicBezierCurve3:_c,EllipseCurve:Fr,LineCurve:Da,LineCurve3:xc,QuadraticBezierCurve:La,QuadraticBezierCurve3:Na,SplineCurve:Xs}),yc=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new vc[s.type]().fromJSON(s))}return this}},us=class extends yc{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Da(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new La(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ia(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Fr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Cn=class extends us{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new us().fromJSON(s))}return this}};function Pm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Fm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Fa(r,a,t,o,l,c,0),a}function Gf(i,e,t,n,s){let r;if(s===Xm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=jd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=jd(a/n|0,i[a],i[a+1],r);return r&&Ur(r,r.next)&&(Oa(r),r=r.next),r}function js(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ur(t,t.next)||rn(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&zm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Dm(i,n,s,r):Im(i)){e.push(l.i,i.i,c.i),Oa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Lm(js(i),e),Fa(i,e,t,n,s,r,2)):a===2&&Nm(i,e,t,n,s,r):Fa(js(i),e,t,n,s,r,1);break}}}function Im(i){let e=i.prev,t=i,n=i.next;if(rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fa(s,o,r,l,a,c,g.x,g.y)&&rn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(rn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),b=Math.max(h,u,d),m=Uh(f,g,e,t,n),M=Uh(y,b,e,t,n),A=i.prevZ,p=i.nextZ;for(;A&&A.z>=m&&p&&p.z<=M;){if(A.x>=f&&A.x<=y&&A.y>=g&&A.y<=b&&A!==s&&A!==a&&fa(o,h,l,u,c,d,A.x,A.y)&&rn(A.prev,A,A.next)>=0||(A=A.prevZ,p.x>=f&&p.x<=y&&p.y>=g&&p.y<=b&&p!==s&&p!==a&&fa(o,h,l,u,c,d,p.x,p.y)&&rn(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;A&&A.z>=m;){if(A.x>=f&&A.x<=y&&A.y>=g&&A.y<=b&&A!==s&&A!==a&&fa(o,h,l,u,c,d,A.x,A.y)&&rn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;p&&p.z<=M;){if(p.x>=f&&p.x<=y&&p.y>=g&&p.y<=b&&p!==s&&p!==a&&fa(o,h,l,u,c,d,p.x,p.y)&&rn(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Lm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ur(n,s)&&Wf(n,t,t.next,s)&&Ua(n,s)&&Ua(s,n)&&(e.push(n.i,t.i,s.i),Oa(t),Oa(t.next),t=i=s),t=t.next}while(t!==i);return js(t)}function Nm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vm(a,o)){let l=qf(a,o);a=js(a,a.next),l=js(l,l.next),Fa(a,e,t,n,s,r,0),Fa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Fm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Gf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gm(c))}s.sort(Um);for(let r=0;r<s.length;r++)t=Om(s[r],t);return t}function Um(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Om(i,e){let t=Bm(i,e);if(!t)return e;let n=qf(t,i);return js(n,n.next),js(t,t.next)}function Bm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ur(i,t))return t;do{if(Ur(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ua(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&km(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function km(i,e){return rn(i.prev,i,e.prev)<0&&rn(e.next,i,i.next)<0}function zm(i,e,t,n){let s=i;do s.z===0&&(s.z=Uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Gm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function fa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Vf(i,e,t,n,s,r,a,o)}function Vm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wm(i,e)&&(Ua(i,e)&&Ua(e,i)&&qm(i,e)&&(rn(i.prev,i,e.prev)||rn(i,e.prev,e))||Ur(i,e)&&rn(i.prev,i,i.next)>0&&rn(e.prev,e,e.next)>0)}function rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ur(i,e){return i.x===e.x&&i.y===e.y}function Wf(i,e,t,n){let s=$o(rn(i,e,t)),r=$o(rn(i,e,n)),a=$o(rn(t,n,i)),o=$o(rn(t,n,e));return!!(s!==r&&a!==o||s===0&&Zo(i,t,e)||r===0&&Zo(i,n,e)||a===0&&Zo(t,i,n)||o===0&&Zo(t,e,n))}function Zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function $o(i){return i>0?1:i<0?-1:0}function Wm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ua(i,e){return rn(i.prev,i,i.next)<0?rn(i,e,i.next)>=0&&rn(i,i.prev,e)>=0:rn(i,e,i.prev)<0||rn(i,i.next,e)<0}function qm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qf(i,e){let t=Oh(i.i,i.x,i.y),n=Oh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jd(i,e,t,n){let s=Oh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bh=class{static triangulate(e,t,n=2){return Pm(e,t,n)}},ks=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Kd(e),Yd(n,e);let a=e.length;t.forEach(Kd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Yd(n,t[l]);let o=Bh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Kd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ti=class i extends Ot{constructor(e=new Cn([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:jm,A,p=!1,S,R,C,_;if(m){A=m.getSpacedPoints(h),p=!0,d=!1;let ce=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,ce),R=new P,C=new P,_=new P}d||(b=0,f=0,g=0,y=0);let E=o.extractPoints(c),L=E.shape,F=E.holes;if(!ks.isClockWise(L)){L=L.reverse();for(let ce=0,de=F.length;ce<de;ce++){let ge=F[ce];ks.isClockWise(ge)&&(F[ce]=ge.reverse())}}function G(ce){let ge=10000000000000001e-36,me=ce[0];for(let Se=1;Se<=ce.length;Se++){let et=Se%ce.length,Je=ce[et],st=Je.x-me.x,Oe=Je.y-me.y,O=st*st+Oe*Oe,Lt=Math.max(Math.abs(Je.x),Math.abs(Je.y),Math.abs(me.x),Math.abs(me.y)),St=ge*Lt*Lt;if(O<=St){ce.splice(et,1),Se--;continue}me=Je}}G(L),F.forEach(G);let B=F.length,V=L;for(let ce=0;ce<B;ce++){let de=F[ce];L=L.concat(de)}function Y(ce,de,ge){return de||bt("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(de,ge)}let J=L.length;function he(ce,de,ge){let me,Se,et,Je=ce.x-de.x,st=ce.y-de.y,Oe=ge.x-ce.x,O=ge.y-ce.y,Lt=Je*Je+st*st,St=Je*O-st*Oe;if(Math.abs(St)>Number.EPSILON){let I=Math.sqrt(Lt),v=Math.sqrt(Oe*Oe+O*O),W=de.x-st/I,X=de.y+Je/I,ee=ge.x-O/v,_e=ge.y+Oe/v,be=((ee-W)*O-(_e-X)*Oe)/(Je*O-st*Oe);me=W+Je*be-ce.x,Se=X+st*be-ce.y;let ne=me*me+Se*Se;if(ne<=2)return new pe(me,Se);et=Math.sqrt(ne/2)}else{let I=!1;Je>Number.EPSILON?Oe>Number.EPSILON&&(I=!0):Je<-Number.EPSILON?Oe<-Number.EPSILON&&(I=!0):Math.sign(st)===Math.sign(O)&&(I=!0),I?(me=-st,Se=Je,et=Math.sqrt(Lt)):(me=Je,Se=st,et=Math.sqrt(Lt/2))}return new pe(me/et,Se/et)}let q=[];for(let ce=0,de=V.length,ge=de-1,me=ce+1;ce<de;ce++,ge++,me++)ge===de&&(ge=0),me===de&&(me=0),q[ce]=he(V[ce],V[ge],V[me]);let te=[],Z,ze=q.concat();for(let ce=0,de=B;ce<de;ce++){let ge=F[ce];Z=[];for(let me=0,Se=ge.length,et=Se-1,Je=me+1;me<Se;me++,et++,Je++)et===Se&&(et=0),Je===Se&&(Je=0),Z[me]=he(ge[me],ge[et],ge[Je]);te.push(Z),ze=ze.concat(Z)}let xe;if(b===0)xe=ks.triangulateShape(V,F);else{let ce=[],de=[];for(let ge=0;ge<b;ge++){let me=ge/b,Se=f*Math.cos(me*Math.PI/2),et=g*Math.sin(me*Math.PI/2)+y;for(let Je=0,st=V.length;Je<st;Je++){let Oe=Y(V[Je],q[Je],et);Me(Oe.x,Oe.y,-Se),me===0&&ce.push(Oe)}for(let Je=0,st=B;Je<st;Je++){let Oe=F[Je];Z=te[Je];let O=[];for(let Lt=0,St=Oe.length;Lt<St;Lt++){let I=Y(Oe[Lt],Z[Lt],et);Me(I.x,I.y,-Se),me===0&&O.push(I)}me===0&&de.push(O)}}xe=ks.triangulateShape(ce,de)}let At=xe.length,yt=g+y;for(let ce=0;ce<J;ce++){let de=d?Y(L[ce],ze[ce],yt):L[ce];p?(C.copy(S.normals[0]).multiplyScalar(de.x),R.copy(S.binormals[0]).multiplyScalar(de.y),_.copy(A[0]).add(C).add(R),Me(_.x,_.y,_.z)):Me(de.x,de.y,0)}for(let ce=1;ce<=h;ce++)for(let de=0;de<J;de++){let ge=d?Y(L[de],ze[de],yt):L[de];p?(C.copy(S.normals[ce]).multiplyScalar(ge.x),R.copy(S.binormals[ce]).multiplyScalar(ge.y),_.copy(A[ce]).add(C).add(R),Me(_.x,_.y,_.z)):Me(ge.x,ge.y,u/h*ce)}for(let ce=b-1;ce>=0;ce--){let de=ce/b,ge=f*Math.cos(de*Math.PI/2),me=g*Math.sin(de*Math.PI/2)+y;for(let Se=0,et=V.length;Se<et;Se++){let Je=Y(V[Se],q[Se],me);Me(Je.x,Je.y,u+ge)}for(let Se=0,et=F.length;Se<et;Se++){let Je=F[Se];Z=te[Se];for(let st=0,Oe=Je.length;st<Oe;st++){let O=Y(Je[st],Z[st],me);p?Me(O.x,O.y+A[h-1].y,A[h-1].x+ge):Me(O.x,O.y,u+ge)}}}Mt(),Q();function Mt(){let ce=s.length/3;if(d){let de=0,ge=J*de;for(let me=0;me<At;me++){let Se=xe[me];je(Se[2]+ge,Se[1]+ge,Se[0]+ge)}de=h+b*2,ge=J*de;for(let me=0;me<At;me++){let Se=xe[me];je(Se[0]+ge,Se[1]+ge,Se[2]+ge)}}else{for(let de=0;de<At;de++){let ge=xe[de];je(ge[2],ge[1],ge[0])}for(let de=0;de<At;de++){let ge=xe[de];je(ge[0]+J*h,ge[1]+J*h,ge[2]+J*h)}}n.addGroup(ce,s.length/3-ce,0)}function Q(){let ce=s.length/3,de=0;ae(V,de),de+=V.length;for(let ge=0,me=F.length;ge<me;ge++){let Se=F[ge];ae(Se,de),de+=Se.length}n.addGroup(ce,s.length/3-ce,1)}function ae(ce,de){let ge=ce.length;for(;--ge>=0;){let me=ge,Se=ge-1;Se<0&&(Se=ce.length-1);for(let et=0,Je=h+b*2;et<Je;et++){let st=J*et,Oe=J*(et+1),O=de+me+st,Lt=de+Se+st,St=de+Se+Oe,I=de+me+Oe;Fe(O,Lt,St,I)}}}function Me(ce,de,ge){l.push(ce),l.push(de),l.push(ge)}function je(ce,de,ge){lt(ce),lt(de),lt(ge);let me=s.length/3,Se=M.generateTopUV(n,s,me-3,me-2,me-1);Nt(Se[0]),Nt(Se[1]),Nt(Se[2])}function Fe(ce,de,ge,me){lt(ce),lt(de),lt(me),lt(de),lt(ge),lt(me);let Se=s.length/3,et=M.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);Nt(et[0]),Nt(et[1]),Nt(et[3]),Nt(et[1]),Nt(et[2]),Nt(et[3])}function lt(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function Nt(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Km(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vc[s.type]().fromJSON(s)),new i(n,e.options)}},jm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],b=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(d,1-g),new pe(y,1-m)]:[new pe(o,1-l),new pe(h,1-u),new pe(f,1-g),new pe(b,1-m)]}};function Km(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],b=[];for(let m=0;m<h;m++){let M=m*d-a;for(let A=0;A<c;A++){let p=A*u-r;g.push(p,-M,0),y.push(0,0,1),b.push(A/o),b.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let A=M+c*m,p=M+c*(m+1),S=M+1+c*(m+1),R=M+1+c*m;f.push(A,p,R),f.push(p,S,R)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],y=[],b=[];for(let m=0;m<=n;m++){let M=[],A=m/n,p=a+A*o,S=e*Math.cos(p),R=Math.sqrt(e*e-S*S),C=0;m===0&&a===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let E=_/t,L=s+E*r;u.x=-R*Math.cos(L),u.y=S,u.z=R*Math.sin(L),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),b.push(E+C,1-A),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let A=h[m][M+1],p=h[m][M],S=h[m+1][M],R=h[m+1][M+1];(m!==0||a>0)&&f.push(A,p,R),(m!==n-1||l<Math.PI)&&f.push(p,S,R)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yn=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,f=new P,g=new P;for(let y=0;y<=n;y++){let b=a+y/n*o;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(e+t*Math.cos(b))*Math.cos(M),f.y=(e+t*Math.cos(b))*Math.sin(M),f.z=t*Math.sin(b),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let b=1;b<=s;b++){let m=(s+1)*y+b-1,M=(s+1)*(y-1)+b-1,A=(s+1)*(y-1)+b,p=(s+1)*y+b;l.push(m,M,p),l.push(M,A,p)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ks=class i extends Ot{constructor(e=new Na(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new pe,h=new P,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function y(){for(let A=0;A<t;A++)b(A);b(r===!1?t:0),M(),m()}function b(A){h=e.getPointAt(A/t,h);let p=a.normals[A],S=a.binormals[A];for(let R=0;R<=s;R++){let C=R/s*Math.PI*2,_=Math.sin(C),E=-Math.cos(C);l.x=E*p.x+_*S.x,l.y=E*p.y+_*S.y,l.z=E*p.z+_*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let A=1;A<=t;A++)for(let p=1;p<=s;p++){let S=(s+1)*(A-1)+(p-1),R=(s+1)*A+(p-1),C=(s+1)*A+p,_=(s+1)*(A-1)+p;g.push(S,R,_),g.push(R,C,_)}}function M(){for(let A=0;A<=t;A++)for(let p=0;p<=s;p++)c.x=A/t,c.y=p/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ba=class extends An{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Jd(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function On(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function Jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ym(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}var Pn={clone:nr,merge:On},Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Or=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pt=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends Pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ka=class extends An{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},za=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mc=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ic(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function $m(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Qm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ec=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,o=2*t-n;break;case Nh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lh:a=e,l=2*n-t;break;case Nh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,b=y*g,m=-d*b+2*d*y-d*g,M=(1+d)*b+(-1.5-2*d)*y+(-.5+d)*g+1,A=(-1-f)*b+(1.5+f)*y+.5*g,p=f*b-f*y;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+M*a[c+S]+A*a[l+S]+p*a[u+S];return r}},Tc=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},wc=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ac=class extends qi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let b=0;b!==o;++b)r[b]=a[c+b]*y+a[l+b]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],b=a[l+g],m=f*d+g*2,M=u[m],A=u[m+1],p=e*d+g*2,S=h[p],R=h[p+1],C=t0(n,t,M,S,s);r[g]=Xf(C,y,A,R,b)}return r}};function Xf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function e0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function t0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Xf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=e0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ic(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case Ih:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return rt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return Ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ic(this.settings)&&($d(this.settings.inTangents,e),$d(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){bt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){bt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){bt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ic(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $d(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Gs;var ds=class extends Jn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Hs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="color";var fs=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};fs.prototype.ValueTypeName="number";var Rc=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ps=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Jn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Hs;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};ws.prototype.ValueTypeName="vector";var Ga=class{constructor(e="",t=-1,n=[],s=Af){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(i0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=$m(l);l=Zd(l,1,h),c=Zd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function n0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Ha;case"quaternion":return ps;case"bool":case"boolean":return ds;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function i0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=n0(i.type);if(i.times===void 0){let n=[],s=[];Qm(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ic(i.settings)&&(t.settings={inTangents:Ms(i.settings.inTangents,Float32Array),outTangents:Ms(i.settings.outTangents,Float32Array)}),t}var Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Qd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Qd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Qd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Cc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jf=new Cc,Xi=class{constructor(e){this.manager=e!==void 0?e:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs={},kh=class extends Error{constructor(e,t){super(e),this.response=t}},Br=class extends Xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(rs[e]!==void 0){rs[e].push({onLoad:t,onProgress:n,onError:s});return}rs[e]=[],rs[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=rs[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,b=new ReadableStream({start(m){M();function M(){u.read().then(({done:A,value:p})=>{if(A)m.close();else{y+=p.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let R=0,C=h.length;R<C;R++){let _=h[R];_.onProgress&&_.onProgress(S)}m.enqueue(p),M()}},A=>{m.error(A)})}}});return new Response(b)}else throw new kh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bi.add(`file:${e}`,c);let h=rs[e];delete rs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=rs[e];if(h===void 0)throw this.manager.itemError(e),c;delete rs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var br=new WeakMap,Pc=class extends Xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=br.get(a);u===void 0&&(u=[],br.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Tr("img");function l(){h(),t&&t(this);let u=br.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}br.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Bi.remove(`image:${e}`);let d=br.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Va=class extends Xi{constructor(e){super(e)}load(e,t,n,s){let r=new mn,a=new Pc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ys=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rh=new dt,ef=new P,tf=new P,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Er||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qo=new P,ec=new Fn,Oi=new P,qa=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,ec,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ec,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qo,ec,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ec,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new P,nf=new pe,sf=new pe,an=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,nf,sf),t.subVectors(sf,nf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zh=class extends kr{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xa=class extends Ys{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hh=class extends kr{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Js=class extends Ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gh=class extends kr{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ch=new WeakMap,ja=class extends Xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Ch.has(a)===!0?(s&&s(Ch.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ch.set(l,c),Bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _r=-90,xr=1,Ic=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(_r,xr,e,t);s.layers=this.layers,this.add(s);let r=new an(_r,xr,e,t);r.layers=this.layers,this.add(r);let a=new an(_r,xr,e,t);a.layers=this.layers,this.add(a);let o=new an(_r,xr,e,t);o.layers=this.layers,this.add(o);let l=new an(_r,xr,e,t);l.layers=this.layers,this.add(l);let c=new an(_r,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Dc=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=s0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function s0(){this._document.hidden===!1&&this.reset()}var uu="\\[\\]\\.:\\/",r0=new RegExp("["+uu+"]","g"),du="[^"+uu+"]",a0="[^"+uu.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",du),c0=/(WCOD+)?/.source.replace("WCOD",a0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),u0=new RegExp("^"+o0+c0+l0+h0+"$"),d0=["material","materials","bones","map"],Vh=class{constructor(e,t,n){let s=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){let t=u0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=Vh;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zv=new Float32Array(1);var rf=new dt,zr=class{constructor(e,t,n=0,s=1/0){this.ray=new Hi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(af),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wh(e[s],this,n,t);return n.sort(af),n}};function af(i,e){return i.distance-e.distance}function Wh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Wh(r[a],e,t,!0)}}var Hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _u=class _u{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_u.prototype.isMatrix2=!0;var qh=_u;var Ya=class extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function fu(i,e,t,n){let s=f0(n);switch(t){case iu:return i*e;case Gc:return i*e/s.components*s.byteLength;case Vc:return i*e/s.components*s.byteLength;case Cs:return i*e*2/s.components*s.byteLength;case Wc:return i*e*2/s.components*s.byteLength;case su:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case qc:return i*e*4/s.components*s.byteLength;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case Yc:return Math.max(i,16)*Math.max(e,8)/4;case Xc:case Kc:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case Zc:case Qc:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $c:case lo:case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gl:case bl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f0(i){switch(i){case Un:case Qh:return{byteLength:1,components:1};case qr:case eu:case Sn:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case Ii:case kc:case ni:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function m0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,k0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
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
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,pg=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,mg=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tb=`float getShadowMask() {
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
}`,nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ib=`#ifdef USE_SKINNING
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
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,ub=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
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
}`,Sb=`#if DEPTH_PACKING == 3200
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
}`,Eb=`#define DISTANCE
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
}`,Tb=`#define DISTANCE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Db=`#define LAMBERT
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
}`,Lb=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Nb=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,Ub=`#define NORMAL
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
}`,Ob=`#define NORMAL
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
}`,Bb=`#define PHONG
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
}`,kb=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,zb=`#define STANDARD
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
}`,Hb=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,Gb=`#define TOON
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
}`,Vb=`#define TOON
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
}`,Wb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,jb=`uniform vec3 color;
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
}`,Kb=`uniform float rotation;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:g0,alphahash_pars_fragment:b0,alphamap_fragment:_0,alphamap_pars_fragment:x0,alphatest_fragment:v0,alphatest_pars_fragment:y0,aomap_fragment:M0,aomap_pars_fragment:S0,batching_pars_vertex:E0,batching_vertex:T0,begin_vertex:w0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:N0,color_fragment:F0,color_pars_fragment:U0,color_pars_vertex:O0,color_vertex:B0,common:k0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:H0,displacementmap_pars_vertex:G0,displacementmap_vertex:V0,emissivemap_fragment:W0,emissivemap_pars_fragment:q0,colorspace_fragment:X0,colorspace_pars_fragment:j0,envmap_fragment:K0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:J0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:cg,envmap_vertex:$0,fog_vertex:Q0,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_pars_fragment:sg,lights_lambert_fragment:rg,lights_lambert_pars_fragment:ag,lights_pars_begin:og,lights_toon_fragment:lg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:fg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:bg,lightprobes_pars_fragment:_g,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:Mg,map_fragment:Sg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Pg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Dg,morphtarget_vertex:Lg,normal_fragment_begin:Ng,normal_fragment_maps:Fg,normal_pars_fragment:Ug,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:qg,premultiplied_alpha_fragment:Xg,project_vertex:jg,dithering_fragment:Kg,dithering_pars_fragment:Yg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Qg,shadowmap_vertex:eb,shadowmask_pars_fragment:tb,skinbase_vertex:nb,skinning_pars_vertex:ib,skinning_vertex:sb,skinnormal_vertex:rb,specularmap_fragment:ab,specularmap_pars_fragment:ob,tonemapping_fragment:cb,tonemapping_pars_fragment:lb,transmission_fragment:hb,transmission_pars_fragment:ub,uv_pars_fragment:db,uv_pars_vertex:fb,uv_vertex:pb,worldpos_vertex:mb,background_vert:gb,background_frag:bb,backgroundCube_vert:_b,backgroundCube_frag:xb,cube_vert:vb,cube_frag:yb,depth_vert:Mb,depth_frag:Sb,distance_vert:Eb,distance_frag:Tb,equirect_vert:wb,equirect_frag:Ab,linedashed_vert:Rb,linedashed_frag:Cb,meshbasic_vert:Pb,meshbasic_frag:Ib,meshlambert_vert:Db,meshlambert_frag:Lb,meshmatcap_vert:Nb,meshmatcap_frag:Fb,meshnormal_vert:Ub,meshnormal_frag:Ob,meshphong_vert:Bb,meshphong_frag:kb,meshphysical_vert:zb,meshphysical_frag:Hb,meshtoon_vert:Gb,meshtoon_frag:Vb,points_vert:Wb,points_frag:qb,shadow_vert:Xb,shadow_frag:jb,sprite_vert:Kb,sprite_frag:Yb},Ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Zi={basic:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:On([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:On([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:On([Ne.points,Ne.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:On([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:On([Ne.common,Ne.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:On([Ne.sprite,Ne.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:On([Ne.common,Ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:On([Ne.lights,Ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Zi.physical={uniforms:On([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};var El={r:0,b:0,g:0},Jb=new dt,gp=new vt;gp.set(-1,0,0,0,1,0,0,0,1);function Zb(i,e,t,n,s,r){let a=new Ye(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let p=M.backgroundBlurriness>0;A=e.get(A,p)}return A}function g(M){let A=!1,p=f(M);p===null?b(a,o):p&&p.isColor&&(b(p,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,A){let p=f(A);p&&(p.isCubeTexture||p.mapping===so)?(c===void 0&&(c=new re(new sn(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:nr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(A.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gp),c.material.toneMapped=Tt.getTransfer(p.colorSpace)!==Ht,(h!==p||u!==p.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=p,u=p.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new re(new wi(2,2),new $t({name:"BackgroundMaterial",uniforms:nr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Tt.getTransfer(p.colorSpace)!==Ht,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||u!==p.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=p,u=p.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function b(M,A){M.getRGB(El,hu(i)),t.buffers.color.setClear(El.r,El.g,El.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,b(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,b(a,o)},render:g,addToRenderList:y,dispose:m}}function $b(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,U,G,B,V){let Y=!1,J=u(F,B,G,U);r!==J&&(r=J,c(r.object)),Y=f(F,B,G,V),Y&&g(F,B,G,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,p(F,U,G,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,U,G,B){let V=B.wireframe===!0,Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);let J=F.isInstancedMesh===!0?F.id:0,he=Y[J];he===void 0&&(he={},Y[J]=he);let q=he[G.id];q===void 0&&(q={},he[G.id]=q);let te=q[V];return te===void 0&&(te=d(l()),q[V]=te),te}function d(F){let U=[],G=[],B=[];for(let V=0;V<t;V++)U[V]=0,G[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:B,object:F,attributes:{},index:null}}function f(F,U,G,B){let V=r.attributes,Y=U.attributes,J=0,he=G.getAttributes();for(let q in he)if(he[q].location>=0){let Z=V[q],ze=Y[q];if(ze===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ze=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ze=F.instanceColor)),Z===void 0||Z.attribute!==ze||ze&&Z.data!==ze.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function g(F,U,G,B){let V={},Y=U.attributes,J=0,he=G.getAttributes();for(let q in he)if(he[q].location>=0){let Z=Y[q];Z===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor));let ze={};ze.attribute=Z,Z&&Z.data&&(ze.data=Z.data),V[q]=ze,J++}r.attributes=V,r.attributesNum=J,r.index=B}function y(){let F=r.newAttributes;for(let U=0,G=F.length;U<G;U++)F[U]=0}function b(F){m(F,0)}function m(F,U){let G=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;G[F]=1,B[F]===0&&(i.enableVertexAttribArray(F),B[F]=1),V[F]!==U&&(i.vertexAttribDivisor(F,U),V[F]=U)}function M(){let F=r.newAttributes,U=r.enabledAttributes;for(let G=0,B=U.length;G<B;G++)U[G]!==F[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(F,U,G,B,V,Y,J){J===!0?i.vertexAttribIPointer(F,U,G,V,Y):i.vertexAttribPointer(F,U,G,B,V,Y)}function p(F,U,G,B){y();let V=B.attributes,Y=G.getAttributes(),J=U.defaultAttributeValues;for(let he in Y){let q=Y[he];if(q.location>=0){let te=V[he];if(te===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){let Z=te.normalized,ze=te.itemSize,xe=e.get(te);if(xe===void 0)continue;let At=xe.buffer,yt=xe.type,Mt=xe.bytesPerElement,Q=yt===i.INT||yt===i.UNSIGNED_INT||te.gpuType===kc;if(te.isInterleavedBufferAttribute){let ae=te.data,Me=ae.stride,je=te.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe,ae.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)b(q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Fe=0;Fe<q.locationSize;Fe++)A(q.location+Fe,ze/q.locationSize,yt,Z,Me*Mt,(je+ze/q.locationSize*Fe)*Mt,Q)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae,te.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<q.locationSize;ae++)b(q.location+ae);i.bindBuffer(i.ARRAY_BUFFER,At);for(let ae=0;ae<q.locationSize;ae++)A(q.location+ae,ze/q.locationSize,yt,Z,ze*Mt,ze/q.locationSize*ae*Mt,Q)}}else if(J!==void 0){let Z=J[he];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(q.location,Z);break;case 3:i.vertexAttrib3fv(q.location,Z);break;case 4:i.vertexAttrib4fv(q.location,Z);break;default:i.vertexAttrib1fv(q.location,Z)}}}}M()}function S(){E();for(let F in n){let U=n[F];for(let G in U){let B=U[G];for(let V in B){let Y=B[V];for(let J in Y)h(Y[J].object),delete Y[J];delete B[V]}}delete n[F]}}function R(F){if(n[F.id]===void 0)return;let U=n[F.id];for(let G in U){let B=U[G];for(let V in B){let Y=B[V];for(let J in Y)h(Y[J].object),delete Y[J];delete B[V]}}delete n[F.id]}function C(F){for(let U in n){let G=n[U];for(let B in G){let V=G[B];if(V[F.id]===void 0)continue;let Y=V[F.id];for(let J in Y)h(Y[J].object),delete Y[J];delete V[F.id]}}}function _(F){for(let U in n){let G=n[U],B=F.isInstancedMesh===!0?F.id:0,V=G[B];if(V!==void 0){for(let Y in V){let J=V[Y];for(let he in J)h(J[he].object),delete J[he];delete V[Y]}delete G[B],Object.keys(G).length===0&&delete n[U]}}}function E(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:b,disableUnusedAttributes:M}}function Qb(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function e_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&C!==ni&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:p,maxSamples:S,samples:R}}function t_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Hn,o=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,b=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!b)r?h(null):c();else{let M=r?0:n,A=M*4,p=m.clippingState||null;l.value=p,p=h(g,d,A,f);for(let S=0;S!==A;++S)p[S]=t[S];m.clippingState=p,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,b=null;if(y!==0){if(b=l.value,g!==!0||b===null){let m=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(b===null||b.length<m)&&(b=new Float32Array(m));for(let A=0,p=f;A!==y;++A,p+=4)a.copy(u[A]).applyMatrix4(M,o),a.normal.toArray(b,p),b[p+3]=a.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}var Yr=4,n_=6,i_=20,s_=256,fo=new ji,Kf=new Ye,xu=null,vu=0,yu=0,Mu=!1,r_=new P,ir=new P,Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=r_}=r;xu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,vu,yu),this._renderer.xr.enabled=Mu,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Sn,format:Wn,colorSpace:Gn,depthBuffer:!1},s=Yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a_(r)),this._blurMaterial=c_(r,e,t),this._ggxMaterial=o_(r,e,t)}return s}_compileMaterial(e){let t=new re(new Ot,e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Kf),u.toneMapping=Ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new sn,new Rn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,b=y.material,m=!1,M=e.background;M?M.isColor&&(b.color.copy(M),e.background=null,m=!0):(b.color.copy(Kf),m=!0);for(let A=0;A<6;A++){let p=A%3;p===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):p===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let S=this._cubeSize;Kr(s,p*S,A>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],b=3*y*(n>g-Yr?n-g+Yr:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Kr(r,b,m,3*y,2*y),s.setRenderTarget(r),s.render(o,fo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Kr(e,b,m,3*y,2*y),s.setRenderTarget(e),s.render(o,fo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Yr?s-this._lodMax+Yr:0),d=4*(this._cubeSize-h);Kr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,fo)}};function a_(i){let e=[],t=[],n=i,s=i-Yr+1+n_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,A=m>2?0:-1,p=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(p,f*d*m);for(let S=0;S<d;S++){let R=h[S*2]*2-1,C=h[S*2+1]*2-1;m===0?ir.set(1,C,R):m===1?ir.set(-R,1,-C):m===2?ir.set(-R,C,1):m===3?ir.set(-1,C,-R):m===4?ir.set(-R,-1,C):ir.set(R,C,-1),ir.toArray(y,(m*d+S)*f)}}let b=new Ot;b.setAttribute("position",new pn(g,f)),b.setAttribute("outputDirection",new pn(y,f)),t.push(new re(b,null)),n>Yr&&n--}return{lodMeshes:t,sizeLods:e}}function Yf(i,e,t){let n=new cn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function o_(i,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function c_(i,e,t){return new $t({name:"SphericalGaussianBlur",defines:{SAMPLES:i_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Jf(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Zf(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wl=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hn});r.uniforms.tEquirect.value=t;let a=new re(s,r),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=on),new Ic(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function l_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Uc||f===Oc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new wl(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Uc||f===Oc,y=f===As||f===er;if(g||y){let b=t.get(d),m=b!==void 0?b.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Zr(i)),b=g?n.fromEquirectangular(d,b):n.fromCubemap(d,b),b.texture.pmremVersion=d.pmremVersion,t.set(d,b),b.texture;if(b!==void 0)return b.texture;{let M=d.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Zr(i)),b=g?n.fromEquirectangular(d):n.fromCubemap(d),b.texture.pmremVersion=d.pmremVersion,t.set(d,b),d.addEventListener("dispose",h),b.texture):null}}}return d}function o(d,f){return f===Uc?d.mapping=As:f===Oc&&(d.mapping=er),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function h_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function u_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let A=0,p=M.length;A<p;A+=3){let S=M[A+0],R=M[A+1],C=M[A+2];d.push(S,R,R,C,C,S)}}else{let M=g.array;y=g.version;for(let A=0,p=M.length/3-1;A<p;A+=3){let S=A+0,R=A+1,C=A+2;d.push(S,R,R,C,C,S)}}let b=new(g.count>=65535?Ma:ya)(d,1);b.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,b)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function d_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let b=0;b<f;b++)y+=d[b];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function f_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function p_(i,e,t){let n=new WeakMap,s=new Gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let p=o.attributes.position.count*A,S=1;p>e.maxTextureSize&&(S=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);let R=new Float32Array(p*S*4*u),C=new xa(R,p,S,u);C.type=ni,C.needsUpdate=!0;let _=A*4;for(let L=0;L<u;L++){let F=b[L],U=m[L],G=M[L],B=p*S*4*L;for(let V=0;V<F.count;V++){let Y=V*_;f===!0&&(s.fromBufferAttribute(F,V),R[B+Y+0]=s.x,R[B+Y+1]=s.y,R[B+Y+2]=s.z,R[B+Y+3]=0),g===!0&&(s.fromBufferAttribute(U,V),R[B+Y+4]=s.x,R[B+Y+5]=s.y,R[B+Y+6]=s.z,R[B+Y+7]=0),y===!0&&(s.fromBufferAttribute(G,V),R[B+Y+8]=s.x,R[B+Y+9]=s.y,R[B+Y+10]=s.z,R[B+Y+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new pe(p,S)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function m_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var g_={[$a]:"LINEAR_TONE_MAPPING",[Qa]:"REINHARD_TONE_MAPPING",[eo]:"CINEON_TONE_MAPPING",[Qs]:"ACES_FILMIC_TONE_MAPPING",[no]:"AGX_TONE_MAPPING",[io]:"NEUTRAL_TONE_MAPPING",[to]:"CUSTOM_TONE_MAPPING"};function b_(i,e,t,n,s,r){let a=new cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ot;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));let h=new Or({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new re(c,h),d=new ji(-1,1,1,-1,0,1),f=null,g=null,y=!1,b,m=null,M=[],A=!1;this.setSize=function(p,S){a.setSize(p,S),o!==null&&o.setSize(p,S),l!==null&&l.setSize(p,S);for(let R=0;R<M.length;R++){let C=M[R];C.setSize&&C.setSize(p,S)}},this.setEffects=function(p){M=p,A=M.length>0&&M[0].isRenderPass===!0;let S=a.width,R=a.height;M.length>0&&o===null&&(o=new cn(S,R,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(S,R,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let _=M[C];_.setSize&&_.setSize(S,R)}},this.begin=function(p,S){if(y||p.toneMapping===Ci&&M.length===0)return!1;if(m=S,S!==null){let R=S.width,C=S.height;(a.width!==R||a.height!==C)&&this.setSize(R,C)}return A===!1&&p.setRenderTarget(a),b=p.toneMapping,p.toneMapping=Ci,!0},this.hasRenderPass=function(){return A},this.end=function(p,S){p.toneMapping=b,y=!0;let R=a,C=o;for(let _=0;_<M.length;_++){let E=M[_];E.enabled!==!1&&(E.render(p,C,R,S),E.needsSwap!==!1&&(R=C,C=C===o?l:o))}if(f!==p.outputColorSpace||g!==p.toneMapping){f=p.outputColorSpace,g=p.toneMapping,h.defines={},Tt.getTransfer(f)===Ht&&(h.defines.SRGB_TRANSFER="");let _=g_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,p.setRenderTarget(m),p.render(u,d),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bp=new mn,Tu=new Vi(1,1),_p=new xa,xp=new fc,vp=new Aa,$f=[],Qf=[],ep=new Float32Array(16),tp=new Float32Array(9),np=new Float32Array(4);function $r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cl(i,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function __(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function M_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,n))return;np.set(n),i.uniformMatrix2fv(this.addr,!1,np),_n(t,n)}}function S_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,n))return;tp.set(n),i.uniformMatrix3fv(this.addr,!1,tp),_n(t,n)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,n))return;ep.set(n),i.uniformMatrix4fv(this.addr,!1,ep),_n(t,n)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function C_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=t.isReversedDepthBuffer()?Sl:Ml,r=Tu):r=bp,t.setTexture2D(e||r,s)}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xp,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vp,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_p,s)}function O_(i){switch(i){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return U_}}function B_(i,e){i.uniform1fv(this.addr,e)}function k_(i,e){let t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function z_(i,e){let t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function H_(i,e){let t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function G_(i,e){let t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){let t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function W_(i,e){let t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q_(i,e){i.uniform1iv(this.addr,e)}function X_(i,e){i.uniform2iv(this.addr,e)}function j_(i,e){i.uniform3iv(this.addr,e)}function K_(i,e){i.uniform4iv(this.addr,e)}function Y_(i,e){i.uniform1uiv(this.addr,e)}function J_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function $_(i,e){i.uniform4uiv(this.addr,e)}function Q_(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tu:a=bp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ex(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xp,r[a])}function tx(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vp,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_p,r[a])}function ix(i){switch(i){case 5126:return B_;case 35664:return k_;case 35665:return z_;case 35666:return H_;case 35674:return G_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return q_;case 35667:case 35671:return X_;case 35668:case 35672:return j_;case 35669:case 35673:return K_;case 5125:return Y_;case 36294:return J_;case 36295:return Z_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}var wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O_(t.type)}},Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ix(t.type)}},Ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Su=/(\w+)(\])?(\[|\.)?/g;function ip(i,e){i.seq.push(e),i.map[e.id]=e}function sx(i,e,t){let n=i.name,s=n.length;for(Su.lastIndex=0;;){let r=Su.exec(n),a=Su.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ip(t,c===void 0?new wu(o,i,e):new Au(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ru(o),ip(t,u)),t=u}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function sp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var rx=37297,ax=0;function ox(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var rp=new vt;function cx(i){Tt._getMatrix(rp,Tt.workingColorSpace,i);let e=`mat3( ${rp.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case ba:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ap(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ox(i.getShaderSource(e),o)}else return r}function lx(i,e){let t=cx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var hx={[$a]:"Linear",[Qa]:"Reinhard",[eo]:"Cineon",[Qs]:"ACESFilmic",[no]:"AgX",[io]:"Neutral",[to]:"Custom"};function ux(i,e){let t=hx[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tl=new P;function dx(){Tt.getLuminanceCoefficients(Tl);let i=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function px(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mo(i){return i!==""}function op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(i){return i.replace(gx,_x)}var bx=new Map;function _x(i,e){let t=It[e];if(t===void 0){let n=bx.get(e);if(n!==void 0)t=It[n],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cu(t)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(i){return i.replace(xx,vx)}function vx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var yx={[Zs]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function Mx(i){return yx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sx={[As]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function Ex(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tx={[er]:"ENVMAP_MODE_REFRACTION"};function wx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ax={[Fc]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function Rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ax[i.combine]||"ENVMAP_BLENDING_NONE"}function Cx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Px(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Mx(t),c=Ex(t),h=wx(t),u=Rx(t),d=Cx(t),f=fx(t),g=px(r),y=s.createProgram(),b,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(b=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?It.tonemapping_pars_fragment:"",t.toneMapping!==Ci?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,lx("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),a=Cu(a),a=op(a,t),a=cp(a,t),o=Cu(o),o=op(o,t),o=cp(o,t),a=lp(a),o=lp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+b+a,p=M+m+o,S=sp(s,s.VERTEX_SHADER,A),R=sp(s,s.FRAGMENT_SHADER,p);s.attachShader(y,S),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(F){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(S)||"",B=s.getShaderInfoLog(R)||"",V=U.trim(),Y=G.trim(),J=B.trim(),he=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,R);else{let te=ap(s,S,"vertex"),Z=ap(s,R,"fragment");bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+te+`
`+Z)}else V!==""?rt("WebGLProgram: Program Info Log:",V):(Y===""||J==="")&&(q=!1);q&&(F.diagnostics={runnable:he,programLog:V,vertexShader:{log:Y,prefix:b},fragmentShader:{log:J,prefix:m}})}s.deleteShader(S),s.deleteShader(R),_=new Jr(s,y),E=mx(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,rx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=R,this}var Ix=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Iu(e),t.set(e,n)),n}},Iu=class{constructor(e){this.id=Ix++,this.code=e,this.usedTimes=0}};function Dx(i){return i===Cs||i===lo||i===ho}function Lx(i,e,t,n,s,r){let a=new Rr,o=new Pu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,L,F,U,G){let B=F.fog,V=U.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,he=e.get(_.envMap||Y,J),q=he&&he.mapping===so?he.image.height:null,te=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&rt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ze=Z!==void 0?Z.length:0,xe=0;V.morphAttributes.position!==void 0&&(xe=1),V.morphAttributes.normal!==void 0&&(xe=2),V.morphAttributes.color!==void 0&&(xe=3);let At,yt,Mt,Q;if(te){let Vt=Zi[te];At=Vt.vertexShader,yt=Vt.fragmentShader}else{At=_.vertexShader,yt=_.fragmentShader;let Vt=o.getVertexShaderStage(_),Bt=o.getFragmentShaderStage(_);o.update(_,Vt,Bt),Mt=Vt.id,Q=Bt.id}let ae=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),je=U.isInstancedMesh===!0,Fe=U.isBatchedMesh===!0,lt=!!_.map,Nt=!!_.matcap,ce=!!he,de=!!_.aoMap,ge=!!_.lightMap,me=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,et=!!_.displacementMap,Je=!!_.emissiveMap,st=!!_.metalnessMap,Oe=!!_.roughnessMap,O=_.anisotropy>0,Lt=_.clearcoat>0,St=_.dispersion>0,I=_.retroreflectivity>0,v=_.iridescence>0,W=_.sheen>0,X=_.transmission>0,ee=O&&!!_.anisotropyMap,_e=Lt&&!!_.clearcoatMap,be=Lt&&!!_.clearcoatNormalMap,ne=Lt&&!!_.clearcoatRoughnessMap,le=v&&!!_.iridescenceMap,Ae=v&&!!_.iridescenceThicknessMap,it=W&&!!_.sheenColorMap,ve=W&&!!_.sheenRoughnessMap,Ee=!!_.specularMap,Xe=!!_.specularColorMap,tt=!!_.specularIntensityMap,gt=X&&!!_.transmissionMap,H=X&&!!_.thicknessMap,Te=!!_.gradientMap,oe=!!_.alphaMap,Re=_.alphaTest>0,Pe=!!_.alphaHash,fe=!!_.extensions,at=Ci;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(at=i.toneMapping);let Ze={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:At,fragmentShader:yt,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&U._colorsTexture!==null,instancing:je,instancingColor:je&&U.instanceColor!==null,instancingMorph:je&&U.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:Nt,envMap:ce,envMapMode:ce&&he.mapping,envMapCubeUVHeight:q,aoMap:de,lightMap:ge,bumpMap:me,normalMap:Se,displacementMap:et,emissiveMap:Je,normalMapObjectSpace:Se&&_.normalMapType===Cf,normalMapTangentSpace:Se&&_.normalMapType===jr,packedNormalMap:Se&&_.normalMapType===jr&&Dx(_.normalMap.format),metalnessMap:st,roughnessMap:Oe,anisotropy:O,anisotropyMap:ee,clearcoat:Lt,clearcoatMap:_e,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:St,retroreflection:I,iridescence:v,iridescenceMap:le,iridescenceThicknessMap:Ae,sheen:W,sheenColorMap:it,sheenRoughnessMap:ve,specularMap:Ee,specularColorMap:Xe,specularIntensityMap:tt,transmission:X,transmissionMap:gt,thicknessMap:H,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Vr&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Re,alphaHash:Pe,combine:_.combine,mapUv:lt&&g(_.map.channel),aoMapUv:de&&g(_.aoMap.channel),lightMapUv:ge&&g(_.lightMap.channel),bumpMapUv:me&&g(_.bumpMap.channel),normalMapUv:Se&&g(_.normalMap.channel),displacementMapUv:et&&g(_.displacementMap.channel),emissiveMapUv:Je&&g(_.emissiveMap.channel),metalnessMapUv:st&&g(_.metalnessMap.channel),roughnessMapUv:Oe&&g(_.roughnessMap.channel),anisotropyMapUv:ee&&g(_.anisotropyMap.channel),clearcoatMapUv:_e&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:it&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(_.sheenRoughnessMap.channel),specularMapUv:Ee&&g(_.specularMap.channel),specularColorMapUv:Xe&&g(_.specularColorMap.channel),specularIntensityMapUv:tt&&g(_.specularIntensityMap.channel),transmissionMapUv:gt&&g(_.transmissionMap.channel),thicknessMapUv:H&&g(_.thicknessMap.channel),alphaMapUv:oe&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Se||O),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(lt||oe),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:xe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&Tt.getTransfer(_.map.colorSpace)===Ht,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(_.emissiveMap.colorSpace)===Ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function b(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)E.push(L),E.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(E,_),M(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let E=f[_.type],L;if(E){let F=Zi[E];L=Pn.clone(F.uniforms)}else L=_.uniforms;return L}function p(_,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new Px(i,E,_,s),c.push(L),h.set(E,L)),L}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:A,acquireProgram:p,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:C}}function Nx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,b,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:b,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=b,M.group=m),e++,M}function l(d,f,g,y,b,m,M){M.reversedDepth===!0&&(b=-b);let A=o(d,f,g,y,b,m);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(d,f,g,y,b,m){let M=o(d,f,g,y,b,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Fx),n.length>1&&n.sort(f||up),s.length>1&&s.sort(f||up)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Ux(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new dp,i.set(n,[a])):s>=r.length?(a=new dp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kx=0;function zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hx(i){let e=new Ox,t=Bx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new dt,a=new dt;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,y=0,b=0,m=0,M=0,A=0,p=0,S=0,R=0,C=0,_=0,E=0,L=0;c.sort(zx);for(let U=0,G=c.length;U<G;U++){let B=c[U],V=B.color,Y=B.intensity,J=B.distance,he=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Cs?he=B.shadow.map.texture:he=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=V.r*Y,u+=V.g*Y,d+=V.b*Y;else if(B.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(B.sh.coefficients[q],Y);L++}else if(B.isSunLight){let q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let te=B.shadow,Z=t.get(B);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=he;let ze=te.getViewportCount();for(let xe=0;xe<ze;xe++)n.sunShadowMatrix[y+xe]=te.getMatrix(xe),n.sunShadowCascade[y+xe]=te._cascadeData[xe];y+=ze,g++}n.sun[f]=q,f++}else if(B.isDirectionalLight){let q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let te=B.shadow,Z=t.get(B);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,n.directionalShadow[b]=Z,n.directionalShadowMap[b]=he,n.directionalShadowMatrix[b]=B.shadow.matrix,S++}n.directional[b]=q,b++}else if(B.isSpotLight){let q=e.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(V).multiplyScalar(Y),q.distance=J,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,n.spot[M]=q;let te=B.shadow;if(B.map&&(n.spotLightMap[_]=B.map,_++,te.updateMatrices(B),B.castShadow&&E++),n.spotLightMatrix[M]=te.matrix,B.castShadow){let Z=t.get(B);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=he,C++}M++}else if(B.isRectAreaLight){let q=e.get(B);q.color.copy(V).multiplyScalar(Y),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),n.rectArea[A]=q,A++}else if(B.isPointLight){let q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){let te=B.shadow,Z=t.get(B);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,Z.shadowCameraNear=te.camera.near,Z.shadowCameraFar=te.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=he,n.pointShadowMatrix[m]=B.shadow.matrix,R++}n.point[m]=q,m++}else if(B.isHemisphereLight){let q=e.get(B);q.skyColor.copy(B.color).multiplyScalar(Y),q.groundColor.copy(B.groundColor).multiplyScalar(Y),n.hemi[p]=q,p++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==b||F.pointLength!==m||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==p||F.numSunShadows!==g||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==C||F.numSpotMaps!==_||F.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=b,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=p,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,F.sunLength=f,F.directionalLength=b,F.pointLength=m,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=p,F.numSunShadows=g,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=C,F.numSpotMaps=_,F.numLightProbes=L,n.version=kx++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,b=0,m=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let p=c[M];if(p.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(p.matrixWorld),S.direction.transformDirection(m),u++}else if(p.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(p.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(p.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(p.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(p.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(p.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(p.width*.5,0,0),S.halfHeight.set(0,p.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(p.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(p.matrixWorld),S.position.applyMatrix4(m),f++}else if(p.isHemisphereLight){let S=n.hemi[b];S.direction.setFromMatrixPosition(p.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function fp(i){let e=new Hx(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new fp(i),e.set(s,[o])):r>=a.length?(o=new fp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`,qx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Xx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],pp=new dt,po=new P,Eu=new P;function jx(i,e,t){let n=new Lr,s=new pe,r=new pe,a=new Gt,o=new Mc,l=new Sc,c={},h=t.maxTextureSize,u={[di]:gn,[gn]:di,[ln]:ln},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Vx,fragmentShader:Wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new re(g,d),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let m=this.type;this.render=function(R,C,_){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||R.length===0)return;this.type===lf&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let E=i.getRenderTarget(),L=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),U=i.state;U.setBlending(hn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=m!==this.type;G&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=R.length;B<V;B++){let Y=R[B],J=Y.shadow;if(J===void 0){rt("WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let he=J.getFrameExtents();s.multiply(he),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,J.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=q,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Gr){if(Y.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new cn(s.x,s.y,{format:Cs,type:Sn,minFilter:on,magFilter:on,generateMipmaps:!1}),J.map.texture.name=Y.name+".shadowMap",J.map.depthTexture=new Vi(s.x,s.y,ni),J.map.depthTexture.name=Y.name+".shadowMapDepth",J.map.depthTexture.format=ki,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=nn,J.map.depthTexture.magFilter=nn}else Y.isPointLight?(J.map=new wl(s.x),J.map.depthTexture=new gc(s.x,Ii)):(J.map=new cn(s.x,s.y),J.map.depthTexture=new Vi(s.x,s.y,Ii)),J.map.depthTexture.name=Y.name+".shadowMap",J.map.depthTexture.format=ki,this.type===Zs?(J.map.depthTexture.compareFunction=q?Sl:Ml,J.map.depthTexture.minFilter=on,J.map.depthTexture.magFilter=on):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=nn,J.map.depthTexture.magFilter=nn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let te=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Y.isPointLight!==!0&&J.updateMatrices(Y,_);for(let Z=0;Z<te;Z++){let ze=J.getCamera(Z);if(Y.isPointLight){let xe=J.camera,At=J.matrix,yt=Y.distance||xe.far;yt!==xe.far&&(xe.far=yt,xe.updateProjectionMatrix()),po.setFromMatrixPosition(Y.matrixWorld),xe.position.copy(po),Eu.copy(xe.position),Eu.add(qx[Z]),xe.up.copy(Xx[Z]),xe.lookAt(Eu),xe.updateMatrixWorld(),At.makeTranslation(-po.x,-po.y,-po.z),pp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(pp,xe.coordinateSystem,xe.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(J.map),i.clear());let xe=J.getViewport(Z);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),U.viewport(a)}n=J.getFrustum(Z),p(C,_,ze,Y,this.type)}J.isPointLightShadow!==!0&&this.type===Gr&&M(J,_),J.needsUpdate=!1}m=this.type,b.needsUpdate=!1,i.setRenderTarget(E,L,F)};function M(R,C){let _=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new cn(s.x,s.y,{format:Cs,type:Sn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,_,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,_,f,y,null)}function A(R,C,_,E){let L=null,F=_.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)L=F;else if(L=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=L.uuid,G=C.uuid,B=c[U];B===void 0&&(B={},c[U]=B);let V=B[G];V===void 0&&(V=L.clone(),B[G]=V,C.addEventListener("dispose",S)),L=V}if(L.visible=C.visible,L.wireframe=C.wireframe,E===Gr?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:u[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=i.properties.get(L);U.light=_}return L}function p(R,C,_,E,L){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&L===Gr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,R.matrixWorld);let G=e.update(R),B=R.material;if(Array.isArray(B)){let V=G.groups;for(let Y=0,J=V.length;Y<J;Y++){let he=V[Y],q=B[he.materialIndex];if(q&&q.visible){let te=A(R,q,E,L);R.onBeforeShadow(i,R,C,_,G,te,he),i.renderBufferDirect(_,null,G,te,R,he),R.onAfterShadow(i,R,C,_,G,te,he)}}}else if(B.visible){let V=A(R,B,E,L);R.onBeforeShadow(i,R,C,_,G,V,null),i.renderBufferDirect(_,null,G,V,R,null),R.onAfterShadow(i,R,C,_,G,V,null)}}let U=R.children;for(let G=0,B=U.length;G<B;G++)p(U[G],C,_,E,L)}function S(R){R.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],L=R.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function Kx(i,e){function t(){let H=!1,Te=new Gt,oe=null,Re=new Gt(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!H&&(i.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,fe,at,Ze,Vt){Vt===!0&&(Pe*=Ze,fe*=Ze,at*=Ze),Te.set(Pe,fe,at,Ze),Re.equals(Te)===!1&&(i.clearColor(Pe,fe,at,Ze),Re.copy(Te))},reset:function(){H=!1,oe=null,Re.set(-1,0,0,0)}}}function n(){let H=!1,Te=!1,oe=null,Re=null,Pe=null;return{setReversed:function(fe){if(Te!==fe){let at=e.get("EXT_clip_control");fe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Te=fe;let Ze=Pe;Pe=null,this.setClear(Ze)}},getReversed:function(){return Te},setTest:function(fe){fe?ae(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(fe){oe!==fe&&!H&&(i.depthMask(fe),oe=fe)},setFunc:function(fe){if(Te&&(fe=zf[fe]),Re!==fe){switch(fe){case sc:i.depthFunc(i.NEVER);break;case rc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case oc:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=fe}},setLocked:function(fe){H=fe},setClear:function(fe){Pe!==fe&&(Pe=fe,Te&&(fe=1-fe),i.clearDepth(fe))},reset:function(){H=!1,oe=null,Re=null,Pe=null,Te=!1}}}function s(){let H=!1,Te=null,oe=null,Re=null,Pe=null,fe=null,at=null,Ze=null,Vt=null;return{setTest:function(Bt){H||(Bt?ae(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Bt){Te!==Bt&&!H&&(i.stencilMask(Bt),Te=Bt)},setFunc:function(Bt,Dn,ri){(oe!==Bt||Re!==Dn||Pe!==ri)&&(i.stencilFunc(Bt,Dn,ri),oe=Bt,Re=Dn,Pe=ri)},setOp:function(Bt,Dn,ri){(fe!==Bt||at!==Dn||Ze!==ri)&&(i.stencilOp(Bt,Dn,ri),fe=Bt,at=Dn,Ze=ri)},setLocked:function(Bt){H=Bt},setClear:function(Bt){Vt!==Bt&&(i.clearStencil(Bt),Vt=Bt)},reset:function(){H=!1,Te=null,oe=null,Re=null,Pe=null,fe=null,at=null,Ze=null,Vt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,b=!1,m=null,M=null,A=null,p=null,S=null,R=null,C=null,_=new Ye(0,0,0),E=0,L=!1,F=null,U=null,G=null,B=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,he=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=he>=1):q.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=he>=2);let te=null,Z={},ze=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),At=new Gt().fromArray(ze),yt=new Gt().fromArray(xe);function Mt(H,Te,oe,Re){let Pe=new Uint8Array(4),fe=i.createTexture();i.bindTexture(H,fe),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<oe;at++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Te+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return fe}let Q={};Q[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Mr),me(!1),Se(Xh),ae(i.CULL_FACE),de(hn);function ae(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Me(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function je(H,Te){return d[H]!==Te?(i.bindFramebuffer(H,Te),d[H]=Te,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Te),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Fe(H,Te){let oe=g,Re=!1;if(H){oe=f.get(Te),oe===void 0&&(oe=[],f.set(Te,oe));let Pe=H.textures;if(oe.length!==Pe.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,at=Pe.length;fe<at;fe++)oe[fe]=i.COLOR_ATTACHMENT0+fe;oe.length=Pe.length,Re=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Re=!0);Re&&i.drawBuffers(oe)}function lt(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Nt={[fi]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};Nt[df]=i.MIN,Nt[ff]=i.MAX;let ce={[$s]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[Jh]:i.SRC_ALPHA,[xf]:i.SRC_ALPHA_SATURATE,[Za]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[Zh]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[bf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[yf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function de(H,Te,oe,Re,Pe,fe,at,Ze,Vt,Bt){if(H===hn){b===!0&&(Me(i.BLEND),b=!1);return}if(b===!1&&(ae(i.BLEND),b=!0),H!==Nc){if(H!==m||Bt!==L){if((M!==fi||S!==fi)&&(i.blendEquation(i.FUNC_ADD),M=fi,S=fi),Bt)switch(H){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:bt("WebGLState: Invalid blending: ",H);break}else switch(H){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",H);break}A=null,p=null,R=null,C=null,_.set(0,0,0),E=0,m=H,L=Bt}return}Pe=Pe||Te,fe=fe||oe,at=at||Re,(Te!==M||Pe!==S)&&(i.blendEquationSeparate(Nt[Te],Nt[Pe]),M=Te,S=Pe),(oe!==A||Re!==p||fe!==R||at!==C)&&(i.blendFuncSeparate(ce[oe],ce[Re],ce[fe],ce[at]),A=oe,p=Re,R=fe,C=at),(Ze.equals(_)===!1||Vt!==E)&&(i.blendColor(Ze.r,Ze.g,Ze.b,Vt),_.copy(Ze),E=Vt),m=H,L=!1}function ge(H,Te){H.side===ln?Me(i.CULL_FACE):ae(i.CULL_FACE);let oe=H.side===gn;Te&&(oe=!oe),me(oe),H.blending===Vr&&H.transparent===!1?de(hn):de(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Re=H.stencilWrite;o.setTest(Re),Re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(H){F!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),F=H)}function Se(H){H!==of?(ae(i.CULL_FACE),H!==U&&(H===Xh?i.cullFace(i.BACK):H===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),U=H}function et(H){H!==G&&(J&&i.lineWidth(H),G=H)}function Je(H,Te,oe){H?(ae(i.POLYGON_OFFSET_FILL),(B!==Te||V!==oe)&&(B=Te,V=oe,a.getReversed()&&(Te=-Te),i.polygonOffset(Te,oe))):Me(i.POLYGON_OFFSET_FILL)}function st(H){H?ae(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Oe(H){H===void 0&&(H=i.TEXTURE0+Y-1),te!==H&&(i.activeTexture(H),te=H)}function O(H,Te,oe){oe===void 0&&(te===null?oe=i.TEXTURE0+Y-1:oe=te);let Re=Z[oe];Re===void 0&&(Re={type:void 0,texture:void 0},Z[oe]=Re),(Re.type!==H||Re.texture!==Te)&&(te!==oe&&(i.activeTexture(oe),te=oe),i.bindTexture(H,Te||Q[H]),Re.type=H,Re.texture=Te)}function Lt(){let H=Z[te];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function v(){try{i.texSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function W(){try{i.texSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function _e(){try{i.texStorage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function be(){try{i.texStorage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function ne(){try{i.texImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function le(){try{i.texImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function Ae(H){return u[H]!==void 0?u[H]:i.getParameter(H)}function it(H,Te){u[H]!==Te&&(i.pixelStorei(H,Te),u[H]=Te)}function ve(H){At.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),At.copy(H))}function Ee(H){yt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),yt.copy(H))}function Xe(H,Te){let oe=c.get(Te);oe===void 0&&(oe=new WeakMap,c.set(Te,oe));let Re=oe.get(H);Re===void 0&&(Re=i.getUniformBlockIndex(Te,H.name),oe.set(H,Re))}function tt(H,Te){let Re=c.get(Te).get(H);l.get(Te)!==Re&&(i.uniformBlockBinding(Te,Re,H.__bindingPointIndex),l.set(Te,Re))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,Z={},d={},f=new WeakMap,g=[],y=null,b=!1,m=null,M=null,A=null,p=null,S=null,R=null,C=null,_=new Ye(0,0,0),E=0,L=!1,F=null,U=null,G=null,B=null,V=null,At.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Me,bindFramebuffer:je,drawBuffers:Fe,useProgram:lt,setBlending:de,setMaterial:ge,setFlipSided:me,setCullFace:Se,setLineWidth:et,setPolygonOffset:Je,setScissorTest:st,activeTexture:Oe,bindTexture:O,unbindTexture:Lt,compressedTexImage2D:St,compressedTexImage3D:I,texImage2D:ne,texImage3D:le,pixelStorei:it,getParameter:Ae,updateUBOMapping:Xe,uniformBlockBinding:tt,texStorage2D:_e,texStorage3D:be,texSubImage2D:v,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:ee,scissor:ve,viewport:Ee,reset:gt}}function Yx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,v){return g?new OffscreenCanvas(I,v):Tr("canvas")}function b(I,v,W){let X=1,ee=St(I);if((ee.width>W||ee.height>W)&&(X=W/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let _e=Math.floor(X*ee.width),be=Math.floor(X*ee.height);d===void 0&&(d=y(_e,be));let ne=v?y(_e,be):d;return ne.width=_e,ne.height=be,ne.getContext("2d").drawImage(I,0,0,_e,be),rt("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+_e+"x"+be+")."),ne}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(I,v,W,X,ee,_e=!1){if(I!==null){if(i[I]!==void 0)return i[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let be;X&&(be=e.get("EXT_texture_norm16"),be||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=v;if(v===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8),W===i.UNSIGNED_SHORT&&be&&(ne=be.R16_EXT),W===i.SHORT&&be&&(ne=be.R16_SNORM_EXT)),v===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),v===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8),W===i.UNSIGNED_SHORT&&be&&(ne=be.RG16_EXT),W===i.SHORT&&be&&(ne=be.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),v===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),v===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),v===i.RGB&&(W===i.UNSIGNED_SHORT&&be&&(ne=be.RGB16_EXT),W===i.SHORT&&be&&(ne=be.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),v===i.RGBA){let le=_e?ba:Tt.getTransfer(ee);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=le===Ht?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&be&&(ne=be.RGBA16_EXT),W===i.SHORT&&be&&(ne=be.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(I,v){let W;return I?v===null||v===Ii||v===Rs?W=i.DEPTH24_STENCIL8:v===ni?W=i.DEPTH32F_STENCIL8:v===qr&&(W=i.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===Rs?W=i.DEPTH_COMPONENT24:v===ni?W=i.DEPTH_COMPONENT32F:v===qr&&(W=i.DEPTH_COMPONENT16),W}function R(I,v){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function C(I){let v=I.target;v.removeEventListener("dispose",C),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function _(I){let v=I.target;v.removeEventListener("dispose",_),F(v)}function E(I){let v=n.get(I);if(v.__webglInit===void 0)return;let W=I.source,X=f.get(W);if(X){let ee=X[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(I),Object.keys(X).length===0&&f.delete(W)}n.remove(I)}function L(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let W=I.source,X=f.get(W);delete X[v.__cacheKey],a.memory.textures--}function F(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let ee=0;ee<v.__webglFramebuffer[X].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[X][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let W=I.textures;for(let X=0,ee=W.length;X<ee;X++){let _e=n.get(W[X]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(W[X])}n.remove(I)}let U=0;function G(){U=0}function B(){return U}function V(I){U=I}function Y(){let I=U;return I>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function J(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function he(I,v){let W=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let X=I.image;if(X===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(W,I,v);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+v)}function q(I,v){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Me(W,I,v);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+v)}function te(I,v){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Me(W,I,v);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+v)}function Z(I,v){let W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){je(W,I,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+v)}let ze={[yn]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},xe={[nn]:i.NEAREST,[Bc]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},At={[If]:i.NEVER,[Uf]:i.ALWAYS,[Df]:i.LESS,[Ml]:i.LEQUAL,[Lf]:i.EQUAL,[Sl]:i.GEQUAL,[Nf]:i.GREATER,[Ff]:i.NOTEQUAL};function yt(I,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===Wr||v.magFilter===tr||v.magFilter===Pi||v.minFilter===on||v.minFilter===Wr||v.minFilter===tr||v.minFilter===Pi)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ze[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ze[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ze[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xe[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xe[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==tr&&v.minFilter!==Pi||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Mt(I,v){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",C));let X=v.source,ee=f.get(X);ee===void 0&&(ee={},f.set(X,ee));let _e=J(v);if(_e!==I.__cacheKey){ee[_e]===void 0&&(ee[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ee[_e].usedTimes++;let be=ee[I.__cacheKey];be!==void 0&&(ee[I.__cacheKey].usedTimes--,be.usedTimes===0&&L(v)),I.__cacheKey=_e,I.__webglTexture=ee[_e].texture}return W}function Q(I,v,W){return Math.floor(Math.floor(I/W)/v)}function ae(I,v,W,X){let _e=I.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,W,X,v.data);else{_e.sort((it,ve)=>it.start-ve.start);let be=0;for(let it=1;it<_e.length;it++){let ve=_e[be],Ee=_e[it],Xe=ve.start+ve.count,tt=Q(Ee.start,v.width,4),gt=Q(ve.start,v.width,4);Ee.start<=Xe+1&&tt===gt&&Q(Ee.start+Ee.count-1,v.width,4)===tt?ve.count=Math.max(ve.count,Ee.start+Ee.count-ve.start):(++be,_e[be]=Ee)}_e.length=be+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let it=0,ve=_e.length;it<ve;it++){let Ee=_e[it],Xe=Math.floor(Ee.start/4),tt=Math.ceil(Ee.count/4),gt=Xe%v.width,H=Math.floor(Xe/v.width),Te=tt,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,gt,H,Te,oe,W,X,v.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Me(I,v,W){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let ee=Mt(I,v),_e=v.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+W);let be=n.get(_e);if(_e.version!==be.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let oe=Tt.getPrimaries(Tt.workingColorSpace),Re=v.colorSpace===Di?null:Tt.getPrimaries(v.colorSpace),Pe=v.colorSpace===Di||oe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let le=b(v.image,!1,s.maxTextureSize);le=Lt(v,le);let Ae=r.convert(v.format,v.colorSpace),it=r.convert(v.type),ve=p(v.internalFormat,Ae,it,v.normalized,v.colorSpace,v.isVideoTexture);yt(X,v);let Ee,Xe=v.mipmaps,tt=v.isVideoTexture!==!0,gt=be.__version===void 0||ee===!0,H=_e.dataReady,Te=R(v,le);if(v.isDepthTexture)ve=S(v.format===Yi,v.type),gt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,ve,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,ve,le.width,le.height,0,Ae,it,null));else if(v.isDataTexture)if(Xe.length>0){tt&&gt&&t.texStorage2D(i.TEXTURE_2D,Te,ve,Xe[0].width,Xe[0].height);for(let oe=0,Re=Xe.length;oe<Re;oe++)Ee=Xe[oe],tt?H&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Ae,it,Ee.data):t.texImage2D(i.TEXTURE_2D,oe,ve,Ee.width,Ee.height,0,Ae,it,Ee.data);v.generateMipmaps=!1}else tt?(gt&&t.texStorage2D(i.TEXTURE_2D,Te,ve,le.width,le.height),H&&ae(v,le,Ae,it)):t.texImage2D(i.TEXTURE_2D,0,ve,le.width,le.height,0,Ae,it,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){tt&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ve,Xe[0].width,Xe[0].height,le.depth);for(let oe=0,Re=Xe.length;oe<Re;oe++)if(Ee=Xe[oe],v.format!==Wn)if(Ae!==null)if(tt){if(H)if(v.layerUpdates.size>0){let Pe=fu(Ee.width,Ee.height,v.format,v.type);for(let fe of v.layerUpdates){let at=Ee.data.subarray(fe*Pe/Ee.data.BYTES_PER_ELEMENT,(fe+1)*Pe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,fe,Ee.width,Ee.height,1,Ae,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,le.depth,Ae,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,ve,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,le.depth,Ae,it,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,ve,Ee.width,Ee.height,le.depth,0,Ae,it,Ee.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{tt&&gt&&t.texStorage2D(i.TEXTURE_2D,Te,ve,Xe[0].width,Xe[0].height);for(let oe=0,Re=Xe.length;oe<Re;oe++)Ee=Xe[oe],v.format!==Wn?Ae!==null?tt?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,ve,Ee.width,Ee.height,0,Ee.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?H&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Ae,it,Ee.data):t.texImage2D(i.TEXTURE_2D,oe,ve,Ee.width,Ee.height,0,Ae,it,Ee.data)}else if(v.isDataArrayTexture)if(tt){if(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ve,le.width,le.height,le.depth),H)if(v.layerUpdates.size>0){let oe=fu(le.width,le.height,v.format,v.type);for(let Re of v.layerUpdates){let Pe=le.data.subarray(Re*oe/le.data.BYTES_PER_ELEMENT,(Re+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,le.width,le.height,1,Ae,it,Pe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,it,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,le.width,le.height,le.depth,0,Ae,it,le.data);else if(v.isData3DTexture)tt?(gt&&t.texStorage3D(i.TEXTURE_3D,Te,ve,le.width,le.height,le.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,it,le.data)):t.texImage3D(i.TEXTURE_3D,0,ve,le.width,le.height,le.depth,0,Ae,it,le.data);else if(v.isFramebufferTexture){if(gt)if(tt)t.texStorage2D(i.TEXTURE_2D,Te,ve,le.width,le.height);else{let oe=le.width,Re=le.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,ve,oe,Re,0,Ae,it,null),oe>>=1,Re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),le.parentNode!==oe){oe.appendChild(le),u.add(v),oe.onpaint=Re=>{let Pe=Re.changedElements;for(let fe of u)Pe.includes(fe.image)&&(fe.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let Pe=i.RGBA,fe=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,fe,at,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(tt&&gt){let oe=St(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Te,ve,oe.width,oe.height)}for(let oe=0,Re=Xe.length;oe<Re;oe++)Ee=Xe[oe],tt?H&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ae,it,Ee):t.texImage2D(i.TEXTURE_2D,oe,ve,Ae,it,Ee);v.generateMipmaps=!1}else if(tt){if(gt){let oe=St(le);t.texStorage2D(i.TEXTURE_2D,Te,ve,oe.width,oe.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,it,le)}else t.texImage2D(i.TEXTURE_2D,0,ve,Ae,it,le);m(v)&&M(X),be.__version=_e.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function je(I,v,W){if(v.image.length!==6)return;let X=Mt(I,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let _e=n.get(ee);if(ee.version!==_e.__version||X===!0){t.activeTexture(i.TEXTURE0+W);let be=Tt.getPrimaries(Tt.workingColorSpace),ne=v.colorSpace===Di?null:Tt.getPrimaries(v.colorSpace),le=v.colorSpace===Di||be===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let fe=0;fe<6;fe++)!Ae&&!it?ve[fe]=b(v.image[fe],!0,s.maxCubemapSize):ve[fe]=it?v.image[fe].image:v.image[fe],ve[fe]=Lt(v,ve[fe]);let Ee=ve[0],Xe=r.convert(v.format,v.colorSpace),tt=r.convert(v.type),gt=p(v.internalFormat,Xe,tt,v.normalized,v.colorSpace),H=v.isVideoTexture!==!0,Te=_e.__version===void 0||X===!0,oe=ee.dataReady,Re=R(v,Ee);yt(i.TEXTURE_CUBE_MAP,v);let Pe;if(Ae){H&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,gt,Ee.width,Ee.height);for(let fe=0;fe<6;fe++){Pe=ve[fe].mipmaps;for(let at=0;at<Pe.length;at++){let Ze=Pe[at];v.format!==Wn?Xe!==null?H?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at,0,0,Ze.width,Ze.height,Xe,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at,gt,Ze.width,Ze.height,0,Ze.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at,0,0,Ze.width,Ze.height,Xe,tt,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at,gt,Ze.width,Ze.height,0,Xe,tt,Ze.data)}}}else{if(Pe=v.mipmaps,H&&Te){Pe.length>0&&Re++;let fe=St(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,gt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(it){H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ve[fe].width,ve[fe].height,Xe,tt,ve[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,gt,ve[fe].width,ve[fe].height,0,Xe,tt,ve[fe].data);for(let at=0;at<Pe.length;at++){let Vt=Pe[at].image[fe].image;H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at+1,0,0,Vt.width,Vt.height,Xe,tt,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at+1,gt,Vt.width,Vt.height,0,Xe,tt,Vt.data)}}else{H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Xe,tt,ve[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,gt,Xe,tt,ve[fe]);for(let at=0;at<Pe.length;at++){let Ze=Pe[at];H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at+1,0,0,Xe,tt,Ze.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,at+1,gt,Xe,tt,Ze.image[fe])}}}m(v)&&M(i.TEXTURE_CUBE_MAP),_e.__version=ee.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Fe(I,v,W,X,ee,_e){let be=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),le=p(W.internalFormat,be,ne,W.normalized,W.colorSpace),Ae=n.get(v),it=n.get(W);if(it.__renderTarget=v,!Ae.__hasExternalTextures){let ve=Math.max(1,v.width>>_e),Ee=Math.max(1,v.height>>_e);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,_e,le,ve,Ee,v.depth,0,be,ne,null):t.texImage2D(ee,_e,le,ve,Ee,0,be,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Oe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ee,it.__webglTexture,0,st(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ee,it.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,v,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let X=v.depthTexture,ee=X&&X.isDepthTexture?X.type:null,_e=S(v.stencilBuffer,ee),be=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(v),_e,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(v),_e,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_e,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,I)}else{let X=v.textures;for(let ee=0;ee<X.length;ee++){let _e=X[ee],be=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),le=p(_e.internalFormat,be,ne,_e.normalized,_e.colorSpace);Oe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(v),le,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(I,v,W){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),yt(i.TEXTURE_CUBE_MAP,v.depthTexture);let Ae=r.convert(v.depthTexture.format),it=r.convert(v.depthTexture.type),ve;v.depthTexture.format===ki?ve=i.DEPTH_COMPONENT24:v.depthTexture.format===Yi&&(ve=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ve,v.width,v.height,0,Ae,it,null)}}else he(v.depthTexture,0);let _e=ee.__webglTexture,be=st(v),ne=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,le=v.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ki)Oe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ne,_e,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,le,ne,_e,0);else if(v.depthTexture.format===Yi)Oe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ne,_e,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,le,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(I){let v=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=X}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(W)for(let X=0;X<6;X++)Nt(v.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?Nt(v.__webglFramebuffer[0],I,0):Nt(v.__webglFramebuffer,I,0)}else if(W){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),lt(v.__webglDepthbuffer[X],I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,_e)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),lt(v.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(I,v,W){let X=n.get(I);v!==void 0&&Fe(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ce(I)}function ge(I){let v=I.texture,W=n.get(I),X=n.get(v);I.addEventListener("dispose",_);let ee=I.textures,_e=I.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),_e){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let le=0;le<v.mipmaps.length;le++)W.__webglFramebuffer[ne][le]=i.createFramebuffer()}else W.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)W.__webglFramebuffer[ne]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(be)for(let ne=0,le=ee.length;ne<le;ne++){let Ae=n.get(ee[ne]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Oe(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){let le=ee[ne];W.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);let Ae=r.convert(le.format,le.colorSpace),it=r.convert(le.type),ve=p(le.internalFormat,Ae,it,le.normalized,le.colorSpace,I.isXRRenderTarget===!0),Ee=st(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ve,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),yt(i.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Fe(W.__webglFramebuffer[ne][le],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,le);else Fe(W.__webglFramebuffer[ne],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,le=ee.length;ne<le;ne++){let Ae=ee[ne],it=n.get(Ae),ve=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,it.__webglTexture),yt(ve,Ae),Fe(W.__webglFramebuffer,I,Ae,i.COLOR_ATTACHMENT0+ne,ve,0),m(Ae)&&M(ve)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),yt(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Fe(W.__webglFramebuffer[le],I,v,i.COLOR_ATTACHMENT0,ne,le);else Fe(W.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,ne,0);m(v)&&M(ne),t.unbindTexture()}I.depthBuffer&&ce(I)}function me(I){let v=I.textures;for(let W=0,X=v.length;W<X;W++){let ee=v[W];if(m(ee)){let _e=A(I),be=n.get(ee).__webglTexture;t.bindTexture(_e,be),M(_e),t.unbindTexture()}}}let Se=[],et=[];function Je(I){if(I.samples>0){if(Oe(I)===!1){let v=I.textures,W=I.width,X=I.height,ee=i.COLOR_BUFFER_BIT,_e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(I),ne=v.length>1;if(ne)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let le=I.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Ae]);let it=n.get(v[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,W,X,0,0,W,X,ee,i.NEAREST),l===!0&&(Se.length=0,et.length=0,Se.push(i.COLOR_ATTACHMENT0+Ae),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Se.push(_e),et.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,be.__webglColorRenderbuffer[Ae]);let it=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function st(I){return Math.min(s.maxSamples,I.samples)}function Oe(I){let v=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(I){let v=a.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function Lt(I,v){let W=I.colorSpace,X=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Gn&&W!==Di&&(Tt.getTransfer(W)===Ht?(X!==Wn||ee!==Un)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",W)),v}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.getTextureUnits=B,this.setTextureUnits=V,this.setTexture2D=he,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=de,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jx(i,e){function t(n,s=Di){let r,a=Tt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===eu)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===kc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===su)return i.RGB;if(n===Wn)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===Wc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===ro||n===ao||n===oo||n===co)if(a===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xc||n===jc||n===Kc||n===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Zc||n===$c||n===Qc||n===el||n===lo||n===tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Zc)return a===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qc)return r.COMPRESSED_R11_EAC;if(n===el)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lo)return r.COMPRESSED_RG11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===bl||n===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return a===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===ho||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:Zx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends Ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",b=new Du,m={},M=t.getContextAttributes(),A=null,p=null,S=[],R=[],C=new pe,_=null,E=null,L=new an;L.viewport=new Gt;let F=new an;F.viewport=new Gt;let U=[L,F],G=new Dc,B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=S[Q];return ae===void 0&&(ae=new Cr,S[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=S[Q];return ae===void 0&&(ae=new Cr,S[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=S[Q];return ae===void 0&&(ae=new Cr,S[Q]=ae),ae.getHandSpace()};function Y(Q){let ae=R.indexOf(Q.inputSource);if(ae===-1)return;let Me=S[ae];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,c||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",he);for(let Q=0;Q<S.length;Q++){let ae=R[Q];ae!==null&&(R[Q]=null,S[Q].disconnect(ae))}B=null,V=null,b.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,p=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,je=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=M.stencil?Yi:ki,je=M.stencil?Rs:Ii);let lt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new cn(d.textureWidth,d.textureHeight,{format:Wn,type:Un,depthTexture:new Vi(d.textureWidth,d.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new cn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function he(Q){for(let ae=0;ae<Q.removed.length;ae++){let Me=Q.removed[ae],je=R.indexOf(Me);je>=0&&(R[je]=null,S[je].disconnect(Me))}for(let ae=0;ae<Q.added.length;ae++){let Me=Q.added[ae],je=R.indexOf(Me);if(je===-1){for(let lt=0;lt<S.length;lt++)if(lt>=R.length){R.push(Me),je=lt;break}else if(R[lt]===null){R[lt]=Me,je=lt;break}if(je===-1)break}let Fe=S[je];Fe&&Fe.connect(Me)}}let q=new P,te=new P;function Z(Q,ae,Me){q.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);let je=q.distanceTo(te),Fe=ae.projectionMatrix.elements,lt=Me.projectionMatrix.elements,Nt=Fe[14]/(Fe[10]-1),ce=Fe[14]/(Fe[10]+1),de=(Fe[9]+1)/Fe[5],ge=(Fe[9]-1)/Fe[5],me=(Fe[8]-1)/Fe[0],Se=(lt[8]+1)/lt[0],et=Nt*me,Je=Nt*Se,st=je/(-me+Se),Oe=st*-me;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Oe),Q.translateZ(st),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let O=Nt+st,Lt=ce+st,St=et-Oe,I=Je+(je-Oe),v=de*ce/Lt*O,W=ge*ce/Lt*O;Q.projectionMatrix.makePerspective(St,I,v,W,O,Lt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ze(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,Me=Q.far;b.texture!==null&&(b.depthNear>0&&(ae=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),G.near=F.near=L.near=ae,G.far=F.far=L.far=Me,(B!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),B=G.near,V=G.far),G.layers.mask=Q.layers.mask|6,L.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let je=Q.parent,Fe=G.cameras;ze(G,je);for(let lt=0;lt<Fe.length;lt++)ze(Fe[lt],je);Fe.length===2?Z(G,L,F):G.projectionMatrix.copy(L.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),xe(Q,G,je)};function xe(Q,ae,Me){Me===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(G)},this.getCameraTexture=function(Q){return m[Q]};let At=null;function yt(Q,ae){if(h=ae.getViewerPose(c||a),g=ae,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let je=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,je=!0);for(let ce=0;ce<Me.length;ce++){let de=Me[ce],ge=null;if(f!==null)ge=f.getViewport(de);else{let Se=u.getViewSubImage(d,de);ge=Se.viewport,ce===0&&(e.setRenderTargetTextures(p,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(p))}let me=U[ce];me===void 0&&(me=new an,me.layers.enable(ce),me.viewport=new Gt,U[ce]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ge.x,ge.y,ge.width,ge.height),ce===0&&(G.matrix.copy(me.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),je===!0&&G.cameras.push(me)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ce=u.getDepthInformation(Me[0]);ce&&ce.isValid&&ce.texture&&b.init(ce,s.renderState)}if(Fe&&Fe.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let ce=0;ce<Me.length;ce++){let de=Me[ce].camera;if(de){let ge=m[de];ge||(ge=new Ra,m[de]=ge);let me=u.getCameraImage(de);ge.sourceTexture=me}}}}for(let Me=0;Me<S.length;Me++){let je=R[Me],Fe=S[Me];je!==null&&Fe!==void 0&&Fe.update(je,ae,c||a)}At&&At(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Mt=new mp;Mt.setAnimationLoop(yt),this.setAnimationLoop=function(Q){At=Q},this.dispose=function(){}}},Qx=new dt,yp=new vt;yp.set(-1,0,0,0,1,0,0,0,1);function ev(i,e){function t(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,hu(i)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function s(b,m,M,A,p){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(b,m):m.isMeshLambertMaterial?(r(b,m),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(b,m),u(b,m)):m.isMeshPhongMaterial?(r(b,m),h(b,m),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(b,m),d(b,m),m.isMeshPhysicalMaterial&&f(b,m,p)):m.isMeshMatcapMaterial?(r(b,m),g(b,m)):m.isMeshDepthMaterial?r(b,m):m.isMeshDistanceMaterial?(r(b,m),y(b,m)):m.isMeshNormalMaterial?r(b,m):m.isLineBasicMaterial?(a(b,m),m.isLineDashedMaterial&&o(b,m)):m.isPointsMaterial?l(b,m,M,A):m.isSpriteMaterial?c(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,t(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===gn&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,t(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===gn&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,t(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,t(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,p=M.envMapRotation;A&&(b.envMap.value=A,b.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(p)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(yp),b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,b.aoMapTransform))}function a(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform))}function o(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function l(b,m,M,A){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*M,b.scale.value=A*.5,m.map&&(b.map.value=m.map,t(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function c(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function h(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function u(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function d(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function f(b,m,M){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.retroreflectivity>0&&(b.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=M.texture,b.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,b.specularIntensityMapTransform))}function g(b,m){m.matcap&&(b.matcap.value=m.matcap)}function y(b,m){let M=e.get(m).light;b.referencePosition.value.setFromMatrixPosition(M.matrixWorld),b.nearDistance.value=M.shadow.camera.near,b.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,S){let R=S.program;n.uniformBlockBinding(p,R)}function c(p,S){let R=s[p.id];R===void 0&&(b(p),R=h(p),s[p.id]=R,p.addEventListener("dispose",M));let C=S.program;n.updateUBOMapping(p,C);let _=e.render.frame;r[p.id]!==_&&(d(p),r[p.id]=_)}function h(p){let S=u();p.__bindingPointIndex=S;let R=i.createBuffer(),C=p.__size,_=p.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,R),R}function u(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){let S=s[p.id],R=p.uniforms,C=p.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=R.length;_<E;_++){let L=R[_];if(Array.isArray(L))for(let F=0,U=L.length;F<U;F++)f(L[F],_,F,C);else f(L,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(p,S,R,C){if(y(p,S,R,C)===!0){let _=p.__offset,E=p.value;if(Array.isArray(E)){let L=0;for(let F=0;F<E.length;F++){let U=E[F],G=m(U);g(U,p.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,p.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,p.__data)}}function g(p,S,R){typeof p=="number"||typeof p=="boolean"?S[0]=p:p.isMatrix3?(S[0]=p.elements[0],S[1]=p.elements[1],S[2]=p.elements[2],S[3]=0,S[4]=p.elements[3],S[5]=p.elements[4],S[6]=p.elements[5],S[7]=0,S[8]=p.elements[6],S[9]=p.elements[7],S[10]=p.elements[8],S[11]=0):ArrayBuffer.isView(p)?S.set(new p.constructor(p.buffer,p.byteOffset,S.length)):p.toArray(S,R)}function y(p,S,R,C){let _=p.value,E=S+"_"+R;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let L=C[E];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function b(p){let S=p.uniforms,R=0,C=16;for(let E=0,L=S.length;E<L;E++){let F=Array.isArray(S[E])?S[E]:[S[E]];for(let U=0,G=F.length;U<G;U++){let B=F[U],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,J=V.length;Y<J;Y++){let he=V[Y],q=m(he),te=R%C,Z=te%q.boundary,ze=te+Z;R+=Z,ze!==0&&C-ze<q.storage&&(R+=C-ze),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=q.storage}}}let _=R%C;return _>0&&(R+=C-_),p.__size=R,p.__cache={},this}function m(p){let S={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(S.boundary=4,S.storage=4):p.isVector2?(S.boundary=8,S.storage=8):p.isVector3||p.isColor?(S.boundary=16,S.storage=12):p.isVector4?(S.boundary=16,S.storage=16):p.isMatrix3?(S.boundary=48,S.storage=48):p.isMatrix4?(S.boundary=64,S.storage=64):p.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(S.boundary=16,S.storage=p.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",p),S}function M(p){let S=p.target;S.removeEventListener("dispose",M);let R=a.indexOf(S.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(let p in s)i.deleteBuffer(s[p]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function iv(){return Ji===null&&(Ji=new Gi(nv,16,16,Cs,Sn),Ji.name="DFG_LUT",Ji.minFilter=on,Ji.magFilter=on,Ji.wrapS=li,Ji.wrapT=li,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Al=class{constructor(e={}){let{canvas:t=Of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,b=new Set([qc,Wc,Vc]),m=new Set([Un,Ii,qr,Rs,zc,Hc]),M=new Uint32Array(4),A=new Int32Array(4),p=new P,S=null,R=null,C=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,F=!1,U=null,G=null,B=null,V=null;this._outputColorSpace=Jt;let Y=0,J=0,he=null,q=-1,te=null,Z=new Gt,ze=new Gt,xe=null,At=new Ye(0),yt=0,Mt=t.width,Q=t.height,ae=1,Me=null,je=null,Fe=new Gt(0,0,Mt,Q),lt=new Gt(0,0,Mt,Q),Nt=!1,ce=new Lr,de=!1,ge=!1,me=new dt,Se=new P,et=new Gt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Oe(){return he===null?ae:1}let O=n;function Lt(w,k){return t.getContext(w,k)}let St,I,v,W,X,ee,_e,be,ne,le,Ae,it,ve,Ee,Xe,tt,gt,H,Te,oe,Re,Pe,fe;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",Bt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),O===null){let k="webgl2";if(O=Lt(k,w),O===null)throw Lt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(w){throw t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),bt("WebGLRenderer: "+w.message),w}function at(){St=new h_(O),St.init(),Re=new Jx(O,St),I=new e_(O,St,e,Re),v=new Kx(O,St),I.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),G=O.createFramebuffer(),B=O.createFramebuffer(),V=O.createFramebuffer(),W=new f_(O),X=new Nx,ee=new Yx(O,St,v,X,I,Re,W),_e=new l_(L),be=new m0(O),Pe=new $b(O,be),ne=new u_(O,be,W,Pe),le=new m_(O,ne,be,Pe,W),H=new p_(O,I,ee),Xe=new t_(X),Ae=new Lx(L,_e,St,I,Pe,Xe),it=new ev(L,X),ve=new Ux,Ee=new Gx(St),gt=new Zb(L,_e,v,le,g,l),tt=new jx(L,le,I),fe=new tv(O,W,I,v),Te=new Qb(O,St,W),oe=new d_(O,St,W),W.programs=Ae.programs,L.capabilities=I,L.extensions=St,L.properties=X,L.renderLists=ve,L.shadowMap=tt,L.state=v,L.info=W}y!==Un&&(E=new b_(y,t.width,t.height,o,s,r));let Ze=new Lu(L,O);this.xr=Ze,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=St.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=St.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(w){w!==void 0&&(ae=w,this.setSize(Mt,Q,!1))},this.getSize=function(w){return w.set(Mt,Q)},this.setSize=function(w,k,$=!0){if(Ze.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=w,Q=k,t.width=Math.floor(w*ae),t.height=Math.floor(k*ae),$===!0&&(t.style.width=w+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Mt*ae,Q*ae).floor()},this.setDrawingBufferSize=function(w,k,$){Mt=w,Q=k,ae=$,t.width=Math.floor(w*$),t.height=Math.floor(k*$),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(y===Un){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(Fe)},this.setViewport=function(w,k,$,j){w.isVector4?Fe.set(w.x,w.y,w.z,w.w):Fe.set(w,k,$,j),v.viewport(Z.copy(Fe).multiplyScalar(ae).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,k,$,j){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,k,$,j),v.scissor(ze.copy(lt).multiplyScalar(ae).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(w){v.setScissorTest(Nt=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){je=w},this.getClearColor=function(w){return w.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,$=!0){let j=0;if(w){let K=!1;if(he!==null){let Be=he.texture.format;K=b.has(Be)}if(K){let Be=he.texture.type,He=m.has(Be),Ue=gt.getClearColor(),$e=gt.getClearAlpha(),nt=Ue.r,xt=Ue.g,Et=Ue.b;He?(M[0]=nt,M[1]=xt,M[2]=Et,M[3]=$e,O.clearBufferuiv(O.COLOR,0,M)):(A[0]=nt,A[1]=xt,A[2]=Et,A[3]=$e,O.clearBufferiv(O.COLOR,0,A))}else j|=O.COLOR_BUFFER_BIT}k&&(j|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),gt.dispose(),ve.dispose(),Ee.dispose(),X.dispose(),_e.dispose(),le.dispose(),Pe.dispose(),fe.dispose(),Ae.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Zl),Ze.removeEventListener("sessionend",Ls),Fi.stop()};function Vt(w){w.preventDefault(),_a("WebGLRenderer: Context Lost."),F=!0}function Bt(){_a("WebGLRenderer: Context Restored."),F=!1;let w=W.autoReset,k=tt.enabled,$=tt.autoUpdate,j=tt.needsUpdate,K=tt.type;at(),W.autoReset=w,tt.enabled=k,tt.autoUpdate=$,tt.needsUpdate=j,tt.type=K}function Dn(w){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ri(w){let k=w.target;k.removeEventListener("dispose",ri),Jl(k)}function Jl(w){ai(w),X.remove(w)}function ai(w){let k=X.get(w).programs;k!==void 0&&(k.forEach(function($){Ae.releaseProgram($)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,$,j,K,Be){k===null&&(k=Je);let He=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ue=Ql(w,k,$,j,K);v.setMaterial(j,He);let $e=$.index,nt=1;if(j.wireframe===!0){if($e=ne.getWireframeAttribute($),$e===void 0)return;nt=2}let xt=$.drawRange,Et=$.attributes.position,Ke=xt.start*nt,kt=(xt.start+xt.count)*nt;Be!==null&&(Ke=Math.max(Ke,Be.start*nt),kt=Math.min(kt,(Be.start+Be.count)*nt)),$e!==null?(Ke=Math.max(Ke,0),kt=Math.min(kt,$e.count)):Et!=null&&(Ke=Math.max(Ke,0),kt=Math.min(kt,Et.count));let tn=kt-Ke;if(tn<0||tn===1/0)return;Pe.setup(K,j,Ue,$,$e);let jt,Wt=Te;if($e!==null&&(jt=be.get($e),Wt=oe,Wt.setIndex(jt)),K.isMesh)j.wireframe===!0?(v.setLineWidth(j.wireframeLinewidth*Oe()),Wt.setMode(O.LINES)):Wt.setMode(O.TRIANGLES);else if(K.isLine){let x=j.linewidth;x===void 0&&(x=1),v.setLineWidth(x*Oe()),K.isLineSegments?Wt.setMode(O.LINES):K.isLineLoop?Wt.setMode(O.LINE_LOOP):Wt.setMode(O.LINE_STRIP)}else K.isPoints?Wt.setMode(O.POINTS):K.isSprite&&Wt.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let x=K._multiDrawStarts,T=K._multiDrawCounts,D=K._multiDrawCount,N=$e?be.get($e).bytesPerElement:1,z=X.get(j).currentProgram.getUniforms();for(let ie=0;ie<D;ie++)z.setValue(O,"_gl_DrawID",ie),Wt.render(x[ie]/N,T[ie])}else if(K.isInstancedMesh)Wt.renderInstances(Ke,tn,K.count);else if($.isInstancedBufferGeometry){let x=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,T=Math.min($.instanceCount,x);Wt.renderInstances(Ke,tn,T)}else Wt.render(Ke,tn)};function Li(w,k,$,j){U!==null&&w.isNodeMaterial&&U.setObject(j,w),de===!0&&Xe.setState(w,$,!1),w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,jn(w,k,j),w.side=di,w.needsUpdate=!0,jn(w,k,j),w.side=ln):jn(w,k,j)}this.compile=function(w,k,$=null){$===null&&($=w),U!==null&&U.renderStart(w,k,$),R=Ee.get($),R.init(k),_.push(R),$.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),w!==$&&w.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),R.setupLights(),U!==null&&U.updateLights(R.state.lightsArray),ge=this.localClippingEnabled,de=Xe.init(this.clippingPlanes,ge),de===!0&&Xe.setGlobalState(this.clippingPlanes,k),U!==null&&tt.render(R.state.shadowsArray,$,k);let j=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Be=K.material;if(Be)if(Array.isArray(Be))for(let He=0;He<Be.length;He++){let Ue=Be[He];Li(Ue,$,k,K),j.add(Ue)}else Li(Be,$,k,K),j.add(Be)}),R=_.pop(),U!==null&&U.renderEnd(),j},this.compileAsync=function(w,k,$=null){let j=this.compile(w,k,$);return new Promise(K=>{function Be(){if(j.forEach(function(He){let $e=X.get(He).currentProgram;($e===void 0||$e.isReady())&&j.delete(He)}),j.size===0){K(w);return}setTimeout(Be,10)}St.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Xn=null;function Ni(w){Xn&&Xn(w)}function Zl(){Fi.stop()}function Ls(){Fi.start()}let Fi=new mp;Fi.setAnimationLoop(Ni),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(w){Xn=w,Ze.setAnimationLoop(w),w===null?Fi.stop():Fi.start()},Ze.addEventListener("sessionstart",Zl),Ze.addEventListener("sessionend",Ls),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;U!==null&&U.renderStart(w,k);let $=Ze.enabled===!0&&Ze.isPresenting===!0,j=E!==null&&(he===null||$)&&E.begin(L,he);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(k),k=Ze.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,k,he),R=Ee.get(w,_.length),R.init(k),R.state.textureUnits=ee.getTextureUnits(),_.push(R),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(me,Si,k.reversedDepth),ge=this.localClippingEnabled,de=Xe.init(this.clippingPlanes,ge),S=ve.get(w,C.length),S.init(),C.push(S),Ze.enabled===!0&&Ze.isPresenting===!0){let He=L.xr.getDepthSensingMesh();He!==null&&Ui(He,k,-1/0,L.sortObjects)}Ui(w,k,0,L.sortObjects),S.finish(),U!==null&&U.updateLights(R.state.lightsArray),L.sortObjects===!0&&S.sort(Me,je),st=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,st&&gt.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&Xe.beginShadows();let K=R.state.shadowsArray;if(tt.render(K,w,k),de===!0&&Xe.endShadows(),(j&&E.hasRenderPass())===!1){let He=S.opaque,Ue=S.transmissive;if(R.setupLights(),k.isArrayCamera){let $e=k.cameras;if(Ue.length>0)for(let nt=0,xt=$e.length;nt<xt;nt++){let Et=$e[nt];En(He,Ue,w,Et)}st&&gt.render(w);for(let nt=0,xt=$e.length;nt<xt;nt++){let Et=$e[nt];kn(S,w,Et,Et.viewport)}}else Ue.length>0&&En(He,Ue,w,k),st&&gt.render(w),kn(S,w,k)}he!==null&&J===0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he)),j&&E.end(L),w.isScene===!0&&w.onAfterRender(L,w,k),Pe.resetDefaultState(),q=-1,te=null,_.pop(),_.length>0?(R=_[_.length-1],ee.setTextureUnits(R.state.textureUnits),de===!0&&Xe.setGlobalState(L.clippingPlanes,R.state.camera)):R=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,U!==null&&U.renderEnd()};function Ui(w,k,$,j){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ce)){j&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);let He=le.update(w),Ue=w.material;Ue.visible&&S.push(w,He,Ue,$,et.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ce))){let He=le.update(w),Ue=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),et.copy(He.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Ue)){let $e=He.groups;for(let nt=0,xt=$e.length;nt<xt;nt++){let Et=$e[nt],Ke=Ue[Et.materialIndex];Ke&&Ke.visible&&S.push(w,He,Ke,$,et.z,Et,k)}}else Ue.visible&&S.push(w,He,Ue,$,et.z,null,k)}}let Be=w.children;for(let He=0,Ue=Be.length;He<Ue;He++)Ui(Be[He],k,$,j)}function kn(w,k,$,j){let{opaque:K,transmissive:Be,transparent:He}=w;R.setupLightsView($),de===!0&&Xe.setGlobalState(L.clippingPlanes,$),j&&v.viewport(Z.copy(j)),K.length>0&&fn(K,k,$),Be.length>0&&fn(Be,k,$),He.length>0&&fn(He,k,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function En(w,k,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){let Ke=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new cn(1,1,{generateMipmaps:!0,type:Ke?Sn:Un,minFilter:Pi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let Be=R.state.transmissionRenderTarget[j.id],He=j.viewport||Z;Be.setSize(He.z*L.transmissionResolutionScale,He.w*L.transmissionResolutionScale);let Ue=L.getRenderTarget(),$e=L.getActiveCubeFace(),nt=L.getActiveMipmapLevel();L.setRenderTarget(Be),L.getClearColor(At),yt=L.getClearAlpha(),yt<1&&L.setClearColor(16777215,.5),L.clear(),st&&gt.render($);let xt=L.toneMapping;L.toneMapping=Ci;let Et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),de===!0&&Xe.setGlobalState(L.clippingPlanes,j),fn(w,$,j),ee.updateMultisampleRenderTarget(Be),ee.updateRenderTargetMipmap(Be),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let kt=0,tn=k.length;kt<tn;kt++){let jt=k[kt],{object:Wt,geometry:x,material:T,group:D}=jt;if(T.side===ln&&Wt.layers.test(j.layers)){let N=T.side;T.side=gn,T.needsUpdate=!0,rr(Wt,$,j,x,T,D),T.side=N,T.needsUpdate=!0,Ke=!0}}Ke===!0&&(ee.updateMultisampleRenderTarget(Be),ee.updateRenderTargetMipmap(Be))}L.setRenderTarget(Ue,$e,nt),L.setClearColor(At,yt),Et!==void 0&&(j.viewport=Et),L.toneMapping=xt}function fn(w,k,$){let j=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Be=w.length;K<Be;K++){let He=w[K],{object:Ue,geometry:$e,group:nt}=He,xt=He.material;xt.allowOverride===!0&&j!==null&&(xt=j),Ue.layers.test($.layers)&&rr(Ue,k,$,$e,xt,nt)}}function rr(w,k,$,j,K,Be){U!==null&&K.isNodeMaterial&&U.setObject(w,K),w.onBeforeRender(L,k,$,j,K,Be),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(L,k,$,j,w,Be),K.transparent===!0&&K.side===ln&&K.forceSinglePass===!1?(K.side=gn,K.needsUpdate=!0,L.renderBufferDirect($,k,j,K,w,Be),K.side=di,K.needsUpdate=!0,L.renderBufferDirect($,k,j,K,w,Be),K.side=ln):L.renderBufferDirect($,k,j,K,w,Be),w.onAfterRender(L,k,$,j,K,Be)}function jn(w,k,$){k.isScene!==!0&&(k=Je);let j=X.get(w),K=R.state.lights,Be=R.state.shadowsArray,He=K.state.version,Ue=Ae.getParameters(w,K.state,Be,k,$,R.state.lightProbeGridArray),$e=Ae.getProgramCacheKey(Ue),nt=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;let xt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=_e.get(w.envMap||j.environment,xt),j.envMapRotation=j.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",ri),nt=new Map,j.programs=nt);let Et=nt.get($e);if(Et!==void 0){if(j.currentProgram===Et&&j.lightsStateVersion===He)return gi(w,Ue),Et}else Ue.uniforms=Ae.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,$,Ue),w.onBeforeCompile(Ue,L),Et=Ae.acquireProgram(Ue,$e),nt.set($e,Et),j.uniforms=Ue.uniforms;let Ke=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ke.clippingPlanes=Xe.uniform),gi(w,Ue),j.needsLights=Ns(w),j.lightsStateVersion=He,j.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.sunLights.value=K.state.sun,Ke.sunLightShadows.value=K.state.sunShadow,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.sunShadowMatrix.value=K.state.sunShadowMatrix,Ke.sunShadowCascade.value=K.state.sunShadowCascade,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),j.lightProbeGrid=R.state.lightProbeGridArray.length>0,j.currentProgram=Et,j.uniformsList=null,Et}function Ft(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Jr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function gi(w,k){let $=X.get(w);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function $l(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;p.setFromMatrixPosition(k.matrixWorld);for(let $=0,j=w.length;$<j;$++){let K=w[$];if(K.texture!==null&&K.boundingBox.containsPoint(p))return K}return null}function Ql(w,k,$,j,K){k.isScene!==!0&&(k=Je),ee.resetTextureUnits();let Be=k.fog,He=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,Ue=he===null?L.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Tt.workingColorSpace,$e=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,nt=_e.get(j.envMap||He,$e),xt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Et=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ke=!!$.morphAttributes.position,kt=!!$.morphAttributes.normal,tn=!!$.morphAttributes.color,jt=Ci;j.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(jt=L.toneMapping);let Wt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,x=Wt!==void 0?Wt.length:0,T=X.get(j),D=R.state.lights;if(de===!0&&(ge===!0||w!==te)){let ke=w===te&&j.id===q;Xe.setState(j,w,ke)}let N=!1;j.version===T.__version?(T.needsLights&&T.lightsStateVersion!==D.state.version||T.outputColorSpace!==Ue||K.isBatchedMesh&&T.batching===!1||!K.isBatchedMesh&&T.batching===!0||K.isBatchedMesh&&T.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&T.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&T.instancing===!1||!K.isInstancedMesh&&T.instancing===!0||K.isSkinnedMesh&&T.skinning===!1||!K.isSkinnedMesh&&T.skinning===!0||K.isInstancedMesh&&T.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&T.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&T.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&T.instancingMorph===!1&&K.morphTexture!==null||T.envMap!==nt||j.fog===!0&&T.fog!==Be||T.numClippingPlanes!==void 0&&(T.numClippingPlanes!==Xe.numPlanes||T.numIntersection!==Xe.numIntersection)||T.vertexAlphas!==xt||T.vertexTangents!==Et||T.morphTargets!==Ke||T.morphNormals!==kt||T.morphColors!==tn||T.toneMapping!==jt||T.morphTargetsCount!==x||!!T.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(N=!0):(N=!0,T.__version=j.version);let z=T.currentProgram;N===!0&&(z=jn(j,k,K),U&&j.isNodeMaterial&&U.onUpdateProgram(j,z,T));let ie=!1,se=!1,we=!1,ye=z.getUniforms(),Ie=T.uniforms;if(v.useProgram(z.program)&&(ie=!0,se=!0,we=!0),j.id!==q&&(q=j.id,se=!0),T.needsLights){let ke=$l(R.state.lightProbeGridArray,K);T.lightProbeGrid!==ke&&(T.lightProbeGrid=ke,se=!0)}if(ie||te!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ye.setValue(O,"projectionMatrix",w.projectionMatrix),ye.setValue(O,"viewMatrix",w.matrixWorldInverse);let Ce=ye.map.cameraPosition;Ce!==void 0&&Ce.setValue(O,Se.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ye.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),te!==w&&(te=w,se=!0,we=!0)}if(T.needsLights&&(D.state.sunShadowMap.length>0&&ye.setValue(O,"sunShadowMap",D.state.sunShadowMap,ee),D.state.directionalShadowMap.length>0&&ye.setValue(O,"directionalShadowMap",D.state.directionalShadowMap,ee),D.state.spotShadowMap.length>0&&ye.setValue(O,"spotShadowMap",D.state.spotShadowMap,ee),D.state.pointShadowMap.length>0&&ye.setValue(O,"pointShadowMap",D.state.pointShadowMap,ee)),K.isSkinnedMesh){ye.setOptional(O,K,"bindMatrix"),ye.setOptional(O,K,"bindMatrixInverse");let ke=K.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ye.setValue(O,"boneTexture",ke.boneTexture,ee))}K.isBatchedMesh&&(ye.setOptional(O,K,"batchingTexture"),ye.setValue(O,"batchingTexture",K._matricesTexture,ee),ye.setOptional(O,K,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",K._indirectTexture,ee),ye.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",K._colorsTexture,ee));let ft=$.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&H.update(K,$,z),(se||T.receiveShadow!==K.receiveShadow)&&(T.receiveShadow=K.receiveShadow,ye.setValue(O,"receiveShadow",K.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(Ie.envMapIntensity.value=k.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=iv()),se){if(ye.setValue(O,"toneMappingExposure",L.toneMappingExposure),T.needsLights&&bi(Ie,we),Be&&j.fog===!0&&it.refreshFogUniforms(Ie,Be),it.refreshMaterialUniforms(Ie,j,ae,Q,R.state.transmissionRenderTarget[w.id]),T.needsLights&&T.lightProbeGrid){let ke=T.lightProbeGrid;Ie.probesSH.value=ke.texture,Ie.probesMin.value.copy(ke.boundingBox.min),Ie.probesMax.value.copy(ke.boundingBox.max),Ie.probesResolution.value.copy(ke.resolution)}Jr.upload(O,Ft(T),Ie,ee)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jr.upload(O,Ft(T),Ie,ee),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ye.setValue(O,"center",K.center),ye.setValue(O,"modelViewMatrix",K.modelViewMatrix),ye.setValue(O,"normalMatrix",K.normalMatrix),ye.setValue(O,"modelMatrix",K.matrixWorld),j.uniformsGroups!==void 0){let ke=j.uniformsGroups;for(let Ce=0,Ve=ke.length;Ce<Ve;Ce++){let pt=ke[Ce];fe.update(pt,z),fe.bind(pt,z)}}return z}function bi(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Ns(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(w,k,$){let j=X.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=k,X.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let $=X.get(w);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,$=0){he=w,Y=k,J=$;let j=null,K=!1,Be=!1;if(w){let Ue=X.get(w);if(Ue.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,Ue.__webglFramebuffer),Z.copy(w.viewport),ze.copy(w.scissor),xe=w.scissorTest,v.viewport(Z),v.scissor(ze),v.setScissorTest(xe),q=-1;return}else if(Ue.__webglFramebuffer===void 0)ee.setupRenderTarget(w);else if(Ue.__hasExternalTextures)ee.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let xt=w.depthTexture;if(Ue.__boundDepthTexture!==xt){if(xt!==null&&X.has(xt)&&(w.width!==xt.image.width||w.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(w)}}let $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Be=!0);let nt=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[k])?j=nt[k][$]:j=nt[k],K=!0):w.samples>0&&ee.useMultisampledRTT(w)===!1?j=X.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?j=nt[$]:j=nt,Z.copy(w.viewport),ze.copy(w.scissor),xe=w.scissorTest}else Z.copy(Fe).multiplyScalar(ae).floor(),ze.copy(lt).multiplyScalar(ae).floor(),xe=Nt;if($!==0&&(j=G),v.bindFramebuffer(O.FRAMEBUFFER,j)&&v.drawBuffers(w,j),v.viewport(Z),v.scissor(ze),v.setScissorTest(xe),K){let Ue=X.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,$)}else if(Be){let Ue=k;for(let $e=0;$e<w.textures.length;$e++){let nt=X.get(w.textures[$e]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+$e,nt.__webglTexture,$,Ue)}}else if(w!==null&&$!==0){let Ue=X.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,$)}q=-1};function oi(w){let k=X.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=I.textureFormatReadable(w.format),k.__typeReadable=I.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,$,j,K,Be,He,Ue=0){if(!(w&&w.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){v.bindFramebuffer(O.FRAMEBUFFER,$e);try{let nt=w.textures[Ue],xt=nt.format,Et=nt.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ue);let Ke=oi(nt);if(Ke.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-j&&$>=0&&$<=w.height-K&&O.readPixels(k,$,j,K,Re.convert(xt),Re.convert(Et),Be)}finally{let nt=he!==null?X.get(he).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,k,$,j,K,Be,He,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e)if(k>=0&&k<=w.width-j&&$>=0&&$<=w.height-K){v.bindFramebuffer(O.FRAMEBUFFER,$e);let nt=w.textures[Ue],xt=nt.format,Et=nt.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ue);let Ke=oi(nt);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,kt),O.bufferData(O.PIXEL_PACK_BUFFER,Be.byteLength,O.STREAM_READ),O.readPixels(k,$,j,K,Re.convert(xt),Re.convert(Et),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let tn=he!==null?X.get(he).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,tn);let jt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await kf(O,jt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,kt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(kt),O.deleteSync(jt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,$=0){let j=Math.pow(2,-$),K=Math.floor(w.image.width*j),Be=Math.floor(w.image.height*j),He=k!==null?k.x:0,Ue=k!==null?k.y:0;ee.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,He,Ue,K,Be),v.unbindTexture()},this.copyTextureToTexture=function(w,k,$=null,j=null,K=0,Be=0){let He,Ue,$e,nt,xt,Et,Ke,kt,tn,jt=w.isCompressedTexture?w.mipmaps[Be]:w.image;if($!==null)He=$.max.x-$.min.x,Ue=$.max.y-$.min.y,$e=$.isBox3?$.max.z-$.min.z:1,nt=$.min.x,xt=$.min.y,Et=$.isBox3?$.min.z:0;else{let Ie=Math.pow(2,-K);He=Math.floor(jt.width*Ie),Ue=Math.floor(jt.height*Ie),w.isDataArrayTexture?$e=jt.depth:w.isData3DTexture?$e=Math.floor(jt.depth*Ie):$e=1,nt=0,xt=0,Et=0}j!==null?(Ke=j.x,kt=j.y,tn=j.z):(Ke=0,kt=0,tn=0);let Wt=Re.convert(k.format),x=Re.convert(k.type),T;k.isData3DTexture?(ee.setTexture3D(k,0),T=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ee.setTexture2DArray(k,0),T=O.TEXTURE_2D_ARRAY):(ee.setTexture2D(k,0),T=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let D=v.getParameter(O.UNPACK_ROW_LENGTH),N=v.getParameter(O.UNPACK_IMAGE_HEIGHT),z=v.getParameter(O.UNPACK_SKIP_PIXELS),ie=v.getParameter(O.UNPACK_SKIP_ROWS),se=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,jt.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,jt.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),v.pixelStorei(O.UNPACK_SKIP_ROWS,xt),v.pixelStorei(O.UNPACK_SKIP_IMAGES,Et);let we=w.isDataArrayTexture||w.isData3DTexture,ye=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ie=X.get(w),ft=X.get(k),ke=X.get(Ie.__renderTarget),Ce=X.get(ft.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,ke.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ve=0;Ve<$e;Ve++)we&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(w).__webglTexture,K,Et+Ve),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(k).__webglTexture,Be,tn+Ve)),O.blitFramebuffer(nt,xt,He,Ue,Ke,kt,He,Ue,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||X.has(w)){let Ie=X.get(w),ft=X.get(k);v.bindFramebuffer(O.READ_FRAMEBUFFER,B),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let ke=0;ke<$e;ke++)we?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,K,Et+ke):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,K),ye?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.__webglTexture,Be,tn+ke):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,Be),K!==0?O.blitFramebuffer(nt,xt,He,Ue,Ke,kt,He,Ue,O.COLOR_BUFFER_BIT,O.NEAREST):ye?O.copyTexSubImage3D(T,Be,Ke,kt,tn+ke,nt,xt,He,Ue):O.copyTexSubImage2D(T,Be,Ke,kt,nt,xt,He,Ue);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(T,Be,Ke,kt,tn,He,Ue,$e,Wt,x,jt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(T,Be,Ke,kt,tn,He,Ue,$e,Wt,jt.data):O.texSubImage3D(T,Be,Ke,kt,tn,He,Ue,$e,Wt,x,jt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Be,Ke,kt,He,Ue,Wt,x,jt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Be,Ke,kt,jt.width,jt.height,Wt,jt.data):O.texSubImage2D(O.TEXTURE_2D,Be,Ke,kt,He,Ue,Wt,x,jt);v.pixelStorei(O.UNPACK_ROW_LENGTH,D),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,N),v.pixelStorei(O.UNPACK_SKIP_PIXELS,z),v.pixelStorei(O.UNPACK_SKIP_ROWS,ie),v.pixelStorei(O.UNPACK_SKIP_IMAGES,se),Be===0&&k.generateMipmaps&&O.generateMipmap(T),v.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&ee.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ee.setTextureCube(w,0):w.isData3DTexture?ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ee.setTexture2DArray(w,0):ee.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){Y=0,J=0,he=null,v.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}};var Sp={type:"change"},Fu={type:"start"},Tp={type:"end"},Pl=new Hi,Ep=new Hn,sv=Math.cos(70*ii.DEG2RAD),xn=new P,Zn=2*Math.PI,Xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nu=1e-6,Il=class extends Ya{constructor(e,t=null){super(e,t),this.state=Xt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Fn,this._lastTargetPosition=new P,this._quat=new Fn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hr,this._sphericalDelta=new Hr,this._scale=1,this._panOffset=new P,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new P,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=av.bind(this),this._onPointerDown=rv.bind(this),this._onPointerUp=ov.bind(this),this._onContextMenu=pv.bind(this),this._onMouseWheel=hv.bind(this),this._onKeyDown=uv.bind(this),this._onTouchStart=dv.bind(this),this._onTouchMove=fv.bind(this),this._onMouseDown=cv.bind(this),this._onMouseMove=lv.bind(this),this._interceptControlDown=mv.bind(this),this._interceptControlUp=gv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sp),this.update(),this.state=Xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;xn.copy(t).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zn:n>Math.PI&&(n-=Zn),s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),t.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=xn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pl.origin.copy(this.object.position),Pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pl.direction))<sv?this.object.lookAt(this.target):(Ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pl.intersectPlane(Ep,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nu||this._lastTargetPosition.distanceToSquared(this.target)>Nu?(this.dispatchEvent(Sp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xn.setFromMatrixColumn(t,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,t){this.screenSpacePanning===!0?xn.setFromMatrixColumn(t,1):(xn.setFromMatrixColumn(t,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xn.copy(s).sub(this.target);let r=xn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function rv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function av(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ov(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=Xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Xt.DOLLY;break;case Ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Xt.ROTATE}break;case Ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Xt.PAN}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Fu)}function lv(i){switch(this.state){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Xt.NONE||(i.preventDefault(),this.dispatchEvent(Fu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tp))}function uv(i){this.enabled!==!1&&this._handleKeyDown(i)}function dv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Xt.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Xt.TOUCH_PAN;break;default:this.state=Xt.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Xt.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Xt.TOUCH_DOLLY_ROTATE;break;default:this.state=Xt.NONE}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Fu)}function fv(i){switch(this._trackPointer(i),this.state){case Xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Xt.NONE}}function pv(i){this.enabled!==!1&&i.preventDefault()}function mv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Dl=class extends Ss{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new sn;e.deleteAttribute("uv");let t=new Pt({side:gn}),n=new Pt,s=new Js(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ws(e,n,6),o=new Zt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new re(e,Qr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new re(e,Qr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new re(e,Qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new re(e,Qr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new re(e,Qr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new re(e,Qr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qr(i){return new za({color:0,emissive:16777215,emissiveIntensity:i})}var go=new P;function pi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;go.copy(e),go[n]=0,go.normalize();let c=.5*a/(a+o),h=1-go.angleTo(i)/l;return Math.sign(go[t])===1?h*c:o/(a+o)+c+c*(1-h)}var en=class i extends sn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,y=new P,b=.5/a;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:y.set(1,0,0),f[M+0]=pi(y,c,"z","y",r,n),f[M+1]=1-pi(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[M+0]=1-pi(y,c,"z","y",r,n),f[M+1]=1-pi(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[M+0]=1-pi(y,c,"x","z",r,e),f[M+1]=pi(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-pi(y,c,"x","z",r,e),f[M+1]=1-pi(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-pi(y,c,"x","y",r,e),f[M+1]=1-pi(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[M+0]=pi(y,c,"x","y",r,e),f[M+1]=1-pi(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Uu(i,e){if(e===ru)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Xr||e===uo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Xr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function wp(i){let e=new Map,t=new Map,n=i.clone();return Ap(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ap(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ap(i.children[n],e.children[n],t)}var Ll=class extends Xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Nl(t,Dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nl(t,Dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=gs.extractUrlBase(e);a=gs.resolveURL(c,this.path)}else a=gs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Br(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dp){try{a[Dt.KHR_BINARY_GLTF]=new id(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Dt.KHR_MATERIALS_UNLIT:a[u]=new Hu;break;case Dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new sd(r,this.dracoLoader);break;case Dt.KHR_TEXTURE_TRANSFORM:a[u]=new rd;break;case Dt.KHR_MESH_QUANTIZATION:a[u]=new ad;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function bv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function un(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zu=class{constructor(e){this.parser=e,this.name=Dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Gn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ki(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Js(h),c.distance=u;break;case"spot":c=new Xa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),$i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Hu=class{constructor(){this.name=Dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){let s=[];e.color=new Ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Jt))}return Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},qu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Xu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Jt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ju=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(r[0],r[1],r[2],Gn),Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IOR}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ju=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(r[0],r[1],r[2],Gn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Jt)),Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=Dt.EXT_MATERIALS_BUMP}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return un(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=Dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ed=class{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},td=class{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Nl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},nd=class{constructor(e){this.name=Dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let y=new dt,b=new P,m=new Fn,M=new P(1,1,1),A=new Ws(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),A.setMatrixAt(S,y.compose(b,m,M));let p=null;for(let S in l)if(S==="_COLOR_0"){let R=l[S];A.instanceColor=new cs(R.array,R.itemSize,R.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(p===null){let C=A.geometry;p=new Ot,p.name=C.name;for(let _ in C.attributes)p.setAttribute(_,C.attributes[_]);for(let _ in C.morphAttributes)p.morphAttributes[_]=C.morphAttributes[_];C.index!==null&&p.setIndex(C.index),p.morphTargetsRelative=C.morphTargetsRelative;for(let _ of C.groups)p.addGroup(_.start,_.count,_.materialIndex);C.boundingBox!==null&&(p.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(p.boundingSphere=C.boundingSphere.clone()),p.drawRange.start=C.drawRange.start,p.drawRange.count=C.drawRange.count,p.userData=Object.assign({},C.userData),A.geometry=p}let R=l[S];p.setAttribute(S,new cs(R.array,R.itemSize,R.normalized))}Zt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Dp="glTF",bo=12,Rp={JSON:1313821514,BIN:5130562},id=class{constructor(e){this.name=Dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-bo,r=new DataView(e,bo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Rp.JSON){let c=new Uint8Array(e,bo+a,o);this.content=n.decode(c)}else if(l===Rp.BIN){let c=bo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=cd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=cd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ea[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],b=l[g];b!==void 0&&(y.normalized=b)}u(f)},o,c,Gn,d)})})}},rd=class{constructor(){this.name=Dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ad=class{constructor(){this.name=Dt.KHR_MESH_QUANTIZATION}},Fl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,y=g-c,b=-2*f+3*d,m=f-d,M=1-b,A=m-d+u;for(let p=0;p!==o;p++){let S=a[y+p+o],R=a[y+p+l]*h,C=a[g+p+o],_=a[g+p]*h;r[p]=M*S+A*R+b*C+m*_}return r}},_v=new Fn,od=class extends Fl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return _v.fromArray(r).normalize().toArray(r),r}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cp={9728:nn,9729:on,9984:Bc,9985:Wr,9986:tr,9987:Pi},Pp={33071:li,33648:Sr,10497:yn},Ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xv={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Hs},Bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),i.DefaultMaterial}function sr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Mv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sv(i){let e,t=i.extensions&&i.extensions[Dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ku(t.attributes):e=i.indices+":"+ku(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ku(i.targets[n]);return e}function ku(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ld(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ev(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Tv=new dt,hd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Va(this.options.manager):this.textureLoader=new ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Br(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return sr(r,o,s),$i(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(gs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Ou[s.type],o=ea[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new pn(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Ou[s.type],c=ea[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,b;if(f&&f!==u){let m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,A=t.cache.get(M);A||(y=new c(o,m*f,s.count*f/h),A=new Pr(y,f/h),t.cache.add(M,A)),b=new Ir(A,l,d%f/h,g)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),b=new pn(y,l,g);if(s.sparse!==void 0){let m=Ou.SCALAR,M=ea[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,p=s.sparse.values.byteOffset||0,S=new M(a[1],A,s.sparse.count*m),R=new c(a[2],p,s.sparse.count*l);o!==null&&(b=new pn(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let C=0,_=S.length;C<_;C++){let E=S[C];if(b.setX(E,R[C*l]),l>=2&&b.setY(E,R[C*l+1]),l>=3&&b.setZ(E,R[C*l+2]),l>=4&&b.setW(E,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=g}return b})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Cp[d.magFilter]||on,h.minFilter=Cp[d.minFilter]||Pi,h.wrapS=Pp[d.wrapS]||yn,h.wrapT=Pp[d.wrapT]||yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==on,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let b=new mn(y);b.needsUpdate=!0,d(b)}),t.load(gs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),$i(u,a),u.userData.mimeType=a.mimeType||Ev(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Nr,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ls,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Pt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Dt.KHR_MATERIALS_UNLIT]){let u=s[Dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Gn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Jt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ln);let h=r.alphaMode||Bu.OPAQUE;if(h===Bu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Bu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rn){let u=r.emissiveFactor;o.emissive=new Ye().setRGB(u[0],u[1],u[2],Gn)}return r.emissiveTexture!==void 0&&a!==Rn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Jt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),$i(u,r),t.associations.set(u,{materials:e}),r.extensions&&sr(s,u,r),u})}createUniqueName(e){let t=Yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ip(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Sv(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Dt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ip(new Ot,c,t),c.mode===mi.TRIANGLE_STRIP?d=d.then(f=>Uu(f,uo)):c.mode===mi.TRIANGLE_FAN&&(d=d.then(f=>Uu(f,Xr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?vv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],b=a[f],m,M=c[f];if(b.mode===mi.TRIANGLES||b.mode===mi.TRIANGLE_STRIP||b.mode===mi.TRIANGLE_FAN||b.mode===void 0){let A=r.isSkinnedMesh===!0,p=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");A&&p===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&p?new Sa(y,M):new re(y,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(b.mode===mi.LINES)m=new qs(y,M);else if(b.mode===mi.LINE_STRIP)m=new hs(y,M);else if(b.mode===mi.LINE_LOOP)m=new Ta(y,M);else if(b.mode===mi.POINTS)m=new wa(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(m.geometry.morphAttributes).length>0&&Mv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),$i(m,r),b.extensions&&sr(s,m,b),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&sr(s,u[0],r),u[0];let d=new Ct;r.extensions&&sr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(ii.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ji(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new dt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ea(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,b=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],b=u[4],m=[];for(let A=0,p=d.length;A<p;A++){let S=d[A],R=f[A],C=g[A],_=y[A],E=b[A];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let L=n._createAnimationTracks(S,R,C,_,E);if(L)for(let F=0;F<L.length;F++)m.push(L[F])}let M=new Ga(r,void 0,m);return $i(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Tv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Dr:c.length>1?h=new Ct:c.length===1?h=c[0]:h=new Zt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),$i(h,r),r.extensions&&sr(n,h,r),r.matrix!==void 0){let u=new dt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ct;n.name&&(r.name=s.createUniqueName(n.name)),$i(r,n),n.extensions&&sr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(wp(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof An||d instanceof mn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ps[r.path]===Ps.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Ps[r.path]){case Ps.weights:h=fs;break;case Ps.rotation:h=ps;break;case Ps.translation:case Ps.scale:h=ws;break;default:switch(n.itemSize){case 1:h=fs;break;case 2:case 3:default:h=ws;break}break}let u=s.interpolation!==void 0?xv[s.interpolation]:Gs,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let y=new h(l[f]+"."+Ps[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ld(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ps?od:Fl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wv(i,e,t){let n=e.attributes,s=new wn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=ld(ea[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=ld(ea[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ip(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=cd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Tt.workingColorSpace!==Gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),$i(i,e),wv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?yv(i,e.targets,t):i})}var ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Av=new ji(-1,1,1,-1,0,1),ud=class extends Ot{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}},Rv=new ud,Is=class{constructor(e){this._mesh=new re(Rv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ul=class extends si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Is(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _o=class extends si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ol=class extends si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ul(ta),this.copyPass.material.blending=hn,this.timer=new Ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_o!==void 0&&(a instanceof _o?n=!0:a instanceof Ol&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var kl=class extends si{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var xo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new dt},cameraProjectionMatrixInverse:{value:new dt},cameraWorldMatrix:{value:new dt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},vo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},zl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Lp(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Cv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Gi(s,e,e);return r.wrapS=yn,r.wrapT=yn,r.needsUpdate=!0,r}function Cv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var yo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:dd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraProjectionMatrixInverse:{value:new dt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function dd(i,e,t){let n=Pv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Pv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new P(Math.cos(r),Math.sin(r),a))}return n}var Hl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,y=t-f,b,m;g>y?(b=1,m=0):(b=0,m=1);let M=g-b+h,A=y-m+h,p=g-1+2*h,S=y-1+2*h,R=l&255,C=c&255,_=this.perm[R+this.perm[C]]%12,E=this.perm[R+b+this.perm[C+m]]%12,L=this.perm[R+1+this.perm[C+1]]%12,F=.5-g*g-y*y;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[_],g,y));let U=.5-M*M-A*A;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[E],M,A));let G=.5-p*p-S*S;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[L],p,S)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,y=h-g,b=u-g,m=d-g,M=e-y,A=t-b,p=n-m,S,R,C,_,E,L;M>=A?A>=p?(S=1,R=0,C=0,_=1,E=1,L=0):M>=p?(S=1,R=0,C=0,_=1,E=0,L=1):(S=0,R=0,C=1,_=1,E=0,L=1):A<p?(S=0,R=0,C=1,_=0,E=1,L=1):M<p?(S=0,R=1,C=0,_=0,E=1,L=1):(S=0,R=1,C=0,_=1,E=1,L=0);let F=M-S+f,U=A-R+f,G=p-C+f,B=M-_+2*f,V=A-E+2*f,Y=p-L+2*f,J=M-1+3*f,he=A-1+3*f,q=p-1+3*f,te=h&255,Z=u&255,ze=d&255,xe=this.perm[te+this.perm[Z+this.perm[ze]]]%12,At=this.perm[te+S+this.perm[Z+R+this.perm[ze+C]]]%12,yt=this.perm[te+_+this.perm[Z+E+this.perm[ze+L]]]%12,Mt=this.perm[te+1+this.perm[Z+1+this.perm[ze+1]]]%12,Q=.6-M*M-A*A-p*p;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[xe],M,A,p));let ae=.6-F*F-U*U-G*G;ae<0?r=0:(ae*=ae,r=ae*ae*this._dot3(this.grad3[At],F,U,G));let Me=.6-B*B-V*V-Y*Y;Me<0?a=0:(Me*=Me,a=Me*Me*this._dot3(this.grad3[yt],B,V,Y));let je=.6-J*J-he*he-q*q;return je<0?o=0:(je*=je,o=je*je*this._dot3(this.grad3[Mt],J,he,q)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,y=(e+t+n+s)*l,b=Math.floor(e+y),m=Math.floor(t+y),M=Math.floor(n+y),A=Math.floor(s+y),p=(b+m+M+A)*c,S=b-p,R=m-p,C=M-p,_=A-p,E=e-S,L=t-R,F=n-C,U=s-_,G=E>L?32:0,B=E>F?16:0,V=L>F?8:0,Y=E>U?4:0,J=L>U?2:0,he=F>U?1:0,q=G+B+V+Y+J+he,te=a[q][0]>=3?1:0,Z=a[q][1]>=3?1:0,ze=a[q][2]>=3?1:0,xe=a[q][3]>=3?1:0,At=a[q][0]>=2?1:0,yt=a[q][1]>=2?1:0,Mt=a[q][2]>=2?1:0,Q=a[q][3]>=2?1:0,ae=a[q][0]>=1?1:0,Me=a[q][1]>=1?1:0,je=a[q][2]>=1?1:0,Fe=a[q][3]>=1?1:0,lt=E-te+c,Nt=L-Z+c,ce=F-ze+c,de=U-xe+c,ge=E-At+2*c,me=L-yt+2*c,Se=F-Mt+2*c,et=U-Q+2*c,Je=E-ae+3*c,st=L-Me+3*c,Oe=F-je+3*c,O=U-Fe+3*c,Lt=E-1+4*c,St=L-1+4*c,I=F-1+4*c,v=U-1+4*c,W=b&255,X=m&255,ee=M&255,_e=A&255,be=o[W+o[X+o[ee+o[_e]]]]%32,ne=o[W+te+o[X+Z+o[ee+ze+o[_e+xe]]]]%32,le=o[W+At+o[X+yt+o[ee+Mt+o[_e+Q]]]]%32,Ae=o[W+ae+o[X+Me+o[ee+je+o[_e+Fe]]]]%32,it=o[W+1+o[X+1+o[ee+1+o[_e+1]]]]%32,ve=.6-E*E-L*L-F*F-U*U;ve<0?h=0:(ve*=ve,h=ve*ve*this._dot4(r[be],E,L,F,U));let Ee=.6-lt*lt-Nt*Nt-ce*ce-de*de;Ee<0?u=0:(Ee*=Ee,u=Ee*Ee*this._dot4(r[ne],lt,Nt,ce,de));let Xe=.6-ge*ge-me*me-Se*Se-et*et;Xe<0?d=0:(Xe*=Xe,d=Xe*Xe*this._dot4(r[le],ge,me,Se,et));let tt=.6-Je*Je-st*st-Oe*Oe-O*O;tt<0?f=0:(tt*=tt,f=tt*tt*this._dot4(r[Ae],Je,st,Oe,O));let gt=.6-Lt*Lt-St*St-I*I-v*v;return gt<0?g=0:(gt*=gt,g=gt*gt*this._dot4(r[it],Lt,St,I,v)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var na=class i extends si{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Lp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new cn(this.width,this.height,{type:Sn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $t({defines:Object.assign({},xo.defines),uniforms:Pn.clone(xo.uniforms),vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ka,this.normalMaterial.blending=hn,this.pdMaterial=new $t({defines:Object.assign({},yo.defines),uniforms:Pn.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $t({defines:Object.assign({},vo.defines),uniforms:Pn.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $t({uniforms:Pn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Za,blendDst:$s,blendEquation:fi,blendSrcAlpha:Ja,blendDstAlpha:$s,blendEquationAlpha:fi}),this.blendMaterial=new $t({uniforms:Pn.clone(zl.uniforms),vertexShader:zl.vertexShader,fragmentShader:zl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Nc,blendSrc:Za,blendDst:$s,blendEquation:fi,blendSrcAlpha:Ja,blendDstAlpha:$s,blendEquationAlpha:fi}),this._fsQuad=new Is(null),this._originalClearColor=new Ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Vi,this.depthTexture.format=Yi,this.depthTexture.type=Rs,this.normalRenderTarget=new cn(this.width,this.height,{minFilter:nn,magFilter:nn,type:Sn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=dd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Hl,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Gi(s,e,e,Wn,Un);return r.wrapS=yn,r.wrapT=yn,r.needsUpdate=!0,r}};na.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Gl=class extends si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pn.clone(Mo.uniforms),this.material=new Or({name:Mo.name,uniforms:this.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this._fsQuad=new Is(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$a?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===no?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===io?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===to&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vl=class extends re{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new P(.70707,.70707,0),u=new Ye(t.sunColor!==void 0?t.sunColor:16777215),d=new Ye(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new P(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,y=t.side!==void 0?t.side:di,b=t.fog!==void 0?t.fog:!1,m=new Hn,M=new P,A=new P,p=new P,S=new dt,R=new P(0,0,-1),C=new Gt,_=new P,E=new P,L=new Gt,F=new dt,U=new an,G=new cn(s,r,{type:Sn}),B={name:"MirrorShader",uniforms:Pn.merge([Ne.fog,Ne.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new dt},sunColor:{value:new Ye(8355711)},sunDirection:{value:new P(.70707,.70707,0)},eye:{value:new P},waterColor:{value:new Ye(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},V=new $t({name:B.name,uniforms:Pn.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:y,fog:b});V.uniforms.mirrorSampler.value=G.texture,V.uniforms.textureMatrix.value=F,V.uniforms.alpha.value=o,V.uniforms.time.value=l,V.uniforms.normalSampler.value=c,V.uniforms.sunColor.value=u,V.uniforms.waterColor.value=d,V.uniforms.sunDirection.value=h,V.uniforms.distortionScale.value=g,V.uniforms.eye.value=f,n.material=V,n.onBeforeRender=function(Y,J,he){if(A.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(he.matrixWorld),S.extractRotation(n.matrixWorld),M.set(0,0,1),M.applyMatrix4(S),_.subVectors(A,p),_.dot(M)>0)return;_.reflect(M).negate(),_.add(A),S.extractRotation(he.matrixWorld),R.set(0,0,-1),R.applyMatrix4(S),R.add(p),E.subVectors(A,R),E.reflect(M).negate(),E.add(A),U.position.copy(_),U.up.set(0,1,0),U.up.applyMatrix4(S),U.up.reflect(M),U.lookAt(E),U.far=he.far,U.updateMatrixWorld(),U.projectionMatrix.copy(he.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(U.projectionMatrix),F.multiply(U.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(M,A),m.applyMatrix4(U.matrixWorldInverse),C.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let q=U.projectionMatrix;L.x=(Math.sign(C.x)+q.elements[8])/q.elements[0],L.y=(Math.sign(C.y)+q.elements[9])/q.elements[5],L.z=-1,L.w=(1+q.elements[10])/q.elements[14],C.multiplyScalar(2/C.dot(L)),q.elements[2]=C.x,q.elements[6]=C.y,q.elements[10]=C.z+1-a,q.elements[14]=C.w,f.setFromMatrixPosition(he.matrixWorld);let te=Y.getRenderTarget(),Z=Y.xr.enabled,ze=Y.shadowMap.autoUpdate;n.visible=!1,Y.xr.enabled=!1,Y.shadowMap.autoUpdate=!1,Y.setRenderTarget(G),Y.state.buffers.depth.setMask(!0),Y.autoClear===!1&&Y.clear(),Y.render(J,U),n.visible=!0,Y.xr.enabled=Z,Y.shadowMap.autoUpdate=ze,Y.setRenderTarget(te);let xe=he.viewport;xe!==void 0&&Y.state.viewport(xe)}}};var ia=class i extends re{constructor(){let e=i.SkyShader,t=new $t({name:e.name,uniforms:Pn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:gn,depthWrite:!1});super(new sn(1,1,1),t),this.isSky=!0}};ia.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Np=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var M=new Uint8Array(m.length),A=0;A<m.length;++A){var p=m.charCodeAt(A);M[A]=p>96?p-97:p>64?p-39:p+4}for(var S=0,A=0;A<m.length;++A)M[S++]=M[A]<60?n[M[A]]:(M[A]-60)*64+M[++A];return M.buffer.slice(0,S)}function l(m,M,A,p,S,R,C){var _=m.exports.sbrk,E=p+3&-4,L=_(E*S),F=_(R.length),U=new Uint8Array(m.exports.memory.buffer);U.set(R,F);var G=M(L,p,S,F,R.length);if(G==0&&C&&C(L,E,S),A.set(U.subarray(L,L+p*S)),_(L-_(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var M={object:new Worker(m),pending:0,requests:{}};return M.object.onmessage=function(A){var p=A.data;M.pending-=p.count,M.requests[p.id][p.action](p.value),delete M.requests[p.id]},M}function g(m){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+l.toString()+b.toString(),A=new Blob([M],{type:"text/javascript"}),p=URL.createObjectURL(A),S=u.length;S<m;++S)u[S]=f(p);for(var S=m;S<u.length;++S)u[S].object.postMessage({});u.length=m,URL.revokeObjectURL(p)}function y(m,M,A,p,S){for(var R=u[0],C=1;C<u.length;++C)u[C].pending<R.pending&&(R=u[C]);return new Promise(function(_,E){var L=new Uint8Array(A),F=++d;R.pending+=m,R.requests[F]={resolve:_,reject:E},R.object.postMessage({id:F,count:m,size:M,source:L,mode:p,filter:S},[L.buffer])})}function b(m){var M=m.data;self.ready.then(function(A){if(!M.id)return self.close();try{var p=new Uint8Array(M.count*M.size);l(A,A.exports[M.mode],p,M.count,M.size,M.source,A.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:p},[p.buffer])}catch(S){self.postMessage({id:M.id,count:M.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,M,A,p,S){l(r,r.exports.meshopt_decodeVertexBuffer,m,M,A,p,r.exports[c[S]])},decodeIndexBuffer:function(m,M,A,p){l(r,r.exports.meshopt_decodeIndexBuffer,m,M,A,p)},decodeIndexSequence:function(m,M,A,p){l(r,r.exports.meshopt_decodeIndexSequence,m,M,A,p)},decodeGltfBuffer:function(m,M,A,p,S,R){l(r,r.exports[h[S]],m,M,A,p,r.exports[c[R]])},decodeGltfBufferAsync:function(m,M,A,p,S){return u.length>0?y(m,M,A,h[p],c[S]):a.then(function(){var R=new Uint8Array(m*M);return l(r,r.exports[h[p]],R,m,M,A,r.exports[c[S]]),R})}}})();function Wl(i){let t=new Xs(i.map(n=>new pe(n[0],n[1]))).getSpacedPoints(600);return n=>{if(n<=t[0].x)return t[0].y;for(let s=1;s<t.length;s++)if(t[s].x>=n){let r=t[s-1],a=t[s],o=(n-r.x)/(a.x-r.x||1);return r.y+(a.y-r.y)*o}return t[t.length-1].y}}var Iv=i=>e=>{if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++)if(e<=i[t][0]){let n=i[t-1],s=i[t];return n[1]+(s[1]-n[1])*(e-n[0])/(s[0]-n[0])}return i[i.length-1][1]},$n=Wl([[0,.424],[.21,.48],[.43,.575],[.72,.636],[1,.645],[1.6,.645],[2.4,.645],[3.2,.645],[4.235,.645]]),ql=Wl([[0,0],[1.2,0],[2.25,0],[2.89,.048],[3.37,.16],[3.69,.287],[3.94,.424],[4.09,.533],[4.235,.645]]),Dv=Wl([[0,.742],[.5,.755],[1.3,.765],[2.2,.765],[3.05,.765]]),Lv=Iv([[3.05,.765],[3.91,.558],[4.235,0]]),qn=i=>i<=3.05?Dv(i):Lv(i),Nv=Wl([[0,.09],[1.2,.09],[2.09,.09],[2.57,.1],[2.89,.128],[3.37,.24],[3.69,.367],[3.85,.5],[3.94,.645]]),Fv=i=>i<2.6?.08:Math.max(0,.08*(1-(i-2.6)/1.34));function Xl(i){let e=$n(i),t=qn(i),n,s;return i>=3.94?(n=e,s=t):(n=Math.min(Nv(i),e),s=Math.max(0,t-Fv(i))),{k:[i,ql(i),0],c:[i,n,s],g:[i,e,t]}}var Fp=4.235,ut=-2,Bn=.2,Up=Bn,So=.42,Op=.1;function jl(i,e,t){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createImageData(e,e),a=(l,c)=>i[(c+e)%e*e+(l+e)%e];for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(a(c+1,l)-a(c-1,l))*t,u=(a(c,l+1)-a(c,l-1))*t,d=Math.hypot(h,u,1),f=(l*e+c)*4;r.data[f]=(-h/d*.5+.5)*255,r.data[f+1]=(u/d*.5+.5)*255,r.data[f+2]=(1/d*.5+.5)*255,r.data[f+3]=255}s.putImageData(r,0,0);let o=new ui(n);return o.wrapS=o.wrapT=yn,o.colorSpace=Di,o.anisotropy=8,o}function Kl(i,e,t){let n=e,s=()=>(n=n*16807%2147483647)/2147483647,r=new Float32Array(i*i).map(()=>s());for(let a=0;a<t;a++){let o=new Float32Array(r.length);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=0;for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++)h+=r[(l+u+i)%i*i+(c+d+i)%i];o[l*i+c]=h/9}r=o}return r}var Qi=null;function Uv(){if(Qi)return Qi;let i=256,e=Kl(i,7,2),t=512,n=new Float32Array(t*t),s=Kl(t,11,1);for(let g=0;g<t;g++)for(let y=0;y<t;y++){let b=y/t*10,m=g/t*10,M=Math.abs((b+m)%1-.5),A=Math.abs((b-m+40)%1-.5),p=Math.min(M,A);n[g*t+y]=Math.min(1,p*9)*.9+s[g*t+y]*.12}let r=Kl(256,23,3),a=new Float32Array(i*i),o=Kl(i,5,0);for(let g=0;g<i;g++)for(let y=0;y<i;y++)a[g*i+y]=.5+.25*Math.sin(y*1.6)*Math.sin(g*1.6)+o[g*i+y]*.25;let l=document.createElement("canvas");l.width=l.height=256;let c=l.getContext("2d");c.fillStyle="#b98c5a",c.fillRect(0,0,256,256);for(let g=0;g<90;g++){c.strokeStyle=`rgba(${90+Math.random()*40},${55+Math.random()*30},30,${.12+Math.random()*.2})`,c.lineWidth=1+Math.random()*2,c.beginPath();let y=Math.random()*256;c.moveTo(0,y);for(let b=0;b<=256;b+=16)c.lineTo(b,y+Math.sin(b/40+g)*4);c.stroke()}let h=new ui(l);h.wrapS=h.wrapT=yn,h.colorSpace=Jt;let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d");d.fillStyle="#b8763e",d.fillRect(0,0,256,256);for(let g=0;g<4e3;g++)d.fillStyle=`rgba(${120+Math.random()*60},${70+Math.random()*30},30,0.12)`,d.fillRect(Math.random()*256,Math.random()*256,2,1);d.fillStyle="#20150e";for(let g=0;g<4;g++)d.fillRect(0,g*64+58,256,6);let f=new ui(u);return f.wrapS=f.wrapT=yn,f.colorSpace=Jt,f.anisotropy=8,Qi={eva:f,sat:jl(e,i,1.2),dia:jl(n,512,3.2),weave:jl(a,i,1.5),ply:h,wav:jl(r,256,9)},Qi.sat.repeat.set(3,3),Qi.dia.repeat.set(2.2,2.2),Qi.dia.anisotropy=16,Qi.weave.repeat.set(10,10),Qi.ply.repeat.set(2,2),Qi.eva.repeat.set(4.5,4.5),Qi}var Ov=i=>new P(i[0]+ut,i[1],i[2]);function Ds(i,e,t){let n=[],s=[],r=[],a=0;for(let l=0;l<i.length;l++){l&&(a+=Math.hypot(i[l][0]-i[l-1][0],i[l][1]-i[l-1][1],i[l][2]-i[l-1][2]));let c=Math.hypot(e[l][0]-i[l][0],e[l][1]-i[l][1],e[l][2]-i[l][2]);if(n.push(i[l][0]+ut,i[l][1],i[l][2],e[l][0]+ut,e[l][1],e[l][2]),s.push(a,0,a,c),l){let h=2*(l-1),u=h+1,d=h+2,f=h+3;t?r.push(h,d,u,u,d,f):r.push(h,u,d,u,f,d)}}let o=new Ot;return o.setAttribute("position",new mt(n,3)),o.setAttribute("uv",new mt(s,2)),o.setIndex(r),o.computeVertexNormals(),o}var Yl=i=>[i[0],i[1],-i[2]];function sa(i,e,t=.014,n=0){let s=new Ti(i,{depth:t,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:10});return s.rotateX(Math.PI/2),s.translate(ut,e,0),s}function Bv(i,e,t,n,s){let r=new Cn;return r.moveTo(i+s,e),r.lineTo(t-s,e),r.quadraticCurveTo(t,e,t,e+s),r.lineTo(t,n-s),r.quadraticCurveTo(t,n,t-s,n),r.lineTo(i+s,n),r.quadraticCurveTo(i,n,i,n-s),r.lineTo(i,e+s),r.quadraticCurveTo(i,e,i+s,e),r}function _t(i,e,t,n,s,r,a,o=0){let l=o>0?new en(i,e,t,3,o):new sn(i,e,t),c=new re(l,n);return c.position.set(s+ut,r,a),c.castShadow=c.receiveShadow=!0,c}function In(i,e,t,n=!1,s=64){let r=new Ts(i.map(Ov),n,"centripetal"),a=new re(new Ks(r,s,e,10,n),t);return a.castShadow=!0,a}function Qt(i,e,t,n=24){let s=new re(new Vn(i,i,e,n),t);return s.castShadow=s.receiveShadow=!0,s}function kv(i,e={}){let t=document.createElement("canvas");t.className="b3d-canvas",i.prepend(t);let n;try{n=new Al({canvas:t,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{return t.remove(),null}let s=matchMedia("(pointer: coarse)").matches;n.setPixelRatio(s?Math.min(devicePixelRatio,1.75):Math.max(1.5,Math.min(devicePixelRatio,2))),n.outputColorSpace=Jt,n.toneMapping=Qs,n.toneMappingExposure=.92,n.shadowMap.enabled=!0,n.shadowMap.type=Zs,n.shadowMap.autoUpdate=!1;let r=3,a=(x=2)=>{r=Math.max(r,x)};n.setClearColor(0,0);let o=new Ss,l=new Zr(n);o.environment=l.fromScene(new Dl,.04).texture,o.environmentIntensity=.5;{let x=document.createElement("canvas");x.width=x.height=512;let T=x.getContext("2d"),D=T.createRadialGradient(230,180,20,256,256,420);D.addColorStop(0,"#2c3038"),D.addColorStop(.55,"#16181c"),D.addColorStop(1,"#0b0c0e"),T.fillStyle=D,T.fillRect(0,0,512,512);let N=new ui(x);N.colorSpace=Jt,o.background=N}let c=new an(30,1,.05,80);c.position.set(6.2,3.1,6.4);let h=new Il(c,t);h.enableDamping=!0,h.dampingFactor=.08,h.minDistance=2.2,h.maxDistance=14,h.maxPolarAngle=Math.PI*.53,h.target.set(0,.85,0),h.zoomToCursor=!0;let u=new Ki("#ffffff",2.9);u.position.set(4,7,4.5),u.castShadow=!0,u.shadow.mapSize.set(s?1024:2048,s?1024:2048),Object.assign(u.shadow.camera,{left:-4.5,right:4.5,top:4.5,bottom:-4.5,near:1,far:20}),u.shadow.radius=5,u.shadow.bias=-4e-4,u.shadow.normalBias=.02,o.add(u);let d=new Ki("#cfe0ff",.6);d.position.set(-5,3,-3),o.add(d),o.add(new Wa("#e8eefc","#1a1c20",.22));let f=new Ki("#ffe2c4",1.2);f.position.set(-3,4,6),o.add(f);let g=new re(new Ca(9,64),new Ba({opacity:.42}));g.rotation.x=-Math.PI/2,g.receiveShadow=!0,o.add(g);let y=document.createElement("canvas");y.width=y.height=256;let b=y.getContext("2d"),m=b.createRadialGradient(128,128,0,128,128,128);m.addColorStop(0,"rgba(255,255,255,0.10)"),m.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=m,b.fillRect(0,0,256,256);let M=new re(new wi(12,12),new Rn({map:new ui(y),transparent:!0,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.001,o.add(M);let A=Uv(),p={hull:new Pt({color:"#3b3f45",roughness:.48,metalness:0,side:ln,normalMap:A.sat,normalScale:new pe(.25,.25)}),deck:new Pt({color:"#3b3f45",roughness:.66,metalness:0,side:ln,normalMap:A.dia,normalScale:new pe(.9,.9)}),inner:new Pt({color:"#18191c",roughness:.9,side:ln}),rub:new Pt({color:"#141518",roughness:.5}),alu:new Pt({color:"#c9ccd0",roughness:.28,metalness:.9}),steel:new Pt({color:"#d7dade",roughness:.18,metalness:1}),black:new Pt({color:"#101113",roughness:.35,metalness:.2}),rubber:new Pt({color:"#111",roughness:.92}),glass:new Mn({color:"#a9bccb",roughness:.04,metalness:0,transparent:!0,opacity:.28,side:ln,envMapIntensity:1.6,depthWrite:!1}),vinyl:new Pt({color:"#e9e6df",roughness:.55}),vinylDark:new Pt({color:"#2a2c30",roughness:.6}),fabric:new Pt({color:"#45484e",roughness:.95,normalMap:A.weave,normalScale:new pe(.5,.5),side:ln}),ply:new Pt({map:A.ply,roughness:.75}),galv:new Pt({color:"#b9bdc0",roughness:.42,metalness:.85}),carpet:new Pt({color:"#2b2d31",roughness:1}),red:new Pt({color:"#c3161c",roughness:.3,emissive:"#3a0003"}),amber:new Pt({color:"#e08a10",roughness:.3}),screen:new Pt({color:"#0b1a2a",roughness:.15,emissive:"#0a2a44",emissiveIntensity:.6}),orange:new Pt({color:"#ff6b1a",roughness:.45}),wood:new Pt({color:"#c49a68",roughness:.6}),cowl:new Mn({color:"#111214",roughness:.25,clearcoat:1,clearcoatRoughness:.12}),cowlLow:new Pt({color:"#2a2c30",roughness:.45}),cowlWhite:new Mn({color:"#e9ecef",roughness:.3,clearcoat:1,clearcoatRoughness:.15}),legMat:new Pt({color:"#1a1b1e",roughness:.35,metalness:.2}),frame:new Pt({color:"#9ea3a8",roughness:.35,metalness:.8}),panel:new Pt({color:"#4a4e54",roughness:.55,side:ln}),eva:new Pt({map:A.eva,roughness:.92}),navR:new Pt({color:"#ff2a2a",emissive:"#ff1010",emissiveIntensity:1.2}),navG:new Pt({color:"#2aff6a",emissive:"#10ff50",emissiveIntensity:1.2}),navW:new Pt({color:"#ffffff",emissive:"#fff6dd",emissiveIntensity:1.4}),floor:new Pt({color:"#4d3c30",roughness:.78,normalMap:A.sat,normalScale:new pe(.35,.35),side:ln})},S=new Ct;o.add(S);let R=new Ct;S.add(R);let C={},_=x=>C[x]||(C[x]=(()=>{let T=new Ct;return T.name=x,R.add(T),T})()),E=(x,T)=>(T.castShadow=T.receiveShadow=!0,x.add(T),T),L=[];for(let x=0;x<=120;x++){let T=x/120;L.push(Fp*(T<.7?T/.7*.62:.62+(T-.7)/.3*.38))}let F=L.map(Xl),U=_("base"),G=new Ct;U.add(G);let B=F.map(x=>x.k),V=F.map(x=>x.c),Y=F.map(x=>x.g);E(G,new re(Ds(B,V,!1),p.hull)),E(G,new re(Ds(B.map(Yl),V.map(Yl),!0),p.hull)),E(G,new re(Ds(V,Y,!1),p.hull)),E(G,new re(Ds(V.map(Yl),Y.map(Yl),!0),p.hull));{let x=F[0],T=new Cn;T.moveTo(0,x.k[1]),T.lineTo(x.c[2],x.c[1]),T.lineTo(x.g[2],x.g[1]),T.lineTo(-x.g[2],x.g[1]),T.lineTo(-x.c[2],x.c[1]),T.closePath();let D=new Ti(T,{depth:.016,bevelEnabled:!1});D.rotateY(-Math.PI/2),D.translate(ut+.016,0,0),E(G,new re(D,p.hull)),E(U,_t(.03,.22,.3,p.black,-.004,.31,0))}E(U,In(Y.filter((x,T)=>x[0]>.02&&x[0]<4.2).map(x=>[x[0],x[1]-.012,x[2]+.008]),.018,p.rub,!1,160)),E(U,In(Y.filter((x,T)=>x[0]>.02&&x[0]<4.2).map(x=>[x[0],x[1]-.012,-x[2]-.008]),.018,p.rub,!1,160)),E(U,In(V.filter(x=>x[0]>.01&&x[0]<3.92).map(x=>[x[0],x[1],x[2]+.002]),.005,p.hull,!1,120)),E(U,In(V.filter(x=>x[0]>.01&&x[0]<3.92).map(x=>[x[0],x[1],-x[2]-.002]),.005,p.hull,!1,120)),E(U,In(B.filter(x=>x[0]>.01&&x[0]<4.22).map(x=>[x[0],x[1]-.002,0]),.007,p.hull,!1,140));{let x=new re(new Yn(.025,.006,8,20),p.steel);x.position.set(4.06+ut,.57,0),x.rotation.y=Math.PI/2,E(U,x)}function J(x,T,D,N,z,ie){let se=_(x),we=document.createElement("canvas");we.width=2048,we.height=512,T(we.getContext("2d"));let ye=new ui(we);ye.colorSpace=Jt,ye.anisotropy=8;let Ie=new Pt({map:ye,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1});for(let ft of[1,-1]){let ke=[],Ce=[],Ve=[];for(let Ge=0;Ge<=40;Ge++){let ue=D+(N-D)*Ge/40,De=Xl(ue);for(let Le of[z,ie]){let qe=De.c[1]+(De.g[1]-De.c[1])*Le,ot=De.c[2]+(De.g[2]-De.c[2])*Le;ke.push(ue+ut,qe,ft*(ot+.004)),Ce.push(ft>0?Ge/40:1-Ge/40,Le===z?0:1)}if(Ge){let Le=2*(Ge-1);ft>0?Ve.push(Le,Le+2,Le+1,Le+1,Le+2,Le+3):Ve.push(Le,Le+1,Le+2,Le+1,Le+3,Le+2)}}let ct=new Ot;ct.setAttribute("position",new mt(ke,3)),ct.setAttribute("uv",new mt(Ce,2)),ct.setIndex(Ve),ct.computeVertexNormals();let Ut=new re(ct,Ie);Ut.renderOrder=2,se.add(Ut)}}let he=(x,T,D,N)=>{x.save(),x.translate(T,D),x.fillStyle="#c3161c",x.beginPath(),x.moveTo(0,-N/2),x.bezierCurveTo(N*.45,-N*.2,N*.45,N*.25,N*.05,N*.42),x.lineTo(0,N*.42),x.closePath(),x.fill(),x.fillStyle="#2d5bd2",x.beginPath(),x.moveTo(-N*.04,-N*.3),x.bezierCurveTo(-N*.3,-N*.05,-N*.3,N*.25,-N*.04,N*.42),x.closePath(),x.fill(),x.restore()};J("gfx_text",x=>{x.fillStyle="#ffffff",x.font="italic 600 150px Inter, Arial, sans-serif",x.textBaseline="middle",x.fillText("\u041F\u0430\u0440\u0443\u0441  420 J",520,230),he(x,1480,300,240),x.font="italic 500 56px Inter, Arial, sans-serif",x.fillText("\u041D\u0430\u0448\u0438 \u041B\u043E\u0434\u043A\u0438",1390,465)},.45,2.25,.36,.92),J("gfx_stripe",x=>{x.fillStyle="#ff6b1a",x.beginPath(),x.moveTo(0,420),x.bezierCurveTo(700,410,1300,330,2048,90),x.lineTo(2048,150),x.bezierCurveTo(1300,380,700,462,0,470),x.closePath(),x.fill()},.45,3.4,.22,.92);let q=L.filter(x=>x<=3.25),te=x=>qn(x)-Op,Z=x=>qn(x)-Op-.035;E(G,new re(Ds(q.map(x=>[x,$n(x)+.001,qn(x)]),q.map(x=>[x,$n(x)+.001,te(x)]),!0),p.hull)),E(G,new re(Ds(q.map(x=>[x,$n(x)+.001,-qn(x)]),q.map(x=>[x,$n(x)+.001,-te(x)]),!1),p.hull));let ze=q.filter(x=>x>=.5);E(G,new re(Ds(ze.map(x=>[x,$n(x),te(x)]),ze.map(x=>[x,Bn,Z(x)]),!0),p.hull)),E(G,new re(Ds(ze.map(x=>[x,$n(x),-te(x)]),ze.map(x=>[x,Bn,-Z(x)]),!1),p.hull));{let x=new Cn,T=.94,D=3.25;x.moveTo(T,-Z(T));let N=L.filter(z=>z>T&&z<D);N.forEach(z=>x.lineTo(z,-Z(z))),x.lineTo(D,-Z(D)),x.lineTo(D,Z(D)),[...N].reverse().forEach(z=>x.lineTo(z,Z(z))),x.lineTo(T,Z(T)),x.closePath(),E(U,new re(sa(x,Bn,.02),p.floor)),E(U,_t(.012,.645-Bn,2*Z(3.25),p.hull,3.25,(.645+Bn)/2,0));for(let z=1.1;z<3.2;z+=.18)for(let ie of[-.45,0,.45]){let se=new re(new Vn(.007,.007,.004,8),p.black);se.position.set(z+ut,Bn+.002,ie),U.add(se)}}for(let x of[1,-1]){let ie=new Cn;ie.moveTo(.94,x*(Z(.94)-.12)),ie.lineTo(2.63,x*(Z(2.63)-.12)),ie.lineTo(2.63,x*Z(2.63)),ie.lineTo(.94,x*Z(.94)),ie.closePath(),E(U,new re(sa(ie,.44,.012),p.hull));for(let se=1.2;se<2.6;se+=.42)E(U,_t(.012,.16,.1,p.hull,se,.44-.09,x*(Z(se)-.05)))}{for(let T of[1,-1]){let D=new Cn;D.moveTo(.02,T*.24),D.lineTo(.51,T*.24),D.lineTo(.51,T*te(.51)),D.lineTo(.02,T*te(.02)),D.closePath(),E(U,new re(sa(D,.4,.016),p.deck))}E(U,_t(.49,.016,.48,p.deck,.265,.27,0));for(let T of[1,-1])E(U,_t(.49,.13,.012,p.hull,.265,.335,T*.24));E(U,_t(.012,.13,.48,p.hull,.51,.335,0)),E(U,_t(.012,So-Bn,2*Z(.51),p.hull,.51,(So+Bn)/2,0))}let xe=[];function At({g:x,x0:T,x1:D,z0:N,z1:z,y:ie,hinge:se,mat:we=p.deck,tubDepth:ye=.2,floorPart:Ie,label:ft}){let ke=D-T,Ce=z-N,Ve=(T+D)/2,pt=(N+z)/2,ct=new Ct,Ut=p.inner,Ge=.008;ct.add(_t(ke,Ge,Ce,Ut,Ve,ie-ye,pt)),ct.add(_t(Ge,ye,Ce,Ut,T,ie-ye/2,pt)),ct.add(_t(Ge,ye,Ce,Ut,D,ie-ye/2,pt)),ct.add(_t(ke,ye,Ge,Ut,Ve,ie-ye/2,N)),ct.add(_t(ke,ye,Ge,Ut,Ve,ie-ye/2,z)),x.add(ct),Ie&&_(Ie).add(_t(ke-.03,.012,Ce-.03,p.ply,Ve,ie-ye+.012,pt));let ue=new Ct,De=se==="aft"?T:D;ue.position.set(De+ut,ie+.002,pt),x.add(ue);let Le=Bv(-ke/2+.006,-Ce/2+.006,ke/2-.006,Ce/2-.006,.035),qe=new Ti(Le,{depth:.012,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:2});qe.rotateX(Math.PI/2),qe.translate((se==="aft"?1:-1)*ke/2,.012,0);let ot=new re(qe,we);ot.castShadow=ot.receiveShadow=!0,ue.add(ot);let Qe=new re(new Vn(.018,.018,.006,20),p.black);Qe.position.set((se==="aft"?1:-1)*(ke-.06),.015,Ce*.28),ue.add(Qe);for(let We of[-Ce/2+.07,Ce/2-.07]){let Rt=new re(new sn(.05,.008,.035),p.black);Rt.position.set((se==="aft"?1:-1)*.02,.014,We),ue.add(Rt)}let ht={pivot:ue,lid:ot,sign:se==="aft"?1:-1,t:0,target:0,max:1.85,label:ft,floorPart:Ie};return ot.userData.hatch=ht,Qe.userData.hatch=ht,xe.push(ht),ht}{let x=_("base"),T=So,D=new Cn,N=.51,z=.94;D.moveTo(N,-te(N)),D.lineTo(z,-Z(z)),D.lineTo(z,Z(z)),D.lineTo(N,te(N)),D.closePath();for(let ie of[1,-1]){let se=new us,we=ie>0?.035:-.525,ye=ie>0?.525:-.035;se.moveTo(.558,we),se.lineTo(.909,we),se.lineTo(.909,ye),se.lineTo(.558,ye),se.closePath(),D.holes.push(se)}E(x,new re(sa(D,T,.016),p.deck)),E(x,_t(.012,So-Bn,2*Z(.94),p.hull,.94,(So+Bn)/2,0)),At({g:x,x0:.558,x1:.909,z0:.035,z1:.525,y:T,hinge:"aft",tubDepth:.19,floorPart:"floor_aft",label:"\u0420\u0443\u043D\u0434\u0443\u043A \u043B\u0435\u0432\u044B\u0439"}),At({g:x,x0:.558,x1:.909,z0:-.525,z1:-.035,y:T,hinge:"aft",tubDepth:.19,floorPart:"floor_aft",label:"\u0420\u0443\u043D\u0434\u0443\u043A \u043F\u0440\u0430\u0432\u044B\u0439"})}{let x=_("base"),T=.645,D=3.25,N=new Cn,z=L.filter(se=>se>D);N.moveTo(D,-qn(D)),z.forEach(se=>N.lineTo(se,-qn(se))),[...z].reverse().forEach(se=>N.lineTo(se,qn(se))),N.lineTo(D,qn(D)),N.closePath();let ie=new us;ie.moveTo(3.56,-.285),ie.lineTo(3.94,-.285),ie.lineTo(3.94,.285),ie.lineTo(3.56,.285),ie.closePath(),N.holes.push(ie),E(x,new re(sa(N,T+.014,.016),p.deck)),At({g:x,x0:3.56,x1:3.94,z0:-.285,z1:.285,y:T+.014,hinge:"fore",tubDepth:.3,floorPart:"floor_anchor",label:"\u042F\u043A\u043E\u0440\u043D\u044B\u0439 \u0440\u0443\u043D\u0434\u0443\u043A"})}let yt=[];{let x=_("base");for(let T of[-1]){let N=Z(2.9),z=new Cn;z.moveTo(2.63,Bn),z.lineTo(3.25,Bn),z.lineTo(3.25,.645),z.lineTo(2.63,.74),z.closePath();let ie=new Ti(z,{depth:N-.1,bevelEnabled:!1});ie.translate(ut,0,T>0?.1:-N),E(x,new re(ie,p.hull));let se=T*.38,we=.36,ye=.33,Ie=.3;E(x,_t(.004,Ie,we,p.inner,2.627,ye+Ie/2,se));let ft=new Ct;ft.position.set(2.622+ut,ye,se),x.add(ft);let ke=new en(.014,Ie-.01,we-.01,2,.004);ke.translate(0,(Ie-.01)/2,0);let Ce=new re(ke,p.deck);Ce.castShadow=!0,ft.add(Ce);let Ve=new re(new sn(.02,.025,.09),p.black);Ve.position.set(-.012,Ie-.05,0),ft.add(Ve);let pt={pivot:ft,lid:Ce,axis:"door",t:0,target:0,max:1.35,label:"\u0411\u0430\u0440\u0434\u0430\u0447\u043E\u043A \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438",view:[-1,.32,.22],dist:1.9,ghost:!0};Ce.userData.hatch=pt,Ve.userData.hatch=pt,xe.push(pt)}}{let ke=function(Ge,ue,De){let Le=zt=>De(N(zt)),qe=ie,ot=we(Ge),Qe=ye(Ge),ht=se,We=z(qe,ht,Ie),Rt=z(ot,Qe,Ie);D([qe,ot,Rt,qe,Rt,We].map(Le),p.panel,ue),D([We,Rt,Qe,We,Qe,ht].map(Le),p.glass,ue);let Tn=(zt,Kt=.012)=>{let _i=new re(new Ks(new Ts(zt.map(Eo=>new P(...Le(Eo))),!1,"catmullrom",0),8*zt.length,Kt,8,!1),T);return _i.castShadow=!0,ue.add(_i),_i};return[Tn([We,Rt]),Tn([Rt,Qe,ht,We],.011)]},x=_("base"),T=p.frame,D=(Ge,ue,De=x)=>{let Le=[];Ge.forEach(Qe=>Le.push(Qe[0],Qe[1],Qe[2]));let qe=new Ot;qe.setAttribute("position",new mt(Le,3)),qe.computeVertexNormals();let ot=new re(qe,ue);return ot.castShadow=ue!==p.glass,De.add(ot),ot},N=Ge=>[Ge[0]+ut,Ge[1],Ge[2]],z=(Ge,ue,De)=>[Ge[0]+(ue[0]-Ge[0])*De,Ge[1]+(ue[1]-Ge[1])*De,Ge[2]+(ue[2]-Ge[2])*De],ie=[3.36,.645,0],se=[2.84,1.19,0],we=Ge=>[3.17,.645,Ge*.7],ye=Ge=>[2.7,1.17,Ge*.62],Ie=.3,ft=Ge=>[[2,.645,Ge*.72],[3.17,.645,Ge*.7],[2.7,1.17,Ge*.62],[2.12,.85,Ge*.665]];ke(-1,x,Ge=>Ge);let Ce=new P(...N(ie)),Ve=new P(...N(se)),pt=new Ct;pt.position.copy(Ce),x.add(pt);let ct=pt.children.length;ke(1,pt,Ge=>[Ge[0]-Ce.x,Ge[1]-Ce.y,Ge[2]-Ce.z]);for(let Ge of[.22,.62]){let ue=new P(...N(z(ie,se,Ge))).sub(Ce),De=new re(new sn(.03,.06,.035),p.black);De.position.copy(ue),pt.add(De)}let Ut={pivot:pt,lid:pt.children[ct],axisVec:Ce.clone().sub(Ve).normalize(),t:0,target:0,max:1.5,label:"\u0414\u0432\u0435\u0440\u0446\u0430 \u0432 \u0441\u0442\u0435\u043A\u043B\u0435",view:[-1,.6,.15],dist:2.8};pt.children.forEach(Ge=>{Ge.userData.hatch=Ut}),xe.push(Ut);for(let Ge of[1,-1]){let ue=ft(Ge);D([ue[0],ue[1],ue[2],ue[0],ue[2],ue[3]].map(N),p.glass),E(x,In([ue[0],ue[3],ue[2],ue[1]],.011,T,!1,30)),E(x,In([ue[0],ue[1]],.009,T,!1,6))}E(x,In([we(1),ie,we(-1)],.009,T,!1,10))}_("plank").add(_t(.3,.03,2*Z(1.75)-.02,p.floor,1.75,.465,0,.006));{let x=_("kringolin");for(let T of[1,-1]){let D=new Cn;D.moveTo(.02,.214),D.lineTo(-.4,.287),D.lineTo(-.4,.424),D.lineTo(.02,.424),D.closePath();let N=.24,z=.32,ie=.718,se=new Ti(D,{depth:ie-N,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2});se.translate(ut,0,T>0?N:-ie),E(x,new re(se,p.hull));let we=new Cn;we.moveTo(.02,T*N),we.lineTo(-.4,T*z),we.lineTo(-.4,T*ie),we.lineTo(.02,T*ie),we.closePath(),E(x,new re(sa(we,.431,.006),p.deck)),E(x,In([[0,.424,T*(ie+.008)],[-.4,.424,T*(ie+.008)]],.014,p.rub,!1,4));let ye=_("kring_hatch"),Ie=new re(new Vn(.105,.105,.012,40),p.black);Ie.position.set(-.19+ut,.44,T*.5),ye.add(Ie);let ft=new re(new Vn(.09,.09,.016,40),p.deck);ft.position.set(-.19+ut,.446,T*.5),ft.castShadow=!0,ye.add(ft);let ke=new re(new sn(.11,.012,.02),p.black);ke.position.set(-.19+ut,.456,T*.5),ye.add(ke)}}{let x=_("kringolin");for(let D of[1,-1]){x.add(_t(.03,.03,.03,p.steel,-.33,.447,D*.66));let N=Qt(.009,.16,p.steel,10);N.rotation.z=Math.PI/2,N.position.set(-.33+ut,.465,D*.66),x.add(N)}let T=Qt(.02,.02,p.steel,14);T.rotation.z=Math.PI/2,T.position.set(-.008+ut,.06,.12),_("base").add(T)}{let x=_("redan");for(let N of[1,-1]){let z=[];for(let ie=.15;ie<=3;ie+=.15){let se=Xl(ie),we=.48;z.push([ie,se.k[1]+(se.c[1]-se.k[1])*we-.012,N*se.c[2]*we])}E(x,In(z,.016,p.hull,!1,60))}let T=_("keelguard"),D=[];for(let N=.25;N<=4;N+=.1)D.push([N,ql(N)-.014,0]);T.add(In(D,.02,p.rub,!1,120))}{let x=_("rails");for(let T of[1,-1]){let D=[[3.35,.82,T*.6],[3.7,.82,T*.52],[3.98,.82,T*.36]];E(x,In(D,.012,p.steel,!1,30));for(let N of[[3.35,0,T*.6],[3.7,0,T*.52],[3.98,0,T*.36]]){let z=Qt(.011,.16,p.steel,12);z.position.set(N[0]+ut,.74,N[2]),x.add(z)}}}{let x=_("luvers");for(let T of[1,-1])for(let D=.7;D<2.7;D+=.33){let N=new re(new Yn(.011,.004,6,14),p.steel);N.position.set(D+ut,$n(D)-.045,T*(qn(D)+.012)),x.add(N)}}{let x=_("oars");for(let T of[1,-1]){let D=T*(Z(1.8)-.06),N=.47,z=Qt(.018,1.7,p.alu,12);z.rotation.z=Math.PI/2,z.position.set(1.65+ut,N,D),x.add(z);let ie=new re(new en(.45,.012,.14,2,.005),p.black);ie.position.set(2.55+ut,N,D),ie.castShadow=!0,x.add(ie);let se=Qt(.022,.16,p.rubber,12);se.rotation.z=Math.PI/2,se.position.set(.88+ut,N,D),x.add(se);let we=new re(new Yn(.03,.006,6,16,Math.PI),p.steel);we.position.set(1.75+ut,.67,T*(qn(1.75)-.05)),we.rotation.y=Math.PI/2,x.add(we);let ye=Qt(.016,.03,p.black,12);ye.position.set(1.75+ut,.652,T*(qn(1.75)-.05)),x.add(ye)}}{let x=_("shelf_boxes");for(let T of[1,-1])for(let D of[1.05,1.62,2.19]){let N=T*(Z(D+.2)-.07);x.add(_t(.48,.2,.13,p.hull,D+.24,.31,N,.006)),x.add(_t(.36,.13,.004,p.deck,D+.24,.31,N-T*.067)),x.add(_t(.08,.015,.012,p.black,D+.24,.355,N-T*.072))}}{let x=_("echo_bracket");x.add(_t(.03,.08,.03,p.black,2.72,.76,-.4));let T=_t(.05,.13,.19,p.black,2.71,.84,-.4,.01);T.rotation.z=.25,x.add(T);let D=_t(.006,.105,.16,p.screen,2.684,.845,-.4);D.rotation.z=.25,x.add(D);let N=_("echo_tub");N.add(_t(.05,.1,.16,p.hull,-.02,.11,-.46,.008)),N.add(_t(.04,.03,.09,p.black,-.03,.05,-.46,.006))}{let x=_("speakers"),T=_t(.1,.16,.42,p.hull,2.58,.66,.3,.01);x.add(T);for(let D of[.17,.43]){let N=new re(new Vn(.05,.05,.012,28),p.black);N.rotation.z=Math.PI/2,N.position.set(2.527+ut,.66,D),x.add(N);let z=new re(new Vn(.018,.018,.014,16),p.steel);z.rotation.z=Math.PI/2,z.position.set(2.524+ut,.66,D),x.add(z)}x.add(_t(.012,.05,.13,p.screen,2.528,.66,.3))}{let x=_("table"),T=Z(1.75)-.14;x.add(_t(.38,.018,.3,p.wood,1.75,.62,T-.06,.006));let D=Qt(.016,.17,p.alu,12);D.position.set(1.75+ut,.53,T),x.add(D)}{let x=_("bench_box");x.add(_t(.42,.3,.9,p.hull,1.45,Bn+.16,0,.015)),x.add(_t(.44,.07,.92,p.vinylDark,1.45,Bn+.345,0,.03));for(let T of[-.2,.2])x.add(_t(.012,.03,.12,p.black,1.235,Bn+.24,T))}function Mt(x,T,D,N){let z=N?jn(x):_(x),ie=N?N.fy:Up,se=new Ct;z.add(se),se.position.set(N?N.x:2.25+ut,0,T);let we=D==="amort"?.36:.34;if(D==="amort"){let Ve=Qt(.11,.012,p.alu,24);Ve.position.y=ie+.02,se.add(Ve);let pt=Qt(.035,we,p.alu,16);pt.position.y=ie+we/2,se.add(pt);let ct=Qt(.045,.12,p.black,16);ct.position.y=ie+.1,se.add(ct)}else{let Ve=new re(new en(.4,we,.4,2,.008),p.ply);Ve.position.y=ie+we/2,Ve.castShadow=!0,se.add(Ve)}let ye=ie+we+.02,Ie=new re(new en(.46,.1,.46,4,.04),p.vinyl);Ie.position.y=ye+.05,Ie.castShadow=!0,se.add(Ie);let ft=new re(new en(.48,.03,.48,3,.012),p.vinylDark);ft.position.y=ye,se.add(ft);let ke=new re(new en(.09,.42,.46,4,.04),p.vinyl);ke.position.set(-.22,ye+.27,0),ke.rotation.z=-.12,ke.castShadow=!0,se.add(ke);let Ce=new re(new en(.03,.36,.4,3,.012),p.vinylDark);return Ce.position.set(-.27,ye+.27,0),Ce.rotation.z=-.12,se.add(Ce),z}{let x=_("console"),T=new Ct;T.position.set(2.6+ut,.86,-.33),T.rotation.z=.55,x.add(T);let D=new re(new Yn(.17,.016,12,48),p.black);D.rotation.y=Math.PI/2,T.add(D);for(let we=0;we<3;we++){let ye=new re(new sn(.012,.17,.018),p.steel);ye.position.y=.085;let Ie=new Ct;Ie.rotation.x=we*Math.PI*2/3,Ie.add(ye),T.add(Ie)}let N=Qt(.035,.05,p.black,20);N.rotation.z=Math.PI/2,T.add(N);let z=Qt(.02,.14,p.black,12);z.rotation.z=Math.PI/2,z.position.set(2.66+ut,.83,-.33),z.rotation.z=Math.PI/2+.55,x.add(z),x.add(_t(.14,.06,.1,p.black,2.66,.735,-.1,.012));let ie=Qt(.008,.16,p.steel,8);ie.position.set(2.63+ut,.81,-.1),ie.rotation.z=.5,x.add(ie);let se=new re(new Wi(.022,16,12),p.black);se.position.set(2.59+ut,.88,-.1),x.add(se)}{let x=_("tent_run"),T=[],D=2.66,N=.62,z=14,ie=18;for(let ct=0;ct<=z;ct++){let Ut=D+(N-D)*ct/z,Ge=qn(Ut)-.03,ue=$n(Ut)+.01,De=1.17-.12*ct/z,Le=[];for(let qe=0;qe<=ie;qe++){let ot=Math.PI*qe/ie;Le.push([Ut,ue+(De-ue)*Math.pow(Math.sin(ot),.55),Ge*Math.cos(ot)])}T.push(Le)}let se=[],we=[],ye=[];T.forEach((ct,Ut)=>ct.forEach((Ge,ue)=>{se.push(Ge[0]+ut,Ge[1],Ge[2]),ye.push(Ut/z*2.2,ue/ie*2.4)}));for(let ct=0;ct<z;ct++)for(let Ut=0;Ut<ie;Ut++){let Ge=ct*(ie+1)+Ut,ue=Ge+ie+1;we.push(Ge,ue,Ge+1,ue,ue+1,Ge+1)}let Ie=new Ot;Ie.setAttribute("position",new mt(se,3)),Ie.setAttribute("uv",new mt(ye,2)),Ie.setIndex(we),Ie.computeVertexNormals(),E(x,new re(Ie,p.fabric));for(let ct of[0,5,10,14])E(x,In(T[ct].map(Ut=>[Ut[0],Ut[1]+.005,Ut[2]]),.009,p.alu,!1,30));let ft=T[z],ke=[];ft.forEach(ct=>ke.push(ct[0]+ut,ct[1],ct[2]));let Ce=ft.length;ke.push(N+ut,$n(N)+.01,0);let Ve=[];for(let ct=0;ct<Ce-1;ct++)Ve.push(Ce,ct,ct+1);let pt=new Ot;pt.setAttribute("position",new mt(ke,3)),pt.setIndex(Ve),pt.computeVertexNormals(),E(x,new re(pt,p.fabric))}{let x=_("tent_trans"),T=40,D=22,N=[];for(let Ce=0;Ce<=T;Ce++){let Ve=-.03+4.25*Ce/T,pt=qn(Math.max(0,Math.min(4.2,Ve)))+.03,ct=$n(Math.max(0,Ve))-.07,Ut=$n(Math.max(0,Ve))+.12;Ve>1.9&&Ve<3.45&&(Ut=Math.max(Ut,.645+.6*Math.sin(Math.min(1,(Ve-1.9)/.75)*Math.PI/2)*(Ve>2.8?Math.max(0,1-(Ve-2.8)/.65):1)));let Ge=[];for(let ue=0;ue<=D;ue++){let De=Math.PI*ue/D;Ge.push([Ve,ct+(Ut-ct)*Math.pow(Math.sin(De),.35),Math.max(.02,pt)*Math.cos(De)])}N.push(Ge)}let z=[],ie=[],se=[];N.forEach((Ce,Ve)=>Ce.forEach((pt,ct)=>{z.push(pt[0]+ut,pt[1],pt[2]),se.push(Ve/T*4.4,ct/D*2.2)}));for(let Ce=0;Ce<T;Ce++)for(let Ve=0;Ve<D;Ve++){let pt=Ce*(D+1)+Ve,ct=pt+D+1;ie.push(pt,ct,pt+1,ct,ct+1,pt+1)}let we=new Ot;we.setAttribute("position",new mt(z,3)),we.setAttribute("uv",new mt(se,2)),we.setIndex(ie),we.computeVertexNormals(),E(x,new re(we,p.fabric));let ye=N[0],Ie=[];ye.forEach(Ce=>Ie.push(Ce[0]+ut,Ce[1],Ce[2])),Ie.push(-.03+ut,$n(0)-.07,0);let ft=[];for(let Ce=0;Ce<ye.length-1;Ce++)ft.push(ye.length,Ce+1,Ce);let ke=new Ot;ke.setAttribute("position",new mt(Ie,3)),ke.setIndex(ft),ke.computeVertexNormals(),E(x,new re(ke,p.fabric));for(let Ce=.4;Ce<4;Ce+=.45)E(x,In(N[Math.round((Ce+.03)/4.25*T)].map(Ve=>[Ve[0],Ve[1]+.003,Ve[2]*1.002]),.004,p.black,!1,30))}let Q=new Ct;R.add(Q);let ae={},Me=null,je=null,Fe=!1,lt=0,Nt=0;function ce(x,T){if(Q.clear(),Me=null,je=null,!x)return;if(ae.motor){let Qe=x==="electric",ht=ae.motor.clone(!0);ht.position.set(ut,.424,0),Q.add(ht),je=ht,ht.traverse(zt=>{if(zt.name==="prop"&&(Me=zt),!zt.isMesh)return;zt.castShadow=zt.receiveShadow=!0;let Kt=zt.name;zt.material=Kt.startsWith("cowl_top")?Qe?p.cowlWhite:p.cowl:Kt.startsWith("cowl_low")?Qe?p.cowlWhite:p.cowlLow:Kt.startsWith("cowl_band")?Qe?p.orange:p.alu:/^(prop_|blade|screw|handle)/.test(Kt)?p.alu:Kt.startsWith("grip")?p.rubber:p.legMat});let We=document.createElement("canvas");We.width=256,We.height=96;let Rt=We.getContext("2d");Rt.fillStyle=Qe?"#1b1d20":"#ffffff",Rt.font="700 64px Inter, Arial, sans-serif",Rt.textAlign="center",Rt.textBaseline="middle",Rt.fillText(Qe?"E-10":"9.9",128,50);let Tn=new ui(We);Tn.colorSpace=Jt;for(let zt of[1,-1]){let Kt=new re(new wi(.15,.056),new Rn({map:Tn,transparent:!0}));Kt.position.set(-.25,.4,zt*.162),zt<0&&(Kt.rotation.y=Math.PI),ht.add(Kt)}return}let D=x==="electric",N=D?"E":"9.9",z=D?.74:.84,ie=new Ct;ie.position.set(-.03+ut,.424,0),Q.add(ie);let se=Qe=>(Qe.castShadow=!0,Qe.receiveShadow=!0,Qe);{let Qe=se(new re(new en(.09,.16,.16,2,.01),p.black));Qe.position.set(-.03,-.02,0),ie.add(Qe)}let we=D?p.vinyl:p.black,ye=se(new re(new en(.5*z,.36*z,.33*z,6,.09*z),we));ye.position.set(-.22*z,.29*z,0),ie.add(ye);let Ie=se(new re(new Wi(.17*z,28,16,0,Math.PI*2,0,Math.PI/2),we));Ie.scale.set(1.45,.45,.95),Ie.position.set(-.22*z,.46*z,0),ie.add(Ie);let ft=se(new re(new en(.42*z,.12*z,.29*z,4,.04*z),p.vinylDark));ft.position.set(-.2*z,.09*z,0),ie.add(ft);let ke=new re(new en(.505*z,.025*z,.335*z,2,.01),D?p.orange:p.alu);ke.position.set(-.22*z,.17*z,0),ie.add(ke);let Ce=document.createElement("canvas");Ce.width=256,Ce.height=96;let Ve=Ce.getContext("2d");Ve.fillStyle=D?"#222":"#ffffff",Ve.font="700 64px Inter, Arial, sans-serif",Ve.textAlign="center",Ve.textBaseline="middle",Ve.fillText(String(N),128,50);let pt=new ui(Ce);pt.colorSpace=Jt;for(let Qe of[1,-1]){let ht=new re(new wi(.16*z,.06*z),new Rn({map:pt,transparent:!0}));ht.position.set(-.24*z,.32*z,Qe*(.166*z+.002)),Qe<0&&(ht.rotation.y=Math.PI),ie.add(ht)}let ct=.424+.04,Ut=se(new re(new en(.13,ct,.085,3,.03),p.black));Ut.position.set(-.17,-ct/2+.03,0),ie.add(Ut);let Ge=se(new re(new en(.3,.012,.19,2,.005),p.black));Ge.position.set(-.2,-.43,0),ie.add(Ge);let ue=se(new re(new Es(.048,.2,8,18),p.black));ue.rotation.z=Math.PI/2,ue.position.set(-.2,-.5,0),ie.add(ue);let De=new Cn;De.moveTo(0,0),De.lineTo(-.1,0),De.lineTo(-.06,-.12),De.lineTo(-.01,-.12),De.closePath();let Le=new Ti(De,{depth:.012,bevelEnabled:!1});Le.translate(-.13,-.53,-.006),ie.add(se(new re(Le,p.black)));let qe=new Ct;qe.position.set(-.335,-.5,0),ie.add(qe),Me=qe,je=ie;let ot=se(new re(new Vn(.03,.022,.09,16),p.alu));ot.rotation.z=Math.PI/2,qe.add(ot);for(let Qe=0;Qe<3;Qe++){let ht=se(new re(new Wi(.09,16,8),p.alu));ht.scale.set(.12,1,.45),ht.position.y=.09;let We=new Ct;We.rotation.x=Qe*Math.PI*2/3+.3,ht.rotation.y=.5,We.add(ht),qe.add(We)}if(T){let Qe=se(new re(new Es(.022,.42,6,12),p.black));Qe.rotation.z=Math.PI/2-.12,Qe.position.set(.2,.12*z,0),ie.add(Qe);let ht=se(new re(new Es(.027,.12,6,12),p.rubber));ht.rotation.z=Math.PI/2-.12,ht.position.set(.44,.15*z,0),ie.add(ht)}}let de=new Ct;o.add(de);let ge=.5;{let x=de,T=.36,D=.42;for(let se of[1,-1]){let we=_t(4.2,.07,.05,p.galv,1.9,T,se*D);x.add(we);let ye=_t(2.6,.05,.12,p.carpet,1.2,ge+.03,se*.32);ye.rotation.x=se*.12,x.add(ye);for(let pt of[.5,1.9])x.add(_t(.05,ge-T,.05,p.galv,pt,(ge+T)/2,se*.32));let Ie=new re(new Vn(.34,.34,.2,32,1,!0,0,Math.PI),p.galv);Ie.rotation.x=Math.PI/2,Ie.rotation.z=Math.PI/2,Ie.position.set(1.45+ut,.3,se*.68),x.add(Ie);let ft=new Ct;ft.position.set(1.45+ut,.29,se*.68),x.add(ft);let ke=new re(new Yn(.22,.075,16,36),p.rubber);ke.castShadow=!0,ft.add(ke);let Ce=Qt(.17,.12,p.galv,28);Ce.rotation.x=Math.PI/2,ft.add(Ce);let Ve=_t(.06,.09,.16,p.red,-.05,T+.06,se*.62);x.add(Ve)}x.add(_t(.06,.06,1.4,p.galv,1.45,.3,0));for(let se of[.1,1,2.6,3.6])x.add(_t(.05,.05,.9,p.galv,se,T,0));x.add(_t(1.6,.06,.06,p.galv,4.75,T,0));for(let se of[1,-1]){let we=_t(1.3,.05,.05,p.galv,4.3,T,se*.22);we.rotation.y=se*.32,x.add(we)}x.add(_t(.16,.08,.1,p.galv,5.6,T+.02,0,.02));let N=_t(.06,.5,.06,p.galv,4.25,T+.25,0);x.add(N),x.add(_t(.1,.12,.16,p.black,4.25,T+.5,0,.02));let z=Qt(.03,.45,p.galv,12);z.position.set(5+ut,.25,.1),x.add(z);let ie=new re(new Yn(.07,.025,10,20),p.rubber);ie.position.set(5+ut,.07,.1),x.add(ie);for(let se of[.6,1.4,2.2,2.9]){let we=ge+ql(se)-T,ye=_t(.12,we,.1,p.carpet,se,T+we/2,0);x.add(ye)}x.traverse(se=>{se.isMesh&&(se.castShadow=!0,se.receiveShadow=!0)})}let me=new Ct;o.add(me);let Se=.34;for(let x of[.75,2.35]){me.add(_t(.07,.05,1.35,p.galv,x,.025,0));for(let T of[-.42,.42]){let D=Se+Math.abs(T)*Math.tan(7*Math.PI/180)-.02;me.add(_t(.06,D,.06,p.galv,x,D/2,T));let N=_t(.2,.04,.12,p.carpet,x,D+.02,T);N.rotation.x=-Math.sign(T)*.12,me.add(N)}me.add(_t(.05,.05,.84,p.galv,x,.2,0))}let et=new Ct;o.add(et),et.visible=!1;let Je=[];function st(x,T,D){let N=new Ot().setFromPoints([new P(...x),new P(...T)]);et.add(new hs(N,new ls({color:"#ff6b1a"})));for(let ie of[x,T]){let se=new re(new Wi(.015,8,6),new Rn({color:"#ff6b1a"}));se.position.set(...ie),et.add(se)}let z=document.createElement("div");z.className="b3d-dim",z.textContent=D,z.hidden=!0,i.appendChild(z),Je.push({el:z,p:new P((x[0]+T[0])/2,(x[1]+T[1])/2,(x[2]+T[2])/2)})}let Oe={color:"#3b3f45",graphics:"text",opts:new Set,seats:0,seatBase:["tumba","tumba"],motor:"",trailer:!1};function O(x){Oe.color=x,p.hull.color.set(x),p.deck.color.set(x).multiplyScalar(.94)}function Lt(x){x.color&&O(x.color),x.opts&&(Oe.opts=new Set(x.opts)),x.seats!=null&&(Oe.seats=x.seats),x.seatBase&&(Oe.seatBase=x.seatBase),x.motor!=null&&(Oe.motor=x.motor),x.trailer!=null&&(Oe.trailer=x.trailer),x.graphics!=null&&(Oe.graphics=x.graphics);let T=N=>Oe.opts.has(N),D=T("tent_trans");for(let N in C)N!=="base"&&(C[N].visible=T(N)&&(!D||N==="tent_trans"||N==="kringolin"||N==="redan"||N==="keelguard"));C.floor_aft.visible=T("floor_aft"),C.floor_anchor.visible=T("floor_anchor"),C.gfx_text.visible=Oe.graphics!=="none"&&!D,C.gfx_stripe.visible=Oe.graphics==="stripe"&&!D,C.kringolin.visible=!0,C.plank.visible=!T("bench_box")&&!D,C.console.visible=!1,C.kring_hatch.visible=T("kring_hatch")&&!D;for(let N of["seat1","seat2"])C[N]&&(R.remove(C[N]),delete C[N]);Oe.seats>=1&&!D&&Mt("seat1",-.33,Oe.seatBase[0]),Oe.seats>=2&&!D&&Mt("seat2",.33,Oe.seatBase[1]);for(let N of["seat1","seat2"])C[N]&&C[N].traverse(z=>{z.isMesh&&(z.castShadow=!0,z.receiveShadow=!0)});if(kn){for(let z in fn)z.startsWith("k_")&&(fn[z].visible=T(z)||T(z.slice(2)));rr.forEach(z=>{z.material=T("k_eva")?p.eva:p.deck});for(let z of["kseat1","kseat2"])fn[z]&&(En.remove(fn[z]),delete fn[z]);let N={x:Ft(2.62),fy:.262};Oe.seats>=1&&Mt("kseat1",.36,Oe.seatBase[0],N),Oe.seats>=2&&Mt("kseat2",-.36,Oe.seatBase[1],N);for(let z of["kseat1","kseat2"])fn[z]&&fn[z].traverse(ie=>{ie.isMesh&&(ie.castShadow=!0,ie.receiveShadow=!0)})}ce(Oe.motor,!0),Be(),a(3),St()}function St(){et.clear(),Je.forEach(z=>z.el.remove()),Je.length=0;let x=S.position.y,T=!0;if(kn){st([Ft(0),x-.02,1.15],[Ft(5.067),x-.02,1.15],"5 067 \u043C\u043C"),st([Ft(1.6),x+.87,-1.01],[Ft(1.6),x+.87,1.01],"2 020 \u043C\u043C"),st([Ft(3.1),x,1.15],[Ft(3.1),x+1.08,1.15],"1 080 \u043C\u043C");return}let D=(T?-.4:0)+ut,N=Fp+ut;st([D,x-.02,1],[N,x-.02,1],(T?"4 600":"4 240")+" \u043C\u043C"),st([.6+ut,x+.66,-.765],[.6+ut,x+.66,.765],"1 530 \u043C\u043C"),st([2.74+ut,x,1],[2.74+ut,x+1.205,1],"1 205 \u043C\u043C")}let I=new zr,v=new pe,W=null,X=null,ee=x=>{let T=t.getBoundingClientRect();v.set((x.clientX-T.left)/T.width*2-1,-((x.clientY-T.top)/T.height)*2+1),I.setFromCamera(v,c);let D=I.intersectObjects([R,En],!0).filter(N=>N.object.visible&&_e(N.object));return D.length&&D[0].object.userData.hatch?D[0].object.userData.hatch:null},_e=x=>{for(;x;){if(!x.visible)return!1;x=x.parent}return!0};t.addEventListener("pointerdown",x=>{W=[x.clientX,x.clientY]}),t.addEventListener("pointerup",x=>{if(!W||Math.hypot(x.clientX-W[0],x.clientY-W[1])>6)return;let T=ee(x);T&&nt(xe.indexOf(T))}),t.addEventListener("pointermove",x=>{if(x.buttons)return;let T=ee(x);T!==X&&(X=T,t.style.cursor=T?"pointer":"",e.onHover?.(T?(T.target?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C: ":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C: ")+T.label:""))});let be=null,ne={iso:[[6.2,3.1,6.4],[0,.55,0]],bow:[[6.5,1.6,.6],[0,.5,0]],side:[[-.3,1.5,8.6],[-.25,.5,0]],stern:[[-6.2,1.8,1.2],[0,.5,0]],top:[[.01,8.8,.01],[0,0,0]],cockpit:[[-1.6,2.2,1.6],[.6,.45,0]]},le={iso:[[7,3.4,7.2],[.1,.55,0]],bow:[[7.6,1.9,.8],[.1,.5,0]],side:[[0,1.6,9.9],[.07,.5,0]],stern:[[-7,2,1.4],[0,.5,0]],top:[[.01,10.2,.01],[.07,0,0]],cockpit:[[-3.3,2.7,2.1],[.5,.3,0]]};function Ae(x,T=1.1){let D=(kn?le:ne)[x];if(!D)return;j=x,oe=0,Dn(!1);let N=S.position.y;be={t:0,p0:c.position.clone(),p1:new P(...D[0]).multiplyScalar(1).multiply(new P(1,gi!=="studio"&&x!=="top"?.72:1,1)).add(new P(0,N,0)),q0:h.target.clone(),q1:new P(...D[1]).add(new P(0,N,0)),d:T}}h.addEventListener("start",()=>{be=null});function it(x){let T=new wn,D=new wn;x.updateWorldMatrix(!0,!0);let N=z=>{z.visible&&(z.isMesh&&z.geometry&&(z.geometry.boundingBox||z.geometry.computeBoundingBox(),D.copy(z.geometry.boundingBox).applyMatrix4(z.matrixWorld),T.union(D)),z.children.forEach(N))};return N(x),T}let ve=new Ct;ve.visible=!1,ve.renderOrder=20,R.add(ve);let Ee=new Rn({color:16739098,transparent:!0,opacity:.7,depthTest:!1,side:ln}),Xe=new ls({color:16777215,transparent:!0,opacity:.9,depthTest:!1}),tt=0,gt={capot_plate:[3.12,3.5,.415,-.22,.22],seat_plates:[2.08,2.42,Up+.01,-.52,.52],ladder_plate:[.08,.42,.415,.5,.82]};function H([x,T,D,N,z]){ve.clear();let ie=new wi(T-x,z-N);ie.rotateX(-Math.PI/2);let se=new re(ie,Ee);se.renderOrder=20,se.position.set((x+T)/2+ut,D,(N+z)/2),ve.add(se);let we=new qs(new Pa(ie),Xe);we.renderOrder=21,we.position.copy(se.position),ve.add(we),ve.visible=!0,tt=3.2}let Te=0,oe=0,Re=new Ki("#ffffff",0);Re.position.set(-1.2,-4,5),o.add(Re),Re.target=S;let Pe=0,fe=[];function at(x){fe.forEach(([T,D])=>{T.material=D}),fe=[],x.traverse(T=>{if(T.isMesh){let D=T.material.clone();D.emissive=new Ye(16739098),D.emissiveIntensity=0,fe.push([T,T.material,D]),T.material=D}}),Pe=3}let Ze=()=>gi!=="studio"?-.12:Oe.trailer?ge:Se;function Vt(x){let T=S.position.y,D=S.rotation.x;S.position.y=Ze(),S.rotation.x=0,S.updateMatrixWorld(!0);let N=it(x);return S.position.y=T,S.rotation.x=D,S.updateMatrixWorld(!0),N}let Bt=[];function Dn(x){if(Bt.forEach(([T,D])=>{T.material=D}),Bt=[],!!x){for(let T of["seat1","seat2","kseat1","kseat2"]){let D=C[T]||fn[T];D&&D.traverse(N=>{if(N.isMesh){let z=N.material.clone();z.transparent=!0,z.opacity=.16,z.depthWrite=!1,Bt.push([N,N.material]),N.material=z}})}a(1)}}function ri(x){let T=xe[x];if(!T)return!1;Dn(!!T.ghost);let D=Vt(T.pivot);if(D.isEmpty())return!1;oe=0;let N=D.getCenter(new P),z=c.position.clone().sub(h.target);z.y=0,z.lengthSq()<1e-4&&z.set(1,0,1),z.normalize();let ie=(T.view?new P(...T.view):new P(z.x,1.6,z.z)).normalize().multiplyScalar(T.dist||3.4);return h.autoRotate&&(h.autoRotate=!1,e.onAutoRotate?.(!1)),be={t:0,p0:c.position.clone(),p1:N.clone().add(ie),q0:h.target.clone(),q1:N.clone(),d:.9},!0}function Jl(x){let T=null;Dn(!1);let D=["keelguard","redan"].includes(x)&&gi==="studio"&&C[x]?.visible&&!kn;if(oe=D?1:0,D){let De=x==="keelguard"?4.4:3.4,Le=2*Math.atan(Math.tan(ii.degToRad(c.fov)/2)*c.aspect),qe=ii.clamp(De/2/Math.tan(Math.min(Le,ii.degToRad(c.fov))/2)+.8,4,11),ot=new P(x==="keelguard"?.25:-.2,Ze()+.6+.05,0),Qe=new P(-.25,.05,1).normalize().multiplyScalar(qe);return at(C[x]),h.autoRotate&&(h.autoRotate=!1,e.onAutoRotate?.(!1)),be={t:0,p0:c.position.clone(),p1:ot.clone().add(Qe),q0:h.target.clone(),q1:ot,d:1.2},!0}let N=xe.filter(De=>De.floorPart===x);if(N.length&&C[x]?.visible&&(N.forEach(De=>{De.target=1}),a(),e.onHatch?.(xe.filter(De=>De.target).length,xe.length)),!kn&&gt[x]?(H(gt[x]),T=ve):x==="motor"?T=Q:x==="trailer"?T=de:x==="seats"?T=kn?fn.kseat2||fn.kseat1:C.seat2||C.seat1:T=kn&&(fn[x]||fn["k_"+x])||C[x],!T||!T.visible)return!1;let z=Vt(T);if(z.isEmpty())return!1;let ie=Vt(S),se=ie.getCenter(new P),we=z.getCenter(new P),ye=z.getSize(new P),Ie=c.position.clone().sub(h.target);Ie.y=0,Ie.lengthSq()<1e-4&&Ie.set(1,0,1),Ie.normalize();let ft=new P(we.x-se.x,0,we.z-se.z),Ce=(ft.length()>.25?ft.normalize().multiplyScalar(1.2).add(Ie):Ie.clone()).normalize(),Ve=Math.abs(we.z-se.z)<.55&&we.y>ie.min.y+.15&&Math.max(ye.x,ye.z)<1.6,pt=["keelguard","redan","echo_tub"].includes(x),ct=pt||we.y<ie.min.y+.12;pt&&Ce.set(-.35,0,1).normalize();let Ut=ct?.08:Ve?1:.5,Ge=ii.clamp(Math.max(ye.x,ye.y,ye.z)*1.9+1.9,2.6,8.5),ue=new P(Ce.x,Ut,Ce.z).normalize().multiplyScalar(Ge);return h.autoRotate&&(h.autoRotate=!1,e.onAutoRotate?.(!1)),be={t:0,p0:c.position.clone(),p1:we.clone().add(ue),q0:h.target.clone(),q1:we.clone(),d:1},!0}let ai=null,Li=null;!s&&e.ao!==!1&&(ai=new Bl(n),ai.addPass(new kl(o,c)),Li=new na(o,c,800,600),Li.output=na.OUTPUT.Default,Li.blendIntensity=1,Li.updateGtaoMaterial({radius:.28,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:16,distanceFallOff:1}),Li.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),ai.addPass(Li),ai.addPass(new Gl));let Xn=0,Ni=0;new ResizeObserver(()=>{Xn=i.clientWidth,Ni=i.clientHeight,n.setSize(Xn,Ni,!1),ai?.setSize(Xn,Ni),c.aspect=Xn/Ni,c.fov=Xn/Ni<.9?42:30,c.updateProjectionMatrix()}).observe(i);let Ls=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,Fi=performance.now(),Ui=new P;n.setAnimationLoop(x=>{let T=Math.min(.05,(x-Fi)/1e3);if(Fi=x,!!Xn){if(Te!==oe){Te+=Math.sign(oe-Te)*Math.min(Math.abs(oe-Te),T*1.6);let D=Ls(Te);S.position.y=Ze()+D*.6,S.rotation.x=-D*.8,Re.intensity=D*2.4,me.visible=gi==="studio"&&!Oe.trailer&&D<.02,de.visible=gi==="studio"&&Oe.trailer&&D<.02,a(1)}if(Pe>0){Pe-=T;let D=Pe>2.4?(3-Pe)/.6:Math.min(1,Pe/.8);fe.forEach(([,,N])=>{N.emissiveIntensity=.9*Math.max(0,D)}),Pe<=0&&(fe.forEach(([N,z])=>{N.material=z}),fe=[])}if(tt>0){tt-=T;let D=Math.min(1,tt/.8);Ee.opacity=.7*D,Xe.opacity=.9*D,tt<=0&&(ve.visible=!1)}if(be){be.t=Math.min(1,be.t+T/(be.d||1.1));let D=Ls(be.t);c.position.lerpVectors(be.p0,be.p1,D),h.target.lerpVectors(be.q0,be.q1,D),be.t>=1&&(be=null)}for(let D of xe){D.t!==D.target&&(a(1),D.t+=Math.sign(D.target-D.t)*Math.min(Math.abs(D.target-D.t),T*2.2));let N=Ls(D.t)*D.max;D.axisVec?D.pivot.quaternion.setFromAxisAngle(D.axisVec,N):D.axis==="door"?D.pivot.rotation.z=N:D.pivot.rotation.z=D.sign*N}if(lt+=((Fe?38:0)-lt)*Math.min(1,T*(Fe?1.6:.9)),Me&&(Nt+=lt*T,Me.rotation.x=Nt),je){let D=Fe?.0012:0;je.position.y=.424+Math.sin(x*.09)*D,je.rotation.x=Math.sin(x*.07)*D*2}if(gi!=="studio"){let D=x/1e3;bi.material.uniforms.time.value=D*.55,S.position.y=-.12+Math.sin(D*1.1)*.018,S.rotation.x=Math.sin(D*.85)*.03,S.rotation.z=Math.sin(D*.6+1.3)*.012,a(1)}if(h.update(T),r>0&&(n.shadowMap.needsUpdate=!0,r--),ai?ai.render(T):n.render(o,c),Wt(),et.visible)for(let D of Je)Ui.copy(D.p).project(c),D.el.hidden=Ui.z>1,D.el.style.transform=`translate(-50%,-50%) translate(${(Ui.x*.5+.5)*Xn}px, ${(-Ui.y*.5+.5)*Ni}px)`}});let kn=e.model==="kimeria",En=new Ct;En.name="kimeria",S.add(En);let fn={},rr=[],jn=x=>fn[x]||(fn[x]=(()=>{let T=new Ct;return T.name=x,En.add(T),T})()),Ft=x=>x-.454+ut;if(kn){let Ie=function(ue,De,Le,qe,ot,Qe,ht){let We=new Ct;We.position.set(De,ot,0),En.add(We);let Rt=De-ue,Tn=qe-Le,zt=(Le+qe)/2,Kt=new re(new en(Rt-.012,.014,Tn-.012,2,.005),ht);Kt.position.set(-Rt/2,.007,zt),Kt.castShadow=Kt.receiveShadow=!0,We.add(Kt);let _i=new re(new en(.035,.012,.12,2,.005),p.black);_i.position.set(-Rt+.05,.018,zt),_i.castShadow=!0,We.add(_i);for(let th of[Le+.08,qe-.08]){let pd=new re(new sn(.03,.01,.05),p.steel);pd.position.set(-.012,.016,th),We.add(pd)}let Eo=new re(new Vn(.018,.018,.006,20),p.black);Eo.position.set(-Rt+.05,.016,zt+Math.min(.16,Tn*.3)),We.add(Eo);let fd=new re(new sn(.004,.002,.018),p.steel);fd.position.set(-Rt+.05,.0195,zt+Math.min(.16,Tn*.3)),We.add(fd);let eh={pivot:We,lid:Kt,axisVec:new P(0,0,-1),t:0,target:0,max:1.75,label:Qe};return We.children.forEach(th=>{th.userData.hatch=eh}),xe.push(eh),eh},Ce=function(ue,De){let[,Le,qe]=ft.reduce((We,Rt)=>Math.abs(Rt[0]-ue)<Math.abs(We[0]-ue)?Rt:We),ot=new Ct;ot.position.set(Ft(ue),qe+.004,De*(Le-.07));let Qe=new re(new en(.05,.012,.03,2,.004),p.steel);ot.add(Qe);let ht=new re(new Es(.009,.13,4,10),p.steel);ht.rotation.z=Math.PI/2,ht.position.y=.03,ot.add(ht);for(let We of[-.025,.025]){let Rt=Qt(.007,.03,p.steel,10);Rt.position.set(We,.016,0),ot.add(Rt)}ot.traverse(We=>{We.isMesh&&(We.castShadow=!0)}),En.add(ot)},Ge=function(ue,De,Le,qe){let ot=[];for(let We=0;We<ue.length-1;We++){let Rt=ue[We],Tn=ue[We+1],zt=De[We+1],Kt=De[We];ot.push(...Rt,...Tn,...zt,...Rt,...zt,...Kt)}let Qe=new Ot;Qe.setAttribute("position",new mt(ot,3)),Qe.computeVertexNormals();let ht=new re(Qe,Le);return qe.add(ht),ht};R.visible=!1,xe.length=0,S.add(Q),Q.position.y=.489-.424,de.position.x=.5;let x=.262,T=[[1.28,.69],[2.9,.69],[2.95,.677],[3,.666],[3.05,.648],[3.1,.642],[3.15,.63],[3.2,.613],[3.3,.582],[3.4,.556],[3.5,.533],[3.6,.506],[3.7,.476],[3.8,.434],[3.9,.386],[4,.342],[4.1,.268],[4.2,.211],[4.3,.135],[4.37,.05]],D=Ft(1.85),N=Ft(2.4),z=.26,ie=new Cn;ie.moveTo(Ft(T[0][0]),-T[0][1]),T.forEach(([ue,De])=>ie.lineTo(Ft(ue),-De)),T.slice().reverse().forEach(([ue,De])=>ie.lineTo(Ft(ue),De)),ie.closePath();let se=new us;se.moveTo(D,-z),se.lineTo(D,z),se.lineTo(N,z),se.lineTo(N,-z),se.closePath(),ie.holes.push(se);let we=new Ti(ie,{depth:.012,bevelEnabled:!1});we.rotateX(Math.PI/2),we.translate(0,x,0);let ye=E(En,new re(we,p.deck));rr.push(ye);for(let[ue,De,Le,qe]of[[N-D+.03,.015,(D+N)/2,-z-.008],[N-D+.03,.015,(D+N)/2,z+.008],[.015,2*z,D-.008,0],[.015,2*z,N+.008,0]]){let ot=new re(new sn(ue,.006,De),p.black);ot.position.set(Le,x+.003,qe),ot.receiveShadow=!0,En.add(ot)}rr.push(Ie(D,N,-z,z,x-.014,"\u041B\u044E\u043A \u0432 \u043F\u043E\u043B\u0443",p.deck).lid);let ft=[[.6,1.009,.797],[.8,1.009,.823],[1,1.009,.829],[1.2,1.009,.842],[1.4,1.009,.847],[1.6,1.009,.857],[1.8,1.01,.87],[2,1.01,.871],[2.2,1.01,.885],[2.4,1.01,.895],[2.6,1.01,.896],[2.8,1.007,.907],[3.2,.959,.913],[3.4,.935,.921],[3.6,.912,.935],[3.8,.866,.94],[4,.807,.944],[4.2,.697,.95],[4.4,.594,.955],[4.6,.525,.958],[4.8,.391,.961],[4.97,.2,.964]],ke=ue=>ue-.454;for(let ue of[1,-1])E(En,In(ft.map(([De,Le,qe])=>[ke(De),qe-.035,ue*(Le+.014)]),.019,p.rub,!1,140));for(let ue of[1,-1])Ce(.75,ue),Ce(4.25,ue);{let ue=new re(new Yn(.028,.007,10,24),p.steel);ue.position.set(Ft(4.985),.7,0),ue.rotation.y=Math.PI/2,ue.castShadow=!0,En.add(ue)}{let ue=Qt(.022,.03,p.steel,16);ue.rotation.z=Math.PI/2,ue.position.set(ut-.01,.07,.16),En.add(ue)}{let ue=[[.6,0],[1.2,.001],[2,.002],[2.8,.002],[3.6,0],[3.8,.011],[4,.057],[4.2,.107],[4.4,.253],[4.6,.349],[4.8,.508],[4.93,.66]];jn("k_keelguard").add(In(ue.map(([Le,qe])=>[ke(Le),qe-.006,0]),.011,p.steel,!1,120))}{let ue=jn("k_oars");for(let De of[1,-1]){let Le=new Ct;Le.position.set(Ft(1.95),.635,De*.83);let qe=Qt(.019,1.75,p.alu,12);qe.rotation.z=Math.PI/2,Le.add(qe);let ot=new re(new en(.42,.012,.14,2,.005),p.black);ot.position.x=1.05,Le.add(ot);let Qe=Qt(.023,.22,p.rubber,12);Qe.rotation.z=Math.PI/2,Qe.position.x=-.78,Le.add(Qe),Le.traverse(We=>{We.isMesh&&(We.castShadow=!0)}),ue.add(Le);let ht=new re(new Yn(.03,.008,8,16,Math.PI),p.steel);ht.position.set(Ft(2.2),ft[9][2]+.01,De*.96),ht.rotation.y=Math.PI/2,ue.add(ht)}}let Ve=1.072,pt=3.374,ct=.24,Ut=.94;{let ue=jn("k_ws");for(let De of[1,-1]){let qe=[],ot=[];for(let ht=0;ht<=14;ht++){let We=ht/14,Rt=ct+(Ut-ct)*We,Tn=pt-.04-.3*We*We;qe.push([Ft(Tn),Ve+.005,De*Rt]),ot.push([Ft(Tn-.2-.05*We),Ve+.36-.05*We,De*(Rt-.02*We)])}Ge(qe,ot,p.glass,ue);let Qe=ht=>{let We=new re(new Ks(new Ts(ht.map(Rt=>new P(...Rt))),60,.011,8,!1),p.frame);We.castShadow=!0,ue.add(We)};Qe(ot),Qe([qe[0],ot[0]]),Qe([qe[14],ot[14]]),Qe(qe)}}{let ue=jn("k_helm"),De=-.6,Le=new re(new en(.34,.03,.46,2,.01),p.black);Le.position.set(Ft(3.06),Ve+.016,De),Le.rotation.z=.25,ue.add(Le);for(let zt of[-.11,.11]){let Kt=Qt(.045,.012,p.screen,24);Kt.position.set(Ft(3.05),Ve+.04,De+zt),Kt.rotation.z=.25-Math.PI/2+Math.PI/2,ue.add(Kt)}let qe=new Ct;qe.position.set(Ft(2.86),Ve-.08,De),qe.rotation.z=.55,ue.add(qe);let ot=new re(new Yn(.17,.013,12,48),p.black);ot.rotation.y=Math.PI/2,qe.add(ot);for(let zt=0;zt<3;zt++){let Kt=new re(new sn(.012,.16,.018),p.steel),_i=zt*Math.PI*2/3;Kt.position.set(0,Math.cos(_i)*.085,Math.sin(_i)*.085),Kt.rotation.x=-_i,qe.add(Kt)}let Qe=Qt(.03,.05,p.steel,16);Qe.rotation.z=Math.PI/2,qe.add(Qe);let ht=Qt(.018,.16,p.black,12);ht.rotation.z=Math.PI/2,ht.position.x=.08,qe.add(ht);let We=new Ct;We.position.set(Ft(3),Ve-.12,-(ct+.012)),ue.add(We),We.add(new re(new en(.16,.12,.03,2,.01),p.black));let Rt=Qt(.008,.14,p.steel,10);Rt.position.set(0,.07,.03),Rt.rotation.z=-.5,We.add(Rt);let Tn=new re(new Wi(.022,12,10),p.black);Tn.position.set(.035,.13,.03),We.add(Tn),ue.traverse(zt=>{zt.isMesh&&(zt.castShadow=!0)})}{let ue=jn("k_lights"),De=new Ct;De.position.set(Ft(4.93),.985,0),ue.add(De),De.add(new re(new en(.07,.03,.09,2,.008),p.black));for(let[Qe,ht]of[[.025,p.navR],[-.025,p.navG]]){let We=new re(new sn(.05,.022,.03),ht);We.position.set(.012,.022,Qe),De.add(We)}let Le=Qt(.011,.9,p.alu,12);Le.position.set(Ft(.62),.84+.45,.86),ue.add(Le);let qe=new re(new Wi(.03,14,10),p.navW);qe.position.set(Ft(.62),.84+.92,.86),ue.add(qe);let ot=Qt(.03,.04,p.black,14);ot.position.set(Ft(.62),.84+.02,.86),ue.add(ot)}{let ue=jn("k_rails"),De=ft.filter(Le=>Le[0]>=3.8);for(let Le of[1,-1]){let qe=De.map(([ot,Qe,ht])=>[ke(ot),ht+.26,Le*(Qe-.06)]);qe.push([ke(5),.964+.26,0]),ue.add(In(qe,.013,p.steel,!1,60));for(let[ot,Qe,ht]of De.filter((We,Rt)=>Rt%2===0)){let We=Qt(.011,.26,p.steel,10);We.position.set(Ft(ot),ht+.13,Le*(Qe-.06)),ue.add(We)}}ue.traverse(Le=>{Le.isMesh&&(Le.castShadow=!0)})}{let ue=jn("k_rods");for(let De of[.86,.66,-.66,-.86]){let Le=new re(new Vn(.022,.02,.24,14,1,!0),p.steel);Le.position.set(Ft(.66),.62,De),Le.rotation.z=.5,Le.castShadow=!0,ue.add(Le);let qe=new re(new Yn(.024,.004,6,16),p.steel);qe.position.set(Ft(.66)-.06,.725,De),qe.rotation.x=Math.PI/2,qe.rotation.y=.5,ue.add(qe)}}{let ue=jn("k_echo_bracket");ue.add(_t(.012,.16,.12,p.black,-.012,.36,-.62));let De=_t(.03,.3,.03,p.black,-.05,.22,-.62);ue.add(De);let Le=new re(new en(.1,.03,.06,2,.01),p.black);Le.position.set(-.05+ut,.06,-.62),ue.add(Le)}Ie(Ft(.86),Ft(1.24),.012,.685,.624,"\u041A\u043E\u0440\u043C\u043E\u0432\u043E\u0439 \u0440\u0443\u043D\u0434\u0443\u043A (\u043B\u0435\u0432\u044B\u0439)",p.deck),Ie(Ft(.86),Ft(1.24),-.685,-.012,.624,"\u041A\u043E\u0440\u043C\u043E\u0432\u043E\u0439 \u0440\u0443\u043D\u0434\u0443\u043A (\u043F\u0440\u0430\u0432\u044B\u0439)",p.deck)}let gi="studio",$l=o.background,Ql=o.environment,bi=new Vl(new wi(900,900),{textureWidth:s?256:512,textureHeight:s?256:512,waterNormals:A.wav,sunDirection:new P(.6,.6,.4),sunColor:16777215,waterColor:731699,distortionScale:1.8,fog:!0});bi.rotation.x=-Math.PI/2,bi.material.uniforms.size.value=2.4,bi.visible=!1,o.add(bi);let Ns=new ia;Ns.scale.setScalar(400),Ns.visible=!1,o.add(Ns);let oi=Ns.material.uniforms,w={water:{elev:38,az:35,turb:2.5,ray:.9,mie:.003,exp:.7,key:3.2,keyC:"#fff4e6",fill:.4,env:.5,fog:"#a9c3d6",sunC:16777215,wc:731699},sunset:{elev:5,az:70,turb:8,ray:2.4,mie:.006,exp:.72,key:3.6,keyC:"#ffb27a",fill:.3,env:.6,fog:"#d9a07e",sunC:16752736,wc:1055782}},k=null;function $(x){gi=x;let T=w[x];if(bi.visible=Ns.visible=!!T,g.visible=M.visible=!T,!T)o.background=$l,o.environment=Ql,o.environmentIntensity=.5,o.fog=null,n.toneMappingExposure=.92,u.position.set(4,7,4.5),u.color.set("#ffffff"),u.intensity=2.9,d.intensity=.6,f.intensity=1.2,c.near=.05,c.far=80,h.maxPolarAngle=Math.PI*.53;else{let D=new P().setFromSphericalCoords(1,ii.degToRad(90-T.elev),ii.degToRad(T.az));Object.assign(oi.turbidity,{value:T.turb}),oi.rayleigh.value=T.ray,oi.mieCoefficient.value=T.mie,oi.mieDirectionalG.value=.8,oi.sunPosition.value.copy(D);let N=new Ss,z=new ia;z.scale.setScalar(100),Object.keys(oi).forEach(ie=>{z.material.uniforms[ie].value=oi[ie].value?.clone?oi[ie].value.clone():oi[ie].value}),N.add(z),k?.dispose(),k=l.fromScene(N),o.environment=k.texture,o.environmentIntensity=T.env,o.background=null,o.fog=new va(T.fog,90,420),bi.material.uniforms.sunDirection.value.copy(D).normalize(),bi.material.uniforms.sunColor.value.set(T.sunC),bi.material.uniforms.waterColor.value.set(T.wc),n.toneMappingExposure=T.exp,u.position.copy(D).multiplyScalar(9),u.position.y=Math.max(u.position.y,1.2),u.color.set(T.keyC),u.intensity=T.key,d.intensity=T.fill,f.intensity=T.fill*2,c.near=.1,c.far=500,h.maxPolarAngle=Math.PI*.475}c.updateProjectionMatrix(),Be(),a(3),Ae(K())}let j="iso",K=()=>j;function Be(){let x=gi!=="studio";x&&(Te=oe=0);let T=Ls(Te);de.visible=!x&&Oe.trailer&&T<.02,me.visible=!x&&!Oe.trailer&&T<.02,S.position.y=(x?-.12:Oe.trailer?ge:Se)+T*.6,x||S.rotation.set(-T*.8,0,0),Re.intensity=T*2.4}let He=document.createElement("div");He.className="b3d-hots",i.appendChild(He);let Ue=!0;function $e(){He.innerHTML="",xe.forEach((x,T)=>{let D=document.createElement("button");D.type="button",D.className="b3d-hot",D.setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C: "+x.label),D.title=x.label,D.addEventListener("click",N=>{N.stopPropagation(),nt(T)}),He.appendChild(D),x.hot=D,x.hc=null})}function nt(x,T){let D=xe[x];D&&(D.target=T==null?D.target?0:1:T?1:0,!D.target&&D.ghost&&Dn(!1),a(),e.onHatch?.(xe.filter(N=>N.target).length,xe.length))}let xt=new P,Et=new P,Ke=new wn,kt=new zr,tn=0;function jt(x,T){let D=T.distanceTo(c.position);return kt.set(c.position,Ui.copy(T).sub(c.position).normalize()),kt.far=D-.06,!!kt.intersectObjects([R,En],!0).find(z=>_e(z.object)&&z.object.userData.hatch!==x&&!(z.object.material&&z.object.material.transparent))}function Wt(){tn=(tn+1)%Math.max(1,xe.length);for(let[x,T]of xe.entries()){let D=T.hot;if(!D)continue;let N=T.lid||T.pivot;if(!Ue||!_e(N)||!Xn){D.hidden=!0;continue}T.hc||(N.updateWorldMatrix(!0,!0),Ke.setFromObject(N),T.hc=N.worldToLocal(Ke.getCenter(new P)),T.hn=N.worldToLocal(new P().setFromMatrixPosition(N.matrixWorld).add(T.axis==="door"?new P(-1,0,0):new P(0,1,0)))),xt.copy(T.hc),N.localToWorld(xt),Et.copy(T.hn),N.localToWorld(Et).sub(new P().setFromMatrixPosition(N.matrixWorld));let z=Et.dot(Ui.copy(c.position).sub(xt))>0||T.t>.5;if(z&&(x===tn||T.occ==null)&&(T.occ=jt(T,xt)),xt.project(c),xt.z>1||!z||T.occ){D.hidden=!0;continue}D.hidden=!1,D.classList.toggle("open",T.target===1),D.setAttribute("aria-label",(T.target?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C: ":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C: ")+T.label),D.style.transform=`translate(-50%,-50%) translate(${(xt.x*.5+.5)*Xn}px, ${(-xt.y*.5+.5)*Ni}px)`}}$e(),Lt({}),h.autoRotateSpeed=.7,h.addEventListener("start",()=>{h.autoRotate&&(h.autoRotate=!1,e.onAutoRotate?.(!1))}),e.intro!==!1&&(c.position.set(kn?-3.5:-3,2.6,9.5),Ae("iso",2.6));{let x=new Ll;x.setMeshoptDecoder(Np);let T=e.assets||"assets/";kn?x.loadAsync(T+"kimeria.glb?v=3").then(D=>{D.scene.traverse(N=>{N.isMesh&&(N.material=N.name.startsWith("k_deck")?p.deck:p.hull,N.castShadow=N.receiveShadow=!0)}),En.add(D.scene),a(3),xe.length&&xe.forEach(N=>{N.occ=null})}).catch(D=>console.warn("kimeria.glb",D)):x.loadAsync(T+"hull.glb?v=2").then(D=>{D.scene.traverse(N=>{N.isMesh&&(N.material=p.hull,N.castShadow=N.receiveShadow=!0)}),_("base").add(D.scene),G.visible=!1,a(3)}).catch(D=>console.warn("hull.glb",D)),x.loadAsync(T+"motor.glb?v=3").then(D=>{ae.motor=D.scene,ce(Oe.motor,!0),a(3)}).catch(D=>console.warn("motor.glb",D))}return{apply:Lt,view:Ae,focus:Jl,focusHatch:ri,state:Oe,setEnv:$,toggleHatch:nt,hatchList(){return xe.map(x=>({label:x.label,open:!!x.target}))},setHots(x){Ue=!!x},setAutoRotate(x){return h.autoRotate=!!x,be=null,h.autoRotate},thumbnail(x=560,T=260){let D=o.background,N=g.visible,z=M.visible,ie=me.visible,se=de.visible,we=S.position.y,ye=c.position.clone(),Ie=h.target.clone(),ft=c.aspect,ke=c.fov;o.background=null,g.visible=M.visible=me.visible=de.visible=!1,S.position.y=0;let Ce=kn?.07:.05;c.position.set(Ce+3.6,2.1,kn?7.6:6.6),h.target.set(Ce-.15,.35,0),c.lookAt(h.target),c.aspect=x/T,c.fov=26,c.updateProjectionMatrix();let Ve=n.getPixelRatio();n.setPixelRatio(2),n.setSize(x,T,!1),n.setClearColor(0,0),n.shadowMap.needsUpdate=!0,n.render(o,c);let pt=t.toDataURL("image/png");return o.background=D,g.visible=N,M.visible=z,me.visible=ie,de.visible=se,S.position.y=we,c.position.copy(ye),h.target.copy(Ie),c.aspect=ft,c.fov=ke,c.updateProjectionMatrix(),n.setPixelRatio(Ve),n.setSize(Xn,Ni,!1),pt},setHatches(x){xe.forEach(T=>{T.target=x?1:0}),a(),e.onHatch?.(x?xe.length:0,xe.length)},setEngine(x){return Fe=!!x&&!!Me,Fe},setDims(x){et.visible=x,Je.forEach(T=>{T.el.hidden=!x})},setPan(x){h.mouseButtons.LEFT=x?Ai.PAN:Ai.ROTATE,h.touches.ONE=x?Ri.PAN:Ri.ROTATE},zoom(x){let T=c.position.clone().sub(h.target);T.multiplyScalar(x);let D=ii.clamp(T.length(),h.minDistance,h.maxDistance);T.setLength(D),be={t:0,p0:c.position.clone(),p1:h.target.clone().add(T),q0:h.target.clone(),q1:h.target.clone()}},snapshot(){return n.shadowMap.needsUpdate=!0,ai?ai.render(0):n.render(o,c),t.toDataURL("image/jpeg",.9)},renderer:n,scene:o,camera:c,controls:h,get composer(){return ai},get gtao(){return Li}}}window.Boat3D={createBoat:kv};})();
