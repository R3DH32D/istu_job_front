(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Fr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},Fe=[],wt=()=>{},Us=()=>!1,Hs=/^on[^a-z]/,Fn=t=>Hs.test(t),Rr=t=>t.startsWith("onUpdate:"),tt=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bs=Object.prototype.hasOwnProperty,$=(t,e)=>Bs.call(t,e),R=Array.isArray,Re=t=>Ln(t)==="[object Map]",Ys=t=>Ln(t)==="[object Set]",L=t=>typeof t=="function",et=t=>typeof t=="string",Rn=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",Ai=t=>(Z(t)||L(t))&&L(t.then)&&L(t.catch),Ws=Object.prototype.toString,Ln=t=>Ws.call(t),Ks=t=>Ln(t).slice(8,-1),qs=t=>Ln(t)==="[object Object]",jr=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bn=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xs=/-(\w)/g,ye=jn(t=>t.replace(Xs,(e,n)=>n?n.toUpperCase():"")),Vs=/\B([A-Z])/g,Ae=jn(t=>t.replace(Vs,"-$1").toLowerCase()),Oi=jn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zn=jn(t=>t?`on${Oi(t)}`:""),xe=(t,e)=>!Object.is(t,e),Qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},En=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wa;const lr=()=>wa||(wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=et(r)?to(r):Dr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(et(t)||Z(t))return t}const Zs=/;(?![^(]*\))/g,Qs=/:([^]+)/,Gs=/\/\*[^]*?\*\//g;function to(t){const e={};return t.replace(Gs,"").split(Zs).forEach(n=>{if(n){const r=n.split(Qs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zr(t){let e="";if(et(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=zr(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",no=Fr(eo);function Ei(t){return!!t||t===""}let bt;class ro{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ao(t,e=bt){e&&e.active&&e.effects.push(t)}function io(){return bt}const $r=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ii=t=>(t.w&Kt)>0,Pi=t=>(t.n&Kt)>0,so=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kt},oo=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Ii(a)&&!Pi(a)?a.delete(t):e[n++]=a,a.w&=~Kt,a.n&=~Kt}e.length=n}},fr=new WeakMap;let Se=0,Kt=1;const cr=30;let yt;const ie=Symbol(""),ur=Symbol("");class Ur{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ao(this,r)}run(){if(!this.active)return this.fn();let e=yt,n=Yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yt,yt=this,Yt=!0,Kt=1<<++Se,Se<=cr?so(this):_a(this),this.fn()}finally{Se<=cr&&oo(this),Kt=1<<--Se,yt=this.parent,Yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(_a(this),this.onStop&&this.onStop(),this.active=!1)}}function _a(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yt=!0;const Ti=[];function Oe(){Ti.push(Yt),Yt=!1}function Ee(){const t=Ti.pop();Yt=t===void 0?!0:t}function ut(t,e,n){if(Yt&&yt){let r=fr.get(t);r||fr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=$r()),Ci(a)}}function Ci(t,e){let n=!1;Se<=cr?Pi(t)||(t.n|=Kt,n=!Ii(t)):n=!t.has(yt),n&&(t.add(yt),yt.deps.push(t))}function Rt(t,e,n,r,a,i){const s=fr.get(t);if(!s)return;let o=[];if(e==="clear")o=[...s.values()];else if(n==="length"&&R(t)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||!Rn(d)&&d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),e){case"add":R(t)?jr(n)&&o.push(s.get("length")):(o.push(s.get(ie)),Re(t)&&o.push(s.get(ur)));break;case"delete":R(t)||(o.push(s.get(ie)),Re(t)&&o.push(s.get(ur)));break;case"set":Re(t)&&o.push(s.get(ie));break}if(o.length===1)o[0]&&dr(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);dr($r(l))}}function dr(t,e){const n=R(t)?t:[...t];for(const r of n)r.computed&&ka(r);for(const r of n)r.computed||ka(r)}function ka(t,e){(t!==yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const lo=Fr("__proto__,__v_isRef,__isVue"),Si=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn)),Aa=fo();function fo(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)ut(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oe();const r=U(this)[e].apply(this,n);return Ee(),r}}),t}function co(t){const e=U(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Ni{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Ao:Li:i?Ri:Fi).get(e))return e;const s=R(e);if(!a){if(s&&$(Aa,n))return Reflect.get(Aa,n,r);if(n==="hasOwnProperty")return co}const o=Reflect.get(e,n,r);return(Rn(n)?Si.has(n):lo(n))||(a||ut(e,"get",n),i)?o:lt(o)?s&&jr(n)?o:o.value:Z(o)?a?ji(o):Yr(o):o}}class Mi extends Ni{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(ze(i)&&lt(i)&&!lt(r))return!1;if(!this._shallow&&(!mr(r)&&!ze(r)&&(i=U(i),r=U(r)),!R(e)&&lt(i)&&!lt(r)))return i.value=r,!0;const s=R(e)&&jr(n)?Number(n)<e.length:$(e,n),o=Reflect.set(e,n,r,a);return e===U(a)&&(s?xe(r,i)&&Rt(e,"set",n,r):Rt(e,"add",n,r)),o}deleteProperty(e,n){const r=$(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&Rt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Rn(n)||!Si.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",R(e)?"length":ie),Reflect.ownKeys(e)}}class uo extends Ni{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mo=new Mi,po=new uo,vo=new Mi(!0),Hr=t=>t,Dn=t=>Reflect.getPrototypeOf(t);function nn(t,e,n=!1,r=!1){t=t.__v_raw;const a=U(t),i=U(e);n||(xe(e,i)&&ut(a,"get",e),ut(a,"get",i));const{has:s}=Dn(a),o=r?Hr:n?qr:Kr;if(s.call(a,e))return o(t.get(e));if(s.call(a,i))return o(t.get(i));t!==a&&t.get(e)}function rn(t,e=!1){const n=this.__v_raw,r=U(n),a=U(t);return e||(xe(t,a)&&ut(r,"has",t),ut(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function an(t,e=!1){return t=t.__v_raw,!e&&ut(U(t),"iterate",ie),Reflect.get(t,"size",t)}function Oa(t){t=U(t);const e=U(this);return Dn(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function Ea(t,e){e=U(e);const n=U(this),{has:r,get:a}=Dn(n);let i=r.call(n,t);i||(t=U(t),i=r.call(n,t));const s=a.call(n,t);return n.set(t,e),i?xe(e,s)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function Ia(t){const e=U(this),{has:n,get:r}=Dn(e);let a=n.call(e,t);a||(t=U(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Rt(e,"delete",t,void 0),i}function Pa(){const t=U(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function sn(t,e){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=e?Hr:t?qr:Kr;return!t&&ut(o,"iterate",ie),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function on(t,e,n){return function(...r){const a=this.__v_raw,i=U(a),s=Re(i),o=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=a[t](...r),d=n?Hr:e?qr:Kr;return!e&&ut(i,"iterate",l?ur:ie),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:o?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function go(){const t={get(i){return nn(this,i)},get size(){return an(this)},has:rn,add:Oa,set:Ea,delete:Ia,clear:Pa,forEach:sn(!1,!1)},e={get(i){return nn(this,i,!1,!0)},get size(){return an(this)},has:rn,add:Oa,set:Ea,delete:Ia,clear:Pa,forEach:sn(!1,!0)},n={get(i){return nn(this,i,!0)},get size(){return an(this,!0)},has(i){return rn.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:sn(!0,!1)},r={get(i){return nn(this,i,!0,!0)},get size(){return an(this,!0)},has(i){return rn.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=on(i,!1,!1),n[i]=on(i,!0,!1),e[i]=on(i,!1,!0),r[i]=on(i,!0,!0)}),[t,n,e,r]}const[ho,bo,yo,xo]=go();function Br(t,e){const n=e?t?xo:yo:t?bo:ho;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const wo={get:Br(!1,!1)},_o={get:Br(!1,!0)},ko={get:Br(!0,!1)},Fi=new WeakMap,Ri=new WeakMap,Li=new WeakMap,Ao=new WeakMap;function Oo(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eo(t){return t.__v_skip||!Object.isExtensible(t)?0:Oo(Ks(t))}function Yr(t){return ze(t)?t:Wr(t,!1,mo,wo,Fi)}function Io(t){return Wr(t,!1,vo,_o,Ri)}function ji(t){return Wr(t,!0,po,ko,Li)}function Wr(t,e,n,r,a){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const s=Eo(t);if(s===0)return t;const o=new Proxy(t,s===2?r:n);return a.set(t,o),o}function ge(t){return ze(t)?ge(t.__v_raw):!!(t&&t.__v_isReactive)}function ze(t){return!!(t&&t.__v_isReadonly)}function mr(t){return!!(t&&t.__v_isShallow)}function Di(t){return ge(t)||ze(t)}function U(t){const e=t&&t.__v_raw;return e?U(e):t}function zi(t){return En(t,"__v_skip",!0),t}const Kr=t=>Z(t)?Yr(t):t,qr=t=>Z(t)?ji(t):t;function Po(t){Yt&&yt&&(t=U(t),Ci(t.dep||(t.dep=$r())))}function To(t,e){t=U(t);const n=t.dep;n&&dr(n)}function lt(t){return!!(t&&t.__v_isRef===!0)}function Co(t){return lt(t)?t.value:t}const So={get:(t,e,n)=>Co(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return lt(a)&&!lt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function $i(t){return ge(t)?t:new Proxy(t,So)}class No{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ur(e,()=>{this._dirty||(this._dirty=!0,To(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=U(this);return Po(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Mo(t,e,n=!1){let r,a;const i=L(t);return i?(r=t,a=wt):(r=t.get,a=t.set),new No(r,a,i||!a,n)}function Wt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){zn(i,e,n)}return a}function _t(t,e,n,r){if(L(t)){const i=Wt(t,e,n,r);return i&&Ai(i)&&i.catch(s=>{zn(s,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(_t(t[i],e,n,r));return a}function zn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,s,o)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Wt(l,null,10,[t,s,o]);return}}Fo(t,n,a,r)}function Fo(t,e,n,r=!0){console.error(t)}let $e=!1,pr=!1;const at=[];let It=0;const he=[];let Nt=null,ee=0;const Ui=Promise.resolve();let Xr=null;function Ro(t){const e=Xr||Ui;return t?e.then(this?t.bind(this):t):e}function Lo(t){let e=It+1,n=at.length;for(;e<n;){const r=e+n>>>1,a=at[r],i=Ue(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function Vr(t){(!at.length||!at.includes(t,$e&&t.allowRecurse?It+1:It))&&(t.id==null?at.push(t):at.splice(Lo(t.id),0,t),Hi())}function Hi(){!$e&&!pr&&(pr=!0,Xr=Ui.then(Yi))}function jo(t){const e=at.indexOf(t);e>It&&at.splice(e,1)}function Do(t){R(t)?he.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?ee+1:ee))&&he.push(t),Hi()}function Ta(t,e=$e?It+1:0){for(;e<at.length;e++){const n=at[e];n&&n.pre&&(at.splice(e,1),e--,n())}}function Bi(t){if(he.length){const e=[...new Set(he)];if(he.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,r)=>Ue(n)-Ue(r)),ee=0;ee<Nt.length;ee++)Nt[ee]();Nt=null,ee=0}}const Ue=t=>t.id==null?1/0:t.id,zo=(t,e)=>{const n=Ue(t)-Ue(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yi(t){pr=!1,$e=!0,at.sort(zo);const e=wt;try{for(It=0;It<at.length;It++){const n=at[It];n&&n.active!==!1&&Wt(n,null,14)}}finally{It=0,at.length=0,Bi(),$e=!1,Xr=null,(at.length||he.length)&&Yi()}}function $o(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let a=n;const i=e.startsWith("update:"),s=i&&e.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:h}=r[d]||X;h&&(a=n.map(_=>et(_)?_.trim():_)),m&&(a=n.map(Js))}let o,l=r[o=Zn(e)]||r[o=Zn(ye(e))];!l&&i&&(l=r[o=Zn(Ae(e))]),l&&_t(l,t,6,a);const c=r[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,_t(c,t,6,a)}}function Wi(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let s={},o=!1;if(!L(t)){const l=c=>{const d=Wi(c,e,!0);d&&(o=!0,tt(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!o?(Z(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>s[l]=null):tt(s,i),Z(t)&&r.set(t,s),s)}function $n(t,e){return!t||!Fn(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,Ae(e))||$(t,e))}let Pt=null,Ki=null;function In(t){const e=Pt;return Pt=t,Ki=t&&t.type.__scopeId||null,e}function Uo(t,e=Pt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&za(-1);const i=In(e);let s;try{s=t(...a)}finally{In(i),r._d&&za(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Gn(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:_,ctx:j,inheritAttrs:N}=t;let z,k;const O=In(t);try{if(n.shapeFlag&4){const T=a||r;z=Et(d.call(T,T,m,i,_,h,j)),k=l}else{const T=e;z=Et(T.length>1?T(i,{attrs:l,slots:o,emit:c}):T(i,null)),k=e.props?l:Ho(l)}}catch(T){zn(T,t,1),z=vt(He)}let M=z;if(k&&N!==!1){const T=Object.keys(k),{shapeFlag:H}=M;T.length&&H&7&&(s&&T.some(Rr)&&(k=Bo(k,s)),M=we(M,k))}return n.dirs&&(M=we(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),z=M,In(O),z}const Ho=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fn(n))&&((e||(e={}))[n]=t[n]);return e},Bo=(t,e)=>{const n={};for(const r in t)(!Rr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yo(t,e,n){const{props:r,children:a,component:i}=t,{props:s,children:o,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ca(r,s,c):!!s;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(s[h]!==r[h]&&!$n(c,h))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ca(r,s,c):!0:!!s;return!1}function Ca(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!$n(n,i))return!0}return!1}function Wo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ko=t=>t.__isSuspense;function qo(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):Do(t)}const ln={};function yn(t,e,n){return qi(t,e,n)}function qi(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=X){var o;const l=io()===((o=it)==null?void 0:o.scope)?it:null;let c,d=!1,m=!1;if(lt(t)?(c=()=>t.value,d=mr(t)):ge(t)?(c=()=>t,r=!0):R(t)?(m=!0,d=t.some(T=>ge(T)||mr(T)),c=()=>t.map(T=>{if(lt(T))return T.value;if(ge(T))return de(T);if(L(T))return Wt(T,l,2)})):L(t)?e?c=()=>Wt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),_t(t,l,3,[_])}:c=wt,e&&r){const T=c;c=()=>de(T())}let h,_=T=>{h=O.onStop=()=>{Wt(T,l,4)}},j;if(Be)if(_=wt,e?n&&_t(e,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const T=Yl();j=T.__watcherHandles||(T.__watcherHandles=[])}else return wt;let N=m?new Array(t.length).fill(ln):ln;const z=()=>{if(O.active)if(e){const T=O.run();(r||d||(m?T.some((H,nt)=>xe(H,N[nt])):xe(T,N)))&&(h&&h(),_t(e,l,3,[T,N===ln?void 0:m&&N[0]===ln?[]:N,_]),N=T)}else O.run()};z.allowRecurse=!!e;let k;a==="sync"?k=z:a==="post"?k=()=>ct(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>Vr(z));const O=new Ur(c,k);e?n?z():N=O.run():a==="post"?ct(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&Lr(l.scope.effects,O)};return j&&j.push(M),M}function Xo(t,e,n){const r=this.proxy,a=et(t)?t.includes(".")?Xi(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const s=it;_e(this);const o=qi(a,i.bind(r),n);return s?_e(s):se(),o}function Xi(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function de(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),lt(t))de(t.value,e);else if(R(t))for(let n=0;n<t.length;n++)de(t[n],e);else if(Ys(t)||Re(t))t.forEach(n=>{de(n,e)});else if(qs(t))for(const n in t)de(t[n],e);return t}function Qt(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Oe(),_t(l,n,8,[t.el,o,t,e]),Ee())}}/*! #__NO_SIDE_EFFECTS__ */function Vo(t,e){return L(t)?(()=>tt({name:t.name},e,{setup:t}))():t}const xn=t=>!!t.type.__asyncLoader,Vi=t=>t.type.__isKeepAlive;function Jo(t,e){Ji(t,"a",e)}function Zo(t,e){Ji(t,"da",e)}function Ji(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Un(e,r,n),n){let a=n.parent;for(;a&&a.parent;)Vi(a.parent.vnode)&&Qo(r,e,n,a),a=a.parent}}function Qo(t,e,n,r){const a=Un(e,t,r,!0);Zi(()=>{Lr(r[e],a)},n)}function Un(t,e,n=it,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;Oe(),_e(n);const o=_t(e,n,t,s);return se(),Ee(),o});return r?a.unshift(i):a.push(i),i}}const zt=t=>(e,n=it)=>(!Be||t==="sp")&&Un(t,(...r)=>e(...r),n),Go=zt("bm"),tl=zt("m"),el=zt("bu"),nl=zt("u"),rl=zt("bum"),Zi=zt("um"),al=zt("sp"),il=zt("rtg"),sl=zt("rtc");function ol(t,e=it){Un("ec",t,e)}const ll=Symbol.for("v-ndc"),vr=t=>t?os(t)?ea(t)||t.proxy:vr(t.parent):null,Le=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>Jr(t),$forceUpdate:t=>t.f||(t.f=()=>Vr(t.update)),$nextTick:t=>t.n||(t.n=Ro.bind(t.proxy)),$watch:t=>Xo.bind(t)}),tr=(t,e)=>t!==X&&!t.__isScriptSetup&&$(t,e),fl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const _=s[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(tr(r,e))return s[e]=1,r[e];if(a!==X&&$(a,e))return s[e]=2,a[e];if((c=t.propsOptions[0])&&$(c,e))return s[e]=3,i[e];if(n!==X&&$(n,e))return s[e]=4,n[e];gr&&(s[e]=0)}}const d=Le[e];let m,h;if(d)return e==="$attrs"&&ut(t,"get",e),d(t);if((m=o.__cssModules)&&(m=m[e]))return m;if(n!==X&&$(n,e))return s[e]=4,n[e];if(h=l.config.globalProperties,$(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return tr(a,e)?(a[e]=n,!0):r!==X&&$(r,e)?(r[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||t!==X&&$(t,s)||tr(e,s)||(o=i[0])&&$(o,s)||$(r,s)||$(Le,s)||$(a.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sa(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gr=!0;function cl(t){const e=Jr(t),n=t.proxy,r=t.ctx;gr=!1,e.beforeCreate&&Na(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:_,updated:j,activated:N,deactivated:z,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:T,render:H,renderTracked:nt,renderTriggered:rt,errorCaptured:gt,serverPrefetch:pt,expose:Ct,inheritAttrs:Pe,components:Qe,directives:Ge,filters:Xn}=e;if(c&&ul(c,r,null),s)for(const V in s){const Y=s[V];L(Y)&&(r[V]=Y.bind(n))}if(a){const V=a.call(n,n);Z(V)&&(t.data=Yr(V))}if(gr=!0,i)for(const V in i){const Y=i[V],Jt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):wt,tn=!L(Y)&&L(Y.set)?Y.set.bind(n):wt,Zt=te({get:Jt,set:tn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:kt=>Zt.value=kt})}if(o)for(const V in o)Qi(o[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(Y=>{hl(Y,V[Y])})}d&&Na(d,t,"c");function st(V,Y){R(Y)?Y.forEach(Jt=>V(Jt.bind(n))):Y&&V(Y.bind(n))}if(st(Go,m),st(tl,h),st(el,_),st(nl,j),st(Jo,N),st(Zo,z),st(ol,gt),st(sl,nt),st(il,rt),st(rl,O),st(Zi,T),st(al,pt),R(Ct))if(Ct.length){const V=t.exposed||(t.exposed={});Ct.forEach(Y=>{Object.defineProperty(V,Y,{get:()=>n[Y],set:Jt=>n[Y]=Jt})})}else t.exposed||(t.exposed={});H&&t.render===wt&&(t.render=H),Pe!=null&&(t.inheritAttrs=Pe),Qe&&(t.components=Qe),Ge&&(t.directives=Ge)}function ul(t,e,n=wt){R(t)&&(t=hr(t));for(const r in t){const a=t[r];let i;Z(a)?"default"in a?i=wn(a.from||r,a.default,!0):i=wn(a.from||r):i=wn(a),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Na(t,e,n){_t(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qi(t,e,n,r){const a=r.includes(".")?Xi(n,r):()=>n[r];if(et(t)){const i=e[t];L(i)&&yn(a,i)}else if(L(t))yn(a,t.bind(n));else if(Z(t))if(R(t))t.forEach(i=>Qi(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&yn(a,i,t)}}function Jr(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,o=i.get(e);let l;return o?l=o:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Pn(l,c,s,!0)),Pn(l,e,s)),Z(e)&&i.set(e,l),l}function Pn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Pn(t,i,n,!0),a&&a.forEach(s=>Pn(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const o=dl[s]||n&&n[s];t[s]=o?o(t[s],e[s]):e[s]}return t}const dl={data:Ma,props:Fa,emits:Fa,methods:Ne,computed:Ne,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Ne,directives:Ne,watch:pl,provide:Ma,inject:ml};function Ma(t,e){return e?t?function(){return tt(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function ml(t,e){return Ne(hr(t),hr(e))}function hr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Ne(t,e){return t?tt(Object.create(null),t,e):e}function Fa(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:tt(Object.create(null),Sa(t),Sa(e??{})):e}function pl(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Gi(){return{app:null,config:{isNativeTag:Us,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vl=0;function gl(t,e){return function(r,a=null){L(r)||(r=tt({},r)),a!=null&&!Z(a)&&(a=null);const i=Gi(),s=new WeakSet;let o=!1;const l=i.app={_uid:vl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Wl,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&L(c.install)?(s.add(c),c.install(l,...d)):L(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const h=vt(r,a);return h.appContext=i,d&&e?e(h,c):t(h,c,m),o=!0,l._container=c,c.__vue_app__=l,ea(h.component)||h.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Tn=l;try{return c()}finally{Tn=null}}};return l}}let Tn=null;function hl(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function wn(t,e,n=!1){const r=it||Pt;if(r||Tn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&L(e)?e.call(r&&r.proxy):e}}function bl(t,e,n,r=!1){const a={},i={};En(i,Bn,1),t.propsDefaults=Object.create(null),ts(t,e,a,i);for(const s in t.propsOptions[0])s in a||(a[s]=void 0);n?t.props=r?a:Io(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function yl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=t,o=U(a),[l]=t.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if($n(t.emitsOptions,h))continue;const _=e[h];if(l)if($(i,h))_!==i[h]&&(i[h]=_,c=!0);else{const j=ye(h);a[j]=br(l,o,j,_,t,!1)}else _!==i[h]&&(i[h]=_,c=!0)}}}else{ts(t,e,a,i)&&(c=!0);let d;for(const m in o)(!e||!$(e,m)&&((d=Ae(m))===m||!$(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=br(l,o,m,void 0,t,!0)):delete a[m]);if(i!==o)for(const m in i)(!e||!$(e,m))&&(delete i[m],c=!0)}c&&Rt(t,"set","$attrs")}function ts(t,e,n,r){const[a,i]=t.propsOptions;let s=!1,o;if(e)for(let l in e){if(bn(l))continue;const c=e[l];let d;a&&$(a,d=ye(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:$n(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=U(n),c=o||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=br(a,l,m,c[m],t,!$(c,m))}}return s}function br(t,e,n,r,a,i){const s=t[n];if(s!=null){const o=$(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(_e(a),r=c[n]=l.call(null,e),se())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Ae(n))&&(r=!0))}return r}function es(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,s={},o=[];let l=!1;if(!L(t)){const d=m=>{l=!0;const[h,_]=es(m,e,!0);tt(s,h),_&&o.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Z(t)&&r.set(t,Fe),Fe;if(R(i))for(let d=0;d<i.length;d++){const m=ye(i[d]);Ra(m)&&(s[m]=X)}else if(i)for(const d in i){const m=ye(d);if(Ra(m)){const h=i[d],_=s[m]=R(h)||L(h)?{type:h}:tt({},h);if(_){const j=Da(Boolean,_.type),N=Da(String,_.type);_[0]=j>-1,_[1]=N<0||j<N,(j>-1||$(_,"default"))&&o.push(m)}}}const c=[s,o];return Z(t)&&r.set(t,c),c}function Ra(t){return t[0]!=="$"}function La(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ja(t,e){return La(t)===La(e)}function Da(t,e){return R(e)?e.findIndex(n=>ja(n,t)):L(e)&&ja(e,t)?0:-1}const ns=t=>t[0]==="_"||t==="$stable",Zr=t=>R(t)?t.map(Et):[Et(t)],xl=(t,e,n)=>{if(e._n)return e;const r=Uo((...a)=>Zr(e(...a)),n);return r._c=!1,r},rs=(t,e,n)=>{const r=t._ctx;for(const a in t){if(ns(a))continue;const i=t[a];if(L(i))e[a]=xl(a,i,r);else if(i!=null){const s=Zr(i);e[a]=()=>s}}},as=(t,e)=>{const n=Zr(e);t.slots.default=()=>n},wl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=U(e),En(e,"_",n)):rs(e,t.slots={})}else t.slots={},e&&as(t,e);En(t.slots,Bn,1)},_l=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,s=X;if(r.shapeFlag&32){const o=e._;o?n&&o===1?i=!1:(tt(a,e),!n&&o===1&&delete a._):(i=!e.$stable,rs(e,a)),s=e}else e&&(as(t,e),s={default:1});if(i)for(const o in a)!ns(o)&&s[o]==null&&delete a[o]};function yr(t,e,n,r,a=!1){if(R(t)){t.forEach((h,_)=>yr(h,e&&(R(e)?e[_]:e),n,r,a));return}if(xn(r)&&!a)return;const i=r.shapeFlag&4?ea(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=t,c=e&&e.r,d=o.refs===X?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(et(c)?(d[c]=null,$(m,c)&&(m[c]=null)):lt(c)&&(c.value=null)),L(l))Wt(l,o,12,[s,d]);else{const h=et(l),_=lt(l);if(h||_){const j=()=>{if(t.f){const N=h?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Lr(N,i):R(N)?N.includes(i)||N.push(i):h?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else h?(d[l]=s,$(m,l)&&(m[l]=s)):_&&(l.value=s,t.k&&(d[t.k]=s))};s?(j.id=-1,ct(j,n)):j()}}}const ct=qo;function kl(t){return Al(t)}function Al(t,e){const n=lr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:_=wt,insertStaticContent:j}=t,N=(f,u,p,v=null,g=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ce(f,u)&&(v=en(f),kt(f,g,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:C,shapeFlag:I}=u;switch(b){case Hn:z(f,u,p,v);break;case He:k(f,u,p,v);break;case _n:f==null&&O(u,p,v,A);break;case Mt:Qe(f,u,p,v,g,x,A,y,w);break;default:I&1?H(f,u,p,v,g,x,A,y,w):I&6?Ge(f,u,p,v,g,x,A,y,w):(I&64||I&128)&&b.process(f,u,p,v,g,x,A,y,w,fe)}C!=null&&g&&yr(C,f&&f.ref,x,u||f,!u)},z=(f,u,p,v)=>{if(f==null)r(u.el=o(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},O=(f,u,p,v)=>{[f.el,f.anchor]=j(f.children,u,p,v,f.el,f.anchor)},M=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},T=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},H=(f,u,p,v,g,x,A,y,w)=>{A=A||u.type==="svg",f==null?nt(u,p,v,g,x,A,y,w):pt(f,u,g,x,A,y,w)},nt=(f,u,p,v,g,x,A,y)=>{let w,b;const{type:C,props:I,shapeFlag:S,transition:F,dirs:D}=f;if(w=f.el=s(f.type,x,I&&I.is,I),S&8?d(w,f.children):S&16&&gt(f.children,w,null,v,g,x&&C!=="foreignObject",A,y),D&&Qt(f,null,v,"created"),rt(w,f,f.scopeId,A,v),I){for(const B in I)B!=="value"&&!bn(B)&&i(w,B,null,I[B],x,f.children,v,g,St);"value"in I&&i(w,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Ot(b,v,f)}D&&Qt(f,null,v,"beforeMount");const W=Ol(g,F);W&&F.beforeEnter(w),r(w,u,p),((b=I&&I.onVnodeMounted)||W||D)&&ct(()=>{b&&Ot(b,v,f),W&&F.enter(w),D&&Qt(f,null,v,"mounted")},g)},rt=(f,u,p,v,g)=>{if(p&&_(f,p),v)for(let x=0;x<v.length;x++)_(f,v[x]);if(g){let x=g.subTree;if(u===x){const A=g.vnode;rt(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},gt=(f,u,p,v,g,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const C=f[b]=y?Bt(f[b]):Et(f[b]);N(null,C,u,p,v,g,x,A,y)}},pt=(f,u,p,v,g,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:C}=u;w|=f.patchFlag&16;const I=f.props||X,S=u.props||X;let F;p&&Gt(p,!1),(F=S.onVnodeBeforeUpdate)&&Ot(F,p,u,f),C&&Qt(u,f,p,"beforeUpdate"),p&&Gt(p,!0);const D=g&&u.type!=="foreignObject";if(b?Ct(f.dynamicChildren,b,y,p,v,D,x):A||Y(f,u,y,null,p,v,D,x,!1),w>0){if(w&16)Pe(y,u,I,S,p,v,g);else if(w&2&&I.class!==S.class&&i(y,"class",null,S.class,g),w&4&&i(y,"style",I.style,S.style,g),w&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Q=W[B],ht=I[Q],ce=S[Q];(ce!==ht||Q==="value")&&i(y,Q,ht,ce,g,f.children,p,v,St)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Pe(y,u,I,S,p,v,g);((F=S.onVnodeUpdated)||C)&&ct(()=>{F&&Ot(F,p,u,f),C&&Qt(u,f,p,"updated")},v)},Ct=(f,u,p,v,g,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],C=w.el&&(w.type===Mt||!Ce(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,C,null,v,g,x,A,!0)}},Pe=(f,u,p,v,g,x,A)=>{if(p!==v){if(p!==X)for(const y in p)!bn(y)&&!(y in v)&&i(f,y,p[y],null,A,u.children,g,x,St);for(const y in v){if(bn(y))continue;const w=v[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,g,x,St)}"value"in v&&i(f,"value",p.value,v.value)}},Qe=(f,u,p,v,g,x,A,y,w)=>{const b=u.el=f?f.el:o(""),C=u.anchor=f?f.anchor:o("");let{patchFlag:I,dynamicChildren:S,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(C,p,v),gt(u.children,p,C,g,x,A,y,w)):I>0&&I&64&&S&&f.dynamicChildren?(Ct(f.dynamicChildren,S,p,g,x,A,y),(u.key!=null||g&&u===g.subTree)&&is(f,u,!0)):Y(f,u,p,C,g,x,A,y,w)},Ge=(f,u,p,v,g,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,A,w):Xn(u,p,v,g,x,A,w):va(f,u,w)},Xn=(f,u,p,v,g,x,A)=>{const y=f.component=Ll(f,v,g);if(Vi(f)&&(y.ctx.renderer=fe),jl(y),y.asyncDep){if(g&&g.registerDep(y,st),!f.el){const w=y.subTree=vt(He);k(null,w,u,p)}return}st(y,f,u,p,g,x,A)},va=(f,u,p)=>{const v=u.component=f.component;if(Yo(f,u,p))if(v.asyncDep&&!v.asyncResolved){V(v,u,p);return}else v.next=u,jo(v.update),v.update();else u.el=f.el,v.vnode=u},st=(f,u,p,v,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:C,bu:I,u:S,parent:F,vnode:D}=f,W=C,B;Gt(f,!1),C?(C.el=D.el,V(f,C,A)):C=D,I&&Qn(I),(B=C.props&&C.props.onVnodeBeforeUpdate)&&Ot(B,F,C,D),Gt(f,!0);const Q=Gn(f),ht=f.subTree;f.subTree=Q,N(ht,Q,m(ht.el),en(ht),f,g,x),C.el=Q.el,W===null&&Wo(f,Q.el),S&&ct(S,g),(B=C.props&&C.props.onVnodeUpdated)&&ct(()=>Ot(B,F,C,D),g)}else{let C;const{el:I,props:S}=u,{bm:F,m:D,parent:W}=f,B=xn(u);if(Gt(f,!1),F&&Qn(F),!B&&(C=S&&S.onVnodeBeforeMount)&&Ot(C,W,u),Gt(f,!0),I&&Jn){const Q=()=>{f.subTree=Gn(f),Jn(I,f.subTree,f,g,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=Gn(f);N(null,Q,p,v,f,g,x),u.el=Q.el}if(D&&ct(D,g),!B&&(C=S&&S.onVnodeMounted)){const Q=u;ct(()=>Ot(C,W,Q),g)}(u.shapeFlag&256||W&&xn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ct(f.a,g),f.isMounted=!0,u=p=v=null}},w=f.effect=new Ur(y,()=>Vr(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,Gt(f,!0),b()},V=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,yl(f,u.props,v,p),_l(f,u.children,p),Oe(),Ta(),Ee()},Y=(f,u,p,v,g,x,A,y,w=!1)=>{const b=f&&f.children,C=f?f.shapeFlag:0,I=u.children,{patchFlag:S,shapeFlag:F}=u;if(S>0){if(S&128){tn(b,I,p,v,g,x,A,y,w);return}else if(S&256){Jt(b,I,p,v,g,x,A,y,w);return}}F&8?(C&16&&St(b,g,x),I!==b&&d(p,I)):C&16?F&16?tn(b,I,p,v,g,x,A,y,w):St(b,g,x,!0):(C&8&&d(p,""),F&16&&gt(I,p,v,g,x,A,y,w))},Jt=(f,u,p,v,g,x,A,y,w)=>{f=f||Fe,u=u||Fe;const b=f.length,C=u.length,I=Math.min(b,C);let S;for(S=0;S<I;S++){const F=u[S]=w?Bt(u[S]):Et(u[S]);N(f[S],F,p,null,g,x,A,y,w)}b>C?St(f,g,x,!0,!1,I):gt(u,p,v,g,x,A,y,w,I)},tn=(f,u,p,v,g,x,A,y,w)=>{let b=0;const C=u.length;let I=f.length-1,S=C-1;for(;b<=I&&b<=S;){const F=f[b],D=u[b]=w?Bt(u[b]):Et(u[b]);if(Ce(F,D))N(F,D,p,null,g,x,A,y,w);else break;b++}for(;b<=I&&b<=S;){const F=f[I],D=u[S]=w?Bt(u[S]):Et(u[S]);if(Ce(F,D))N(F,D,p,null,g,x,A,y,w);else break;I--,S--}if(b>I){if(b<=S){const F=S+1,D=F<C?u[F].el:v;for(;b<=S;)N(null,u[b]=w?Bt(u[b]):Et(u[b]),p,D,g,x,A,y,w),b++}}else if(b>S)for(;b<=I;)kt(f[b],g,x,!0),b++;else{const F=b,D=b,W=new Map;for(b=D;b<=S;b++){const dt=u[b]=w?Bt(u[b]):Et(u[b]);dt.key!=null&&W.set(dt.key,b)}let B,Q=0;const ht=S-D+1;let ce=!1,ba=0;const Te=new Array(ht);for(b=0;b<ht;b++)Te[b]=0;for(b=F;b<=I;b++){const dt=f[b];if(Q>=ht){kt(dt,g,x,!0);continue}let At;if(dt.key!=null)At=W.get(dt.key);else for(B=D;B<=S;B++)if(Te[B-D]===0&&Ce(dt,u[B])){At=B;break}At===void 0?kt(dt,g,x,!0):(Te[At-D]=b+1,At>=ba?ba=At:ce=!0,N(dt,u[At],p,null,g,x,A,y,w),Q++)}const ya=ce?El(Te):Fe;for(B=ya.length-1,b=ht-1;b>=0;b--){const dt=D+b,At=u[dt],xa=dt+1<C?u[dt+1].el:v;Te[b]===0?N(null,At,p,xa,g,x,A,y,w):ce&&(B<0||b!==ya[B]?Zt(At,p,xa,2):B--)}}},Zt=(f,u,p,v,g=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){Zt(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,fe);return}if(A===Mt){r(x,u,p);for(let I=0;I<w.length;I++)Zt(w[I],u,p,v);r(f.anchor,u,p);return}if(A===_n){M(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),ct(()=>y.enter(x),g);else{const{leave:I,delayLeave:S,afterLeave:F}=y,D=()=>r(x,u,p),W=()=>{I(x,()=>{D(),F&&F()})};S?S(x,D,W):W()}else r(x,u,p)},kt=(f,u,p,v=!1,g=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:C,patchFlag:I,dirs:S}=f;if(y!=null&&yr(y,null,p,f,!0),C&256){u.ctx.deactivate(f);return}const F=C&1&&S,D=!xn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Ot(W,u,f),C&6)$s(f.component,p,v);else{if(C&128){f.suspense.unmount(p,v);return}F&&Qt(f,null,u,"beforeUnmount"),C&64?f.type.remove(f,u,p,g,fe,v):b&&(x!==Mt||I>0&&I&64)?St(b,u,p,!1,!0):(x===Mt&&I&384||!g&&C&16)&&St(w,u,p),v&&ga(f)}(D&&(W=A&&A.onVnodeUnmounted)||F)&&ct(()=>{W&&Ot(W,u,f),F&&Qt(f,null,u,"unmounted")},p)},ga=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Mt){zs(p,v);return}if(u===_n){T(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},zs=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},$s=(f,u,p)=>{const{bum:v,scope:g,update:x,subTree:A,um:y}=f;v&&Qn(v),g.stop(),x&&(x.active=!1,kt(A,f,u,p)),y&&ct(y,u),ct(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},St=(f,u,p,v=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)kt(f[A],u,p,v,g)},en=f=>f.shapeFlag&6?en(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ha=(f,u,p)=>{f==null?u._vnode&&kt(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ta(),Bi(),u._vnode=f},fe={p:N,um:kt,m:Zt,r:ga,mt:Xn,mc:gt,pc:Y,pbc:Ct,n:en,o:t};let Vn,Jn;return e&&([Vn,Jn]=e(fe)),{render:ha,hydrate:Vn,createApp:gl(ha,Vn)}}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ol(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function is(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Bt(a[i]),o.el=s.el),n||is(s,o)),o.type===Hn&&(o.el=s.el)}}function El(t){const e=t.slice(),n=[0];let r,a,i,s,o;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,t[n[o]]<c?i=o+1:s=o;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=e[s];return n}const Il=t=>t.__isTeleport,Mt=Symbol.for("v-fgt"),Hn=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),_n=Symbol.for("v-stc");let me=null,Qr=1;function za(t){Qr+=t}function xr(t){return t?t.__v_isVNode===!0:!1}function Ce(t,e){return t.type===e.type&&t.key===e.key}const Bn="__vInternal",ss=({key:t})=>t??null,kn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||lt(t)||L(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function Pl(t,e=null,n=null,r=0,a=null,i=t===Mt?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ss(e),ref:e&&kn(e),scopeId:Ki,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Pt};return o?(Gr(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),Qr>0&&!s&&me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&me.push(l),l}const vt=Tl;function Tl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===ll)&&(t=He),xr(t)){const o=we(t,e,!0);return n&&Gr(o,n),Qr>0&&!i&&me&&(o.shapeFlag&6?me[me.indexOf(t)]=o:me.push(o)),o.patchFlag|=-2,o}if(Ul(t)&&(t=t.__vccOpts),e){e=Cl(e);let{class:o,style:l}=e;o&&!et(o)&&(e.class=zr(o)),Z(l)&&(Di(l)&&!R(l)&&(l=tt({},l)),e.style=Dr(l))}const s=et(t)?1:Ko(t)?128:Il(t)?64:Z(t)?4:L(t)?2:0;return Pl(t,e,n,r,a,s,i,!0)}function Cl(t){return t?Di(t)||Bn in t?tt({},t):t:null}function we(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=t,o=e?Ml(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&ss(o),ref:e&&e.ref?n&&a?R(a)?a.concat(kn(e)):[a,kn(e)]:kn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&we(t.ssContent),ssFallback:t.ssFallback&&we(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Sl(t=" ",e=0){return vt(Hn,null,t,e)}function Nl(t,e){const n=vt(_n,null,t);return n.staticCount=e,n}function Et(t){return t==null||typeof t=="boolean"?vt(He):R(t)?vt(Mt,null,t.slice()):typeof t=="object"?Bt(t):vt(Hn,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:we(t)}function Gr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),Gr(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Bn in e)?e._ctx=Pt:a===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[Sl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ml(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=zr([e.class,r.class]));else if(a==="style")e.style=Dr([e.style,r.style]);else if(Fn(a)){const i=e[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(e[a]=i?[].concat(i,s):s)}else a!==""&&(e[a]=r[a])}return e}function Ot(t,e,n,r=null){_t(t,e,7,[n,r])}const Fl=Gi();let Rl=0;function Ll(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Fl,i={uid:Rl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ro(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,a),emitsOptions:Wi(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$o.bind(null,i),t.ce&&t.ce(i),i}let it=null,ta,ue,$a="__VUE_INSTANCE_SETTERS__";(ue=lr()[$a])||(ue=lr()[$a]=[]),ue.push(t=>it=t),ta=t=>{ue.length>1?ue.forEach(e=>e(t)):ue[0](t)};const _e=t=>{ta(t),t.scope.on()},se=()=>{it&&it.scope.off(),ta(null)};function os(t){return t.vnode.shapeFlag&4}let Be=!1;function jl(t,e=!1){Be=e;const{props:n,children:r}=t.vnode,a=os(t);bl(t,n,a,e),wl(t,r);const i=a?Dl(t,e):void 0;return Be=!1,i}function Dl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zi(new Proxy(t.ctx,fl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?$l(t):null;_e(t),Oe();const i=Wt(r,t,0,[t.props,a]);if(Ee(),se(),Ai(i)){if(i.then(se,se),e)return i.then(s=>{Ua(t,s,e)}).catch(s=>{zn(s,t,0)});t.asyncDep=i}else Ua(t,i,e)}else ls(t,e)}function Ua(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=$i(e)),ls(t,n)}let Ha;function ls(t,e,n){const r=t.type;if(!t.render){if(!e&&Ha&&!r.render){const a=r.template||Jr(t).template;if(a){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:l}=r,c=tt(tt({isCustomElement:i,delimiters:o},s),l);r.render=Ha(a,c)}}t.render=r.render||wt}{_e(t),Oe();try{cl(t)}finally{Ee(),se()}}}function zl(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}}))}function $l(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return zl(t)},slots:t.slots,emit:t.emit,expose:e}}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($i(zi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Le)return Le[n](t)},has(e,n){return n in e||n in Le}}))}function Ul(t){return L(t)&&"__vccOpts"in t}const te=(t,e)=>Mo(t,e,Be);function Hl(t,e,n){const r=arguments.length;return r===2?Z(e)&&!R(e)?xr(e)?vt(t,null,[e]):vt(t,e):vt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xr(n)&&(n=[n]),vt(t,e,n))}const Bl=Symbol.for("v-scx"),Yl=()=>wn(Bl),Wl="3.3.7",Kl="http://www.w3.org/2000/svg",ne=typeof document<"u"?document:null,Ba=ne&&ne.createElement("template"),ql={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?ne.createElementNS(Kl,t):ne.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>ne.createTextNode(t),createComment:t=>ne.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ne.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const s=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ba.innerHTML=r?`<svg>${t}</svg>`:t;const o=Ba.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xl=Symbol("_vtc");function Vl(t,e,n){const r=t[Xl];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jl=Symbol("_vod");function Zl(t,e,n){const r=t.style,a=et(n);if(n&&!a){if(e&&!et(e))for(const i in e)n[i]==null&&wr(r,i,"");for(const i in n)wr(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Jl in t&&(r.display=i)}}const Ya=/\s*!important$/;function wr(t,e,n){if(R(n))n.forEach(r=>wr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ql(t,e);Ya.test(n)?t.setProperty(Ae(r),n.replace(Ya,""),"important"):t[r]=n}}const Wa=["Webkit","Moz","ms"],er={};function Ql(t,e){const n=er[e];if(n)return n;let r=ye(e);if(r!=="filter"&&r in t)return er[e]=r;r=Oi(r);for(let a=0;a<Wa.length;a++){const i=Wa[a]+r;if(i in t)return er[e]=i}return e}const Ka="http://www.w3.org/1999/xlink";function Gl(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ka,e.slice(6,e.length)):t.setAttributeNS(Ka,e,n);else{const i=no(e);n==null||i&&!Ei(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tf(t,e,n,r,a,i,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,a,i),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const c=o==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ei(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ef(t,e,n,r){t.addEventListener(e,n,r)}function nf(t,e,n,r){t.removeEventListener(e,n,r)}const qa=Symbol("_vei");function rf(t,e,n,r,a=null){const i=t[qa]||(t[qa]={}),s=i[e];if(r&&s)s.value=r;else{const[o,l]=af(e);if(r){const c=i[e]=lf(r,a);ef(t,o,c,l)}else s&&(nf(t,o,s,l),i[e]=void 0)}}const Xa=/(?:Once|Passive|Capture)$/;function af(t){let e;if(Xa.test(t)){e={};let r;for(;r=t.match(Xa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ae(t.slice(2)),e]}let nr=0;const sf=Promise.resolve(),of=()=>nr||(sf.then(()=>nr=0),nr=Date.now());function lf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_t(ff(r,n.value),e,5,[r])};return n.value=t,n.attached=of(),n}function ff(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const Va=/^on[a-z]/,cf=(t,e,n,r,a=!1,i,s,o,l)=>{e==="class"?Vl(t,r,a):e==="style"?Zl(t,n,r):Fn(e)?Rr(e)||rf(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uf(t,e,r,a))?tf(t,e,r,i,s,o,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gl(t,e,r,a))};function uf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Va.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Va.test(e)&&et(n)?!1:e in t}const df=tt({patchProp:cf},ql);let Ja;function mf(){return Ja||(Ja=kl(df))}const pf=(...t)=>{const e=mf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=vf(r);if(!a)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},e};function vf(t){return et(t)?document.querySelector(t):t}const gf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},hf={},bf=Nl('<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"><header><div class="Header"><img src="https://www.istu.edu/upload/iblock/f55/logo_1.png" class="logo"><div class="name"> Производственные партнеры <br> ИРНИТУ </div><div class="icons"><i class="fa-solid fa-globe"></i><i class="fa-regular fa-circle-user" style="margin-left:7px;"></i><i class="fa-regular fa-calendar-days" style="margin-left:7px;"></i></div></div></header><body><div class="container"><div class="Institutes" style="background-image:url(&#39;src/logobrics.jpg&#39;);"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Байкальский институт БРИКС</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes" style="background-image:url(&#39;src/logoat.jpg&#39;);"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт авиамашиностроения и транспорта</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes" style="background-image:url(&#39;src/logoah.jpg&#39;);"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт архитектуры строительства и дизайна</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes" style="background-image:url(&#39;src/logovt.jpg&#39;);"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт высоких технологий</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт заочно-вечернего обучения</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes" style="background-image:url(&#39;src/proc.png&#39;);"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт Информационных Технологий и Анализа Данных</div><div class="specText"><strong>Специальности:</strong>АСУ,ЭВМ,ИСТ,ИББ </div><div class="specText"><strong>Должности:</strong>Инженер-программист, Тестировщик, Front-end разработчик </div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт недропользования</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт &quot;Сибирская школа геонаук&quot;</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт экономики, управления и права</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт Энергетики</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">МРЦПК</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Институт лингвистики и межкультурной коммуникации</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Филиал ИРНИТУ в г. Усолье-Сибирском</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Центр образовательных программ магистратуры и аспирантуры</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Машиностроительный колледж</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div><div class="Institutes"><div class="textInst"><div style="margin-top:15px;margin-left:10px;margin-bottom:30px;">Геологоразведочный техникум</div><div class="specText"><strong>Специальности:</strong></div><div class="specText"><strong>Должности:</strong></div></div></div></div></body>',5);function yf(t,e){return bf}const xf=gf(hf,[["render",yf]]);function Za(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Za(Object(n),!0).forEach(function(r){G(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Za(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cn(t){"@babel/helpers - typeof";return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cn(t)}function wf(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _f(t,e,n){return e&&Qa(t.prototype,e),n&&Qa(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function na(t,e){return Af(t)||Ef(t,e)||fs(t,e)||Pf()}function Ve(t){return kf(t)||Of(t)||fs(t)||If()}function kf(t){if(Array.isArray(t))return _r(t)}function Af(t){if(Array.isArray(t))return t}function Of(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ef(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(t);!(a=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function fs(t,e){if(t){if(typeof t=="string")return _r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _r(t,e)}}function _r(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function If(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ga=function(){},ra={},cs={},us=null,ds={mark:Ga,measure:Ga};try{typeof window<"u"&&(ra=window),typeof document<"u"&&(cs=document),typeof MutationObserver<"u"&&(us=MutationObserver),typeof performance<"u"&&(ds=performance)}catch{}var Tf=ra.navigator||{},ti=Tf.userAgent,ei=ti===void 0?"":ti,qt=ra,q=cs,ni=us,fn=ds;qt.document;var $t=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",ms=~ei.indexOf("MSIE")||~ei.indexOf("Trident/"),cn,un,dn,mn,pn,Lt="___FONT_AWESOME___",kr=16,ps="fa",vs="svg-inline--fa",oe="data-fa-i2svg",Ar="data-fa-pseudo-element",Cf="data-fa-pseudo-element-pending",aa="data-prefix",ia="data-icon",ri="fontawesome-i2svg",Sf="async",Nf=["HTML","HEAD","STYLE","SCRIPT"],gs=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",sa=[K,J];function Je(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Ye=Je((cn={},G(cn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),G(cn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),cn)),We=Je((un={},G(un,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),G(un,J,{solid:"fass",regular:"fasr",light:"fasl"}),un)),Ke=Je((dn={},G(dn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),G(dn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),dn)),Mf=Je((mn={},G(mn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),G(mn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),mn)),Ff=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,hs="fa-layers-text",Rf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Lf=Je((pn={},G(pn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),G(pn,J,{900:"fass",400:"fasr",300:"fasl"}),pn)),bs=[1,2,3,4,5,6,7,8,9,10],jf=bs.concat([11,12,13,14,15,16,17,18,19,20]),Df=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qe=new Set;Object.keys(We[K]).map(qe.add.bind(qe));Object.keys(We[J]).map(qe.add.bind(qe));var zf=[].concat(sa,Ve(qe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(bs.map(function(t){return"".concat(t,"x")})).concat(jf.map(function(t){return"w-".concat(t)})),je=qt.FontAwesomeConfig||{};function $f(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Uf(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var Hf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hf.forEach(function(t){var e=na(t,2),n=e[0],r=e[1],a=Uf($f(n));a!=null&&(je[r]=a)})}var ys={styleDefault:"solid",familyDefault:"classic",cssPrefix:ps,replacementClass:vs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};je.familyPrefix&&(je.cssPrefix=je.familyPrefix);var ke=E(E({},ys),je);ke.autoReplaceSvg||(ke.observeMutations=!1);var P={};Object.keys(ys).forEach(function(t){Object.defineProperty(P,t,{enumerable:!0,set:function(n){ke[t]=n,De.forEach(function(r){return r(P)})},get:function(){return ke[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){ke.cssPrefix=e,De.forEach(function(n){return n(P)})},get:function(){return ke.cssPrefix}});qt.FontAwesomeConfig=P;var De=[];function Bf(t){return De.push(t),function(){De.splice(De.indexOf(t),1)}}var Ht=kr,Tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yf(t){if(!(!t||!$t)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return q.head.insertBefore(e,r),t}}var Wf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xe(){for(var t=12,e="";t-- >0;)e+=Wf[Math.random()*62|0];return e}function Ie(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function oa(t){return t.classList?Ie(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xs(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(xs(t[n]),'" ')},"").trim()}function Yn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function la(t){return t.size!==Tt.size||t.x!==Tt.x||t.y!==Tt.y||t.rotate!==Tt.rotate||t.flipX||t.flipY}function qf(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Xf(t){var e=t.transform,n=t.width,r=n===void 0?kr:n,a=t.height,i=a===void 0?kr:a,s=t.startCentered,o=s===void 0?!1:s,l="";return o&&ms?l+="translate(".concat(e.x/Ht-r/2,"em, ").concat(e.y/Ht-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Ht,"em), calc(-50% + ").concat(e.y/Ht,"em)) "):l+="translate(".concat(e.x/Ht,"em, ").concat(e.y/Ht,"em) "),l+="scale(".concat(e.size/Ht*(e.flipX?-1:1),", ").concat(e.size/Ht*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Vf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ws(){var t=ps,e=vs,n=P.cssPrefix,r=P.replacementClass,a=Vf;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ai=!1;function rr(){P.autoAddCss&&!ai&&(Yf(ws()),ai=!0)}var Jf={mixout:function(){return{dom:{css:ws,insertCss:rr}}},hooks:function(){return{beforeDOMElementCreation:function(){rr()},beforeI2svg:function(){rr()}}}},jt=qt||{};jt[Lt]||(jt[Lt]={});jt[Lt].styles||(jt[Lt].styles={});jt[Lt].hooks||(jt[Lt].hooks={});jt[Lt].shims||(jt[Lt].shims=[]);var xt=jt[Lt],_s=[],Zf=function t(){q.removeEventListener("DOMContentLoaded",t),Sn=1,_s.map(function(e){return e()})},Sn=!1;$t&&(Sn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Sn||q.addEventListener("DOMContentLoaded",Zf));function Qf(t){$t&&(Sn?setTimeout(t,0):_s.push(t))}function Ze(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?xs(t):"<".concat(e," ").concat(Kf(r),">").concat(i.map(Ze).join(""),"</").concat(e,">")}function ii(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gf=function(e,n){return function(r,a,i,s){return e.call(n,r,a,i,s)}},ar=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=a!==void 0?Gf(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,e[c],c,e);return d};function tc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Or(t){var e=tc(t);return e.length===1?e[0].toString(16):null}function ec(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function si(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Er(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=si(e);typeof xt.hooks.addPack=="function"&&!a?xt.hooks.addPack(t,si(e)):xt.styles[t]=E(E({},xt.styles[t]||{}),i),t==="fas"&&Er("fa",e)}var vn,gn,hn,pe=xt.styles,nc=xt.shims,rc=(vn={},G(vn,K,Object.values(Ke[K])),G(vn,J,Object.values(Ke[J])),vn),fa=null,ks={},As={},Os={},Es={},Is={},ac=(gn={},G(gn,K,Object.keys(Ye[K])),G(gn,J,Object.keys(Ye[J])),gn);function ic(t){return~zf.indexOf(t)}function sc(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!ic(a)?a:null}var Ps=function(){var e=function(i){return ar(pe,function(s,o,l){return s[l]=ar(o,i,{}),s},{})};ks=e(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),As=e(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Is=e(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in pe||P.autoFetchSvg,r=ar(nc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Os=r.names,Es=r.unicodes,fa=Wn(P.styleDefault,{family:P.familyDefault})};Bf(function(t){fa=Wn(t.styleDefault,{family:P.familyDefault})});Ps();function ca(t,e){return(ks[t]||{})[e]}function oc(t,e){return(As[t]||{})[e]}function ae(t,e){return(Is[t]||{})[e]}function Ts(t){return Os[t]||{prefix:null,iconName:null}}function lc(t){var e=Es[t],n=ca("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xt(){return fa}var ua=function(){return{prefix:null,iconName:null,rest:[]}};function Wn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=Ye[r][t],i=We[r][t]||We[r][a],s=t in xt.styles?t:null;return i||s||null}var oi=(hn={},G(hn,K,Object.keys(Ke[K])),G(hn,J,Object.keys(Ke[J])),hn);function Kn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},G(e,K,"".concat(P.cssPrefix,"-").concat(K)),G(e,J,"".concat(P.cssPrefix,"-").concat(J)),e),s=null,o=K;(t.includes(i[K])||t.some(function(c){return oi[K].includes(c)}))&&(o=K),(t.includes(i[J])||t.some(function(c){return oi[J].includes(c)}))&&(o=J);var l=t.reduce(function(c,d){var m=sc(P.cssPrefix,d);if(pe[d]?(d=rc[o].includes(d)?Mf[o][d]:d,s=d,c.prefix=d):ac[o].indexOf(d)>-1?(s=d,c.prefix=Wn(d,{family:o})):m?c.iconName=m:d!==P.replacementClass&&d!==i[K]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=s==="fa"?Ts(c.iconName):{},_=ae(c.prefix,c.iconName);h.prefix&&(s=null),c.iconName=h.iconName||_||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!pe.far&&pe.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},ua());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===J&&(pe.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ae(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Xt()||"fas"),l}var fc=function(){function t(){wf(this,t),this.definitions={}}return _f(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Er(o,s[o]);var l=Ke[K][o];l&&Er(l,s[o]),Ps()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),t}(),li=[],ve={},be={},cc=Object.keys(be);function uc(t,e){var n=e.mixoutsTo;return li=t,ve={},Object.keys(be).forEach(function(r){cc.indexOf(r)===-1&&delete be[r]}),li.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Cn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){ve[s]||(ve[s]=[]),ve[s].push(i[s])})}r.provides&&r.provides(be)}),n}function Ir(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ve[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function le(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ve[t]||[];a.forEach(function(i){i.apply(null,n)})}function Dt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return be[t]?be[t].apply(null,e):void 0}function Pr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Xt();if(e)return e=ae(n,e)||e,ii(Cs.definitions,n,e)||ii(xt.styles,n,e)}var Cs=new fc,dc=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,le("noAuto")},mc={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $t?(le("beforeI2svg",e),Dt("pseudoElements2svg",e),Dt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Qf(function(){vc({autoReplaceSvgRoot:n}),le("watch",e)})}},pc={icon:function(e){if(e===null)return null;if(Cn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ae(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Wn(e[0]);return{prefix:r,iconName:ae(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Ff))){var a=Kn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Xt(),iconName:ae(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Xt();return{prefix:i,iconName:ae(i,e)||e}}}},mt={noAuto:dc,config:P,dom:mc,parse:pc,library:Cs,findIconDefinition:Pr,toHtml:Ze},vc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(xt.styles).length>0||P.autoFetchSvg)&&$t&&P.autoReplaceSvg&&mt.dom.i2svg({node:r})};function qn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ze(r)})}}),Object.defineProperty(t,"node",{get:function(){if($t){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function gc(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,s=t.transform;if(la(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Yn(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function hc(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function da(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,s=t.transform,o=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,h=t.watchable,_=h===void 0?!1:h,j=r.found?r:n,N=j.width,z=j.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(pt){return m.classes.indexOf(pt)===-1}).filter(function(pt){return pt!==""||!!pt}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};_&&(M.attributes[oe]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Xe())},children:[l]}),delete M.attributes.title);var H=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},T),m.styles)}),nt=r.found&&n.found?Dt("generateAbstractMask",H)||{children:[],attributes:{}}:Dt("generateAbstractIcon",H)||{children:[],attributes:{}},rt=nt.children,gt=nt.attributes;return H.children=rt,H.attributes=gt,o?hc(H):gc(H)}function fi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,s=t.extra,o=t.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[oe]="");var d=E({},s.styles);la(a)&&(d.transform=Xf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Yn(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function bc(t){var e=t.content,n=t.title,r=t.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Yn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ir=xt.styles;function Tr(t){var e=t[0],n=t[1],r=t.slice(4),a=na(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var yc={found:!1,width:512,height:512};function xc(t,e){!gs&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Cr(t,e){var n=e;return e==="fa"&&P.styleDefault!==null&&(e=Xt()),new Promise(function(r,a){if(Dt("missingIconAbstract"),n==="fa"){var i=Ts(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ir[e]&&ir[e][t]){var s=ir[e][t];return r(Tr(s))}xc(t,e),r(E(E({},yc),{},{icon:P.showMissingIcons&&t?Dt("missingIconAbstract")||{}:{}}))})}var ci=function(){},Sr=P.measurePerformance&&fn&&fn.mark&&fn.measure?fn:{mark:ci,measure:ci},Me='FA "6.4.2"',wc=function(e){return Sr.mark("".concat(Me," ").concat(e," begins")),function(){return Ss(e)}},Ss=function(e){Sr.mark("".concat(Me," ").concat(e," ends")),Sr.measure("".concat(Me," ").concat(e),"".concat(Me," ").concat(e," begins"),"".concat(Me," ").concat(e," ends"))},ma={begin:wc,end:Ss},An=function(){};function ui(t){var e=t.getAttribute?t.getAttribute(oe):null;return typeof e=="string"}function _c(t){var e=t.getAttribute?t.getAttribute(aa):null,n=t.getAttribute?t.getAttribute(ia):null;return e&&n}function kc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function Ac(){if(P.autoReplaceSvg===!0)return On.replace;var t=On[P.autoReplaceSvg];return t||On.replace}function Oc(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function Ec(t){return q.createElement(t)}function Ns(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Oc:Ec:n;if(typeof t=="string")return q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){a.appendChild(Ns(s,{ceFn:r}))}),a}function Ic(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var On={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Ns(a),n)}),n.getAttribute(oe)===null&&P.keepOriginalSource){var r=q.createComment(Ic(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~oa(n).indexOf(P.replacementClass))return On.replace(e);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===P.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return Ze(o)}).join(`
`);n.setAttribute(oe,""),n.innerHTML=s}};function di(t){t()}function Ms(t,e){var n=typeof e=="function"?e:An;if(t.length===0)n();else{var r=di;P.mutateApproach===Sf&&(r=qt.requestAnimationFrame||di),r(function(){var a=Ac(),i=ma.begin("mutate");t.map(a),i(),n()})}}var pa=!1;function Fs(){pa=!0}function Nr(){pa=!1}var Nn=null;function mi(t){if(ni&&P.observeMutations){var e=t.treeCallback,n=e===void 0?An:e,r=t.nodeCallback,a=r===void 0?An:r,i=t.pseudoElementsCallback,s=i===void 0?An:i,o=t.observeMutationsRoot,l=o===void 0?q:o;Nn=new ni(function(c){if(!pa){var d=Xt();Ie(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ui(m.addedNodes[0])&&(P.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&ui(m.target)&&~Df.indexOf(m.attributeName))if(m.attributeName==="class"&&_c(m.target)){var h=Kn(oa(m.target)),_=h.prefix,j=h.iconName;m.target.setAttribute(aa,_||d),j&&m.target.setAttribute(ia,j)}else kc(m.target)&&a(m.target)})}}),$t&&Nn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pc(){Nn&&Nn.disconnect()}function Tc(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Cc(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Kn(oa(t));return a.prefix||(a.prefix=Xt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=oc(a.prefix,t.innerText)||ca(a.prefix,Or(t.innerText))),!a.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Sc(t){var e=Ie(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Xe()):(e["aria-hidden"]="true",e.focusable="false")),e}function Nc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cc(t),r=n.iconName,a=n.prefix,i=n.rest,s=Sc(t),o=Ir("parseNodeAttributes",{},t),l=e.styleParser?Tc(t):[];return E({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Mc=xt.styles;function Rs(t){var e=P.autoReplaceSvg==="nest"?pi(t,{styleParser:!1}):pi(t);return~e.extra.classes.indexOf(hs)?Dt("generateLayersText",t,e):Dt("generateSvgReplacementMutation",t,e)}var Vt=new Set;sa.map(function(t){Vt.add("fa-".concat(t))});Object.keys(Ye[K]).map(Vt.add.bind(Vt));Object.keys(Ye[J]).map(Vt.add.bind(Vt));Vt=Ve(Vt);function vi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$t)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ri,"-").concat(m))},a=function(m){return n.remove("".concat(ri,"-").concat(m))},i=P.autoFetchSvg?Vt:sa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Mc));i.includes("fa")||i.push("fa");var s=[".".concat(hs,":not([").concat(oe,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(oe,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ie(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ma.begin("onTree"),c=o.reduce(function(d,m){try{var h=Rs(m);h&&d.push(h)}catch(_){gs||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){Ms(h,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(h){l(),m(h)})})}function Fc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rs(t).then(function(n){n&&Ms([n],e)})}function Rc(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Pr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Pr(a||{})),t(r,E(E({},n),{},{mask:a}))}}var Lc=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Tt:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,_=n.titleId,j=_===void 0?null:_,N=n.classes,z=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,T=M===void 0?{}:M;if(e){var H=e.prefix,nt=e.iconName,rt=e.icon;return qn(E({type:"icon"},e),function(){return le("beforeDOMElementCreation",{iconDefinition:e,params:n}),P.autoA11y&&(h?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(j||Xe()):(O["aria-hidden"]="true",O.focusable="false")),da({icons:{main:Tr(rt),mask:l?Tr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:nt,transform:E(E({},Tt),a),symbol:s,title:h,maskId:d,titleId:j,extra:{attributes:O,styles:T,classes:z}})})}},jc={mixout:function(){return{icon:Rc(Lc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vi,n.nodeCallback=Fc,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,s=i===void 0?function(){}:i;return vi(a,s)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(_,j){Promise.all([Cr(a,o),d.iconName?Cr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=na(N,2),k=z[0],O=z[1];_([n,da({icons:{main:k,mask:O},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:h,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Yn(o);l.length>0&&(a.style=l);var c;return la(s)&&(c=Dt("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Dc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qn({type:"layer"},function(){le("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Ve(i)).join(" ")},children:s}]})}}}},zc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return qn({type:"counter",content:n},function(){return le("beforeDOMElementCreation",{content:n,params:r}),bc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Ve(o))}})})}}}},$c={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Tt:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,_=h===void 0?{}:h;return qn({type:"text",content:n},function(){return le("beforeDOMElementCreation",{content:n,params:r}),fi({content:n,transform:E(E({},Tt),i),title:o,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Ve(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(ms){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,fi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Uc=new RegExp('"',"ug"),gi=[1105920,1112319];function Hc(t){var e=t.replace(Uc,""),n=ec(e,0),r=n>=gi[0]&&n<=gi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Or(a?e[0]:e),isSecondary:r||a}}function hi(t,e){var n="".concat(Cf).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ie(t.children),s=i.filter(function(rt){return rt.getAttribute(Ar)===e})[0],o=qt.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(Rf),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?J:K,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?We[h][l[2].toLowerCase()]:Lf[h][c],j=Hc(m),N=j.value,z=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=ca(_,N),M=O;if(k){var T=lc(N);T.iconName&&T.prefix&&(O=T.iconName,_=T.prefix)}if(O&&!z&&(!s||s.getAttribute(aa)!==_||s.getAttribute(ia)!==M)){t.setAttribute(n,M),s&&t.removeChild(s);var H=Nc(),nt=H.extra;nt.attributes[Ar]=e,Cr(O,_).then(function(rt){var gt=da(E(E({},H),{},{icons:{main:rt,mask:ua()},prefix:_,iconName:M,extra:nt,watchable:!0})),pt=q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(pt,t.firstChild):t.appendChild(pt),pt.outerHTML=gt.map(function(Ct){return Ze(Ct)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bc(t){return Promise.all([hi(t,"::before"),hi(t,"::after")])}function Yc(t){return t.parentNode!==document.head&&!~Nf.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ar)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function bi(t){if($t)return new Promise(function(e,n){var r=Ie(t.querySelectorAll("*")).filter(Yc).map(Bc),a=ma.begin("searchPseudoElements");Fs(),Promise.all(r).then(function(){a(),Nr(),e()}).catch(function(){a(),Nr(),n()})})}var Wc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&bi(a)}}},yi=!1,Kc={mixout:function(){return{dom:{unwatch:function(){Fs(),yi=!0}}}},hooks:function(){return{bootstrap:function(){mi(Ir("mutationObserverCallbacks",{}))},noAuto:function(){Pc()},watch:function(n){var r=n.observeMutationsRoot;yi?Nr():mi(Ir("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},qc={mixout:function(){return{parse:{transform:function(n){return xi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=xi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(s/2*-1," -256)")},_={outer:o,inner:m,path:h};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},sr={x:0,y:0,width:"100%",height:"100%"};function wi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Xc(t){return t.tag==="g"?t.children:[t]}var Vc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Kn(a.split(" ").map(function(s){return s.trim()})):ua();return i.prefix||(i.prefix=Xt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,h=s.icon,_=qf({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},sr),{},{fill:"white"})},N=d.children?{children:d.children.map(wi)}:{},z={tag:"g",attributes:E({},_.inner),children:[wi(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[z]},O="mask-".concat(o||Xe()),M="clip-".concat(o||Xe()),T={tag:"mask",attributes:E(E({},sr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Xc(h)},T]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},sr)}),{children:r,attributes:a}}}},Jc={provides:function(e){var n=!1;qt.matchMedia&&(n=qt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Qc=[Jf,jc,Dc,zc,$c,Wc,Kc,qc,Vc,Jc,Zc];uc(Qc,{mixoutsTo:mt});mt.noAuto;mt.config;var Gc=mt.library;mt.dom;var Mr=mt.parse;mt.findIconDefinition;mt.toHtml;var tu=mt.icon;mt.layer;mt.text;mt.counter;function _i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_i(Object(n),!0).forEach(function(r){ft(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mn(t){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mn(t)}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function nu(t,e){if(t==null)return{};var n=eu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ls={exports:{}};(function(t){(function(e){var n=function(k,O,M){if(!c(O)||m(O)||h(O)||_(O)||l(O))return O;var T,H=0,nt=0;if(d(O))for(T=[],nt=O.length;H<nt;H++)T.push(n(k,O[H],M));else{T={};for(var rt in O)Object.prototype.hasOwnProperty.call(O,rt)&&(T[k(rt,M)]=n(k,O[rt],M))}return T},r=function(k,O){O=O||{};var M=O.separator||"_",T=O.split||/(?=[A-Z])/;return k.split(T).join(M)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(k,O){return r(k,O).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},h=function(k){return o.call(k)=="[object RegExp]"},_=function(k){return o.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(T,H){return M(T,k,H)}},z={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(s,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=z:e.humps=z})(ru)})(Ls);var au=Ls.exports,iu=["class","style"];function su(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=au.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function ou(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function js(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return js(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=ou(d);break;case"style":l.style=su(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=nu(n,iu);return Hl(t.tag,Ft(Ft(Ft({},e),{},{class:a.class,style:Ft(Ft({},a.style),s)},a.attrs),o),r)}var Ds=!1;try{Ds=!0}catch{}function lu(){if(!Ds&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function or(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ft({},t,e):{}}function fu(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ft(e,"fa-".concat(t.size),t.size!==null),ft(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ft(e,"fa-pull-".concat(t.pull),t.pull!==null),ft(e,"fa-swap-opacity",t.swapOpacity),ft(e,"fa-bounce",t.bounce),ft(e,"fa-shake",t.shake),ft(e,"fa-beat",t.beat),ft(e,"fa-fade",t.fade),ft(e,"fa-beat-fade",t.beatFade),ft(e,"fa-flash",t.flash),ft(e,"fa-spin-pulse",t.spinPulse),ft(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ki(t){if(t&&Mn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mr.icon)return Mr.icon(t);if(t===null)return null;if(Mn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var cu=Vo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=te(function(){return ki(e.icon)}),i=te(function(){return or("classes",fu(e))}),s=te(function(){return or("transform",typeof e.transform=="string"?Mr.transform(e.transform):e.transform)}),o=te(function(){return or("mask",ki(e.mask))}),l=te(function(){return tu(a.value,Ft(Ft(Ft(Ft({},i.value),s.value),o.value),{},{symbol:e.symbol,title:e.title}))});yn(l,function(d){if(!d)return lu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=te(function(){return l.value?js(l.value.abstract[0],{},r):null});return function(){return c.value}}}),uu={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};Gc.add(uu);pf(xf).component("font-awesome-icon",cu).mount("#app");
