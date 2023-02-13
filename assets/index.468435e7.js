(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function h(){}function Bt(r,e){for(const t in e)r[t]=e[t];return r}function jt(r){return r()}function ct(){return Object.create(null)}function oe(r){r.forEach(jt)}function Je(r){return typeof r=="function"}function N(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Ce;function ue(r,e){return Ce||(Ce=document.createElement("a")),Ce.href=e,r===Ce.href}function rn(r){return Object.keys(r).length===0}function Ht(r,...e){if(r==null)return h;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ge(r,e,t){r.$$.on_destroy.push(Ht(e,t))}function x(r,e){r.appendChild(e)}function m(r,e,t){r.insertBefore(e,t||null)}function p(r){r.parentNode.removeChild(r)}function Ie(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function g(r){return document.createElement(r)}function Te(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function ge(r){return document.createTextNode(r)}function $(){return ge(" ")}function Ve(){return ge("")}function ee(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function b(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function sn(r){return Array.from(r.childNodes)}function Me(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function ze(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function fe(r,e,t){r.classList[t?"add":"remove"](e)}function on(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}class We{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Te(t.nodeName):this.e=g(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)m(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}function He(r,e){return new r(e)}let Ee;function $e(r){Ee=r}function Ke(){if(!Ee)throw new Error("Function called outside component initialization");return Ee}function an(r){Ke().$$.after_update.push(r)}function ln(r){Ke().$$.on_destroy.push(r)}function Ye(){const r=Ke();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=on(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function ce(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Se=[],ut=[],Xe=[],ft=[],Ft=Promise.resolve();let Qe=!1;function qt(){Qe||(Qe=!0,Ft.then(Ot))}function Pt(){return qt(),Ft}function Ze(r){Xe.push(r)}const Oe=new Set;let Re=0;function Ot(){const r=Ee;do{for(;Re<Se.length;){const e=Se[Re];Re++,$e(e),cn(e.$$)}for($e(null),Se.length=0,Re=0;ut.length;)ut.pop()();for(let e=0;e<Xe.length;e+=1){const t=Xe[e];Oe.has(t)||(Oe.add(t),t())}Xe.length=0}while(Se.length);for(;ft.length;)ft.pop()();Qe=!1,Oe.clear(),$e(r)}function cn(r){if(r.fragment!==null){r.update(),oe(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Ze)}}const Be=new Set;let me;function we(){me={r:0,c:[],p:me}}function ve(){me.r||oe(me.c),me=me.p}function R(r,e){r&&r.i&&(Be.delete(r),r.i(e))}function D(r,e,t,n){if(r&&r.o){if(Be.has(r))return;Be.add(r),me.c.push(()=>{Be.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function Wt(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const a=r[s],l=e[s];if(l){for(const o in a)o in l||(n[o]=1);for(const o in l)i[o]||(t[o]=l[o],i[o]=1);r[s]=l}else for(const o in a)i[o]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Qt(r){return typeof r=="object"&&r!==null?r:{}}function P(r){r&&r.c()}function F(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||Ze(()=>{const a=r.$$.on_mount.map(jt).filter(Je);r.$$.on_destroy?r.$$.on_destroy.push(...a):oe(a),r.$$.on_mount=[]}),s.forEach(Ze)}function q(r,e){const t=r.$$;t.fragment!==null&&(oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function un(r,e){r.$$.dirty[0]===-1&&(Se.push(r),qt(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function L(r,e,t,n,i,s,a,l=[-1]){const o=Ee;$e(r);const c=r.$$={fragment:null,ctx:[],props:s,update:h,not_equal:i,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ct(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(v,d,...f)=>{const _=f.length?f[0]:d;return c.ctx&&i(c.ctx[v],c.ctx[v]=_)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](_),u&&un(r,v)),d}):[],c.update(),u=!0,oe(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const v=sn(e.target);c.fragment&&c.fragment.l(v),v.forEach(p)}else c.fragment&&c.fragment.c();e.intro&&R(r.$$.fragment),F(r,e.target,e.anchor,e.customElement),Ot()}$e(o)}class C{$destroy(){q(this,1),this.$destroy=h}$on(e,t){if(!Je(t))return h;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!rn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fn="/assets/nexus_header.ba62d497.png",_e=[];function Zt(r,e){return{subscribe:et(r,e).subscribe}}function et(r,e=h){let t;const n=new Set;function i(l){if(N(r,l)&&(r=l,t)){const o=!_e.length;for(const c of n)c[1](),_e.push(c,r);if(o){for(let c=0;c<_e.length;c+=2)_e[c][0](_e[c+1]);_e.length=0}}}function s(l){i(l(r))}function a(l,o=h){const c=[l,o];return n.add(c),n.size===1&&(t=e(i)||h),l(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function Jt(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return Zt(t,a=>{let l=!1;const o=[];let c=0,u=h;const v=()=>{if(c)return;u();const f=e(n?o[0]:o,a);s?a(f):u=Je(f)?f:h},d=i.map((f,_)=>Ht(f,E=>{o[_]=E,c&=~(1<<_),l&&v()},()=>{c|=1<<_}));return l=!0,v(),function(){oe(d),u()}})}const Ae=et(window.innerWidth>=640);function hn(r){let e,t,n,i,s,a,l,o,c;return{c(){e=g("div"),t=g("img"),i=$(),s=g("button"),s.innerHTML='<svg class="the-app-bar__menu-button-icon svelte-1sfxt2l" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',a=$(),l=g("div"),l.innerHTML=`<div class="the-app-bar__heading-header svelte-1sfxt2l">The proven open source</div> 
    <div class="the-app-bar__heading-sub-header svelte-1sfxt2l">B2B solution</div>`,ue(t.src,n=fn)||b(t,"src",n),b(t,"alt","nexus header"),b(t,"class","the-app-bar__img svelte-1sfxt2l"),b(s,"aria-label","menu-button"),b(s,"class","the-app-bar__menu-button svelte-1sfxt2l"),b(l,"class","the-app-bar__heading svelte-1sfxt2l"),b(e,"id","the-app-bar"),b(e,"class","svelte-1sfxt2l")},m(u,v){m(u,e,v),x(e,t),x(e,i),x(e,s),x(e,a),x(e,l),o||(c=ee(s,"click",r[0]),o=!0)},p:h,i:h,o:h,d(u){u&&p(e),o=!1,c()}}}function dn(r,e,t){let n;Ge(r,Ae,s=>t(1,n=s));function i(){Ae.set(!n)}return[i]}class pn extends C{constructor(e){super(),L(this,e,dn,hn,N,{})}}function mn(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,i,s,a=[],l="",o=r.split("/");for(o[0]||o.shift();i=o.shift();)t=i[0],t==="*"?(a.push("wild"),l+="/(.*)"):t===":"?(n=i.indexOf("?",1),s=i.indexOf(".",1),a.push(i.substring(1,~n?n:~s?s:i.length)),l+=!!~n&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(l+=(~n?"?":"")+"\\"+i.substring(s))):l+="/"+i;return{keys:a,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}function gn(r){let e,t,n;const i=[r[2]];var s=r[0];function a(l){let o={};for(let c=0;c<i.length;c+=1)o=Bt(o,i[c]);return{props:o}}return s&&(e=He(s,a()),e.$on("routeEvent",r[7])),{c(){e&&P(e.$$.fragment),t=Ve()},m(l,o){e&&F(e,l,o),m(l,t,o),n=!0},p(l,o){const c=o&4?Wt(i,[Qt(l[2])]):{};if(s!==(s=l[0])){if(e){we();const u=e;D(u.$$.fragment,1,0,()=>{q(u,1)}),ve()}s?(e=He(s,a()),e.$on("routeEvent",l[7]),P(e.$$.fragment),R(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&R(e.$$.fragment,l),n=!0)},o(l){e&&D(e.$$.fragment,l),n=!1},d(l){l&&p(t),e&&q(e,l)}}}function wn(r){let e,t,n;const i=[{params:r[1]},r[2]];var s=r[0];function a(l){let o={};for(let c=0;c<i.length;c+=1)o=Bt(o,i[c]);return{props:o}}return s&&(e=He(s,a()),e.$on("routeEvent",r[6])),{c(){e&&P(e.$$.fragment),t=Ve()},m(l,o){e&&F(e,l,o),m(l,t,o),n=!0},p(l,o){const c=o&6?Wt(i,[o&2&&{params:l[1]},o&4&&Qt(l[2])]):{};if(s!==(s=l[0])){if(e){we();const u=e;D(u.$$.fragment,1,0,()=>{q(u,1)}),ve()}s?(e=He(s,a()),e.$on("routeEvent",l[6]),P(e.$$.fragment),R(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&R(e.$$.fragment,l),n=!0)},o(l){e&&D(e.$$.fragment,l),n=!1},d(l){l&&p(t),e&&q(e,l)}}}function vn(r){let e,t,n,i;const s=[wn,gn],a=[];function l(o,c){return o[1]?0:1}return e=l(r),t=a[e]=s[e](r),{c(){t.c(),n=Ve()},m(o,c){a[e].m(o,c),m(o,n,c),i=!0},p(o,[c]){let u=e;e=l(o),e===u?a[e].p(o,c):(we(),D(a[u],1,1,()=>{a[u]=null}),ve(),t=a[e],t?t.p(o,c):(t=a[e]=s[e](o),t.c()),R(t,1),t.m(n.parentNode,n))},i(o){i||(R(t),i=!0)},o(o){D(t),i=!1},d(o){a[e].d(o),o&&p(n)}}}function ht(){const r=window.location.href.indexOf("#/");let e=r>-1?window.location.href.substr(r+1):"/";const t=e.indexOf("?");let n="";return t>-1&&(n=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:n}}const tt=Zt(null,function(e){e(ht());const t=()=>{e(ht())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),bn=Jt(tt,r=>r.location);Jt(tt,r=>r.querystring);const dt=et(void 0);async function Gt(r){if(!r||r.length<1||r.charAt(0)!="/"&&r.indexOf("#/")!==0)throw Error("Invalid parameter location");await Pt(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(r.charAt(0)=="#"?"":"#")+r}function kn(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function yn(r,e,t){let{routes:n={}}=e,{prefix:i=""}=e,{restoreScrollState:s=!1}=e;class a{constructor(A,I){if(!I||typeof I!="function"&&(typeof I!="object"||I._sveltesparouter!==!0))throw Error("Invalid component object");if(!A||typeof A=="string"&&(A.length<1||A.charAt(0)!="/"&&A.charAt(0)!="*")||typeof A=="object"&&!(A instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:B,keys:M}=mn(A);this.path=A,typeof I=="object"&&I._sveltesparouter===!0?(this.component=I.component,this.conditions=I.conditions||[],this.userData=I.userData,this.props=I.props||{}):(this.component=()=>Promise.resolve(I),this.conditions=[],this.props={}),this._pattern=B,this._keys=M}match(A){if(i){if(typeof i=="string")if(A.startsWith(i))A=A.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const Q=A.match(i);if(Q&&Q[0])A=A.substr(Q[0].length)||"/";else return null}}const I=this._pattern.exec(A);if(I===null)return null;if(this._keys===!1)return I;const B={};let M=0;for(;M<this._keys.length;){try{B[this._keys[M]]=decodeURIComponent(I[M+1]||"")||null}catch{B[this._keys[M]]=null}M++}return B}async checkConditions(A){for(let I=0;I<this.conditions.length;I++)if(!await this.conditions[I](A))return!1;return!0}}const l=[];n instanceof Map?n.forEach((U,A)=>{l.push(new a(A,U))}):Object.keys(n).forEach(U=>{l.push(new a(U,n[U]))});let o=null,c=null,u={};const v=Ye();async function d(U,A){await Pt(),v(U,A)}let f=null,_=null;s&&(_=U=>{U.state&&(U.state.__svelte_spa_router_scrollY||U.state.__svelte_spa_router_scrollX)?f=U.state:f=null},window.addEventListener("popstate",_),an(()=>{kn(f)}));let E=null,k=null;const z=tt.subscribe(async U=>{E=U;let A=0;for(;A<l.length;){const I=l[A].match(U.location);if(!I){A++;continue}const B={route:l[A].path,location:U.location,querystring:U.querystring,userData:l[A].userData,params:I&&typeof I=="object"&&Object.keys(I).length?I:null};if(!await l[A].checkConditions(B)){t(0,o=null),k=null,d("conditionsFailed",B);return}d("routeLoading",Object.assign({},B));const M=l[A].component;if(k!=M){M.loading?(t(0,o=M.loading),k=M,t(1,c=M.loadingParams),t(2,u={}),d("routeLoaded",Object.assign({},B,{component:o,name:o.name,params:c}))):(t(0,o=null),k=null);const Q=await M();if(U!=E)return;t(0,o=Q&&Q.default||Q),k=M}I&&typeof I=="object"&&Object.keys(I).length?t(1,c=I):t(1,c=null),t(2,u=l[A].props),d("routeLoaded",Object.assign({},B,{component:o,name:o.name,params:c})).then(()=>{dt.set(c)});return}t(0,o=null),k=null,dt.set(void 0)});ln(()=>{z(),_&&window.removeEventListener("popstate",_)});function H(U){ce.call(this,r,U)}function W(U){ce.call(this,r,U)}return r.$$set=U=>{"routes"in U&&t(3,n=U.routes),"prefix"in U&&t(4,i=U.prefix),"restoreScrollState"in U&&t(5,s=U.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=s?"manual":"auto")},[o,c,u,n,i,s,H,W]}class _n extends C{constructor(e){super(),L(this,e,yn,vn,N,{routes:3,prefix:4,restoreScrollState:5})}}function Vt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let xe=Vt();function xn(r){xe=r}const Sn=/[&<>"']/,$n=/[&<>"']/g,Tn=/[<>"']|&(?!#?\w+;)/,En=/[<>"']|&(?!#?\w+;)/g,An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pt=r=>An[r];function Z(r,e){if(e){if(Sn.test(r))return r.replace($n,pt)}else if(Tn.test(r))return r.replace(En,pt);return r}const In=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kt(r){return r.replace(In,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Un=/(^|[^\[])\^/g;function j(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(Un,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const Nn=/[^\w:]/g,Ln=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function mt(r,e,t){if(r){let n;try{n=decodeURIComponent(Kt(t)).replace(Nn,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Ln.test(t)&&(t=Dn(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const De={},Cn=/^[^:]+:\/*[^/]*$/,zn=/^([^:]+:)[\s\S]*$/,Rn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Dn(r,e){De[" "+r]||(Cn.test(r)?De[" "+r]=r+"/":De[" "+r]=je(r,"/",!0)),r=De[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(zn,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(Rn,"$1")+e:r+e}const Fe={exec:function(){}};function te(r){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}function gt(r,e){const t=r.replace(/\|/g,(s,a,l)=>{let o=!1,c=a;for(;--c>=0&&l[c]==="\\";)o=!o;return o?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function je(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Mn(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function Yt(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function wt(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function vt(r,e,t,n){const i=e.href,s=e.title?Z(e.title):null,a=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:s,text:Z(a)}}function Xn(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[a]=s;return a.length>=n.length?i.slice(n.length):i}).join(`
`)}class nt{constructor(e){this.options=e||xe}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:je(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Xn(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=je(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,s,a,l,o,c,u,v,d,f,_,E=t[1].trim();const k=E.length>1,z={type:"list",raw:"",ordered:k,start:k?+E.slice(0,-1):"",loose:!1,items:[]};E=k?`\\d{1,9}\\${E.slice(-1)}`:`\\${E}`,this.options.pedantic&&(E=k?E:"[*+-]");const H=new RegExp(`^( {0,3}${E})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(_=!1,!(!(t=H.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],v=e.split(`
`,1)[0],this.options.pedantic?(a=2,f=u.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,f=u.slice(a),a+=t[1].length),o=!1,!u&&/^ *$/.test(v)&&(n+=v+`
`,e=e.substring(v.length+1),_=!0),!_){const U=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),I=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),B=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(I.test(u)||B.test(u)||U.test(u)||A.test(e)));){if(u.search(/[^ ]/)>=a||!u.trim())f+=`
`+u.slice(a);else if(!o)f+=`
`+u;else break;!o&&!u.trim()&&(o=!0),n+=d+`
`,e=e.substring(d.length+1)}}z.loose||(c?z.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(f),i&&(s=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),z.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:f}),z.raw+=n}z.items[z.items.length-1].raw=n.trimRight(),z.items[z.items.length-1].text=f.trimRight(),z.raw=z.raw.trimRight();const W=z.items.length;for(l=0;l<W;l++){this.lexer.state.top=!1,z.items[l].tokens=this.lexer.blockTokens(z.items[l].text,[]);const U=z.items[l].tokens.filter(I=>I.type==="space"),A=U.every(I=>{const B=I.raw.split("");let M=0;for(const Q of B)if(Q===`
`&&(M+=1),M>1)return!0;return!1});!z.loose&&U.length&&A&&(z.loose=!0,z.items[l].loose=!0)}return z}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):Z(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:gt(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,s,a,l,o;for(s=0;s<i;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(i=n.rows.length,s=0;s<i;s++)n.rows[s]=gt(n.rows[s],n.header.length).map(c=>({text:c}));for(i=n.header.length,a=0;a<i;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(i=n.rows.length,a=0;a<i;a++)for(o=n.rows[a],l=0;l<o.length;l++)o[l].tokens=this.lexer.inline(o[l].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Z(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Z(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=je(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=Mn(t[2],"()");if(a>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),vt(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return vt(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const a=i[0].length-1;let l,o,c=a,u=0;const v=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(v.lastIndex=0,t=t.slice(-1*e.length+a);(i=v.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=l.length,i[3]||i[4]){c+=o;continue}else if((i[5]||i[6])&&a%3&&!((a+o)%3)){u+=o;continue}if(c-=o,c>0)continue;if(o=Math.min(o,o+c+u),Math.min(a,o)%2){const f=e.slice(1,a+i.index+o);return{type:"em",raw:e.slice(0,a+i.index+o+1),text:f,tokens:this.lexer.inlineTokens(f)}}const d=e.slice(2,a+i.index+o-1);return{type:"strong",raw:e.slice(0,a+i.index+o+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=Z(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=Z(this.options.mangle?t(n[1]):n[1]),s="mailto:"+i):(i=Z(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=Z(this.options.mangle?t(n[0]):n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);i=Z(n[0]),n[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]):n[0]:i=Z(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const T={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Fe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};T._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;T._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;T.def=j(T.def).replace("label",T._label).replace("title",T._title).getRegex();T.bullet=/(?:[*+-]|\d{1,9}[.)])/;T.listItemStart=j(/^( *)(bull) */).replace("bull",T.bullet).getRegex();T.list=j(T.list).replace(/bull/g,T.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+T.def.source+")").getRegex();T._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";T._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;T.html=j(T.html,"i").replace("comment",T._comment).replace("tag",T._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();T.paragraph=j(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.blockquote=j(T.blockquote).replace("paragraph",T.paragraph).getRegex();T.normal=te({},T);T.gfm=te({},T.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});T.gfm.table=j(T.gfm.table).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.gfm.paragraph=j(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",T.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.pedantic=te({},T.normal,{html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",T._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fe,paragraph:j(T.normal._paragraph).replace("hr",T.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",T.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const y={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Fe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Fe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};y._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";y.punctuation=j(y.punctuation).replace(/punctuation/g,y._punctuation).getRegex();y.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;y.escapedEmSt=/\\\*|\\_/g;y._comment=j(T._comment).replace("(?:-->|$)","-->").getRegex();y.emStrong.lDelim=j(y.emStrong.lDelim).replace(/punct/g,y._punctuation).getRegex();y.emStrong.rDelimAst=j(y.emStrong.rDelimAst,"g").replace(/punct/g,y._punctuation).getRegex();y.emStrong.rDelimUnd=j(y.emStrong.rDelimUnd,"g").replace(/punct/g,y._punctuation).getRegex();y._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;y._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;y._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;y.autolink=j(y.autolink).replace("scheme",y._scheme).replace("email",y._email).getRegex();y._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;y.tag=j(y.tag).replace("comment",y._comment).replace("attribute",y._attribute).getRegex();y._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;y._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;y._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;y.link=j(y.link).replace("label",y._label).replace("href",y._href).replace("title",y._title).getRegex();y.reflink=j(y.reflink).replace("label",y._label).replace("ref",T._label).getRegex();y.nolink=j(y.nolink).replace("ref",T._label).getRegex();y.reflinkSearch=j(y.reflinkSearch,"g").replace("reflink",y.reflink).replace("nolink",y.nolink).getRegex();y.normal=te({},y);y.pedantic=te({},y.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:j(/^!?\[(label)\]\((.*?)\)/).replace("label",y._label).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",y._label).getRegex()});y.gfm=te({},y.normal,{escape:j(y.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});y.gfm.url=j(y.gfm.url,"i").replace("email",y.gfm._extended_email).getRegex();y.breaks=te({},y.gfm,{br:j(y.br).replace("{2,}","*").getRegex(),text:j(y.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Bn(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function bt(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class se{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xe,this.options.tokenizer=this.options.tokenizer||new nt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:T.normal,inline:y.normal};this.options.pedantic?(t.block=T.pedantic,t.inline=y.pedantic):this.options.gfm&&(t.block=T.gfm,this.options.breaks?t.inline=y.breaks:t.inline=y.gfm),this.tokenizer.rules=t}static get rules(){return{block:T,inline:y}}static lex(e,t){return new se(t).lex(e)}static lexInline(e,t){return new se(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,o,c)=>o+"    ".repeat(c.length));let n,i,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},o),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],a&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),a=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,a=e,l,o,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(a))!=null;)a=a.slice(0,l.index)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(c=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,bt)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,bt))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const v=e.slice(1);let d;this.options.extensions.startInline.forEach(function(f){d=f.call({lexer:this},v),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,Bn)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),o=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class it{constructor(e){this.options=e||xe}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+Z(i,!0)+'">'+(n?e:Z(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:Z(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(n);return`<h${t} id="${s}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=mt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+Z(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=mt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class en{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class tn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class ne{constructor(e){this.options=e||xe,this.options.renderer=this.options.renderer||new it,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new en,this.slugger=new tn}static parse(e,t){return new ne(t).parse(e)}static parseInline(e,t){return new ne(t).parseInline(e)}parse(e,t=!0){let n="",i,s,a,l,o,c,u,v,d,f,_,E,k,z,H,W,U,A,I;const B=e.length;for(i=0;i<B;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(I=this.options.extensions.renderers[f.type].call({parser:this},f),I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){n+=I||"";continue}switch(f.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Kt(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(v="",u="",l=f.header.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(f.header[s].tokens),{header:!0,align:f.align[s]});for(v+=this.renderer.tablerow(u),d="",l=f.rows.length,s=0;s<l;s++){for(c=f.rows[s],u="",o=c.length,a=0;a<o;a++)u+=this.renderer.tablecell(this.parseInline(c[a].tokens),{header:!1,align:f.align[a]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(v,d);continue}case"blockquote":{d=this.parse(f.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(_=f.ordered,E=f.start,k=f.loose,l=f.items.length,d="",s=0;s<l;s++)H=f.items[s],W=H.checked,U=H.task,z="",H.task&&(A=this.renderer.checkbox(W),k?H.tokens.length>0&&H.tokens[0].type==="paragraph"?(H.tokens[0].text=A+" "+H.tokens[0].text,H.tokens[0].tokens&&H.tokens[0].tokens.length>0&&H.tokens[0].tokens[0].type==="text"&&(H.tokens[0].tokens[0].text=A+" "+H.tokens[0].tokens[0].text)):H.tokens.unshift({type:"text",text:A}):z+=A),z+=this.parse(H.tokens,k),d+=this.renderer.listitem(z,U,W);n+=this.renderer.list(d,_,E);continue}case"html":{n+=this.renderer.html(f.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;i+1<B&&e[i+1].type==="text";)f=e[++i],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const M='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(M);return}else throw new Error(M)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,s,a;const l=e.length;for(i=0;i<l;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(a=this.options.extensions.renderers[s.type].call({parser:this},s),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){n+=a||"";continue}switch(s.type){case"escape":{n+=t.text(s.text);break}case"html":{n+=t.html(s.text);break}case"link":{n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{n+=t.image(s.href,s.title,s.text);break}case"strong":{n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(s.tokens,t));break}case"text":{n+=t.text(s.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return n}}function w(r,e,t){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=te({},w.defaults,e||{}),Yt(e),t){const i=e.highlight;let s;try{s=se.lex(r,e)}catch(o){return t(o)}const a=function(o){let c;if(!o)try{e.walkTokens&&w.walkTokens(s,e.walkTokens),c=ne.parse(s,e)}catch(u){o=u}return e.highlight=i,o?t(o):t(null,c)};if(!i||i.length<3||(delete e.highlight,!s.length))return a();let l=0;w.walkTokens(s,function(o){o.type==="code"&&(l++,setTimeout(()=>{i(o.text,o.lang,function(c,u){if(c)return a(c);u!=null&&u!==o.text&&(o.text=u,o.escaped=!0),l--,l===0&&a()})},0))}),l===0&&a();return}function n(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Z(i.message+"",!0)+"</pre>";throw i}try{const i=se.lex(r,e);if(e.walkTokens){if(e.async)return Promise.all(w.walkTokens(i,e.walkTokens)).then(()=>ne.parse(i,e)).catch(n);w.walkTokens(i,e.walkTokens)}return ne.parse(i,e)}catch(i){n(i)}}w.options=w.setOptions=function(r){return te(w.defaults,r),xn(w.defaults),w};w.getDefaults=Vt;w.defaults=xe;w.use=function(...r){const e=te({},...r),t=w.defaults.extensions||{renderers:{},childTokens:{}};let n;r.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const a=t.renderers?t.renderers[s.name]:null;a?t.renderers[s.name]=function(...l){let o=s.renderer.apply(this,l);return o===!1&&(o=a.apply(this,l)),o}:t.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[s.level]?t[s.level].unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}s.childTokens&&(t.childTokens[s.name]=s.childTokens)})),i.renderer){const s=w.defaults.renderer||new it;for(const a in i.renderer){const l=s[a];s[a]=(...o)=>{let c=i.renderer[a].apply(s,o);return c===!1&&(c=l.apply(s,o)),c}}e.renderer=s}if(i.tokenizer){const s=w.defaults.tokenizer||new nt;for(const a in i.tokenizer){const l=s[a];s[a]=(...o)=>{let c=i.tokenizer[a].apply(s,o);return c===!1&&(c=l.apply(s,o)),c}}e.tokenizer=s}if(i.walkTokens){const s=w.defaults.walkTokens;e.walkTokens=function(a){let l=[];return l.push(i.walkTokens.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}n&&(e.extensions=t),w.setOptions(e)})};w.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(w,n)),n.type){case"table":{for(const i of n.header)t=t.concat(w.walkTokens(i.tokens,e));for(const i of n.rows)for(const s of i)t=t.concat(w.walkTokens(s.tokens,e));break}case"list":{t=t.concat(w.walkTokens(n.items,e));break}default:w.defaults.extensions&&w.defaults.extensions.childTokens&&w.defaults.extensions.childTokens[n.type]?w.defaults.extensions.childTokens[n.type].forEach(function(i){t=t.concat(w.walkTokens(n[i],e))}):n.tokens&&(t=t.concat(w.walkTokens(n.tokens,e)))}return t};w.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=te({},w.defaults,e||{}),Yt(e);try{const t=se.lexInline(r,e);return e.walkTokens&&w.walkTokens(t,e.walkTokens),ne.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Z(t.message+"",!0)+"</pre>";throw t}};w.Parser=ne;w.parser=ne.parse;w.Renderer=it;w.TextRenderer=en;w.Lexer=se;w.lexer=se.lex;w.Tokenizer=nt;w.Slugger=tn;w.parse=w;w.options;w.setOptions;w.use;w.walkTokens;w.parseInline;ne.parse;se.lex;const jn="/assets/nexus_on_java_11.86fd1c91.jpg";function Hn(r){let e,t,n=w.parse(r[0])+"",i,s,a,l,o,c=w.parse(r[1])+"";return{c(){e=g("div"),t=new We(!1),i=$(),s=g("img"),l=$(),o=new We(!1),t.a=i,ue(s.src,a=jn)||b(s,"src",a),b(s,"alt","nexus on java 11"),b(s,"class","img"),o.a=null},m(u,v){m(u,e,v),t.m(n,e),x(e,i),x(e,s),x(e,l),o.m(c,e)},p:h,i:h,o:h,d(u){u&&p(e)}}}function Fn(r){return[`
  <h1>Home</h1>
  <hr>
  <h2 style="color: var(--color-brand)">NEXUSe2e is now running on Java 11</h2>
`,`
  ## NEXUSe2e 5.9 and Java 11
  
  All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK as production instances would now require an oracle JDK license to run. 
  `]}class qn extends C{constructor(e){super(),L(this,e,Fn,Hn,N,{})}}function Pn(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function On(r){return[`
  # Features
  
  ---
  
  ## Reliable Messaging
  - Receipt of messages is confirmed through additional technical acknowledgement messages
  - Mechanism independent of communication protocol
  - Settings for maximum number of retries and interval between resends
  - Transaction logs reflect message confirmation status
  
  ## Orchestration
  - Message exchange follows defined message sequence (so called choreographies i.e., business process)
  - State machine enforces message sequence/business transaction flow
  - System maintains a partner and process directory and validates messages accordingly
  - Communication with partners can follow different standards (transport, identifiers, security settings)
  
  ## Security
  - Data encryption on the transport level (e.g. TLS, S/MIME)
  - Validation of partner/client certificates
  - Built-in certificate and key management
  
  ## Reporting
  - Standard reports for message volume
  - Reports for identifying failed transmissions
  - Transaction and application log with flexible filtering
  - Customizable report look and feel
  
  ## User Interface
  - Web interface compatible with standard web browsers 
  - Fine grained role model and user authentication
  
  ## Configuration
  - Transaction oriented change management: multiple changes can be entered sequentially and commited at once or discarded
  - Export/import of system configuration in XML format for backup and replication
  
  ## Deployment and Operation
  - JEE web application (distributed as a WAR file)
  - Bundled in-process database for testing
  - Compatible with most SQL compliant database systems. For production purposes we suggest to use MS SQL Server,PostgreSQL or MySQL. For testing and evaluation the in-process Derby database is always an option.
  
  ## Maintenance
  - Easy extensibility through component oriented design
  
  ## Monitoring
  - System availability check through HTTP and Web service interfaces (e.g. for load balancer integration)
  - Automatic system shut-down on database unavailability and restart on database recovery
  - Customizable error notification mechanism through email
  - Extensible error notification sub system for adding additional protocols (e.g. SMS)
  
  ## Available Communication/Messaging Protocols
  - ebXML 1.0
  - ebXML 2.0
  - Email (SMTP, POP3, IMAP)
  - SFTP
  - SOAP 
  
  ## Back-End/Lagacy Systems Integration
  - plain HTTP connector
  - SOAP connector
  - JDBC connector
  - File system connector
  
  ## Out-of-the-box Data Validation and Conversion
  - XML/XSLT/XSD/DTD
  - CSV
  - Plain Text
  - Compression/decompression (ZIP)
  `]}class Wn extends C{constructor(e){super(),L(this,e,On,Pn,N,{})}}function Qn(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Zn(r){return[`
  # Scenarios

  ---

   Supply Chain Integration
  Order raw materials & utilities just-in-time from your vendors. Or offer your customers an automated interface for purchasing.

  ## Trading
  Exchange electronic vouchers with your distributors/creditors and payment service providers

  ## Logistics
  Automatically hand over shipping documents to your transport service provider. Or as a carrier update your clients electronically, when the status of their shipment changes.

  ## Integration Proxy/Adapter
  Do you want use an existing integration interface of your back-end system or technical or organizational constraints might dictate its use? But the majority of your business partners use their own integration technology and they are all incompatible? Then NEXUEe2e can act as a reliable adapter und integrates all those partners' systems with your back-end.

  <br>

  *NEXUSe2e is specialized in automated exchange of electronic documents. However, it is not limited to a specific domain or industry. Our customers rely on NEXUSe2e in agriculture (production and distribution), transport, and e-commerce.*
  `]}class Jn extends C{constructor(e){super(),L(this,e,Zn,Qn,N,{})}}const Gn="/assets/solution.b1b6bfc4.jpg";function Vn(r){let e,t,n=w.parse(r[0])+"",i,s,a;return{c(){e=g("div"),t=new We(!1),i=$(),s=g("img"),t.a=i,ue(s.src,a=Gn)||b(s,"src",a),b(s,"alt","NEXUSe2e solution"),b(s,"class","img")},m(l,o){m(l,e,o),t.m(n,e),x(e,i),x(e,s)},p:h,i:h,o:h,d(l){l&&p(e)}}}function Kn(r){return[`
  # The Solution

  ---
  

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTPS, SMTP, SFTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `]}class Yn extends C{constructor(e){super(),L(this,e,Kn,Vn,N,{})}}function ei(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function ti(r){return[`
  # Service

  ---

  ## Professional Services provided by evolving systems consulting GmbH

  The developers of NEXUSe2e are part of the evolving systems consulting GmbH, a German IT and business consultancy, which specializes in:
  - IT Consulting
  - Project Management
  - Transition Management
  - Software Development for custom solutions

  **We are all ease for your requirements. Please contact us with your individual request.**

  ## Installation & Update

  All installations are tailored to your needs. Our goal is to enable your team to use NEXUSe2e and feel comfortable with it. 

  - We offer to install NEXUSe2e on your machines.
  - We offer to install software updates for you, and upgrade your machines to the latest version of NEXUSe2e.
  - We offer remote or on site service.

  ## Integration & Consulting
  - We design an realize integration with your business partners based on your individual requirements.
  - We develop the connection to the interfaces of your backend systems, whether those are standardized or proprietary.
  - We realize the connection to your business partners, whether they make use of standardized or proprietary frontend protocols.

  ## Custom Development
  - Do you need a special functionality that NEXUSe2e does not provide, yet? We offer to develop individual features for you, that meet either open source or closed source criteria.

  ## Support

  - We answer your questions and give you a hand on operational problems.
  - We assist you in using and configuring NEXUSe2e.
  - We help you to develop your own NEXUSe2e components.`]}class ni extends C{constructor(e){super(),L(this,e,ti,ei,N,{})}}function ii(r){let e,t,n;return{c(){e=g("h1"),e.textContent="Documentation",t=$(),n=g("hr")},m(i,s){m(i,e,s),m(i,t,s),m(i,n,s)},p:h,i:h,o:h,d(i){i&&p(e),i&&p(t),i&&p(n)}}}class ri extends C{constructor(e){super(),L(this,e,null,ii,N,{})}}function si(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function oi(r){return[`
  # External Configuration Folder

  <hr>
  
  

As of NEXUSe2e 5.2.0, you can provide an external set of configuration files for your NEXUSe2e instance, allowing you to upgrade or reinstall without having to re-configure everything.

To get started with this, make a copy of the config-folder under <tomcat-location>/webapps/NEXUSe2e/WEB-INF/ . Place this copy somewhere convenient, you can remove all files except database.properties, bean.properties and machine_name.txt from it if you want to (there is also support for the logger-configuration, see below).

If you have just freshly installed NEXUSe2e, you will now want to make your configuration changes, specifically your database configuration in database.properties and editing the name of the instance in machine_name.txt, in this folder.

Then to get NEXUSe2e to use your external configuration, provide a JVM option named externalconfig which points to the folder holding your external configuration files.
How you do this varies a bit depending on how you installed your instance and what operating system you are using:

- If you have NEXUSe2e installed as a windows service, you need to go into the configuration program (located under \\bin\\ in your tomcat-folder, called <servicename>w.exe .e.g. tomcatw.exe of you not change the service name while installing tomcat), navigate to the tab 'Java', and under 'Java Options' add an entry for the parameter.
- If you start your instance from the command line (e.g. via a script) or running linux you need to provide or edit your setenv.bat or setenv.sh file (located under \\bin\\ in your tomcat-folder). Windows uses the .bat file. Add the parameter here.

**Example:**  

1. Files placed in C:\\Example\\NEXUSe2e\\  
2. Navigate to C:\\Program FilesNEXUSe2e\\tomcat\\bin\\, launch tomcatw.exe .  
3. Add '-Dexternalconfig=C:\\Example\\NEXUSe2e' under Java Options.  
4. (Optional, depending on your setup) Now take your database-driver (if you need a specific one) and put it into the C:\\Program Files\\tomcat\\lib\\ folder (the specific path might vary depending on where and how you installed Tomcat - In general, you need this file to be available on the classpath, usually via the lib-folder of your webserver of choice. This way it is not part of the actual deployed NEXUSe2e, but of the webserver, and hence will not be deleted when you upgrade your NEXUSe2e installation. Specifically for this example, check that it in the tomcat-lib-folder as given above, not in \\tomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib\\ .





  `]}class ai extends C{constructor(e){super(),L(this,e,oi,si,N,{})}}function li(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function ci(r){return[`
  # Installation

  <hr>
  
  `]}class ui extends C{constructor(e){super(),L(this,e,ci,li,N,{})}}function fi(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function hi(r){return[`
  # Setting up NEXUSe2e

  <hr>
  
  ## Installation



  ## Requirements

  The current version 5.x of NEXUSe2e requires:
  - Java 11 or higher <a href="https://jdk.java.net/archive/" target="_blank" class="standard-link">Link</a>
  - Tomcat 9  <a href="https://tomcat.apache.org/" target="_blank" class="standard-link">Link</a>
 
  NEXUSe2e server comes with an embedded <a href="https://db.apache.org/derby/" target="_blank" class="standard-link">Apache Derby</a> database, for evaluation and development use. We disadvise you from using the embedded database in a production environment. If you want to run NEXUSe2e server in a production environment, you also need:
  - An SQL database that can be accessed through JDCB (e.g. MS SQL Server, Oracle, DB2, MySQL, PostgreSQL)
  
  ## Installing Your Server
  - Download the WAR file from the Download section or directly from github <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank" class="standard-link">Releases</a>.
  - Deploy the WAR file in your servlet container.
  
  >To deploy the WAR file please follow the instructions of your Servlet container/Web application server. For Tomcat the deployment is as easy as copying the WAR file into the *\\<Tomcat root>/\\<webapps>* directory and starting Tomcat. This will expand the WAR and start the Web application.

  >The shipped configuration inside the WAR file will create a Derby database and pre-populate it with a basic sample configuration on first startup. The database will be created in the directory *\\<NEXUSe2e Web app root>/WEB-INF/config/database/derby* and be named *NEXUSe2eDB*. This database is for testing purposes only.

  - Log in to the admin interface and configure the server.

  >Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine, the deployment path is the same as the war file name. Therefore its recommended the rename the downloaded war file to NEXUSe2e.war which leads to the following url: <a href="http://localhost:8080/NEXUSe2e" target="_blank" class="standard-link">http://localhost:8080/NEXUSe2e</a>.

  >The default administration account is admin with password admin. The first step should be changing the password in the user management in the Web UI.

  Now you can configure the server for messaging. You may want to follow our First steps in the messaging section.
 `]}class di extends C{constructor(e){super(),L(this,e,hi,fi,N,{})}}function pi(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function mi(r){return[`
  # System Requirements

  <hr>
  
  NEXUSe2e runs on a variety of system configurations. These brief requirements only illustrate the recommended settings, NEXUSe2e will probably run with lower specifcations. However, requirements depend on the workload, message size, schedules and any type of custom extensions. The estimates are for NEXUSe2e only, not for the also required database.  

  ## Hardware & Operating System
  - Linux or Windows
  - Dual core CPU
  - 4GB RAM
  - About 10GB of free HDD space

  ## Software
  - Java JDK 11
  - Apache Tomcat 9 (Tomcat 10 is not supported)
  - Supported database depending on the use cause and environment
  `]}class gi extends C{constructor(e){super(),L(this,e,mi,pi,N,{})}}function wi(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function vi(r){return[`
  # Upgrade Checklist

  <hr>


This page provides a brief checklist of the NEXUSe2e upgrade process. Please keep in mind that this is not meant to replace a full upgrade guide.

## Preparation

- **Get the .war-file used for the update.**  
    Depending on your specific case you either want to download the official release from the <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank" class="standard-link">NEXUSe2e Github Project</a>, you will have a .war-file which the NEXUSe2e support team provided, or your department or team has built a .war-file to use for the update.

- **Get patches.jar if needed (see below).**  
    Under certain conditions you need to apply some patches to your installation. For this you will need a special .jar-file which can be obtained from the download page.

- **Get a newer version of the database driver used to connect to your database, if required.**  
    Depending on the database used for your installation, a newer NEXUSe2e version may require a newer version of the database driver. Some (e.g. for MS SQL) aren't bundled with NEXUSe2e for licensing reasons. If you need such a driver, make sure you got the appropriate version at hand to supply it after the upgrade.

- **Backup the database.**  
  While an upgrade should not cause any data loss, we advice you to do a full backup of the database before backup.

- **Backup the existing NEXUSe2e.**  
    You will need some of the configuration settings later.

 

## Deployment

- **Shut down the server**  
    Usually this is done via the shutdown.sh or shutdown.bat script files. They can be found in the /bin/-Folder of your Tomcat-Installation. However, be advised that this can and will vary depending on your specific installation. For example on Windows, Tomcat might have been set up as a system service, in which case you will need to look for an Apache Tomcat or NEXUSe2e service under Control Panel --> Administrative Tools --> Services, and stop it there.

- **Replace the .war file**  
   Replace the exisitng war file with the new one and make sure the name is the same as the tomcat will use this as context path in the URL.  

- **Install the database driver**
  Some databases and special features might require additional components for the database which are not shipped with NEXUSe2e for legal reasons. 

- **Start the server.**
  On tomcat startup, the .war file is extracted in a directory with the same name. The old files will be overwritten.

- **Shutdown the server.**

- **Modify the default configuration**
  The main configuration files need to be updated to reflect your proper configuration again. Therefore you can pickup the old files from the backup and replace the parts for logging, database and the machine name.

- Start the server.

  `]}class bi extends C{constructor(e){super(),L(this,e,vi,wi,N,{})}}function ki(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function yi(r){return[`
  # Upgrade

  <hr>
  
  `]}class _i extends C{constructor(e){super(),L(this,e,yi,ki,N,{})}}const xi="/assets/alterURL1.ec8d0877.jpg",Si="/assets/alterURL2.1c2bdeda.jpg";function $i(r){let e,t=w.parse(r[0])+"",n,i,s,a,l,o=w.parse(r[1])+"",c,u,v,d,f,_=w.parse(r[2])+"";return{c(){e=g("div"),n=$(),i=g("img"),a=$(),l=g("div"),c=$(),u=g("img"),d=$(),f=g("div"),ue(i.src,s=xi)||b(i,"src",s),b(i,"alt","nexus on java 11"),b(i,"class","img"),ue(u.src,v=Si)||b(u,"src",v),b(u,"alt","nexus on java 11"),b(u,"class","img")},m(E,k){m(E,e,k),e.innerHTML=t,m(E,n,k),m(E,i,k),m(E,a,k),m(E,l,k),l.innerHTML=o,m(E,c,k),m(E,u,k),m(E,d,k),m(E,f,k),f.innerHTML=_},p:h,i:h,o:h,d(E){E&&p(e),E&&p(n),E&&p(i),E&&p(a),E&&p(l),E&&p(c),E&&p(u),E&&p(d),E&&p(f)}}}function Ti(r){return[`
  # How to Alter the NEXUSe2e URL

  <hr>
  
## Change Application Name

The application name in the URL ("/NEXUSe2e) is determined by the directory name of your NEXUSe2e instance inside your Tomcat's webapp folder.

To change this part of the URL please follow these steps:

    Stop your NEXUSe2e Service. *
    Rename your application folder and the war-file accordingly.
    Start your NEXUSe2e Service. **

* Else Tomcat's autoDeploy feature will delete every folder without a fitting *.war file and will also deploy *.war-files without the corresponding application directory.

** Make sure these two match, otherwise the directory is deleted and a new clean directory is created with the war file content. This might lead to a configuration loss.

  `,`
  

As displayed in the screenshot, your URL would now be something like HTTP://192.168.2.1/NEXUSe2e_FAQ/. Remember to share it with your partners, administrators and change it in the monitoring, as well.

When later updating NEXUSe2e, you also have to mind that the new war-file must match the name of the changed file.

## Change Endpoint path for a NEXUSe2e Service  

The next option is to change the NEXUSe2e internal service name. Go to your NEXUSe2e Admin-GUI and switch to:

    Server Configuration > Services > HttpReceiverService

Edit the Logical Name to your needs, save and apply the changes.

  `,`
  After the changes are applied, the URL for ebxml20 connections is /NEXUSe2e/handler/<newlogicalname>. This time, the change is stored in the database, and will be consistent for future upgrades.
  `]}class Ei extends C{constructor(e){super(),L(this,e,Ti,$i,N,{})}}function Ai(r){let e,t,n;return{c(){e=g("div"),t=g("img"),ue(t.src,n=r[0])||b(t,"src",n),b(t,"alt",r[1]),b(t,"class","img svelte-i49qvk"),ze(t,"height",`${r[2]}px`),b(e,"class","img-container svelte-i49qvk"),ze(e,"justify-content",r[3])},m(i,s){m(i,e,s),x(e,t)},p(i,[s]){s&1&&!ue(t.src,n=i[0])&&b(t,"src",n),s&2&&b(t,"alt",i[1]),s&4&&ze(t,"height",`${i[2]}px`),s&8&&ze(e,"justify-content",i[3])},i:h,o:h,d(i){i&&p(e)}}}function Ii(r,e,t){let n,{img:i}=e,{alt:s=""}=e,{height:a="300"}=e,{position:l="center"}=e;return r.$$set=o=>{"img"in o&&t(0,i=o.img),"alt"in o&&t(1,s=o.alt),"height"in o&&t(2,a=o.height),"position"in o&&t(4,l=o.position)},r.$$.update=()=>{r.$$.dirty&16&&t(3,n={left:"flex-start",center:"center",right:"flex-end"}[l])},[i,s,a,n,l]}class re extends C{constructor(e){super(),L(this,e,Ii,Ai,N,{img:0,alt:1,height:2,position:4})}}const Ui="/assets/backend1.33169ffb.png";function Ni(r){let e,t=w.parse(r[0])+"",n,i,s,a,l=w.parse(r[1])+"",o;return i=new re({props:{img:Ui,alt:"service",height:"200px"}}),{c(){e=g("div"),n=$(),P(i.$$.fragment),s=$(),a=g("div")},m(c,u){m(c,e,u),e.innerHTML=t,m(c,n,u),F(i,c,u),m(c,s,u),m(c,a,u),a.innerHTML=l,o=!0},p:h,i(c){o||(R(i.$$.fragment,c),o=!0)},o(c){D(i.$$.fragment,c),o=!1},d(c){c&&p(e),c&&p(n),q(i,c),c&&p(s),c&&p(a)}}}function Li(r){return[`
  # NEXUSe2e Backend Integration

  <hr>
  

## Definition

NEXUSe2e integration is based on a Service and Pipeline system which contains Pipelets. Services and Pipelets are a simple implementation of a predefined interface and contain only a few lines of code. Some use the standard implementation or tweak the existing samples to achieve their custom implementation. If you have an integration in mind  that is not out of the box, it is always a good idea to describe your plans to us, maybe there is a solution allready in place.
### Default Integration

The integration is mostly very specific for the different customers and it is difficult to sum this up into a general Text. There are basically four easy options to go with, which can be altered to specific needs:

 

#### Simple File Transfer

Files are dropped in specified directories which are scanned regularly. NEXUSe2e sends the file to a specified combination of Partner, choreography and action.
For every combination a dedicated directory scanner service is needed.
An example of a configured directory scanner service could look like this:

  `,`
  

There is also a possibility for a multi directory scanner which is configured via an external XML file. So there is no need for one specific service for every combination.

Simple file transfer is not very efficient and has some side effects like file locks, incomplete files, problems with burst traffic and very few monitoring options due to the dependency of the external file system.

 

#### Plain HTTP

The message will be carried by the post body and the URL parameters are used as routing information.

    http://localhost:8080/NEXUSe2e/integration/http?choreography=GenericFile&action=SendFile&partner=nexus5

The result you will receive is a 200 if the routing information is logically correct, the connection is closed as soon as the message is received. This will give you instant feedback which makes monitoring more accurate. For a tutorial, how to enable Plain HTTP and create a choreography with it, look here.

 

#### Web Service Call

You can also communicate directly with your backend, this is fully integrated in the default configuration since NEXUSe2e 5.3.0 and can be activated manually pre 5.3.0. Find the corresponding tutorial for pre 5.3.0 here and post 5.3.0 here.

 

#### Database Integration

The last not very common option is using a database integration. There is a service and corresponding pipelet which provide a basic integration for inbound and outbound messages, based on the content of the specified table. From high level, it\u2019s the same as file transfer but not storee in the file system but a database table. This Table is not part of NEXUSe2e and must be create manually and requires a predefined layout which is not configurable.

Another downside of this intermediate database table is the burst load you will generate on your partners systems. Every time the database is being polled it will generate burst of messages. The polling time is configurable for sure, but you have also keep an eye on your export services which should be somewhat synchronized with the NEXUSe2e service. Otherwise you can run into some interesting locking situations.

  
  `]}class Ci extends C{constructor(e){super(),L(this,e,Li,Ni,N,{})}}function zi(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Ri(r){return[`
  # Configuration

  <hr>
  
  `]}class Di extends C{constructor(e){super(),L(this,e,Ri,zi,N,{})}}function Mi(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Xi(r){return[`
  # Logging with Log4j 2

  <hr>
  
  `]}class Bi extends C{constructor(e){super(),L(this,e,Xi,Mi,N,{})}}const ji="/assets/mssqlAuth1.24d2bab4.png",Hi="/assets/mssqlAuth2.db7b578e.png",Fi="/assets/mssqlAuth3.5302e9f6.png";function qi(r){let e,t=w.parse(r[0])+"",n,i,s,a,l=w.parse(r[1])+"",o,c,u,v,d=w.parse(r[2])+"",f,_,E;return i=new re({props:{img:ji,alt:"directory structure"}}),c=new re({props:{img:Hi,alt:"Service JVM Parameters"}}),_=new re({props:{img:Fi,alt:"Service Login"}}),{c(){e=g("div"),n=$(),P(i.$$.fragment),s=$(),a=g("div"),o=$(),P(c.$$.fragment),u=$(),v=g("div"),f=$(),P(_.$$.fragment)},m(k,z){m(k,e,z),e.innerHTML=t,m(k,n,z),F(i,k,z),m(k,s,z),m(k,a,z),a.innerHTML=l,m(k,o,z),F(c,k,z),m(k,u,z),m(k,v,z),v.innerHTML=d,m(k,f,z),F(_,k,z),E=!0},p:h,i(k){E||(R(i.$$.fragment,k),R(c.$$.fragment,k),R(_.$$.fragment,k),E=!0)},o(k){D(i.$$.fragment,k),D(c.$$.fragment,k),D(_.$$.fragment,k),E=!1},d(k){k&&p(e),k&&p(n),q(i,k),k&&p(s),k&&p(a),k&&p(o),q(c,k),k&&p(u),k&&p(v),k&&p(f),q(_,k)}}}function Pi(r){return[`
  # Integrated Authentication with MSSQL

  <hr>
  

To make use of the AD account you need to make the following changes:

- Open your NEXUSe2e database.properties file, usually located in the /WEB-INF/config/ folder in your Webapp directory.


      database.dialect=org.hibernate.dialect.SQLServerDialect
      database.url=jdbc:sqlserver://YourHost:1433;instanceName=SQLInstance;databaseName=NEXUSe2eDatabase;integratedSecurity=true;
      database.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
      database.user=
      database.password=

- Alter your database connection configuration to look like this and make sure database.user and database.password are blank but not comment them out.
- Download the MSSQL JDBC driver package from the corresponding website.
- If you set up a new NEXUSe2e installation you will need to copy the fitting sqljdbc.jar and the sqljdbc_auth.dll, either from /auth/x64/ or /auth/x86/,
into your /NEXUSe2e/WEB-INF/lib/ folder.
In case you switch to integrated Authentication only, copy the sqljdbc_auth.dll file into your lib folder.


  `,`
  

- Next you need to enable your Tomcat to load DLL files. Open your Tomcat service via /YourTomcat/bin/NEXUSe2ew.exe.
     
- Switch to Java.
      
- Add the following line to the Java Options:
 
      -Djava.library.path=C:YourTomcatwebappsNEXUSe2eWEB-INFlib
 
  
  `,`
  
- Configure the NEXUSe2e Windows Service to be started with the AD account you granted privileges to access your MSSQL database. 
  `]}class Oi extends C{constructor(e){super(),L(this,e,Pi,qi,N,{})}}const Wi="/assets/service1.277e19e8.png",Qi="/assets/service2.5c9d920d.png",Zi="/assets/service3.0b8de283.png",Ji="/assets/service4.37962a2a.png",Gi="/assets/service5.3ab699ea.png";function Vi(r){let e,t=w.parse(r[0])+"",n,i,s,a,l=w.parse(r[1])+"",o,c,u,v,d=w.parse(r[2])+"",f,_,E,k,z=w.parse(r[3])+"",H,W,U,A,I=w.parse(r[4])+"",B,M,Q,he,ae=w.parse(r[5])+"",de;return i=new re({props:{img:Wi,alt:"service",height:"200px"}}),c=new re({props:{img:Qi,alt:"service",height:"500px"}}),_=new re({props:{img:Zi,alt:"service",height:"500px"}}),W=new re({props:{img:Ji,alt:"service",height:"500px"}}),M=new re({props:{img:Gi,alt:"service",height:"500px"}}),{c(){e=g("div"),n=$(),P(i.$$.fragment),s=$(),a=g("div"),o=$(),P(c.$$.fragment),u=$(),v=g("div"),f=$(),P(_.$$.fragment),E=$(),k=g("div"),H=$(),P(W.$$.fragment),U=$(),A=g("div"),B=$(),P(M.$$.fragment),Q=$(),he=g("div")},m(S,O){m(S,e,O),e.innerHTML=t,m(S,n,O),F(i,S,O),m(S,s,O),m(S,a,O),a.innerHTML=l,m(S,o,O),F(c,S,O),m(S,u,O),m(S,v,O),v.innerHTML=d,m(S,f,O),F(_,S,O),m(S,E,O),m(S,k,O),k.innerHTML=z,m(S,H,O),F(W,S,O),m(S,U,O),m(S,A,O),A.innerHTML=I,m(S,B,O),F(M,S,O),m(S,Q,O),m(S,he,O),he.innerHTML=ae,de=!0},p:h,i(S){de||(R(i.$$.fragment,S),R(c.$$.fragment,S),R(_.$$.fragment,S),R(W.$$.fragment,S),R(M.$$.fragment,S),de=!0)},o(S){D(i.$$.fragment,S),D(c.$$.fragment,S),D(_.$$.fragment,S),D(W.$$.fragment,S),D(M.$$.fragment,S),de=!1},d(S){S&&p(e),S&&p(n),q(i,S),S&&p(s),S&&p(a),S&&p(o),q(c,S),S&&p(u),S&&p(v),S&&p(f),q(_,S),S&&p(E),S&&p(k),S&&p(H),q(W,S),S&&p(U),S&&p(A),S&&p(B),q(M,S),S&&p(Q),S&&p(he)}}}function Ki(r){return[`
  # Windows Service

  <hr>
  

In this article we will show you briefly how to setup and deactivate a Windows Service for NEXUSe2e.

Make sure you have set a JAVA_HOME in your Windows environmental variables.

## How to Install the Service

- Open your tomcat\\bin folder in a Command Prompt window.
- Install the Service named NEXUSe2eFAQ:  

      C:\\apache-tomcat\\bin> service.bat install NEXUSe2eFAQ
      (Insert your preferred name instead of NEXUSe2eFAQ)

- If the cmd is not started as administrator you will be asked for permission to execute this process with administration rights.  
- After that you should see something similar in your cmd:



  `,`

- Next, switch in the bin directory of your Tomcat and rename the "Tomcatw.exe" to wahtever you named your service. Make sure you include the "w.exe".

- Execute your "NEXUSe2eFAQw.exe".
     

The Service is now fully functional and can be edited further if needed.

## Configure Services


### General

You can change the display name to your desire and set the Startup type to automatically.


  `,`
### Log On

Set which user Windows should use to start the Service.

  `,`
### Logging

Set the log level, log path and log prefix for the tomcat instance.

NEXUSe2e log settings are not influenced by these options.

  `,`
### Java

You can add Java specific parameters into the Java Options, like SSL Debugging.

Set the minmun and maximun amout of memory this Service can use. For NEXUSe2e it is recommended to use 4096 MB as maximun memory. This might depending on your workload.

  `,`
  

### Remove Windows Services

To remove the service, open a Command Prompt window and switch into your tomcat\\bin folder.

Execute following command:

    C:\\apache-tomcat\\bin> tomcat7.exe //DS//NEXUSe2eFAQ
    (Switch NEXUSe2eFAQ to whatever you named your service)

This should be it, you can check your Windows Services to make sure it is removed.

  `]}class Yi extends C{constructor(e){super(),L(this,e,Ki,Vi,N,{})}}function er(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function tr(r){return[`
  # XSD - Schema Validation

  <hr>
  
  `]}class nr extends C{constructor(e){super(),L(this,e,tr,er,N,{})}}function ir(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function rr(r){return[`
  # Client Authentication

  <hr>
  
  The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even if NEXUSe2e is a server application compareable to a website it acts as a client as well which is the major different to standard website certificates. When receiving a business message from your partner, the webapplication server handles this incomming request.

  The SSL Handshake is done before any data is forward into the NEXUSe2e web app. Therefore its important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

  The server provides the server certificate and the client validates this against the configured partner certifcate, the ca certificates and the expiration time. without clientauth the handshake process is done and the user data is transfered. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore it is required to apply the changes on ca certificates in your web app server configuration as well. Even if the clients CA cert is installed in NEXUSe2e, the ssl handshake fails if the required CA certificate is not found in the web app server key store.

  The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in there web app server configurations.
  `]}class sr extends C{constructor(e){super(),L(this,e,rr,ir,N,{})}}function or(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function ar(r){return[`
  # Configure a secure web service endpoint

  <hr>
  
  As of release 5.3.0, you can easily start a WS-security protected webservices endpoint for sending messages through NEXUSe2e. Read on for information on how to set up this service.

  ## Adding the component
  Under Server Configuration > Components, add a new component.

  Fill in the name and description however you want it, for the class name put in org.nexuse2e.integration.secure.WSDispatcherService. Save, then apply the changes to your system, and you should have the new component showing up in the overview.
  
  ## Registering the service
  Go to Server Configuration > Services, add a new Service.

  Select the newly registered component (if it's not showing up, make sure you applied your changes to the components via the Apply-button at the top of the Admin UI), enter any name you want, and whether you want the component to autostart.

  The URL you can input here is relative to your NEXUSe2e-instance. If your instance is found at https://<servername>/NEXUSe2e/, then putting in /secureWS would result in having the endpoint show up at https://<servername>/NEXUSe2e/wshandler/secureWS.

  For username and password, input the credentials you want to use, they'll later be needed to communicate with the endpoint. Then click save, and again apply the changes to your system.
  
  ## Final steps
  Lastly, start the new service unless it was already set to autostart. We advice you to briefly test your new endpoint by making the above configuration in a test environment and using a specialized tool or a test instance sending data to your NEXUSe2e instance to check whether everything is configured as desired.
  `]}class lr extends C{constructor(e){super(),L(this,e,ar,or,N,{})}}function cr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function ur(r){return[`
  # Security

  <hr>
  
  `]}class fr extends C{constructor(e){super(),L(this,e,ur,cr,N,{})}}function hr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function dr(r){return[`
  # SSL

  <hr>
  
  `]}class pr extends C{constructor(e){super(),L(this,e,dr,hr,N,{})}}function mr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function gr(r){return[`
  # Backend Web Service Integration

  <hr>
  
  `]}class wr extends C{constructor(e){super(),L(this,e,gr,mr,N,{})}}function vr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function br(r){return[`
  # First Steps in Messaging

  <hr>
  
  `]}class kr extends C{constructor(e){super(),L(this,e,br,vr,N,{})}}function yr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function _r(r){return[`
  # HTTP Plain Messaging

  <hr>
  
  `]}class xr extends C{constructor(e){super(),L(this,e,_r,yr,N,{})}}function Sr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function $r(r){return[`
  # Messaging

  <hr>
  
  `]}class Tr extends C{constructor(e){super(),L(this,e,$r,Sr,N,{})}}function Er(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Ar(r){return[`
  # Conversation / Message Purging

  <hr>
  
  `]}class Ir extends C{constructor(e){super(),L(this,e,Ar,Er,N,{})}}function Ur(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Nr(r){return[`
  # Testing Connectivity

  <hr>
  
  `]}class Lr extends C{constructor(e){super(),L(this,e,Nr,Ur,N,{})}}function Cr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function zr(r){return[`
  # Unconfigured Content Type

  <hr>
  
  `]}class Rr extends C{constructor(e){super(),L(this,e,zr,Cr,N,{})}}function Dr(r){let e,t,n;return{c(){e=Te("svg"),t=Te("path"),b(t,"d",n=r[1][r[0]]),b(e,"class","icon svelte-17jwhoa"),b(e,"viewBox","0 0 24 24"),b(e,"stroke-width","2"),b(e,"stroke","currentColor")},m(i,s){m(i,e,s),x(e,t)},p(i,[s]){s&1&&n!==(n=i[1][i[0]])&&b(t,"d",n)},i:h,o:h,d(i){i&&p(e)}}}function Mr(r,e,t){let{icon:n}=e;const i={copy:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"};return r.$$set=s=>{"icon"in s&&t(0,n=s.icon)},[n,i]}class kt extends C{constructor(e){super(),L(this,e,Mr,Dr,N,{icon:0})}}function yt(r,e,t){const n=r.slice();return n[7]=e[t],n}function _t(r,e,t){const n=r.slice();return n[10]=e[t],n}function xt(r){let e;return{c(){e=g("span"),e.textContent="latest",b(e,"class","version-card__header-badge svelte-w8jn3f")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function St(r){let e,t=w.parse(r[10])+"";return{c(){e=g("li"),b(e,"class","version-card__change svelte-w8jn3f")},m(n,i){m(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=w.parse(n[10])+"")&&(e.innerHTML=t)},d(n){n&&p(e)}}}function $t(r){let e,t,n,i,s,a=r[0].knownIssues,l=[];for(let o=0;o<a.length;o+=1)l[o]=Tt(yt(r,a,o));return{c(){e=g("h4"),e.textContent="Known Issues",t=$(),n=g("ul");for(let o=0;o<l.length;o+=1)l[o].c();i=$(),s=g("hr")},m(o,c){m(o,e,c),m(o,t,c),m(o,n,c);for(let u=0;u<l.length;u+=1)l[u].m(n,null);m(o,i,c),m(o,s,c)},p(o,c){if(c&1){a=o[0].knownIssues;let u;for(u=0;u<a.length;u+=1){const v=yt(o,a,u);l[u]?l[u].p(v,c):(l[u]=Tt(v),l[u].c(),l[u].m(n,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=a.length}},d(o){o&&p(e),o&&p(t),o&&p(n),Ie(l,o),o&&p(i),o&&p(s)}}}function Tt(r){let e,t=w.parse(r[7])+"";return{c(){e=g("li"),b(e,"class","version-card__change svelte-w8jn3f")},m(n,i){m(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=w.parse(n[7])+"")&&(e.innerHTML=t)},d(n){n&&p(e)}}}function Et(r){let e,t,n,i,s,a,l;return{c(){e=g("hr"),t=$(),n=g("h4"),n.textContent="Downloads",i=$(),s=g("a"),a=ge(".war via GitHub"),b(s,"href",l=`${At}/${r[0].download}`),b(s,"target","_blank"),b(s,"class","version-card__download svelte-w8jn3f"),b(s,"rel","noreferrer")},m(o,c){m(o,e,c),m(o,t,c),m(o,n,c),m(o,i,c),m(o,s,c),x(s,a)},p(o,c){c&1&&l!==(l=`${At}/${o[0].download}`)&&b(s,"href",l)},d(o){o&&p(e),o&&p(t),o&&p(n),o&&p(i),o&&p(s)}}}function Xr(r){let e,t,n,i=r[0].version+"",s,a,l,o,c,u,v,d,f,_,E,k,z,H,W,U,A,I,B,M=r[0].md5+"",Q,he,ae,de,S,O,be,Ue,rt,le,Ne,Le=r[0].sha256+"",qe,st,ke,ot,pe,Pe,at,Y=r[1]&&xt(),ye=r[0].changes,G=[];for(let X=0;X<ye.length;X+=1)G[X]=St(_t(r,ye,X));let V=r[0].knownIssues&&r[0].knownIssues.length>0&&$t(r);ae=new kt({props:{icon:"copy"}}),ke=new kt({props:{icon:"copy"}});let K=r[0].download&&Et(r);return{c(){e=g("div"),t=g("div"),n=g("span"),s=ge(i),a=$(),Y&&Y.c(),l=$(),o=g("hr"),c=$(),u=g("h4"),u.textContent="Changes",v=$(),d=g("ul");for(let X=0;X<G.length;X+=1)G[X].c();f=$(),_=g("hr"),E=$(),V&&V.c(),k=$(),z=g("h4"),z.textContent="Checksums",H=$(),W=g("div"),U=g("span"),U.textContent="MD5:",A=$(),I=g("div"),B=g("span"),Q=ge(M),he=$(),P(ae.$$.fragment),de=$(),S=g("br"),O=$(),be=g("div"),Ue=g("span"),Ue.textContent="SHA256:",rt=$(),le=g("div"),Ne=g("span"),qe=ge(Le),st=$(),P(ke.$$.fragment),ot=$(),K&&K.c(),b(n,"class","version-card__header-text svelte-w8jn3f"),b(t,"class","version-card__header svelte-w8jn3f"),b(U,"class","version-card__checksum-type svelte-w8jn3f"),b(B,"class","version-card__checksum-hash svelte-w8jn3f"),b(I,"class","version-card__checksum-value svelte-w8jn3f"),b(W,"class","version-card__checksum svelte-w8jn3f"),b(Ue,"class","version-card__checksum-type svelte-w8jn3f"),b(Ne,"class","version-card__checksum-hash svelte-w8jn3f"),b(le,"class","version-card__checksum-value svelte-w8jn3f"),b(be,"class","version-card__checksum svelte-w8jn3f"),b(e,"class","version-card svelte-w8jn3f")},m(X,ie){m(X,e,ie),x(e,t),x(t,n),x(n,s),x(t,a),Y&&Y.m(t,null),x(e,l),x(e,o),x(e,c),x(e,u),x(e,v),x(e,d);for(let J=0;J<G.length;J+=1)G[J].m(d,null);x(e,f),x(e,_),x(e,E),V&&V.m(e,null),x(e,k),x(e,z),x(e,H),x(e,W),x(W,U),x(W,A),x(W,I),x(I,B),x(B,Q),x(I,he),F(ae,I,null),x(e,de),x(e,S),x(e,O),x(e,be),x(be,Ue),x(be,rt),x(be,le),x(le,Ne),x(Ne,qe),x(le,st),F(ke,le,null),x(e,ot),K&&K.m(e,null),pe=!0,Pe||(at=[ee(I,"click",r[5]),ee(I,"keypress",r[4]),ee(le,"click",r[6]),ee(le,"keypress",r[3])],Pe=!0)},p(X,[ie]){if((!pe||ie&1)&&i!==(i=X[0].version+"")&&Me(s,i),X[1]?Y||(Y=xt(),Y.c(),Y.m(t,null)):Y&&(Y.d(1),Y=null),ie&1){ye=X[0].changes;let J;for(J=0;J<ye.length;J+=1){const lt=_t(X,ye,J);G[J]?G[J].p(lt,ie):(G[J]=St(lt),G[J].c(),G[J].m(d,null))}for(;J<G.length;J+=1)G[J].d(1);G.length=ye.length}X[0].knownIssues&&X[0].knownIssues.length>0?V?V.p(X,ie):(V=$t(X),V.c(),V.m(e,k)):V&&(V.d(1),V=null),(!pe||ie&1)&&M!==(M=X[0].md5+"")&&Me(Q,M),(!pe||ie&1)&&Le!==(Le=X[0].sha256+"")&&Me(qe,Le),X[0].download?K?K.p(X,ie):(K=Et(X),K.c(),K.m(e,null)):K&&(K.d(1),K=null)},i(X){pe||(R(ae.$$.fragment,X),R(ke.$$.fragment,X),pe=!0)},o(X){D(ae.$$.fragment,X),D(ke.$$.fragment,X),pe=!1},d(X){X&&p(e),Y&&Y.d(),Ie(G,X),V&&V.d(),q(ae),q(ke),K&&K.d(),Pe=!1,oe(at)}}}const At="https://github.com/NEXUSe2e/NEXUSe2e/releases/download";function Br(r,e,t){let{version:n}=e,{latest:i}=e;const s=u=>{navigator.clipboard.writeText(u).then(()=>{alert("In die Zwischenablage kopiert")})};function a(u){ce.call(this,r,u)}function l(u){ce.call(this,r,u)}const o=()=>s(n.md5),c=()=>s(n.sha256);return r.$$set=u=>{"version"in u&&t(0,n=u.version),"latest"in u&&t(1,i=u.latest)},[n,i,s,a,l,o,c]}class jr extends C{constructor(e){super(),L(this,e,Br,Xr,N,{version:0,latest:1})}}const It=[{version:"NEXUSe2e 5.11.5",md5:"BB37D202B5F4B6F52E02AE73489BE78A",sha256:"358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2",download:"v5.11.5/nexuse2e-webapp-5.11.5.war",changes:["Added basic auth option for http receiver.","Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.","Improved token replacement."]},{version:"NEXUSe2e 5.11.1",md5:"5366B9E97F13A489B0540DC7299698CD",sha256:"2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9",download:"v5.11.1/nexuse2e-webapp-5.11.1.war",changes:["Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.","Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.","Bumped Postgres version to version 42.2.25",'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.']},{version:"NEXUSe2e 5.9.15",md5:"2D3869567E10047C90CD7729A4B48864",sha256:"C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39",download:"v5.9.15/nexuse2e-webapp-5.9.15.war",changes:["Added http header folding option to prevent content type from being folded into a new line."]},{version:"NEXUSe2e 5.9.11",md5:"8E547BF1B85D871A283C73FCEB67BC86",sha256:"EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B",changes:["Implemented HttpResponses for synchronous messaging","Fixed deadlock when synchronously receiving messages","Fixed backend status"],knownIssues:['"Synchronous" for incoming messages still does not work properly in combination with "Reliable"']}];function Ut(r,e,t){const n=r.slice();return n[0]=e[t],n[2]=t,n}function Nt(r){let e,t;return e=new jr({props:{version:r[0],latest:r[2]===0}}),{c(){P(e.$$.fragment)},m(n,i){F(e,n,i),t=!0},p:h,i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Hr(r){let e,t,n,i,s,a,l,o,c=It,u=[];for(let d=0;d<c.length;d+=1)u[d]=Nt(Ut(r,c,d));const v=d=>D(u[d],1,1,()=>{u[d]=null});return{c(){e=g("h1"),e.textContent="Downloads",t=$(),n=g("hr"),i=$(),s=g("br"),a=$(),l=g("div");for(let d=0;d<u.length;d+=1)u[d].c();b(l,"class","downloads__versions svelte-1q5hjp8")},m(d,f){m(d,e,f),m(d,t,f),m(d,n,f),m(d,i,f),m(d,s,f),m(d,a,f),m(d,l,f);for(let _=0;_<u.length;_+=1)u[_].m(l,null);o=!0},p(d,[f]){if(f&0){c=It;let _;for(_=0;_<c.length;_+=1){const E=Ut(d,c,_);u[_]?(u[_].p(E,f),R(u[_],1)):(u[_]=Nt(E),u[_].c(),R(u[_],1),u[_].m(l,null))}for(we(),_=c.length;_<u.length;_+=1)v(_);ve()}},i(d){if(!o){for(let f=0;f<c.length;f+=1)R(u[f]);o=!0}},o(d){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)D(u[f]);o=!1},d(d){d&&p(e),d&&p(t),d&&p(n),d&&p(i),d&&p(s),d&&p(a),d&&p(l),Ie(u,d)}}}class Fr extends C{constructor(e){super(),L(this,e,null,Hr,N,{})}}function qr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Pr(r){return[`
  # Contact

  ---

  <br>

  **How to get in touch**

  Do you have a question or suggestion relating to this web site? Would you like more information? Below you will find different ways to get in touch with us.

  We are available by phone 9 am through 6 pm Central European Time:

  **Tel.:** <a href="tel:+49 40 88155-0" class="phone">+49 40 88155 \u2013 0</a>  
  **E-Mail:** <a href="mailto:nexuse2e@evolvsys.com" class="email">nexuse2e@evolvsys.com</a>

  ---

  **Office** 

  Alter Wall 34-36  
  20457 Hamburg  
  Deutschland  

  ---

`]}class Or extends C{constructor(e){super(),L(this,e,Pr,qr,N,{})}}function Wr(r){let e,t=w.parse(r[0])+"";return{c(){e=g("div")},m(n,i){m(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&p(e)}}}function Qr(r){return[`
  # Legal Notices / Impressum

  ---

# Angaben gem\xE4\xDF \xA7 5 TMG

**evolving systems consulting GmbH**  
Alter Wall 34-36  
20457 Hamburg  

Handelsregister: HRB 153784  
Registergericht: Amtsgericht Hamburg  

**Vertreten durch:**
Mathias Kr\xFCger, Tobias Joswig  

# Kontakt

Verantwortlich f\xFCr den Internetauftritt:  
Mathias Kr\xFCger und Tobias Joswig  
 
Telefon: +49-40-377073-500  
E-Mail: contact@evolvsys.com  

# Umsatzsteuer-ID

Umsatzsteuer-Identifikationsnummer gem\xE4\xDF \xA727 a Umsatzsteuergesetz:  
DE207968204

# Streitschlichtung

Die Europ\xE4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
Unsere E-Mail-Adresse finden Sie oben im Impressum.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.  

**Haftung f\xFCr Inhalte**  

Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.    

**Haftung f\xFCr Links**  

Unser Angebot enth\xE4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.

Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.  

**Urheberrecht**

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet.

Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
`]}class Zr extends C{constructor(e){super(),L(this,e,Qr,Wr,N,{})}}function Jr(r){let e;return{c(){e=g("div"),e.innerHTML=`<h1 class="not-found__header svelte-1vhr8a1">Site not found</h1> 
  <p class="not-found__text svelte-1vhr8a1">The requested page was not found. <a class="standard-link" href="#/">Back</a></p>`,b(e,"class","not-found svelte-1vhr8a1")},m(t,n){m(t,e,n)},p:h,i:h,o:h,d(t){t&&p(e)}}}class Gr extends C{constructor(e){super(),L(this,e,null,Jr,N,{})}}function Vr(r){let e,t,n;return t=new _n({props:{routes:r[0]}}),{c(){e=g("div"),P(t.$$.fragment),b(e,"id","router"),b(e,"class","svelte-181d4p6")},m(i,s){m(i,e,s),F(t,e,null),n=!0},p:h,i(i){n||(R(t.$$.fragment,i),n=!0)},o(i){D(t.$$.fragment,i),n=!1},d(i){i&&p(e),q(t)}}}function Kr(r){return[{"/":qn,"/solution":Yn,"/solution/features":Wn,"/solution/scenarios":Jn,"/service":ni,"/documentation":ri,"/documentation/installation":ui,"/documentation/installation/system-requirements":gi,"/documentation/installation/setting-up":di,"/documentation/installation/external-config":ai,"/documentation/upgrade":_i,"/documentation/upgrade/checklist":bi,"/documentation/configuration/":Di,"/documentation/configuration/alter-url":Ei,"/documentation/configuration/mssql-auth":Oi,"/documentation/configuration/windows-service":Yi,"/documentation/configuration/backend-integration":Ci,"/documentation/configuration/xsd-schema-validation":nr,"/documentation/configuration/log4j-logging":Bi,"/documentation/security":fr,"/documentation/security/client-auth":sr,"/documentation/security/secure-endpoint-config":lr,"/documentation/security/ssl":pr,"/documentation/messaging":Tr,"/documentation/messaging/first-steps":kr,"/documentation/messaging/testing-connectivity":Lr,"/documentation/messaging/unconfigured-content-type":Rr,"/documentation/messaging/http-plain-messaging":xr,"/documentation/messaging/backend-web-service-integration":wr,"/documentation/messaging/purging":Ir,"/downloads":Fr,"/contact":Or,"/imprint":Zr,"*":Gr}]}class Yr extends C{constructor(e){super(),L(this,e,Kr,Vr,N,{})}}const es="/assets/logo.db89ed63.png";function Lt(r,e,t){const n=r.slice();return n[8]=e[t],n}function Ct(r){let e,t;return{c(){e=Te("svg"),t=Te("path"),b(t,"d","M8.25 4.5l7.5 7.5-7.5 7.5"),b(e,"fill","none"),b(e,"viewBox","0 0 24 24"),b(e,"stroke-width","2.5"),b(e,"stroke","currentColor"),b(e,"class","navigation-list-item__sub-icon svelte-1suezlb"),fe(e,"active",r[2])},m(n,i){m(n,e,i),x(e,t)},p(n,i){i&4&&fe(e,"active",n[2])},d(n){n&&p(e)}}}function zt(r){let e,t,n=r[0].subroutes,i=[];for(let a=0;a<n.length;a+=1)i[a]=Rt(Lt(r,n,a));const s=a=>D(i[a],1,1,()=>{i[a]=null});return{c(){e=g("ul");for(let a=0;a<i.length;a+=1)i[a].c();b(e,"class","navigation-list-item__sub-list svelte-1suezlb"),fe(e,"active",r[2])},m(a,l){m(a,e,l);for(let o=0;o<i.length;o+=1)i[o].m(e,null);t=!0},p(a,l){if(l&19){n=a[0].subroutes;let o;for(o=0;o<n.length;o+=1){const c=Lt(a,n,o);i[o]?(i[o].p(c,l),R(i[o],1)):(i[o]=Rt(c),i[o].c(),R(i[o],1),i[o].m(e,null))}for(we(),o=n.length;o<i.length;o+=1)s(o);ve()}(!t||l&4)&&fe(e,"active",a[2])},i(a){if(!t){for(let l=0;l<n.length;l+=1)R(i[l]);t=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)D(i[l]);t=!1},d(a){a&&p(e),Ie(i,a)}}}function Rt(r){let e,t;return e=new nn({props:{navItem:r[8],activeRoute:r[1]}}),e.$on("setActive",r[4]),{c(){P(e.$$.fragment)},m(n,i){F(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.navItem=n[8]),i&2&&(s.activeRoute=n[1]),e.$set(s)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function ts(r){let e,t,n,i=r[0].text+"",s,a,l,o,c,u,v=r[0].subroutes&&Ct(r),d=r[0].subroutes&&zt(r);return{c(){e=g("li"),t=g("div"),n=g("span"),s=ge(i),a=$(),v&&v.c(),l=$(),d&&d.c(),b(t,"class","navigation-list-item__text svelte-1suezlb"),fe(t,"active",r[0].route===r[1]),b(e,"class","navigation-list-item")},m(f,_){m(f,e,_),x(e,t),x(t,n),x(n,s),x(t,a),v&&v.m(t,null),x(e,l),d&&d.m(e,null),o=!0,c||(u=[ee(t,"click",r[3]),ee(t,"keypress",r[5])],c=!0)},p(f,[_]){(!o||_&1)&&i!==(i=f[0].text+"")&&Me(s,i),f[0].subroutes?v?v.p(f,_):(v=Ct(f),v.c(),v.m(t,null)):v&&(v.d(1),v=null),(!o||_&3)&&fe(t,"active",f[0].route===f[1]),f[0].subroutes?d?(d.p(f,_),_&1&&R(d,1)):(d=zt(f),d.c(),R(d,1),d.m(e,null)):d&&(we(),D(d,1,1,()=>{d=null}),ve())},i(f){o||(R(d),o=!0)},o(f){D(d),o=!1},d(f){f&&p(e),v&&v.d(),d&&d.d(),c=!1,oe(u)}}}function ns(r,e,t){let n;const i=Ye();let{navItem:s}=e,{activeRoute:a}=e;function l(v){v.stopPropagation(),c(),i("setActive",s.route)}function o({detail:v}){c(),i("setActive",v)}function c(){const v=s.subroutes===void 0;window.innerWidth<640&&v&&Ae.set(!1)}function u(v){ce.call(this,r,v)}return r.$$set=v=>{"navItem"in v&&t(0,s=v.navItem),"activeRoute"in v&&t(1,a=v.activeRoute)},r.$$.update=()=>{r.$$.dirty&3&&t(2,n=a.includes(s.route))},[s,a,n,l,o,u]}class nn extends C{constructor(e){super(),L(this,e,ns,ts,N,{navItem:0,activeRoute:1})}}function Dt(r,e,t){const n=r.slice();return n[4]=e[t],n}function Mt(r){let e,t;return e=new nn({props:{navItem:r[4],activeRoute:r[1]}}),e.$on("setActive",r[2]),{c(){P(e.$$.fragment)},m(n,i){F(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.navItem=n[4]),i&2&&(s.activeRoute=n[1]),e.$set(s)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function is(r){let e,t,n=r[0],i=[];for(let a=0;a<n.length;a+=1)i[a]=Mt(Dt(r,n,a));const s=a=>D(i[a],1,1,()=>{i[a]=null});return{c(){e=g("ul");for(let a=0;a<i.length;a+=1)i[a].c();b(e,"class","the-navigation__list svelte-1o65xxw")},m(a,l){m(a,e,l);for(let o=0;o<i.length;o+=1)i[o].m(e,null);t=!0},p(a,[l]){if(l&7){n=a[0];let o;for(o=0;o<n.length;o+=1){const c=Dt(a,n,o);i[o]?(i[o].p(c,l),R(i[o],1)):(i[o]=Mt(c),i[o].c(),R(i[o],1),i[o].m(e,null))}for(we(),o=n.length;o<i.length;o+=1)s(o);ve()}},i(a){if(!t){for(let l=0;l<n.length;l+=1)R(i[l]);t=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)D(i[l]);t=!1},d(a){a&&p(e),Ie(i,a)}}}function rs(r,e,t){const n=Ye();let{navItems:i}=e,{activeItem:s}=e;function a({detail:l}){n("setActive",l)}return r.$$set=l=>{"navItems"in l&&t(0,i=l.navItems),"activeItem"in l&&t(1,s=l.activeItem)},[i,s,a]}class Xt extends C{constructor(e){super(),L(this,e,rs,is,N,{navItems:0,activeItem:1})}}function ss(r){let e,t,n,i,s;return t=new Xt({props:{navItems:r[1],activeItem:r[0]}}),t.$on("setActive",r[3]),i=new Xt({props:{navItems:r[2],activeItem:r[0]}}),i.$on("setActive",r[3]),{c(){e=g("nav"),P(t.$$.fragment),n=$(),P(i.$$.fragment),b(e,"id","the-navigation"),b(e,"class","svelte-79l316")},m(a,l){m(a,e,l),F(t,e,null),x(e,n),F(i,e,null),s=!0},p(a,[l]){const o={};l&1&&(o.activeItem=a[0]),t.$set(o);const c={};l&1&&(c.activeItem=a[0]),i.$set(c)},i(a){s||(R(t.$$.fragment,a),R(i.$$.fragment,a),s=!0)},o(a){D(t.$$.fragment,a),D(i.$$.fragment,a),s=!1},d(a){a&&p(e),q(t),q(i)}}}function os(r,e,t){let n;Ge(r,bn,o=>t(4,n=o));const i=[{route:"/",text:"Home"},{route:"/solution",text:"Solution",subroutes:[{route:"/solution/features",text:"Features"},{route:"/solution/scenarios",text:"Scenarios"}]},{route:"/service",text:"Service"},{route:"/documentation",text:"Documentation",subroutes:[{route:"/documentation/installation",text:"Installation",subroutes:[{route:"/documentation/installation/system-requirements",text:"System Requirements"},{route:"/documentation/installation/setting-up",text:"Setting up NEXUSe2e"},{route:"/documentation/installation/external-config",text:"External Configuration Folder"}]},{route:"/documentation/upgrade",text:"Upgrade",subroutes:[{route:"/documentation/upgrade/checklist",text:"Upgrade Checklist"}]},{route:"/documentation/configuration",text:"Configuration",subroutes:[{route:"/documentation/configuration/alter-url",text:"How to Alter the NEXUSe2e URL"},{route:"/documentation/configuration/mssql-auth",text:"Integrated Authentication with MSSQL"},{route:"/documentation/configuration/windows-service",text:"Windows Service"},{route:"/documentation/configuration/backend-integration",text:"NEXUSe2e Backend Integration"},{route:"/documentation/configuration/xsd-schema-validation",text:"XSD - Schema Validation"},{route:"/documentation/configuration/log4j-logging",text:"Logging with Log4j 2"}]},{route:"/documentation/security",text:"Security",subroutes:[{route:"/documentation/security/client-auth",text:"Client Authentication"},{route:"/documentation/security/secure-endpoint-config",text:"Configure a secure web service endpoint"},{route:"/documentation/security/ssl",text:"SSL"}]},{route:"/documentation/messaging",text:"Messaging",subroutes:[{route:"/documentation/messaging/first-steps",text:"First Steps in Messaging"},{route:"/documentation/messaging/testing-connectivity",text:"Testing Connectivity"},{route:"/documentation/messaging/unconfigured-content-type",text:"Unconfigured Content Type"},{route:"/documentation/messaging/http-plain-messaging",text:"HTTP Plain Messaging"},{route:"/documentation/messaging/backend-web-service-integration",text:"Backend Web Service Integration"},{route:"/documentation/messaging/purging",text:"Conversation / Message Purging"},{route:"/documentation/messaging/comet",text:"NEXUSe2e - comet"}]}]},{route:"/downloads",text:"Downloads"}],s=[{route:"/contact",text:"Contact"},{route:"/imprint",text:"Legal Notices / Impressum"}];let a=n;function l({detail:o}){t(0,a=o),Gt(o)}return[a,i,s,l]}class as extends C{constructor(e){super(),L(this,e,os,ss,N,{})}}function ls(r){let e,t,n,i,s,a,l,o,c,u;return l=new as({}),{c(){e=g("div"),t=g("aside"),n=g("img"),s=$(),a=g("div"),P(l.$$.fragment),ue(n.src,i=es)||b(n,"src",i),b(n,"alt","nexus logo"),b(n,"class","the-navigation-drawer__logo svelte-1lh1kp9"),b(a,"class","the-navigation-drawer__content svelte-1lh1kp9"),b(t,"id","the-navigation-drawer"),b(t,"class","svelte-1lh1kp9"),b(e,"class","the-navigation-drawer__overlay svelte-1lh1kp9"),fe(e,"active",r[0])},m(v,d){m(v,e,d),x(e,t),x(t,n),x(t,s),x(t,a),F(l,a,null),o=!0,c||(u=[ee(n,"click",r[2]),ee(n,"keypress",r[5]),ee(t,"click",cs),ee(t,"keypress",r[4]),ee(e,"click",r[1]),ee(e,"keypress",r[3])],c=!0)},p(v,[d]){(!o||d&1)&&fe(e,"active",v[0])},i(v){o||(R(l.$$.fragment,v),o=!0)},o(v){D(l.$$.fragment,v),o=!1},d(v){v&&p(e),q(l),c=!1,oe(u)}}}const cs=r=>r.stopPropagation();function us(r,e,t){let n;Ge(r,Ae,c=>t(0,n=c));function i(){Ae.set(!1)}function s(){Gt("/")}function a(c){ce.call(this,r,c)}function l(c){ce.call(this,r,c)}function o(c){ce.call(this,r,c)}return[n,i,s,a,l,o]}class fs extends C{constructor(e){super(),L(this,e,us,ls,N,{})}}function hs(r){let e,t,n,i,s,a,l,o;return t=new fs({}),s=new pn({}),l=new Yr({}),{c(){e=g("main"),P(t.$$.fragment),n=$(),i=g("div"),P(s.$$.fragment),a=$(),P(l.$$.fragment),b(i,"id","content"),b(i,"class","svelte-1hx8wd3"),b(e,"class","svelte-1hx8wd3")},m(c,u){m(c,e,u),F(t,e,null),x(e,n),x(e,i),F(s,i,null),x(i,a),F(l,i,null),o=!0},p:h,i(c){o||(R(t.$$.fragment,c),R(s.$$.fragment,c),R(l.$$.fragment,c),o=!0)},o(c){D(t.$$.fragment,c),D(s.$$.fragment,c),D(l.$$.fragment,c),o=!1},d(c){c&&p(e),q(t),q(s),q(l)}}}class ds extends C{constructor(e){super(),L(this,e,null,hs,N,{})}}new ds({target:document.getElementById("app")});
