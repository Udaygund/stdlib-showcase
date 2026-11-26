"use strict";(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Sf=s((v5r,Of)=>{"use strict";function pR(){var r=0;return e;function e(){return arguments.length===0||(r+=1),r}}Of.exports=pR});var Ff=s((l5r,If)=>{"use strict";var hR=Sf();If.exports=hR});var Pf=s((c5r,Lf)=>{"use strict";function mR(r){return r!==r}Lf.exports=mR});var k=s((p5r,Mf)=>{"use strict";var yR=Pf();Mf.exports=yR});var z=s((h5r,Rf)=>{"use strict";var gR=Number.POSITIVE_INFINITY;Rf.exports=gR});var Cf=s((m5r,Vf)=>{"use strict";var qR=z();function wR(r){return r===0&&1/r===qR}Vf.exports=wR});var f0=s((y5r,Bf)=>{"use strict";var bR=Cf();Bf.exports=bR});var jf=s((g5r,kf)=>{"use strict";var ER=k(),dR=f0();function _R(){var r;return e;function e(t){return arguments.length===0?r===void 0?null:r:((r===void 0||t>r||ER(t)||t===r&&dR(t))&&(r=t),r)}}kf.exports=_R});var Hf=s((q5r,Gf)=>{"use strict";var TR=jf();Gf.exports=TR});var Wf=s((w5r,Uf)=>{"use strict";Uf.exports=Number});var Lt=s((b5r,Df)=>{"use strict";var AR=Wf();Df.exports=AR});var fr=s((E5r,Yf)=>{"use strict";var NR=Lt(),OR=NR.NEGATIVE_INFINITY;Yf.exports=OR});var Kf=s((d5r,Xf)=>{"use strict";var SR=fr();function IR(r){return r===0&&1/r===SR}Xf.exports=IR});var qa=s((_5r,Qf)=>{"use strict";var FR=Kf();Qf.exports=FR});var $f=s((T5r,Zf)=>{"use strict";var LR=k(),PR=qa();function MR(){var r;return e;function e(t){return arguments.length===0?r===void 0?null:r:((r===void 0||t<r||LR(t)||t===r&&PR(t))&&(r=t),r)}}Zf.exports=MR});var zf=s((A5r,Jf)=>{"use strict";var RR=$f();Jf.exports=RR});var rv=s((N5r,xf)=>{"use strict";var VR=z(),CR=fr(),BR=k();function kR(){var r,e=CR,t=VR;return i;function i(a){return arguments.length===0?r===void 0?null:r:(BR(a)&&(t=a,e=a),a>e&&(e=a),a<t&&(t=a),r=e-t,r)}}xf.exports=kR});var tv=s((O5r,ev)=>{"use strict";var jR=rv();ev.exports=jR});var av=s((S5r,iv)=>{"use strict";var GR=z(),HR=fr(),UR=k();function WR(){var r=HR,e=GR,t;return i;function i(a){return arguments.length===0?t===void 0?null:t/2:(UR(a)&&(e=a,r=a),a>r&&(r=a),a<e&&(e=a),t=r+e,t/2)}}iv.exports=WR});var uv=s((I5r,nv)=>{"use strict";var DR=av();nv.exports=DR});var ov=s((F5r,sv)=>{"use strict";function YR(r){return Math.abs(r)}sv.exports=YR});var H=s((L5r,fv)=>{"use strict";var XR=ov();fv.exports=XR});var lv=s((P5r,vv)=>{"use strict";var wa=H();function KR(){var r,e,t,i,a,n,u;return r=0,e=0,i=0,o;function o(f){return arguments.length===0?t?r+i+e:null:(t=!0,n=r+f,wa(r)>=wa(f)?u=r-n+f:u=f-n+r,r=n,n=i+u,wa(i)>=wa(u)?a=i-n+u:a=u-n+i,i=n,e+=a,r+i+e)}}vv.exports=KR});var pv=s((M5r,cv)=>{"use strict";var QR=lv();cv.exports=QR});var mv=s((R5r,hv)=>{"use strict";function ZR(){var r,e;return r=0,e=0,t;function t(i){return arguments.length===0?e===0?null:r:(e+=1,r+=(i-r)/e,r)}}hv.exports=ZR});var gv=s((V5r,yv)=>{"use strict";var $R=mv();yv.exports=$R});var wv=s((C5r,qv)=>{"use strict";var JR=typeof Object.defineProperty=="function"?Object.defineProperty:null;qv.exports=JR});var Ev=s((B5r,bv)=>{"use strict";var zR=wv();function xR(){try{return zR({},"x",{}),!0}catch{return!1}}bv.exports=xR});var _v=s((k5r,dv)=>{"use strict";var rV=Object.defineProperty;dv.exports=rV});var v0=s((j5r,Tv)=>{"use strict";function eV(r){return typeof r=="number"}Tv.exports=eV});var l0=s((G5r,Nv)=>{"use strict";function tV(r){return r[0]==="-"}function Av(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function iV(r,e,t){var i=!1,a=e-r.length;return a<0||(tV(r)&&(i=!0,r=r.substr(1)),r=t?r+Av(a):Av(a)+r,i&&(r="-"+r)),r}Nv.exports=iV});var Fv=s((H5r,Iv)=>{"use strict";var aV=v0(),Ov=l0(),nV=String.prototype.toLowerCase,Sv=String.prototype.toUpperCase;function uV(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!aV(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Ov(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Ov(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Sv.call(r.specifier)?Sv.call(t):nV.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Iv.exports=uV});var Pv=s((U5r,Lv)=>{"use strict";function sV(r){return typeof r=="string"}Lv.exports=sV});var Vv=s((W5r,Rv)=>{"use strict";var oV=Math.abs,fV=String.prototype.toLowerCase,Mv=String.prototype.toUpperCase,ct=String.prototype.replace,vV=/e\+(\d)$/,lV=/e-(\d)$/,cV=/^(\d+)$/,pV=/^(\d+)e/,hV=/\.0$/,mV=/\.0*e/,yV=/(\..*[^0])0*e/;function gV(r,e){var t,i;switch(e.specifier){case"e":case"E":i=r.toExponential(e.precision);break;case"f":case"F":i=r.toFixed(e.precision);break;case"g":case"G":oV(r)<1e-4?(t=e.precision,t>0&&(t-=1),i=r.toExponential(t)):i=r.toPrecision(e.precision),e.alternate||(i=ct.call(i,yV,"$1e"),i=ct.call(i,mV,"e"),i=ct.call(i,hV,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ct.call(i,vV,"e+0$1"),i=ct.call(i,lV,"e-0$1"),e.alternate&&(i=ct.call(i,cV,"$1."),i=ct.call(i,pV,"$1.e")),r>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Mv.call(e.specifier)?Mv.call(i):fV.call(i),i}Rv.exports=gV});var kv=s((D5r,Bv)=>{"use strict";function Cv(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function qV(r,e,t){var i=e-r.length;return i<0||(r=t?r+Cv(i):Cv(i)+r),r}Bv.exports=qV});var Gv=s((Y5r,jv)=>{"use strict";var wV=Fv(),bV=Pv(),EV=v0(),dV=Vv(),_V=kv(),TV=l0(),AV=String.fromCharCode,NV=Array.isArray;function ba(r){return r!==r}function OV(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function SV(r){var e,t,i,a,n,u,o,f,l,v;if(!NV(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,l=0;l<r.length;l++)if(i=r[l],bV(i))u+=i;else{if(e=i.precision!==void 0,i=OV(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(a=t.charAt(v),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,ba(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,ba(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=wV(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!ba(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ba(n)?String(i.arg):AV(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(e||(i.precision=6),f=parseFloat(i.arg),!isFinite(f)){if(!EV(i.arg))throw new Error("invalid floating-point number. Value: "+u);f=i.arg,i.padZeros=!1}i.arg=dV(f,i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=TV(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_V(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}jv.exports=SV});var Uv=s((X5r,Hv)=>{"use strict";var IV=Gv();Hv.exports=IV});var Dv=s((K5r,Wv)=>{"use strict";var Ea=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function FV(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function LV(r){var e,t,i,a;for(t=[],a=0,i=Ea.exec(r);i;)e=r.slice(a,Ea.lastIndex-i[0].length),e.length&&t.push(e),i[6]==="%"?t.push("%"):t.push(FV(i)),a=Ea.lastIndex,i=Ea.exec(r);return e=r.slice(a),e.length&&t.push(e),t}Wv.exports=LV});var Xv=s((Q5r,Yv)=>{"use strict";var PV=Dv();Yv.exports=PV});var Qv=s((Z5r,Kv)=>{"use strict";function MV(r){return typeof r=="string"}Kv.exports=MV});var Jv=s(($5r,$v)=>{"use strict";var RV=Uv(),VV=Xv(),CV=Qv();function Zv(r){var e,t;if(!CV(r))throw new TypeError(Zv("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[VV(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return RV.apply(null,e)}$v.exports=Zv});var Q=s((J5r,zv)=>{"use strict";var BV=Jv();zv.exports=BV});var a1=s((z5r,i1)=>{"use strict";var xv=Q(),Pt=Object.prototype,r1=Pt.toString,e1=Pt.__defineGetter__,t1=Pt.__defineSetter__,kV=Pt.__lookupGetter__,jV=Pt.__lookupSetter__;function GV(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||r1.call(r)==="[object Array]")throw new TypeError(xv("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||r1.call(t)==="[object Array]")throw new TypeError(xv("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(kV.call(r,e)||jV.call(r,e)?(i=r.__proto__,r.__proto__=Pt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&e1&&e1.call(r,e,t.get),u&&t1&&t1.call(r,e,t.set),r}i1.exports=GV});var pt=s((x5r,n1)=>{"use strict";var HV=Ev(),UV=_v(),WV=a1(),c0;HV()?c0=UV:c0=WV;n1.exports=c0});var s1=s((r7r,u1)=>{"use strict";var DV=pt();function YV(r,e,t){DV(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}u1.exports=YV});var j=s((e7r,o1)=>{"use strict";var XV=s1();o1.exports=XV});var p0=s((t7r,f1)=>{"use strict";function KV(r){return typeof r=="number"}f1.exports=KV});var l1=s((i7r,v1)=>{"use strict";function QV(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}v1.exports=QV});var p1=s((a7r,c1)=>{"use strict";var ZV=l1();c1.exports=ZV});var m1=s((n7r,h1)=>{"use strict";var $V=p1(),JV=$V();function zV(){return JV&&typeof Symbol.toStringTag=="symbol"}h1.exports=zV});var oi=s((u7r,y1)=>{"use strict";var xV=m1();y1.exports=xV});var h0=s((s7r,g1)=>{"use strict";var rC=Object.prototype.toString;g1.exports=rC});var w1=s((o7r,q1)=>{"use strict";var eC=h0();function tC(r){return eC.call(r)}q1.exports=tC});var E1=s((f7r,b1)=>{"use strict";var iC=Object.prototype.hasOwnProperty;function aC(r,e){return r==null?!1:iC.call(r,e)}b1.exports=aC});var _r=s((v7r,d1)=>{"use strict";var nC=E1();d1.exports=nC});var T1=s((l7r,_1)=>{"use strict";var uC=typeof Symbol=="function"?Symbol:void 0;_1.exports=uC});var da=s((c7r,A1)=>{"use strict";var sC=T1();A1.exports=sC});var S1=s((p7r,O1)=>{"use strict";var N1=da(),oC=typeof N1=="function"?N1.toStringTag:"";O1.exports=oC});var F1=s((h7r,I1)=>{"use strict";var fC=_r(),fi=S1(),m0=h0();function vC(r){var e,t,i;if(r==null)return m0.call(r);t=r[fi],e=fC(r,fi);try{r[fi]=void 0}catch{return m0.call(r)}return i=m0.call(r),e?r[fi]=t:delete r[fi],i}I1.exports=vC});var vr=s((m7r,L1)=>{"use strict";var lC=oi(),cC=w1(),pC=F1(),y0;lC()?y0=pC:y0=cC;L1.exports=y0});var M1=s((y7r,P1)=>{"use strict";var hC=Lt(),mC=hC.prototype.toString;P1.exports=mC});var V1=s((g7r,R1)=>{"use strict";var yC=M1();function gC(r){try{return yC.call(r),!0}catch{return!1}}R1.exports=gC});var g0=s((q7r,C1)=>{"use strict";var qC=oi(),wC=vr(),bC=Lt(),EC=V1(),dC=qC();function _C(r){return typeof r=="object"?r instanceof bC?!0:dC?EC(r):wC(r)==="[object Number]":!1}C1.exports=_C});var k1=s((w7r,B1)=>{"use strict";var TC=p0(),AC=g0();function NC(r){return TC(r)||AC(r)}B1.exports=NC});var Hr=s((b7r,G1)=>{"use strict";var j1=j(),q0=k1(),OC=p0(),SC=g0();j1(q0,"isPrimitive",OC);j1(q0,"isObject",SC);G1.exports=q0});var W1=s((E7r,U1)=>{"use strict";var IC=Hr().isPrimitive,H1=k(),FC=Q();function LC(r){var e,t,i,a;if(i=0,a=0,arguments.length){if(!IC(r))throw new TypeError(FC("invalid argument. Must provide a number. Value: `%s`.",r));return t=r,u}return t=0,n;function n(o){return arguments.length===0?a===0?null:a===1?H1(i)?NaN:0:i/(a-1):(a+=1,e=o-t,t+=e/a,i+=e*(o-t),a<2?H1(i)?NaN:0:i/(a-1))}function u(o){return arguments.length===0?a===0?null:i/a:(a+=1,e=o-t,i+=e*e,i/a)}}U1.exports=LC});var Y1=s((d7r,D1)=>{"use strict";var PC=W1();D1.exports=PC});var K1=s((_7r,X1)=>{"use strict";var MC=Math.sqrt;X1.exports=MC});var x=s((T7r,Q1)=>{"use strict";var RC=K1();Q1.exports=RC});var J1=s((A7r,$1)=>{"use strict";var VC=Hr().isPrimitive,_a=x(),Z1=k(),CC=Q();function BC(r){var e,t,i,a;if(i=0,a=0,arguments.length){if(!VC(r))throw new TypeError(CC("invalid argument. Must provide a number. Value: `%s`.",r));return t=r,u}return t=0,n;function n(o){return arguments.length===0?a===0?null:a===1?Z1(i)?NaN:0:_a(i/(a-1)):(a+=1,e=o-t,t+=e/a,i+=e*(o-t),a<2?Z1(i)?NaN:0:_a(i/(a-1)))}function u(o){return arguments.length===0?a===0?null:_a(i/a):(a+=1,e=o-t,i+=e*e,_a(i/a))}}$1.exports=BC});var x1=s((N7r,z1)=>{"use strict";var kC=J1();z1.exports=kC});var el=s((O7r,rl)=>{"use strict";var jC=Math.floor;rl.exports=jC});var lr=s((S7r,tl)=>{"use strict";var GC=el();tl.exports=GC});var al=s((I7r,il)=>{"use strict";var HC=lr();function UC(r){return HC(r)===r}il.exports=UC});var Or=s((F7r,nl)=>{"use strict";var WC=al();nl.exports=WC});var sl=s((L7r,ul)=>{"use strict";var DC=Or();function YC(r){return DC(r/2)}ul.exports=YC});var Ta=s((P7r,ol)=>{"use strict";var XC=sl();ol.exports=XC});var ll=s((M7r,vl)=>{"use strict";var fl=Ta();function KC(r){return r>0?fl(r-1):fl(r+1)}vl.exports=KC});var Aa=s((R7r,cl)=>{"use strict";var QC=ll();cl.exports=QC});var hl=s((V7r,pl)=>{"use strict";var ZC=z(),$C=fr();function JC(r){return r===ZC||r===$C}pl.exports=JC});var je=s((C7r,ml)=>{"use strict";var zC=hl();ml.exports=zC});var gl=s((B7r,yl)=>{"use strict";var xC=vr(),rB=typeof Uint32Array=="function";function eB(r){return rB&&r instanceof Uint32Array||xC(r)==="[object Uint32Array]"}yl.exports=eB});var w0=s((k7r,ql)=>{"use strict";var tB=gl();ql.exports=tB});var vi=s((j7r,wl)=>{"use strict";var iB=4294967295;wl.exports=iB});var El=s((G7r,bl)=>{"use strict";var aB=typeof Uint32Array=="function"?Uint32Array:null;bl.exports=aB});var Tl=s((H7r,_l)=>{"use strict";var nB=w0(),b0=vi(),dl=El();function uB(){var r,e;if(typeof dl!="function")return!1;try{e=[1,3.14,-3.14,b0+1,b0+2],e=new dl(e),r=nB(e)&&e[0]===1&&e[1]===3&&e[2]===b0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}_l.exports=uB});var Nl=s((U7r,Al)=>{"use strict";var sB=Tl();Al.exports=sB});var Sl=s((W7r,Ol)=>{"use strict";var oB=typeof Uint32Array=="function"?Uint32Array:void 0;Ol.exports=oB});var Fl=s((D7r,Il)=>{"use strict";function fB(){throw new Error("not implemented")}Il.exports=fB});var Sr=s((Y7r,Ll)=>{"use strict";var vB=Nl(),lB=Sl(),cB=Fl(),E0;vB()?E0=lB:E0=cB;Ll.exports=E0});var Ml=s((X7r,Pl)=>{"use strict";var pB=vr(),hB=typeof Float64Array=="function";function mB(r){return hB&&r instanceof Float64Array||pB(r)==="[object Float64Array]"}Pl.exports=mB});var Vl=s((K7r,Rl)=>{"use strict";var yB=Ml();Rl.exports=yB});var Bl=s((Q7r,Cl)=>{"use strict";var gB=typeof Float64Array=="function"?Float64Array:null;Cl.exports=gB});var Gl=s((Z7r,jl)=>{"use strict";var qB=Vl(),kl=Bl();function wB(){var r,e;if(typeof kl!="function")return!1;try{e=new kl([1,3.14,-3.14,NaN]),r=qB(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}jl.exports=wB});var d0=s(($7r,Hl)=>{"use strict";var bB=Gl();Hl.exports=bB});var Wl=s((J7r,Ul)=>{"use strict";var EB=typeof Float64Array=="function"?Float64Array:void 0;Ul.exports=EB});var Yl=s((z7r,Dl)=>{"use strict";function dB(){throw new Error("not implemented")}Dl.exports=dB});var Tr=s((x7r,Xl)=>{"use strict";var _B=d0(),TB=Wl(),AB=Yl(),_0;_B()?_0=TB:_0=AB;Xl.exports=_0});var Ql=s((r8r,Kl)=>{"use strict";var NB=vr(),OB=typeof Uint8Array=="function";function SB(r){return OB&&r instanceof Uint8Array||NB(r)==="[object Uint8Array]"}Kl.exports=SB});var $l=s((e8r,Zl)=>{"use strict";var IB=Ql();Zl.exports=IB});var zl=s((t8r,Jl)=>{"use strict";var FB=255;Jl.exports=FB});var r2=s((i8r,xl)=>{"use strict";var LB=typeof Uint8Array=="function"?Uint8Array:null;xl.exports=LB});var i2=s((a8r,t2)=>{"use strict";var PB=$l(),T0=zl(),e2=r2();function MB(){var r,e;if(typeof e2!="function")return!1;try{e=[1,3.14,-3.14,T0+1,T0+2],e=new e2(e),r=PB(e)&&e[0]===1&&e[1]===3&&e[2]===T0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}t2.exports=MB});var n2=s((n8r,a2)=>{"use strict";var RB=i2();a2.exports=RB});var s2=s((u8r,u2)=>{"use strict";var VB=typeof Uint8Array=="function"?Uint8Array:void 0;u2.exports=VB});var f2=s((s8r,o2)=>{"use strict";function CB(){throw new Error("not implemented")}o2.exports=CB});var Ge=s((o8r,v2)=>{"use strict";var BB=n2(),kB=s2(),jB=f2(),A0;BB()?A0=kB:A0=jB;v2.exports=A0});var c2=s((f8r,l2)=>{"use strict";var GB=vr(),HB=typeof Uint16Array=="function";function UB(r){return HB&&r instanceof Uint16Array||GB(r)==="[object Uint16Array]"}l2.exports=UB});var h2=s((v8r,p2)=>{"use strict";var WB=c2();p2.exports=WB});var y2=s((l8r,m2)=>{"use strict";var DB=65535;m2.exports=DB});var q2=s((c8r,g2)=>{"use strict";var YB=typeof Uint16Array=="function"?Uint16Array:null;g2.exports=YB});var E2=s((p8r,b2)=>{"use strict";var XB=h2(),N0=y2(),w2=q2();function KB(){var r,e;if(typeof w2!="function")return!1;try{e=[1,3.14,-3.14,N0+1,N0+2],e=new w2(e),r=XB(e)&&e[0]===1&&e[1]===3&&e[2]===N0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}b2.exports=KB});var _2=s((h8r,d2)=>{"use strict";var QB=E2();d2.exports=QB});var A2=s((m8r,T2)=>{"use strict";var ZB=typeof Uint16Array=="function"?Uint16Array:void 0;T2.exports=ZB});var O2=s((y8r,N2)=>{"use strict";function $B(){throw new Error("not implemented")}N2.exports=$B});var ht=s((g8r,S2)=>{"use strict";var JB=_2(),zB=A2(),xB=O2(),O0;JB()?O0=zB:O0=xB;S2.exports=O0});var F2=s((q8r,I2)=>{"use strict";var rk=Ge(),ek=ht(),tk={uint16:ek,uint8:rk};I2.exports=tk});var M2=s((w8r,P2)=>{"use strict";var L2=F2();function ik(){var r,e;return r=new L2.uint16(1),r[0]=4660,e=new L2.uint8(r.buffer),e[0]===52}var ak=ik();P2.exports=ak});var mt=s((b8r,R2)=>{"use strict";var nk=M2();R2.exports=nk});var B2=s((E8r,C2)=>{"use strict";var uk=mt(),V2,S0,I0;uk===!0?(S0=1,I0=0):(S0=0,I0=1);V2={HIGH:S0,LOW:I0};C2.exports=V2});var F0=s((d8r,H2)=>{"use strict";var sk=Sr(),ok=Tr(),j2=B2(),G2=new ok(1),k2=new sk(G2.buffer),fk=j2.HIGH,vk=j2.LOW;function lk(r,e,t,i){return G2[0]=r,e[i]=k2[fk],e[i+t]=k2[vk],e}H2.exports=lk});var W2=s((_8r,U2)=>{"use strict";var ck=F0();function pk(r){return ck(r,[0,0],1,0)}U2.exports=pk});var Na=s((T8r,Y2)=>{"use strict";var hk=j(),D2=W2(),mk=F0();hk(D2,"assign",mk);Y2.exports=D2});var K2=s((A8r,X2)=>{"use strict";var yk=mt(),L0;yk===!0?L0=0:L0=1;X2.exports=L0});var Z2=s((N8r,Q2)=>{"use strict";var gk=Sr(),qk=Tr(),wk=K2(),P0=new qk(1),bk=new gk(P0.buffer);function Ek(r,e){return P0[0]=r,bk[wk]=e>>>0,P0[0]}Q2.exports=Ek});var Mt=s((O8r,$2)=>{"use strict";var dk=Z2();$2.exports=dk});var z2=s((S8r,J2)=>{"use strict";function _k(r){return r|0}J2.exports=_k});var M0=s((I8r,x2)=>{"use strict";var Tk=z2();x2.exports=Tk});var He=s((F8r,rc)=>{"use strict";var Ak=2147483647;rc.exports=Ak});var tc=s((L8r,ec)=>{"use strict";var Nk=2147483648;ec.exports=Nk});var ac=s((P8r,ic)=>{"use strict";var Ok=mt(),R0;Ok===!0?R0=1:R0=0;ic.exports=R0});var sc=s((M8r,uc)=>{"use strict";var Sk=Sr(),Ik=Tr(),Fk=ac(),nc=new Ik(1),Lk=new Sk(nc.buffer);function Pk(r){return nc[0]=r,Lk[Fk]}uc.exports=Pk});var Cr=s((R8r,oc)=>{"use strict";var Mk=sc();oc.exports=Mk});var lc=s((V8r,vc)=>{"use strict";var Rk=mt(),fc,V0,C0;Rk===!0?(V0=1,C0=0):(V0=0,C0=1);fc={HIGH:V0,LOW:C0};vc.exports=fc});var yc=s((C8r,mc)=>{"use strict";var Vk=Sr(),Ck=Tr(),pc=lc(),hc=new Ck(1),cc=new Vk(hc.buffer),Bk=pc.HIGH,kk=pc.LOW;function jk(r,e){return cc[Bk]=r,cc[kk]=e,hc[0]}mc.exports=jk});var li=s((B8r,gc)=>{"use strict";var Gk=yc();gc.exports=Gk});var wc=s((k8r,qc)=>{"use strict";var Hk=tc(),Uk=He(),Wk=Na(),Dk=Cr(),Yk=li(),B0=[0,0];function Xk(r,e){var t,i;return Wk.assign(r,B0,1,0),t=B0[0],t&=Uk,i=Dk(e),i&=Hk,t|=i,Yk(t,B0[1])}qc.exports=Xk});var Oa=s((j8r,bc)=>{"use strict";var Kk=wc();bc.exports=Kk});var _c=s((G8r,dc)=>{"use strict";var Ec=Aa(),Qk=Oa(),Zk=fr(),Sa=z();function $k(r,e){return e===Zk?Sa:e===Sa?0:e>0?Ec(e)?r:0:Ec(e)?Qk(Sa,r):Sa}dc.exports=$k});var Ac=s((H8r,Tc)=>{"use strict";var Jk=He(),zk=Cr(),xk=1072693247,Ia=1e300,Fa=1e-300;function rj(r,e){var t,i;return i=zk(r),t=i&Jk,t<=xk?e<0?Ia*Ia:Fa*Fa:e>0?Ia*Ia:Fa*Fa}Tc.exports=rj});var Sc=s((U8r,Oc)=>{"use strict";var ej=H(),Nc=z();function tj(r,e){return r===-1?(r-r)/(r-r):r===1?1:ej(r)<1==(e===Nc)?0:Nc}Oc.exports=tj});var Fc=s((W8r,Ic)=>{"use strict";var ij=mt(),k0;ij===!0?k0=1:k0=0;Ic.exports=k0});var Pc=s((D8r,Lc)=>{"use strict";var aj=Sr(),nj=Tr(),uj=Fc(),j0=new nj(1),sj=new aj(j0.buffer);function oj(r,e){return j0[0]=r,sj[uj]=e>>>0,j0[0]}Lc.exports=oj});var Rt=s((Y8r,Mc)=>{"use strict";var fj=Pc();Mc.exports=fj});var Ue=s((X8r,Rc)=>{"use strict";var vj=1023;Rc.exports=vj});var G0=s((K8r,Vc)=>{"use strict";var lj=20;Vc.exports=lj});var Bc=s((Q8r,Cc)=>{"use strict";function cj(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}Cc.exports=cj});var Hc=s((Z8r,Gc)=>{"use strict";var pj=Cr(),La=Mt(),kc=Rt(),hj=Ue(),mj=G0(),yj=Bc(),gj=1048575,jc=1048576,qj=1072693248,wj=536870912,bj=524288,Ej=9007199254740992,dj=.9617966939259756,_j=.9617967009544373,Tj=-7028461650952758e-24,Aj=[1,1.5],Nj=[0,.5849624872207642],Oj=[0,1350039202129749e-23];function Sj(r,e,t){var i,a,n,u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A,d,G;return A=0,t<jc&&(e*=Ej,A-=53,t=pj(e)),A+=(t>>mj)-hj|0,d=t&gj|0,t=d|qj|0,d<=235662?G=0:d<767610?G=1:(G=0,A+=1,t-=jc),e=kc(e,t),v=Aj[G],T=e-v,E=1/(e+v),a=T*E,u=La(a,0),i=(t>>1|wj)+bj,i+=G<<18,f=kc(0,i),l=e-(f-v),o=E*(T-u*f-u*l),n=a*a,w=n*n*yj(n),w+=o*(u+a),n=u*u,f=3+n+w,f=La(f,0),l=w-(f-3-n),T=u*f,E=o*f+l*a,p=T+E,p=La(p,0),h=E-(p-T),m=_j*p,y=Tj*p+h*dj+Oj[G],c=Nj[G],b=A,g=m+y+c+b,g=La(g,0),q=y-(g-b-c-m),r[0]=g,r[1]=q,r}Gc.exports=Sj});var Wc=s(($8r,Uc)=>{"use strict";function Ij(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}Uc.exports=Ij});var Yc=s((J8r,Dc)=>{"use strict";var Fj=Mt(),Lj=Wc(),Pj=1.4426950408889634,Mj=1.4426950216293335,Rj=19259629911266175e-24;function Vj(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*Lj(a),u=Mj*a,o=a*Rj-n*Pj,i=u+o,i=Fj(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}Dc.exports=Vj});var H0=s((z8r,Xc)=>{"use strict";var Cj=1023;Xc.exports=Cj});var Qc=s((x8r,Kc)=>{"use strict";var Bj=-1023;Kc.exports=Bj});var $c=s((r9r,Zc)=>{"use strict";var kj=-1074;Zc.exports=kj});var We=s((e9r,Jc)=>{"use strict";var jj=22250738585072014e-324;Jc.exports=jj});var U0=s((t9r,zc)=>{"use strict";var Gj=We(),Hj=je(),Uj=k(),Wj=H(),Dj=4503599627370496;function Yj(r,e,t,i){return Uj(r)||Hj(r)?(e[i]=r,e[i+t]=0,e):r!==0&&Wj(r)<Gj?(e[i]=r*Dj,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}zc.exports=Yj});var r3=s((i9r,xc)=>{"use strict";var Xj=U0();function Kj(r){return Xj(r,[0,0],1,0)}xc.exports=Kj});var i3=s((a9r,t3)=>{"use strict";var Qj=j(),e3=r3(),Zj=U0();Qj(e3,"assign",Zj);t3.exports=e3});var ci=s((n9r,a3)=>{"use strict";var $j=2146435072;a3.exports=$j});var u3=s((u9r,n3)=>{"use strict";var Jj=Cr(),zj=ci(),xj=Ue();function rG(r){var e=Jj(r);return e=(e&zj)>>>20,e-xj|0}n3.exports=rG});var o3=s((s9r,s3)=>{"use strict";var eG=u3();s3.exports=eG});var v3=s((o9r,f3)=>{"use strict";var tG=z(),iG=fr(),aG=Ue(),nG=H0(),uG=Qc(),sG=$c(),oG=k(),fG=je(),vG=Oa(),lG=i3().assign,cG=o3(),pG=Na(),hG=li(),mG=2220446049250313e-31,yG=2148532223,W0=[0,0],D0=[0,0];function gG(r,e){var t,i;return e===0||r===0||oG(r)||fG(r)?r:(lG(r,W0,1,0),r=W0[0],e+=W0[1],e+=cG(r),e<sG?vG(0,r):e>nG?r<0?iG:tG:(e<=uG?(e+=52,i=mG):i=1,pG.assign(r,D0,1,0),t=D0[0],t&=yG,t|=e+aG<<20,i*hG(t,D0[1])))}f3.exports=gG});var De=s((f9r,l3)=>{"use strict";var qG=v3();l3.exports=qG});var p3=s((v9r,c3)=>{"use strict";var wG=.6931471805599453;c3.exports=wG});var Y0=s((l9r,h3)=>{"use strict";var bG=1048575;h3.exports=bG});var y3=s((c9r,m3)=>{"use strict";function EG(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}m3.exports=EG});var _3=s((p9r,d3)=>{"use strict";var dG=Cr(),g3=Rt(),_G=Mt(),TG=M0(),AG=De(),NG=p3(),q3=Ue(),w3=He(),b3=Y0(),pi=G0(),OG=y3(),E3=1048576,SG=1071644672,IG=.6931471824645996,FG=-1904654299957768e-24;function LG(r,e,t){var i,a,n,u,o,f,l,v,c,p,h;return p=r&w3|0,h=(p>>pi)-q3|0,c=0,p>SG&&(c=r+(E3>>h+1)>>>0,h=((c&w3)>>pi)-q3|0,i=(c&~(b3>>h))>>>0,n=g3(0,i),c=(c&b3|E3)>>pi-h>>>0,r<0&&(c=-c),e-=n),n=t+e,n=_G(n,0),o=n*IG,f=(t-(n-e))*NG+n*FG,v=o+f,l=f-(v-o),n=v*v,a=v-n*OG(n),u=v*a/(a-2)-(l+v*l),v=1-(u-v),r=dG(v),r=TG(r),r+=c<<pi>>>0,r>>pi<=0?v=AG(v,c):v=g3(v,r),v}d3.exports=LG});var R3=s((h9r,M3)=>{"use strict";var T3=k(),A3=Aa(),N3=je(),PG=Or(),O3=x(),MG=H(),X0=Na(),RG=Mt(),S3=M0(),VG=fr(),CG=z(),K0=He(),BG=_c(),kG=Ac(),jG=Sc(),GG=Hc(),HG=Yc(),UG=_3(),WG=1072693247,DG=1105199104,YG=1139802112,I3=1083179008,XG=1072693248,KG=1083231232,QG=3230714880,F3=31,Ye=1e300,Xe=1e-300,ZG=8008566259537294e-32,Ne=[0,0],L3=[0,0];function P3(r,e){var t,i,a,n,u,o,f,l,v,c,p,h,m,y,g,q;if(T3(r)||T3(e))return NaN;if(X0.assign(e,Ne,1,0),o=Ne[0],f=Ne[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return O3(r);if(e===-.5)return 1/O3(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(N3(e))return jG(r,e)}if(X0.assign(r,Ne,1,0),n=Ne[0],u=Ne[1],u===0){if(n===0)return BG(r,e);if(r===1)return 1;if(r===-1&&A3(e))return-1;if(N3(r))return r===VG?P3(-0,-e):e<0?0:CG}if(r<0&&PG(e)===!1)return(r-r)/(r-r);if(a=MG(r),t=n&K0|0,i=o&K0|0,l=n>>>F3|0,v=o>>>F3|0,l&&A3(e)?l=-1:l=1,i>DG){if(i>YG)return kG(r,e);if(t<WG)return v===1?l*Ye*Ye:l*Xe*Xe;if(t>XG)return v===0?l*Ye*Ye:l*Xe*Xe;m=HG(L3,a)}else m=GG(L3,a,t);if(c=RG(e,0),h=(e-c)*m[0]+e*m[1],p=c*m[0],y=h+p,X0.assign(y,Ne,1,0),g=S3(Ne[0]),q=S3(Ne[1]),g>=I3){if((g-I3|q)!==0||h+ZG>y-p)return l*Ye*Ye}else if((g&K0)>=KG&&((g-QG|q)!==0||h<=y-p))return l*Xe*Xe;return y=UG(g,p,h),l*y}M3.exports=P3});var rr=s((m9r,V3)=>{"use strict";var $G=R3();V3.exports=$G});var j3=s((y9r,k3)=>{"use strict";var C3=k(),Pa=x(),B3=rr();function JG(){var r,e,t,i,a,n,u,o,f;return r=0,e=0,t=0,i=0,u=0,o=0,f=0,l;function l(v){return arguments.length===0?f<3?C3(o)?NaN:null:(n=Pa(f)*o/B3(u,1.5),Pa(f*(f-1))*n/(f-2)):(f+=1,e=v-i,r=e/f,t=e*r*(f-1),a=t*r*(f-2),a-=3*r*u,o+=a,u+=t,i+=r,f<3?C3(o)?NaN:null:(n=Pa(f)*o/B3(u,1.5),Pa(f*(f-1))*n/(f-2)))}}k3.exports=JG});var H3=s((g9r,G3)=>{"use strict";var zG=j3();G3.exports=zG});var D3=s((q9r,W3)=>{"use strict";var U3=k();function xG(){var r,e,t,i,a,n,u,o,f,l,v;return r=0,e=0,t=0,i=0,a=0,o=0,f=0,l=0,v=0,c;function c(p){return arguments.length===0?v<4?U3(l)?NaN:null:(u=v*l/(o*o)-3,(v-1)/((v-2)*(v-3))*((v+1)*u+6)):(v+=1,t=p-a,e=t/v,r=e*e,i=t*e*(v-1),n=i*r*(v*v-3*v+3),n+=6*r*o,n-=4*e*f,l+=n,n=i*e*(v-2),n-=3*e*o,f+=n,o+=i,a+=e,v<4?U3(l)?NaN:null:(u=v*l/(o*o)-3,(v-1)/((v-2)*(v-3))*((v+1)*u+6)))}}W3.exports=xG});var X3=s((w9r,Y3)=>{"use strict";var rH=D3();Y3.exports=rH});var Q3=s((b9r,K3)=>{"use strict";var eH=Ff(),tH=Hf(),iH=zf(),aH=tv(),nH=uv(),uH=pv(),sH=gv(),oH=Y1(),fH=x1(),vH=H3(),lH=X3();function cH(){var r,e,t,i,a,n,u,o,f,l,v,c;return n=eH(),c=uH(),f=sH(),e=oH(),o=fH(),t=vH(),i=lH(),l=tH(),v=iH(),u=aH(),r=nH(),a={},p;function p(h){return arguments.length===0||(a.count=n(h),a.max=l(h),a.min=v(h),a.range=u(h),a.midrange=r(h),a.sum=c(h),a.mean=f(h),a.variance=e(h),a.stdev=o(h),a.skewness=t(h),a.kurtosis=i(h)),a}}K3.exports=cH});var $3=s((E9r,Z3)=>{"use strict";var pH=Q3();Z3.exports=pH});var Q0=s((d9r,J3)=>{"use strict";var hH=4294967295;J3.exports=hH});var x3=s((_9r,z3)=>{"use strict";var mH=Or(),yH=Q0();function gH(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&mH(r.length)&&r.length>=0&&r.length<=yH}z3.exports=gH});var Z0=s((T9r,r6)=>{"use strict";var qH=x3();r6.exports=qH});var t6=s((A9r,e6)=>{"use strict";var wH=Z0(),bH=Q();function EH(r){if(typeof r!="function")throw new TypeError(bH("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!wH(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}e6.exports=EH});var a6=s((N9r,i6)=>{"use strict";var dH=t6();i6.exports=dH});var s6=s((O9r,u6)=>{"use strict";var n6=j(),$0=a6(),J0=Hr(),_H=$0(J0.isPrimitive),TH=$0(J0.isObject),z0=$0(J0);n6(z0,"primitives",_H);n6(z0,"objects",TH);u6.exports=z0});var x0=s((S9r,o6)=>{"use strict";var AH=z(),NH=fr(),OH=Or();function SH(r){return r<AH&&r>NH&&OH(r)}o6.exports=SH});var ru=s((I9r,f6)=>{"use strict";var IH=Hr().isPrimitive,FH=x0();function LH(r){return IH(r)&&FH(r)}f6.exports=LH});var eu=s((F9r,v6)=>{"use strict";var PH=Hr().isObject,MH=x0();function RH(r){return PH(r)&&MH(r.valueOf())}v6.exports=RH});var c6=s((L9r,l6)=>{"use strict";var VH=ru(),CH=eu();function BH(r){return VH(r)||CH(r)}l6.exports=BH});var Oe=s((P9r,h6)=>{"use strict";var p6=j(),tu=c6(),kH=ru(),jH=eu();p6(tu,"isPrimitive",kH);p6(tu,"isObject",jH);h6.exports=tu});var iu=s((M9r,m6)=>{"use strict";var GH=Oe().isPrimitive;function HH(r){return GH(r)&&r>=0}m6.exports=HH});var au=s((R9r,y6)=>{"use strict";var UH=Oe().isObject;function WH(r){return UH(r)&&r.valueOf()>=0}y6.exports=WH});var q6=s((V9r,g6)=>{"use strict";var DH=iu(),YH=au();function XH(r){return DH(r)||YH(r)}g6.exports=XH});var yt=s((C9r,b6)=>{"use strict";var w6=j(),nu=q6(),KH=iu(),QH=au();w6(nu,"isPrimitive",KH);w6(nu,"isObject",QH);b6.exports=nu});var uu=s((B9r,E6)=>{"use strict";var ZH=9007199254740991;E6.exports=ZH});var _6=s((k9r,d6)=>{"use strict";var $H=yt().isPrimitive,JH=uu();function zH(r){return r!==null&&typeof r=="object"&&$H(r.length)&&r.length<=JH&&typeof r.BYTES_PER_ELEMENT=="number"&&typeof r.byteOffset=="number"&&typeof r.byteLength=="number"}d6.exports=zH});var su=s((j9r,T6)=>{"use strict";var xH=_6();T6.exports=xH});var N6=s((G9r,A6)=>{"use strict";var rU=pt();function eU(r,e,t){rU(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}A6.exports=eU});var Ma=s((H9r,O6)=>{"use strict";var tU=N6();O6.exports=tU});var I6=s((U9r,S6)=>{"use strict";var iU=.34657359027997264;S6.exports=iU});var L6=s((W9r,F6)=>{"use strict";function aU(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}F6.exports=aU});var B6=s((D9r,C6)=>{"use strict";var nU=k(),P6=Cr(),ou=Rt(),uU=li(),M6=z(),sU=fr(),R6=Ue(),oU=I6(),fU=L6(),vU=709.782712893384,fu=.6931471803691238,vu=19082149292705877e-26,V6=1.4426950408889634,lU=38.816242111356935,cU=1.0397207708399179;function pU(r){var e,t,i,a,n,u,o,f,l,v,c,p,h;if(r===M6||nU(r))return r;if(r===sU)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=lU){if(i)return-1;if(f>=vU)return M6}if(u=P6(f)|0,f>oU)f<cU?i?(a=r+fu,n=-vu,h=-1):(a=r-fu,n=vu,h=1):(i?h=V6*r-.5:h=V6*r+.5,h|=0,c=h,a=r-c*fu,n=c*vu),r=a-n,v=a-r-n;else{if(u<1016070144)return r;h=0}return e=.5*r,l=r*e,o=1+l*fU(l),c=3-o*e,p=l*((o-c)/(6-r*c)),h===0?r-(r*p-l):(t=uU(R6+h<<20,0),p=r*(p-v)-v,p-=l,h===-1?.5*(r-p)-.5:h===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):h<=-2||h>56?(f=1-(p-r),h===1024?(a=P6(f)+(h<<20)|0,f=ou(f,a)):f*=t,f-1):(c=1,h<20?(a=1072693248-(2097152>>h)|0,c=ou(c,a),f=c-(p-r)):(a=R6-h<<20|0,c=ou(c,a),f=r-(p+c),f+=1),f*=t,f))}C6.exports=pU});var gt=s((Y9r,k6)=>{"use strict";var hU=B6();k6.exports=hU});var G6=s((X9r,j6)=>{"use strict";function mU(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}j6.exports=mU});var Y6=s((K9r,D6)=>{"use strict";var yU=k(),H6=Cr(),U6=Rt(),gU=z(),qU=fr(),W6=Ue(),wU=G6(),lu=.6931471803691238,cu=19082149292705877e-26,bU=.41421356237309503,EU=-.2928932188134525,dU=1862645149230957e-24,_U=5551115123125783e-32,TU=9007199254740992,AU=.6666666666666666;function NU(r){var e,t,i,a,n,u,o,f,l,v;if(r<-1||yU(r))return NaN;if(r===-1)return qU;if(r===gU||r===0)return r;if(r<0?i=-r:i=r,v=1,i<bU){if(i<dU)return i<_U?r:r-r*r*.5;r>EU&&(v=0,a=r,t=1)}return v!==0&&(i<TU?(l=1+r,t=H6(l),v=(t>>20)-W6,v>0?n=1-(l-r):n=r-(l-1),n/=l):(l=r,t=H6(l),v=(t>>20)-W6,n=0),t&=1048575,t<434334?l=U6(l,t|1072693248):(v+=1,l=U6(l,t|1071644672),t=1048576-t>>2),a=l-1),e=.5*a*a,t===0?a===0?(n+=v*cu,v*lu+n):(f=e*(1-AU*a),v*lu-(f-(v*cu+n)-a)):(u=a/(2+a),o=u*u,f=o*wU(o),v===0?a-(e-u*(e+f)):v*lu-(e-(u*(e+f)+(v*cu+n))-a))}D6.exports=NU});var ve=s((Q9r,X6)=>{"use strict";var OU=Y6();X6.exports=OU});var pu=s((Z9r,K6)=>{"use strict";var SU=.7853981633974483;K6.exports=SU});var Z6=s(($9r,Q6)=>{"use strict";function IU(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}Q6.exports=IU});var J6=s((J9r,$6)=>{"use strict";function FU(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}$6.exports=FU});var rp=s((z9r,x6)=>{"use strict";var LU=k(),PU=x(),z6=pu(),MU=Z6(),RU=J6(),VU=6123233995736766e-32;function CU(r){var e,t,i,a,n;if(LU(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*RU(t),t=PU(t+t),n=z6-t,t=t*a-VU,n-=t,n+=z6;else{if(i<1e-8)return r;t=i*i,n=t*MU(t),n=i*n+i}return e?-n:n}x6.exports=CU});var Ra=s((x9r,ep)=>{"use strict";var BU=rp();ep.exports=BU});var ip=s((rhr,tp)=>{"use strict";var kU=Math.ceil;tp.exports=kU});var np=s((ehr,ap)=>{"use strict";var jU=ip();ap.exports=jU});var sp=s((thr,up)=>{"use strict";var GU=lr(),HU=np();function UU(r){return r<0?HU(r):GU(r)}up.exports=UU});var Va=s((ihr,op)=>{"use strict";var WU=sp();op.exports=WU});var vp=s((ahr,fp)=>{"use strict";function DU(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}fp.exports=DU});var cp=s((nhr,lp)=>{"use strict";var YU=De(),XU=vp();function KU(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*XU(a),u=1-(e-i*n/(2-n)-r),YU(u,t)}lp.exports=KU});var qp=s((uhr,gp)=>{"use strict";var QU=k(),pp=Va(),ZU=fr(),hp=z(),$U=cp(),JU=.6931471803691238,zU=19082149292705877e-26,mp=1.4426950408889634,xU=709.782712893384,rW=-745.1332191019411,yp=1/(1<<28),eW=-yp;function tW(r){var e,t,i;return QU(r)||r===hp?r:r===ZU?0:r>xU?hp:r<rW?0:r>eW&&r<yp?1+r:(r<0?i=pp(mp*r-.5):i=pp(mp*r+.5),e=r-i*JU,t=i*zU,$U(e,t,i))}gp.exports=tW});var nr=s((shr,wp)=>{"use strict";var iW=qp();wp.exports=iW});var qt=s((ohr,bp)=>{"use strict";var aW=2.718281828459045;bp.exports=aW});var Ur=s((fhr,Ep)=>{"use strict";var nW=2220446049250313e-31;Ep.exports=nW});var _p=s((vhr,dp)=>{"use strict";function uW(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}dp.exports=uW});var Np=s((lhr,Ap)=>{"use strict";var Tp=k(),sW=ve(),oW=x(),fW=H(),vW=nr(),hu=rr(),lW=qt(),mu=Ur(),yu=_p(),gu=10.900511;function cW(r,e){var t,i,a,n,u,o,f;return Tp(r)||Tp(e)?NaN:r<0||e<0?NaN:e===1?1/r:r===1?1/e:(f=r+e,f<mu?(u=f/r,u/=e,u):f===r&&e<mu?1/e:f===e&&r<mu?1/r:(r<e&&(o=e,e=r,r=o),i=r+gu-.5,a=e+gu-.5,n=f+gu-.5,u=yu(r)*(yu(e)/yu(f)),t=r-.5-e,fW(e*t)<n*100&&r>100?u*=vW(t*sW(-e/n)):u*=hu(i/n,t),n>1e10?u*=hu(i/n*(a/n),e):u*=hu(i*a/(n*n),e),u*=oW(lW/a),u))}Ap.exports=cW});var hi=s((chr,Op)=>{"use strict";var pW=Np();Op.exports=pW});var Fp=s((phr,Ip)=>{"use strict";var hW=f0(),Sp=k(),qu=z();function mW(r,e){return Sp(r)||Sp(e)?NaN:r===qu||e===qu?qu:r===e&&r===0?hW(r)?r:e:r>e?r:e}Ip.exports=mW});var Ke=s((hhr,Lp)=>{"use strict";var yW=Fp();Lp.exports=yW});var Rp=s((mhr,Mp)=>{"use strict";var gW=qa(),Pp=k(),wu=fr();function qW(r,e){return Pp(r)||Pp(e)?NaN:r===wu||e===wu?wu:r===e&&r===0?gW(r)?r:e:r<e?r:e}Mp.exports=qW});var Qe=s((yhr,Vp)=>{"use strict";var wW=Rp();Vp.exports=wW});var Ze=s((ghr,Cp)=>{"use strict";var bW=17976931348623157e292;Cp.exports=bW});var Ca=s((qhr,Bp)=>{"use strict";var EW=2147483647;Bp.exports=EW});var Ba=s((whr,kp)=>{"use strict";var dW=1.5707963267948966;kp.exports=dW});var Se=s((bhr,jp)=>{"use strict";var _W=3.141592653589793;jp.exports=_W});var Hp=s((Ehr,Gp)=>{"use strict";function TW(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}Gp.exports=TW});var Wp=s((dhr,Up)=>{"use strict";function AW(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}Up.exports=AW});var Yp=s((_hr,Dp)=>{"use strict";var NW=Hp(),OW=Wp();function SW(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*NW(n),i+=a*a*OW(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}Dp.exports=SW});var bu=s((Thr,Xp)=>{"use strict";var IW=Yp();Xp.exports=IW});var Zp=s((Ahr,Qp)=>{"use strict";var Kp=-.16666666666666632,FW=.00833333333332249,LW=-.0001984126982985795,PW=27557313707070068e-22,MW=-25050760253406863e-24,RW=158969099521155e-24;function VW(r,e){var t,i,a,n;return n=r*r,a=n*n,t=FW+n*(LW+n*PW)+n*a*(MW+n*RW),i=n*r,e===0?r+i*(Kp+n*t):r-(n*(.5*e-i*t)-e-i*Kp)}Qp.exports=VW});var Eu=s((Nhr,$p)=>{"use strict";var CW=Zp();$p.exports=CW});var zp=s((Ohr,Jp)=>{"use strict";var BW=mt(),du;BW===!0?du=0:du=1;Jp.exports=du});var e4=s((Shr,r4)=>{"use strict";var kW=Sr(),jW=Tr(),GW=zp(),xp=new jW(1),HW=new kW(xp.buffer);function UW(r){return xp[0]=r,HW[GW]}r4.exports=UW});var i4=s((Ihr,t4)=>{"use strict";var WW=e4();t4.exports=WW});var n4=s((Fhr,a4)=>{"use strict";function DW(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}a4.exports=DW});var s4=s((Lhr,u4)=>{"use strict";var YW=n4();u4.exports=YW});var f4=s((Phr,o4)=>{"use strict";var XW=s4();function KW(r){return XW(0,r)}o4.exports=KW});var l4=s((Mhr,v4)=>{"use strict";var QW=f4();v4.exports=QW});var y4=s((Rhr,m4)=>{"use strict";var ZW=lr(),ka=De(),Ha=l4(),p4=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],$W=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],_u=16777216,Tu=5960464477539063e-23,ja=Ha(20),c4=Ha(20),Ga=Ha(20),br=Ha(20);function h4(r,e,t,i,a,n,u,o,f){var l,v,c,p,h,m,y,g,q;for(p=n,q=i[t],g=t,h=0;g>0;h++)v=Tu*q|0,br[h]=q-_u*v|0,q=i[g-1]+v,g-=1;if(q=ka(q,a),q-=8*ZW(q*.125),y=q|0,q-=y,c=0,a>0?(h=br[t-1]>>24-a,y+=h,br[t-1]-=h<<24-a,c=br[t-1]>>23-a):a===0?c=br[t-1]>>23:q>=.5&&(c=2),c>0){for(y+=1,l=0,h=0;h<t;h++)g=br[h],l===0?g!==0&&(l=1,br[h]=16777216-g):br[h]=16777215-g;if(a>0)switch(a){case 1:br[t-1]&=8388607;break;case 2:br[t-1]&=4194303;break}c===2&&(q=1-q,l!==0&&(q-=ka(1,a)))}if(q===0){for(g=0,h=t-1;h>=n;h--)g|=br[h];if(g===0){for(m=1;br[n-m]===0;m++);for(h=t+1;h<=t+m;h++){for(f[o+h]=p4[u+h],v=0,g=0;g<=o;g++)v+=r[g]*f[o+(h-g)];i[h]=v}return t+=m,h4(r,e,t,i,a,n,u,o,f)}for(t-=1,a-=24;br[t]===0;)t-=1,a-=24}else q=ka(q,-a),q>=_u?(v=Tu*q|0,br[t]=q-_u*v|0,t+=1,a+=24,br[t]=v):br[t]=q|0;for(v=ka(1,a),h=t;h>=0;h--)i[h]=v*br[h],v*=Tu;for(h=t;h>=0;h--){for(v=0,m=0;m<=p&&m<=t-h;m++)v+=$W[m]*i[h+m];Ga[t-h]=v}for(v=0,h=t;h>=0;h--)v+=Ga[h];for(c===0?e[0]=v:e[0]=-v,v=Ga[0]-v,h=1;h<=t;h++)v+=Ga[h];return c===0?e[1]=v:e[1]=-v,y&7}function JW(r,e,t,i){var a,n,u,o,f,l,v,c,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),l=t-24*(u+1),c=u-o,p=o+n,v=0;v<=p;v++)c<0?ja[v]=0:ja[v]=p4[c],c+=1;for(v=0;v<=n;v++){for(a=0,c=0;c<=o;c++)a+=r[c]*ja[o+(v-c)];c4[v]=a}return f=n,h4(r,e,f,c4,l,n,u,o,ja)}m4.exports=JW});var q4=s((Vhr,g4)=>{"use strict";var zW=Math.round;g4.exports=zW});var mi=s((Chr,w4)=>{"use strict";var xW=q4();w4.exports=xW});var _4=s((Bhr,d4)=>{"use strict";var rD=mi(),b4=Cr(),eD=.6366197723675814,tD=1.5707963267341256,iD=6077100506506192e-26,aD=6077100506303966e-26,nD=20222662487959506e-37,uD=20222662487111665e-37,sD=84784276603689e-45,E4=2047;function oD(r,e,t){var i,a,n,u,o,f,l;return a=rD(r*eD),u=r-a*tD,o=a*iD,l=e>>20|0,t[0]=u-o,i=b4(t[0]),f=l-(i>>20&E4),f>16&&(n=u,o=a*aD,u=n-o,o=a*nD-(n-u-o),t[0]=u-o,i=b4(t[0]),f=l-(i>>20&E4),f>49&&(n=u,o=a*uD,u=n-o,o=a*sD-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}d4.exports=oD});var A4=s((khr,T4)=>{"use strict";var fD=He(),vD=ci(),lD=Y0(),cD=Cr(),pD=i4(),hD=li(),mD=y4(),Ua=_4(),yD=0,gD=16777216,$e=1.5707963267341256,wt=6077100506506192e-26,Wa=2*wt,Da=3*wt,Ya=4*wt,qD=598523,wD=1072243195,bD=1073928572,ED=1074752122,dD=1074977148,_D=1075183036,TD=1075388923,AD=1075594811,ND=1094263291,yi=[0,0,0],gi=[0,0];function OD(r,e){var t,i,a,n,u,o,f,l;if(a=cD(r)|0,n=a&fD|0,n<=wD)return e[0]=r,e[1]=0,0;if(n<=ED)return(n&lD)===qD?Ua(r,n,e):n<=bD?a>0?(l=r-$e,e[0]=l-wt,e[1]=l-e[0]-wt,1):(l=r+$e,e[0]=l+wt,e[1]=l-e[0]+wt,-1):a>0?(l=r-2*$e,e[0]=l-Wa,e[1]=l-e[0]-Wa,2):(l=r+2*$e,e[0]=l+Wa,e[1]=l-e[0]+Wa,-2);if(n<=AD)return n<=_D?n===dD?Ua(r,n,e):a>0?(l=r-3*$e,e[0]=l-Da,e[1]=l-e[0]-Da,3):(l=r+3*$e,e[0]=l+Da,e[1]=l-e[0]+Da,-3):n===TD?Ua(r,n,e):a>0?(l=r-4*$e,e[0]=l-Ya,e[1]=l-e[0]-Ya,4):(l=r+4*$e,e[0]=l+Ya,e[1]=l-e[0]+Ya,-4);if(n<ND)return Ua(r,n,e);if(n>=vD)return e[0]=NaN,e[1]=NaN,0;for(t=pD(r),i=(n>>20)-1046,l=hD(n-(i<<20|0),t),o=0;o<2;o++)yi[o]=l|0,l=(l-yi[o])*gD;for(yi[2]=l,u=3;yi[u-1]===yD;)u-=1;return f=mD(yi,gi,i,u,1),a<0?(e[0]=-gi[0],e[1]=-gi[1],-f):(e[0]=gi[0],e[1]=gi[1],f)}T4.exports=OD});var Au=s((jhr,N4)=>{"use strict";var SD=A4();N4.exports=SD});var I4=s((Ghr,S4)=>{"use strict";var ID=He(),FD=ci(),LD=Cr(),O4=bu(),Nu=Eu(),PD=Au(),MD=1072243195,RD=1045430272,Ie=[0,0];function VD(r){var e,t;if(e=LD(r),e&=ID,e<=MD)return e<RD?r:Nu(r,0);if(e>=FD)return NaN;switch(t=PD(r,Ie),t&3){case 0:return Nu(Ie[0],Ie[1]);case 1:return O4(Ie[0],Ie[1]);case 2:return-Nu(Ie[0],Ie[1]);default:return-O4(Ie[0],Ie[1])}}S4.exports=VD});var Vt=s((Hhr,F4)=>{"use strict";var CD=I4();F4.exports=CD});var qi=s((Uhr,L4)=>{"use strict";var BD=2.5066282746310007;L4.exports=BD});var M4=s((Whr,P4)=>{"use strict";function kD(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}P4.exports=kD});var C4=s((Dhr,V4)=>{"use strict";var jD=qi(),R4=rr(),GD=nr(),HD=M4(),UD=143.01608;function WD(r){var e,t,i;return e=1/r,e=1+e*HD(e),t=GD(r),r>UD?(i=R4(r,.5*r-.25),t=i*(i/t)):t=R4(r,r-.5)/t,jD*t*e}V4.exports=WD});var k4=s((Yhr,B4)=>{"use strict";var DD=.5772156649015329;B4.exports=DD});var G4=s((Xhr,j4)=>{"use strict";var YD=k4();function XD(r,e){return e/((1+YD*r)*r)}j4.exports=XD});var U4=s((Khr,H4)=>{"use strict";function KD(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}H4.exports=KD});var $4=s((Qhr,Z4)=>{"use strict";var QD=k(),ZD=Or(),$D=qa(),W4=H(),JD=lr(),zD=Vt(),D4=z(),Y4=fr(),X4=Se(),K4=C4(),Q4=G4(),xD=U4();function rY(r){var e,t,i,a;if(ZD(r)&&r<0||r===Y4||QD(r))return NaN;if(r===0)return $D(r)?Y4:D4;if(r>171.61447887182297)return D4;if(r<-170.5674972726612)return 0;if(t=W4(r),t>33)return r>=0?K4(r):(i=JD(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*zD(X4*a),e*X4/(W4(a)*K4(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return Q4(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return Q4(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*xD(r))}Z4.exports=rY});var le=s((Zhr,J4)=>{"use strict";var eY=$4();J4.exports=eY});var wi=s(($hr,z4)=>{"use strict";var tY=170;z4.exports=tY});var x4=s((Jhr,iY)=>{iY.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var e5=s((zhr,r5)=>{"use strict";var aY=k(),nY=Or(),uY=le(),sY=z(),oY=wi(),fY=x4();function vY(r){return aY(r)?NaN:nY(r)?r<0?NaN:r<=oY?fY[r]:sY:uY(r+1)}r5.exports=vY});var Ou=s((xhr,t5)=>{"use strict";var lY=e5();t5.exports=lY});var a5=s((rmr,i5)=>{"use strict";function cY(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}i5.exports=cY});var u5=s((emr,n5)=>{"use strict";var pY=a5();n5.exports=pY});var o5=s((tmr,s5)=>{"use strict";var hY=u5();s5.exports=hY});var Ct=s((imr,f5)=>{"use strict";var mY=10.900511;f5.exports=mY});var q5=s((amr,g5)=>{"use strict";var v5=o5(),yY=le(),gY=ve(),l5=H(),c5=nr(),p5=rr(),h5=Ur(),qY=qt(),wY=Ct(),m5=wi(),bY=4269068009004705e289;function y5(r,e){var t,i,a;return r<h5?e>=m5?(i=y5(e,m5-e),i*=r,i*=bY,1/i):1/(r*yY(r+e)):(a=r+wY-.5,r+e===r?l5(e/a)<h5?t=c5(-e):t=1:(l5(e)<10?t=c5((.5-r)*gY(e/a)):t=p5(a/(a+e),r-.5),t*=v5(r)/v5(r+e)),t*=p5(qY/(a+e),e),t)}g5.exports=y5});var T5=s((nmr,_5)=>{"use strict";var EY=H(),w5=lr(),b5=le(),E5=Ou(),d5=wi(),dY=q5();function _Y(r,e){var t,i,a;if(r<=0||r+e<=0)return b5(r)/b5(r+e);if(i=w5(e),i===e){if(a=w5(r),a===r&&r<=d5&&r+e<=d5)return E5(a-1)/E5(i+a-1);if(EY(e)<20){if(e===0)return 1;if(e<0){for(r-=1,t=r,e+=1;e!==0;)r-=1,t*=r,e+=1;return t}for(t=1/r,e-=1;e!==0;)r+=1,t/=r,e-=1;return t}}return dY(r,e)}_5.exports=_Y});var Xa=s((umr,A5)=>{"use strict";var TY=T5();A5.exports=TY});var O5=s((smr,N5)=>{"use strict";function AY(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}N5.exports=AY});var I5=s((omr,S5)=>{"use strict";function NY(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}S5.exports=NY});var M5=s((fmr,P5)=>{"use strict";var F5=Cr(),OY=Rt(),SY=k(),IY=Ue(),FY=fr(),LY=O5(),PY=I5(),Ka=.6931471803691238,Qa=19082149292705877e-26,MY=0x40000000000000,RY=.3333333333333333,L5=1048575,VY=2146435072,CY=1048576,BY=1072693248;function kY(r){var e,t,i,a,n,u,o,f,l,v,c,p;return r===0?FY:SY(r)||r<0?NaN:(t=F5(r),n=0,t<CY&&(n-=54,r*=MY,t=F5(r)),t>=VY?r+r:(n+=(t>>20)-IY|0,t&=L5,f=t+614244&1048576|0,r=OY(r,t|f^BY),n+=f>>20|0,o=r-1,(L5&2+t)<3?o===0?n===0?0:n*Ka+n*Qa:(u=o*o*(.5-RY*o),n===0?o-u:n*Ka-(u-n*Qa-o)):(v=o/(2+o),p=v*v,f=t-398458|0,c=p*p,l=440401-t|0,a=c*LY(c),i=p*PY(c),f|=l,u=i+a,f>0?(e=.5*o*o,n===0?o-(e-v*(e+u)):n*Ka-(e-(v*(e+u)+n*Qa)-o)):n===0?o-v*(o-u):n*Ka-(v*(o-u)-n*Qa-o))))}P5.exports=kY});var er=s((vmr,R5)=>{"use strict";var jY=M5();R5.exports=jY});var B5=s((lmr,C5)=>{"use strict";var GY=Cr(),Su=bu(),V5=Eu(),HY=Au(),UY=He(),WY=ci(),Fe=[0,0],DY=1072243195,YY=1044381696;function XY(r){var e,t;if(e=GY(r),e&=UY,e<=DY)return e<YY?1:Su(r,0);if(e>=WY)return NaN;switch(t=HY(r,Fe),t&3){case 0:return Su(Fe[0],Fe[1]);case 1:return-V5(Fe[0],Fe[1]);case 2:return-Su(Fe[0],Fe[1]);default:return V5(Fe[0],Fe[1])}}C5.exports=XY});var Za=s((cmr,k5)=>{"use strict";var KY=B5();k5.exports=KY});var H5=s((pmr,G5)=>{"use strict";var QY=k(),ZY=je(),j5=Za(),Iu=Vt(),$Y=H(),bi=Oa(),Ei=Se();function JY(r){var e,t;return QY(r)?NaN:ZY(r)?NaN:(t=r%2,e=$Y(t),e===0||e===1?bi(0,t):e<.25?Iu(Ei*t):e<.75?(e=.5-e,bi(j5(Ei*e),t)):e<1.25?(t=bi(1,t)-t,Iu(Ei*t)):e<1.75?(e-=1.5,-bi(j5(Ei*e),t)):(t-=bi(2,t),Iu(Ei*t)))}G5.exports=JY});var W5=s((hmr,U5)=>{"use strict";var zY=H5();U5.exports=zY});var Y5=s((mmr,D5)=>{"use strict";function xY(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}D5.exports=xY});var K5=s((ymr,X5)=>{"use strict";function rX(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}X5.exports=rX});var Z5=s((gmr,Q5)=>{"use strict";function eX(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}Q5.exports=eX});var J5=s((qmr,$5)=>{"use strict";function tX(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}$5.exports=tX});var x5=s((wmr,z5)=>{"use strict";function iX(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}z5.exports=iX});var e7=s((bmr,r7)=>{"use strict";function aX(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}r7.exports=aX});var i7=s((Emr,t7)=>{"use strict";function nX(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}t7.exports=nX});var n7=s((dmr,a7)=>{"use strict";function uX(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}a7.exports=uX});var s7=s((_mr,u7)=>{"use strict";function sX(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}u7.exports=sX});var f7=s((Tmr,o7)=>{"use strict";function oX(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}o7.exports=oX});var c7=s((Amr,l7)=>{"use strict";var fX=k(),vX=je(),lX=H(),Bt=er(),cX=Va(),pX=W5(),hX=Se(),Fu=z(),mX=Y5(),yX=K5(),gX=Z5(),qX=J5(),wX=x5(),bX=e7(),EX=i7(),dX=n7(),_X=s7(),TX=f7(),AX=.07721566490153287,NX=.3224670334241136,OX=1,SX=-.07721566490153287,IX=.48383612272381005,FX=-.1475877229945939,LX=.06462494023913339,PX=-.07721566490153287,MX=1,RX=.4189385332046727,$a=1.4616321449683622,VX=4503599627370496,CX=72057594037927940,BX=13877787807814457e-33,v7=1.4616321449683622,kX=-.12148629053584961,jX=-3638676997039505e-33;function GX(r){var e,t,i,a,n,u,o,f,l,v,c,p,h;if(fX(r)||vX(r))return r;if(r===0)return Fu;if(r<0?(e=!0,r=-r):e=!1,r<BX)return-Bt(r);if(e){if(r>=VX||(l=pX(r),l===0))return Fu;t=Bt(hX/lX(l*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(h=-Bt(r),r>=$a-1+.27?(c=1-r,i=0):r>=$a-1-.27?(c=r-(v7-1),i=1):(c=r,i=2)):(h=0,r>=$a+.27?(c=2-r,i=0):r>=$a-.27?(c=r-v7,i=1):(c=r-1,i=2)),i){case 0:p=c*c,u=AX+p*mX(p),n=p*(NX+p*yX(p)),o=c*u+n,h+=o-.5*c;break;case 1:p=c*c,v=p*c,u=IX+v*wX(v),n=FX+v*bX(v),a=LX+v*EX(v),o=p*u-(jX-v*(n+c*a)),h+=kX+o;break;case 2:u=c*(PX+c*dX(c)),n=MX+c*_X(c),h+=-.5*c+u/n;break}else if(r<8)switch(i=cX(r),c=r-i,o=c*(SX+c*qX(c)),f=OX+c*gX(c),h=.5*c+o/f,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,h+=Bt(p)}else r<CX?(l=Bt(r),p=1/r,c=p*p,v=RX+p*TX(c),h=(r-.5)*(l-1)+v):h=r*(Bt(r)-1);return e&&(h=t-h),h}l7.exports=GX});var kt=s((Nmr,p7)=>{"use strict";var HX=c7();p7.exports=HX});var Le=s((Omr,h7)=>{"use strict";var UX=709.782712893384;h7.exports=UX});var y7=s((Smr,m7)=>{"use strict";var WX=14901161193847656e-24;m7.exports=WX});var q7=s((Imr,g7)=>{"use strict";var DX=eval;g7.exports=DX});var b7=s((Fmr,w7)=>{"use strict";var YX=q7();function XX(){var r;try{YX('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}w7.exports=XX});var Lu=s((Lmr,E7)=>{"use strict";var KX=b7();E7.exports=KX});var _7=s((Pmr,d7)=>{"use strict";var Ja=H(),QX=Ur(),ZX=1e6;function $X(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||QX,n=o.maxTerms||ZX,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,Ja(i*u)>=Ja(a)||--n===0)break}else do a=r(),u+=a;while(Ja(i*u)<Ja(a)&&--n);return u}d7.exports=$X});var N7=s((Mmr,A7)=>{"use strict";var T7=H(),JX=Ur(),zX=1e6;function xX(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||JX,a=u.maxTerms||zX,n=u.initialValue||0;do i=r(),n+=i;while(T7(t*n)<T7(i)&&--a);return n}A7.exports=xX});var jt=s((Rmr,O7)=>{"use strict";var rK=Lu(),eK=_7(),tK=N7(),Pu;rK()?Pu=eK:Pu=tK;O7.exports=Pu});var I7=s((Vmr,S7)=>{"use strict";function iK(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return t*=i/a,i-=1,u}}S7.exports=iK});var L7=s((Cmr,F7)=>{"use strict";var aK=jt(),nK=I7();function uK(r,e){var t,i;return i=nK(r,e),t=aK(i),t}F7.exports=uK});var M7=s((Bmr,P7)=>{"use strict";var sK=nr();function oK(r,e){var t,i,a,n;if(a=sK(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}P7.exports=oK});var V7=s((kmr,R7)=>{"use strict";function fK(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}R7.exports=fK});var B7=s((jmr,C7)=>{"use strict";function vK(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}C7.exports=vK});var j7=s((Gmr,k7)=>{"use strict";function lK(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}k7.exports=lK});var H7=s((Hmr,G7)=>{"use strict";function cK(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}G7.exports=cK});var W7=s((Umr,U7)=>{"use strict";function pK(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}U7.exports=pK});var Y7=s((Wmr,D7)=>{"use strict";function hK(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}D7.exports=hK});var K7=s((Dmr,X7)=>{"use strict";function mK(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}X7.exports=mK});var Z7=s((Ymr,Q7)=>{"use strict";function yK(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Q7.exports=yK});var x7=s((Xmr,z7)=>{"use strict";var gK=k(),$7=nr(),qK=Mt(),wK=z(),bK=fr(),EK=V7(),dK=B7(),_K=j7(),TK=H7(),AK=W7(),NK=Y7(),OK=K7(),SK=Z7(),za=1e-300,IK=13877787807814457e-33,J7=.8450629115104675,FK=.12837916709551256,LK=1,PK=-.0023621185607526594,MK=1,RK=-.009864944034847148,VK=1,CK=-.0098649429247001,BK=1;function kK(r){var e,t,i,a,n,u,o,f;if(gK(r))return NaN;if(r===wK)return 0;if(r===bK)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<IK?1-r:(i=r*r,a=FK+i*EK(i),n=LK+i*dK(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=PK+n*_K(n),f=MK+n*TK(n),e?1+J7+o/f:1-J7-o/f;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=RK+n*AK(n),n=VK+n*NK(n);else{if(r<-6)return 2-za;a=CK+n*OK(n),n=BK+n*SK(n)}return i=qK(t,0),a=$7(-(i*i)-.5625)*$7((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-za:za*za}z7.exports=kK});var Mu=s((Kmr,r8)=>{"use strict";var jK=x7();r8.exports=jK});var i8=s((Qmr,t8)=>{"use strict";var GK=Mu(),e8=x(),HK=nr(),UK=Se();function WK(r,e){var t,i,a,n,u;if(n=GK(e8(e)),n!==0&&r>1){for(i=HK(-e)/e8(UK*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}t8.exports=WK});var bt=s((Zmr,a8)=>{"use strict";var DK=-708.3964185322641;a8.exports=DK});var o8=s(($mr,s8)=>{"use strict";var Gt=nr(),xa=rr(),YK=er(),n8=Le(),u8=bt();function XK(r,e){var t,i;return i=r*YK(e),e>=1?i<n8&&-e>u8?t=xa(e,r)*Gt(-e):r>=1?t=xa(e/Gt(e/r),r):t=Gt(i-e):i>u8?t=xa(e,r)*Gt(-e):e/r<n8?t=xa(e/Gt(e/r),r):t=Gt(i-e),t}s8.exports=XK});var Ru=s((Jmr,f8)=>{"use strict";function KK(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}f8.exports=KK});var l8=s((zmr,v8)=>{"use strict";var QK=Function;v8.exports=QK});var p8=s((xmr,c8)=>{"use strict";var ZK=l8();c8.exports=ZK});var m8=s((ryr,h8)=>{"use strict";var $K=p8(),JK=Ru();function zK(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new $K(e)();function n(u){return JK(r,u)}}h8.exports=zK});var Pe=s((eyr,g8)=>{"use strict";var xK=j(),y8=Ru(),rQ=m8();xK(y8,"factory",rQ);g8.exports=y8});var w8=s((tyr,q8)=>{"use strict";function eQ(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}q8.exports=eQ});var E8=s((iyr,b8)=>{"use strict";var tQ=H(),iQ=er(),aQ=Ur(),nQ=jt(),uQ=w8();function sQ(r){var e,t;return r<=-1?NaN:(t=tQ(r),t>.95?iQ(1+r)-r:t<aQ?-r*r/2:(e={initialValue:-r},nQ(uQ(r),e)))}b8.exports=sQ});var Vu=s((ayr,d8)=>{"use strict";var oQ=E8();d8.exports=oQ});var Cu=s((nyr,_8)=>{"use strict";var fQ=6.283185307179586;_8.exports=fQ});var A8=s((uyr,T8)=>{"use strict";function vQ(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}T8.exports=vQ});var O8=s((syr,N8)=>{"use strict";function lQ(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}N8.exports=lQ});var I8=s((oyr,S8)=>{"use strict";function cQ(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}S8.exports=cQ});var L8=s((fyr,F8)=>{"use strict";function pQ(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}F8.exports=pQ});var M8=s((vyr,P8)=>{"use strict";function hQ(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}P8.exports=hQ});var V8=s((lyr,R8)=>{"use strict";function mQ(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}R8.exports=mQ});var B8=s((cyr,C8)=>{"use strict";function yQ(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}C8.exports=yQ});var j8=s((pyr,k8)=>{"use strict";function gQ(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}k8.exports=gQ});var H8=s((hyr,G8)=>{"use strict";function qQ(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}G8.exports=qQ});var W8=s((myr,U8)=>{"use strict";var wQ=Pe(),bQ=Vu(),EQ=Mu(),Bu=x(),dQ=nr(),_Q=Cu(),TQ=A8(),AQ=O8(),NQ=I8(),OQ=L8(),SQ=M8(),IQ=V8(),FQ=B8(),LQ=j8(),PQ=H8(),ee=[0,0,0,0,0,0,0,0,0,0];function MQ(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-bQ(i),n=r*a,u=Bu(2*a),e<r&&(u=-u),ee[0]=TQ(u),ee[1]=AQ(u),ee[2]=NQ(u),ee[3]=OQ(u),ee[4]=SQ(u),ee[5]=IQ(u),ee[6]=FQ(u),ee[7]=LQ(u),ee[8]=PQ(u),ee[9]=-.0005967612901927463,t=wQ(ee,1/r),t*=dQ(-n)/Bu(_Q*r),e<r&&(t=-t),t+=EQ(Bu(n))/2,t}U8.exports=MQ});var Y8=s((yyr,D8)=>{"use strict";function RQ(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}D8.exports=RQ});var ku=s((gyr,X8)=>{"use strict";var VQ=jt(),CQ=Y8();function BQ(r,e,t){var i,a;return t=t||0,a=CQ(r,e),i=VQ(a,{initialValue:t}),i}X8.exports=BQ});var Q8=s((qyr,K8)=>{"use strict";function kQ(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}K8.exports=kQ});var $8=s((wyr,Z8)=>{"use strict";var jQ=Q8();Z8.exports=jQ});var di=s((byr,J8)=>{"use strict";var GQ=$8();J8.exports=GQ});var r9=s((Eyr,x8)=>{"use strict";var HQ=di(),UQ=kt(),WQ=le(),DQ=Vu(),YQ=x(),XQ=H(),Je=nr(),_i=rr(),ju=Ke(),Gu=Qe(),z8=er(),KQ=Ze(),rn=Le(),Ti=bt(),Hu=Ct(),QQ=qt();function ZQ(r,e){var t,i,a,n,u,o,f;return a=r+Hu-.5,f=(e-r-Hu+.5)/a,r<1?e<=Ti||r<1/KQ?Je(r*z8(e)-e-UQ(r)):_i(e,r)*Je(-e)/WQ(r):(XQ(f*f*r)<=100&&r>150?(t=r*DQ(f)+e*(.5-Hu)/a,t=Je(t)):(n=r*z8(e/a),u=r-e,Gu(n,u)<=Ti||ju(n,u)>=rn?(i=u/r,Gu(n,u)/2>Ti&&ju(n,u)/2<rn?(o=_i(e/a,r/2)*Je(u/2),t=o*o):Gu(n,u)/4>Ti&&ju(n,u)/4<rn&&e>r?(o=_i(e/a,r/4)*Je(u/4),t=o*o,t*=t):i>Ti&&i<rn?t=_i(e*Je(i)/a,r):t=Je(n+u)):t=_i(e/a,r)*Je(u)),t*=YQ(a/QQ)/HQ(r),t)}x8.exports=ZQ});var i9=s((dyr,t9)=>{"use strict";var Uu=k(),$Q=je(),e9=H(),JQ=gt(),zQ=er(),xQ=rr(),rZ=Va();function eZ(r,e){var t,i;if(Uu(r)||Uu(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((e9(e*(r-1))<.5||e9(e)<.2)&&(i=zQ(r)*e,i<.5))return JQ(i)}else if(rZ(e)!==e)return NaN;return t=xQ(r,e)-1,$Q(t)||Uu(t)?NaN:t}t9.exports=eZ});var n9=s((_yr,a9)=>{"use strict";var tZ=i9();a9.exports=tZ});var s9=s((Tyr,u9)=>{"use strict";function iZ(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}u9.exports=iZ});var f9=s((Ayr,o9)=>{"use strict";function aZ(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}o9.exports=aZ});var l9=s((Nyr,v9)=>{"use strict";function nZ(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}v9.exports=nZ});var p9=s((Oyr,c9)=>{"use strict";var Wu=er(),uZ=Ur(),sZ=s9(),oZ=f9(),fZ=l9(),vZ=.15896368026733398,lZ=.5281534194946289,cZ=.45201730728149414;function pZ(r,e,t){var i,a,n,u;if(r<uZ)return-Wu(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=Wu(r);while(r>=3);t=r-2}return n=t*(r+1),u=sZ(t),a+=n*vZ+n*u,a}return r<1&&(a+=-Wu(r),t=e,e=r,r+=1),r<=1.5?(n=oZ(e),i=e*t,a+=i*lZ+i*n,a):(n=t*e,u=fZ(-t),a+=n*cZ+n*u,a)}c9.exports=pZ});var q9=s((Syr,g9)=>{"use strict";var h9=le(),m9=gt(),hZ=ve(),mZ=k(),y9=p9();function yZ(r){return mZ(r)?NaN:r<0?r<-.5?h9(1+r)-1:m9(-hZ(r)+y9(r+2,r+1,r)):r<2?m9(y9(r+1,r,r-1)):h9(1+r)-1}g9.exports=yZ});var b9=s((Iyr,w9)=>{"use strict";var gZ=q9();w9.exports=gZ});var d9=s((Fyr,E9)=>{"use strict";function qZ(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}E9.exports=qZ});var T9=s((Lyr,_9)=>{"use strict";var wZ=n9(),bZ=jt(),EZ=b9(),dZ=d9();function _Z(r,e,t){var i,a,n,u,o;return a=EZ(r),n=(a+1)/r,u=wZ(e,r),a-=u,a/=r,o=dZ(r,e),u+=1,i=t?n:0,a=-u*bZ(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}_9.exports=_Z});var Ai=s((Pyr,A9)=>{"use strict";var TZ=11754943508222875e-54;A9.exports=TZ});var O9=s((Myr,N9)=>{"use strict";var en=H(),ce=Ai(),AZ=Ur(),NZ=1e6;function OZ(r,e,t){var i,a,n,u,o,f,l;if(i=typeof r.next=="function",l=i?r.next().value:r(),u=l[1],n=l[0],u===0&&(u=ce),o=u,f=0,i===!0)do l=r.next().value,l&&(f=l[1]+l[0]*f,f===0&&(f=ce),o=l[1]+l[0]/o,o===0&&(o=ce),f=1/f,a=o*f,u*=a);while(en(a-1)>e&&--t);else do l=r(),l&&(f=l[1]+l[0]*f,f===0&&(f=ce),o=l[1]+l[0]/o,o===0&&(o=ce),f=1/f,a=o*f,u*=a);while(l&&en(a-1)>e&&--t);return n/u}function SZ(r,e,t){var i,a,n,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),n=f[1],n===0&&(n=ce),u=n,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=ce),u=f[1]+f[0]/u,u===0&&(u=ce),o=1/o,a=u*o,n*=a);while(f&&en(a-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=ce),u=f[1]+f[0]/u,u===0&&(u=ce),o=1/o,a=u*o,n*=a);while(f&&en(a-1)>e&&--t);return n}function IZ(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||NZ,a=i.tolerance||AZ,i.keep?SZ(r,a,t):OZ(r,a,t)}N9.exports=IZ});var F9=s((Ryr,I9)=>{"use strict";var S9=H(),FZ=Ur(),Ht=Ai(),LZ=1e6;function PZ(r,e,t){var i,a,n,u,o,f;f=r(),o=f[1],a=f[0],o===0&&(o=Ht),n=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=Ht),n=f[1]+f[0]/n,n===0&&(n=Ht),u=1/u,i=n*u,o*=i);while(f&&S9(i-1)>e&&--t);return a/o}function MZ(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=Ht),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=Ht),a=o[1]+o[0]/a,a===0&&(a=Ht),n=1/n,i=a*n,u*=i);while(o&&S9(i-1)>e&&--t);return u}function RZ(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||FZ,t=i.maxIter||LZ,i.keep?MZ(r,a,t):PZ(r,a,t)}I9.exports=RZ});var Yu=s((Vyr,L9)=>{"use strict";var VZ=Lu(),CZ=O9(),BZ=F9(),Du;VZ()?Du=CZ:Du=BZ;L9.exports=Du});var M9=s((Cyr,P9)=>{"use strict";function kZ(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}P9.exports=kZ});var Xu=s((Byr,R9)=>{"use strict";var jZ=Yu(),GZ=M9();function HZ(r,e){var t=GZ(r,e);return 1/(e-r+1+jZ(t))}R9.exports=HZ});var k9=s((kyr,B9)=>{"use strict";var UZ=lr(),Ni=le(),Ku=H(),V9=rr(),WZ=er(),DZ=y7(),C9=Ze(),YZ=Le(),XZ=L7(),KZ=M7(),QZ=i8(),Qu=o8(),ZZ=W8(),$Z=ku(),Zu=r9(),JZ=T9(),zZ=Xu();function xZ(r,e,t,i){var a,n,u,o,f,l,v,c,p,h,m,y,g,q;switch(v=0,c=i,l=e<30&&e<=r+1&&r<YZ,l?(g=UZ(e),p=g===e,u=p?!1:Ku(g-e)===.5):(p=!1,u=!1),p&&r>.6?(c=!c,n=0):u&&r>.2?(c=!c,n=1):r<DZ&&e>1?n=6:r>1e3&&(e<r||Ku(e-50)/r<1)?(c=!c,n=7):r<.5?-.4/WZ(r)<e?n=2:n=3:r<1.1?r*.75<e?n=2:n=3:(f=!1,t&&e>20&&(h=Ku((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?n=5:r-1/(3*r)<e?n=2:(n=4,c=!c)),n){case 0:v=KZ(e,r),t===!1&&(v*=Ni(e));break;case 1:v=QZ(e,r),t===!1&&(v*=Ni(e));break;case 2:v=t?Zu(e,r):Qu(e,r),v!==0&&(o=0,a=!1,c&&(o=t?1:Ni(e),t||v>=1||C9*v>o?(o/=v,t||e<1||C9/e>o?(o*=-e,a=!0):o=0):o=0),v*=$Z(e,r,o)/e,a&&(c=!1,v=-v));break;case 3:c=!c,m=JZ(e,r,c),v=m[0],q=m[1],c=!1,t&&(v/=q);break;case 4:v=t?Zu(e,r):Qu(e,r),v!==0&&(v*=zZ(e,r));break;case 5:v=ZZ(e,r),r>=e&&(c=!c);break;case 6:v=t?V9(r,e)/Ni(e+1):V9(r,e)/e,v*=1-e*r/(e+1);break;case 7:v=t?Zu(e,r):Qu(e,r),v/=r,v!==0&&(v*=XZ(e,r));break}return t&&v>1&&(v=1),c&&(y=t?1:Ni(e),v=y-v),v}B9.exports=xZ});var U9=s((jyr,H9)=>{"use strict";var r$=kt(),e$=nr(),pe=er(),t$=qi(),i$=Le(),a$=z(),n$=wi(),j9=k9(),G9=ku(),u$=Xu();function s$(r,e,t,i){var a,n,u,o;return r<0||e<=0?NaN:(a=t===void 0?!0:t,u=i,e>=n$&&!a?(u&&e*4<r?(o=e*pe(r)-r,o+=pe(u$(e,r))):!u&&e>4*r?(o=e*pe(r)-r,n=0,o+=pe(G9(e,r,n)/e)):(o=j9(r,e,!0,u),o===0?u?(o=1+1/(12*e)+1/(288*e*e),o=pe(o)-e+(e-.5)*pe(e),o+=pe(t$)):(o=e*pe(r)-r,n=0,o+=pe(G9(e,r,n)/e)):o=pe(o)+r$(e)),o>i$?a$:e$(o)):j9(r,e,a,u))}H9.exports=s$});var $u=s((Gyr,W9)=>{"use strict";var o$=U9();W9.exports=o$});var K9=s((Hyr,X9)=>{"use strict";var Ut=nr(),tn=rr(),f$=er(),D9=Le(),Y9=bt();function v$(r,e){var t,i;return i=r*f$(e),e>=1?i<D9&&-e>Y9?t=tn(e,r)*Ut(-e):r>=1?t=tn(e/Ut(e/r),r):t=Ut(i-e):i>Y9?t=tn(e,r)*Ut(-e):e/r<D9?t=tn(e/Ut(e/r),r):t=Ut(i-e),t}X9.exports=v$});var $9=s((Uyr,Z9)=>{"use strict";var l$=di(),c$=kt(),p$=le(),h$=ve(),m$=x(),y$=H(),ze=nr(),Oi=rr(),Ju=Ke(),zu=Qe(),Q9=er(),an=Le(),Si=bt(),xu=Ct(),g$=qt();function q$(r,e){var t,i,a,n,u,o,f;return a=r+xu-.5,f=(e-r-xu+.5)/a,r<1?e<=Si?ze(r*Q9(e)-e-c$(r)):Oi(e,r)*ze(-e)/p$(r):(y$(f*f*r)<=100&&r>150?(t=r*(h$(f)-f)+e*(.5-xu)/a,t=ze(t)):(n=r*Q9(e/a),u=r-e,zu(n,u)<=Si||Ju(n,u)>=an?(i=u/r,zu(n,u)/2>Si&&Ju(n,u)/2<an?(o=Oi(e/a,r/2)*ze(u/2),t=o*o):zu(n,u)/4>Si&&Ju(n,u)/4<an&&e>r?(o=Oi(e/a,r/4)*ze(u/4),t=o*o,t*=t):i>Si&&i<an?t=Oi(e*ze(i)/a,r):t=ze(n+u)):t=Oi(e/a,r)*ze(u)),t*=m$(a/g$)/l$(r),t)}Z9.exports=q$});var eh=s((Wyr,rh)=>{"use strict";var w$=Xa(),J9=Ou(),b$=$u(),E$=ve(),nn=H(),z9=rr(),d$=er(),_$=We(),x9=Ur(),T$=K9(),A$=$9(),xe=new Array(30);function N$(r,e,t,i,a,n,u){var o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A,d,G;if(p=e-1,d=r+p/2,i<.35?g=E$(-i):g=d$(t),G=-d*g,b=A$(e,G),b<=_$)return a;for(u?(o=b/w$(r,e),o/=z9(d,e)):o=T$(e,G)/z9(d,e),o*=n,xe[0]=1,w=b$(G,e,!0,!0),w/=b,v=a+o*w,l=1,h=g/2,h*=h,m=1,q=4*d*d,c=e,E=1;E<xe.length;++E){for(l+=2,xe[E]=0,y=e-E,f=3,T=1;T<E;++T)y=T*e-E,xe[E]+=y*xe[E-T]/J9(f),f+=2;if(xe[E]/=E,xe[E]+=p/J9(l),w=(c*(c+1)*w+(G+c+1)*m)/q,m*=h,c+=2,A=o*xe[E]*w,v+=A,A>1){if(nn(A)<nn(x9*v))break}else if(nn(A/x9)<nn(v))break}return v}rh.exports=N$});var ih=s((Dyr,th)=>{"use strict";function O$(r,e,t){var i,a;if(t===0)return 1;for(i=1,a=0;a<t;a++)i*=(r+a)/(e+a);return i}th.exports=O$});var uh=s((Yyr,nh)=>{"use strict";var ah=H(),S$=Ke();function I$(r,e){return S$(ah(r),ah(e))}nh.exports=I$});var oh=s((Xyr,sh)=>{"use strict";var F$=uh();sh.exports=F$});var lh=s((Kyr,vh)=>{"use strict";var fh=H(),L$=Qe();function P$(r,e){return L$(fh(r),fh(e))}vh.exports=P$});var ph=s((Qyr,ch)=>{"use strict";var M$=lh();ch.exports=M$});var sn=s((Zyr,yh)=>{"use strict";var rs=di(),R$=oh(),V$=ph(),hh=gt(),rt=ve(),mh=x(),un=H(),he=nr(),me=rr(),C$=Qe(),Wr=er(),ye=Le(),Wt=bt(),es=Ct(),B$=qt();function k$(r,e,t,i,a){var n,u,o,f,l,v,c,p,h,m,y,g,q,b;if(!a)return me(t,r)*me(i,e);if(q=r+e,f=r+es-.5,l=e+es-.5,v=q+es-.5,n=rs(q),n/=rs(r)*rs(e),n*=mh(l/B$),n*=mh(f/v),c=(t*e-i*f)/f,p=(i*r-t*l)/l,V$(c,p)<.2)if(c*p>0||C$(r,e)<1)un(c)<.1?n*=he(r*rt(c)):n*=me(t*v/f,r),un(p)<.1?n*=he(e*rt(p)):n*=me(i*v/l,e);else if(R$(c,p)<.5)u=r<e,o=e/r,u&&o*p<.1||!u&&c/o>.1?(h=hh(o*rt(p)),h=c+h+h*c,h=r*rt(h),n*=he(h)):(h=hh(rt(c)/o),h=p+h+h*p,h=e*rt(h),n*=he(h));else if(un(c)<un(p))if(b=r*rt(c)+e*Wr(i*v/l),b<=Wt||b>=ye){if(b+=Wr(n),b>=ye)return NaN;n=he(b)}else n*=he(b);else if(b=e*rt(p)+r*Wr(t*v/f),b<=Wt||b>=ye){if(b+=Wr(n),b>=ye)return NaN;n=he(b)}else n*=he(b);else if(y=t*v/f,g=i*v/l,c=r*Wr(y),p=e*Wr(g),c>=ye||c<=Wt||p>=ye||p<=Wt)if(r<e)if(m=me(g,e/r),h=r*(Wr(y)+Wr(m)),h<ye&&h>Wt)n*=me(m*y,r);else{if(p+=c+Wr(n),p>=ye)return NaN;n=he(p)}else if(m=me(y,r/e),h=(Wr(m)+Wr(g))*e,h<ye&&h>Wt)n*=me(m*g,e);else{if(p+=c+Wr(n),p>=ye)return NaN;n=he(p)}else n*=me(y,r)*me(g,e);return n}yh.exports=k$});var qh=s(($yr,gh)=>{"use strict";var j$=Yu(),G$=sn(),H$={keep:!0,maxIter:1e3};function U$(r,e,t,i){var a=0;return n;function n(){var u,o,f;return o=(r+a-1)*(r+e+a-1)*a*(e-a)*t*t,u=r+2*a-1,o/=u*u,f=a,f+=a*(e-a)*t/(r+2*a-1),f+=(r+a)*(r*i-e*t+1+a*(2-t))/(r+2*a+1),a+=1,[o,f]}}function W$(r,e,t,i,a,n){var u,o,f;return u=G$(r,e,t,i,a),n&&(n[1]=u),u===0?u:(f=U$(r,e,t,i),o=j$(f,H$),u/o)}gh.exports=W$});var on=s((Jyr,wh)=>{"use strict";var D$=9007199254740991;wh.exports=D$});var Eh=s((zyr,bh)=>{"use strict";function Y$(r,e){var t=0,i;if(r===0)return e;if(e===0)return r;for(;(r&1)===0&&(e&1)===0;)r>>>=1,e>>>=1,t+=1;for(;(r&1)===0;)r>>>=1;for(;e;){for(;(e&1)===0;)e>>>=1;r>e&&(i=e,e=r,r=i),e-=r}return r<<t}bh.exports=Y$});var _h=s((xyr,dh)=>{"use strict";function X$(r,e){var t=1,i;if(r===0)return e;if(e===0)return r;for(;r%2===0&&e%2===0;)r/=2,e/=2,t*=2;for(;r%2===0;)r/=2;for(;e;){for(;e%2===0;)e/=2;r>e&&(i=e,e=r,r=i),e-=r}return t*r}dh.exports=X$});var Fh=s((rgr,Ih)=>{"use strict";var Th=k(),Ah=Or(),Nh=z(),Oh=fr(),Sh=Ca(),K$=Eh(),Q$=_h();function Z$(r,e){return Th(r)||Th(e)?NaN:r===Nh||e===Nh||r===Oh||e===Oh?NaN:Ah(r)&&Ah(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=Sh&&e<=Sh?K$(r,e):Q$(r,e)):NaN}Ih.exports=Z$});var Ph=s((egr,Lh)=>{"use strict";var $$=Fh();Lh.exports=$$});var Ch=s((tgr,Vh)=>{"use strict";var J$=on(),z$=z(),Mh=Or(),Rh=k(),x$=Aa(),rJ=lr(),eJ=Ph();function ts(r,e){var t,i,a,n,u,o,f;if(Rh(r)||Rh(e))return NaN;if(!Mh(r)||!Mh(e))return NaN;if(e<0||(i=1,r<0&&(r=-r+e-1,x$(e)&&(i*=-1)),e>r))return 0;if(e===0||e===r)return i;if(e===1||e===r-1)return i*r;for(r-e<e&&(e=r-e),f=rJ(J$/r),t=1,u=1;u<=e&&!(t>f);u++)t*=r,t/=u,r-=1;return u>e?i*t:(a=ts(r,e-u+1),a===z$?i*a:(n=ts(e,e-u+1),o=eJ(a,n),a/=o,n/=o,t/=n,i*t*a))}Vh.exports=ts});var kh=s((igr,Bh)=>{"use strict";var tJ=Ch();Bh.exports=tJ});var Hh=s((agr,Gh)=>{"use strict";var jh=kh(),Et=lr(),Ii=rr(),iJ=We();function aJ(r,e,t,i){var a,n,u,o,f;if(n=Ii(t,r),n>iJ)for(o=n,f=Et(r-1);f>e;f--)o*=(f+1)*i/((r-f)*t),n+=o;else if(u=Et(r*t),u<=e+1&&(u=Et(e+2)),n=Ii(t,u)*Ii(i,r-u),n*=jh(Et(r),Et(u)),n===0)for(f=u-1;f>e;f--)n+=Ii(t,f)*Ii(i,r-f),n*=jh(Et(r),Et(f));else{for(o=n,a=n,f=u-1;f>e;f--)o*=(f+1)*i/((r-f)*t),n+=o;for(o=a,f=u+1;f<=r;f++)o*=(r-f+1)*t/(f*i),n+=o}return n}Gh.exports=aJ});var Wh=s((ngr,Uh)=>{"use strict";var nJ=sn();function uJ(r,e,t,i,a,n,u){var o,f,l,v;if(o=nJ(r,e,t,i,n),u&&(u[1]=o),o/=r,o===0)return o;for(l=1,f=1,v=0;v<a-1;++v)f*=(r+e+v)*t/(r+v+1),l+=f;return o*=l,o}Uh.exports=uJ});var Qh=s((ugr,Kh)=>{"use strict";var is=di(),sJ=jt(),oJ=ve(),fJ=x(),as=nr(),fn=rr(),Fi=er(),vJ=We(),Dh=Le(),Yh=bt(),ns=Ct(),lJ=qt(),Xh={maxTerms:100};function cJ(r,e,t,i){var a=1-e,n=1;return u;function u(){var o=i/r;return r+=1,i*=a*t/n,n+=1,a+=1,o}}function pJ(r,e,t,i,a,n,u){var o,f,l,v,c,p,h,m;return a?(h=r+e,f=r+ns-.5,l=e+ns-.5,v=h+ns-.5,o=is(h)/(is(r)*is(e)),c=Fi(v/l)*(e-.5),p=Fi(t*v/f)*r,c>Yh&&c<Dh&&p>Yh&&p<Dh?(r*e<l*10?o*=as((e-.5)*oJ(r/l)):o*=fn(v/l,e-.5),o*=fn(t*v/f,r),o*=fJ(f/lJ),n&&(n[1]=o*fn(u,e))):(o=Fi(o)+c+p+(Fi(f)-1)/2,n&&(n[1]=as(o+e*Fi(u))),o=as(o))):o=fn(t,r),o<vJ?i:(m=cJ(r,e,t,o),Xh.initialValue=i,sJ(m,Xh))}Kh.exports=pJ});var os=s((sgr,em)=>{"use strict";var hJ=k(),mJ=gt(),vn=lr(),Zh=ve(),$h=Ra(),Dr=hi(),us=x(),yJ=nr(),Li=rr(),gJ=Ke(),Jh=Qe(),ln=Ze(),zh=We(),qJ=Ca(),wJ=Ba(),rm=Se(),et=eh(),ss=ih(),bJ=sn(),xh=qh(),EJ=Hh(),Pi=Wh(),ge=Qh(),dJ=1/rm;function _J(r,e,t,i,a,n,u,o){var f,l,v,c,p,h,m,y,g,q,b,w;if(w=1-r,m=o,y=o+u,n[y]=-1,hJ(r)||r<0||r>1)return n[m]=NaN,n[y]=NaN,n;if(i){if(e<0||t<0)return n[m]=NaN,n[y]=NaN,n;if(e===0){if(t===0)return n[m]=NaN,n[y]=NaN,n;if(t>0)return n[m]=a?0:1,n}else if(t===0&&e>0)return n[m]=a?1:0,n}else if(e<=0||t<=0)return n[m]=NaN,n[y]=NaN,n;return r===0?(e===1?n[y]=1:n[y]=e<1?ln/2:zh*2,a?(n[m]=i?1:Dr(e,t),n):(n[m]=0,n)):r===1?(t===1?n[y]=1:n[y]=t<1?ln/2:zh*2,a?n[m]=0:n[m]=i?1:Dr(e,t),n):e===.5&&t===.5?(n[y]=dJ*us(w*r),b=$h(us(a?w:r)),b/=wJ,i||(b*=rm),n[m]=b,n):(e===1&&(h=t,t=e,e=h,h=w,w=r,r=h,a=!a),t===1?e===1?(n[m]=a?w:r,n[y]=1,n):(n[y]=e*Li(r,e-1),w<.5?b=a?-mJ(e*Zh(-w)):yJ(e*Zh(-w)):b=a?-(Li(r,e)-1):Li(r,e),i||(b/=e),n[m]=b,n):(Jh(e,t)<=1?(r>.5&&(h=t,t=e,e=h,h=w,w=r,r=h,a=!a),gJ(e,t)<=1?e>=Jh(.2,t)||Li(r,e)<=.9?a?(v=-(i?1:Dr(e,t)),a=!1,v=-ge(e,t,r,v,i,n,w)):v=ge(e,t,r,0,i,n,w):(h=t,t=e,e=h,h=w,w=r,r=h,a=!a,w>=.3?a?(v=-(i?1:Dr(e,t)),a=!1,v=-ge(e,t,r,v,i,n,w)):v=ge(e,t,r,0,i,n,w):(i?l=1:l=ss(e+t,e,20),v=Pi(e,t,r,w,20,i,n),a?(v-=i?1:Dr(e,t),a=!1,v=-et(e+20,t,r,w,v,l,i)):v=et(e+20,t,r,w,v,l,i))):t<=1||r<.1&&Li(t*r,e)<=.7?a?(v=-(i?1:Dr(e,t)),a=!1,v=-ge(e,t,r,v,i,n,w)):v=ge(e,t,r,0,i,n,w):(h=t,t=e,e=h,h=w,w=r,r=h,a=!a,w>=.3?a?(v=-(i?1:Dr(e,t)),a=!1,v=-ge(e,t,r,v,i,n,w)):v=ge(e,t,r,0,i,n,w):e>=15?a?(v=-(i?1:Dr(e,t)),a=!1,v=-et(e,t,r,w,v,1,i)):v=et(e,t,r,w,0,1,i):(i?l=1:l=ss(e+t,e,20),v=Pi(e,t,r,w,20,i,n),a?(v-=i?1:Dr(e,t),a=!1,v=-et(e+20,t,r,w,v,l,i)):v=et(e+20,t,r,w,v,l,i)))):(e<t?f=e-(e+t)*r:f=(e+t)*w-t,f<0&&(h=t,t=e,e=h,h=w,w=r,r=h,a=!a),t<40?vn(e)===e&&vn(t)===t&&e<qJ-100?(g=e-1,q=t+g,v=EJ(q,g,r,w),i||(v*=Dr(e,t))):t*r<=.7?a?(v=-(i?1:Dr(e,t)),a=!1,v=-ge(e,t,r,v,i,n,w)):v=ge(e,t,r,0,i,n,w):e>15?(q=vn(t),q===t&&(q-=1),c=t-q,i?l=1:l=ss(e+c,c,q),v=Pi(c,e,w,r,q,i),v=et(e,c,r,w,v,1,i),v/=l):i?(q=vn(t),c=t-q,c<=0&&(q-=1,c+=1),v=Pi(c,e,w,r,q,i),v+=Pi(e,c,r,w,20,i),a&&(v-=1),v=et(e+20,c,r,w,v,1,i),a&&(v=-v,a=!1)):v=xh(e,t,r,w,i,n):v=xh(e,t,r,w,i,n)),n[y]<0&&(n[y]=bJ(e,t,r,w,!0)),p=w*r,n[y]!==0&&(ln*p<n[y]?n[y]=ln/2:n[y]/=p),n[m]=a?(i?1:Dr(e,t))-v:v,n))}em.exports=_J});var im=s((ogr,tm)=>{"use strict";var TJ=os();function AJ(r,e,t,i,a){return TJ(r,e,t,i,a,[0,0],1,0)}tm.exports=AJ});var fs=s((fgr,nm)=>{"use strict";var NJ=j(),am=im(),OJ=os();NJ(am,"assign",OJ);nm.exports=am});var sm=s((vgr,um)=>{"use strict";var SJ=fs().assign;function IJ(r,e,t,i,a){var n=[0,0];return i=i!==!1,a=a===!0,SJ(r,e,t,i,a,n,1,0),n[0]}um.exports=IJ});var cn=s((lgr,om)=>{"use strict";var FJ=sm();om.exports=FJ});var cm=s((cgr,lm)=>{"use strict";var fm=cn(),vm=k(),LJ=rr();function PJ(r,e){var t,i,a;return vm(r)||vm(e)||e<=0?NaN:r===0?.5:(t=LJ(r,2),e>2*t?(a=t/(e+t),i=fm(a,.5,e/2,!0,!0)/2):(a=e/(e+t),i=fm(a,e/2,.5,!0,!1)/2),r>0?1-i:i)}lm.exports=PJ});var hm=s((pgr,pm)=>{"use strict";function MJ(r){return e;function e(){return r}}pm.exports=MJ});var pn=s((hgr,mm)=>{"use strict";var RJ=hm();mm.exports=RJ});var wm=s((mgr,qm)=>{"use strict";var VJ=pn(),ym=cn(),gm=k(),CJ=rr();function BJ(r){if(gm(r)||r<=0)return VJ(NaN);return e;function e(t){var i,a,n;return gm(t)?NaN:t===0?.5:(i=CJ(t,2),r>2*i?(n=i/(r+i),a=ym(n,.5,r/2,!0,!0)/2):(n=r/(r+i),a=ym(n,r/2,.5,!0,!1)/2),t>0?1-a:a)}}qm.exports=BJ});var dm=s((ygr,Em)=>{"use strict";var kJ=j(),bm=cm(),jJ=wm();kJ(bm,"factory",jJ);Em.exports=bm});var Tm=s((ggr,_m)=>{"use strict";function GJ(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}_m.exports=GJ});var Nm=s((qgr,Am)=>{"use strict";function HJ(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Am.exports=HJ});var Sm=s((wgr,Om)=>{"use strict";function UJ(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Om.exports=UJ});var Fm=s((bgr,Im)=>{"use strict";function WJ(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Im.exports=WJ});var Pm=s((Egr,Lm)=>{"use strict";function DJ(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Lm.exports=DJ});var Cm=s((dgr,Vm)=>{"use strict";var YJ=k(),Mm=x(),Rm=er(),XJ=z(),KJ=fr(),QJ=Tm(),ZJ=Nm(),$J=Sm(),JJ=Fm(),zJ=Pm(),xJ=.08913147449493408,rz=2.249481201171875,ez=.807220458984375,tz=.9399557113647461,iz=.9836282730102539;function az(r){var e,t,i,a,n;return YJ(r)?NaN:r===0?XJ:r===2?KJ:r===1?0:r>2||r<0?NaN:(r>1?(e=-1,i=2-r):(e=1,i=r),r=1-i,r<=.5?(a=r*(r+10),n=QJ(r),e*(a*xJ+a*n)):i>=.25?(a=Mm(-2*Rm(i)),i-=.25,n=ZJ(i),e*(a/(rz+n))):(i=Mm(-Rm(i)),i<3?(t=i-1.125,n=$J(t),e*(ez*i+n*i)):i<6?(t=i-3,n=JJ(t),e*(tz*i+n*i)):(t=i-6,n=zJ(t),e*(iz*i+n*i))))}Vm.exports=az});var Dt=s((_gr,Bm)=>{"use strict";var nz=Cm();Bm.exports=nz});var Hm=s((Tgr,Gm)=>{"use strict";var uz=k(),km=Ra(),sz=x(),jm=pu(),oz=6123233995736766e-32;function fz(r){var e;return uz(r)?NaN:r<-1||r>1?NaN:r>.5?2*km(sz(.5-.5*r)):(e=jm-km(r),e+=oz,e+=jm,e)}Gm.exports=fz});var Wm=s((Agr,Um)=>{"use strict";var vz=Hm();Um.exports=vz});var hn=s((Ngr,Dm)=>{"use strict";var lz=1.4142135623730951;Dm.exports=lz});var Xm=s((Ogr,Ym)=>{"use strict";function cz(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}Ym.exports=cz});var Qm=s((Sgr,Km)=>{"use strict";function pz(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}Km.exports=pz});var $m=s((Igr,Zm)=>{"use strict";function hz(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}Zm.exports=hz});var zm=s((Fgr,Jm)=>{"use strict";function mz(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}Jm.exports=mz});var ry=s((Lgr,xm)=>{"use strict";function yz(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}xm.exports=yz});var ty=s((Pgr,ey)=>{"use strict";function gz(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}ey.exports=gz});var ay=s((Mgr,iy)=>{"use strict";function qz(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}iy.exports=qz});var uy=s((Rgr,ny)=>{"use strict";function wz(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}ny.exports=wz});var oy=s((Vgr,sy)=>{"use strict";function bz(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}sy.exports=bz});var vy=s((Cgr,fy)=>{"use strict";var Ez=Xa(),dz=Pe(),_z=x(),Tz=Se(),Az=Xm(),Nz=Qm(),Oz=$m(),Sz=zm(),Iz=ry(),Fz=ty(),Lz=ay(),Pz=uy(),Mz=oy(),Rz=0,qe=[1,0,0,0,0,0,0,0,0,0];function Vz(r,e){var t,i;return i=Ez(r/2,.5)*_z(r*Tz)*(e-.5),t=1/r,qe[1]=Az(t),qe[2]=Nz(t),qe[3]=Oz(t),qe[4]=Sz(t),qe[5]=Iz(t),qe[6]=Fz(t),qe[7]=Lz(t),qe[8]=Pz(t),qe[9]=Mz(t),Rz+i*dz(qe,i*i)}fy.exports=Vz});var py=s((Bgr,cy)=>{"use strict";var Cz=Xa(),Bz=Pe(),ly=x(),kz=rr(),jz=Se(),tt=[0,0,0,0,0,0,0];function Gz(r,e){var t,i,a,n,u,o,f,l;return l=Cz(r/2,.5)*ly(r*jz)*e,n=r+2,u=r+4,o=r+6,tt[0]=1,tt[1]=-(r+1)/(2*n),n*=r+2,tt[2]=-r*(r+1)*(r+3)/(8*n*u),n*=r+2,tt[3]=-r*(r+1)*(r+5)*((3*r+7)*r-2)/(48*n*u*o),n*=r+2,u*=r+4,tt[4]=-r*(r+1)*(r+7)*(((((15*r+154)*r+465)*r+286)*r-336)*r+64)/(384*n*u*o*(r+8)),n*=r+2,tt[5]=-r*(r+1)*(r+3)*(r+9)*((((((35*r+452)*r+1573)*r+600)*r-2020)*r+928)*r-128)/(1280*n*u*o*(r+8)*(r+10)),n*=r+2,u*=r+4,o*=r+6,tt[6]=-r*(r+1)*(r+11)*(((((((((((945*r+31506)*r+425858)*r+2980236)*r+11266745)*r+20675018)*r+7747124)*r-22574632)*r-8565600)*r+18108416)*r-7099392)*r+884736)/(46080*n*u*o*(r+8)*(r+10)*(r+12)),f=ly(r),a=kz(f*l,1/r),i=a*a,t=Bz(tt,i),t*=f,t/=a,-t}cy.exports=Gz});var qy=s((kgr,gy)=>{"use strict";var hy=Dt(),Hz=gt(),my=x(),Uz=rr(),Wz=Ba(),yy=hn();function Dz(r,e){var t,i,a,n,u,o,f;return r>1e20?-hy(2*e)*yy:(t=1/(r-.5),i=48/(t*t),a=((20700*t/i-98)*t-16)*t+96.36,n=((94.5/(i+a)-3)/i+1)*my(t*Wz)*r,f=Uz(n*2*e,2/r),f>.05+t?(o=-hy(2*e)*yy,f=o*o,r<5&&(a+=.3*(r-4.5)*(o+.6)),a+=(((.05*n*o-5)*o-7)*o-2)*o+i,f=(((((.4*f+6.3)*f+36)*f+94.5)/a-f-3)/i+1)*o,f=Hz(t*f*f)):f=((1/(((r+6)/(r*f)-.089*n-.822)*(r+2)*3)+.5/(r+4))*f-1)*(r+1)/(r+2)+1/f,u=my(r*f),-u)}gy.exports=Dz});var Sy=s((jgr,Oy)=>{"use strict";var wy=Dt(),by=lr(),vs=De(),Ey=mi(),Yz=Wm(),mn=x(),Xz=H(),dy=Za(),Kz=rr(),Qz=Vt(),_y=hn(),Ty=Se(),Ay=vy(),yn=py(),ls=qy(),Ny=268435456,Zz=1/3,$z=2*53/3,Jz=.8549879733383485;function zz(r,e,t){var i,a,n,u,o,f,l,v,c,p,h,m,y,g,q,b;if(o=0,e>t?(l=t,t=e,e=l,u=!0):u=!1,by(r)===r&&r<20)switch(a=vs(1,$z),by(r)){case 1:e===.5?o=0:o=-dy(Ty*e)/Qz(Ty*e);break;case 2:o=(2*e-1)/mn(2*e*t);break;case 4:f=4*e*t,n=mn(f),y=4*dy(Yz(n)/3)/n,g=mn(y-4),o=e-.5<0?-g:g;break;case 6:if(e<1e-150)return(u?-1:1)*ls(r,e);q=4*(e-e*e),b=Kz(q,Zz),m=6*(1+Jz*(1/b-1));do c=m*m,p=c*c,h=m*p,v=m,m=2*(8*q*h-270*c+2187)/(5*(4*q*p-216*m-243));while(Xz((m-v)/m)>a);m=mn(m-r),o=e-.5<0?-m:m;break;default:r>Ny?o=wy(2*e)*_y:r<3?(i=.2742-r*.0242143,e>i?o=Ay(r,e):o=yn(r,e)):(i=vs(1,Ey(r/-.654)),e>i?o=ls(r,e):o=yn(r,e))}else r>Ny?o=-wy(2*e)*_y:r<3?(i=.2742-r*.0242143,e>i?o=Ay(r,e):o=yn(r,e)):(i=vs(1,Ey(r/-.654)),e>i?o=ls(r,e):o=yn(r,e));return u?-o:o}Oy.exports=zz});var Fy=s((Ggr,Iy)=>{"use strict";var xz=Sy();function rx(r,e,t){var i,a,n,u;return a=e/2,n=1-a,i=r*2,u=xz(i,a,n),t&&(t.value=u*u/(i+u*u)),i/(i+u*u)}Iy.exports=rx});var My=s((Hgr,Py)=>{"use strict";var gn=Pe(),ex=Dt(),Ly=x(),tx=nr(),Me=hn(),ir=[0,0,0,0,0,0,0],Mi=[0,0,0,0];function ix(r,e,t){var i,a,n,u,o,f,l;return i=ex(2*t),i/=-Ly(r/2),Mi[0]=i,f=e-r,u=f*f,o=u*f,ir[0]=-f*Me/2,ir[1]=(1-2*f)/8,ir[2]=-(f*Me/48),ir[3]=-1/192,ir[4]=-f*Me/3840,ir[5]=0,ir[6]=0,Mi[1]=gn(ir,i),ir[0]=f*Me*(3*f-2)/12,ir[1]=(20*u-12*f+1)/128,ir[2]=f*Me*(20*f-1)/960,ir[3]=(16*u+30*f-15)/4608,ir[4]=f*Me*(21*f+32)/53760,ir[5]=(-(32*u)+63)/368640,ir[6]=-f*Me*(120*f+17)/25804480,Mi[2]=gn(ir,i),ir[0]=f*Me*(-75*u+80*f-16)/480,ir[1]=(-1080*o+868*u-90*f-45)/9216,ir[2]=f*Me*(-1190*u+84*f+373)/53760,ir[3]=(-2240*o-2508*u+2100*f-165)/368640,ir[4]=0,ir[5]=0,ir[6]=0,Mi[3]=gn(ir,i),n=gn(Mi,1/r),a=n*n,l=-tx(-a/2),a===0?.5:(1+n*Ly((1+l)/a))/2}Py.exports=ix});var cs=s((Ugr,Vy)=>{"use strict";var Ry=er(),ax=Ze(),qn=ax/4;function nx(r,e){return t;function t(i){var a,n,u;return u=1-i,u===0?[-qn,-qn]:i===0?[-qn,-qn]:(n=Ry(i)+e*Ry(u)+r,a=1/i-e/u,[n,a])}}Vy.exports=nx});var By=s((Wgr,Cy)=>{"use strict";var ux=k();function sx(r){return r===0||ux(r)?r:r<0?-1:1}Cy.exports=sx});var Ri=s((Dgr,ky)=>{"use strict";var ox=By();ky.exports=ox});var hs=s((Ygr,Gy)=>{"use strict";var jy=Ri(),wn=H(),fx=De(),ps=Ze();function vx(r,e,t,i,a,n){var u,o,f,l,v,c,p,h,m,y;m=0,u=0,v=e,l=fx(1,1-a),p=ps,o=ps,f=ps,c=n;do{if(u=m,f=o,o=p,h=r(v),m=h[0],y=h[1],c-=1,m===0)break;if(y===0?(u===0&&(v===t?e=i:e=t,u=r(e),p=e-v),jy(u)*jy(m)<0?p<0?p=(v-t)/2:p=(v-i)/2:p<0?p=(v-i)/2:p=(v-t)/2):p=m/y,wn(p*2)>wn(f)&&(p=p>0?(v-t)/2:(v-i)/2),e=v,v-=p,v<=t){if(p=.5*(e-t),v=e-p,v===t||v===i)break}else if(v>=i&&(p=.5*(e-i),v=e-p,v===t||v===i))break;p>0?i=e:t=e}while(c&&wn(v*l)<wn(p));return v}Gy.exports=vx});var Uy=s((Xgr,Hy)=>{"use strict";function lx(r){return r===0?-1:-1+r*(-5+r*5)}Hy.exports=lx});var Dy=s((Kgr,Wy)=>{"use strict";function cx(r){return r===0?1:1+r*(21+r*(-69+r*46))}Wy.exports=cx});var Xy=s((Qgr,Yy)=>{"use strict";function px(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}Yy.exports=px});var Qy=s((Zgr,Ky)=>{"use strict";function hx(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}Ky.exports=hx});var $y=s(($gr,Zy)=>{"use strict";function mx(r){return r===0?7:7+r*(12+r*(-78+r*52))}Zy.exports=mx});var zy=s((Jgr,Jy)=>{"use strict";function yx(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}Jy.exports=yx});var rg=s((zgr,xy)=>{"use strict";function gx(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}xy.exports=gx});var tg=s((xgr,eg)=>{"use strict";function qx(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}eg.exports=qx});var ag=s((rqr,ig)=>{"use strict";function wx(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}ig.exports=wx});var ug=s((eqr,ng)=>{"use strict";function bx(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}ng.exports=bx});var og=s((tqr,sg)=>{"use strict";function Ex(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}sg.exports=Ex});var vg=s((iqr,fg)=>{"use strict";function dx(r){return r===0?1:1+r*(-13+r*13)}fg.exports=dx});var cg=s((aqr,lg)=>{"use strict";function _x(r){return r===0?1:1+r*(21+r*(-69+r*46))}lg.exports=_x});var mg=s((nqr,hg)=>{"use strict";var Yt=Pe(),Tx=Dt(),Ax=H(),Nx=nr(),pg=er(),Ox=x(),Sx=Vt(),Ix=Za(),Fx=cs(),Lx=hs(),Px=Uy(),Mx=Dy(),Rx=Xy(),Vx=Qy(),Cx=$y(),Bx=zy(),kx=rg(),jx=tg(),Gx=ag(),Hx=ug(),Ux=og(),Wx=vg(),Dx=cg(),U=[0,0,0,0,0,0],Vi=[0,0,0,0];function Yx(r,e,t){var i,a,n,u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A;return o=Tx(2*r)/-Ox(e/2),T=Sx(t),w=Ix(t),Vi[0]=o,q=T*T,b=w*w,y=T*w,m=y*y,h=m*y,p=m*m,c=m*h,v=h*h,l=p*h,U[0]=(2*q-1)/(3*y),U[1]=-Px(q)/(36*m),U[2]=Mx(q)/(1620*h),U[3]=Rx(q)/(6480*p),U[4]=Vx(q)/(90720*c),U[5]=0,Vi[1]=Yt(U,o),U[0]=-Cx(q)/(405*h),U[1]=Bx(q)/(2592*p),U[2]=-kx(q)/(204120*c),U[3]=-jx(q)/(2099520*v),U[4]=0,U[5]=0,Vi[2]=Yt(U,o),U[0]=Gx(q)/(102060*c),U[1]=-Hx(q)/(20995200*v),U[2]=Ux(q)/(36741600*l),U[3]=0,U[4]=0,U[5]=0,Vi[3]=Yt(U,o),f=Yt(Vi,1/e),n=w/T,n*=n,g=-(f*f)/(2*q)+pg(q)+b*pg(b)/q,Ax(f)<.7?(U[0]=q,U[1]=y,U[2]=(1-2*q)/3,U[3]=Wx(q)/(36*y),U[4]=Dx(q)/(270*m),U[5]=0,A=Yt(U,f)):(E=Nx(g),U[0]=E,U[1]=n,U[2]=0,U[3]=3*n*(3*n+1)/6,U[4]=4*n*(4*n+1)*(4*n+2)/24,U[5]=5*n*(5*n+1)*(5*n+2)*(5*n+3)/120,A=Yt(U,E),(A-q)*f<0&&(A=1-A)),f<0?(a=0,i=q):(a=q,i=1),(A<a||A>i)&&(A=(a+i)/2),u=Fx(-g,n),A=Lx(u,A,a,i,32,100),A}hg.exports=Yx});var gg=s((uqr,yg)=>{var Ci=1e3,Bi=Ci*60,ki=Bi*60,ji=ki*24,Xx=ji*365.25;yg.exports=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return Kx(r);if(t==="number"&&isNaN(r)===!1)return e.long?Zx(r):Qx(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function Kx(r){if(r=String(r),!(r.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(r);if(e){var t=parseFloat(e[1]),i=(e[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return t*Xx;case"days":case"day":case"d":return t*ji;case"hours":case"hour":case"hrs":case"hr":case"h":return t*ki;case"minutes":case"minute":case"mins":case"min":case"m":return t*Bi;case"seconds":case"second":case"secs":case"sec":case"s":return t*Ci;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function Qx(r){return r>=ji?Math.round(r/ji)+"d":r>=ki?Math.round(r/ki)+"h":r>=Bi?Math.round(r/Bi)+"m":r>=Ci?Math.round(r/Ci)+"s":r+"ms"}function Zx(r){return bn(r,ji,"day")||bn(r,ki,"hour")||bn(r,Bi,"minute")||bn(r,Ci,"second")||r+" ms"}function bn(r,e,t){if(!(r<e))return r<e*1.5?Math.floor(r/e)+" "+t:Math.ceil(r/e)+" "+t+"s"}});var wg=s((Z,qg)=>{Z=qg.exports=ys.debug=ys.default=ys;Z.coerce=rrr;Z.disable=zx;Z.enable=Jx;Z.enabled=xx;Z.humanize=gg();Z.names=[];Z.skips=[];Z.formatters={};var ms;function $x(r){var e=0,t;for(t in r)e=(e<<5)-e+r.charCodeAt(t),e|=0;return Z.colors[Math.abs(e)%Z.colors.length]}function ys(r){function e(){if(e.enabled){var t=e,i=+new Date,a=i-(ms||i);t.diff=a,t.prev=ms,t.curr=i,ms=i;for(var n=new Array(arguments.length),u=0;u<n.length;u++)n[u]=arguments[u];n[0]=Z.coerce(n[0]),typeof n[0]!="string"&&n.unshift("%O");var o=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,function(l,v){if(l==="%%")return l;o++;var c=Z.formatters[v];if(typeof c=="function"){var p=n[o];l=c.call(t,p),n.splice(o,1),o--}return l}),Z.formatArgs.call(t,n);var f=e.log||Z.log||console.log.bind(console);f.apply(t,n)}}return e.namespace=r,e.enabled=Z.enabled(r),e.useColors=Z.useColors(),e.color=$x(r),typeof Z.init=="function"&&Z.init(e),e}function Jx(r){Z.save(r),Z.names=[],Z.skips=[];for(var e=(typeof r=="string"?r:"").split(/[\s,]+/),t=e.length,i=0;i<t;i++)e[i]&&(r=e[i].replace(/\*/g,".*?"),r[0]==="-"?Z.skips.push(new RegExp("^"+r.substr(1)+"$")):Z.names.push(new RegExp("^"+r+"$")))}function zx(){Z.enable("")}function xx(r){var e,t;for(e=0,t=Z.skips.length;e<t;e++)if(Z.skips[e].test(r))return!1;for(e=0,t=Z.names.length;e<t;e++)if(Z.names[e].test(r))return!0;return!1}function rrr(r){return r instanceof Error?r.stack||r.message:r}});var gs=s((Ar,Eg)=>{Ar=Eg.exports=wg();Ar.log=irr;Ar.formatArgs=trr;Ar.save=arr;Ar.load=bg;Ar.useColors=err;Ar.storage=typeof chrome!="undefined"&&typeof chrome.storage!="undefined"?chrome.storage.local:nrr();Ar.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function err(){return typeof window!="undefined"&&window.process&&window.process.type==="renderer"?!0:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}Ar.formatters.j=function(r){try{return JSON.stringify(r)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}};function trr(r){var e=this.useColors;if(r[0]=(e?"%c":"")+this.namespace+(e?" %c":" ")+r[0]+(e?"%c ":" ")+"+"+Ar.humanize(this.diff),!!e){var t="color: "+this.color;r.splice(1,0,t,"color: inherit");var i=0,a=0;r[0].replace(/%[a-zA-Z%]/g,function(n){n!=="%%"&&(i++,n==="%c"&&(a=i))}),r.splice(a,0,t)}}function irr(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function arr(r){try{r==null?Ar.storage.removeItem("debug"):Ar.storage.debug=r}catch{}}function bg(){var r;try{r=Ar.storage.debug}catch{}return!r&&typeof process!="undefined"&&"env"in process&&(r=process.env.DEBUG),r}Ar.enable(bg());function nrr(){try{return window.localStorage}catch{}}});var Gi=s((sqr,dg)=>{"use strict";var urr=34028234663852886e22;dg.exports=urr});var Og=s((oqr,Ng)=>{"use strict";var srr=gs(),_g=$u(),orr=H(),frr=nr(),Tg=er(),vrr=Gi(),Ag=srr("gammaincinv:higher_newton");function lrr(r,e,t,i,a,n,u,o){var f,l,v,c,p,h,m,y,g,q,b,w,T,E;E=r,b=1,w=1,h=e*e,l=r;do{if(E=r,m=E*E,t===0){if(f=(1-e)*Tg(E)+E+n,f>Tg(vrr))return Ag("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),l;T=frr(f)}else T=-u*E;o?(y=_g(E,e,!0,!1),v=-T*(y-i)):(g=_g(E,e,!0,!0),v=T*(g-a)),T=v,i>1e-120||w>1?(c=.5*(E-e+1)/E,p=(2*m-4*E*e+4*E+2*h-3*e+1)/m,p/=6,r=E+T*(1+T*(c+T*p))):r=E+T,b=orr(E/r-1),w+=1,E=r,E<0&&(E=l,w=100)}while(b>2e-14&&w<35);return(b>2e-14||w>99)&&Ag("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),q=E||0,q}Ng.exports=lrr});var Ig=s((fqr,Sg)=>{"use strict";function crr(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}Sg.exports=crr});var Lg=s((vqr,Fg)=>{"use strict";function prr(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}Fg.exports=prr});var qs=s((lqr,Mg)=>{"use strict";var hrr=H(),mrr=nr(),Pg=er(),yrr=Pe(),grr=Ig(),qrr=Lg(),wrr=1e-8,brr=.08333333333333333,Err=.008333333333333333,Xt=[1,0,0,0,0,0];function drr(r){var e,t,i,a,n,u,o,f,l;if(l=r*r*.5,r===0?n=0:r<-1?(f=mrr(-1-l),n=grr(f)):r<1?(f=r,n=qrr(f)):(f=11+l,u=Pg(f),n=f+u,f=1/f,e=u*u,t=e*u,i=t*u,a=i*u,Xt[1]=(2-u)*.5,Xt[2]=(-9*u+6+2*e)/6,Xt[3]=-(3*t+36*u-22*e-12)*brr,Xt[4]=(60+350*e-300*u-125*t+12*i)/60,Xt[5]=-(-120-274*i+900*u-1700*e+1125*t+20*a)*Err,n+=u*f*yrr(Xt,f)),f=1,r>-3.5&&r<-.03||r>.03&&r<40){f=1,o=n;do n=o*(l+Pg(o))/(o-1),f=hrr(o/n-1),o=n;while(f>wrr)}return n}Mg.exports=drr});var Vg=s((cqr,Rg)=>{"use strict";var _rr=.9189385332046728;Rg.exports=_rr});var Bg=s((pqr,Cg)=>{"use strict";var Trr=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function Arr(r,e){var t,i,a,n,u;i=0,a=0,t=e+e,u=r;do n=a,a=i,i=t*a-n+Trr[u],u-=1;while(u>=0);return(i-n)/2}Cg.exports=Arr});var jg=s((hqr,kg)=>{"use strict";function Nrr(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}kg.exports=Nrr});var Hg=s((mqr,Gg)=>{"use strict";function Orr(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}Gg.exports=Orr});var Wg=s((yqr,Ug)=>{"use strict";var ws=kt(),En=er(),bs=Vg(),Srr=Ai(),Irr=Gi(),Frr=Bg(),Lrr=jg(),Prr=Hg(),Mrr=.30865217988013566;function Rrr(r){var e;return r<Srr?Irr:r<1?ws(r+1)-(r+.5)*En(r)+r-bs:r<2?ws(r)-(r-.5)*En(r)+r-bs:r<3?ws(r-1)-(r-.5)*En(r)+r-bs+En(r-1):r<12?(e=18/(r*r)-1,Frr(17,e)/(12*r)):(e=1/(r*r),r<1e3?Lrr(e)/(Mrr+e)/r:Prr(e)/r)}Ug.exports=Rrr});var Xg=s((gqr,Yg)=>{"use strict";var Dg=nr(),Vrr=le(),Crr=er(),Brr=Gi(),krr=qi(),jrr=Wg();function Grr(r){return r>=3?Dg(jrr(r)):r>0?Vrr(r)/(Dg(-r+(r-.5)*Crr(r))*krr):Brr}Yg.exports=Grr});var Qg=s((qqr,Kg)=>{"use strict";function Hrr(r){var e,t,i;return r===0?-.3333333333438:(r<0?e=-r:e=r,e<=1?(t=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),i=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,t=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),i=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),t/i)}Kg.exports=Hrr});var $g=s((wqr,Zg)=>{"use strict";var Urr=H(),Wrr=er(),Drr=qs(),Yrr=Qg();function Xrr(r){var e;return Urr(r)<1?Yrr(r):(e=Drr(r),Wrr(r/(e-1))/r)}Zg.exports=Xrr});var zg=s((bqr,Jg)=>{"use strict";function Krr(r){var e,t,i;return r===0?-.0172847633523:(r<0?e=-r:e=r,e<=1?(t=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),i=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,t=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),i=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),t/i)}Jg.exports=Krr});var rq=s((Eqr,xg)=>{"use strict";function Qrr(r){var e,t,i;return r===0?-.0172839517431:(r<0?e=-r:e=r,e<=1?(t=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),i=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,t=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),i=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),t/i)}xg.exports=Qrr});var tq=s((dqr,eq)=>{"use strict";function Zrr(r){var e,t,i;return r===0?.99994466948:(r<0?e=-r:e=r,e<=1?(t=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),i=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,t=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),i=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),t/i)}eq.exports=Zrr});var aq=s((_qr,iq)=>{"use strict";var $rr=er(),Jrr=zg(),zrr=rq(),xrr=tq();function rer(r){var e,t;return r<-5?(t=r*r,e=$rr(-r),(12-t-6*(e*e))/(12*t*r)):r<-2?Jrr(r):r<2?zrr(r):r<1e3?(t=1/r,xrr(r)/(-12*r)):-1/(12*r)}iq.exports=rer});var uq=s((Tqr,nq)=>{"use strict";function eer(r){var e,t,i;return r===0?.0495346498136:(r<0?e=-r:e=r,e<=1?(t=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),i=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,t=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),i=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),t/i)}nq.exports=eer});var oq=s((Aqr,sq)=>{"use strict";function ter(r){var e,t,i;return r===0?.00452313583942:(r<0?e=-r:e=r,e<=1?(t=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),i=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,t=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),i=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),t/i)}sq.exports=ter});var vq=s((Nqr,fq)=>{"use strict";function ier(r){var e,t,i;return r===0?.00439937562904:(r<0?e=-r:e=r,e<=1?(t=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),i=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,t=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),i=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),t/i)}fq.exports=ier});var cq=s((Oqr,lq)=>{"use strict";function aer(r){var e,t,i;return r===0?-.0011481191232:(r<0?e=-r:e=r,e<=1?(t=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),i=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,t=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),i=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),t/i)}lq.exports=aer});var hq=s((Sqr,pq)=>{"use strict";function ner(r){var e,t,i;return r===0?-.000145727889667:(r<0?e=-r:e=r,e<=1?(t=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),i=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,t=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),i=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),t/i)}pq.exports=ner});var gq=s((Iqr,yq)=>{"use strict";var mq=er(),uer=uq(),ser=oq(),oer=vq(),fer=cq(),ver=hq();function ler(r){var e,t;return r<-8?(e=r*r,t=mq(-r)/r,(-30+r*t*(6*e*t*t-12+e))/(12*r*e*e)):r<-4?uer(r)/(r*r):r<-2?ser(r):r<2?oer(r):r<10?(e=1/r,fer(e)/(r*r)):r<100?(e=1/r,ver(e)/(r*r)):-mq(r)/(12*r*r*r)}yq.exports=ler});var Nq=s((Fqr,Aq)=>{"use strict";var cer=gs(),qq=Pe(),te=kt(),per=Dt(),wq=le(),dn=x(),bq=H(),Kt=nr(),her=Qe(),mer=rr(),Yr=er(),yer=qi(),ger=Gi(),qer=Cu(),wer=Og(),Eq=qs(),dq=Xg(),ber=$g(),Eer=aq(),der=gq(),_er=cer("gammaincinv:compute"),it=.5,Es=.3333333333333333,Ter=.25,_q=.2,Tq=.16666666666666666,Aer=.08333333333333333,Ner=.041666666666666664,Xr=[0,0,0,0,0];function Oer(r,e,t){var i,a,n,u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A,d,G,J,qr,Gr,wr,Vr,Nr,_,X,Ft,t0,i0,a0,Nf,Er,or,n0,dr,Ae,re,u0,s0,o0;if(e<it?(u=!0,o=e,u0=-1):(u=!1,o=t,u0=1),dr=0,bq(r-1)<1e-4&&(Ae=0,u?e<.001?(t0=e*e,Nr=t0*e,Ft=Nr*e,A=Ft*e,E=A*e,d=e+t0*it+Nr*Es+Ft*Ter+A*_q+E*Tq):d=-Yr(1-e):d=-Yr(t),r===1?(dr=2,a0=d):(n=te(r),dr=1)),t<1e-30&&r<it&&(Ae=0,d=-Yr(t*wq(r))+(r-1)*Yr(-Yr(t*wq(r))),dr=1,n=te(r)),r>1&&r<500&&e<1e-80){for(Ae=0,f=1/r,i=1/(r+1),d=(te(r+1)+Yr(e))*f,d=Kt(d),g=d,n0=0;n0<10;n0++)d=g*Kt(d*f)*mer(1-d*i,f);dr=1,n=te(r)}if(l=1/r*(Yr(e)+te(r+1)),l<Yr(_q*(1+r))&&dr===0&&(re=Kt(l),Ae=0,G=r*r,i0=G*r,_=i0*r,q=r+1,h=q*q,p=q*h,c=h*h,b=r+2,v=b*b,w=r+3,Xr[0]=1,Xr[1]=1/q,Xr[2]=it*(3*r+5)/(h*b),Xr[3]=Es*(31+8*G+33*r)/(p*b*w),Xr[4]=Ner*(2888+1179*i0+125*_+3971*G+5661*r)/(c*v*w*(r+4)),d=re*qq(Xr,re),n=te(r),dr=1),r<10&&dr===0&&(m=dn(r)/(dq(r)*yer),y=her(.02,m),t<y&&(Ae=0,Er=1-r,wr=Er*Er,Vr=wr*Er,T=dn(-2/r*Yr(t/m)),d=r*Eq(T),or=Yr(d),d>5?(J=or*or,qr=J*or,Gr=qr*or,re=1/d,Xr[0]=or-1,Xr[1]=(3*Er-2*Er*or+J-2*or+2)*it,Xr[2]=(24*Er*or-11*wr-24*Er-6*J+12*or-12-9*Er*J+6*wr*or+2*qr)*Tq,Xr[3]=(-12*Vr*or+8.04*Er*J-114*wr*or+(72+36*J)+(3*Gr-72*or+162)*(Er-168*Er*or)-(12*qr+25*Vr)-(22*Er*qr+36*wr*J+120*wr))*Aer,Xr[4]=0,d=d-or+Er*re*qq(Xr,re)):(re=1/d,J=or*or,Nf=or-1,s0=or-Er*re*Nf,s0<d&&(d-=s0)),n=te(r),dr=1)),bq(o-it)<1e-5&&dr===0&&(Ae=0,f=1/r,d=r-Es+(.019753086419753086+.007211444248481286*f)*f,n=te(r),dr=1),r<1&&dr===0&&(Ae=0,u?d=Kt(1/r*(Yr(o)+te(r+1))):d=Kt(1/r*(Yr(1-o)+te(r+1))),n=te(r),dr=1),dr===0)if(Ae=1,f=1/r,re=per(2*o),T=u0*re/dn(r*it),re<ger)T+=(ber(T)+(Eer(T)+der(T)*f)*f)*f,d=r*Eq(T),o0=T,X=-dn(r/qer)*Kt(-it*r*o0*o0)/dq(r),a=1/X;else return _er("Warning: Overflow problems in one or more steps of the computation."),NaN;return dr<2&&(a0=wer(d,r,Ae,e,t,n,a,u)),a0}Aq.exports=Oer});var Lq=s((Lqr,Fq)=>{"use strict";var Oq=k(),Ser=Ai(),Sq=z(),Iq=Nq();function Ier(r,e,t){return Oq(r)||Oq(e)?NaN:e<Ser?NaN:r>1||r<0?NaN:t===!0?r===0?Sq:r===1?0:Iq(e,1-r,r):r===0?0:r===1?Sq:Iq(e,r,1-r)}Fq.exports=Ier});var Mq=s((Pqr,Pq)=>{"use strict";var Fer=Lq();Pq.exports=Fer});var Vq=s((Mqr,Rq)=>{"use strict";var Ler=5e-324;Rq.exports=Ler});var jq=s((Rqr,kq)=>{"use strict";var Cq=Mq(),Bq=er(),Per=x(),Mer=Vq(),Rer=cs(),Ver=hs();function Cer(r,e,t,i){var a,n,u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A,d,G,J,qr,Gr,wr,Vr,Nr,_,X,Ft;return t<i?f=Cq(t,e,!0):f=Cq(i,e,!1),f/=r,q=e/r,_=Per(1+q),E=_*_,A=E*_,d=E*E,G=A*E,J=A*A,qr=d*A,Gr=d*d,wr=G*d,v=G*G,Nr=f-q,b=Nr*Nr,w=b*Nr,T=b*b,Vr=_+1,c=Vr*Vr,p=Vr*c,h=c*c,m=(_+2)*(_-1)/(3*_),m+=(A+9*E+21*_+5)*Nr/(36*E*Vr),m-=(d-13*A+69*E+167*_+46)*b/(1620*c*A),m-=(7*G+21*d+70*A+26*E-93*_-31)*w/(6480*p*d),m-=(75*J+202*G+188*d-888*A-1345*E+118*_+138)*T/(272160*h*G),y=(28*d+131*A+402*E+581*_+208)*(_-1)/(1620*Vr*A),y-=(35*J-154*G-623*d-1636*A-3983*E-3514*_-925)*Nr/(12960*c*d),y-=(2132*qr+7915*J+16821*G+35066*d+87490*A+141183*E+95993*_+21640)*b/(816480*G*p),y-=(11053*Gr+53308*qr+117010*J+163924*G+116188*d-258428*A-677042*E-481940*_-105497)*w/(14696640*h*J),g=-((3592*qr+8375*J-1323*G-29198*d-89578*A-154413*E-116063*_-29632)*(_-1))/(816480*G*c),g-=(442043*wr+2054169*Gr+3803094*qr+3470754*J+2141568*G-2393568*d-19904934*A-34714674*E-23128299*_-5253353)*Nr/(146966400*J*p),g-=(116932*v+819281*wr+2378172*Gr+4341330*qr+6806004*J+10622748*G+18739500*d+30651894*A+30869976*E+15431867*_+2919016)*b/(146966400*h*qr),l=f+m/r+y/(r*r)+g/(r*r*r),l<=0&&(l=Mer),X=l-q*Bq(l)+(1+q)*Bq(1+q)-q,a=1/(1+q),u=l<q?a:0,o=l<q?1:a,Ft=(u+o)/2,n=Rer(X,q),Ver(n,Ft,u,o,32,100)}kq.exports=Cer});var Hq=s((Vqr,Gq)=>{"use strict";var cr=H(),Ber=De(),ds=Ri(),ker=Ke(),_s=Ze();function jer(r,e,t,i,a,n){var u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E;w=0,o=!1,c=e,v=Ber(1,1-a),m=ker(1e7*e,1e7),p=0,f=m,l=m,h=n;do{if(p=w,l=f,f=m,b=r(c),w=b[0],T=b[1],E=b[2],h-=1,w===0)break;if(T===0?(p===0&&(c===t?e=i:e=t,p=r(e),m=e-c),ds(p)*ds(w)<0?m<0?m=(c-t)/2:m=(c-i)/2:m<0?m=(c-i)/2:m=(c-t)/2):E===0?m=w/T:(y=2*w,q=2*T-w*(E/T),cr(q)<1&&cr(y)>=cr(q)*_s?m=w/T:m=y/q,m*T/w<0&&(m=w/T,cr(m)>2*cr(e)&&(m=(m<0?-1:1)*2*cr(e)))),u=cr(m/l),u>.8&&u<2&&(m=m>0?(c-t)/2:(c-i)/2,cr(m)>c&&(m=ds(m)*c),l=m*3),e=c,c-=m,c<t){if(cr(t)<1&&cr(c)>1&&_s/cr(c)<cr(t)?g=1e3:g=c/t,cr(g)<1&&(g=1/g),!o&&g>0&&g<3)m=.99*(e-t),c=e-m,o=!0;else if(m=(e-t)/2,c=e-m,c===t||c===i)break}else if(c>i){if(cr(i)<1&&cr(c)>1&&_s/cr(c)<cr(i)?g=1e3:g=c/i,cr(g)<1&&(g=1/g),!o&&g>0&&g<3)m=.99*(e-i),c=e-m,o=!0;else if(m=(e-i)/2,c=e-m,c===t||c===i)break}m>0?i=e:t=e}while(h&&cr(c*v)<cr(m));return c}Gq.exports=jer});var Wq=s((Cqr,Uq)=>{"use strict";var Ger=fs().assign,Her=H(),Uer=Ze(),Ts=We();function Wer(r,e,t,i){return a;function a(n){var u,o,f,l,v;return v=1-n,u=[0,0],Ger(n,r,e,!0,i,u,1,0),l=u[0]-t,o=u[1],i&&(o=-o),v===0&&(v=Ts*64),n===0&&(n=Ts*64),f=o*(-(v*r)+(e-2)*n+1),Her(f)<v*n*Uer&&(f/=v*n),i&&(f=-f),o===0&&(o=(i?-1:1)*Ts*64),[l,o,f]}}Uq.exports=Wer});var xq=s((Bqr,zq)=>{"use strict";var Der=Pe(),Dq=cn(),As=gt(),Yq=ve(),Yer=Ra(),Qt=hi(),Xq=x(),Xer=H(),Kq=nr(),we=rr(),Qq=Vt(),Ker=Ke(),Qer=Qe(),Zq=er(),Ns=We(),$q=Ba(),Jq=Ur(),Zer=Fy(),$er=My(),Jer=mg(),zer=jq(),xer=Hq(),rtr=Wq(),etr=32,ttr=1e3,dt=[0,0,0,0,0];function itr(r,e,t,i){var a,n,u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A,d,G,J,qr,Gr,wr,Vr,Nr,_,X;if(n=!1,i===0)return[1,0];if(t===0)return[0,1];if(r===1){if(e===1)return[t,1-t];y=e,e=r,r=y,y=i,i=t,t=y,n=!0}if(_=0,o=0,l=1,r===.5){if(e===.5)return _=Qq(t*$q),_*=_,X=Qq(i*$q),X*=X,[_,X];e>.5&&(y=e,e=r,r=y,y=i,i=t,t=y,n=!n)}if(e===.5&&r>=.5&&t!==1)G={},_=Zer(r,t,G),X=G.value;else{if(e===1)return t<i?r>1?(_=we(t,1/r),X=-As(Zq(t)/r)):(_=we(t,1/r),X=1-_):(_=Kq(Yq(-i)/r),X=-As(Yq(-i)/r)),n&&(y=X,X=_,_=y),[_,X];if(r+e>5)t>.5&&(y=e,e=r,r=y,y=i,i=t,t=y,n=!n),p=Qer(r,e),c=Ker(r,e),Xq(p)>c-p&&p>5?(_=$er(r,e,t),X=1-_):(wr=r+e,f=Yer(Xq(r/wr)),u=p/wr,u>=.2&&u<=.8&&wr>=10?(m=we(t,1/r),m<.0025&&r+e<200?_=m*we(r*Qt(r,e),1/r):_=Jer(t,wr,f),X=1-_):(r<e&&(y=e,e=r,r=y,y=i,i=t,t=y,n=!n),h=0,e<2&&(h=Qt(r,e)),h===0?X=1:(X=we(e*i*h,1/e),_=1-X)),X>1e-5&&(_=zer(r,e,t,i),X=1-_));else if(r<1&&e<1){if(d=(1-r)/(2-r-e),w=Dq(d,r,e)-t,Xer(w)/t<Jq*3)return n?[1-d,d]:[d,1-d];w<0&&(y=e,e=r,r=y,y=i,i=t,t=y,n=!n,d=1-d),A=we(r*t*Qt(r,e),1/r),_=A/(1+A),X=1/(1+A),_>d&&(_=d),l=d}else r>1&&e>1?(d=(r-1)/(r+e-2),g=(e-1)/(r+e-2),E=Dq(d,r,e)-t,E<0&&(y=e,e=r,r=y,y=i,i=t,t=y,y=g,g=d,d=y,n=!n),T=Zq(t*r*Qt(r,e))/r,_=Kq(T),X=_<.9?1-_:-As(T),e<r&&_<.2&&(q=r-1,b=e-1,J=r*r,qr=r*J,Gr=e*e,dt[0]=0,dt[1]=1,dt[2]=b/q,q*=q,dt[3]=b*(3*r*e+5*e+J-r-4)/(2*(r+2)*q),q*=r+1,dt[4]=b*(33*r*Gr+31*Gr+8*J*Gr-30*r*e-47*e+11*J*e+6*qr*e+18+4*r-qr+J*J-10*J),dt[4]/=3*(r+3)*(r+2)*q,_=Der(dt,_)),_>d&&(_=d),l=d):(e<r&&(y=e,e=r,r=y,y=i,i=t,t=y,n=!n),we(t,1/r)<.5?(_=we(t*r*Qt(r,e),1/r),_===0&&(_=Ns),X=1-_):(X=we(1-we(t,e*Qt(r,e)),1/e),X===0&&(X=Ns),_=1-X))}return _>.5&&(y=e,e=r,r=y,y=i,i=t,t=y,y=X,X=_,_=y,n=!n,Vr=1-l,Nr=1-o,o=Vr,l=Nr),o===0&&(n?(o=Jq,_<o&&(_=o)):o=Ns,_<o&&(_=o)),a=etr,_<1e-50&&(r<1||e<1)&&(a*=3,a/=2),v=rtr(r,e,t<i?t:i,t>=i),_=xer(v,_,o,l,a,ttr),_===o&&(_=0),n?[1-_,_]:[_,1-_]}zq.exports=itr});var Os=s((kqr,rw)=>{"use strict";var atr=xq();rw.exports=atr});var iw=s((jqr,tw)=>{"use strict";var ntr=Os(),ew=k(),utr=Ri(),str=x();function otr(r,e){var t,i;return ew(e)||ew(r)||e<=0||r<0||r>1?NaN:(t=r>.5?1-r:r,i=ntr(e/2,.5,2*t,1-2*t),utr(r-.5)*str(e*i[1]/i[0]))}tw.exports=otr});var uw=s((Gqr,nw)=>{"use strict";var ftr=pn(),vtr=Os(),aw=k(),ltr=Ri(),ctr=x();function ptr(r){if(aw(r)||r<=0)return ftr(NaN);return e;function e(t){var i,a;return aw(t)||t<0||t>1?NaN:(i=t>.5?1-t:t,a=vtr(r/2,.5,2*i,1-2*i),ltr(t-.5)*ctr(r*a[1]/a[0]))}}nw.exports=ptr});var Ss=s((Hqr,ow)=>{"use strict";var htr=j(),sw=iw(),mtr=uw();htr(sw,"factory",mtr);ow.exports=sw});var vw=s((Uqr,fw)=>{"use strict";function ytr(r,e){return e>0?0:(1-r)*e}fw.exports=ytr});var at=s((Wqr,lw)=>{"use strict";var gtr=vw();lw.exports=gtr});var hw=s((Dqr,pw)=>{"use strict";var cw="function";function qtr(r){return typeof r.get===cw&&typeof r.set===cw}pw.exports=qtr});var yw=s((Yqr,mw)=>{"use strict";var wtr=hw();mw.exports=wtr});var ww=s((Xqr,qw)=>{"use strict";var gw={float64:btr,float32:Etr,int32:dtr,int16:_tr,int8:Ttr,uint32:Atr,uint16:Ntr,uint8:Otr,uint8c:Str,generic:Itr,default:Ftr};function btr(r,e){return r[e]}function Etr(r,e){return r[e]}function dtr(r,e){return r[e]}function _tr(r,e){return r[e]}function Ttr(r,e){return r[e]}function Atr(r,e){return r[e]}function Ntr(r,e){return r[e]}function Otr(r,e){return r[e]}function Str(r,e){return r[e]}function Itr(r,e){return r[e]}function Ftr(r,e){return r[e]}function Ltr(r){var e=gw[r];return typeof e=="function"?e:gw.default}qw.exports=Ltr});var Hi=s((Kqr,bw)=>{"use strict";var Ptr=ww();bw.exports=Ptr});var _w=s((Qqr,dw)=>{"use strict";var Ew={float64:Mtr,float32:Rtr,int32:Vtr,int16:Ctr,int8:Btr,uint32:ktr,uint16:jtr,uint8:Gtr,uint8c:Htr,generic:Utr,default:Wtr};function Mtr(r,e,t){r[e]=t}function Rtr(r,e,t){r[e]=t}function Vtr(r,e,t){r[e]=t}function Ctr(r,e,t){r[e]=t}function Btr(r,e,t){r[e]=t}function ktr(r,e,t){r[e]=t}function jtr(r,e,t){r[e]=t}function Gtr(r,e,t){r[e]=t}function Htr(r,e,t){r[e]=t}function Utr(r,e,t){r[e]=t}function Wtr(r,e,t){r[e]=t}function Dtr(r){var e=Ew[r];return typeof e=="function"?e:Ew.default}dw.exports=Dtr});var Aw=s((Zqr,Tw)=>{"use strict";var Ytr=_w();Tw.exports=Ytr});var Sw=s(($qr,Ow)=>{"use strict";var Nw={complex128:Xtr,complex64:Ktr,default:Qtr};function Xtr(r,e){return r.get(e)}function Ktr(r,e){return r.get(e)}function Qtr(r,e){return r.get(e)}function Ztr(r){var e=Nw[r];return typeof e=="function"?e:Nw.default}Ow.exports=Ztr});var Ui=s((Jqr,Iw)=>{"use strict";var $tr=Sw();Iw.exports=$tr});var Pw=s((zqr,Lw)=>{"use strict";var Fw={complex128:Jtr,complex64:ztr,default:xtr};function Jtr(r,e,t){r.set(t,e)}function ztr(r,e,t){r.set(t,e)}function xtr(r,e,t){r.set(t,e)}function rir(r){var e=Fw[r];return typeof e=="function"?e:Fw.default}Lw.exports=rir});var Rw=s((xqr,Mw)=>{"use strict";var eir=Pw();Mw.exports=eir});var Cw=s((rwr,Vw)=>{"use strict";var tir=vr(),Is;function iir(r){return tir(r)==="[object Array]"}Array.isArray?Is=Array.isArray:Is=iir;Vw.exports=Is});var Re=s((ewr,Bw)=>{"use strict";var air=Cw();Bw.exports=air});var jw=s((twr,kw)=>{"use strict";var nir=Re(),uir=Q();function sir(r){if(typeof r!="function")throw new TypeError(uir("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!nir(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}kw.exports=sir});var Fs=s((iwr,Gw)=>{"use strict";var oir=jw();Gw.exports=oir});var Uw=s((awr,Hw)=>{"use strict";function fir(r){return r!==null&&typeof r=="object"}Hw.exports=fir});var Ps=s((nwr,Ww)=>{"use strict";var vir=j(),lir=Fs(),Ls=Uw(),cir=lir(Ls);vir(Ls,"isObjectLikeArray",cir);Ww.exports=Ls});var Yw=s((uwr,Dw)=>{"use strict";var pir=Ps();function hir(r){return pir(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Dw.exports=hir});var _t=s((swr,Xw)=>{"use strict";var mir=Yw();Xw.exports=mir});var Ms=s((owr,Kw)=>{"use strict";function yir(){return/^\s*function\s*([^(]*)/i}Kw.exports=yir});var Zw=s((fwr,Qw)=>{"use strict";var gir=Ms(),qir=gir();Qw.exports=qir});var Rs=s((vwr,Jw)=>{"use strict";var wir=j(),$w=Ms(),bir=Zw();wir($w,"REGEXP",bir);Jw.exports=$w});var xw=s((lwr,zw)=>{"use strict";var Eir=vr(),dir=Rs().REGEXP,_ir=_t();function Tir(r){var e,t,i;if(t=Eir(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=dir.exec(i.toString()),e)return e[1]}return _ir(r)?"Buffer":t}zw.exports=Tir});var nt=s((cwr,rb)=>{"use strict";var Air=xw();rb.exports=Air});var tb=s((pwr,eb)=>{"use strict";var Nir={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"};eb.exports=Nir});var ab=s((hwr,ib)=>{"use strict";var Oir=vr(),Sir=typeof Float32Array=="function";function Iir(r){return Sir&&r instanceof Float32Array||Oir(r)==="[object Float32Array]"}ib.exports=Iir});var ub=s((mwr,nb)=>{"use strict";var Fir=ab();nb.exports=Fir});var ob=s((ywr,sb)=>{"use strict";var Lir=typeof Float32Array=="function"?Float32Array:null;sb.exports=Lir});var lb=s((gwr,vb)=>{"use strict";var Pir=ub(),Mir=z(),fb=ob();function Rir(){var r,e;if(typeof fb!="function")return!1;try{e=new fb([1,3.14,-3.14,5e40]),r=Pir(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Mir}catch{r=!1}return r}vb.exports=Rir});var pb=s((qwr,cb)=>{"use strict";var Vir=lb();cb.exports=Vir});var mb=s((wwr,hb)=>{"use strict";var Cir=typeof Float32Array=="function"?Float32Array:void 0;hb.exports=Cir});var gb=s((bwr,yb)=>{"use strict";function Bir(){throw new Error("not implemented")}yb.exports=Bir});var be=s((Ewr,qb)=>{"use strict";var kir=pb(),jir=mb(),Gir=gb(),Vs;kir()?Vs=jir:Vs=Gir;qb.exports=Vs});var bb=s((dwr,wb)=>{"use strict";var Hir=vr(),Uir=typeof Int32Array=="function";function Wir(r){return Uir&&r instanceof Int32Array||Hir(r)==="[object Int32Array]"}wb.exports=Wir});var db=s((_wr,Eb)=>{"use strict";var Dir=bb();Eb.exports=Dir});var Tb=s((Twr,_b)=>{"use strict";var Yir=-2147483648;_b.exports=Yir});var Nb=s((Awr,Ab)=>{"use strict";var Xir=typeof Int32Array=="function"?Int32Array:null;Ab.exports=Xir});var Ib=s((Nwr,Sb)=>{"use strict";var Kir=db(),Qir=Ca(),Zir=Tb(),Ob=Nb();function $ir(){var r,e;if(typeof Ob!="function")return!1;try{e=new Ob([1,3.14,-3.14,Qir+1]),r=Kir(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Zir}catch{r=!1}return r}Sb.exports=$ir});var Lb=s((Owr,Fb)=>{"use strict";var Jir=Ib();Fb.exports=Jir});var Mb=s((Swr,Pb)=>{"use strict";var zir=typeof Int32Array=="function"?Int32Array:void 0;Pb.exports=zir});var Vb=s((Iwr,Rb)=>{"use strict";function xir(){throw new Error("not implemented")}Rb.exports=xir});var Wi=s((Fwr,Cb)=>{"use strict";var rar=Lb(),ear=Mb(),tar=Vb(),Cs;rar()?Cs=ear:Cs=tar;Cb.exports=Cs});var kb=s((Lwr,Bb)=>{"use strict";var iar=vr(),aar=typeof Int16Array=="function";function nar(r){return aar&&r instanceof Int16Array||iar(r)==="[object Int16Array]"}Bb.exports=nar});var Gb=s((Pwr,jb)=>{"use strict";var uar=kb();jb.exports=uar});var Ub=s((Mwr,Hb)=>{"use strict";var sar=32767;Hb.exports=sar});var Db=s((Rwr,Wb)=>{"use strict";var oar=-32768;Wb.exports=oar});var Xb=s((Vwr,Yb)=>{"use strict";var far=typeof Int16Array=="function"?Int16Array:null;Yb.exports=far});var Zb=s((Cwr,Qb)=>{"use strict";var lar=Gb(),car=Ub(),par=Db(),Kb=Xb();function har(){var r,e;if(typeof Kb!="function")return!1;try{e=new Kb([1,3.14,-3.14,car+1]),r=lar(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===par}catch{r=!1}return r}Qb.exports=har});var Jb=s((Bwr,$b)=>{"use strict";var mar=Zb();$b.exports=mar});var xb=s((kwr,zb)=>{"use strict";var yar=typeof Int16Array=="function"?Int16Array:void 0;zb.exports=yar});var eE=s((jwr,rE)=>{"use strict";function gar(){throw new Error("not implemented")}rE.exports=gar});var Di=s((Gwr,tE)=>{"use strict";var qar=Jb(),war=xb(),bar=eE(),Bs;qar()?Bs=war:Bs=bar;tE.exports=Bs});var aE=s((Hwr,iE)=>{"use strict";var Ear=vr(),dar=typeof Uint8ClampedArray=="function";function _ar(r){return dar&&r instanceof Uint8ClampedArray||Ear(r)==="[object Uint8ClampedArray]"}iE.exports=_ar});var uE=s((Uwr,nE)=>{"use strict";var Tar=aE();nE.exports=Tar});var oE=s((Wwr,sE)=>{"use strict";var Aar=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;sE.exports=Aar});var lE=s((Dwr,vE)=>{"use strict";var Nar=uE(),fE=oE();function Oar(){var r,e;if(typeof fE!="function")return!1;try{e=new fE([-1,0,1,3.14,4.99,255,256]),r=Nar(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}vE.exports=Oar});var pE=s((Ywr,cE)=>{"use strict";var Sar=lE();cE.exports=Sar});var mE=s((Xwr,hE)=>{"use strict";var Iar=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;hE.exports=Iar});var gE=s((Kwr,yE)=>{"use strict";function Far(){throw new Error("not implemented")}yE.exports=Far});var Yi=s((Qwr,qE)=>{"use strict";var Lar=pE(),Par=mE(),Mar=gE(),ks;Lar()?ks=Par:ks=Mar;qE.exports=ks});var bE=s((Zwr,wE)=>{"use strict";var Rar=vr(),Var=typeof Int8Array=="function";function Car(r){return Var&&r instanceof Int8Array||Rar(r)==="[object Int8Array]"}wE.exports=Car});var dE=s(($wr,EE)=>{"use strict";var Bar=bE();EE.exports=Bar});var TE=s((Jwr,_E)=>{"use strict";var kar=127;_E.exports=kar});var NE=s((zwr,AE)=>{"use strict";var jar=-128;AE.exports=jar});var SE=s((xwr,OE)=>{"use strict";var Gar=typeof Int8Array=="function"?Int8Array:null;OE.exports=Gar});var LE=s((rbr,FE)=>{"use strict";var Har=dE(),Uar=TE(),War=NE(),IE=SE();function Dar(){var r,e;if(typeof IE!="function")return!1;try{e=new IE([1,3.14,-3.14,Uar+1]),r=Har(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===War}catch{r=!1}return r}FE.exports=Dar});var ME=s((ebr,PE)=>{"use strict";var Yar=LE();PE.exports=Yar});var VE=s((tbr,RE)=>{"use strict";var Xar=typeof Int8Array=="function"?Int8Array:void 0;RE.exports=Xar});var BE=s((ibr,CE)=>{"use strict";function Kar(){throw new Error("not implemented")}CE.exports=Kar});var Xi=s((abr,kE)=>{"use strict";var Qar=ME(),Zar=VE(),$ar=BE(),js;Qar()?js=Zar:js=$ar;kE.exports=js});var GE=s((nbr,jE)=>{"use strict";var Jar=Or(),zar=Q0();function xar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Jar(r.length)&&r.length>=0&&r.length<=zar}jE.exports=xar});var Tt=s((ubr,HE)=>{"use strict";var rnr=GE();HE.exports=rnr});var WE=s((sbr,UE)=>{"use strict";var enr=Or(),tnr=uu();function inr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&enr(r.length)&&r.length>=0&&r.length<=tnr}UE.exports=inr});var At=s((obr,DE)=>{"use strict";var anr=WE();DE.exports=anr});var XE=s((fbr,YE)=>{"use strict";var nnr=vr(),unr=typeof ArrayBuffer=="function";function snr(r){return unr&&r instanceof ArrayBuffer||nnr(r)==="[object ArrayBuffer]"}YE.exports=snr});var Ki=s((vbr,KE)=>{"use strict";var onr=XE();KE.exports=onr});var ZE=s((lbr,QE)=>{"use strict";var fnr=Re();function vnr(r){return typeof r=="object"&&r!==null&&!fnr(r)}QE.exports=vnr});var Zt=s((cbr,$E)=>{"use strict";var lnr=ZE();$E.exports=lnr});var Gs=s((pbr,JE)=>{"use strict";function cnr(r){return typeof r=="string"}JE.exports=cnr});var xE=s((hbr,zE)=>{"use strict";var pnr=String.prototype.valueOf;zE.exports=pnr});var ed=s((mbr,rd)=>{"use strict";var hnr=xE();function mnr(r){try{return hnr.call(r),!0}catch{return!1}}rd.exports=mnr});var Hs=s((ybr,td)=>{"use strict";var ynr=oi(),gnr=vr(),qnr=ed(),wnr=ynr();function bnr(r){return typeof r=="object"?r instanceof String?!0:wnr?qnr(r):gnr(r)==="[object String]":!1}td.exports=bnr});var ad=s((gbr,id)=>{"use strict";var Enr=Gs(),dnr=Hs();function _nr(r){return Enr(r)||dnr(r)}id.exports=_nr});var Kr=s((qbr,ud)=>{"use strict";var nd=j(),Us=ad(),Tnr=Gs(),Anr=Hs();nd(Us,"isPrimitive",Tnr);nd(Us,"isObject",Anr);ud.exports=Us});var Qi=s((wbr,od)=>{"use strict";var sd=j(),Ws=Fs(),Ds=Kr(),Nnr=Ws(Ds.isPrimitive),Onr=Ws(Ds.isObject),Ys=Ws(Ds);sd(Ys,"primitives",Nnr);sd(Ys,"objects",Onr);od.exports=Ys});var vd=s((bbr,fd)=>{"use strict";var Snr=/./;fd.exports=Snr});var Xs=s((Ebr,ld)=>{"use strict";function Inr(r){return typeof r=="boolean"}ld.exports=Inr});var pd=s((dbr,cd)=>{"use strict";var Fnr=Boolean;cd.exports=Fnr});var $t=s((_br,hd)=>{"use strict";var Lnr=pd();hd.exports=Lnr});var yd=s((Tbr,md)=>{"use strict";var Pnr=Boolean.prototype.toString;md.exports=Pnr});var qd=s((Abr,gd)=>{"use strict";var Mnr=yd();function Rnr(r){try{return Mnr.call(r),!0}catch{return!1}}gd.exports=Rnr});var Ks=s((Nbr,wd)=>{"use strict";var Vnr=oi(),Cnr=vr(),Bnr=$t(),knr=qd(),jnr=Vnr();function Gnr(r){return typeof r=="object"?r instanceof Bnr?!0:jnr?knr(r):Cnr(r)==="[object Boolean]":!1}wd.exports=Gnr});var Ed=s((Obr,bd)=>{"use strict";var Hnr=Xs(),Unr=Ks();function Wnr(r){return Hnr(r)||Unr(r)}bd.exports=Wnr});var Zi=s((Sbr,_d)=>{"use strict";var dd=j(),Qs=Ed(),Dnr=Xs(),Ynr=Ks();dd(Qs,"isPrimitive",Dnr);dd(Qs,"isObject",Ynr);_d.exports=Qs});var Ad=s((Ibr,Td)=>{"use strict";function Xnr(){return new Function("return this;")()}Td.exports=Xnr});var Od=s((Fbr,Nd)=>{"use strict";var Knr=typeof self=="object"?self:null;Nd.exports=Knr});var Id=s((Lbr,Sd)=>{"use strict";var Qnr=typeof window=="object"?window:null;Sd.exports=Qnr});var Ld=s((Pbr,Fd)=>{"use strict";var Znr=typeof globalThis=="object"?globalThis:null;Fd.exports=Znr});var Cd=s((Mbr,Vd)=>{"use strict";var $nr=Zi().isPrimitive,Jnr=Q(),znr=Ad(),Pd=Od(),Md=Id(),Rd=Ld();function xnr(r){if(arguments.length){if(!$nr(r))throw new TypeError(Jnr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return znr()}if(Rd)return Rd;if(Pd)return Pd;if(Md)return Md;throw new Error("unexpected error. Unable to resolve global object.")}Vd.exports=xnr});var jd=s((Rbr,kd)=>{"use strict";var r0r=Cd(),Bd=r0r(),e0r=Bd.document&&Bd.document.childNodes;kd.exports=e0r});var Hd=s((Vbr,Gd)=>{"use strict";var t0r=Int8Array;Gd.exports=t0r});var Wd=s((Cbr,Ud)=>{"use strict";var i0r=vd(),a0r=jd(),n0r=Hd();function u0r(){return typeof i0r=="function"||typeof n0r=="object"||typeof a0r=="function"}Ud.exports=u0r});var Yd=s((Bbr,Dd)=>{"use strict";var s0r=nt();function o0r(r){var e;return r===null?"null":(e=typeof r,e==="object"?s0r(r).toLowerCase():e)}Dd.exports=o0r});var Kd=s((kbr,Xd)=>{"use strict";var f0r=nt();function v0r(r){return f0r(r).toLowerCase()}Xd.exports=v0r});var _n=s((jbr,Qd)=>{"use strict";var l0r=Wd(),c0r=Yd(),p0r=Kd(),h0r=l0r()?p0r:c0r;Qd.exports=h0r});var $d=s((Gbr,Zd)=>{"use strict";var m0r=_n();function y0r(r){return m0r(r)==="function"}Zd.exports=y0r});var Ve=s((Hbr,Jd)=>{"use strict";var g0r=$d();Jd.exports=g0r});var xd=s((Ubr,zd)=>{"use strict";function q0r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}zd.exports=q0r});var e_=s((Wbr,r_)=>{"use strict";function w0r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}r_.exports=w0r});var u_=s((Dbr,n_)=>{"use strict";var t_=Hr().isPrimitive,i_=Ma(),Jt=j(),a_=Q(),b0r=xd(),E0r=e_();function ut(r,e){if(!(this instanceof ut))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!t_(r))throw new TypeError(a_("invalid argument. Real component must be a number. Value: `%s`.",r));if(!t_(e))throw new TypeError(a_("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return i_(this,"re",r),i_(this,"im",e),this}Jt(ut,"name","Complex128");Jt(ut,"BYTES_PER_ELEMENT",8);Jt(ut.prototype,"BYTES_PER_ELEMENT",8);Jt(ut.prototype,"byteLength",16);Jt(ut.prototype,"toString",b0r);Jt(ut.prototype,"toJSON",E0r);n_.exports=ut});var Zs=s((Ybr,s_)=>{"use strict";var d0r=u_();s_.exports=d0r});var f_=s((Xbr,o_)=>{"use strict";var _0r=typeof Math.fround=="function"?Math.fround:null;o_.exports=_0r});var c_=s((Kbr,l_)=>{"use strict";var T0r=be(),v_=new T0r(1);function A0r(r){return v_[0]=r,v_[0]}l_.exports=A0r});var m_=s((Qbr,h_)=>{"use strict";var p_=f_(),N0r=c_(),$s;typeof p_=="function"?$s=p_:$s=N0r;h_.exports=$s});var g_=s((Zbr,y_)=>{"use strict";function O0r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}y_.exports=O0r});var w_=s(($br,q_)=>{"use strict";function S0r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}q_.exports=S0r});var A_=s((Jbr,T_)=>{"use strict";var b_=Hr().isPrimitive,E_=Ma(),zt=j(),d_=m_(),__=Q(),I0r=g_(),F0r=w_();function st(r,e){if(!(this instanceof st))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!b_(r))throw new TypeError(__("invalid argument. Real component must be a number. Value: `%s`.",r));if(!b_(e))throw new TypeError(__("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return E_(this,"re",d_(r)),E_(this,"im",d_(e)),this}zt(st,"name","Complex64");zt(st,"BYTES_PER_ELEMENT",4);zt(st.prototype,"BYTES_PER_ELEMENT",4);zt(st.prototype,"byteLength",8);zt(st.prototype,"toString",I0r);zt(st.prototype,"toJSON",F0r);T_.exports=st});var Js=s((zbr,N_)=>{"use strict";var L0r=A_();N_.exports=L0r});var S_=s((xbr,O_)=>{"use strict";var P0r=Zs(),M0r=Js();function R0r(r){return r instanceof P0r||r instanceof M0r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}O_.exports=R0r});var Ce=s((rEr,I_)=>{"use strict";var V0r=S_();I_.exports=V0r});var L_=s((eEr,F_)=>{"use strict";var C0r=8;function B0r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===C0r}F_.exports=B0r});var zs=s((tEr,P_)=>{"use strict";var k0r=L_();P_.exports=k0r});var R_=s((iEr,M_)=>{"use strict";var j0r=16;function G0r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===j0r}M_.exports=G0r});var xs=s((aEr,V_)=>{"use strict";var H0r=R_();V_.exports=H0r});var B_=s((nEr,C_)=>{"use strict";var U0r=_r(),Tn=da();function W0r(){return typeof Tn=="function"&&typeof Tn("foo")=="symbol"&&U0r(Tn,"iterator")&&typeof Tn.iterator=="symbol"}C_.exports=W0r});var xt=s((uEr,k_)=>{"use strict";var D0r=B_();k_.exports=D0r});var G_=s((sEr,j_)=>{"use strict";var Y0r=xt(),X0r=Y0r()?Symbol.iterator:null;j_.exports=X0r});var $i=s((oEr,H_)=>{"use strict";var K0r=G_();H_.exports=K0r});var W_=s((fEr,U_)=>{"use strict";var Q0r=pt();function Z0r(r,e,t){Q0r(r,e,{configurable:!1,enumerable:!1,get:t})}U_.exports=Z0r});var ri=s((vEr,D_)=>{"use strict";var $0r=W_();D_.exports=$0r});var X_=s((lEr,Y_)=>{"use strict";function J0r(r){return r.re}Y_.exports=J0r});var Ji=s((cEr,K_)=>{"use strict";var z0r=X_();K_.exports=z0r});var Z_=s((pEr,Q_)=>{"use strict";function x0r(r){return r.im}Q_.exports=x0r});var zi=s((hEr,$_)=>{"use strict";var rur=Z_();$_.exports=rur});var z_=s((mEr,J_)=>{"use strict";var eur=be();function tur(r,e){return new eur(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}J_.exports=tur});var An=s((yEr,x_)=>{"use strict";var iur=z_();x_.exports=iur});var eT=s((gEr,rT)=>{"use strict";var aur=Tr();function nur(r,e){return new aur(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}rT.exports=nur});var Nn=s((qEr,tT)=>{"use strict";var uur=eT();tT.exports=uur});var aT=s((wEr,iT)=>{"use strict";var sur=Tt(),our=Ce(),fur=Ji(),vur=zi(),lur=Q();function cur(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,sur(i)&&i.length>=2)e.push(i[0],i[1]);else if(our(i))e.push(fur(i),vur(i));else return new TypeError(lur("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}iT.exports=cur});var uT=s((bEr,nT)=>{"use strict";var pur=Tt(),hur=Ce(),mur=Ji(),yur=zi(),gur=Q();function qur(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),pur(n)&&n.length>=2)i.push(n[0],n[1]);else if(hur(n))i.push(mur(n),yur(n));else return new TypeError(gur("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}nT.exports=qur});var oT=s((EEr,sT)=>{"use strict";var wur=Ce(),bur=Ji(),Eur=zi();function dur(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!wur(i))return null;r[n]=bur(i),r[n+1]=Eur(i),n+=2}return r}sT.exports=dur});var mT=s((dEr,hT)=>{"use strict";var xi=yt().isPrimitive,ro=Tt(),eo=At(),fT=Ki(),to=Zt(),_ur=Re(),Tur=Qi().primitives,vT=Kr().isPrimitive,pr=Ve(),Zr=Ce(),On=Ta(),Ir=Or(),Aur=zs(),Nur=xs(),Our=xt(),Ee=$i(),P=j(),Sn=ri(),Qr=be(),Sur=Js(),N=Q(),ie=Ji(),ae=zi(),Iur=lr(),Fur=An(),Lur=Nn(),Pur=Hi(),Mur=Ui(),lT=aT(),Rur=uT(),Vur=oT(),Br=Qr.BYTES_PER_ELEMENT*2,cT=Our();function W(r){return r instanceof S||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function pT(r){return r===S||r.name==="Complex128Array"}function ur(r,e){return e*=2,new Sur(r[e],r[e+1])}function S(){var r,e,t,i;if(e=arguments.length,!(this instanceof S))return e===0?new S:e===1?new S(arguments[0]):e===2?new S(arguments[0],arguments[1]):new S(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Qr(0);else if(e===1)if(xi(arguments[0]))t=new Qr(arguments[0]*2);else if(eo(arguments[0]))if(t=arguments[0],i=t.length,i&&_ur(t)&&Zr(t[0])){if(t=Vur(new Qr(i*2),t),t===null){if(!On(i))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Qr(arguments[0])}}else{if(Aur(t))t=Fur(t,0);else if(Nur(t))t=Lur(t,0);else if(!On(i))throw new RangeError(N("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Qr(t)}else if(fT(arguments[0])){if(t=arguments[0],!Ir(t.byteLength/Br))throw new RangeError(N("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Br,t.byteLength));t=new Qr(t)}else if(to(arguments[0])){if(t=arguments[0],cT===!1)throw new TypeError(N("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!pr(t[Ee]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ee](),!pr(t.next))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=lT(t),t instanceof Error)throw t;t=new Qr(t)}else throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!fT(t))throw new TypeError(N("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!xi(r))throw new TypeError(N("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Ir(r/Br))throw new RangeError(N("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Br,r));if(e===2){if(i=t.byteLength-r,!Ir(i/Br))throw new RangeError(N("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Br,i));t=new Qr(t,r)}else{if(i=arguments[2],!xi(i))throw new TypeError(N("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Br>t.byteLength-r)throw new RangeError(N("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Br));t=new Qr(t,r,i*2)}}return P(this,"_buffer",t),P(this,"_length",t.length/2),this}P(S,"BYTES_PER_ELEMENT",Br);P(S,"name","Complex64Array");P(S,"from",function(e){var t,i,a,n,u,o,f,l,v,c,p,h;if(!pr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!pr(a))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(W(e)){if(l=e.length,a){for(n=new this(l),u=n._buffer,h=0,p=0;p<l;p++){if(c=a.call(t,e.get(p),p),Zr(c))u[h]=ie(c),u[h+1]=ae(c);else if(ro(c)&&c.length>=2)u[h]=c[0],u[h+1]=c[1];else throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));h+=2}return n}return new this(e)}if(eo(e)){if(a){for(l=e.length,e.get&&e.set?f=Mur("default"):f=Pur("default"),p=0;p<l;p++)if(!Zr(f(e,p))){v=!0;break}if(v){if(!On(l))throw new RangeError(N("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,l));for(n=new this(l/2),u=n._buffer,p=0;p<l;p++)u[p]=a.call(t,f(e,p),p);return n}for(n=new this(l),u=n._buffer,h=0,p=0;p<l;p++){if(c=a.call(t,f(e,p),p),Zr(c))u[h]=ie(c),u[h+1]=ae(c);else if(ro(c)&&c.length>=2)u[h]=c[0],u[h+1]=c[1];else throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));h+=2}return n}return new this(e)}if(to(e)&&cT&&pr(e[Ee])){if(u=e[Ee](),!pr(u.next))throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=Rur(u,a,t):o=lT(u),o instanceof Error)throw o;for(l=o.length/2,n=new this(l),u=n._buffer,p=0;p<l;p++)u[p]=o[p];return n}throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});P(S,"of",function(){var e,t;if(!pr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});P(S.prototype,"at",function(e){if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ir(e))throw new TypeError(N("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return ur(this._buffer,e)});Sn(S.prototype,"buffer",function(){return this._buffer.buffer});Sn(S.prototype,"byteLength",function(){return this._buffer.byteLength});Sn(S.prototype,"byteOffset",function(){return this._buffer.byteOffset});P(S.prototype,"BYTES_PER_ELEMENT",S.BYTES_PER_ELEMENT);P(S.prototype,"copyWithin",function(e,t){if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});P(S.prototype,"entries",function(){var e,t,i,a,n,u;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,a=this._buffer,i=this._length,u=-1,t={},P(t,"next",o),P(t,"return",f),Ee&&P(t,Ee,l),t;function o(){return u+=1,n||u>=i?{done:!0}:{value:[u,ur(a,u)],done:!1}}function f(v){return n=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return e.entries()}});P(S.prototype,"every",function(e,t){var i,a;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(!e.call(t,ur(i,a),a,this))return!1;return!0});P(S.prototype,"fill",function(e,t,i){var a,n,u,o,f,l;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(e))throw new TypeError(N("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(a=this._buffer,n=this._length,arguments.length>1){if(!Ir(t))throw new TypeError(N("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=n,t<0&&(t=0)),arguments.length>2){if(!Ir(i))throw new TypeError(N("invalid argument. Third argument must be an integer. Value: `%s`.",i));i<0&&(i+=n,i<0&&(i=0)),i>n&&(i=n)}else i=n}else t=0,i=n;for(o=ie(e),f=ae(e),l=t;l<i;l++)u=2*l,a[u]=o,a[u+1]=f;return this});P(S.prototype,"filter",function(e,t){var i,a,n,u;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=[],n=0;n<this._length;n++)u=ur(i,n),e.call(t,u,n,this)&&a.push(u);return new this.constructor(a)});P(S.prototype,"find",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(n=ur(i,a),e.call(t,n,a,this))return n});P(S.prototype,"findIndex",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(n=ur(i,a),e.call(t,n,a,this))return a;return-1});P(S.prototype,"findLast",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length-1;a>=0;a--)if(n=ur(i,a),e.call(t,n,a,this))return n});P(S.prototype,"findLastIndex",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length-1;a>=0;a--)if(n=ur(i,a),e.call(t,n,a,this))return a;return-1});P(S.prototype,"forEach",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)n=ur(i,a),e.call(t,n,a,this)});P(S.prototype,"get",function(e){if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xi(e))throw new TypeError(N("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return ur(this._buffer,e)});P(S.prototype,"includes",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(e))throw new TypeError(N("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!Ir(t))throw new TypeError(N("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(n=ie(e),u=ae(e),i=this._buffer,o=t;o<this._length;o++)if(a=2*o,n===i[a]&&u===i[a+1])return!0;return!1});P(S.prototype,"indexOf",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(e))throw new TypeError(N("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!Ir(t))throw new TypeError(N("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(n=ie(e),u=ae(e),i=this._buffer,o=t;o<this._length;o++)if(a=2*o,n===i[a]&&u===i[a+1])return o;return-1});P(S.prototype,"join",function(e){var t,i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)a=",";else if(vT(e))a=e;else throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[],i=this._buffer,n=0;n<this._length;n++)t.push(ur(i,n).toString());return t.join(a)});P(S.prototype,"keys",function(){var e,t,i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,i=this._length,n=-1,t={},P(t,"next",u),P(t,"return",o),Ee&&P(t,Ee,f),t;function u(){return n+=1,a||n>=i?{done:!0}:{value:n,done:!1}}function o(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function f(){return e.keys()}});P(S.prototype,"lastIndexOf",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(e))throw new TypeError(N("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!Ir(t))throw new TypeError(N("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(n=ie(e),u=ae(e),i=this._buffer,o=t;o>=0;o--)if(a=2*o,n===i[a]&&u===i[a+1])return o;return-1});Sn(S.prototype,"length",function(){return this._length});P(S.prototype,"map",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(a=this._buffer,n=new this.constructor(this._length),i=n._buffer,u=0;u<this._length;u++)if(o=e.call(t,ur(a,u),u,this),Zr(o))i[2*u]=ie(o),i[2*u+1]=ae(o);else if(ro(o)&&o.length===2)i[2*u]=o[0],i[2*u+1]=o[1];else throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return n});P(S.prototype,"reduce",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,n=this._length,arguments.length>1)a=t,o=0;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");a=ur(i,0),o=1}for(;o<n;o++)u=ur(i,o),a=e(a,u,o,this);return a});P(S.prototype,"reduceRight",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,n=this._length,arguments.length>1)a=t,o=n-1;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");a=ur(i,n-1),o=n-2}for(;o>=0;o--)u=ur(i,o),a=e(a,u,o,this);return a});P(S.prototype,"reverse",function(){var e,t,i,a,n,u;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(i=this._length,e=this._buffer,a=Iur(i/2),n=0;n<a;n++)u=i-n-1,t=e[2*n],e[2*n]=e[2*u],e[2*u]=t,t=e[2*n+1],e[2*n+1]=e[2*u+1],e[2*u+1]=t;return this});P(S.prototype,"set",function(e){var t,i,a,n,u,o,f,l,v;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!xi(i))throw new TypeError(N("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Zr(e)){if(i>=this._length)throw new RangeError(N("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=ie(e),a[i+1]=ae(e);return}if(W(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,v=a.byteOffset+i*Br,t.buffer===a.buffer&&t.byteOffset<v&&t.byteOffset+t.byteLength>v){for(n=new Qr(t.length),l=0;l<t.length;l++)n[l]=t[l];t=n}for(i*=2,v=0,l=0;l<o;l++)a[i]=t[v],a[i+1]=t[v+1],i+=2,v+=2;return}if(eo(e)){for(o=e.length,l=0;l<o;l++)if(!Zr(e[l])){u=!0;break}if(u){if(!On(o))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,v=a.byteOffset+i*Br,t.buffer===a.buffer&&t.byteOffset<v&&t.byteOffset+t.byteLength>v){for(n=new Qr(o),l=0;l<o;l++)n[l]=t[l];t=n}for(i*=2,o/=2,v=0,l=0;l<o;l++)a[i]=t[v],a[i+1]=t[v+1],i+=2,v+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,l=0;l<o;l++)f=e[l],a[i]=ie(f),a[i+1]=ae(f),i+=2;return}throw new TypeError(N("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});P(S.prototype,"slice",function(e,t){var i,a,n,u,o,f,l;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,f=this._length,arguments.length===0)e=0,t=f;else{if(!Ir(e))throw new TypeError(N("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=f,e<0&&(e=0)),arguments.length===1)t=f;else{if(!Ir(t))throw new TypeError(N("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=f,t<0&&(t=0)):t>f&&(t=f)}}for(e<t?i=t-e:i=0,n=new this.constructor(i),a=n._buffer,l=0;l<i;l++)u=2*(l+e),a[2*l]=o[u],a[2*l+1]=o[u+1];return n});P(S.prototype,"some",function(e,t){var i,a;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(e.call(t,ur(i,a),a,this))return!0;return!1});P(S.prototype,"sort",function(e){var t,i,a,n,u;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length,t=[],n=0;n<a;n++)t.push(ur(i,n));for(t.sort(e),n=0;n<a;n++)u=2*n,i[u]=ie(t[n]),i[u+1]=ae(t[n]);return this});P(S.prototype,"subarray",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,n=this._length,arguments.length===0)e=0,t=n;else{if(!Ir(e))throw new TypeError(N("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length===1)t=n;else{if(!Ir(t))throw new TypeError(N("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n)}}return e>=n?(n=0,i=a.byteLength):e>=t?(n=0,i=a.byteOffset+e*Br):(n=t-e,i=a.byteOffset+e*Br),new this.constructor(a.buffer,i,n<0?0:n)});P(S.prototype,"toLocaleString",function(e,t){var i,a,n,u,o;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)a=[];else if(vT(e)||Tur(e))a=e;else throw new TypeError(N("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",e));if(arguments.length<2)i={};else if(to(t))i=t;else throw new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t));for(u=this._buffer,n=[],o=0;o<this._length;o++)n.push(ur(u,o).toLocaleString(a,i));return n.join(",")});P(S.prototype,"toReversed",function(){var e,t,i,a,n,u;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(i=this._length,t=new this.constructor(i),a=this._buffer,e=t._buffer,n=0;n<i;n++)u=i-n-1,e[2*n]=a[2*u],e[2*n+1]=a[2*u+1];return t});P(S.prototype,"toSorted",function(e){var t,i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pr(e))throw new TypeError(N("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length,t=[],n=0;n<a;n++)t.push(ur(i,n));return t.sort(e),new S(t)});P(S.prototype,"toString",function(){var e,t,i;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=this._buffer,i=0;i<this._length;i++)e.push(ur(t,i).toString());return e.join(",")});P(S.prototype,"values",function(){var e,t,i,a,n,u;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,n=this._buffer,i=this._length,u=-1,e={},P(e,"next",o),P(e,"return",f),Ee&&P(e,Ee,l),e;function o(){return u+=1,a||u>=i?{done:!0}:{value:ur(n,u),done:!1}}function f(v){return a=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return t.values()}});P(S.prototype,"with",function(e,t){var i,a,n;if(!W(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ir(e))throw new TypeError(N("invalid argument. First argument must be an integer. Value: `%s`.",e));if(n=this._length,e<0&&(e+=n),e<0||e>=n)throw new RangeError(N("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!Zr(t))throw new TypeError(N("invalid argument. Second argument must be a complex number. Value: `%s`.",t));return a=new this.constructor(this._buffer),i=a._buffer,i[2*e]=ie(t),i[2*e+1]=ae(t),a});hT.exports=S});var In=s((_Er,yT)=>{"use strict";var Cur=mT();yT.exports=Cur});var qT=s((TEr,gT)=>{"use strict";function Bur(r){return r.re}gT.exports=Bur});var ra=s((AEr,wT)=>{"use strict";var kur=qT();wT.exports=kur});var ET=s((NEr,bT)=>{"use strict";function jur(r){return r.im}bT.exports=jur});var ea=s((OEr,dT)=>{"use strict";var Gur=ET();dT.exports=Gur});var TT=s((SEr,_T)=>{"use strict";var Hur=Tt(),Uur=Ce(),Wur=Q(),Dur=ra(),Yur=ea();function Xur(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Hur(i)&&i.length>=2)e.push(i[0],i[1]);else if(Uur(i))e.push(Dur(i),Yur(i));else return new TypeError(Wur("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}_T.exports=Xur});var NT=s((IEr,AT)=>{"use strict";var Kur=Tt(),Qur=Ce(),Zur=Q(),$ur=ra(),Jur=ea();function zur(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),Kur(n)&&n.length>=2)i.push(n[0],n[1]);else if(Qur(n))i.push($ur(n),Jur(n));else return new TypeError(Zur("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}AT.exports=zur});var ST=s((FEr,OT)=>{"use strict";var xur=Ce(),rsr=ra(),esr=ea();function tsr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!xur(i))return null;r[n]=rsr(i),r[n+1]=esr(i),n+=2}return r}OT.exports=tsr});var CT=s((LEr,VT)=>{"use strict";var ta=yt().isPrimitive,io=Tt(),ao=At(),IT=Ki(),no=Zt(),isr=Re(),asr=Qi().primitives,FT=Kr(),hr=Ve(),Jr=Ce(),Fn=Ta(),Fr=Or(),nsr=zs(),usr=xs(),ssr=xt(),de=$i(),M=j(),Ln=ri(),$r=Tr(),LT=Zs(),ne=ra(),ue=ea(),osr=lr(),fsr=An(),vsr=Nn(),lsr=Hi(),csr=Ui(),O=Q(),PT=TT(),psr=NT(),hsr=ST(),kr=$r.BYTES_PER_ELEMENT*2,MT=ssr();function D(r){return r instanceof I||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function RT(r){return r===I||r.name==="Complex64Array"}function sr(r,e){return e*=2,new LT(r[e],r[e+1])}function I(){var r,e,t,i;if(e=arguments.length,!(this instanceof I))return e===0?new I:e===1?new I(arguments[0]):e===2?new I(arguments[0],arguments[1]):new I(arguments[0],arguments[1],arguments[2]);if(e===0)t=new $r(0);else if(e===1)if(ta(arguments[0]))t=new $r(arguments[0]*2);else if(ao(arguments[0]))if(t=arguments[0],i=t.length,i&&isr(t)&&Jr(t[0])){if(t=hsr(new $r(i*2),t),t===null){if(!Fn(i))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new $r(arguments[0])}}else{if(nsr(t))t=fsr(t,0);else if(usr(t))t=vsr(t,0);else if(!Fn(i))throw new RangeError(O("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new $r(t)}else if(IT(arguments[0])){if(t=arguments[0],!Fr(t.byteLength/kr))throw new RangeError(O("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",kr,t.byteLength));t=new $r(t)}else if(no(arguments[0])){if(t=arguments[0],MT===!1)throw new TypeError(O("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!hr(t[de]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[de](),!hr(t.next))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=PT(t),t instanceof Error)throw t;t=new $r(t)}else throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!IT(t))throw new TypeError(O("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ta(r))throw new TypeError(O("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Fr(r/kr))throw new RangeError(O("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",kr,r));if(e===2){if(i=t.byteLength-r,!Fr(i/kr))throw new RangeError(O("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",kr,i));t=new $r(t,r)}else{if(i=arguments[2],!ta(i))throw new TypeError(O("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*kr>t.byteLength-r)throw new RangeError(O("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*kr));t=new $r(t,r,i*2)}}return M(this,"_buffer",t),M(this,"_length",t.length/2),this}M(I,"BYTES_PER_ELEMENT",kr);M(I,"name","Complex128Array");M(I,"from",function(e){var t,i,a,n,u,o,f,l,v,c,p,h;if(!hr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!RT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!hr(a))throw new TypeError(O("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(D(e)){if(l=e.length,a){for(n=new this(l),u=n._buffer,h=0,p=0;p<l;p++){if(c=a.call(t,e.get(p),p),Jr(c))u[h]=ne(c),u[h+1]=ue(c);else if(io(c)&&c.length>=2)u[h]=c[0],u[h+1]=c[1];else throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));h+=2}return n}return new this(e)}if(ao(e)){if(a){for(l=e.length,e.get&&e.set?f=csr("default"):f=lsr("default"),p=0;p<l;p++)if(!Jr(f(e,p))){v=!0;break}if(v){if(!Fn(l))throw new RangeError(O("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",l));for(n=new this(l/2),u=n._buffer,p=0;p<l;p++)u[p]=a.call(t,f(e,p),p);return n}for(n=new this(l),u=n._buffer,h=0,p=0;p<l;p++){if(c=a.call(t,f(e,p),p),Jr(c))u[h]=ne(c),u[h+1]=ue(c);else if(io(c)&&c.length>=2)u[h]=c[0],u[h+1]=c[1];else throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));h+=2}return n}return new this(e)}if(no(e)&&MT&&hr(e[de])){if(u=e[de](),!hr(u.next))throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=psr(u,a,t):o=PT(u),o instanceof Error)throw o;for(l=o.length/2,n=new this(l),u=n._buffer,p=0;p<l;p++)u[p]=o[p];return n}throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});M(I,"of",function(){var e,t;if(!hr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!RT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});M(I.prototype,"at",function(e){if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Fr(e))throw new TypeError(O("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return sr(this._buffer,e)});Ln(I.prototype,"buffer",function(){return this._buffer.buffer});Ln(I.prototype,"byteLength",function(){return this._buffer.byteLength});Ln(I.prototype,"byteOffset",function(){return this._buffer.byteOffset});M(I.prototype,"BYTES_PER_ELEMENT",I.BYTES_PER_ELEMENT);M(I.prototype,"copyWithin",function(e,t){if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});M(I.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},M(i,"next",f),M(i,"return",l),de&&M(i,de,v),i;function f(){var c;return u+=1,n||u>=a?{done:!0}:(o+=2,c=new LT(e[o],e[o+1]),{value:[u,c],done:!1})}function l(c){return n=!0,arguments.length?{value:c,done:!0}:{done:!0}}function v(){return t.entries()}});M(I.prototype,"every",function(e,t){var i,a;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(!e.call(t,sr(i,a),a,this))return!1;return!0});M(I.prototype,"fill",function(e,t,i){var a,n,u,o,f,l;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Jr(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(a=this._buffer,n=this._length,arguments.length>1){if(!Fr(t))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=n,t<0&&(t=0)),arguments.length>2){if(!Fr(i))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",i));i<0&&(i+=n,i<0&&(i=0)),i>n&&(i=n)}else i=n}else t=0,i=n;for(o=ne(e),f=ue(e),l=t;l<i;l++)u=2*l,a[u]=o,a[u+1]=f;return this});M(I.prototype,"filter",function(e,t){var i,a,n,u;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=[],n=0;n<this._length;n++)u=sr(i,n),e.call(t,u,n,this)&&a.push(u);return new this.constructor(a)});M(I.prototype,"find",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(n=sr(i,a),e.call(t,n,a,this))return n});M(I.prototype,"findIndex",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(n=sr(i,a),e.call(t,n,a,this))return a;return-1});M(I.prototype,"findLast",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length-1;a>=0;a--)if(n=sr(i,a),e.call(t,n,a,this))return n});M(I.prototype,"findLastIndex",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length-1;a>=0;a--)if(n=sr(i,a),e.call(t,n,a,this))return a;return-1});M(I.prototype,"forEach",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)n=sr(i,a),e.call(t,n,a,this)});M(I.prototype,"get",function(e){if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ta(e))throw new TypeError(O("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return sr(this._buffer,e)});Ln(I.prototype,"length",function(){return this._length});M(I.prototype,"includes",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Jr(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!Fr(t))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(n=ne(e),u=ue(e),i=this._buffer,o=t;o<this._length;o++)if(a=2*o,n===i[a]&&u===i[a+1])return!0;return!1});M(I.prototype,"indexOf",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Jr(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!Fr(t))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(n=ne(e),u=ue(e),i=this._buffer,o=t;o<this._length;o++)if(a=2*o,n===i[a]&&u===i[a+1])return o;return-1});M(I.prototype,"join",function(e){var t,i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)a=",";else if(FT(e))a=e;else throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[],i=this._buffer,n=0;n<this._length;n++)t.push(sr(i,n).toString());return t.join(a)});M(I.prototype,"keys",function(){var e,t,i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,i=this._length,n=-1,t={},M(t,"next",u),M(t,"return",o),de&&M(t,de,f),t;function u(){return n+=1,a||n>=i?{done:!0}:{value:n,done:!1}}function o(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function f(){return e.keys()}});M(I.prototype,"lastIndexOf",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Jr(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!Fr(t))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(n=ne(e),u=ue(e),i=this._buffer,o=t;o>=0;o--)if(a=2*o,n===i[a]&&u===i[a+1])return o;return-1});M(I.prototype,"map",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(a=this._buffer,n=new this.constructor(this._length),i=n._buffer,u=0;u<this._length;u++)if(o=e.call(t,sr(a,u),u,this),Jr(o))i[2*u]=ne(o),i[2*u+1]=ue(o);else if(io(o)&&o.length===2)i[2*u]=o[0],i[2*u+1]=o[1];else throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return n});M(I.prototype,"reduce",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,n=this._length,arguments.length>1)a=t,o=0;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");a=sr(i,0),o=1}for(;o<n;o++)u=sr(i,o),a=e(a,u,o,this);return a});M(I.prototype,"reduceRight",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,n=this._length,arguments.length>1)a=t,o=n-1;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");a=sr(i,n-1),o=n-2}for(;o>=0;o--)u=sr(i,o),a=e(a,u,o,this);return a});M(I.prototype,"reverse",function(){var e,t,i,a,n,u;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(i=this._length,e=this._buffer,a=osr(i/2),n=0;n<a;n++)u=i-n-1,t=e[2*n],e[2*n]=e[2*u],e[2*u]=t,t=e[2*n+1],e[2*n+1]=e[2*u+1],e[2*u+1]=t;return this});M(I.prototype,"set",function(e){var t,i,a,n,u,o,f,l,v;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!ta(i))throw new TypeError(O("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Jr(e)){if(i>=this._length)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=ne(e),a[i+1]=ue(e);return}if(D(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,v=a.byteOffset+i*kr,t.buffer===a.buffer&&t.byteOffset<v&&t.byteOffset+t.byteLength>v){for(n=new $r(t.length),l=0;l<t.length;l++)n[l]=t[l];t=n}for(i*=2,v=0,l=0;l<o;l++)a[i]=t[v],a[i+1]=t[v+1],i+=2,v+=2;return}if(ao(e)){for(o=e.length,l=0;l<o;l++)if(!Jr(e[l])){u=!0;break}if(u){if(!Fn(o))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,v=a.byteOffset+i*kr,t.buffer===a.buffer&&t.byteOffset<v&&t.byteOffset+t.byteLength>v){for(n=new $r(o),l=0;l<o;l++)n[l]=t[l];t=n}for(i*=2,o/=2,v=0,l=0;l<o;l++)a[i]=t[v],a[i+1]=t[v+1],i+=2,v+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,l=0;l<o;l++)f=e[l],a[i]=ne(f),a[i+1]=ue(f),i+=2;return}throw new TypeError(O("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});M(I.prototype,"slice",function(e,t){var i,a,n,u,o,f,l;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,f=this._length,arguments.length===0)e=0,t=f;else{if(!Fr(e))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=f,e<0&&(e=0)),arguments.length===1)t=f;else{if(!Fr(t))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=f,t<0&&(t=0)):t>f&&(t=f)}}for(e<t?i=t-e:i=0,n=new this.constructor(i),a=n._buffer,l=0;l<i;l++)u=2*(l+e),a[2*l]=o[u],a[2*l+1]=o[u+1];return n});M(I.prototype,"some",function(e,t){var i,a;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(e.call(t,sr(i,a),a,this))return!0;return!1});M(I.prototype,"sort",function(e){var t,i,a,n,u;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length,t=[],n=0;n<a;n++)t.push(sr(i,n));for(t.sort(e),n=0;n<a;n++)u=2*n,i[u]=ne(t[n]),i[u+1]=ue(t[n]);return this});M(I.prototype,"subarray",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,n=this._length,arguments.length===0)e=0,t=n;else{if(!Fr(e))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length===1)t=n;else{if(!Fr(t))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n)}}return e>=n?(n=0,i=a.byteLength):e>=t?(n=0,i=a.byteOffset+e*kr):(n=t-e,i=a.byteOffset+e*kr),new this.constructor(a.buffer,i,n<0?0:n)});M(I.prototype,"toLocaleString",function(e,t){var i,a,n,u,o;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)a=[];else if(FT(e)||asr(e))a=e;else throw new TypeError(O("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",e));if(arguments.length<2)i={};else if(no(t))i=t;else throw new TypeError(O("invalid argument. Options argument must be an object. Value: `%s`.",t));for(u=this._buffer,n=[],o=0;o<this._length;o++)n.push(sr(u,o).toLocaleString(a,i));return n.join(",")});M(I.prototype,"toReversed",function(){var e,t,i,a,n,u;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(i=this._length,t=new this.constructor(i),a=this._buffer,e=t._buffer,n=0;n<i;n++)u=i-n-1,e[2*n]=a[2*u],e[2*n+1]=a[2*u+1];return t});M(I.prototype,"toSorted",function(e){var t,i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hr(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=this._length,t=[],n=0;n<a;n++)t.push(sr(i,n));return t.sort(e),new I(t)});M(I.prototype,"toString",function(){var e,t,i;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=this._buffer,i=0;i<this._length;i++)e.push(sr(t,i).toString());return e.join(",")});M(I.prototype,"values",function(){var e,t,i,a,n,u;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,n=this._buffer,i=this._length,u=-1,e={},M(e,"next",o),M(e,"return",f),de&&M(e,de,l),e;function o(){return u+=1,a||u>=i?{done:!0}:{value:sr(n,u),done:!1}}function f(v){return a=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return t.values()}});M(I.prototype,"with",function(e,t){var i,a,n;if(!D(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Fr(e))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",e));if(n=this._length,e<0&&(e+=n),e<0||e>=n)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!Jr(t))throw new TypeError(O("invalid argument. Second argument must be a complex number. Value: `%s`.",t));return a=new this.constructor(this._buffer),i=a._buffer,i[2*e]=ne(t),i[2*e+1]=ue(t),a});VT.exports=I});var Pn=s((PEr,BT)=>{"use strict";var msr=CT();BT.exports=msr});var jT=s((MEr,kT)=>{"use strict";var ysr=$t();function gsr(r){var e,t;for(e=[];t=r.next(),!t.done;)e.push(ysr(t.value));return e}kT.exports=gsr});var HT=s((REr,GT)=>{"use strict";var qsr=$t();function wsr(r,e,t){var i,a,n;for(i=[],n=-1;a=r.next(),!a.done;)n+=1,i.push(qsr(e.call(t,a.value,n)));return i}GT.exports=wsr});var WT=s((VEr,UT)=>{"use strict";var bsr=$t();function Esr(r,e){var t,i;for(t=e.length,i=0;i<t;i++)r[i]=bsr(e[i]);return r}UT.exports=Esr});var $T=s((CEr,ZT)=>{"use strict";var ia=yt().isPrimitive,uo=At(),DT=Ki(),so=Zt(),mr=Ve(),aa=Zi().isPrimitive,se=Oe().isPrimitive,YT=Kr().isPrimitive,dsr=Qi().primitives,_sr=xt(),_e=$i(),R=j(),Mn=ri(),Be=Ge(),tr=$t(),Tsr=Hi(),Asr=lr(),Nsr=Ui(),B=Q(),XT=jT(),Osr=HT(),Ssr=WT(),Nt=Be.BYTES_PER_ELEMENT,KT=_sr();function K(r){return typeof r=="object"&&r!==null&&r.constructor.name==="BooleanArray"&&r.BYTES_PER_ELEMENT===Nt}function QT(r){return r===F}function F(){var r,e,t,i,a;if(e=arguments.length,!(this instanceof F))return e===0?new F:e===1?new F(arguments[0]):e===2?new F(arguments[0],arguments[1]):new F(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Be(0);else if(e===1)if(a=arguments[0],ia(a))t=new Be(a);else if(uo(a))t=Ssr(new Be(a.length),a);else if(DT(a))t=new Be(a);else if(so(a)){if(KT===!1)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",a));if(!mr(a[_e]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",a));if(t=a[_e](),!mr(t.next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",a));t=new Be(XT(t))}else throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",a));else{if(t=arguments[0],!DT(t))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ia(r))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(e===2)t=new Be(t,r);else{if(i=arguments[2],!ia(i))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Nt>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Nt));t=new Be(t,r,i)}}return R(this,"_buffer",t),R(this,"_length",t.length),this}R(F,"BYTES_PER_ELEMENT",Nt);R(F,"name","BooleanArray");R(F,"from",function(e){var t,i,a,n,u,o,f,l,v;if(!mr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!QT(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(i=arguments.length,i>1){if(a=arguments[1],!mr(a))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(uo(e)){if(a){for(l=e.length,e.get&&e.set?f=Nsr("default"):f=Tsr("default"),n=new this(l),u=n._buffer,v=0;v<l;v++)u[v]=tr(a.call(t,f(e,v),v));return n}return new this(e)}if(so(e)&&KT&&mr(e[_e])){if(u=e[_e](),!mr(u.next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));for(a?o=Osr(u,a,t):o=XT(u),l=o.length,n=new this(l),u=n._buffer,v=0;v<l;v++)u[v]=o[v];return n}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});R(F,"of",function(){var e,t;if(!mr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!QT(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});R(F.prototype,"at",function(e){var t,i;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!se(e))throw new TypeError(B("invalid argument. Must provide an integer. Value: `%s`.",e));if(i=this._length,t=this._buffer,e<0&&(e+=i),!(e<0||e>=i))return tr(t[e])});Mn(F.prototype,"buffer",function(){return this._buffer.buffer});Mn(F.prototype,"byteLength",function(){return this._buffer.byteLength});Mn(F.prototype,"byteOffset",function(){return this._buffer.byteOffset});R(F.prototype,"BYTES_PER_ELEMENT",F.BYTES_PER_ELEMENT);R(F.prototype,"copyWithin",function(e,t){if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return arguments.length===2?this._buffer.copyWithin(e,t):this._buffer.copyWithin(e,t,arguments[2]),this});R(F.prototype,"entries",function(){var e,t,i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return e=this,a=this._buffer,i=this._length,u=-1,t={},R(t,"next",o),R(t,"return",f),_e&&R(t,_e,l),t;function o(){return u+=1,n||u>=i?{done:!0}:{value:[u,tr(a[u])],done:!1}}function f(v){return n=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return e.entries()}});R(F.prototype,"every",function(e,t){var i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(!e.call(t,tr(i[a]),a,this))return!1;return!0});R(F.prototype,"fill",function(e,t,i){var a,n,u,o;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!aa(e))throw new TypeError(B("invalid argument. First argument must be a boolean. Value: `%s`.",e));if(a=this._buffer,n=this._length,arguments.length>1){if(!se(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=n,t<0&&(t=0)),arguments.length>2){if(!se(i))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",i));i<0&&(i+=n,i<0&&(i=0)),i>n&&(i=n)}else i=n}else t=0,i=n;for(e?u=1:u=0,o=t;o<i;o++)a[o]=u;return this});R(F.prototype,"filter",function(e,t){var i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=[],n=0;n<this._length;n++)u=tr(i[n]),e.call(t,u,n,this)&&a.push(u);return new this.constructor(a)});R(F.prototype,"find",function(e,t){var i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=0;n<this._length;n++)if(a=tr(i[n]),e.call(t,a,n,this))return a});R(F.prototype,"findIndex",function(e,t){var i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=0;n<this._length;n++)if(a=tr(i[n]),e.call(t,a,n,this))return n;return-1});R(F.prototype,"findLast",function(e,t){var i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=this._length-1;n>=0;n--)if(a=tr(i[n]),e.call(t,a,n,this))return a});R(F.prototype,"findLastIndex",function(e,t){var i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=this._length-1;n>=0;n--)if(a=tr(i[n]),e.call(t,a,n,this))return n;return-1});R(F.prototype,"forEach",function(e,t){var i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)e.call(t,tr(i[a]),a,this)});R(F.prototype,"get",function(e){if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!ia(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return tr(this._buffer[e])});R(F.prototype,"includes",function(e,t){var i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!aa(e))throw new TypeError(B("invalid argument. First argument must be a boolean. Value: `%s`.",e));if(arguments.length>1){if(!se(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(i=this._buffer,a=t;a<this._length;a++)if(e===tr(i[a]))return!0;return!1});R(F.prototype,"indexOf",function(e,t){var i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!aa(e))throw new TypeError(B("invalid argument. First argument must be a boolean. Value: `%s`.",e));if(arguments.length>1){if(!se(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(i=this._buffer,a=t;a<this._length;a++)if(e===tr(i[a]))return a;return-1});R(F.prototype,"join",function(e){var t,i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(arguments.length>0){if(!YT(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e))}else e=",";for(t=this._buffer,i=[],a=0;a<this._length;a++)t[a]?i.push("true"):i.push("false");return i.join(e)});R(F.prototype,"keys",function(){var e,t,i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return e=this,i=this._length,n=-1,t={},R(t,"next",u),R(t,"return",o),_e&&R(t,_e,f),t;function u(){return n+=1,a||n>=i?{done:!0}:{value:n,done:!1}}function o(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function f(){return e.keys()}});R(F.prototype,"lastIndexOf",function(e,t){var i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!aa(e))throw new TypeError(B("invalid argument. First argument must be a boolean. Value: `%s`.",e));if(arguments.length>1){if(!se(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(i=this._buffer,a=t;a>=0;a--)if(e===tr(i[a]))return a;return-1});Mn(F.prototype,"length",function(){return this._length});R(F.prototype,"map",function(e,t){var i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError("invalid argument. First argument must be a function. Value: `%s`.",e);for(n=this._buffer,a=new this.constructor(this._length),i=a._buffer,u=0;u<this._length;u++)i[u]=tr(e.call(t,tr(n[u]),u,this));return a});R(F.prototype,"reduce",function(e,t){var i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,a=this._length,arguments.length>1)n=t,u=0;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=tr(i[0]),u=1}for(;u<a;u++)n=e(n,tr(i[u]),u,this);return n});R(F.prototype,"reduceRight",function(e,t){var i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,a=this._length,arguments.length>1)n=t,u=a-1;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=tr(i[a-1]),u=a-2}for(;u>=0;u--)n=e(n,tr(i[u]),u,this);return n});R(F.prototype,"reverse",function(){var e,t,i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=this._buffer,i=this._length,a=Asr(i/2),n=0;n<a;n++)u=i-n-1,t=e[n],e[n]=e[u],e[u]=t;return this});R(F.prototype,"set",function(e){var t,i,a,n,u,o,f;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!ia(i))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(uo(e)){if(u=e.length,i+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(K(e)?t=e._buffer:t=e,f=a.byteOffset+i*Nt,t.buffer===a.buffer&&t.byteOffset<f&&t.byteOffset+t.byteLength>f){for(n=new Be(t.length),o=0;o<t.length;o++)n[o]=t[o];t=n}for(o=0;o<u;i++,o++)a[i]=t[o]?1:0;return}if(i>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));a[i]=e?1:0});R(F.prototype,"slice",function(e,t){var i,a,n,u,o,f;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(u=this._buffer,o=this._length,arguments.length===0)e=0,t=o;else{if(!se(e))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=o,e<0&&(e=0)),arguments.length===1)t=o;else{if(!se(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o)}}for(e<t?i=t-e:i=0,n=new this.constructor(i),a=n._buffer,f=0;f<i;f++)a[f]=u[f+e];return n});R(F.prototype,"some",function(e,t){var i,a;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(e.call(t,tr(i[a]),a,this))return!0;return!1});R(F.prototype,"sort",function(e){var t;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(t=this._buffer,arguments.length===0)return t.sort(),this;if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));return t.sort(i),this;function i(a,n){return e(tr(a),tr(n))}});R(F.prototype,"subarray",function(e,t){var i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(a=this._buffer,n=this._length,arguments.length===0)e=0,t=n;else{if(!se(e))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length===1)t=n;else{if(!se(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n)}}return e>=n?(n=0,i=a.byteLength):e>=t?(n=0,i=a.byteOffset+e*Nt):(n=t-e,i=a.byteOffset+e*Nt),new this.constructor(a.buffer,i,n<0?0:n)});R(F.prototype,"toLocaleString",function(e,t){var i,a,n,u,o;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(arguments.length===0)a=[];else if(YT(e)||dsr(e))a=e;else throw new TypeError(B("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",e));if(arguments.length<2)i={};else if(so(t))i=t;else throw new TypeError(B("invalid argument. Options argument must be an object. Value: `%s`.",t));for(u=this._buffer,n=[],o=0;o<this._length;o++)n.push(tr(u[o]).toLocaleString(a,i));return n.join(",")});R(F.prototype,"toReversed",function(){var e,t,i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(i=this._length,t=new this.constructor(i),a=this._buffer,e=t._buffer,n=0;n<i;n++)e[n]=a[i-n-1];return t});R(F.prototype,"toSorted",function(e){var t,i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(a=this._length,i=new this.constructor(a),n=this._buffer,t=i._buffer,u=0;u<a;u++)t[u]=n[u];if(arguments.length===0)return t.sort(),i;if(!mr(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));return t.sort(o),i;function o(f,l){return e(tr(f),tr(l))}});R(F.prototype,"toString",function(){var e,t,i;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=[],t=this._buffer,i=0;i<this._length;i++)t[i]?e.push("true"):e.push("false");return e.join(",")});R(F.prototype,"values",function(){var e,t,i,a,n,u;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return t=this,n=this._buffer,i=this._length,u=-1,e={},R(e,"next",o),R(e,"return",f),_e&&R(e,_e,l),e;function o(){return u+=1,a||u>=i?{done:!0}:{value:tr(n[u]),done:!1}}function f(v){return a=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return t.values()}});R(F.prototype,"with",function(e,t){var i,a,n;if(!K(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!se(e))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",e));if(n=this._length,e<0&&(e+=n),e<0||e>=n)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!aa(t))throw new TypeError(B("invalid argument. Second argument must be a boolean. Value: `%s`.",t));return a=new this.constructor(this._buffer),i=a._buffer,t?i[e]=1:i[e]=0,a});ZT.exports=F});var Rn=s((BEr,JT)=>{"use strict";var Isr=$T();JT.exports=Isr});var xT=s((kEr,zT)=>{"use strict";var Fsr=Tr(),Lsr=be(),Psr=Sr(),Msr=Wi(),Rsr=ht(),Vsr=Di(),Csr=Ge(),Bsr=Yi(),ksr=Xi(),jsr=In(),Gsr=Pn(),Hsr=Rn(),Usr=[Fsr,Lsr,Msr,Psr,Vsr,Rsr,ksr,Csr,Bsr,jsr,Gsr,Hsr];zT.exports=Usr});var eA=s((jEr,rA)=>{"use strict";var Wsr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128","bool"];rA.exports=Wsr});var aA=s((GEr,iA)=>{"use strict";var Dsr=_t(),Ysr=Re(),Xsr=nt(),Ksr=tb(),Qsr=xT(),tA=eA(),Zsr=tA.length;function $sr(r){var e;if(Ysr(r))return"generic";if(Dsr(r))return null;for(e=0;e<Zsr;e++)if(r instanceof Qsr[e])return tA[e];return Ksr[Xsr(r)]||null}iA.exports=$sr});var uA=s((HEr,nA)=>{"use strict";var Jsr=aA();nA.exports=Jsr});var oA=s((UEr,sA)=>{"use strict";var zsr=yw(),xsr=Hi(),ror=Aw(),eor=Ui(),tor=Rw(),ior=uA();function aor(r){var e=ior(r);return zsr(r)?{data:r,dtype:e,accessorProtocol:!0,accessors:[eor(e),tor(e)]}:{data:r,dtype:e,accessorProtocol:!1,accessors:[xsr(e),ror(e)]}}sA.exports=aor});var ei=s((WEr,fA)=>{"use strict";var nor=oA();fA.exports=nor});var lA=s((DEr,vA)=>{"use strict";var uor=lr(),sor=128;function oo(r,e,t,i){var a,n,u,o,f,l,v,c,p,h,m,y,g,q,b;if(a=e.data,n=e.accessors[0],u=i,t===0)return r*n(a,u);if(r<=8){for(q=n(a,u),u+=t,b=1;b<r;b++)q+=n(a,u),u+=t;return q}if(r<=sor){for(o=n(a,u),f=n(a,u+t),l=n(a,u+2*t),v=n(a,u+3*t),c=n(a,u+4*t),p=n(a,u+5*t),h=n(a,u+6*t),m=n(a,u+7*t),u+=8*t,y=r%8,b=8;b<r-y;b+=8)o+=n(a,u),f+=n(a,u+t),l+=n(a,u+2*t),v+=n(a,u+3*t),c+=n(a,u+4*t),p+=n(a,u+5*t),h+=n(a,u+6*t),m+=n(a,u+7*t),u+=8*t;for(q=o+f+(l+v)+(c+p+(h+m)),b;b<r;b++)q+=n(a,u),u+=t;return q}return g=uor(r/2),g-=g%8,oo(g,e,t,u)+oo(r-g,e,t,u+g*t)}vA.exports=oo});var vo=s((YEr,cA)=>{"use strict";var oor=lr(),vor=ei(),lor=lA(),cor=128;function fo(r,e,t,i){var a,n,u,o,f,l,v,c,p,h,m,y,g,q;if(r<=0)return 0;if(y=vor(e),y.accessorProtocol)return lor(r,y,t,i);if(a=i,t===0)return r*e[a];if(r<8){for(m=e[a],a+=t,q=1;q<r;q++)m+=e[a],a+=t;return m}if(r<=cor){for(n=e[a],u=e[a+t],o=e[a+2*t],f=e[a+3*t],l=e[a+4*t],v=e[a+5*t],c=e[a+6*t],p=e[a+7*t],a+=8*t,h=r%8,q=8;q<r-h;q+=8)n+=e[a],u+=e[a+t],o+=e[a+2*t],f+=e[a+3*t],l+=e[a+4*t],v+=e[a+5*t],c+=e[a+6*t],p+=e[a+7*t],a+=8*t;for(m=n+u+(o+f)+(l+v+(c+p)),q;q<r;q++)m+=e[a],a+=t;return m}return g=oor(r/2),g-=g%8,fo(g,e,t,a)+fo(r-g,e,t,a+g*t)}cA.exports=fo});var hA=s((XEr,pA)=>{"use strict";var por=at(),hor=vo();function mor(r,e,t){return hor(r,e,t,por(r,t))}pA.exports=mor});var ti=s((KEr,yA)=>{"use strict";var yor=j(),mA=hA(),gor=vo();yor(mA,"ndarray",gor);yA.exports=mA});var lo=s((QEr,gA)=>{"use strict";var qor=ti().ndarray;function wor(r,e,t,i,a){return r<=0?0:r*e+qor(r,t,i,a)}gA.exports=wor});var wA=s((ZEr,qA)=>{"use strict";var bor=at(),Eor=lo();function dor(r,e,t,i){return Eor(r,e,t,i,bor(r,i))}qA.exports=dor});var co=s(($Er,EA)=>{"use strict";var _or=j(),bA=wA(),Tor=lo();_or(bA,"ndarray",Tor);EA.exports=bA});var _A=s((JEr,dA)=>{"use strict";var Aor=ti().ndarray,Nor=co().ndarray;function Oor(r,e,t,i){var a,n,u,o;return a=e.data,n=e.accessors[0],r===1||t===0?n(a,i):(u=Aor(r,a,t,i)/r,o=Nor(r,-u,a,t,i)/r,u+o)}dA.exports=Oor});var po=s((zEr,TA)=>{"use strict";var Sor=ti().ndarray,Ior=co().ndarray,For=ei(),Lor=_A();function Por(r,e,t,i){var a,n,u;return r<=0?NaN:(u=For(e),u.accessorProtocol?Lor(r,u,t,i):r===1||t===0?e[i]:(a=Sor(r,e,t,i)/r,n=Ior(r,-a,e,t,i)/r,a+n))}TA.exports=Por});var NA=s((xEr,AA)=>{"use strict";var Mor=at(),Ror=po();function Vor(r,e,t){return Ror(r,e,t,Mor(r,t))}AA.exports=Vor});var IA=s((rdr,SA)=>{"use strict";var Cor=j(),OA=NA(),Bor=po();Cor(OA,"ndarray",Bor);SA.exports=OA});var ho=s((edr,FA)=>{"use strict";var kor=IA();FA.exports=kor});var PA=s((tdr,LA)=>{"use strict";var jor=ho();function Gor(r,e,t){return jor(r,e,t)}LA.exports=Gor});var RA=s((idr,MA)=>{"use strict";var Hor=ho().ndarray;function Uor(r,e,t,i){return Hor(r,e,t,i)}MA.exports=Uor});var BA=s((adr,CA)=>{"use strict";var Wor=j(),VA=PA(),Dor=RA();Wor(VA,"ndarray",Dor);CA.exports=VA});var jA=s((ndr,kA)=>{"use strict";var Yor=BA();kA.exports=Yor});var HA=s((udr,GA)=>{"use strict";var Xor=ti().ndarray;function Kor(r,e,t,i,a){var n,u,o,f,l,v,c,p,h;for(n=t.data,u=t.accessors[0],o=Xor(r,n,i,a)/r,p=r-e,f=a,l=0,v=0,h=0;h<r;h++)c=u(n,f)-o,l+=c*c,v+=c,f+=i;return l/p-v/r*(v/p)}GA.exports=Kor});var mo=s((sdr,UA)=>{"use strict";var Qor=ti().ndarray,Zor=ei(),$or=HA();function Jor(r,e,t,i,a){var n,u,o,f,l,v,c,p;if(c=r-e,r<=0||c<=0)return NaN;if(r===1||i===0)return 0;if(f=Zor(t),f.accessorProtocol)return $or(r,e,f,i,a);for(n=Qor(r,t,i,a)/r,u=a,o=0,l=0,p=0;p<r;p++)v=t[u]-n,o+=v*v,l+=v,u+=i;return o/c-l/r*(l/c)}UA.exports=Jor});var DA=s((odr,WA)=>{"use strict";var zor=at(),xor=mo();function rfr(r,e,t,i){return xor(r,e,t,i,zor(r,i))}WA.exports=rfr});var yo=s((fdr,XA)=>{"use strict";var efr=j(),YA=DA(),tfr=mo();efr(YA,"ndarray",tfr);XA.exports=YA});var QA=s((vdr,KA)=>{"use strict";var ifr=yo();function afr(r,e,t,i){return ifr(r,e,t,i)}KA.exports=afr});var $A=s((ldr,ZA)=>{"use strict";var nfr=yo().ndarray;function ufr(r,e,t,i,a){return nfr(r,e,t,i,a)}ZA.exports=ufr});var xA=s((cdr,zA)=>{"use strict";var sfr=j(),JA=QA(),ofr=$A();sfr(JA,"ndarray",ofr);zA.exports=JA});var eN=s((pdr,rN)=>{"use strict";var ffr=xA();rN.exports=ffr});var iN=s((hdr,tN)=>{"use strict";var vfr=Object;tN.exports=vfr});var na=s((mdr,aN)=>{"use strict";var lfr=iN();aN.exports=lfr});var uN=s((ydr,nN)=>{"use strict";var cfr=Object.getPrototypeOf;nN.exports=cfr});var oN=s((gdr,sN)=>{"use strict";function pfr(r){return r.__proto__}sN.exports=pfr});var lN=s((qdr,vN)=>{"use strict";var hfr=vr(),fN=na(),mfr=oN();function yfr(r){var e=mfr(r);return e||e===null?e:hfr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof fN?fN.prototype:null}vN.exports=yfr});var pN=s((wdr,cN)=>{"use strict";var gfr=Ve(),qfr=uN(),wfr=lN(),go;gfr(Object.getPrototypeOf)?go=qfr:go=wfr;cN.exports=go});var mN=s((bdr,hN)=>{"use strict";var bfr=na(),Efr=pN();function dfr(r){return r==null?null:(r=bfr(r),Efr(r))}hN.exports=dfr});var Ot=s((Edr,yN)=>{"use strict";var _fr=mN();yN.exports=_fr});var wN=s((ddr,qN)=>{"use strict";var Tfr=Zt(),gN=Ve(),Afr=Ot(),Vn=_r(),Nfr=vr(),Ofr=Object.prototype;function Sfr(r){var e;for(e in r)if(!Vn(r,e))return!1;return!0}function Ifr(r){var e;return Tfr(r)?(e=Afr(r),e?!Vn(r,"constructor")&&Vn(e,"constructor")&&gN(e.constructor)&&Nfr(e.constructor)==="[object Function]"&&Vn(e,"isPrototypeOf")&&gN(e.isPrototypeOf)&&(e===Ofr||Sfr(r)):!0):!1}qN.exports=Ifr});var ua=s((_dr,bN)=>{"use strict";var Ffr=wN();bN.exports=Ffr});var qo=s((Tdr,EN)=>{"use strict";var Lfr=Hr().isPrimitive,Pfr=k();function Mfr(r){return Lfr(r)&&Pfr(r)}EN.exports=Mfr});var wo=s((Adr,dN)=>{"use strict";var Rfr=Hr().isObject,Vfr=k();function Cfr(r){return Rfr(r)&&Vfr(r.valueOf())}dN.exports=Cfr});var TN=s((Ndr,_N)=>{"use strict";var Bfr=qo(),kfr=wo();function jfr(r){return Bfr(r)||kfr(r)}_N.exports=jfr});var Cn=s((Odr,NN)=>{"use strict";var AN=j(),bo=TN(),Gfr=qo(),Hfr=wo();AN(bo,"isPrimitive",Gfr);AN(bo,"isObject",Hfr);NN.exports=bo});var LN=s((Sdr,FN)=>{"use strict";var ON=Hr().isPrimitive,Ufr=ua(),SN=Kr().isPrimitive,IN=Cn(),Bn=_r(),sa=Q();function Wfr(r,e){return Ufr(e)?Bn(e,"alpha")&&(r.alpha=e.alpha,!ON(r.alpha)||IN(r.alpha))?new TypeError(sa("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Bn(e,"alternative")&&(r.alternative=e.alternative,!SN(r.alternative))?new TypeError(sa("invalid option. `%s` option must be a string. Option: `%s`.","alternative",r.alternative)):Bn(e,"difference")&&(r.difference=e.difference,!ON(r.difference)||IN(r.difference))?new TypeError(sa("invalid option. `%s` option must be a number. Option: `%s`.","difference",r.difference)):Bn(e,"variance")&&(r.variance=e.variance,!SN(r.variance))?new TypeError(sa("invalid option. `%s` option must be a string. Option: `%s`.","variance",r.variance)):null:new TypeError(sa("invalid argument. Options argument must be an object. Value: `%s`.",e))}FN.exports=Wfr});var Eo=s((Idr,PN)=>{"use strict";var Dfr=Oe().isPrimitive;function Yfr(r){return Dfr(r)&&r>0}PN.exports=Yfr});var _o=s((Fdr,MN)=>{"use strict";var Xfr=Oe().isObject;function Kfr(r){return Xfr(r)&&r.valueOf()>0}MN.exports=Kfr});var VN=s((Ldr,RN)=>{"use strict";var Qfr=Eo(),Zfr=_o();function $fr(r){return Qfr(r)||Zfr(r)}RN.exports=$fr});var Ao=s((Pdr,BN)=>{"use strict";var CN=j(),To=VN(),Jfr=Eo(),zfr=_o();CN(To,"isPrimitive",Jfr);CN(To,"isObject",zfr);BN.exports=To});var jN=s((Mdr,kN)=>{"use strict";var xfr=308;kN.exports=xfr});var HN=s((Rdr,GN)=>{"use strict";var rvr=-308;GN.exports=rvr});var WN=s((Vdr,UN)=>{"use strict";var evr=-324;UN.exports=evr});var $N=s((Cdr,ZN)=>{"use strict";var DN=k(),kn=je(),YN=rr(),tvr=H(),XN=mi(),ivr=on(),KN=jN(),avr=HN(),nvr=WN(),uvr=ivr+1,QN=1e308;function svr(r,e){var t,i;return DN(r)||DN(e)||kn(e)?NaN:kn(r)||r===0||e<nvr||tvr(r)>uvr&&e<=0?r:e>KN?0*r:e<avr?(t=YN(10,-(e+KN)),i=r*QN*t,kn(i)?r:XN(i)/QN/t):(t=YN(10,-e),i=r*t,kn(i)?r:XN(i)/t)}ZN.exports=svr});var zN=s((Bdr,JN)=>{"use strict";var ovr=$N();JN.exports=ovr});var eO=s((kdr,rO)=>{"use strict";var fvr=Ao(),vvr=ua(),lvr=Zi().isPrimitive,xN=_r(),oa=zN(),No=Q();function cvr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!vvr(r))throw new TypeError(No("invalid argument. First argument must be an object. Value: `%s`.",r));if(xN(r,"digits")){if(!fvr(r.digits))throw new TypeError(No("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(xN(r,"decision")){if(!lvr(r.decision))throw new TypeError(No("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}switch(i="",i+=this.method,i+=`

`,i+="Alternative hypothesis: ",i+="True difference in means is ",this.alternative){case"less":i+="less than ";break;case"greater":i+="greater than ";break;case"two-sided":default:i+="not equal to ";break}return i+=this.nullValue,i+=`

`,i+="    pValue: "+oa(this.pValue,-t)+`
`,i+="    statistic: "+oa(this.statistic,-t)+`
`,i+="    df: "+oa(this.df,-t)+`
`,i+="    "+(1-this.alpha)*100+"% confidence interval: ["+oa(this.ci[0],-t)+","+oa(this.ci[1],-t)+"]",i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}rO.exports=cvr});var sO=s((jdr,uO)=>{"use strict";var tO=s6().primitives,iO=su(),zr=Ma(),Oo=dm(),jn=Ss(),Gn=x(),pvr=H(),So=rr(),aO=jA(),nO=eN(),fa=Q(),hvr=fr(),mvr=z(),yvr=LN(),gvr=eO();function qvr(r,e,t){var i,a,n,u,o,f,l,v,c,p,h,m,y,g,q,b,w,T,E,A,d;if(!iO(r)&&!tO(r))throw new TypeError(fa("invalid argument. First argument must be a numeric array. Value: `%s`.",r));if(!iO(e)&&!tO(e))throw new TypeError(fa("invalid argument. Second argument must be a numeric array. Value: `%s`.",e));if(v={},t&&(b=yvr(v,t),b))throw b;if(l=v.difference||0,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(fa("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));if(T=r.length,E=e.length,p=nO(T,1,r,1),h=nO(E,1,e,1),o=v.variance||"unequal",o==="equal")A=T+E-2,d=(T-1)*p+(E-1)*h,d/=A,i=Gn(d*(1/T+1/E));else if(o==="unequal")y=Gn(p/T),g=Gn(h/E),i=Gn(y*y+g*g),d=So(y,4)/(T-1),d+=So(g,4)/(E-1),A=So(i,4)/d;else throw new Error(fa('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"variance",["equal","unequal"].join('", "'),o));switch(n=aO(T,r,1),u=aO(E,e,1),m=(n-u-l)/i,q=v.alternative||"two-sided",q){case"two-sided":c=2*Oo(-pvr(m),A),f=[m-jn(1-a/2,A),m+jn(1-a/2,A)],f[0]=l+f[0]*i,f[1]=l+f[1]*i;break;case"greater":c=1-Oo(m,A),f=[m-jn(1-a,A),mvr],f[0]=l+f[0]*i;break;case"less":c=Oo(m,A),f=[hvr,m+jn(1-a,A)],f[1]=l+f[1]*i;break;default:throw new Error(fa('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),q))}return w={},zr(w,"rejected",c<=a),zr(w,"alpha",a),zr(w,"pValue",c),zr(w,"statistic",m),zr(w,"ci",f),zr(w,"alternative",q),zr(w,"df",A),zr(w,"method",o==="equal"?"Two-sample t-test":"Welch two-sample t-test"),zr(w,"nullValue",l),zr(w,"xmean",n),zr(w,"ymean",u),zr(w,"print",gvr),w}uO.exports=qvr});var fO=s((Gdr,oO)=>{"use strict";var wvr=sO();oO.exports=wvr});var lO=s((Hdr,vO)=>{"use strict";var bvr=Ot(),Evr=vr();function dvr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Evr(r)==="[object Error]")return!0;r=bvr(r)}return!1}vO.exports=dvr});var pO=s((Udr,cO)=>{"use strict";var _vr=lO();cO.exports=_vr});var Io=s((Wdr,hO)=>{"use strict";function Tvr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}hO.exports=Tvr});var yO=s((Ddr,mO)=>{"use strict";var Avr=Io(),Nvr=Avr();mO.exports=Nvr});var wO=s((Ydr,qO)=>{"use strict";var Ovr=j(),gO=Io(),Svr=yO();Ovr(gO,"REGEXP",Svr);qO.exports=gO});var EO=s((Xdr,bO)=>{"use strict";var Ivr=Kr().isPrimitive,Fvr=wO(),Lvr=Q();function Pvr(r){if(!Ivr(r))throw new TypeError(Lvr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Fvr().exec(r),r?new RegExp(r[1],r[2]):null}bO.exports=Pvr});var _O=s((Kdr,dO)=>{"use strict";var Mvr=EO();dO.exports=Mvr});var OO=s((Qdr,NO)=>{"use strict";var TO=Cn(),Rvr=At(),Vvr=Kr().isPrimitive,Cvr=Oe().isPrimitive,AO=Q();function Bvr(r,e,t){var i,a;if(!Rvr(r)&&!Vvr(r))throw new TypeError(AO("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Cvr(t))throw new TypeError(AO("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(TO(e)){for(;a<i;a++)if(TO(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}NO.exports=Bvr});var Hn=s((Zdr,SO)=>{"use strict";var kvr=OO();SO.exports=kvr});var Un=s(($dr,IO)=>{"use strict";function jvr(r){return Object.keys(Object(r))}IO.exports=jvr});var LO=s((Jdr,FO)=>{"use strict";var Gvr=Un();function Hvr(){return(Gvr(arguments)||"").length!==2}function Uvr(){return Hvr(1,2)}FO.exports=Uvr});var MO=s((zdr,PO)=>{"use strict";var Wvr=typeof Object.keys!="undefined";PO.exports=Wvr});var Fo=s((xdr,RO)=>{"use strict";var Dvr=vr();function Yvr(r){return Dvr(r)==="[object Arguments]"}RO.exports=Yvr});var BO=s((r_r,CO)=>{"use strict";var Xvr=Fo(),VO;function Kvr(){return Xvr(arguments)}VO=Kvr();CO.exports=VO});var Lo=s((e_r,kO)=>{"use strict";var Qvr=Object.prototype.propertyIsEnumerable;kO.exports=Qvr});var HO=s((t_r,GO)=>{"use strict";var Zvr=Lo(),jO;function $vr(){return!Zvr.call("beep","0")}jO=$vr();GO.exports=jO});var WO=s((i_r,UO)=>{"use strict";var Jvr=Kr(),zvr=Cn().isPrimitive,xvr=Oe().isPrimitive,r1r=Lo(),e1r=HO();function t1r(r,e){var t;return r==null?!1:(t=r1r.call(r,e),!t&&e1r&&Jvr(r)?(e=+e,!zvr(e)&&xvr(e)&&e>=0&&e<r.length):t)}UO.exports=t1r});var Wn=s((a_r,DO)=>{"use strict";var i1r=WO();DO.exports=i1r});var XO=s((n_r,YO)=>{"use strict";var a1r=_r(),n1r=Wn(),u1r=Re(),s1r=Or(),o1r=vi();function f1r(r){return r!==null&&typeof r=="object"&&!u1r(r)&&typeof r.length=="number"&&s1r(r.length)&&r.length>=0&&r.length<=o1r&&a1r(r,"callee")&&!n1r(r,"callee")}YO.exports=f1r});var Mo=s((u_r,KO)=>{"use strict";var v1r=BO(),l1r=Fo(),c1r=XO(),Po;v1r?Po=l1r:Po=c1r;KO.exports=Po});var $O=s((s_r,ZO)=>{"use strict";var p1r=Mo(),QO=Un(),h1r=Array.prototype.slice;function m1r(r){return p1r(r)?QO(h1r.call(r)):QO(r)}ZO.exports=m1r});var zO=s((o_r,JO)=>{"use strict";function y1r(){}JO.exports=y1r});var rS=s((f_r,xO)=>{"use strict";var g1r=zO();xO.exports=g1r});var tS=s((v_r,eS)=>{"use strict";var q1r=Wn(),w1r=rS(),b1r=q1r(w1r,"prototype");eS.exports=b1r});var aS=s((l_r,iS)=>{"use strict";var E1r=Wn(),d1r={toString:null},_1r=!E1r(d1r,"toString");iS.exports=_1r});var Ro=s((c_r,nS)=>{"use strict";function T1r(r){return r.constructor&&r.constructor.prototype===r}nS.exports=T1r});var uS=s((p_r,A1r)=>{A1r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var oS=s((h_r,sS)=>{"use strict";var N1r=typeof window=="undefined"?void 0:window;sS.exports=N1r});var cS=s((m_r,lS)=>{"use strict";var O1r=_r(),S1r=Hn(),fS=_n(),I1r=Ro(),F1r=uS(),ii=oS(),vS;function L1r(){var r;if(fS(ii)==="undefined")return!1;for(r in ii)try{S1r(F1r,r)===-1&&O1r(ii,r)&&ii[r]!==null&&fS(ii[r])==="object"&&I1r(ii[r])}catch{return!0}return!1}vS=L1r();lS.exports=vS});var hS=s((y_r,pS)=>{"use strict";var P1r=typeof window!="undefined";pS.exports=P1r});var gS=s((g_r,yS)=>{"use strict";var M1r=cS(),mS=Ro(),R1r=hS();function V1r(r){if(R1r===!1&&!M1r)return mS(r);try{return mS(r)}catch{return!1}}yS.exports=V1r});var qS=s((q_r,C1r)=>{C1r.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var ES=s((w_r,bS)=>{"use strict";var B1r=Ps(),Vo=_r(),k1r=Mo(),j1r=tS(),G1r=aS(),H1r=gS(),wS=qS();function U1r(r){var e,t,i,a,n,u,o;if(a=[],k1r(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!Vo(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!B1r(r))return a;t=j1r&&i}for(n in r)!(t&&n==="prototype")&&Vo(r,n)&&a.push(String(n));if(G1r)for(e=H1r(r),o=0;o<wS.length;o++)u=wS[o],!(e&&u==="constructor")&&Vo(r,u)&&a.push(String(u));return a}bS.exports=U1r});var _S=s((b_r,dS)=>{"use strict";var W1r=LO(),D1r=MO(),Y1r=Un(),X1r=$O(),K1r=ES(),Dn;D1r?W1r()?Dn=X1r:Dn=Y1r:Dn=K1r;dS.exports=Dn});var Co=s((E_r,TS)=>{"use strict";var Q1r=_S();TS.exports=Q1r});var NS=s((d_r,AS)=>{"use strict";var Z1r=typeof Object.getOwnPropertyNames!="undefined";AS.exports=Z1r});var IS=s((__r,SS)=>{"use strict";var OS=na(),$1r=OS.getOwnPropertyNames;function J1r(r){return $1r(OS(r))}SS.exports=J1r});var LS=s((T_r,FS)=>{"use strict";var z1r=na(),x1r=Co();function rlr(r){return x1r(z1r(r))}FS.exports=rlr});var MS=s((A_r,PS)=>{"use strict";var elr=NS(),tlr=IS(),ilr=LS(),Bo;elr?Bo=tlr:Bo=ilr;PS.exports=Bo});var VS=s((N_r,RS)=>{"use strict";var alr=typeof Object.getOwnPropertyDescriptor!="undefined";RS.exports=alr});var BS=s((O_r,CS)=>{"use strict";var nlr=Object.getOwnPropertyDescriptor;function ulr(r,e){var t;return r==null?null:(t=nlr(r,e),t===void 0?null:t)}CS.exports=ulr});var jS=s((S_r,kS)=>{"use strict";var slr=_r();function olr(r,e){return slr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}kS.exports=olr});var HS=s((I_r,GS)=>{"use strict";var flr=VS(),vlr=BS(),llr=jS(),ko;flr?ko=vlr:ko=llr;GS.exports=ko});var WS=s((F_r,US)=>{"use strict";var clr=typeof Buffer=="function"?Buffer:null;US.exports=clr});var YS=s((L_r,DS)=>{"use strict";var plr=_t(),Yn=WS();function hlr(){var r,e;if(typeof Yn!="function")return!1;try{typeof Yn.from=="function"?e=Yn.from([1,2,3,4]):e=new Yn([1,2,3,4]),r=plr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}DS.exports=hlr});var KS=s((P_r,XS)=>{"use strict";var mlr=YS();XS.exports=mlr});var ZS=s((M_r,QS)=>{"use strict";QS.exports={}});var JS=s((R_r,$S)=>{"use strict";var ylr=ZS().Buffer;$S.exports=ylr});var xS=s((V_r,zS)=>{"use strict";function glr(){throw new Error("not implemented")}zS.exports=glr});var Xn=s((C_r,rI)=>{"use strict";var qlr=KS(),wlr=JS(),blr=xS(),jo;qlr()?jo=wlr:jo=blr;rI.exports=jo});var tI=s((B_r,eI)=>{"use strict";var Elr=Ve(),dlr=Xn(),_lr=Elr(dlr.from);eI.exports=_lr});var aI=s((k_r,iI)=>{"use strict";var Tlr=_t(),Alr=Q(),Nlr=Xn();function Olr(r){if(!Tlr(r))throw new TypeError(Alr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Nlr.from(r)}iI.exports=Olr});var uI=s((j_r,nI)=>{"use strict";var Slr=_t(),Ilr=Q(),Flr=Xn();function Llr(r){if(!Slr(r))throw new TypeError(Ilr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Flr(r)}nI.exports=Llr});var oI=s((G_r,sI)=>{"use strict";var Plr=tI(),Mlr=aI(),Rlr=uI(),Go;Plr?Go=Mlr:Go=Rlr;sI.exports=Go});var lI=s((H_r,vI)=>{"use strict";var Vlr=Xi(),Clr=Ge(),Blr=Yi(),klr=Di(),jlr=ht(),Glr=Wi(),Hlr=Sr(),Ulr=be(),Wlr=Tr(),fI;function Dlr(r){return new Vlr(r)}function Ylr(r){return new Clr(r)}function Xlr(r){return new Blr(r)}function Klr(r){return new klr(r)}function Qlr(r){return new jlr(r)}function Zlr(r){return new Glr(r)}function $lr(r){return new Hlr(r)}function Jlr(r){return new Ulr(r)}function zlr(r){return new Wlr(r)}function xlr(){var r={int8array:Dlr,uint8array:Ylr,uint8clampedarray:Xlr,int16array:Klr,uint16array:Qlr,int32array:Zlr,uint32array:$lr,float32array:Jlr,float64array:zlr};return r}fI=xlr();vI.exports=fI});var yI=s((U_r,mI)=>{"use strict";var Kn=_r(),Ho=Re(),cI=_t(),r2r=pO(),pI=_n(),e2r=_O(),t2r=Hn(),hI=Co(),i2r=MS(),va=HS(),a2r=Ot(),la=pt(),n2r=oI(),u2r=lI();function s2r(r){var e,t,i,a,n,u,o,f;for(e=[],a=[],o=Object.create(a2r(r)),e.push(r),a.push(o),t=i2r(r),f=0;f<t.length;f++)i=t[f],n=va(r,i),Kn(n,"value")&&(u=Ho(r[i])?[]:{},n.value=St(r[i],u,e,a,-1)),la(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function o2r(r){var e=[],t=[],i,a,n,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=hI(r),f=0;f<i.length;f++)u=i[f],a=va(r,u),Kn(a,"value")&&(n=Ho(r[u])?[]:{},a.value=St(r[u],n,e,t,-1)),la(o,u,a);return o}function St(r,e,t,i,a){var n,u,o,f,l,v,c,p,h,m;if(a-=1,typeof r!="object"||r===null)return r;if(cI(r))return n2r(r);if(r2r(r))return o2r(r);if(o=pI(r),o==="date")return new Date(+r);if(o==="regexp")return e2r(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(l=u2r[o],l)return l(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?s2r(r):{};if(u=hI(r),a>0)for(n=o,m=0;m<u.length;m++){if(v=u[m],p=r[v],o=pI(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||cI(p)){n==="object"?(f=va(r,v),Kn(f,"value")&&(f.value=St(p)),la(e,v,f)):e[v]=St(p);continue}if(h=t2r(t,p),h!==-1){e[v]=i[h];continue}c=Ho(p)?new Array(p.length):{},t.push(p),i.push(c),n==="array"?e[v]=St(p,c,t,i,a):(f=va(r,v),Kn(f,"value")&&(f.value=St(p,c,t,i,a)),la(e,v,f))}else if(o==="array")for(m=0;m<u.length;m++)v=u[m],e[v]=r[v];else for(m=0;m<u.length;m++)v=u[m],f=va(r,v),la(e,v,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}mI.exports=St});var qI=s((W_r,gI)=>{"use strict";var f2r=Re(),v2r=yt().isPrimitive,l2r=Q(),c2r=z(),p2r=yI();function h2r(r,e){var t;if(arguments.length>1){if(!v2r(e))throw new TypeError(l2r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=c2r;return t=f2r(r)?new Array(r.length):{},p2r(r,t,[r],[t],e)}gI.exports=h2r});var bI=s((D_r,wI)=>{"use strict";var m2r=qI();wI.exports=m2r});var dI=s((Y_r,EI)=>{"use strict";var y2r=pt();function g2r(r,e,t,i){y2r(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}EI.exports=g2r});var TI=s((X_r,_I)=>{"use strict";var q2r=dI();_I.exports=q2r});var NI=s((K_r,AI)=>{"use strict";var w2r=typeof Math.imul=="function"?Math.imul:null;AI.exports=w2r});var II=s((Q_r,SI)=>{"use strict";var OI=65535;function b2r(r,e){var t,i,a,n,u,o;return r|=0,e|=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&OI)>>>0,o=(e&OI)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i|0}SI.exports=b2r});var PI=s((Z_r,LI)=>{"use strict";var FI=NI(),E2r=II(),Uo;typeof FI=="function"?Uo=FI:Uo=E2r;LI.exports=Uo});var RI=s(($_r,MI)=>{"use strict";var d2r=PI();function _2r(r,e){return d2r(r,e)>>>0}MI.exports=_2r});var CI=s((J_r,VI)=>{"use strict";var T2r=RI();VI.exports=T2r});var Wo=s((z_r,BI)=>{"use strict";function A2r(r,e,t,i,a,n,u){var o,f,l,v,c,p,h;for(o=e.data,f=a.data,v=e.accessors[0],l=a.accessors[1],c=i,p=u,h=0;h<r;h++)l(f,p,v(o,c)),c+=t,p+=n;return a}BI.exports=A2r});var GI=s((x_r,jI)=>{"use strict";var kI=ei(),N2r=Wo(),Do=8;function O2r(r,e,t,i,a){var n,u,o,f,l,v;if(r<=0)return i;if(o=kI(e),f=kI(i),o.accessorProtocol||f.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,N2r(r,o,t,n,f,a,u),f.data;if(t===1&&a===1){if(l=r%Do,l>0)for(v=0;v<l;v++)i[v]=e[v];if(r<Do)return i;for(v=l;v<r;v+=Do)i[v]=e[v],i[v+1]=e[v+1],i[v+2]=e[v+2],i[v+3]=e[v+3],i[v+4]=e[v+4],i[v+5]=e[v+5],i[v+6]=e[v+6],i[v+7]=e[v+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,v=0;v<r;v++)i[u]=e[n],n+=t,u+=a;return i}jI.exports=O2r});var WI=s((rTr,UI)=>{"use strict";var HI=ei(),S2r=Wo(),ca=8;function I2r(r,e,t,i,a,n,u){var o,f,l,v,c,p;if(r<=0)return a;if(l=HI(e),v=HI(a),l.accessorProtocol||v.accessorProtocol)return S2r(r,l,t,i,v,n,u),v.data;if(o=i,f=u,t===1&&n===1){if(c=r%ca,c>0)for(p=0;p<c;p++)a[f]=e[o],o+=t,f+=n;if(r<ca)return a;for(p=c;p<r;p+=ca)a[f]=e[o],a[f+1]=e[o+1],a[f+2]=e[o+2],a[f+3]=e[o+3],a[f+4]=e[o+4],a[f+5]=e[o+5],a[f+6]=e[o+6],a[f+7]=e[o+7],o+=ca,f+=ca;return a}for(p=0;p<r;p++)a[f]=e[o],o+=t,f+=n;return a}UI.exports=I2r});var Yo=s((eTr,YI)=>{"use strict";var F2r=j(),DI=GI(),L2r=WI();F2r(DI,"ndarray",L2r);YI.exports=DI});var KI=s((tTr,XI)=>{"use strict";function P2r(){}XI.exports=P2r});var ZI=s((iTr,QI)=>{"use strict";var M2r=KI();function R2r(){return M2r.name==="foo"}QI.exports=R2r});var JI=s((aTr,$I)=>{"use strict";var V2r=ZI();$I.exports=V2r});var xI=s((nTr,zI)=>{"use strict";var C2r=Ve(),B2r=JI(),k2r=Q(),j2r=Rs().REGEXP,G2r=B2r();function H2r(r){if(C2r(r)===!1)throw new TypeError(k2r("invalid argument. Must provide a function. Value: `%s`.",r));return G2r?r.name:j2r.exec(r.toString())[1]}zI.exports=H2r});var eF=s((uTr,rF)=>{"use strict";var U2r=xI();rF.exports=U2r});var Qn=s((sTr,tF)=>{"use strict";var W2r=Lt(),D2r=W2r.POSITIVE_INFINITY;tF.exports=D2r});var aF=s((oTr,iF)=>{"use strict";var Y2r=typeof Float16Array=="function"?Float16Array:null;iF.exports=Y2r});var sF=s((fTr,uF)=>{"use strict";var X2r=Qn(),nF=aF();function K2r(){var r,e;if(typeof nF!="function")return!1;try{e=new nF([1,3.14,-3.14,5e40]),r=typeof e=="object"&&e!==null&&e.constructor.name==="Float16Array"&&e.BYTES_PER_ELEMENT===2&&e[0]===1&&e[1]!==3.14&&e[2]!==-3.14&&e[3]===X2r&&e.length===4}catch{r=!1}return r}uF.exports=K2r});var fF=s((vTr,oF)=>{"use strict";var Q2r=sF();oF.exports=Q2r});var lF=s((lTr,vF)=>{"use strict";var Z2r=pt();function $2r(r,e,t,i){Z2r(r,e,{configurable:!1,enumerable:!0,get:t,set:i})}vF.exports=$2r});var pF=s((cTr,cF)=>{"use strict";var J2r=lF();cF.exports=J2r});var mF=s((pTr,hF)=>{"use strict";var z2r=typeof Math.f16round=="function"?Math.f16round:null;hF.exports=z2r});var gF=s((hTr,yF)=>{"use strict";var x2r=z(),rcr=fr();function ecr(r){return r===r&&r>rcr&&r<x2r}yF.exports=ecr});var wF=s((mTr,qF)=>{"use strict";var tcr=gF();qF.exports=tcr});var EF=s((yTr,bF)=>{"use strict";var icr=.0009765625;bF.exports=icr});var _F=s((gTr,dF)=>{"use strict";var acr=65504;dF.exports=acr});var AF=s((qTr,TF)=>{"use strict";var ncr=6103515625e-14;TF.exports=ncr});var IF=s((wTr,SF)=>{"use strict";var ucr=wF(),Xo=EF(),scr=_F(),Ko=AF(),OF=Ur(),ocr=z(),fcr=H(),NF=1/OF;function vcr(r){return r+NF-NF}function lcr(r){var e,t,i,a;return r===0||isNaN(r)||!ucr(r)?r:(r<0?a=-1:a=1,t=fcr(r),t<Ko?a*vcr(t/Ko/Xo)*Ko*Xo:(i=(1+Xo/OF)*t,e=i-(i-t),e>scr||isNaN(e)?a*ocr:a*e))}SF.exports=lcr});var pa=s((bTr,LF)=>{"use strict";var FF=mF(),ccr=IF(),Qo;typeof FF=="function"?Qo=FF:Qo=ccr;LF.exports=Qo});var Zo=s((ETr,PF)=>{"use strict";var pcr=Lt(),hcr=pcr.NEGATIVE_INFINITY;PF.exports=hcr});var RF=s((dTr,MF)=>{"use strict";function mcr(r){return r!==r}MF.exports=mcr});var CF=s((_Tr,VF)=>{"use strict";var ycr=RF();VF.exports=ycr});var kF=s((TTr,BF)=>{"use strict";function gcr(r){return Math.abs(r)}BF.exports=gcr});var GF=s((ATr,jF)=>{"use strict";var qcr=kF();jF.exports=qcr});var WF=s((NTr,UF)=>{"use strict";var wcr=be(),bcr=Sr(),HF=new wcr(1),Ecr=new bcr(HF.buffer);function dcr(r){return HF[0]=r,Ecr[0]}UF.exports=dcr});var $o=s((OTr,DF)=>{"use strict";var _cr=WF();DF.exports=_cr});var XF=s((STr,YF)=>{"use strict";var Tcr=127;YF.exports=Tcr});var QF=s((ITr,KF)=>{"use strict";var Acr=$o(),Ncr=XF(),Ocr=2139095040;function Scr(r){var e=Acr(r);return e=(e&Ocr)>>>23,e-Ncr}KF.exports=Scr});var $F=s((FTr,ZF)=>{"use strict";var Icr=QF();ZF.exports=Icr});var rL=s((LTr,xF)=>{"use strict";var Fcr=be(),Lcr=Sr(),JF=new Fcr(1),Pcr=new Lcr(JF.buffer),zF,Mcr=4286578688;Pcr[0]=Mcr;zF=JF[0];xF.exports=zF});var tL=s((PTr,eL)=>{"use strict";var Rcr=rL();function Vcr(r){return r===0&&1/r===Rcr}eL.exports=Vcr});var aL=s((MTr,iL)=>{"use strict";var Ccr=tL();iL.exports=Ccr});var uL=s((RTr,nL)=>{"use strict";var Bcr=8388607;nL.exports=Bcr});var oL=s((VTr,sL)=>{"use strict";var kcr=Zo(),jcr=Qn(),Gcr=CF(),Hcr=GF(),Ucr=$F(),Wcr=aL(),Dcr=uL(),Ycr=$o(),Xcr=32256,Jo=31744,zo=64512,Kcr=0,Qcr=32768,Zcr=8388608,$cr=8191,Jcr=4095,zcr=1023;function xcr(r){var e,t,i,a,n,u,o,f,l;return Gcr(r)?Xcr:r===jcr?Jo:r===kcr?zo:r===0?Wcr(r)?Qcr:Kcr:(r<0?l=1:l=0,r=Hcr(r),o=Ycr(r),f=o&Dcr,e=Ucr(r),t=e+15,t>=31?l?zo:Jo:t<=0?t<-10?l<<15:(u=1-t,a=(Zcr|f)>>>13,u<11?(n=a>>>u-1&1,i=(a&(1<<u-1)-1)!==0,i||(i=(f&$cr)!==0)):(n=f>>>13-(u-11)-1&1,i=(f&(1<<13-(u-11)-1)-1)!==0),a>>>=u,n&&(i||a&1)&&(a+=1),l<<15|a):(a=f>>>13,n=f>>>12&1,i=(f&Jcr)!==0,n&&(i||a&1)&&(a+=1,a>zcr&&(t+=1,a=0,t>=31))?l?zo:Jo:l<<15|t<<10|a))}sL.exports=xcr});var ha=s((CTr,fL)=>{"use strict";var r3r=oL();fL.exports=r3r});var lL=s((BTr,vL)=>{"use strict";var e3r=-1022;vL.exports=e3r});var pL=s((kTr,cL)=>{"use strict";function t3r(r){return r===0?1513.906801156151:1513.906801156151+r*(20.202065669316532+r*.023093347705734523)}cL.exports=t3r});var mL=s((jTr,hL)=>{"use strict";function i3r(r){return r===0?4368.211668792106:4368.211668792106+r*(233.1842117223149+r*1)}hL.exports=i3r});var qL=s((GTr,gL)=>{"use strict";var a3r=H0(),n3r=lL(),u3r=mi(),yL=De(),s3r=k(),o3r=z(),f3r=pL(),v3r=mL();function l3r(r){var e,t,i;return s3r(r)?r:r>a3r?o3r:r<n3r?0:(i=u3r(r),r-=i,t=r*r,e=r*f3r(t),r=e/(v3r(t)-e),r=1+yL(r,1),yL(r,i))}gL.exports=l3r});var bL=s((HTr,wL)=>{"use strict";var c3r=qL();wL.exports=c3r});var dL=s((UTr,EL)=>{"use strict";var p3r=15;EL.exports=p3r});var TL=s((WTr,_L)=>{"use strict";var h3r=32768;_L.exports=h3r});var NL=s((DTr,AL)=>{"use strict";var m3r=31744;AL.exports=m3r});var SL=s((YTr,OL)=>{"use strict";var y3r=1023;OL.exports=y3r});var FL=s((XTr,IL)=>{"use strict";var g3r=10;IL.exports=g3r});var PL=s((KTr,LL)=>{"use strict";var q3r=5;LL.exports=q3r});var VL=s((QTr,RL)=>{"use strict";var w3r=Zo(),b3r=Qn(),xo=bL(),ML=dL(),E3r=TL(),d3r=NL(),_3r=SL(),T3r=FL(),A3r=PL(),N3r=xo(A3r)-1,O3r=1-ML;function S3r(r){var e,t,i,a;return i=(r&E3r)>>>15,t=(r&d3r)>>>T3r,e=r&_3r,t===N3r?e===0?i===1?w3r:b3r:NaN:t===0?e===0?i===1?-0:0:(a=xo(O3r)*(e/1024),i?-a:a):(a=xo(t-ML)*(1+e/1024),i?-a:a)}RL.exports=S3r});var BL=s((ZTr,CL)=>{"use strict";var I3r=VL();CL.exports=I3r});var jL=s(($Tr,kL)=>{"use strict";var F3r=pa(),L3r=ha();function P3r(r,e){var t,i;for(t=e.length,i=0;i<t;i++)r[i]=L3r(F3r(e[i]));return r}kL.exports=P3r});var HL=s((JTr,GL)=>{"use strict";var M3r=pa(),R3r=ha();function V3r(r){var e,t;for(e=[];t=r.next(),!t.done;)e.push(R3r(M3r(t.value)));return e}GL.exports=V3r});var WL=s((zTr,UL)=>{"use strict";var C3r=pa(),B3r=ha();function k3r(r,e,t){var i,a,n;for(i=[],n=-1;a=r.next(),!a.done;)n+=1,i.push(B3r(C3r(e.call(t,a.value,n))));return i}UL.exports=k3r});var $L=s((xTr,ZL)=>{"use strict";var j3r=xt(),ma=yt().isPrimitive,G3r=Qi().primitives,rf=At(),DL=Ki(),yr=Ve(),Lr=Oe().isPrimitive,ya=Hr().isPrimitive,YL=Kr().isPrimitive,ef=Zt(),Zn=k(),Te=$i(),$n=ri(),C=j(),H3r=pF(),U3r=lr(),V=Q(),oe=ht(),W3r=pa(),It=ha(),ar=BL(),D3r=Yo(),Y3r=jL(),XL=HL(),X3r=WL(),jr=oe.BYTES_PER_ELEMENT,KL=j3r();function Y(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Float16Array"&&r.BYTES_PER_ELEMENT===jr}function QL(r){return r===L}function K3r(r,e){return t;function t(){return r._get(e)}}function Q3r(r,e){return t;function t(i){r.set([i],e)}}function L(){var r,e,t,i,a,n;if(e=arguments.length,!(this instanceof L))return e===0?new L:e===1?new L(arguments[0]):e===2?new L(arguments[0],arguments[1]):new L(arguments[0],arguments[1],arguments[2]);if(e===0)t=new oe(0);else if(e===1)if(a=arguments[0],ma(a))t=new oe(a);else if(rf(a))Y(a)?(t=new oe(a.length),D3r.ndarray(a.length,new oe(a.buffer,a.byteOffset,a.length),1,0,t,1,0)):t=Y3r(new oe(a.length),a);else if(DL(a)){if(!Lr(a.byteLength/jr))throw new RangeError(V("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",jr,a.byteLength));t=new oe(a)}else if(ef(a)){if(KL===!1)throw new TypeError(V("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",a));if(!yr(a[Te]))throw new TypeError(V("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",a));if(t=a[Te](),!yr(t.next))throw new TypeError(V("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",a));t=new oe(XL(t))}else throw new TypeError(V("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",a));else{if(t=arguments[0],!DL(t))throw new TypeError(V("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ma(r))throw new TypeError(V("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Lr(r/jr))throw new RangeError(V("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",jr,r));if(e===2){if(i=t.byteLength-r,!Lr(i/jr))throw new RangeError(V("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",jr,i));t=new oe(t,r)}else{if(i=arguments[2],!ma(i))throw new TypeError(V("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*jr>t.byteLength-r)throw new RangeError(V("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*jr));t=new oe(t,r,i)}}for(C(this,"_buffer",t),C(this,"_length",t.length),n=0;n<t.length;n++)H3r(this,n,K3r(this,n),Q3r(this,n));return this}C(L,"BYTES_PER_ELEMENT",jr);C(L,"name","Float16Array");C(L,"from",function(e){var t,i,a,n,u,o,f,l;if(!yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!QL(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(i=arguments.length,i>1){if(a=arguments[1],!yr(a))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(rf(e)){if(a){for(f=e.length,n=new this(f),u=n._buffer,l=0;l<f;l++)u[l]=It(W3r(a.call(t,e[l],l)));return n}return new this(e)}if(ef(e)&&KL&&yr(e[Te])){if(u=e[Te](),!yr(u.next))throw new TypeError(V("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=X3r(u,a,t):o=XL(u),o instanceof Error)throw o;for(f=o.length,n=new this(f),u=n._buffer,l=0;l<f;l++)u[l]=o[l];return n}throw new TypeError(V("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});C(L,"of",function(){var e,t;if(!yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!QL(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});C(L.prototype,"at",function(e){if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!Lr(e))throw new TypeError(V("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return ar(this._buffer[e])});$n(L.prototype,"buffer",function(){return this._buffer.buffer});$n(L.prototype,"byteLength",function(){return this._buffer.byteLength});$n(L.prototype,"byteOffset",function(){return this._buffer.byteOffset});C(L.prototype,"BYTES_PER_ELEMENT",L.BYTES_PER_ELEMENT);C(L.prototype,"copyWithin",function(e,t){if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");return arguments.length===2?this._buffer.copyWithin(e,t):this._buffer.copyWithin(e,t,arguments[2]),this});C(L.prototype,"entries",function(){var e,t,i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");return e=this,a=this._buffer,i=this._length,u=-1,t={},C(t,"next",o),C(t,"return",f),Te&&C(t,Te,l),t;function o(){return u+=1,n||u>=i?{done:!0}:{value:[u,ar(a[u])],done:!1}}function f(v){return n=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return e.entries()}});C(L.prototype,"every",function(e,t){var i,a;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(!e.call(t,ar(i[a]),a,this))return!1;return!0});C(L.prototype,"fill",function(e,t,i){var a,n,u,o;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!ya(e))throw new TypeError(V("invalid argument. First argument must be a number. Value: `%s`.",e));if(a=this._buffer,n=this._length,arguments.length>1){if(!Lr(t))throw new TypeError(V("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=n,t<0&&(t=0)),arguments.length>2){if(!Lr(i))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",i));i<0&&(i+=n,i<0&&(i=0)),i>n&&(i=n)}else i=n}else t=0,i=n;for(o=It(e),u=t;u<i;u++)a[u]=o;return this});C(L.prototype,"filter",function(e,t){var i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=[],n=0;n<this._length;n++)u=ar(i[n]),e.call(t,u,n,this)&&a.push(u);return new this.constructor(a)});C(L.prototype,"find",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=0;n<this._length;n++)if(a=ar(i[n]),e.call(t,a,n,this))return a});C(L.prototype,"findIndex",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=0;n<this._length;n++)if(a=ar(i[n]),e.call(t,a,n,this))return n;return-1});C(L.prototype,"findLast",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=this._length-1;n>=0;n--)if(a=ar(i[n]),e.call(t,a,n,this))return a});C(L.prototype,"findLastIndex",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=this._length-1;n>=0;n--)if(a=ar(i[n]),e.call(t,a,n,this))return n;return-1});C(L.prototype,"forEach",function(e,t){var i,a;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)e.call(t,ar(i[a]),a,this)});C(L.prototype,"_get",function(e){if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!ma(e))throw new TypeError(V("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return ar(this._buffer[e])});C(L.prototype,"includes",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!ya(e))throw new TypeError(V("invalid argument. First argument must be a number. Value: `%s`.",e));if(arguments.length>1){if(!Lr(t))throw new TypeError(V("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(i=this._buffer,n=It(e),a=t;a<this._length;a++)if(n===i[a])return!0;return!1});C(L.prototype,"indexOf",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!ya(e))throw new TypeError(V("invalid argument. First argument must be a number. Value: `%s`.",e));if(arguments.length>1){if(!Lr(t))throw new TypeError(V("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(i=this._buffer,n=It(e),a=t;a<this._length;a++)if(n===i[a])return a;return-1});C(L.prototype,"join",function(e){var t,i,a;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(arguments.length>0){if(!YL(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e))}else e=",";for(t=this._buffer,i=[],a=0;a<this._length;a++)i.push(ar(t[a]));return i.join(e)});C(L.prototype,"keys",function(){var e,t,i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");return e=this,i=this._length,n=-1,t={},C(t,"next",u),C(t,"return",o),Te&&C(t,Te,f),t;function u(){return n+=1,a||n>=i?{done:!0}:{value:n,done:!1}}function o(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function f(){return e.keys()}});C(L.prototype,"lastIndexOf",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!ya(e))throw new TypeError(V("invalid argument. First argument must be a number. Value: `%s`.",e));if(arguments.length>1){if(!Lr(t))throw new TypeError(V("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(i=this._buffer,n=It(e),a=t;a>=0;a--)if(n===i[a])return a;return-1});$n(L.prototype,"length",function(){return this._length});C(L.prototype,"map",function(e,t){var i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError("invalid argument. First argument must be a function. Value: `%s`.",e);for(n=this._buffer,a=new this.constructor(this._length),i=a._buffer,u=0;u<this._length;u++)i[u]=It(e.call(t,ar(n[u]),u,this));return a});C(L.prototype,"reduce",function(e,t){var i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,a=this._length,arguments.length>1)n=t,u=0;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=ar(i[0]),u=1}for(;u<a;u++)n=e(n,ar(i[u]),u,this);return n});C(L.prototype,"reduceRight",function(e,t){var i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));if(i=this._buffer,a=this._length,arguments.length>1)n=t,u=a-1;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=ar(i[a-1]),u=a-2}for(;u>=0;u--)n=e(n,ar(i[u]),u,this);return n});C(L.prototype,"reverse",function(){var e,t,i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");for(e=this._buffer,i=this._length,a=U3r(i/2),n=0;n<a;n++)u=i-n-1,t=e[n],e[n]=e[u],e[u]=t;return this});C(L.prototype,"set",function(e){var t,i,a,n,u,o,f,l;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!rf(e))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(a=this._buffer,arguments.length>1){if(i=arguments[1],!ma(i))throw new TypeError(V("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(o=e.length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(Y(e)?(t=e._buffer,u=!0):(t=e,u=!1),l=a.byteOffset+i*jr,t.buffer===a.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(n=new oe(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}if(u)for(f=0;f<o;i++,f++)a[i]=t[f];else for(f=0;f<o;i++,f++)a[i]=It(t[f])});C(L.prototype,"slice",function(e,t){var i,a,n,u,o,f;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(u=this._buffer,o=this._length,arguments.length===0)e=0,t=o;else{if(!Lr(e))throw new TypeError(V("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=o,e<0&&(e=0)),arguments.length===1)t=o;else{if(!Lr(t))throw new TypeError(V("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o)}}for(e<t?i=t-e:i=0,n=new this.constructor(i),a=n._buffer,f=0;f<i;f++)a[f]=u[f+e];return n});C(L.prototype,"some",function(e,t){var i,a;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,a=0;a<this._length;a++)if(e.call(t,ar(i[a]),a,this))return!0;return!1});C(L.prototype,"sort",function(e){var t;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(t=this._buffer,arguments.length===0)return t.sort(i),this;if(!yr(e))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",e));return t.sort(a),this;function i(n,u){var o=ar(n),f=ar(u);return Zn(o)&&Zn(f)?0:Zn(o)?1:Zn(f)||o<f?-1:o>f?1:0}function a(n,u){return e(ar(n),ar(u))}});C(L.prototype,"subarray",function(e,t){var i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(a=this._buffer,n=this._length,arguments.length===0)e=0,t=n;else{if(!Lr(e))throw new TypeError(V("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length===1)t=n;else{if(!Lr(t))throw new TypeError(V("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n)}}return e>=n?(n=0,i=a.byteLength):e>=t?(n=0,i=a.byteOffset+e*jr):(n=t-e,i=a.byteOffset+e*jr),new this.constructor(a.buffer,i,n<0?0:n)});C(L.prototype,"toLocaleString",function(e,t){var i,a,n,u,o;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(arguments.length===0)a=[];else if(YL(e)||G3r(e))a=e;else throw new TypeError(V("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",e));if(arguments.length<2)i={};else if(ef(t))i=t;else throw new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t));for(u=this._buffer,n=[],o=0;o<this._length;o++)n.push(ar(u[o]));return n.toLocaleString(a,i)});C(L.prototype,"toReversed",function(){var e,t,i,a,n;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");for(i=this._length,t=new this.constructor(i),a=this._buffer,e=t._buffer,n=0;n<i;n++)e[n]=a[i-n-1];return t});C(L.prototype,"toSorted",function(e){var t;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");return t=new this.constructor(this),arguments.length===0?t.sort():t.sort(e)});C(L.prototype,"toString",function(){var e,t,i;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");for(t=this._buffer,e=[],i=0;i<this._length;i++)e.push(ar(t[i]));return e.join(",")});C(L.prototype,"values",function(){var e,t,i,a,n,u;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");return t=this,n=this._buffer,i=this._length,u=-1,e={},C(e,"next",o),C(e,"return",f),Te&&C(e,Te,l),e;function o(){return u+=1,a||u>=i?{done:!0}:{value:ar(n[u]),done:!1}}function f(v){return a=!0,arguments.length?{value:v,done:!0}:{done:!0}}function l(){return t.values()}});C(L.prototype,"with",function(e,t){var i,a;if(!Y(this))throw new TypeError("invalid invocation. `this` is not a floating-point number array.");if(!Lr(e))throw new TypeError(V("invalid argument. First argument must be an integer. Value: `%s`.",e));if(a=this._length,e<0&&(e+=a),e<0||e>=a)throw new RangeError(V("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!ya(t))throw new TypeError(V("invalid argument. Second argument must be a number. Value: `%s`.",t));return i=new this.constructor(this),i[e]=t,i});ZL.exports=L});var zL=s((rAr,JL)=>{"use strict";var Z3r=typeof Float16Array=="function"?Float16Array:void 0;JL.exports=Z3r});var rP=s((eAr,xL)=>{"use strict";var $3r=fF(),J3r=$L(),z3r=zL(),tf;$3r()?tf=z3r:tf=J3r;xL.exports=tf});var tP=s((tAr,eP)=>{"use strict";var x3r=Xi(),r6r=Ge(),e6r=Yi(),t6r=Di(),i6r=ht(),a6r=Wi(),n6r=Sr(),u6r=rP(),s6r=be(),o6r=Tr(),f6r=[o6r,s6r,u6r,a6r,n6r,t6r,i6r,x3r,r6r,e6r];eP.exports=f6r});var iP=s((iAr,v6r)=>{v6r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float16Array","Float32Array","Float64Array"]});var fP=s((aAr,oP)=>{"use strict";var l6r=nt(),c6r=eF(),uP=Ot(),p6r=d0(),h6r=Tr(),aP=tP(),nP=iP(),Jn=p6r()?uP(h6r):sP;Jn=c6r(Jn)==="TypedArray"?Jn:sP;function sP(){}function m6r(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof Jn)return!0;for(t=0;t<aP.length;t++)if(r instanceof aP[t])return!0;for(;r;){for(e=l6r(r),t=0;t<nP.length;t++)if(nP[t]===e)return!0;r=uP(r)}return!1}oP.exports=m6r});var lP=s((nAr,vP)=>{"use strict";var y6r=fP();vP.exports=y6r});var pP=s((uAr,cP)=>{"use strict";var g6r=In(),q6r=Pn(),w6r=[q6r,g6r];cP.exports=w6r});var hP=s((sAr,b6r)=>{b6r.exports=["Complex64Array","Complex128Array"]});var qP=s((oAr,gP)=>{"use strict";var E6r=nt(),d6r=Ot(),mP=pP(),yP=hP();function _6r(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<mP.length;t++)if(r instanceof mP[t])return!0;for(;r;){for(e=E6r(r),t=0;t<yP.length;t++)if(yP[t]===e)return!0;r=d6r(r)}return!1}gP.exports=_6r});var bP=s((fAr,wP)=>{"use strict";var T6r=qP();wP.exports=T6r});var dP=s((vAr,EP)=>{"use strict";var A6r=Rn(),N6r=nt();function O6r(r){return r instanceof A6r||N6r(r)==="BooleanArray"}EP.exports=O6r});var TP=s((lAr,_P)=>{"use strict";var S6r=dP();_P.exports=S6r});var NP=s((cAr,AP)=>{"use strict";var I6r=Ge();function F6r(r,e){return new I6r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,r.length-e)}AP.exports=F6r});var SP=s((pAr,OP)=>{"use strict";var L6r=NP();OP.exports=L6r});var FP=s((hAr,IP)=>{"use strict";var P6r=_r(),zn=da();function M6r(){return typeof zn=="function"&&typeof zn("foo")=="symbol"&&P6r(zn,"hasInstance")&&typeof zn.hasInstance=="symbol"}IP.exports=M6r});var af=s((mAr,LP)=>{"use strict";var R6r=FP();LP.exports=R6r});var MP=s((yAr,PP)=>{"use strict";var V6r=af(),C6r=V6r()?Symbol.hasInstance:null;PP.exports=C6r});var VP=s((gAr,RP)=>{"use strict";var B6r=MP();RP.exports=B6r});var BP=s((qAr,CP)=>{"use strict";var k6r=af(),j6r=VP(),G6r=Q(),H6r=k6r();function U6r(r,e){if(typeof e!="function"&&!(H6r&&typeof e=="object"&&typeof e[j6r]=="function"))throw new TypeError(G6r("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}CP.exports=U6r});var jP=s((wAr,kP)=>{"use strict";var W6r=BP();kP.exports=W6r});var HP=s((bAr,GP)=>{"use strict";var D6r=Xi(),Y6r=Ge(),X6r=Yi(),K6r=Di(),Q6r=ht(),Z6r=Wi(),$6r=Sr(),J6r=be(),z6r=Tr(),x6r=In(),rpr=Pn(),epr=Rn(),tpr=[[z6r,"Float64Array"],[J6r,"Float32Array"],[Z6r,"Int32Array"],[$6r,"Uint32Array"],[K6r,"Int16Array"],[Q6r,"Uint16Array"],[D6r,"Int8Array"],[Y6r,"Uint8Array"],[X6r,"Uint8ClampedArray"],[x6r,"Complex64Array"],[rpr,"Complex128Array"],[epr,"BooleanArray"]];GP.exports=tpr});var WP=s((EAr,UP)=>{"use strict";var ipr=jP(),apr=nt(),npr=Ot(),ai=HP();function upr(r){var e,t;for(t=0;t<ai.length;t++)if(ipr(r,ai[t][0]))return ai[t][1];for(;r;){for(e=apr(r),t=0;t<ai.length;t++)if(e===ai[t][1])return ai[t][1];r=npr(r)}}UP.exports=upr});var YP=s((dAr,DP)=>{"use strict";var spr=lP(),opr=bP(),fpr=TP(),vpr=An(),lpr=Nn(),cpr=SP(),ppr=Q(),hpr=WP();function mpr(r){var e,t,i;if(spr(r))e=r;else if(opr(r))r.BYTES_PER_ELEMENT===8?e=vpr(r,0):e=lpr(r,0);else if(fpr(r))e=cpr(r,0);else throw new TypeError(ppr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:hpr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}DP.exports=mpr});var KP=s((_Ar,XP)=>{"use strict";var ypr=YP();XP.exports=ypr});var nf=s((TAr,QP)=>{"use strict";var gpr=vi(),qpr=lr(),wpr=gpr-1;function bpr(){var r=qpr(1+wpr*Math.random());return r>>>0}QP.exports=bpr});var pf=s((AAr,nM)=>{"use strict";var ke=j(),ot=ri(),ZP=TI(),uf=_r(),Epr=ua(),dpr=At(),$P=w0(),_pr=Zi().isPrimitive,JP=Ao().isPrimitive,tM=on(),iM=vi(),Pr=Sr(),Tpr=Ke(),cf=CI(),ni=Yo(),Apr=KP(),Rr=Q(),zP=nf(),gr=624,sf=397,xP=iM>>>0,Npr=19650218,of=2147483648,ff=2147483647,Opr=1812433253,Spr=1664525,Ipr=1566083941,Fpr=2636928640,Lpr=4022730752,Ppr=2567483615,vf=[0,Ppr>>>0],aM=1/(tM+1),Mpr=67108864,Rpr=2147483648,lf=1,Vpr=tM*aM,xn=1,r0=3,ft=2,vt=gr+3,Mr=gr+5,ga=gr+6;function rM(r,e){var t;return e?t="option":t="argument",r.length<ga+1?new RangeError(Rr("invalid %s. `state` array has insufficient length.",t)):r[0]!==xn?new RangeError(Rr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,xn,r[0])):r[1]!==r0?new RangeError(Rr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,r0,r[1])):r[ft]!==gr?new RangeError(Rr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,gr,r[ft])):r[vt]!==1?new RangeError(Rr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[vt])):r[Mr]!==r.length-ga?new RangeError(Rr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ga,r[Mr])):null}function eM(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=cf(t,Opr)+i>>>0;return r}function Cpr(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=Tpr(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=cf(a,Spr)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=cf(a,Ipr)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=Rpr,r}function Bpr(r){var e,t,i,a;for(a=gr-sf,t=0;t<a;t++)e=r[t]&of|r[t+1]&ff,r[t]=r[t+sf]^e>>>1^vf[e&lf];for(i=gr-1;t<i;t++)e=r[t]&of|r[t+1]&ff,r[t]=r[t-a]^e>>>1^vf[e&lf];return e=r[i]&of|r[0]&ff,r[i]=r[sf-1]^e>>>1^vf[e&lf],r}function kpr(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Epr(r))throw new TypeError(Rr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uf(r,"copy")&&(i.copy=r.copy,!_pr(r.copy)))throw new TypeError(Rr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(uf(r,"state")){if(t=r.state,i.state=!0,!$P(t))throw new TypeError(Rr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=rM(t,!0),u)throw u;i.copy===!1?e=t:(e=new Pr(t.length),ni(t.length,t,1,e,1)),t=new Pr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,gr),a=new Pr(e.buffer,e.byteOffset+(Mr+1)*e.BYTES_PER_ELEMENT,t[Mr])}if(a===void 0)if(uf(r,"seed"))if(a=r.seed,i.seed=!0,JP(a)){if(a>xP)throw new RangeError(Rr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(dpr(a)===!1||a.length<1)throw new TypeError(Rr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!JP(a))throw new TypeError(Rr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>xP)throw new RangeError(Rr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new Pr(ga+n),e[0]=xn,e[1]=r0,e[ft]=gr,e[vt]=1,e[vt+1]=gr,e[Mr]=n,ni.ndarray(n,a,1,0,e,1,Mr+1),t=new Pr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,gr),a=new Pr(e.buffer,e.byteOffset+(Mr+1)*e.BYTES_PER_ELEMENT,n),t=eM(t,gr,Npr),t=Cpr(t,gr,a,n)}else a=zP()>>>0}else a=zP()>>>0;return t===void 0&&(e=new Pr(ga+1),e[0]=xn,e[1]=r0,e[ft]=gr,e[vt]=1,e[vt+1]=gr,e[Mr]=1,e[Mr+1]=a,t=new Pr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,gr),a=new Pr(e.buffer,e.byteOffset+(Mr+1)*e.BYTES_PER_ELEMENT,1),t=eM(t,gr,a)),ke(m,"NAME","mt19937"),ot(m,"seed",o),ot(m,"seedLength",f),ZP(m,"state",c,p),ot(m,"stateLength",l),ot(m,"byteLength",v),ke(m,"toJSON",h),ke(m,"MIN",0),ke(m,"MAX",iM),ke(m,"normalized",y),ke(y,"NAME",m.NAME),ot(y,"seed",o),ot(y,"seedLength",f),ZP(y,"state",c,p),ot(y,"stateLength",l),ot(y,"byteLength",v),ke(y,"toJSON",h),ke(y,"MIN",0),ke(y,"MAX",Vpr),m;function o(){var g=e[Mr];return ni(g,a,1,new Pr(g),1)}function f(){return e[Mr]}function l(){return e.length}function v(){return e.byteLength}function c(){var g=e.length;return ni(g,e,1,new Pr(g),1)}function p(g){var q;if(!$P(g))throw new TypeError(Rr("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=rM(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?ni(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Pr(g.length)),ni(g.length,g,1,e,1)),t=new Pr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,gr),a=new Pr(e.buffer,e.byteOffset+(Mr+1)*e.BYTES_PER_ELEMENT,e[Mr])}function h(){var g={};return g.type="PRNG",g.name=m.NAME,g.state=Apr(e),g.params=[],g}function m(){var g,q;return q=e[vt+1],q>=gr&&(t=Bpr(t),q=0),g=t[q],e[vt+1]=q+1,g^=g>>>11,g^=g<<7&Fpr,g^=g<<15&Lpr,g^=g>>>18,g>>>0}function y(){var g=m()>>>5,q=m()>>>6;return(g*Mpr+q)*aM}}nM.exports=kpr});var sM=s((NAr,uM)=>{"use strict";var jpr=pf(),Gpr=nf(),Hpr=jpr({seed:Gpr()});uM.exports=Hpr});var vM=s((OAr,fM)=>{"use strict";var Upr=j(),oM=sM(),Wpr=pf();Upr(oM,"factory",Wpr);fM.exports=oM});var lM=s((SAr,Dpr)=>{Dpr.exports={copy:"shallow"}});var hM=s((IAr,pM)=>{"use strict";var Ypr=_r(),Xpr=Kr().isPrimitive,Kpr=ua(),Qpr=Hn(),hf=Q(),cM=["deep","shallow","none"];function Zpr(r,e){if(!Kpr(e))return new TypeError(hf("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ypr(e,"copy")){if(r.copy=e.copy,!Xpr(r.copy))return new TypeError(hf("invalid option. `%s` option must be a string. Option: `%s`.","copy",r.copy));if(Qpr(cM,r.copy)===-1)return new TypeError(hf('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"copy",cM.join('", "'),r.copy))}return null}pM.exports=Zpr});var mf=s((FAr,wM)=>{"use strict";var mM=j(),$pr=Z0(),Jpr=su(),zpr=Kr().isPrimitive,yM=bI(),xpr=lr(),gM=vM().factory,r4r=Q(),e4r=_r(),t4r=lM(),qM=hM();function i4r(r){var e,t,i;if(e=yM(t4r),arguments.length&&(i=qM(e,r),i))throw i;return r&&e4r(r,"seed")?t=gM({seed:r.seed}):t=gM(),mM(a,"seed",t.seed),mM(a,"PRNG",t),t=t.normalized,a;function a(n,u){var o,f,l,v,c,p,h,m,y,g;if(!($pr(n)||Jpr(n)))throw new TypeError(r4r("invalid argument. First argument must be array-like. Value: `%s`.",n));if(arguments.length>1&&(v={},c=qM(v,u),c))throw c;for(l=v&&v.copy?v.copy:e.copy,o=zpr(n),o&&(n=n.split(""),l="none"),f=0,l==="shallow"?f+=1:l==="deep"&&(f+=2),m=n.length,p=yM(n,f),y=m-1;y>0;y--)g=xpr(t()*(y+1)),h=p[y],p[y]=p[g],p[g]=h;return o&&(p=n.join("")),p}}wM.exports=i4r});var EM=s((LAr,bM)=>{"use strict";var a4r=mf(),n4r=a4r();bM.exports=n4r});var TM=s((PAr,_M)=>{"use strict";var u4r=j(),dM=EM(),s4r=mf();u4r(dM,"factory",s4r);_M.exports=dM});var gf=s((MAr,AM)=>{"use strict";var o4r=lr(),f4r=128;function yf(r,e,t,i){var a,n,u,o,f,l,v,c,p,h,m,y,g;if(r<=0)return 0;if(a=i,t===0)return r*e[a];if(r<8){for(m=e[a],a+=t,g=1;g<r;g++)m+=e[a],a+=t;return m}if(r<=f4r){for(n=e[a],u=e[a+t],o=e[a+2*t],f=e[a+3*t],l=e[a+4*t],v=e[a+5*t],c=e[a+6*t],p=e[a+7*t],a+=8*t,h=r%8,g=8;g<r-h;g+=8)n+=e[a],u+=e[a+t],o+=e[a+2*t],f+=e[a+3*t],l+=e[a+4*t],v+=e[a+5*t],c+=e[a+6*t],p+=e[a+7*t],a+=8*t;for(m=n+u+(o+f)+(l+v+(c+p));g<r;g++)m+=e[a],a+=t;return m}return y=o4r(r/2),y-=y%8,yf(y,e,t,a)+yf(r-y,e,t,a+y*t)}AM.exports=yf});var OM=s((RAr,NM)=>{"use strict";var v4r=at(),l4r=gf();function c4r(r,e,t){return l4r(r,e,t,v4r(r,t))}NM.exports=c4r});var qf=s((VAr,IM)=>{"use strict";var p4r=j(),SM=OM(),h4r=gf();p4r(SM,"ndarray",h4r);IM.exports=SM});var wf=s((CAr,FM)=>{"use strict";var m4r=qf().ndarray;function y4r(r,e,t,i,a){return r<=0?0:r*e+m4r(r,t,i,a)}FM.exports=y4r});var PM=s((BAr,LM)=>{"use strict";var g4r=at(),q4r=wf();function w4r(r,e,t,i){return q4r(r,e,t,i,g4r(r,i))}LM.exports=w4r});var VM=s((kAr,RM)=>{"use strict";var b4r=j(),MM=PM(),E4r=wf();b4r(MM,"ndarray",E4r);RM.exports=MM});var bf=s((jAr,CM)=>{"use strict";var d4r=qf().ndarray,_4r=VM().ndarray;function T4r(r,e,t,i){var a,n;return r<=0?NaN:r===1||t===0?e[i]:(a=d4r(r,e,t,i)/r,n=_4r(r,-a,e,t,i)/r,a+n)}CM.exports=T4r});var kM=s((GAr,BM)=>{"use strict";var A4r=at(),N4r=bf();function O4r(r,e,t){return N4r(r,e,t,A4r(r,t))}BM.exports=O4r});var Ef=s((HAr,GM)=>{"use strict";var S4r=j(),jM=kM(),I4r=bf();S4r(jM,"ndarray",I4r);GM.exports=jM});var UM=s((UAr,HM)=>{"use strict";var F4r=Ef();function L4r(r,e,t){return F4r(r,e,t)}HM.exports=L4r});var DM=s((WAr,WM)=>{"use strict";var P4r=Ef().ndarray;function M4r(r,e,t,i){return P4r(r,e,t,i)}WM.exports=M4r});var KM=s((DAr,XM)=>{"use strict";var R4r=j(),YM=UM(),V4r=DM();R4r(YM,"ndarray",V4r);XM.exports=YM});var JM=s((YAr,$M)=>{"use strict";var QM=k(),C4r=hi(),B4r=x(),ZM=rr();function k4r(r,e){var t;return QM(r)||QM(e)||e<=0?NaN:(t=B4r(e)*C4r(e/2,.5),ZM(e/(e+ZM(r,2)),(1+e)/2)/t)}$M.exports=k4r});var eR=s((XAr,rR)=>{"use strict";var j4r=pn(),zM=k(),G4r=hi(),H4r=x(),xM=rr();function U4r(r){var e,t;if(zM(r)||r<=0)return j4r(NaN);return t=H4r(r)*G4r(r/2,.5),e=(1+r)/2,i;function i(a){return zM(a)?NaN:xM(r/(r+xM(a,2)),e)/t}}rR.exports=U4r});var aR=s((KAr,iR)=>{"use strict";var W4r=j(),tR=JM(),D4r=eR();W4r(tR,"factory",D4r);iR.exports=tR});var sR=s((QAr,uR)=>{"use strict";var Y4r=$3(),X4r=fO(),K4r=TM().factory,Q4r=KM(),ui=Tr(),Z4r=aR(),$4r=Ss(),nR=H(),df=2;function J4r(r){var e=String(r).split(/[\s,;]+/),t=[],i,a;for(a=0;a<e.length;a++)e[a]!==""&&(i=Number(e[a]),Number.isFinite(i)&&t.push(i));return t}function z4r(r){var e=Y4r(),t;for(t=0;t<r.length;t++)e(r[t]);return e()||{count:0}}function x4r(r,e,t){var i;if(r.length<df||e.length<df)throw new RangeError("Each group needs at least "+df+" scores.");return i=X4r(e,r,{alpha:t===void 0?.05:t}),{statistic:i.statistic,df:i.df,pValue:i.pValue,ci:i.ci,alpha:i.alpha,rejected:i.rejected,difference:i.xmean-i.ymean,method:i.method}}function e0(r,e,t){return Q4r(t,r.subarray(e,e+t),1)}function r5r(r,e,t){var i,a,n,u,o,f,l,v,c,p;for(t=t||{},u=t.trials||5e3,n=K4r({seed:t.seed===void 0?1234:t.seed}),l=r.length,v=e.length,o=r.concat(e),i=e0(new ui(e),0,v)-e0(new ui(r),0,l),f=new ui(u),a=0,p=0;p<u;p++)c=new ui(n(o)),f[p]=e0(c,l,v)-e0(c,0,l),nR(f[p])>=nR(i)-1e-12&&(a+=1);return{observed:i,diffs:f,trials:u,pValue:(a+1)/(u+1)}}function e5r(r,e,t){var i,a,n,u,o,f;for(e=e===void 0?.05:e,t=t||201,i=$4r(1-e/2,r),a=Math.max(4,i*1.6),n=new ui(t),u=new ui(t),f=0;f<t;f++)o=-a+2*a*f/(t-1),n[f]=o,u[f]=Z4r(o,r);return{x:n,y:u,critical:i,limit:a}}uR.exports={parseScores:J4r,summarize:z4r,compare:x4r,permutationTest:r5r,tCurve:e5r}});var lt=sR(),_f=5e3,oR={before:"62, 70, 58, 66, 71, 64, 59, 68, 63, 67",after:"71, 78, 69, 74, 80, 72, 70, 77, 75, 73"},t5r={before:"68, 74, 61, 70, 77, 65, 72, 69",after:"70, 66, 75, 63, 71, 73, 68, 67"},$=function(e){return document.getElementById(e)};function fe(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}function xr(r,e){return r==null||Number.isNaN(r)?"\u2013":r.toFixed(e===void 0?1:e)}function i5r(r){return r<.001?"p < 0.001":"p = "+r.toFixed(3)}function a5r(r,e,t){var i=Array.from(r).sort(function(f,l){return f-l}),a=1/0,n,u;for(u=1;u<i.length;u++)n=i[u]-i[u-1],n>1e-9&&n<a&&(a=n);return!Number.isFinite(a)||e/a>4e3?e/t:a*Math.max(1,Math.round(e/a/t))}function fR(r){var e=r*100;return e<.1?"less than 0.1%":(e<10?e.toFixed(1):e.toFixed(0))+"%"}function vR(r){var e=window.devicePixelRatio||1,t=r.clientWidth,i=Math.max(200,Math.round(t*.42)),a;return r.width=Math.round(t*e),r.height=Math.round(i*e),r.style.height=i+"px",a=r.getContext("2d"),a.setTransform(e,0,0,e,0,0),a.clearRect(0,0,t,i),a.font="12px "+fe("--sans"),{ctx:a,w:t,h:i}}function lR(r,e,t,i,a,n,u){var o;for(r.strokeStyle=fe("--line"),r.fillStyle=fe("--muted"),r.lineWidth=1,r.beginPath(),r.moveTo(e,i+.5),r.lineTo(t,i+.5),r.stroke(),r.textAlign="center",o=0;o<a.length;o++)r.fillText(a[o].label,n(a[o].value),i+16);r.fillText(u,(e+t)/2,i+34)}function cR(r,e,t){var i=e-r,a=Math.pow(10,Math.floor(Math.log10(i/t))),n=i/t/a,u=[],o;for(n>=7.5?a*=10:n>=3.5?a*=5:n>=1.5&&(a*=2),o=Math.ceil(r/a)*a;o<=e+1e-9;o+=a)u.push({value:o,label:Math.abs(o)<1e-9?"0":String(Math.round(o*100)/100)});return u}function n5r(r,e){var t=vR(r),i=t.ctx,a={l:12,r:12,t:14,b:44},n=e.diffs,u=Math.min(Math.min.apply(null,n),-Math.abs(e.observed)),o=Math.max(Math.max.apply(null,n),Math.abs(e.observed)),f,l,v,c,p,h,m,y,g,q;for(l=Math.max(Math.abs(u),Math.abs(o))*1.08||1,p=a5r(n,2*l,t.w<500?24:40),v=2*Math.ceil(l/p-.5)+1,u=-p*v/2,o=-u,f=new Array(v).fill(0),q=0;q<n.length;q++)g=Math.min(v-1,Math.max(0,Math.floor((n[q]-u)/p))),f[g]+=1;for(c=Math.max.apply(null,f),h=function(E){return a.l+(E-u)/(o-u)*(t.w-a.l-a.r)},m=(t.w-a.l-a.r)/v,q=0;q<v;q++){var b=u+(q+.5)*(o-u)/v,w=f[q]/c*(t.h-a.t-a.b);i.fillStyle=Math.abs(b)>=Math.abs(e.observed)?fe("--warn"):fe("--bars"),i.fillRect(a.l+q*m+1,t.h-a.b-w,Math.max(1,m-2),w)}lR(i,a.l,t.w-a.r,t.h-a.b,cR(u,o,t.w<500?4:6),h,t.w<500?"after \u2212 before, by chance":"difference in average score (after \u2212 before), by chance alone"),y=h(e.observed),i.strokeStyle=fe("--accent"),i.lineWidth=2,i.beginPath(),i.moveTo(y,a.t),i.lineTo(y,t.h-a.b),i.stroke(),i.fillStyle=fe("--accent"),i.textAlign=y>t.w*.75?"right":"left",i.fillText("you: "+(e.observed>0?"+":"")+xr(e.observed,1),y+(y>t.w*.75?-6:6),a.t+10)}function u5r(r,e,t){var i=vR(r),a=i.ctx,n={l:12,r:12,t:14,b:44},u=Math.max(e.limit,Math.abs(t)*1.1),o=Math.max.apply(null,e.y),f=function(m){return n.l+(m+u)/(2*u)*(i.w-n.l-n.r)},l=function(m){return i.h-n.b-m/o*(i.h-n.t-n.b)},v=function(m,y){var g;for(a.beginPath(),a.moveTo(f(m),l(0)),g=0;g<e.x.length;g++)e.x[g]>=m&&e.x[g]<=y&&a.lineTo(f(e.x[g]),l(e.y[g]));a.lineTo(f(y),l(0)),a.closePath(),a.fill()},c,p;for(a.fillStyle=fe("--warn-soft"),v(-u,-e.critical),v(e.critical,u),a.strokeStyle=fe("--ink"),a.lineWidth=1.5,a.beginPath(),p=0;p<e.x.length;p++)p===0?a.moveTo(f(e.x[p]),l(e.y[p])):a.lineTo(f(e.x[p]),l(e.y[p]));a.stroke(),lR(a,n.l,i.w-n.r,i.h-n.b,cR(-u,u,i.w<500?5:8),f,"t statistic"),c=f(t),a.strokeStyle=fe("--accent"),a.lineWidth=2,a.beginPath(),a.moveTo(c,n.t),a.lineTo(c,i.h-n.b),a.stroke(),a.fillStyle=fe("--accent"),a.textAlign=c>i.w*.75?"right":"left",a.fillText("your t = "+xr(t,2),c+(c>i.w*.75?-6:6),n.t+10)}function s5r(r,e){var t=[["Quizzes","count",0],["Average","mean",1],["Spread (std. dev.)","stdev",1],["Lowest","min",0],["Highest","max",0]];$("summary").innerHTML=t.map(function(a){return"<tr><td>"+a[0]+"</td><td>"+xr(r[a[1]],a[2])+"</td><td>"+xr(e[a[1]],a[2])+"</td></tr>"}).join("")}function o5r(r,e){var t=$("verdict"),i=r.difference,a=i>=0?"higher":"lower",n=fR(e.pValue),u=xr(r.ci[0],1)+" and "+xr(r.ci[1],1),o;r.rejected&&i>0?o="Scores went up by "+xr(i,1)+" points on average, and luck alone rarely does that.":r.rejected?o="Scores went down by "+xr(-i,1)+" points on average, and that is unlikely to be luck.":o="Scores are "+xr(Math.abs(i),1)+" points "+a+", but this could easily be luck.",t.className="verdict"+(r.rejected?"":" unclear"),t.innerHTML=o+"<small>Shuffling the labels produced a gap this large "+n+" of the time. The t-test gives "+i5r(r.pValue)+", and the true change is plausibly between "+u+" points ("+Math.round((1-r.alpha)*100)+"% confidence interval).</small>"}function si(){var r=lt.parseScores($("before").value),e=lt.parseScores($("after").value),t=Number($("alpha").value),i,a;if($("error").hidden=!0,r.length<2||e.length<2){$("results").hidden=!0,($("before").value.trim()||$("after").value.trim())&&($("error").textContent="Enter at least two scores in each box.",$("error").hidden=!1);return}try{i=lt.compare(r,e,t)}catch(n){$("results").hidden=!0,$("error").textContent="Could not run the test: "+n.message,$("error").hidden=!1;return}if(!Number.isFinite(i.statistic)){$("results").hidden=!0,$("error").textContent="Each group needs some variation in its scores for the t-test to work.",$("error").hidden=!1;return}a=lt.permutationTest(r,e,{trials:_f}),$("results").hidden=!1,$("trials").textContent=_f.toLocaleString(),s5r(lt.summarize(r),lt.summarize(e)),o5r(i,a),n5r($("perm"),a),$("permcaption").textContent="Orange bars are shuffles at least as extreme as your result: "+fR(a.pValue)+" of "+_f.toLocaleString()+".",u5r($("tdist"),lt.tCurve(i.df,t),i.statistic),$("tcaption").textContent="t = "+xr(i.statistic,2)+" with "+xr(i.df,1)+" degrees of freedom; the cut-offs are \xB1"+xr(lt.tCurve(i.df,t).critical,2)+"."}function Tf(r){$("before").value=r.before,$("after").value=r.after,si()}function Af(r,e){var t;return function(){clearTimeout(t),t=setTimeout(r,e)}}$("before").addEventListener("input",Af(si,250));$("after").addEventListener("input",Af(si,250));$("alpha").addEventListener("change",si);$("example").addEventListener("click",function(){Tf(oR)});$("noeffect").addEventListener("click",function(){Tf(t5r)});window.addEventListener("resize",Af(si,150));window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",si);Tf(oR);})();
/*! Bundled license information:

@stdlib/stats/incr/count/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/count/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-nan/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-nan/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/pinf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-positive-zero/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-positive-zero/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/max/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/ninf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-negative-zero/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-negative-zero/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/min/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/min/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/range/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/range/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/midrange/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/midrange/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/abs/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/abs/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/sum/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/sum/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/mean/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/mean/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/define_property.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/has_define_property_support.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/is_number.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/zero_pad.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/format_integer.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/is_string.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/format_double.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/space_pad.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-interpolate/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-tokenize/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/base/format-tokenize/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/format/lib/is_string.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/format/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string/format/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-nonenumerable-read-only-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-nonenumerable-read-only-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-symbol-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-symbol-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-tostringtag-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-tostringtag-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-own-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-own-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/tostringtag.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number/lib/try2serialize.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/variance/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/variance/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/sqrt/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/sqrt/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/stdev/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/stdev/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/floor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/floor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-integer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-integer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-even/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-even/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-odd/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-odd/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-infinite/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-infinite/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint32array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint32array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/uint32/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint32array-support/lib/uint32array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint32array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint32array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint32/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint32/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint32/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-float64array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-float64array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float64array-support/lib/float64array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float64array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float64array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float64/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float64/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float64/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint8array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint8array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/uint8/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint8array-support/lib/uint8array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint8array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint8array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint8/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint8/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint8/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint16array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint16array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/uint16/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint16array-support/lib/uint16array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint16array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint16array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint16/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint16/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint16/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-little-endian/lib/ctors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-little-endian/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-little-endian/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-words/lib/indices.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-words/lib/assign.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-words/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-words/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/set-low-word/lib/low.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/set-low-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/set-low-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/uint32/base/to-int32/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/uint32/base/to-int32/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/high-word-abs-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/high-word-sign-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/get-high-word/lib/high.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/get-high-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/get-high-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/from-words/lib/indices.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/from-words/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/from-words/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/copysign/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/copysign/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/pow/lib/x_is_zero.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/pow/lib/y_is_huge.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/pow/lib/y_is_infinite.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/set-high-word/lib/high.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/set-high-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/set-high-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/exponent-bias/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/num-high-word-significand-bits/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/pow/lib/polyval_l.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/pow/lib/log2ax.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/pow/lib/polyval_w.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/pow/lib/logx.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/constants/float64/max-base2-exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/max-base2-exponent-subnormal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/min-base2-exponent-subnormal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/smallest-normal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/normalize/lib/assign.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/normalize/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/normalize/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/high-word-exponent-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/exponent/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ldexp/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ldexp/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/ln-two/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/high-word-significand-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/pow/lib/polyval_p.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/pow/lib/pow2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/pow/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/pow/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/skewness/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/skewness/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/kurtosis/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/kurtosis/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/summary/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/incr/summary/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/array/max-array-length/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-array-like/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-array-like/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/tools/array-like-function/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/tools/array-like-function/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-number-array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-integer/lib/integer.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-integer/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-integer/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-integer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-integer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nonnegative-integer/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nonnegative-integer/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nonnegative-integer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nonnegative-integer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/array/max-typed-array-length/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-typed-array-like/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-typed-array-like/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-read-only-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-read-only-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/half-ln-two/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/expm1/lib/polyval_q.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/expm1/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/expm1/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/log1p/lib/polyval_lp.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/log1p/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/log1p/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/fourth-pi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/asin/lib/rational_pq.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/asin/lib/rational_rs.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/asin/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright 1984, 1995, 2000 by Stephen L. Moshier
  *
  * Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
  *
  * Stephen L. Moshier
  * moshier@na-net.ornl.gov
  * ```
  *)

@stdlib/math/base/special/asin/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ceil/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ceil/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/trunc/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/trunc/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/exp/lib/polyval_p.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/exp/lib/expmulti.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (c) 2009 The Go Authors. All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions are
  * met:
  *
  *    * Redistributions of source code must retain the above copyright
  * notice, this list of conditions and the following disclaimer.
  *    * Redistributions in binary form must reproduce the above
  * copyright notice, this list of conditions and the following disclaimer
  * in the documentation and/or other materials provided with the
  * distribution.
  *    * Neither the name of Google Inc. nor the names of its
  * contributors may be used to endorse or promote products derived from
  * this software without specific prior written permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
  * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
  * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
  * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
  * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/exp/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (c) 2009 The Go Authors. All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions are
  * met:
  *
  *    * Redistributions of source code must retain the above copyright
  * notice, this list of conditions and the following disclaimer.
  *    * Redistributions in binary form must reproduce the above
  * copyright notice, this list of conditions and the following disclaimer
  * in the documentation and/or other materials provided with the
  * distribution.
  *    * Neither the name of Google Inc. nor the names of its
  * contributors may be used to endorse or promote products derived from
  * this software without specific prior written permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
  * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
  * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
  * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
  * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/exp/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/e/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/eps/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/beta/lib/lanczos_sum_expg_scaled.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/beta/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/beta/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/max/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/min/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/min/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/int32/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/half-pi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/pi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-cos/lib/polyval_c13.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-cos/lib/polyval_c46.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-cos/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/kernel-cos/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-sin/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/kernel-sin/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/get-low-word/lib/low.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/get-low-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/get-low-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/filled/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/filled/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/zeros/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/zeros/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/rempio2/lib/kernel_rempio2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/round/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/round/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/rempio2/lib/rempio2_medium.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/rempio2/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  *
  * Optimized by Bruce D. Evans.
  * ```
  *)

@stdlib/math/base/special/rempio2/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/sin/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/sin/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/sqrt-two-pi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma/lib/polyval_s.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma/lib/stirling_approximation.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
  *
  * Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
  *
  * Stephen L. Moshier
  * moshier@na-net.ornl.gov
  * ```
  *)

@stdlib/constants/float64/eulergamma/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma/lib/small_approximation.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
  *
  * Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
  *
  * Stephen L. Moshier
  * moshier@na-net.ornl.gov
  * ```
  *)

@stdlib/math/base/special/gamma/lib/rational_pq.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
  *
  * Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
  *
  * Stephen L. Moshier
  * moshier@na-net.ornl.gov
  * ```
  *)

@stdlib/math/base/special/gamma/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/max-nth-factorial/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/factorial/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/factorial/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma-lanczos-sum/lib/rational_pq.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma-lanczos-sum/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma-lanczos-sum/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/gamma-lanczos-g/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma-delta-ratio/lib/gamma_delta_ratio_lanczos.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006-7, 2013-14.
  * Copyright Paul A. Bristow 2007, 2013-14.
  * Copyright Nikhar Agrawal 2013-14.
  * Copyright Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma-delta-ratio/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006-7, 2013-14.
  * Copyright Paul A. Bristow 2007, 2013-14.
  * Copyright Nikhar Agrawal 2013-14.
  * Copyright Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma-delta-ratio/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ln/lib/polyval_p.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ln/lib/polyval_q.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/ln/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/ln/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/cos/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/cos/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/sinpi/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/sinpi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_a1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_a2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_r.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_s.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_t1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_t2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_t3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_u.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_v.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/polyval_w.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaln/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/gammaln/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/max-ln/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/sqrt-eps/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/eval/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-generator-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-generator-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/sum-series/lib/generators.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/sum-series/lib/basic.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/sum-series/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/tgamma_i_large_x_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/tgamma_i_large_x.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/finite_gamma_q.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/erfc/lib/polyval_pp.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_qq.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_pa.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_qa.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_ra.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_sa.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_rb.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/polyval_sb.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfc/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/erfc/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/finite_half_gamma_q.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/constants/float64/min-ln/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/full_igamma_prefix.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/tools/evalpoly/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/function/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/function/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/evalpoly/lib/factory.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/evalpoly/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/log1pmx/lib/log1p_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2005-2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  *)

@stdlib/math/base/special/log1pmx/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2005-2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/log1pmx/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/two-pi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c0.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c4.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c5.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c6.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c7.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/polyval_c8.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/igamma_temme_large.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/lower_incomplete_gamma_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/lower_gamma_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled/lib/rational_pq.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/regularised_gamma_prefix.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006-7, 2013-14.
  * Copyright Paul A. Bristow 2007, 2013-14.
  * Copyright Nikhar Agrawal 2013-14.
  * Copyright Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/powm1/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/powm1/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma1pm1/lib/rational_p1q1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma1pm1/lib/rational_p2q2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma1pm1/lib/rational_p3q3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gamma1pm1/lib/lgamma_small_imp.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006-7, 2013-14.
  * (C) Copyright Paul A. Bristow 2007, 2013-14.
  * (C) Copyright Nikhar Agrawal 2013-14.
  * (C) Copyright Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma1pm1/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006-7, 2013-14.
  * (C) Copyright Paul A. Bristow 2007, 2013-14.
  * (C) Copyright Nikhar Agrawal 2013-14.
  * (C) Copyright Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gamma1pm1/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/small_gamma2_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/tgamma_small_upper_part.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/constants/float32/smallest-normal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/continued-fraction/lib/generators.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/continued-fraction/lib/basic.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/tools/continued-fraction/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammainc/lib/upper_incomplete_gamma_fract.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/upper_gamma_fraction.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/igamma_final.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006-7, 2013-14.
  * (C) Copyright Paul A. Bristow 2007, 2013-14.
  * (C) Copyright Nikhar Agrawal 2013-14.
  * (C) Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/gammainc/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betainc/lib/full_igamma_prefix.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/regularized_gamma_prefix.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006-7, 2013-14.
  * Copyright Paul A. Bristow 2007, 2013-14.
  * Copyright Nikhar Agrawal 2013-14.
  * Copyright Christopher Kormanyos 2013-14.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/beta_small_b_large_a_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/rising_factorial_ratio.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/maxabs/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/maxabs/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/minabs/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/minabs/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betainc/lib/ibeta_power_terms.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/ibeta_fraction2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/constants/float64/max-safe-integer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gcd/lib/bitwise_binary_gcd.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gcd/lib/binary_gcd.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gcd/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gcd/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/binomcoef/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/binomcoef/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betainc/lib/binomial_ccdf.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/ibeta_a_step.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/ibeta_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/assign.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  * (C) Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betainc/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betainc/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/betainc/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/betainc/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/cdf/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/constant-function/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/constant-function/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/cdf/lib/factory.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/cdf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfcinv/lib/rational_p1q1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfcinv/lib/rational_p2q2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfcinv/lib/rational_p3q3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfcinv/lib/rational_p4q4.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfcinv/lib/rational_p5q5.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/erfcinv/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_81_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/erfcinv/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/acos/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright 1984, 1995, 2000 by Stephen L. Moshier
  *
  * Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
  *
  * Stephen L. Moshier
  * moshier@na-net.ornl.gov
  * ```
  *)

@stdlib/math/base/special/acos/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/sqrt-two/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co14.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co15.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co16.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co17.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co18.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co19.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co20.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co21.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co22.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/inverse_students_t_body_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/inverse_students_t_tail_series.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/inverse_students_t_hill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/inverse_students_t.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/find_ibeta_inv_from_t_dist.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/temme1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/root_finder.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/signum/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/signum/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/newton_raphson.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co4.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co5.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co6.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co7.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co8.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co9.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co10.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co11.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co12.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/polyval_co13.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/temme2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/constants/float32/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/higher_newton.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/polyval_ak1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/polyval_ak2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/lambdaeta.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/ln-sqrt-two-pi/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/chepolsum.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/polyval_c.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/polyval_d.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/stirling.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/gamstar.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak0bk0.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/eps1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak1bk1.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak2bk2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak3bk3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/eps2.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak4bk4.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak5bk5.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak6bk6.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak7bk7.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/rational_ak8bk8.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/eps3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/compute.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/gammaincinv/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/smallest-subnormal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/temme3.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/halley_iterate.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/ibeta_roots.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright John Maddock 2006.
  * Copyright Paul A. Bristow 2007.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/kernel-betaincinv/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/quantile/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/quantile/lib/factory.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/quantile/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/stride2offset/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/stride2offset/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/assert/is-accessor-array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/assert/is-accessor-array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/getter/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/getter/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/setter/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/setter/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/accessor-getter/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/accessor-getter/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/accessor-setter/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/accessor-setter/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/tools/array-function/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/tools/array-function/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-object-like/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-object-like/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-buffer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-buffer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/regexp/function-name/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/regexp/function-name/lib/regexp.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/regexp/function-name/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/constructor-name/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/constructor-name/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/dtype/lib/ctor2dtype.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-float32array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-float32array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float32array-support/lib/float32array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float32array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float32array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float32/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float32/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float32/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-int32array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-int32array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/int32/min/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int32array-support/lib/int32array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int32array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int32array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int32/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int32/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int32/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-int16array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-int16array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/int16/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/int16/min/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int16array-support/lib/int16array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int16array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int16array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int16/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int16/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int16/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint8clampedarray/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-uint8clampedarray/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint8clampedarray-support/lib/uint8clampedarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint8clampedarray-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-uint8clampedarray-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint8c/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint8c/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/uint8c/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-int8array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-int8array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/int8/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/int8/min/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int8array-support/lib/int8array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int8array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-int8array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int8/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int8/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/int8/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-array-like-object/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-array-like-object/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-collection/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-collection/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-arraybuffer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-arraybuffer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-object/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-object/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string/lib/valueof.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string/lib/try2valueof.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-string-array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/fixtures/re.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-boolean/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/boolean/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/boolean/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-boolean/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-boolean/lib/try2serialize.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-boolean/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-boolean/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-boolean/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/codegen.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/self.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/window.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/global_this.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/browser.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/fixtures/nodelist.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/fixtures/typedarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/check.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-function/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-function/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/ctor/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/ctor/lib/tojson.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-float32/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-float32/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-float32/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/ctor/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/ctor/lib/tojson.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-complex-like/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-complex-like/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/assert/is-complex64array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/assert/is-complex64array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/assert/is-complex128array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/assert/is-complex128array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-iterator-symbol-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-iterator-symbol-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol/iterator/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol/iterator/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-nonenumerable-read-only-accessor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-nonenumerable-read-only-accessor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/real/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/real/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/imag/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float32/imag/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/reinterpret-complex64/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/reinterpret-complex64/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/reinterpret-complex128/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/reinterpret-complex128/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex64/lib/from_iterator.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex64/lib/from_iterator_map.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex64/lib/from_array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex64/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex64/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/real/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/real/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/imag/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/complex/float64/imag/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex128/lib/from_iterator.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex128/lib/from_iterator_map.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex128/lib/from_array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex128/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/complex128/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/bool/lib/from_iterator.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/bool/lib/from_iterator_map.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/bool/lib/from_array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/bool/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/bool/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/dtype/lib/ctors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/dtype/lib/dtypes.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/dtype/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/dtype/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/arraylike2object/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/base/arraylike2object/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gsumpw/lib/accessors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gsumpw/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gsumpw/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gsumpw/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gapxsumpw/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gapxsumpw/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/gapxsumpw/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/meanpn/lib/accessors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/meanpn/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/meanpn/lib/meanpn.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/meanpn/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/meanpn/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/mean/lib/mean.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/mean/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/mean/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/mean/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variancepn/lib/accessors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variancepn/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variancepn/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variancepn/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variance/lib/variance.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variance/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variance/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/variance/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/object/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/object/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/native.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/proto.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/detect.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-plain-object/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-plain-object/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nan/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nan/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nan/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-nan/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/ttest2/lib/validate.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-positive-integer/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-positive-integer/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-positive-integer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-positive-integer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/max-base10-exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/min-base10-exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/min-base10-exponent-subnormal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/roundn/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/roundn/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/ttest2/lib/print.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/ttest2/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/ttest2/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-error/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-error/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/regexp/regexp/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/regexp/regexp/lib/regexp.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/regexp/regexp/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/regexp-from-string/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/regexp-from-string/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/index-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/index-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_arguments_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-arguments/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-arguments/lib/detect.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-enumerable-property/lib/native.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-enumerable-property/lib/has_string_enumerability_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-enumerable-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-enumerable-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-arguments/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-arguments/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/builtin_wrapper.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/noop/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/noop/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_enumerable_prototype_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_non_enumerable_properties_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/is_constructor_prototype.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/window.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_automation_equality_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_window.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/is_constructor_prototype_wrapper.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/has_builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/has_builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-node-buffer-support/lib/buffer.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-node-buffer-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-node-buffer-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/ctor/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/from-buffer/lib/has_from.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/from-buffer/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/from-buffer/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/buffer/from-buffer/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/typed_arrays.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/deep_copy.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-nonenumerable-read-write-accessor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-nonenumerable-read-write-accessor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/int32/base/mul/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/int32/base/mul/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/int32/base/mul/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/uint32/base/mul/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/uint32/base/mul/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/base/gcopy/lib/accessors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/base/gcopy/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/base/gcopy/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/base/gcopy/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-function-name-support/lib/foo.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-function-name-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-function-name-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/function-name/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/function-name/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/pinf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float16array-support/lib/float16array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float16array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-float16array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-read-write-accessor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-read-write-accessor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-float16/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-finite/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-finite/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/eps/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/smallest-normal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-float16/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float64/base/to-float16/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/ninf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-nanf/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-nanf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/absf/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/absf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float32/base/to-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float32/base/to-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float32/exponent-bias/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float32/base/exponent/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float32/base/exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float32/ninf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-negative-zerof/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/assert/is-negative-zerof/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float32/significand-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float16/base/to-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float16/base/to-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float64/min-base2-exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/exp2/lib/polyval_p.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/exp2/lib/polyval_q.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math/base/special/exp2/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright 1984, 1995, 2000 by Stephen L. Moshier
  *
  * Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
  *
  * Stephen L. Moshier
  * moshier@na-net.ornl.gov
  * ```
  *)

@stdlib/math/base/special/exp2/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/exponent-bias/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/sign-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/exponent-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/significand-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/num-significand-bits/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants/float16/num-exponent-bits/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float16/base/from-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number/float16/base/from-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float16/lib/polyfill/from_array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2026 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float16/lib/polyfill/from_iterator.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2026 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float16/lib/polyfill/from_iterator_map.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2026 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float16/lib/polyfill/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2026 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float16/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2026 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/float16/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2026 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-typed-array/lib/ctors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-typed-array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-typed-array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-complex-typed-array/lib/ctors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-complex-typed-array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-complex-typed-array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-booleanarray/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/is-booleanarray/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/reinterpret-boolean/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/strided/base/reinterpret-boolean/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-has-instance-symbol-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/has-has-instance-symbol-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol/has-instance/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol/has-instance/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2025 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/instance-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert/instance-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/to-json/lib/ctors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/to-json/lib/type.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/to-json/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array/to-json/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/base/mt19937/lib/rand_uint32.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/base/mt19937/lib/factory.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C code and copyright notice are from the [source implementation][mt19937]. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
  * All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions
  * are met:
  *
  *   1. Redistributions of source code must retain the above copyright
  *      notice, this list of conditions and the following disclaimer.
  *
  *   2. Redistributions in binary form must reproduce the above copyright
  *      notice, this list of conditions and the following disclaimer in the
  *      documentation and/or other materials provided with the distribution.
  *
  *   3. The names of its contributors may not be used to endorse or promote
  *      products derived from this software without specific prior written
  *      permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * [mt19937]: http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
  *)

@stdlib/random/base/mt19937/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/base/mt19937/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/shuffle/lib/validate.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/shuffle/lib/factory.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/shuffle/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/random/shuffle/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/dsumpw/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/dsumpw/lib/dsumpw.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/dsumpw/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/dapxsumpw/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/dapxsumpw/lib/dapxsumpw.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/blas/ext/base/dapxsumpw/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/dmeanpn/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/dmeanpn/lib/dmeanpn.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/dmeanpn/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/dmean/lib/dmean.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/dmean/lib/ndarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/strided/dmean/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2020 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/pdf/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/pdf/lib/factory.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/stats/base/dists/t/pdf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/
