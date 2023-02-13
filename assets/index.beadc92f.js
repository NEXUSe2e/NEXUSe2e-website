(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function y(){}function jt(r,e){for(const t in e)r[t]=e[t];return r}function zt(r){return r()}function ct(){return Object.create(null)}function me(r){r.forEach(zt)}function Ze(r){return typeof r=="function"}function z(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Me;function ve(r,e){return Me||(Me=document.createElement("a")),Me.href=e,r===Me.href}function rn(r){return Object.keys(r).length===0}function Ht(r,...e){if(r==null)return y;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Je(r,e,t){r.$$.on_destroy.push(Ht(e,t))}function C(r,e){r.appendChild(e)}function h(r,e,t){r.insertBefore(e,t||null)}function d(r){r.parentNode.removeChild(r)}function Xe(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function p(r){return document.createElement(r)}function Ne(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function _e(r){return document.createTextNode(r)}function b(){return _e(" ")}function Ye(){return _e("")}function le(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function x(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function sn(r){return Array.from(r.childNodes)}function je(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Pe(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ye(r,e,t){r.classList[t?"add":"remove"](e)}function on(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}class Ve{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Ne(t.nodeName):this.e=p(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function Be(r,e){return new r(e)}let Ie;function Ce(r){Ie=r}function Ke(){if(!Ie)throw new Error("Function called outside component initialization");return Ie}function an(r){Ke().$$.after_update.push(r)}function ln(r){Ke().$$.on_destroy.push(r)}function et(){const r=Ke();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=on(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function we(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Ue=[],ut=[],ze=[],dt=[],Ft=Promise.resolve();let Ge=!1;function Bt(){Ge||(Ge=!0,Ft.then(Wt))}function Ot(){return Bt(),Ft}function Qe(r){ze.push(r)}const qe=new Set;let De=0;function Wt(){const r=Ie;do{for(;De<Ue.length;){const e=Ue[De];De++,Ce(e),cn(e.$$)}for(Ce(null),Ue.length=0,De=0;ut.length;)ut.pop()();for(let e=0;e<ze.length;e+=1){const t=ze[e];qe.has(t)||(qe.add(t),t())}ze.length=0}while(Ue.length);for(;dt.length;)dt.pop()();Ge=!1,qe.clear(),Ce(r)}function cn(r){if(r.fragment!==null){r.update(),me(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Qe)}}const He=new Set;let ke;function Se(){ke={r:0,c:[],p:ke}}function xe(){ke.r||me(ke.c),ke=ke.p}function N(r,e){r&&r.i&&(He.delete(r),r.i(e))}function X(r,e,t,n){if(r&&r.o){if(He.has(r))return;He.add(r),ke.c.push(()=>{He.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function qt(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],l=e[s];if(l){for(const a in o)a in l||(n[a]=1);for(const a in l)i[a]||(t[a]=l[a],i[a]=1);r[s]=l}else for(const a in o)i[a]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Vt(r){return typeof r=="object"&&r!==null?r:{}}function j(r){r&&r.c()}function D(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||Qe(()=>{const o=r.$$.on_mount.map(zt).filter(Ze);r.$$.on_destroy?r.$$.on_destroy.push(...o):me(o),r.$$.on_mount=[]}),s.forEach(Qe)}function R(r,e){const t=r.$$;t.fragment!==null&&(me(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function un(r,e){r.$$.dirty[0]===-1&&(Ue.push(r),Bt(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function F(r,e,t,n,i,s,o,l=[-1]){const a=Ie;Ce(r);const c=r.$$={fragment:null,ctx:[],props:s,update:y,not_equal:i,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ct(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(v,m,...f)=>{const g=f.length?f[0]:m;return c.ctx&&i(c.ctx[v],c.ctx[v]=g)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](g),u&&un(r,v)),m}):[],c.update(),u=!0,me(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const v=sn(e.target);c.fragment&&c.fragment.l(v),v.forEach(d)}else c.fragment&&c.fragment.c();e.intro&&N(r.$$.fragment),D(r,e.target,e.anchor,e.customElement),Wt()}Ce(a)}class B{$destroy(){R(this,1),this.$destroy=y}$on(e,t){if(!Ze(t))return y;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!rn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dn="/assets/nexus_header.ba62d497.png",Ee=[];function Gt(r,e){return{subscribe:tt(r,e).subscribe}}function tt(r,e=y){let t;const n=new Set;function i(l){if(z(r,l)&&(r=l,t)){const a=!Ee.length;for(const c of n)c[1](),Ee.push(c,r);if(a){for(let c=0;c<Ee.length;c+=2)Ee[c][0](Ee[c+1]);Ee.length=0}}}function s(l){i(l(r))}function o(l,a=y){const c=[l,a];return n.add(c),n.size===1&&(t=e(i)||y),l(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function Qt(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return Gt(t,o=>{let l=!1;const a=[];let c=0,u=y;const v=()=>{if(c)return;u();const f=e(n?a[0]:a,o);s?o(f):u=Ze(f)?f:y},m=i.map((f,g)=>Ht(f,T=>{a[g]=T,c&=~(1<<g),l&&v()},()=>{c|=1<<g}));return l=!0,v(),function(){me(m),u()}})}const Le=tt(window.innerWidth>=640);function hn(r){let e,t,n,i,s,o,l,a,c;return{c(){e=p("div"),t=p("img"),i=b(),s=p("button"),s.innerHTML='<svg class="the-app-bar__menu-button-icon svelte-1sfxt2l" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',o=b(),l=p("div"),l.innerHTML=`<div class="the-app-bar__heading-header svelte-1sfxt2l">The proven open source</div> 
    <div class="the-app-bar__heading-sub-header svelte-1sfxt2l">B2B solution</div>`,ve(t.src,n=dn)||x(t,"src",n),x(t,"alt","nexus header"),x(t,"class","the-app-bar__img svelte-1sfxt2l"),x(s,"aria-label","menu-button"),x(s,"class","the-app-bar__menu-button svelte-1sfxt2l"),x(l,"class","the-app-bar__heading svelte-1sfxt2l"),x(e,"id","the-app-bar"),x(e,"class","svelte-1sfxt2l")},m(u,v){h(u,e,v),C(e,t),C(e,i),C(e,s),C(e,o),C(e,l),a||(c=le(s,"click",r[0]),a=!0)},p:y,i:y,o:y,d(u){u&&d(e),a=!1,c()}}}function fn(r,e,t){let n;Je(r,Le,s=>t(1,n=s));function i(){Le.set(!n)}return[i]}class pn extends B{constructor(e){super(),F(this,e,fn,hn,z,{})}}function mn(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,i,s,o=[],l="",a=r.split("/");for(a[0]||a.shift();i=a.shift();)t=i[0],t==="*"?(o.push("wild"),l+="/(.*)"):t===":"?(n=i.indexOf("?",1),s=i.indexOf(".",1),o.push(i.substring(1,~n?n:~s?s:i.length)),l+=!!~n&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(l+=(~n?"?":"")+"\\"+i.substring(s))):l+="/"+i;return{keys:o,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}function gn(r){let e,t,n;const i=[r[2]];var s=r[0];function o(l){let a={};for(let c=0;c<i.length;c+=1)a=jt(a,i[c]);return{props:a}}return s&&(e=Be(s,o()),e.$on("routeEvent",r[7])),{c(){e&&j(e.$$.fragment),t=Ye()},m(l,a){e&&D(e,l,a),h(l,t,a),n=!0},p(l,a){const c=a&4?qt(i,[Vt(l[2])]):{};if(s!==(s=l[0])){if(e){Se();const u=e;X(u.$$.fragment,1,0,()=>{R(u,1)}),xe()}s?(e=Be(s,o()),e.$on("routeEvent",l[7]),j(e.$$.fragment),N(e.$$.fragment,1),D(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&N(e.$$.fragment,l),n=!0)},o(l){e&&X(e.$$.fragment,l),n=!1},d(l){l&&d(t),e&&R(e,l)}}}function wn(r){let e,t,n;const i=[{params:r[1]},r[2]];var s=r[0];function o(l){let a={};for(let c=0;c<i.length;c+=1)a=jt(a,i[c]);return{props:a}}return s&&(e=Be(s,o()),e.$on("routeEvent",r[6])),{c(){e&&j(e.$$.fragment),t=Ye()},m(l,a){e&&D(e,l,a),h(l,t,a),n=!0},p(l,a){const c=a&6?qt(i,[a&2&&{params:l[1]},a&4&&Vt(l[2])]):{};if(s!==(s=l[0])){if(e){Se();const u=e;X(u.$$.fragment,1,0,()=>{R(u,1)}),xe()}s?(e=Be(s,o()),e.$on("routeEvent",l[6]),j(e.$$.fragment),N(e.$$.fragment,1),D(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&N(e.$$.fragment,l),n=!0)},o(l){e&&X(e.$$.fragment,l),n=!1},d(l){l&&d(t),e&&R(e,l)}}}function vn(r){let e,t,n,i;const s=[wn,gn],o=[];function l(a,c){return a[1]?0:1}return e=l(r),t=o[e]=s[e](r),{c(){t.c(),n=Ye()},m(a,c){o[e].m(a,c),h(a,n,c),i=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(Se(),X(o[u],1,1,()=>{o[u]=null}),xe(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),N(t,1),t.m(n.parentNode,n))},i(a){i||(N(t),i=!0)},o(a){X(t),i=!1},d(a){o[e].d(a),a&&d(n)}}}function ht(){const r=window.location.href.indexOf("#/");let e=r>-1?window.location.href.substr(r+1):"/";const t=e.indexOf("?");let n="";return t>-1&&(n=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:n}}const nt=Gt(null,function(e){e(ht());const t=()=>{e(ht())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),yn=Qt(nt,r=>r.location);Qt(nt,r=>r.querystring);const ft=tt(void 0);async function Zt(r){if(!r||r.length<1||r.charAt(0)!="/"&&r.indexOf("#/")!==0)throw Error("Invalid parameter location");await Ot(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(r.charAt(0)=="#"?"":"#")+r}function bn(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function kn(r,e,t){let{routes:n={}}=e,{prefix:i=""}=e,{restoreScrollState:s=!1}=e;class o{constructor(U,L){if(!L||typeof L!="function"&&(typeof L!="object"||L._sveltesparouter!==!0))throw Error("Invalid component object");if(!U||typeof U=="string"&&(U.length<1||U.charAt(0)!="/"&&U.charAt(0)!="*")||typeof U=="object"&&!(U instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:W,keys:k}=mn(U);this.path=U,typeof L=="object"&&L._sveltesparouter===!0?(this.component=L.component,this.conditions=L.conditions||[],this.userData=L.userData,this.props=L.props||{}):(this.component=()=>Promise.resolve(L),this.conditions=[],this.props={}),this._pattern=W,this._keys=k}match(U){if(i){if(typeof i=="string")if(U.startsWith(i))U=U.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const H=U.match(i);if(H&&H[0])U=U.substr(H[0].length)||"/";else return null}}const L=this._pattern.exec(U);if(L===null)return null;if(this._keys===!1)return L;const W={};let k=0;for(;k<this._keys.length;){try{W[this._keys[k]]=decodeURIComponent(L[k+1]||"")||null}catch{W[this._keys[k]]=null}k++}return W}async checkConditions(U){for(let L=0;L<this.conditions.length;L++)if(!await this.conditions[L](U))return!1;return!0}}const l=[];n instanceof Map?n.forEach((I,U)=>{l.push(new o(U,I))}):Object.keys(n).forEach(I=>{l.push(new o(I,n[I]))});let a=null,c=null,u={};const v=et();async function m(I,U){await Ot(),v(I,U)}let f=null,g=null;s&&(g=I=>{I.state&&(I.state.__svelte_spa_router_scrollY||I.state.__svelte_spa_router_scrollX)?f=I.state:f=null},window.addEventListener("popstate",g),an(()=>{bn(f)}));let T=null,_=null;const P=nt.subscribe(async I=>{T=I;let U=0;for(;U<l.length;){const L=l[U].match(I.location);if(!L){U++;continue}const W={route:l[U].path,location:I.location,querystring:I.querystring,userData:l[U].userData,params:L&&typeof L=="object"&&Object.keys(L).length?L:null};if(!await l[U].checkConditions(W)){t(0,a=null),_=null,m("conditionsFailed",W);return}m("routeLoading",Object.assign({},W));const k=l[U].component;if(_!=k){k.loading?(t(0,a=k.loading),_=k,t(1,c=k.loadingParams),t(2,u={}),m("routeLoaded",Object.assign({},W,{component:a,name:a.name,params:c}))):(t(0,a=null),_=null);const H=await k();if(I!=T)return;t(0,a=H&&H.default||H),_=k}L&&typeof L=="object"&&Object.keys(L).length?t(1,c=L):t(1,c=null),t(2,u=l[U].props),m("routeLoaded",Object.assign({},W,{component:a,name:a.name,params:c})).then(()=>{ft.set(c)});return}t(0,a=null),_=null,ft.set(void 0)});ln(()=>{P(),g&&window.removeEventListener("popstate",g)});function q(I){we.call(this,r,I)}function O(I){we.call(this,r,I)}return r.$$set=I=>{"routes"in I&&t(3,n=I.routes),"prefix"in I&&t(4,i=I.prefix),"restoreScrollState"in I&&t(5,s=I.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=s?"manual":"auto")},[a,c,u,n,i,s,q,O]}class _n extends B{constructor(e){super(),F(this,e,kn,vn,z,{routes:3,prefix:4,restoreScrollState:5})}}function Jt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ae=Jt();function Sn(r){Ae=r}const xn=/[&<>"']/,$n=/[&<>"']/g,Tn=/[<>"']|&(?!#?\w+;)/,En=/[<>"']|&(?!#?\w+;)/g,An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pt=r=>An[r];function K(r,e){if(e){if(xn.test(r))return r.replace($n,pt)}else if(Tn.test(r))return r.replace(En,pt);return r}const Un=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Yt(r){return r.replace(Un,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Cn=/(^|[^\[])\^/g;function Y(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(Cn,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const Nn=/[^\w:]/g,In=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function mt(r,e,t){if(r){let n;try{n=decodeURIComponent(Yt(t)).replace(Nn,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!In.test(t)&&(t=Pn(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Re={},Ln=/^[^:]+:\/*[^/]*$/,Xn=/^([^:]+:)[\s\S]*$/,Mn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Pn(r,e){Re[" "+r]||(Ln.test(r)?Re[" "+r]=r+"/":Re[" "+r]=Fe(r,"/",!0)),r=Re[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(Xn,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(Mn,"$1")+e:r+e}const Oe={exec:function(){}};function de(r){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}function gt(r,e){const t=r.replace(/\|/g,(s,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Fe(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Dn(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function Kt(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function wt(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function vt(r,e,t,n){const i=e.href,s=e.title?K(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:s,text:K(o)}}function Rn(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}class it{constructor(e){this.options=e||Ae}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Fe(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Rn(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=Fe(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,s,o,l,a,c,u,v,m,f,g,T=t[1].trim();const _=T.length>1,P={type:"list",raw:"",ordered:_,start:_?+T.slice(0,-1):"",loose:!1,items:[]};T=_?`\\d{1,9}\\${T.slice(-1)}`:`\\${T}`,this.options.pedantic&&(T=_?T:"[*+-]");const q=new RegExp(`^( {0,3}${T})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=q.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],v=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=t[1].length),a=!1,!u&&/^ *$/.test(v)&&(n+=v+`
`,e=e.substring(v.length+1),g=!0),!g){const I=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),U=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),L=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),W=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(m=e.split(`
`,1)[0],u=m,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(L.test(u)||W.test(u)||I.test(u)||U.test(e)));){if(u.search(/[^ ]/)>=o||!u.trim())f+=`
`+u.slice(o);else if(!a)f+=`
`+u;else break;!a&&!u.trim()&&(a=!0),n+=m+`
`,e=e.substring(m.length+1)}}P.loose||(c?P.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(f),i&&(s=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),P.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:f}),P.raw+=n}P.items[P.items.length-1].raw=n.trimRight(),P.items[P.items.length-1].text=f.trimRight(),P.raw=P.raw.trimRight();const O=P.items.length;for(l=0;l<O;l++){this.lexer.state.top=!1,P.items[l].tokens=this.lexer.blockTokens(P.items[l].text,[]);const I=P.items[l].tokens.filter(L=>L.type==="space"),U=I.every(L=>{const W=L.raw.split("");let k=0;for(const H of W)if(H===`
`&&(k+=1),k>1)return!0;return!1});!P.loose&&I.length&&U&&(P.loose=!0,P.items[l].loose=!0)}return P}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):K(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:gt(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,s,o,l,a;for(s=0;s<i;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(i=n.rows.length,s=0;s<i;s++)n.rows[s]=gt(n.rows[s],n.header.length).map(c=>({text:c}));for(i=n.header.length,o=0;o<i;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(i=n.rows.length,o=0;o<i;o++)for(a=n.rows[o],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:K(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):K(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=Fe(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Dn(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),vt(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return vt(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const o=i[0].length-1;let l,a,c=o,u=0;const v=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(v.lastIndex=0,t=t.slice(-1*e.length+o);(i=v.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(a=l.length,i[3]||i[4]){c+=a;continue}else if((i[5]||i[6])&&o%3&&!((o+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(o,a)%2){const f=e.slice(1,o+i.index+a);return{type:"em",raw:e.slice(0,o+i.index+a+1),text:f,tokens:this.lexer.inlineTokens(f)}}const m=e.slice(2,o+i.index+a-1);return{type:"strong",raw:e.slice(0,o+i.index+a+1),text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=K(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=K(this.options.mangle?t(n[1]):n[1]),s="mailto:"+i):(i=K(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=K(this.options.mangle?t(n[0]):n[0]),s="mailto:"+i;else{let o;do o=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(o!==n[0]);i=K(n[0]),n[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):K(n[0]):n[0]:i=K(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const M={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Oe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};M._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;M._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;M.def=Y(M.def).replace("label",M._label).replace("title",M._title).getRegex();M.bullet=/(?:[*+-]|\d{1,9}[.)])/;M.listItemStart=Y(/^( *)(bull) */).replace("bull",M.bullet).getRegex();M.list=Y(M.list).replace(/bull/g,M.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+M.def.source+")").getRegex();M._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";M._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;M.html=Y(M.html,"i").replace("comment",M._comment).replace("tag",M._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();M.paragraph=Y(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex();M.blockquote=Y(M.blockquote).replace("paragraph",M.paragraph).getRegex();M.normal=de({},M);M.gfm=de({},M.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});M.gfm.table=Y(M.gfm.table).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex();M.gfm.paragraph=Y(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",M.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex();M.pedantic=de({},M.normal,{html:Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",M._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Oe,paragraph:Y(M.normal._paragraph).replace("hr",M.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",M.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const A={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Oe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Oe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};A._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";A.punctuation=Y(A.punctuation).replace(/punctuation/g,A._punctuation).getRegex();A.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;A.escapedEmSt=/\\\*|\\_/g;A._comment=Y(M._comment).replace("(?:-->|$)","-->").getRegex();A.emStrong.lDelim=Y(A.emStrong.lDelim).replace(/punct/g,A._punctuation).getRegex();A.emStrong.rDelimAst=Y(A.emStrong.rDelimAst,"g").replace(/punct/g,A._punctuation).getRegex();A.emStrong.rDelimUnd=Y(A.emStrong.rDelimUnd,"g").replace(/punct/g,A._punctuation).getRegex();A._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;A._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;A._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;A.autolink=Y(A.autolink).replace("scheme",A._scheme).replace("email",A._email).getRegex();A._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;A.tag=Y(A.tag).replace("comment",A._comment).replace("attribute",A._attribute).getRegex();A._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;A._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;A._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;A.link=Y(A.link).replace("label",A._label).replace("href",A._href).replace("title",A._title).getRegex();A.reflink=Y(A.reflink).replace("label",A._label).replace("ref",M._label).getRegex();A.nolink=Y(A.nolink).replace("ref",M._label).getRegex();A.reflinkSearch=Y(A.reflinkSearch,"g").replace("reflink",A.reflink).replace("nolink",A.nolink).getRegex();A.normal=de({},A);A.pedantic=de({},A.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Y(/^!?\[(label)\]\((.*?)\)/).replace("label",A._label).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",A._label).getRegex()});A.gfm=de({},A.normal,{escape:Y(A.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});A.gfm.url=Y(A.gfm.url,"i").replace("email",A.gfm._extended_email).getRegex();A.breaks=de({},A.gfm,{br:Y(A.br).replace("{2,}","*").getRegex(),text:Y(A.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function jn(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function yt(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class pe{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ae,this.options.tokenizer=this.options.tokenizer||new it,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:M.normal,inline:A.normal};this.options.pedantic?(t.block=M.pedantic,t.inline=A.pedantic):this.options.gfm&&(t.block=M.gfm,this.options.breaks?t.inline=A.breaks:t.inline=A.gfm),this.tokenizer.rules=t}static get rules(){return{block:M,inline:A}}static lex(e,t){return new pe(t).lex(e)}static lexInline(e,t){return new pe(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,a,c)=>a+"    ".repeat(c.length));let n,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),o=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,o=e,l,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,yt)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,yt))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const v=e.slice(1);let m;this.options.extensions.startInline.forEach(function(f){m=f.call({lexer:this},v),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,jn)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class rt{constructor(e){this.options=e||Ae}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+K(i,!0)+'">'+(n?e:K(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:K(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=mt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+K(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=mt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class en{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class tn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class he{constructor(e){this.options=e||Ae,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new en,this.slugger=new tn}static parse(e,t){return new he(t).parse(e)}static parseInline(e,t){return new he(t).parseInline(e)}parse(e,t=!0){let n="",i,s,o,l,a,c,u,v,m,f,g,T,_,P,q,O,I,U,L;const W=e.length;for(i=0;i<W;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(L=this.options.extensions.renderers[f.type].call({parser:this},f),L!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){n+=L||"";continue}switch(f.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Yt(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(v="",u="",l=f.header.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(f.header[s].tokens),{header:!0,align:f.align[s]});for(v+=this.renderer.tablerow(u),m="",l=f.rows.length,s=0;s<l;s++){for(c=f.rows[s],u="",a=c.length,o=0;o<a;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});m+=this.renderer.tablerow(u)}n+=this.renderer.table(v,m);continue}case"blockquote":{m=this.parse(f.tokens),n+=this.renderer.blockquote(m);continue}case"list":{for(g=f.ordered,T=f.start,_=f.loose,l=f.items.length,m="",s=0;s<l;s++)q=f.items[s],O=q.checked,I=q.task,P="",q.task&&(U=this.renderer.checkbox(O),_?q.tokens.length>0&&q.tokens[0].type==="paragraph"?(q.tokens[0].text=U+" "+q.tokens[0].text,q.tokens[0].tokens&&q.tokens[0].tokens.length>0&&q.tokens[0].tokens[0].type==="text"&&(q.tokens[0].tokens[0].text=U+" "+q.tokens[0].tokens[0].text)):q.tokens.unshift({type:"text",text:U}):P+=U),P+=this.parse(q.tokens,_),m+=this.renderer.listitem(P,I,O);n+=this.renderer.list(m,g,T);continue}case"html":{n+=this.renderer.html(f.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(m=f.tokens?this.parseInline(f.tokens):f.text;i+1<W&&e[i+1].type==="text";)f=e[++i],m+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=t?this.renderer.paragraph(m):m;continue}default:{const k='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(k);return}else throw new Error(k)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,s,o;const l=e.length;for(i=0;i<l;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){n+=o||"";continue}switch(s.type){case"escape":{n+=t.text(s.text);break}case"html":{n+=t.html(s.text);break}case"link":{n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{n+=t.image(s.href,s.title,s.text);break}case"strong":{n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(s.tokens,t));break}case"text":{n+=t.text(s.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function w(r,e,t){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=de({},w.defaults,e||{}),Kt(e),t){const i=e.highlight;let s;try{s=pe.lex(r,e)}catch(a){return t(a)}const o=function(a){let c;if(!a)try{e.walkTokens&&w.walkTokens(s,e.walkTokens),c=he.parse(s,e)}catch(u){a=u}return e.highlight=i,a?t(a):t(null,c)};if(!i||i.length<3||(delete e.highlight,!s.length))return o();let l=0;w.walkTokens(s,function(a){a.type==="code"&&(l++,setTimeout(()=>{i(a.text,a.lang,function(c,u){if(c)return o(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),l--,l===0&&o()})},0))}),l===0&&o();return}function n(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+K(i.message+"",!0)+"</pre>";throw i}try{const i=pe.lex(r,e);if(e.walkTokens){if(e.async)return Promise.all(w.walkTokens(i,e.walkTokens)).then(()=>he.parse(i,e)).catch(n);w.walkTokens(i,e.walkTokens)}return he.parse(i,e)}catch(i){n(i)}}w.options=w.setOptions=function(r){return de(w.defaults,r),Sn(w.defaults),w};w.getDefaults=Jt;w.defaults=Ae;w.use=function(...r){const e=de({},...r),t=w.defaults.extensions||{renderers:{},childTokens:{}};let n;r.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const o=t.renderers?t.renderers[s.name]:null;o?t.renderers[s.name]=function(...l){let a=s.renderer.apply(this,l);return a===!1&&(a=o.apply(this,l)),a}:t.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[s.level]?t[s.level].unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}s.childTokens&&(t.childTokens[s.name]=s.childTokens)})),i.renderer){const s=w.defaults.renderer||new rt;for(const o in i.renderer){const l=s[o];s[o]=(...a)=>{let c=i.renderer[o].apply(s,a);return c===!1&&(c=l.apply(s,a)),c}}e.renderer=s}if(i.tokenizer){const s=w.defaults.tokenizer||new it;for(const o in i.tokenizer){const l=s[o];s[o]=(...a)=>{let c=i.tokenizer[o].apply(s,a);return c===!1&&(c=l.apply(s,a)),c}}e.tokenizer=s}if(i.walkTokens){const s=w.defaults.walkTokens;e.walkTokens=function(o){let l=[];return l.push(i.walkTokens.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}n&&(e.extensions=t),w.setOptions(e)})};w.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(w,n)),n.type){case"table":{for(const i of n.header)t=t.concat(w.walkTokens(i.tokens,e));for(const i of n.rows)for(const s of i)t=t.concat(w.walkTokens(s.tokens,e));break}case"list":{t=t.concat(w.walkTokens(n.items,e));break}default:w.defaults.extensions&&w.defaults.extensions.childTokens&&w.defaults.extensions.childTokens[n.type]?w.defaults.extensions.childTokens[n.type].forEach(function(i){t=t.concat(w.walkTokens(n[i],e))}):n.tokens&&(t=t.concat(w.walkTokens(n.tokens,e)))}return t};w.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=de({},w.defaults,e||{}),Kt(e);try{const t=pe.lexInline(r,e);return e.walkTokens&&w.walkTokens(t,e.walkTokens),he.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+K(t.message+"",!0)+"</pre>";throw t}};w.Parser=he;w.parser=he.parse;w.Renderer=rt;w.TextRenderer=en;w.Lexer=pe;w.lexer=pe.lex;w.Tokenizer=it;w.Slugger=tn;w.parse=w;w.options;w.setOptions;w.use;w.walkTokens;w.parseInline;he.parse;pe.lex;const zn="/assets/nexus_on_java_11.86fd1c91.jpg";function Hn(r){let e,t,n=w.parse(r[0])+"",i,s,o,l,a,c=w.parse(r[1])+"";return{c(){e=p("div"),t=new Ve(!1),i=b(),s=p("img"),l=b(),a=new Ve(!1),t.a=i,ve(s.src,o=zn)||x(s,"src",o),x(s,"alt","nexus on java 11"),x(s,"class","img"),a.a=null},m(u,v){h(u,e,v),t.m(n,e),C(e,i),C(e,s),C(e,l),a.m(c,e)},p:y,i:y,o:y,d(u){u&&d(e)}}}function Fn(r){return[`
  <h1>Home</h1>
  <hr>
  <h2 style="color: var(--color-brand)">NEXUSe2e is now running on Java 11</h2>
`,`
  ## NEXUSe2e 5.9 and Java 11
  
  All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK as production instances would now require an oracle JDK license to run. 
  `]}class Bn extends B{constructor(e){super(),F(this,e,Fn,Hn,z,{})}}function On(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function Wn(r){return[`
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
  `]}class qn extends B{constructor(e){super(),F(this,e,Wn,On,z,{})}}function Vn(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function Gn(r){return[`
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
  `]}class Qn extends B{constructor(e){super(),F(this,e,Gn,Vn,z,{})}}const Zn="/assets/solution.b1b6bfc4.jpg";function Jn(r){let e,t,n=w.parse(r[0])+"",i,s,o;return{c(){e=p("div"),t=new Ve(!1),i=b(),s=p("img"),t.a=i,ve(s.src,o=Zn)||x(s,"src",o),x(s,"alt","NEXUSe2e solution"),x(s,"class","img")},m(l,a){h(l,e,a),t.m(n,e),C(e,i),C(e,s)},p:y,i:y,o:y,d(l){l&&d(e)}}}function Yn(r){return[`
  # The Solution

  ---
  

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTPS, SMTP, SFTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `]}class Kn extends B{constructor(e){super(),F(this,e,Yn,Jn,z,{})}}function ei(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function ti(r){return[`
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
  - We help you to develop your own NEXUSe2e components.`]}class ni extends B{constructor(e){super(),F(this,e,ti,ei,z,{})}}function ii(r){let e,t,n;return{c(){e=p("h1"),e.textContent="Documentation",t=b(),n=p("hr")},m(i,s){h(i,e,s),h(i,t,s),h(i,n,s)},p:y,i:y,o:y,d(i){i&&d(e),i&&d(t),i&&d(n)}}}class ri extends B{constructor(e){super(),F(this,e,null,ii,z,{})}}function si(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function oi(r){return[`
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





  `]}class ai extends B{constructor(e){super(),F(this,e,oi,si,z,{})}}function li(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function ci(r){return[`
  # Installation

  <hr>
  
  `]}class ui extends B{constructor(e){super(),F(this,e,ci,li,z,{})}}function di(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function hi(r){return[`
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
 `]}class fi extends B{constructor(e){super(),F(this,e,hi,di,z,{})}}function pi(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function mi(r){return[`
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
  `]}class gi extends B{constructor(e){super(),F(this,e,mi,pi,z,{})}}function wi(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function vi(r){return[`
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

  `]}class yi extends B{constructor(e){super(),F(this,e,vi,wi,z,{})}}function bi(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function ki(r){return[`
  # Upgrade

  <hr>
  
  `]}class _i extends B{constructor(e){super(),F(this,e,ki,bi,z,{})}}const Si="/assets/alterURL1.ec8d0877.jpg",xi="/assets/alterURL2.1c2bdeda.jpg";function $i(r){let e,t=w.parse(r[0])+"",n,i,s,o,l,a=w.parse(r[1])+"",c,u,v,m,f,g=w.parse(r[2])+"";return{c(){e=p("div"),n=b(),i=p("img"),o=b(),l=p("div"),c=b(),u=p("img"),m=b(),f=p("div"),ve(i.src,s=Si)||x(i,"src",s),x(i,"alt","nexus on java 11"),x(i,"class","img"),ve(u.src,v=xi)||x(u,"src",v),x(u,"alt","nexus on java 11"),x(u,"class","img")},m(T,_){h(T,e,_),e.innerHTML=t,h(T,n,_),h(T,i,_),h(T,o,_),h(T,l,_),l.innerHTML=a,h(T,c,_),h(T,u,_),h(T,m,_),h(T,f,_),f.innerHTML=g},p:y,i:y,o:y,d(T){T&&d(e),T&&d(n),T&&d(i),T&&d(o),T&&d(l),T&&d(c),T&&d(u),T&&d(m),T&&d(f)}}}function Ti(r){return[`
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
  `]}class Ei extends B{constructor(e){super(),F(this,e,Ti,$i,z,{})}}function Ai(r){let e,t,n;return{c(){e=p("div"),t=p("img"),ve(t.src,n=r[0])||x(t,"src",n),x(t,"alt",r[1]),x(t,"class","img svelte-i49qvk"),Pe(t,"height",`${r[2]}px`),x(e,"class","img-container svelte-i49qvk"),Pe(e,"justify-content",r[3])},m(i,s){h(i,e,s),C(e,t)},p(i,[s]){s&1&&!ve(t.src,n=i[0])&&x(t,"src",n),s&2&&x(t,"alt",i[1]),s&4&&Pe(t,"height",`${i[2]}px`),s&8&&Pe(e,"justify-content",i[3])},i:y,o:y,d(i){i&&d(e)}}}function Ui(r,e,t){let n,{img:i}=e,{alt:s=""}=e,{height:o="300"}=e,{position:l="center"}=e;return r.$$set=a=>{"img"in a&&t(0,i=a.img),"alt"in a&&t(1,s=a.alt),"height"in a&&t(2,o=a.height),"position"in a&&t(4,l=a.position)},r.$$.update=()=>{r.$$.dirty&16&&t(3,n={left:"flex-start",center:"center",right:"flex-end"}[l])},[i,s,o,n,l]}class J extends B{constructor(e){super(),F(this,e,Ui,Ai,z,{img:0,alt:1,height:2,position:4})}}const Ci="/assets/backend1.33169ffb.png";function Ni(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a;return i=new J({props:{img:Ci,alt:"service",height:"200px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div")},m(c,u){h(c,e,u),e.innerHTML=t,h(c,n,u),D(i,c,u),h(c,s,u),h(c,o,u),o.innerHTML=l,a=!0},p:y,i(c){a||(N(i.$$.fragment,c),a=!0)},o(c){X(i.$$.fragment,c),a=!1},d(c){c&&d(e),c&&d(n),R(i,c),c&&d(s),c&&d(o)}}}function Ii(r){return[`
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

  
  `]}class Li extends B{constructor(e){super(),F(this,e,Ii,Ni,z,{})}}function Xi(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function Mi(r){return[`
  # Configuration

  <hr>
  
  `]}class Pi extends B{constructor(e){super(),F(this,e,Mi,Xi,z,{})}}function Di(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function Ri(r){return[`
  # Logging with Log4j 2

  <hr>
  


  Logging in NEXUSe2e is implemented using Log4j 2 (starting with NEXUSe2e version 5.11.1).

All logging is configured via the log4j2.xml file located in the WEB-INFclasses folder, including database and email logging that was configured through the Notifiers section in the ui of previous NEXUSe2e verions.

Other than the database logging appender, all logging uses out-of-the-box log4j2 appenders and any Log4j 2 appender can be added. For more configuration options visit the [Apache Log4j 2 website](https://logging.apache.org/log4j/2.x/manual/configuration.html#Appenders). 

### Transaction Reporting and Engine Log

A custom database logging appender is responsible for logging information to the the NEXUSe2e database for the Transaction Reporting and Engine Log sections of the ui. Locate the <DatabaseLogger name="DatabaseLogger_default"> section in log4j2.xml to set the log level (Default: 'info'). Standard Log4j 2 log levels can be applied. With log4j 2 the log level ids were changed from log4j 1. Therefore log levels from logging entries from previous NEXUSe2e version (5.9.x and earlier) cannot be properly identified for display or filtering. To fix older log entries, the following sql commands can be executed against the NEXUSe2e database:

    UPDATE [nx_log] SET [severity] = 100 WHERE [severity] = 50000
    UPDATE [nx_log] SET [severity] = 200 WHERE [severity] = 40000
    UPDATE [nx_log] SET [severity] = 300 WHERE [severity] = 30000
    UPDATE [nx_log] SET [severity] = 400 WHERE [severity] = 20000
    UPDATE [nx_log] SET [severity] = 500 WHERE [severity] = 10000
    UPDATE [nx_log] SET [severity] = 600 WHERE [severity] = 5000

### File Logging

By default the RollingFileAppender is configured and enabled to create log files with mostly info level log information. A maximum of 10 log files are kept for up to 30 days.

### E-Mail Notifications

To receive E-Mail Notifications complete SMTP appender configuration and enable it by commenting in the <AppenderRef ref="Mail"/> line in the Root logger section.


  `]}class ji extends B{constructor(e){super(),F(this,e,Ri,Di,z,{})}}const zi="/assets/mssqlAuth1.24d2bab4.png",Hi="/assets/mssqlAuth2.db7b578e.png",Fi="/assets/mssqlAuth3.5302e9f6.png";function Bi(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a,c,u,v,m=w.parse(r[2])+"",f,g,T;return i=new J({props:{img:zi,alt:"directory structure"}}),c=new J({props:{img:Hi,alt:"Service JVM Parameters"}}),g=new J({props:{img:Fi,alt:"Service Login"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div"),a=b(),j(c.$$.fragment),u=b(),v=p("div"),f=b(),j(g.$$.fragment)},m(_,P){h(_,e,P),e.innerHTML=t,h(_,n,P),D(i,_,P),h(_,s,P),h(_,o,P),o.innerHTML=l,h(_,a,P),D(c,_,P),h(_,u,P),h(_,v,P),v.innerHTML=m,h(_,f,P),D(g,_,P),T=!0},p:y,i(_){T||(N(i.$$.fragment,_),N(c.$$.fragment,_),N(g.$$.fragment,_),T=!0)},o(_){X(i.$$.fragment,_),X(c.$$.fragment,_),X(g.$$.fragment,_),T=!1},d(_){_&&d(e),_&&d(n),R(i,_),_&&d(s),_&&d(o),_&&d(a),R(c,_),_&&d(u),_&&d(v),_&&d(f),R(g,_)}}}function Oi(r){return[`
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
  `]}class Wi extends B{constructor(e){super(),F(this,e,Oi,Bi,z,{})}}const qi="/assets/service1.277e19e8.png",Vi="/assets/service2.5c9d920d.png",Gi="/assets/service3.0b8de283.png",Qi="/assets/service4.37962a2a.png",Zi="/assets/service5.3ab699ea.png";function Ji(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a,c,u,v,m=w.parse(r[2])+"",f,g,T,_,P=w.parse(r[3])+"",q,O,I,U,L=w.parse(r[4])+"",W,k,H,ee,ce=w.parse(r[5])+"",ie;return i=new J({props:{img:qi,alt:"service",height:"200px"}}),c=new J({props:{img:Vi,alt:"service",height:"500px"}}),g=new J({props:{img:Gi,alt:"service",height:"500px"}}),O=new J({props:{img:Qi,alt:"service",height:"500px"}}),k=new J({props:{img:Zi,alt:"service",height:"500px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div"),a=b(),j(c.$$.fragment),u=b(),v=p("div"),f=b(),j(g.$$.fragment),T=b(),_=p("div"),q=b(),j(O.$$.fragment),I=b(),U=p("div"),W=b(),j(k.$$.fragment),H=b(),ee=p("div")},m(E,Q){h(E,e,Q),e.innerHTML=t,h(E,n,Q),D(i,E,Q),h(E,s,Q),h(E,o,Q),o.innerHTML=l,h(E,a,Q),D(c,E,Q),h(E,u,Q),h(E,v,Q),v.innerHTML=m,h(E,f,Q),D(g,E,Q),h(E,T,Q),h(E,_,Q),_.innerHTML=P,h(E,q,Q),D(O,E,Q),h(E,I,Q),h(E,U,Q),U.innerHTML=L,h(E,W,Q),D(k,E,Q),h(E,H,Q),h(E,ee,Q),ee.innerHTML=ce,ie=!0},p:y,i(E){ie||(N(i.$$.fragment,E),N(c.$$.fragment,E),N(g.$$.fragment,E),N(O.$$.fragment,E),N(k.$$.fragment,E),ie=!0)},o(E){X(i.$$.fragment,E),X(c.$$.fragment,E),X(g.$$.fragment,E),X(O.$$.fragment,E),X(k.$$.fragment,E),ie=!1},d(E){E&&d(e),E&&d(n),R(i,E),E&&d(s),E&&d(o),E&&d(a),R(c,E),E&&d(u),E&&d(v),E&&d(f),R(g,E),E&&d(T),E&&d(_),E&&d(q),R(O,E),E&&d(I),E&&d(U),E&&d(W),R(k,E),E&&d(H),E&&d(ee)}}}function Yi(r){return[`
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

  `]}class Ki extends B{constructor(e){super(),F(this,e,Yi,Ji,z,{})}}const er="/assets/xsd1.bfc416fb.png",tr="/assets/xsd2.84300edc.png",nr="/assets/xsd3.dda4fff4.png",ir="/assets/xsd4.4bea371d.png";function rr(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a,c,u,v,m=w.parse(r[2])+"",f,g,T,_,P=w.parse(r[3])+"",q,O,I,U,L=w.parse(r[4])+"",W;return i=new J({props:{img:er,alt:"service",height:"200px"}}),c=new J({props:{img:tr,alt:"service",height:"500px"}}),g=new J({props:{img:nr,alt:"service",height:"500px"}}),O=new J({props:{img:ir,alt:"service",height:"500px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div"),a=b(),j(c.$$.fragment),u=b(),v=p("div"),f=b(),j(g.$$.fragment),T=b(),_=p("div"),q=b(),j(O.$$.fragment),I=b(),U=p("div")},m(k,H){h(k,e,H),e.innerHTML=t,h(k,n,H),D(i,k,H),h(k,s,H),h(k,o,H),o.innerHTML=l,h(k,a,H),D(c,k,H),h(k,u,H),h(k,v,H),v.innerHTML=m,h(k,f,H),D(g,k,H),h(k,T,H),h(k,_,H),_.innerHTML=P,h(k,q,H),D(O,k,H),h(k,I,H),h(k,U,H),U.innerHTML=L,W=!0},p:y,i(k){W||(N(i.$$.fragment,k),N(c.$$.fragment,k),N(g.$$.fragment,k),N(O.$$.fragment,k),W=!0)},o(k){X(i.$$.fragment,k),X(c.$$.fragment,k),X(g.$$.fragment,k),X(O.$$.fragment,k),W=!1},d(k){k&&d(e),k&&d(n),R(i,k),k&&d(s),k&&d(o),k&&d(a),R(c,k),k&&d(u),k&&d(v),k&&d(f),R(g,k),k&&d(T),k&&d(_),k&&d(q),R(O,k),k&&d(I),k&&d(U)}}}function sr(r){return[`
  # XSD - Schema Validation 

  <hr>
  


  XSD validation is possible with NEXUSe2e for outbound and inbound messages. However the components are not enabled by default, you have to create a new pipelet depending on what end you want to validate XML files. For incoming messages it would be suitable to use the frontend pipelet, the backend pipelet for outgoing, thus failed conversation/messages due to invalid XML validations will not occur in your database. If this is an intentional behavior, you need to add the pipelet in the frontend pipeline for outgoing messages vice versa in the backend pipeline for incoming messages. Create the component as descripted and add the pipelet into your pipeline and, also add the relevant XSD file, that is all.

Please make also sure, that the account you are using for the Tomcat Service is allowed to access the folder of your XSD file.
Backend Validation

Create Component

Open your NEXUSe2e Admin-GUI and switch to Components.

  1. Add a new component.
  2. Pick a name that exposes the function of this component.
  3. Add following class name: org.nexuse2e.backend.pipelets.XmlSchemaValidationPipelet
  4. Click on Save.
  5. Apply the changes to your Database.


  
  `,`
  

Edit your Backend Pipeline

To integrate this pipelet into your workflow, you need to add it to a backend pipeline.

Switch to Backend Pipelines in your Admin-GUI.

Open the pipeline that you want to validate outgoing XML files.

  1. Pick the backend pipelet you created from the dropdown menu.
  2. Click on the plus icon.
  3. Set the path to the XSD file and save.
  4. Click on Save.
  5. Apply the changes to your Database.


  `,`
  

This is all that needs to be done, your outgoing XML files will now be validated against your XSD file.
Frontend Validation

Create Component

Open your NEXUSe2e Admin-GUI and switch to Components.

  1. Add a new component.
  2. Pick a name that exposes the function of this component.
  3. Add following class name: org.nexuse2e.backend.pipelets.FrontendXmlSchemaValidationPipelet
  4. Click on Save.
  5. Apply the changes to your Database.


  `,`
  

Edit your Frontend Pipeline

To integrate this pipelet into your workflow, you need to add it to a frontend pipeline.

Switch to Frontend Pipelines in your Admin-GUI.

Open the pipeline that you want to validate outgoing XML files.

  1. Pick the frontend pipelet you created from the dropdown menu. *
  2. Click on the plus icon.
  3. Set the path to the XSD file and save.
  4. Click on Save.
  5. Apply the changes to your Database.

* It should be on the lowest position, the message should be unpackend and deserialized first.

  `,`
  

This is all that needs to be done, your incoming XML files will now be validated against your XSD file.
Log Messages

Messages that do not surpass the validation process will not occur in your NEXUSe2e Transaction Reporting as conversation but will generate a log entry which will look like this:

    [ERROR] 2015-08-14 17:23:26,487 org.nexuse2e.service.http.HttpReceiverService.handleRequest(HttpReceiverService.java:150) - 
    unknown/unknown (unknown->unknown): processing failed (error-ref:9e077aac-a45a-4abd-8079-2d5b5d90a45e)

    The stacktrace, in this case it is shortened, you will find which part is not valid:

        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
        at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
        at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)
        at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)
        at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:505)
        at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:170)
        at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:103)
        at org.apache.catalina.valves.AccessLogValve.invoke(AccessLogValve.java:957)
        at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)
        at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:423)
        at org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1079)
        at org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:620)
        at org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.doRun(AprEndpoint.java:2516)
        at org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.run(AprEndpoint.java:2505)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
        at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
        at java.lang.Thread.run(Thread.java:745)
    Caused by: org.xml.sax.SAXParseException; cvc-elt.1: Cannot find the declaration of element 'Document'.
        at org.apache.xerces.util.ErrorHandlerWrapper.createSAXParseException(Unknown Source)
        at org.apache.xerces.util.ErrorHandlerWrapper.error(Unknown Source)
        at org.apache.xerces.impl.XMLErrorReporter.reportError(Unknown Source)
        at org.apache.xerces.impl.XMLErrorReporter.reportError(Unknown Source)
        at org.apache.xerces.impl.xs.XMLSchemaValidator.handleStartElement(Unknown Source)
        at org.apache.xerces.impl.xs.XMLSchemaValidator.startElement(Unknown Source)
        at org.apache.xerces.jaxp.validation.DOMValidatorHelper.beginNode(Unknown Source)
        at org.apache.xerces.jaxp.validation.DOMValidatorHelper.validate(Unknown Source)
        at org.apache.xerces.jaxp.validation.DOMValidatorHelper.validate(Unknown Source)
        at org.apache.xerces.jaxp.validation.ValidatorImpl.validate(Unknown Source)
        at javax.xml.validation.Validator.validate(Validator.java:124)
        at org.nexuse2e.backend.pipelets.XmlSchemaValidationPipelet.processMessage(XmlSchemaValidationPipelet.java:143)
        ... 33 more

     

     

Lookout for the part:

Caused by: org.xml.sax.SAXParseException; cvc-elt.1: Cannot find the declaration of element 'Document'.

It says that the element "Document" is not valid according to the XSD.

  `]}class or extends B{constructor(e){super(),F(this,e,sr,rr,z,{})}}function ar(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function lr(r){return[`
  # Client Authentication

  <hr>
  
  The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even if NEXUSe2e is a server application compareable to a website it acts as a client as well which is the major different to standard website certificates. When receiving a business message from your partner, the webapplication server handles this incomming request.

  The SSL Handshake is done before any data is forward into the NEXUSe2e web app. Therefore its important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

  The server provides the server certificate and the client validates this against the configured partner certifcate, the ca certificates and the expiration time. without clientauth the handshake process is done and the user data is transfered. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore it is required to apply the changes on ca certificates in your web app server configuration as well. Even if the clients CA cert is installed in NEXUSe2e, the ssl handshake fails if the required CA certificate is not found in the web app server key store.

  The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in there web app server configurations.
  `]}class cr extends B{constructor(e){super(),F(this,e,lr,ar,z,{})}}function ur(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function dr(r){return[`
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
  `]}class hr extends B{constructor(e){super(),F(this,e,dr,ur,z,{})}}function fr(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function pr(r){return[`
  # Security

  <hr>
  
  `]}class mr extends B{constructor(e){super(),F(this,e,pr,fr,z,{})}}const gr="/assets/backendws1.9331eafd.jpg",wr="/assets/backendws2.7aa9232d.jpg";function vr(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a,c,u,v,m=w.parse(r[2])+"",f;return i=new J({props:{img:gr,alt:"plain",height:"200px"}}),c=new J({props:{img:wr,alt:"plain",height:"200px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div"),a=b(),j(c.$$.fragment),u=b(),v=p("div")},m(g,T){h(g,e,T),e.innerHTML=t,h(g,n,T),D(i,g,T),h(g,s,T),h(g,o,T),o.innerHTML=l,h(g,a,T),D(c,g,T),h(g,u,T),h(g,v,T),v.innerHTML=m,f=!0},p:y,i(g){f||(N(i.$$.fragment,g),N(c.$$.fragment,g),f=!0)},o(g){X(i.$$.fragment,g),X(c.$$.fragment,g),f=!1},d(g){g&&d(e),g&&d(n),R(i,g),g&&d(s),g&&d(o),g&&d(a),R(c,g),g&&d(u),g&&d(v)}}}function yr(r){return[`
  # Backend Web Service Integration

  <hr>
  

This tutorial will show you how to enable WSDL services for NEXUSe2e.

Note: This is the old documentation for the endpoint which doesn't support WS-security. For the new documentation, see Configure a secure web service endpoint.

 

### Check if WSDL is Enabled

You can do a quick test to find out if this feature is allready active at your instance.

Substitute parts in the following URL which differ from your configuration and visit the link with a browser of your choice:

    http://localhost:8080/NEXUSe2e/wshandler/NEXUSe2eInterface?WSDL

You'll receive "No service was found." if this feature is disabled.
### Activate WSDL Services

To enable this feature you need to edit your cxf-config.xml which is located in your NEXUSe2e webapp folder:

    your-tomcatwebappsYourNEXUSe2eWEB-INF
Open the cxf-config.xml with an editor and look for following block:

     <jaxws:endpoint publish="false"
          id="nexusE2EInterface"
          implementor="#nexusE2EInterfaceBean"
          address="/NEXUSe2eInterface" />

Substitute "false" with "true" at <jaxws:endpoint publish="false", you need to restart your NEXUSe2e instance after this parameter is changed.
### Ready to Send Messages

The above configuration change enables you to send message threw NEXUSe2e with your Web Service.

To see the operations available, please switch to our Downloads section and grab the NEXUSe2eInterface.wsdl file.

The most common operation used is sendNewStringMessage, which creates a new conversation and message from the given parameters and message payload.

Alternatively, if you do not want to pass the payload data directly, you can use the triggerSendingNewMessage operation. It takes a primaryKey object which can be used by a NEXUSe2e pipelet to load the payload. For example, if you pass a file path as primaryKey, you can use a FileSystemLoadPipelet to create the message payload from that file.
### Receive Messages with WSDL Services

If you want NEXUSe2e to pass messages trough to your backend you need to create a new WSDL component and substitute the standard FileSave pipelet in the FileSaveInbound pipeline with it.

 

Create the WSDL Component

Log into your NEXUSe2e Admin GUI and switch to:

    NEXUSe2e > Server Configuration > Components

Click on "Add Component" at the bottom right of the screen.

In the next screen do following steps:

  1. Add following class into the class name field:
    org.nexuse2e.backend.pipelets.BackendDeliveryWSClientPipelet
  2. Add a name for this pipelet.
  3. (optional) Add a description.
  4. Click on "Save"
  5. Apply these changes.


  `,`
  

Substitute FileSave Pipelet

In your NEXUSe2e Admin GUI switch to:

    NEXUSe2e > Server Configuration > Backend Pipelines > FileSaveInboundPipeline

And do following steps:

 

  1. Delete the "FileSave" pipelet
  2. Add your created BackendIntegrion component
  3. Configure this component
  4. Click on "Save"
  5. Apply these settings.


  `,`
  
### Last Step

At last you need to implement the BackendDeliveryInterface.wsdl in your backend.

You can find this file in our Downloads section under "Backend Integration".
### (hint) SSL Messaging

If you want to use a secure SSL connection, you need to add the certificate of your backend to the JAVA cacerts keystore of your tomcat instance NEXUSe2e is deployed on.

  `]}class br extends B{constructor(e){super(),F(this,e,yr,vr,z,{})}}const kr="/assets/first1.1d65bbff.jpg",_r="/assets/first2.536195b7.jpg",Sr="/assets/first3.50d9eef4.jpg",xr="/assets/first4.47dfe714.jpg",$r="/assets/first5.f6b97dcd.jpg",Tr="/assets/first6.afcf619c.jpg";function Er(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a,c,u,v,m=w.parse(r[2])+"",f,g,T,_,P=w.parse(r[3])+"",q,O,I,U,L=w.parse(r[4])+"",W,k,H,ee,ce=w.parse(r[5])+"",ie,E,Q,te,ge=w.parse(r[6])+"",ue;return i=new J({props:{img:kr,alt:"service",height:"200px"}}),c=new J({props:{img:_r,alt:"service",height:"500px"}}),g=new J({props:{img:Sr,alt:"service",height:"500px"}}),O=new J({props:{img:xr,alt:"service",height:"500px"}}),k=new J({props:{img:$r,alt:"service",height:"500px"}}),E=new J({props:{img:Tr,alt:"service",height:"500px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div"),a=b(),j(c.$$.fragment),u=b(),v=p("div"),f=b(),j(g.$$.fragment),T=b(),_=p("div"),q=b(),j(O.$$.fragment),I=b(),U=p("div"),W=b(),j(k.$$.fragment),H=b(),ee=p("div"),ie=b(),j(E.$$.fragment),Q=b(),te=p("div")},m(S,V){h(S,e,V),e.innerHTML=t,h(S,n,V),D(i,S,V),h(S,s,V),h(S,o,V),o.innerHTML=l,h(S,a,V),D(c,S,V),h(S,u,V),h(S,v,V),v.innerHTML=m,h(S,f,V),D(g,S,V),h(S,T,V),h(S,_,V),_.innerHTML=P,h(S,q,V),D(O,S,V),h(S,I,V),h(S,U,V),U.innerHTML=L,h(S,W,V),D(k,S,V),h(S,H,V),h(S,ee,V),ee.innerHTML=ce,h(S,ie,V),D(E,S,V),h(S,Q,V),h(S,te,V),te.innerHTML=ge,ue=!0},p:y,i(S){ue||(N(i.$$.fragment,S),N(c.$$.fragment,S),N(g.$$.fragment,S),N(O.$$.fragment,S),N(k.$$.fragment,S),N(E.$$.fragment,S),ue=!0)},o(S){X(i.$$.fragment,S),X(c.$$.fragment,S),X(g.$$.fragment,S),X(O.$$.fragment,S),X(k.$$.fragment,S),X(E.$$.fragment,S),ue=!1},d(S){S&&d(e),S&&d(n),R(i,S),S&&d(s),S&&d(o),S&&d(a),R(c,S),S&&d(u),S&&d(v),S&&d(f),R(g,S),S&&d(T),S&&d(_),S&&d(q),R(O,S),S&&d(I),S&&d(U),S&&d(W),R(k,S),S&&d(H),S&&d(ee),S&&d(ie),R(E,S),S&&d(Q),S&&d(te)}}}function Ar(r){return[`

  # First Steps in Messaging

  <hr>
  

In this section we show you how easy it is to set up reliable messaging over the ebXML 2.0 standard protocol.

The fundamental prerequisite for exchanging messages is a peer that receives your messages or sends messages to you. If you do not have a suitable business partner at hand yet, you can install another instance of NEXUSe2e server on a different machine. Another idea would be to set up an additional servlet container on the same machine, that listens on a different port, or deploy the NEXUSe2e webapp twice to the same servlet container, but with different names.

The default configuration of NEXUSe2e server contains several preset. You can just use the presets or modify them as you like in the following configuration steps.

Log In as Administrator

Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine--this is the case if you installed with the Windows installer, the url is: http://localhost:8080/NEXUSe2e. If you have not chopped the version substring, e.g. _4.2.4, from the war file's name before deployment, you probably need to append it to the URL.

The default administration account is admin with password admin.

Set the Server Identity

The Server Identity is a unique id called Partner Id identifying your server to your communication partners. The Partner Id can be anything and its structure or format is typically agreed upon between communication partners. One possible example is the D-U-N-S number of your organization.

  1. Navigate through the tree and find NEXUSe2e > Server Configuration > Server Identities.
     
  2. You can either add a new identity with the Add Server Identity button, or select an existing identity for editing.
     
  3. On the Collaboration Partner tab enter your identity information. Enter at least:

  **<em>Partner Id</em>**  
    The logical id of your organisation/server, e.g. your D-U-N-S number. This is a logical unique identifier that is not interpreted by the system.

  **<em>Partner Id Type</em>**  
    The type of your id, e.g. "DUNS" or "Custom", if not registered anywhere. This is a logical classification of the Partner Id that is not interpreted by the system.

  **<em>Name</em>**  
    Human readable name of your organisation/server.
     
  4. Click Save


  `,`

5. Select the Connections tab and click Add Connection
 
6. Give it at least a:

**<em>Name</em>**  
Display name of this connection.

**<em>Connection URL</em>**  
The url of your server's message handler. For example the NEXUSe2e standard handlerhandler/ebxml20.

**<em>TRP</em>**  
Transport/Routing/Packaging information. Select ebxml-2.0-http for this example.
 
7. Click Save


  `,`

### Add a Collaboration Partner

Now you should specify with whom you want to exchange messages. The settings are similar to your Server Identity above.

  1. Navigate through the tree and find NEXUSe2e > Collaboration Partners.
     
  2. Click Add Collaboration Partner or edit an existing partner.
     
  3. On the Collaboration Partner tab enter your partner's identity information. Enter at least:

  **<em>Partner Id</em>**  
    The logical id of your partner's organisation/server, e.g. the D-U-N-S number.

  **<em>Partner Id Type</em>**  
    The type of your partner's id, e.g. "DUNS" or "Custom", if not registered anywhere.

  **<em>Name</em>**  
    Human readable name of your partner's organisation/server.
     
  4. Click Save


  `,`

5. Select the Connections tab and click Add Connection, or edit an already existing connection.
 
6. Give it at least a:

**<em>Name</em>**  
Display name of this connection.

**<em>Connection URL</em>**  
The url of your partner's server message handler. For example the NEXUSe2e standard handler handler/ebxml20. This should be the url of your second NEXUSe2e installation.

Note that you cannot use a single instance of NEXUSe2e as a loopback to send messages to yourself.

**<em>TRP</em>**  
Transport/Routing/Packaging information. Select ebxml-2.0-http for this example.
 
7. Click Save


  `,`

### Create a Choreography

Choreographies (based on the ebXML terminology) are business processes. Each choreography is identified by a unique logical id that has to be agreed upon between communications partners.

The default configuration contains a preconfigured choreography called GenericFile. GenericFilemodels a simple business process for sending and receiving files without any additional processing.

In order to exchange files based on GenericFile, you must add a business partner as Participant.

  1. Navigate through the menu tree and find NEXUSe2e > Choreographies > GenericFile > Participants
  2. If your partner--that you've created in the previous step of this guide--is not yet listed as participant click Add Participant. If you find your partner already listed as participant, because you edited the preset partner, click on the partner link and verify the settings.
     
  3. In the Add Participant or Update Participant form select:

  **<em>Partner ID</em>**
    The partner you want to exchange messages with.

  **<em>Local Partner ID</em>**
    The local server identity you want to act as.

  **<em>Connection</em>**
    The url of your partner's message handler.
     
  4. Click Save or Update.


  `,`

### Apply Configuration Changes and Send a Message

Configuration changes in NEXUSe2e server are transactional. The are only activated after you clicked the Apply button on top of the gui. This will reload the NEXUSe2e engine with the new configuration. Of course you can alternatively revert all changes by clicking Revert. The Apply andRevert buttons get enabled as soon as there are pending configuration changes.

Usually you will want to send messages automatically. But in order to test connectivity you can manually send a message to your partner:

  1. Apply your configuration changes by click on Apply.
     
  2. Navigate through the tree and find NEXUSe2e > Tools > Message Submission
     
  3. Select at least:

  **<em>Choreography ID</em>**
    The id of the business process for this message--in this case GenericFile.

  **<em>Action</em>**
    The action to take within the selected choreography--for GenericFile there is a preset action called SendFile.

  **<em>Receiver</em>**
    A participant of the selected choreography that should receive your message--the collaboration partner you configured above.

  **<em>File</em>**
    Select any file to submit.
     
  4. Click Execute. Sooner or later you should get a brief notification that your message was sent or that something went wrong.


  `,`

### Check the Status of Your Messages

NEXUSe2e contains a transaction log that lists all messages that were sent and received. You can filter by Partner, Choreography, Action, Status, Message ID, Conversation ID and Date.

In NEXUSe2e all messages are part of a Conversation (based on ebXML terminology). A conversation is basically an instance of a Choreography. Conversations have their own status. In this example we made use of a one-step choreography. Advanced business processes implement multi-step choreographies. Related messages of a multi-step choreography are grouped in the same conversation.

  1. Navigate through the tree and find NEXUSe2e > Reporting > Transaction Reporting
     
  2. You should see the conversation of the message you just sent. If the message was sent correctly, and an acknowledgement was received, the status should be COMPLETED.
     
  3. To see all messages related to this conversation, click on the conversation entry.
     
  4. If everything went right, you should find there two message entries: the message you sent to your partner (message type Normal) and the acknowledgement (message typeAcknowledgement) you got back from your partner.
     
  5. To examine the contents of the messages, click on them and find the download link.

That is it. If you experience any problems, consult other help and troubleshooting resources available on this website. If you are still stuck, drop us a line to nexuse2e dot support atdirekt-gruppe dot de.

  `]}class Ur extends B{constructor(e){super(),F(this,e,Ar,Er,z,{})}}const Cr="/assets/plain1.7a2d4dd8.jpg",Nr="/assets/plain2.9ca369e5.jpg",Ir="/assets/plain3.4ed16f8e.jpg",Lr="/assets/plain4.60f9cc89.jpg",Xr="/assets/plain5.04de3adb.jpg",Mr="/assets/plain6.3ecc5a85.jpg",Pr="/assets/plain7.9c6c63c5.jpg";function Dr(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a,c,u,v,m=w.parse(r[2])+"",f,g,T,_,P=w.parse(r[3])+"",q,O,I,U,L=w.parse(r[4])+"",W,k,H,ee,ce=w.parse(r[5])+"",ie,E,Q,te,ge=w.parse(r[6])+"",ue,S,V;return i=new J({props:{img:Cr,alt:"plain",height:"200px"}}),c=new J({props:{img:Nr,alt:"plain",height:"200px"}}),g=new J({props:{img:Ir,alt:"plain",height:"200px"}}),O=new J({props:{img:Lr,alt:"plain",height:"200px"}}),k=new J({props:{img:Xr,alt:"plain",height:"200px"}}),E=new J({props:{img:Mr,alt:"plain",height:"200px"}}),S=new J({props:{img:Pr,alt:"plain",height:"200px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div"),a=b(),j(c.$$.fragment),u=b(),v=p("div"),f=b(),j(g.$$.fragment),T=b(),_=p("div"),q=b(),j(O.$$.fragment),I=b(),U=p("div"),W=b(),j(k.$$.fragment),H=b(),ee=p("div"),ie=b(),j(E.$$.fragment),Q=b(),te=p("div"),ue=b(),j(S.$$.fragment)},m($,Z){h($,e,Z),e.innerHTML=t,h($,n,Z),D(i,$,Z),h($,s,Z),h($,o,Z),o.innerHTML=l,h($,a,Z),D(c,$,Z),h($,u,Z),h($,v,Z),v.innerHTML=m,h($,f,Z),D(g,$,Z),h($,T,Z),h($,_,Z),_.innerHTML=P,h($,q,Z),D(O,$,Z),h($,I,Z),h($,U,Z),U.innerHTML=L,h($,W,Z),D(k,$,Z),h($,H,Z),h($,ee,Z),ee.innerHTML=ce,h($,ie,Z),D(E,$,Z),h($,Q,Z),h($,te,Z),te.innerHTML=ge,h($,ue,Z),D(S,$,Z),V=!0},p:y,i($){V||(N(i.$$.fragment,$),N(c.$$.fragment,$),N(g.$$.fragment,$),N(O.$$.fragment,$),N(k.$$.fragment,$),N(E.$$.fragment,$),N(S.$$.fragment,$),V=!0)},o($){X(i.$$.fragment,$),X(c.$$.fragment,$),X(g.$$.fragment,$),X(O.$$.fragment,$),X(k.$$.fragment,$),X(E.$$.fragment,$),X(S.$$.fragment,$),V=!1},d($){$&&d(e),$&&d(n),R(i,$),$&&d(s),$&&d(o),$&&d(a),R(c,$),$&&d(u),$&&d(v),$&&d(f),R(g,$),$&&d(T),$&&d(_),$&&d(q),R(O,$),$&&d(I),$&&d(U),$&&d(W),R(k,$),$&&d(H),$&&d(ee),$&&d(ie),R(E,$),$&&d(Q),$&&d(te),$&&d(ue),R(S,$)}}}function Rr(r){return[`
  # HTTP Plain Messaging

  <hr>
  
### Create In- and Outboundpipeline

Login to your NEXUSe2e ADMIN GUI and switch to:

    NEXUSe2e > Server Configuration > Frontend Pipelines

#### Create Inboundpipeline

Click "Add Pipeline" and

  1. Give your Pipeline a distinct Name
  2. Define the direction as Inbound
  3. Select httpplain-1.0-http as TRP
  4. Save your Pipeline for later editing

  `,`
  

#### Configure Inboundpipeline

Jump back into your created pipeline and

  1. Add the TransportReceiver, httpPlainMessageUnpacker and httpPlainHeaderDeserializer in this order
  2. Click "Configure Pipelet" for the TransportReceiver and select HttpPlainReceiverService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.

  `,`
#### Create Outboundpipeline

Click "Add Pipeline" and

  1. Give your Pipeline a distinct Name
  2. Define the direction as Outbound
  3. Select httpplain-1.0-http as TRP
  4. Save your Pipeline for later editing

  `,`
  

#### Configure Outboundpipeline

Jump back into your created pipeline and

  1. Add the httpPLainMessagePacker and TransportSender in this order
  2. Click "Configure Pipelet" for the TransportSender and select HttpPlainSenderService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.

  `,`
  
### Configure Partner & Choreography

To ensure NEXUSe2e will accept incoming HTTP plain messages you need a configured partner. You can use an excisting partner or create a new. This Partner needs to be in the choreography of the action you want to use.

#### Configure Partner

If you want to use an excisting partner you can skip this step.

Switch to following menu point in the NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners

And click on "Add Collaboration Partner".

In the next screen fill least a Partner ID and confirm with "Save".

 

#### Configure Partner Connection for Receive Only

If you only want to receive HTTP plain messages, without answering with an ackkowledgement or sending a messages by your own, you don't need a correctly configured connection.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

Click on new "Add Connection" and follow these instructions:

  1. Add a connection name and add localhost to connection URL.


  `,`
  

#### Configure Partner Connection for 2-Way Messaging

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

If you want to send and receive messages with NEXUSe2e via HTTP Plain do as followed:

  1. Add a distinct connection name and a valid connection URL.
  2. Choose the TRP you are planning to use.
  3. Disable Reliable, which will not work correctly with HTTP Plain messaging.
  4. Save your connection

  `,`
  

#### Configure Choreography without Acknowledgement

This choreography is used for sending and receiving messages without follow up actions, like ackknowledgements.

You can use the default choreography "Generic File" which is predefined in every NEXUSe2e installation. Only add your partner to the choreography participants.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Choreographies > httpPlain > Participants > Add Participant

And do as instructed:

  1. Choose your desired Partner ID.
  2. Choose the connection you configured.
  3. Click on "Create"


  `]}class jr extends B{constructor(e){super(),F(this,e,Rr,Dr,z,{})}}function zr(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function Hr(r){return[`
  # Messaging

  <hr>
  
  `]}class Fr extends B{constructor(e){super(),F(this,e,Hr,zr,z,{})}}const Br="/assets/purge1.3322dcad.jpg";function Or(r){let e,t=w.parse(r[0])+"",n,i,s;return i=new J({props:{img:Br,alt:"plain",height:"200px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment)},m(o,l){h(o,e,l),e.innerHTML=t,h(o,n,l),D(i,o,l),s=!0},p:y,i(o){s||(N(i.$$.fragment,o),s=!0)},o(o){X(i.$$.fragment,o),s=!1},d(o){o&&d(e),o&&d(n),R(i,o)}}}function Wr(r){return[`
  # Conversation / Message Purging

  <hr>
  

  1. Set desired filter options.
  2. Review conversations or messages shown. Please be aware that all elements shown in the filtered view will be purged.
  3. Click on "Purge All" to delete the entries permanently.


  `]}class qr extends B{constructor(e){super(),F(this,e,Wr,Or,z,{})}}const Vr="/assets/test1.22603d62.png";function Gr(r){let e,t=w.parse(r[0])+"",n,i,s,o,l=w.parse(r[1])+"",a;return i=new J({props:{img:Vr,alt:"service",height:"200px"}}),{c(){e=p("div"),n=b(),j(i.$$.fragment),s=b(),o=p("div")},m(c,u){h(c,e,u),e.innerHTML=t,h(c,n,u),D(i,c,u),h(c,s,u),h(c,o,u),o.innerHTML=l,a=!0},p:y,i(c){a||(N(i.$$.fragment,c),a=!0)},o(c){X(i.$$.fragment,c),a=!1},d(c){c&&d(e),c&&d(n),R(i,c),c&&d(s),c&&d(o)}}}function Qr(r){return[`
  # Testing Connectivity

  <hr>
  

Based on the requirements for secure inbound and outbound connections its sometimes not that easy to pinpoint the issues directly. From top level point of view there are six components involved in the communcation process.

- The senders backend system (maybe something like SAP)
- The sending communication server (NEXUSe2e)
- the outgoing firewall
- the incoming firewall on the receiver side
- the receiving communication server (NEXUSe2e to keep documentation simple)
- the receiving backend system

Before testing any conectivity with your partners you should ensure your NEXUSe2e server is able to exchange data with your backend. There are a lot of possible ways to connect a backend to NEXUSe2e, we will select the most simple one, the file system. The network administrator should make sure the directories you have configured are accessable by the user the web application server is started with.

Now its time to ensure the network connection is working as expected. Important here, this us only useful for incomming connections to NEXUSe2e. Because of the http tansport layer you can use a standard web browser to test the connection to your partners NEXUSe2e installation. Start a web browser on the same server nexus is installed on and try the following URL: 

    http://<partners_hostname>:<port>/NEXUSe2e/handler/ebxml20

Your browser should now bring up something like this:

    <SOAP-ENV:Envelope xsi:schemaLocation="http://schemas.xmlsoap.org/soap/envelope/ 
    http://www.oasis-open.org/committees/ebxml-msg/schema/envelope.xsd">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
    <SOAP-ENV:Fault>
    <faultcode>SOAP-ENV:Server</faultcode>
    <faultstring>No payload in HTTP request!</faultstring>
    </SOAP-ENV:Fault>
    </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>

This error means the HTTP request was invalid because there was no payload (business message) in this request. But the error message is created by your partners NEXUSe2e server. That means the http connection is working as expected. This test will create a log entry on your partners system as well. This will ensure you are hiting the right server which is important on more complex installation with test, qa, dr and prod installation.

This test can be repeated for the https connection as well. To simplify the first test you should disable the client authentication. (see FAQ for details) Otherwise the Browser will ask you for a matching client certificate before the connection is created completly. But if required you can install the client certificate in your web browser. Now you should be able to bring up the same error message.

Troubleshooting: Most things are going wrong in this step because this involves the whole IT staff to get this working. The server must be configured correctly, the network routing must match the requirements and the firewall needs to configured as well.

If the test above fails you should try to ensure the web app server and NEXUSe2e is up and running correctly. To do so, just connect to the pointed URL directly on the machine the web app server is installed on. If you are not getting this message described above you had to check the logs to see why something is going wrong. Maybe its a database issue and the web app is not started correctly. 

If you get the saop fault talk to your network staff about the a connection issue. They should be able to trace down the connection to see if its an firewall or routing issue on your or even on your partners side. After fixing this issue we can process trying to send a business message to your partner.

  `,`
  

Now its time to check the communication between the two messaging servers. If both sides are using NEXUSe2e they already have a simple choreography configured you might want to use for connectivity test. By default the NEXUSe2e installation contains the GenericFile choreography which is only for basic connection tests. After adding the participants on both sides its helpful to use the Tools-> Send Message screen to send a test message to a selected partner using this GenericFile choreography.

You can send what ever want as a message but its usefill to test with some simple and small text file. An small XML file would be perfect. After sending this message you should check the logs on both sides. If everything worked, the message should be completed after at least a few seconds. This depends on the servers, network load and database performance but should normally not take more than a minute.

Please keep in mind this message send process is a bidirectional communication. The business message is send over to your partner. After receiving this, your partner will send you a matching acknowledgement. And only if you receive this acknowledgement, the message will be marked as completed.

  `]}class Zr extends B{constructor(e){super(),F(this,e,Qr,Gr,z,{})}}function Jr(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function Yr(r){return[`
  # Unconfigured Content Type

  <hr>
  
### Scenario

Content header of a received message contains unknown Content-Type like:

    Content-Type: text/xml; charset="UTF-8"

### Edit MIME Config

The error indicates that due to lack of an applicable MIME-type mapping, NEXUSe2e cannot interpret the xml-message as xml. It will hence try to think of it as binary content, and this will usually lead to problems down the line.

The underlying cause is that the MimeConfig.xml file, which defines the mappings for NEXUSe2e, contains only bare types without any charset part. This is plausible for the mapping, but unfortunately in older versions of NEXUSe2e the lookup is based on the entire MIME-type and charset string.

Therefore we propose to extract only the bare MIME type before making the lookup.

There is a practical workaround, if you know the precise header value, you could simply add a proper MIMEHandler and FileMapping - to your /tomcat/NEXUSe2e/WEB-INF/config/MimeConfig.xml - like this:

    <Handler MimeType="text/xml; charset=utf-8">
        <Class>org.nexuse2e.messaging.mime.text_xml</Class>
    </Handler>

and

    <MimeMapping MimeType="text/xml; charset=utf-8">
        <FileType>xml</FileType>
        <FileType>XML</FileType>
    </MimeMapping>

Keep in mind that this is not a generic fix, and will only work for this one specific charset.

In addition to that, the way it works now does not take into account the Object type that the javax.mail API returns, but only looks at the Content-Type header and MimeConfig.xml do determine whether content is a byte[] or a String. This is error prone and will cause a ClassCastException in line 145 of HTTPMessageUnpackager.java (String gets cast to a byte[]). This exception is avoidable by an additional instanceof clause.

To replicate this issue post the content of the attached mulitpart MIME request towards a NEXUSe2e ebXML 2.0 handler. Use this command with cURL:

    {{curl http://nexuse2e.dev.arosa:5080/NEXUSe2e/handler/ebxml20 --data-binary @test_post_data_only.txt -H 'Content-Type: multipart/related'}}

  `]}class Kr extends B{constructor(e){super(),F(this,e,Yr,Jr,z,{})}}function es(r){let e,t,n;return{c(){e=Ne("svg"),t=Ne("path"),x(t,"d",n=r[1][r[0]]),x(e,"class","icon svelte-17jwhoa"),x(e,"viewBox","0 0 24 24"),x(e,"stroke-width","2"),x(e,"stroke","currentColor")},m(i,s){h(i,e,s),C(e,t)},p(i,[s]){s&1&&n!==(n=i[1][i[0]])&&x(t,"d",n)},i:y,o:y,d(i){i&&d(e)}}}function ts(r,e,t){let{icon:n}=e;const i={copy:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"};return r.$$set=s=>{"icon"in s&&t(0,n=s.icon)},[n,i]}class bt extends B{constructor(e){super(),F(this,e,ts,es,z,{icon:0})}}function kt(r,e,t){const n=r.slice();return n[7]=e[t],n}function _t(r,e,t){const n=r.slice();return n[10]=e[t],n}function St(r){let e;return{c(){e=p("span"),e.textContent="latest",x(e,"class","version-card__header-badge svelte-w8jn3f")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function xt(r){let e,t=w.parse(r[10])+"";return{c(){e=p("li"),x(e,"class","version-card__change svelte-w8jn3f")},m(n,i){h(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=w.parse(n[10])+"")&&(e.innerHTML=t)},d(n){n&&d(e)}}}function $t(r){let e,t,n,i,s,o=r[0].knownIssues,l=[];for(let a=0;a<o.length;a+=1)l[a]=Tt(kt(r,o,a));return{c(){e=p("h4"),e.textContent="Known Issues",t=b(),n=p("ul");for(let a=0;a<l.length;a+=1)l[a].c();i=b(),s=p("hr")},m(a,c){h(a,e,c),h(a,t,c),h(a,n,c);for(let u=0;u<l.length;u+=1)l[u].m(n,null);h(a,i,c),h(a,s,c)},p(a,c){if(c&1){o=a[0].knownIssues;let u;for(u=0;u<o.length;u+=1){const v=kt(a,o,u);l[u]?l[u].p(v,c):(l[u]=Tt(v),l[u].c(),l[u].m(n,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=o.length}},d(a){a&&d(e),a&&d(t),a&&d(n),Xe(l,a),a&&d(i),a&&d(s)}}}function Tt(r){let e,t=w.parse(r[7])+"";return{c(){e=p("li"),x(e,"class","version-card__change svelte-w8jn3f")},m(n,i){h(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=w.parse(n[7])+"")&&(e.innerHTML=t)},d(n){n&&d(e)}}}function Et(r){let e,t,n,i,s,o,l;return{c(){e=p("hr"),t=b(),n=p("h4"),n.textContent="Downloads",i=b(),s=p("a"),o=_e(".war via GitHub"),x(s,"href",l=`${At}/${r[0].download}`),x(s,"target","_blank"),x(s,"class","version-card__download svelte-w8jn3f"),x(s,"rel","noreferrer")},m(a,c){h(a,e,c),h(a,t,c),h(a,n,c),h(a,i,c),h(a,s,c),C(s,o)},p(a,c){c&1&&l!==(l=`${At}/${a[0].download}`)&&x(s,"href",l)},d(a){a&&d(e),a&&d(t),a&&d(n),a&&d(i),a&&d(s)}}}function ns(r){let e,t,n,i=r[0].version+"",s,o,l,a,c,u,v,m,f,g,T,_,P,q,O,I,U,L,W,k=r[0].md5+"",H,ee,ce,ie,E,Q,te,ge,ue,S,V,$=r[0].sha256+"",Z,st,$e,ot,be,We,at,ae=r[1]&&St(),Te=r[0].changes,re=[];for(let G=0;G<Te.length;G+=1)re[G]=xt(_t(r,Te,G));let se=r[0].knownIssues&&r[0].knownIssues.length>0&&$t(r);ce=new bt({props:{icon:"copy"}}),$e=new bt({props:{icon:"copy"}});let oe=r[0].download&&Et(r);return{c(){e=p("div"),t=p("div"),n=p("span"),s=_e(i),o=b(),ae&&ae.c(),l=b(),a=p("hr"),c=b(),u=p("h4"),u.textContent="Changes",v=b(),m=p("ul");for(let G=0;G<re.length;G+=1)re[G].c();f=b(),g=p("hr"),T=b(),se&&se.c(),_=b(),P=p("h4"),P.textContent="Checksums",q=b(),O=p("div"),I=p("span"),I.textContent="MD5:",U=b(),L=p("div"),W=p("span"),H=_e(k),ee=b(),j(ce.$$.fragment),ie=b(),E=p("br"),Q=b(),te=p("div"),ge=p("span"),ge.textContent="SHA256:",ue=b(),S=p("div"),V=p("span"),Z=_e($),st=b(),j($e.$$.fragment),ot=b(),oe&&oe.c(),x(n,"class","version-card__header-text svelte-w8jn3f"),x(t,"class","version-card__header svelte-w8jn3f"),x(I,"class","version-card__checksum-type svelte-w8jn3f"),x(W,"class","version-card__checksum-hash svelte-w8jn3f"),x(L,"class","version-card__checksum-value svelte-w8jn3f"),x(O,"class","version-card__checksum svelte-w8jn3f"),x(ge,"class","version-card__checksum-type svelte-w8jn3f"),x(V,"class","version-card__checksum-hash svelte-w8jn3f"),x(S,"class","version-card__checksum-value svelte-w8jn3f"),x(te,"class","version-card__checksum svelte-w8jn3f"),x(e,"class","version-card svelte-w8jn3f")},m(G,fe){h(G,e,fe),C(e,t),C(t,n),C(n,s),C(t,o),ae&&ae.m(t,null),C(e,l),C(e,a),C(e,c),C(e,u),C(e,v),C(e,m);for(let ne=0;ne<re.length;ne+=1)re[ne].m(m,null);C(e,f),C(e,g),C(e,T),se&&se.m(e,null),C(e,_),C(e,P),C(e,q),C(e,O),C(O,I),C(O,U),C(O,L),C(L,W),C(W,H),C(L,ee),D(ce,L,null),C(e,ie),C(e,E),C(e,Q),C(e,te),C(te,ge),C(te,ue),C(te,S),C(S,V),C(V,Z),C(S,st),D($e,S,null),C(e,ot),oe&&oe.m(e,null),be=!0,We||(at=[le(L,"click",r[5]),le(L,"keypress",r[4]),le(S,"click",r[6]),le(S,"keypress",r[3])],We=!0)},p(G,[fe]){if((!be||fe&1)&&i!==(i=G[0].version+"")&&je(s,i),G[1]?ae||(ae=St(),ae.c(),ae.m(t,null)):ae&&(ae.d(1),ae=null),fe&1){Te=G[0].changes;let ne;for(ne=0;ne<Te.length;ne+=1){const lt=_t(G,Te,ne);re[ne]?re[ne].p(lt,fe):(re[ne]=xt(lt),re[ne].c(),re[ne].m(m,null))}for(;ne<re.length;ne+=1)re[ne].d(1);re.length=Te.length}G[0].knownIssues&&G[0].knownIssues.length>0?se?se.p(G,fe):(se=$t(G),se.c(),se.m(e,_)):se&&(se.d(1),se=null),(!be||fe&1)&&k!==(k=G[0].md5+"")&&je(H,k),(!be||fe&1)&&$!==($=G[0].sha256+"")&&je(Z,$),G[0].download?oe?oe.p(G,fe):(oe=Et(G),oe.c(),oe.m(e,null)):oe&&(oe.d(1),oe=null)},i(G){be||(N(ce.$$.fragment,G),N($e.$$.fragment,G),be=!0)},o(G){X(ce.$$.fragment,G),X($e.$$.fragment,G),be=!1},d(G){G&&d(e),ae&&ae.d(),Xe(re,G),se&&se.d(),R(ce),R($e),oe&&oe.d(),We=!1,me(at)}}}const At="https://github.com/NEXUSe2e/NEXUSe2e/releases/download";function is(r,e,t){let{version:n}=e,{latest:i}=e;const s=u=>{navigator.clipboard.writeText(u).then(()=>{alert("In die Zwischenablage kopiert")})};function o(u){we.call(this,r,u)}function l(u){we.call(this,r,u)}const a=()=>s(n.md5),c=()=>s(n.sha256);return r.$$set=u=>{"version"in u&&t(0,n=u.version),"latest"in u&&t(1,i=u.latest)},[n,i,s,o,l,a,c]}class rs extends B{constructor(e){super(),F(this,e,is,ns,z,{version:0,latest:1})}}const Ut=[{version:"NEXUSe2e 5.11.5",md5:"BB37D202B5F4B6F52E02AE73489BE78A",sha256:"358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2",download:"v5.11.5/nexuse2e-webapp-5.11.5.war",changes:["Added basic auth option for http receiver.","Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.","Improved token replacement."]},{version:"NEXUSe2e 5.11.1",md5:"5366B9E97F13A489B0540DC7299698CD",sha256:"2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9",download:"v5.11.1/nexuse2e-webapp-5.11.1.war",changes:["Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.","Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.","Bumped Postgres version to version 42.2.25",'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.']},{version:"NEXUSe2e 5.9.15",md5:"2D3869567E10047C90CD7729A4B48864",sha256:"C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39",download:"v5.9.15/nexuse2e-webapp-5.9.15.war",changes:["Added http header folding option to prevent content type from being folded into a new line."]},{version:"NEXUSe2e 5.9.11",md5:"8E547BF1B85D871A283C73FCEB67BC86",sha256:"EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B",changes:["Implemented HttpResponses for synchronous messaging","Fixed deadlock when synchronously receiving messages","Fixed backend status"],knownIssues:['"Synchronous" for incoming messages still does not work properly in combination with "Reliable"']}];function Ct(r,e,t){const n=r.slice();return n[0]=e[t],n[2]=t,n}function Nt(r){let e,t;return e=new rs({props:{version:r[0],latest:r[2]===0}}),{c(){j(e.$$.fragment)},m(n,i){D(e,n,i),t=!0},p:y,i(n){t||(N(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function ss(r){let e,t,n,i,s,o,l,a,c=Ut,u=[];for(let m=0;m<c.length;m+=1)u[m]=Nt(Ct(r,c,m));const v=m=>X(u[m],1,1,()=>{u[m]=null});return{c(){e=p("h1"),e.textContent="Downloads",t=b(),n=p("hr"),i=b(),s=p("br"),o=b(),l=p("div");for(let m=0;m<u.length;m+=1)u[m].c();x(l,"class","downloads__versions svelte-1q5hjp8")},m(m,f){h(m,e,f),h(m,t,f),h(m,n,f),h(m,i,f),h(m,s,f),h(m,o,f),h(m,l,f);for(let g=0;g<u.length;g+=1)u[g].m(l,null);a=!0},p(m,[f]){if(f&0){c=Ut;let g;for(g=0;g<c.length;g+=1){const T=Ct(m,c,g);u[g]?(u[g].p(T,f),N(u[g],1)):(u[g]=Nt(T),u[g].c(),N(u[g],1),u[g].m(l,null))}for(Se(),g=c.length;g<u.length;g+=1)v(g);xe()}},i(m){if(!a){for(let f=0;f<c.length;f+=1)N(u[f]);a=!0}},o(m){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)X(u[f]);a=!1},d(m){m&&d(e),m&&d(t),m&&d(n),m&&d(i),m&&d(s),m&&d(o),m&&d(l),Xe(u,m)}}}class os extends B{constructor(e){super(),F(this,e,null,ss,z,{})}}function as(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function ls(r){return[`
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

`]}class cs extends B{constructor(e){super(),F(this,e,ls,as,z,{})}}function us(r){let e,t=w.parse(r[0])+"";return{c(){e=p("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:y,i:y,o:y,d(n){n&&d(e)}}}function ds(r){return[`
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
`]}class hs extends B{constructor(e){super(),F(this,e,ds,us,z,{})}}function fs(r){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="not-found__header svelte-1vhr8a1">Site not found</h1> 
  <p class="not-found__text svelte-1vhr8a1">The requested page was not found. <a class="standard-link" href="#/">Back</a></p>`,x(e,"class","not-found svelte-1vhr8a1")},m(t,n){h(t,e,n)},p:y,i:y,o:y,d(t){t&&d(e)}}}class ps extends B{constructor(e){super(),F(this,e,null,fs,z,{})}}function ms(r){let e,t,n;return t=new _n({props:{routes:r[0]}}),{c(){e=p("div"),j(t.$$.fragment),x(e,"id","router"),x(e,"class","svelte-181d4p6")},m(i,s){h(i,e,s),D(t,e,null),n=!0},p:y,i(i){n||(N(t.$$.fragment,i),n=!0)},o(i){X(t.$$.fragment,i),n=!1},d(i){i&&d(e),R(t)}}}function gs(r){return[{"/":Bn,"/solution":Kn,"/solution/features":qn,"/solution/scenarios":Qn,"/service":ni,"/documentation":ri,"/documentation/installation":ui,"/documentation/installation/system-requirements":gi,"/documentation/installation/setting-up":fi,"/documentation/installation/external-config":ai,"/documentation/upgrade":_i,"/documentation/upgrade/checklist":yi,"/documentation/configuration/":Pi,"/documentation/configuration/alter-url":Ei,"/documentation/configuration/mssql-auth":Wi,"/documentation/configuration/windows-service":Ki,"/documentation/configuration/backend-integration":Li,"/documentation/configuration/xsd-schema-validation":or,"/documentation/configuration/log4j-logging":ji,"/documentation/security":mr,"/documentation/security/client-auth":cr,"/documentation/security/secure-endpoint-config":hr,"/documentation/messaging":Fr,"/documentation/messaging/first-steps":Ur,"/documentation/messaging/testing-connectivity":Zr,"/documentation/messaging/unconfigured-content-type":Kr,"/documentation/messaging/http-plain-messaging":jr,"/documentation/messaging/backend-web-service-integration":br,"/documentation/messaging/purging":qr,"/downloads":os,"/contact":cs,"/imprint":hs,"*":ps}]}class ws extends B{constructor(e){super(),F(this,e,gs,ms,z,{})}}const vs="/assets/logo.db89ed63.png";function It(r,e,t){const n=r.slice();return n[8]=e[t],n}function Lt(r){let e,t;return{c(){e=Ne("svg"),t=Ne("path"),x(t,"d","M8.25 4.5l7.5 7.5-7.5 7.5"),x(e,"fill","none"),x(e,"viewBox","0 0 24 24"),x(e,"stroke-width","2.5"),x(e,"stroke","currentColor"),x(e,"class","navigation-list-item__sub-icon svelte-1suezlb"),ye(e,"active",r[2])},m(n,i){h(n,e,i),C(e,t)},p(n,i){i&4&&ye(e,"active",n[2])},d(n){n&&d(e)}}}function Xt(r){let e,t,n=r[0].subroutes,i=[];for(let o=0;o<n.length;o+=1)i[o]=Mt(It(r,n,o));const s=o=>X(i[o],1,1,()=>{i[o]=null});return{c(){e=p("ul");for(let o=0;o<i.length;o+=1)i[o].c();x(e,"class","navigation-list-item__sub-list svelte-1suezlb"),ye(e,"active",r[2])},m(o,l){h(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);t=!0},p(o,l){if(l&19){n=o[0].subroutes;let a;for(a=0;a<n.length;a+=1){const c=It(o,n,a);i[a]?(i[a].p(c,l),N(i[a],1)):(i[a]=Mt(c),i[a].c(),N(i[a],1),i[a].m(e,null))}for(Se(),a=n.length;a<i.length;a+=1)s(a);xe()}(!t||l&4)&&ye(e,"active",o[2])},i(o){if(!t){for(let l=0;l<n.length;l+=1)N(i[l]);t=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)X(i[l]);t=!1},d(o){o&&d(e),Xe(i,o)}}}function Mt(r){let e,t;return e=new nn({props:{navItem:r[8],activeRoute:r[1]}}),e.$on("setActive",r[4]),{c(){j(e.$$.fragment)},m(n,i){D(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.navItem=n[8]),i&2&&(s.activeRoute=n[1]),e.$set(s)},i(n){t||(N(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function ys(r){let e,t,n,i=r[0].text+"",s,o,l,a,c,u,v=r[0].subroutes&&Lt(r),m=r[0].subroutes&&Xt(r);return{c(){e=p("li"),t=p("div"),n=p("span"),s=_e(i),o=b(),v&&v.c(),l=b(),m&&m.c(),x(t,"class","navigation-list-item__text svelte-1suezlb"),ye(t,"active",r[0].route===r[1]),x(e,"class","navigation-list-item")},m(f,g){h(f,e,g),C(e,t),C(t,n),C(n,s),C(t,o),v&&v.m(t,null),C(e,l),m&&m.m(e,null),a=!0,c||(u=[le(t,"click",r[3]),le(t,"keypress",r[5])],c=!0)},p(f,[g]){(!a||g&1)&&i!==(i=f[0].text+"")&&je(s,i),f[0].subroutes?v?v.p(f,g):(v=Lt(f),v.c(),v.m(t,null)):v&&(v.d(1),v=null),(!a||g&3)&&ye(t,"active",f[0].route===f[1]),f[0].subroutes?m?(m.p(f,g),g&1&&N(m,1)):(m=Xt(f),m.c(),N(m,1),m.m(e,null)):m&&(Se(),X(m,1,1,()=>{m=null}),xe())},i(f){a||(N(m),a=!0)},o(f){X(m),a=!1},d(f){f&&d(e),v&&v.d(),m&&m.d(),c=!1,me(u)}}}function bs(r,e,t){let n;const i=et();let{navItem:s}=e,{activeRoute:o}=e;function l(v){v.stopPropagation(),c(),i("setActive",s.route)}function a({detail:v}){c(),i("setActive",v)}function c(){const v=s.subroutes===void 0;window.innerWidth<640&&v&&Le.set(!1)}function u(v){we.call(this,r,v)}return r.$$set=v=>{"navItem"in v&&t(0,s=v.navItem),"activeRoute"in v&&t(1,o=v.activeRoute)},r.$$.update=()=>{r.$$.dirty&3&&t(2,n=o.includes(s.route))},[s,o,n,l,a,u]}class nn extends B{constructor(e){super(),F(this,e,bs,ys,z,{navItem:0,activeRoute:1})}}function Pt(r,e,t){const n=r.slice();return n[4]=e[t],n}function Dt(r){let e,t;return e=new nn({props:{navItem:r[4],activeRoute:r[1]}}),e.$on("setActive",r[2]),{c(){j(e.$$.fragment)},m(n,i){D(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.navItem=n[4]),i&2&&(s.activeRoute=n[1]),e.$set(s)},i(n){t||(N(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function ks(r){let e,t,n=r[0],i=[];for(let o=0;o<n.length;o+=1)i[o]=Dt(Pt(r,n,o));const s=o=>X(i[o],1,1,()=>{i[o]=null});return{c(){e=p("ul");for(let o=0;o<i.length;o+=1)i[o].c();x(e,"class","the-navigation__list svelte-1o65xxw")},m(o,l){h(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);t=!0},p(o,[l]){if(l&7){n=o[0];let a;for(a=0;a<n.length;a+=1){const c=Pt(o,n,a);i[a]?(i[a].p(c,l),N(i[a],1)):(i[a]=Dt(c),i[a].c(),N(i[a],1),i[a].m(e,null))}for(Se(),a=n.length;a<i.length;a+=1)s(a);xe()}},i(o){if(!t){for(let l=0;l<n.length;l+=1)N(i[l]);t=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)X(i[l]);t=!1},d(o){o&&d(e),Xe(i,o)}}}function _s(r,e,t){const n=et();let{navItems:i}=e,{activeItem:s}=e;function o({detail:l}){n("setActive",l)}return r.$$set=l=>{"navItems"in l&&t(0,i=l.navItems),"activeItem"in l&&t(1,s=l.activeItem)},[i,s,o]}class Rt extends B{constructor(e){super(),F(this,e,_s,ks,z,{navItems:0,activeItem:1})}}function Ss(r){let e,t,n,i,s;return t=new Rt({props:{navItems:r[1],activeItem:r[0]}}),t.$on("setActive",r[3]),i=new Rt({props:{navItems:r[2],activeItem:r[0]}}),i.$on("setActive",r[3]),{c(){e=p("nav"),j(t.$$.fragment),n=b(),j(i.$$.fragment),x(e,"id","the-navigation"),x(e,"class","svelte-79l316")},m(o,l){h(o,e,l),D(t,e,null),C(e,n),D(i,e,null),s=!0},p(o,[l]){const a={};l&1&&(a.activeItem=o[0]),t.$set(a);const c={};l&1&&(c.activeItem=o[0]),i.$set(c)},i(o){s||(N(t.$$.fragment,o),N(i.$$.fragment,o),s=!0)},o(o){X(t.$$.fragment,o),X(i.$$.fragment,o),s=!1},d(o){o&&d(e),R(t),R(i)}}}function xs(r,e,t){let n;Je(r,yn,a=>t(4,n=a));const i=[{route:"/",text:"Home"},{route:"/solution",text:"Solution",subroutes:[{route:"/solution/features",text:"Features"},{route:"/solution/scenarios",text:"Scenarios"}]},{route:"/service",text:"Service"},{route:"/documentation",text:"Documentation",subroutes:[{route:"/documentation/installation",text:"Installation",subroutes:[{route:"/documentation/installation/system-requirements",text:"System Requirements"},{route:"/documentation/installation/setting-up",text:"Setting up NEXUSe2e"},{route:"/documentation/installation/external-config",text:"External Configuration Folder"}]},{route:"/documentation/upgrade",text:"Upgrade",subroutes:[{route:"/documentation/upgrade/checklist",text:"Upgrade Checklist"}]},{route:"/documentation/configuration",text:"Configuration",subroutes:[{route:"/documentation/configuration/alter-url",text:"How to Alter the NEXUSe2e URL"},{route:"/documentation/configuration/mssql-auth",text:"Integrated Authentication with MSSQL"},{route:"/documentation/configuration/windows-service",text:"Windows Service"},{route:"/documentation/configuration/backend-integration",text:"NEXUSe2e Backend Integration"},{route:"/documentation/configuration/xsd-schema-validation",text:"XSD - Schema Validation"},{route:"/documentation/configuration/log4j-logging",text:"Logging with Log4j 2"}]},{route:"/documentation/security",text:"Security",subroutes:[{route:"/documentation/security/client-auth",text:"Client Authentication"},{route:"/documentation/security/secure-endpoint-config",text:"Configure a secure web service endpoint"}]},{route:"/documentation/messaging",text:"Messaging",subroutes:[{route:"/documentation/messaging/first-steps",text:"First Steps in Messaging"},{route:"/documentation/messaging/testing-connectivity",text:"Testing Connectivity"},{route:"/documentation/messaging/unconfigured-content-type",text:"Unconfigured Content Type"},{route:"/documentation/messaging/http-plain-messaging",text:"HTTP Plain Messaging"},{route:"/documentation/messaging/backend-web-service-integration",text:"Backend Web Service Integration"},{route:"/documentation/messaging/purging",text:"Conversation / Message Purging"}]}]},{route:"/downloads",text:"Downloads"}],s=[{route:"/contact",text:"Contact"},{route:"/imprint",text:"Legal Notices / Impressum"}];let o=n;function l({detail:a}){t(0,o=a),Zt(a)}return[o,i,s,l]}class $s extends B{constructor(e){super(),F(this,e,xs,Ss,z,{})}}function Ts(r){let e,t,n,i,s,o,l,a,c,u;return l=new $s({}),{c(){e=p("div"),t=p("aside"),n=p("img"),s=b(),o=p("div"),j(l.$$.fragment),ve(n.src,i=vs)||x(n,"src",i),x(n,"alt","nexus logo"),x(n,"class","the-navigation-drawer__logo svelte-1lh1kp9"),x(o,"class","the-navigation-drawer__content svelte-1lh1kp9"),x(t,"id","the-navigation-drawer"),x(t,"class","svelte-1lh1kp9"),x(e,"class","the-navigation-drawer__overlay svelte-1lh1kp9"),ye(e,"active",r[0])},m(v,m){h(v,e,m),C(e,t),C(t,n),C(t,s),C(t,o),D(l,o,null),a=!0,c||(u=[le(n,"click",r[2]),le(n,"keypress",r[5]),le(t,"click",Es),le(t,"keypress",r[4]),le(e,"click",r[1]),le(e,"keypress",r[3])],c=!0)},p(v,[m]){(!a||m&1)&&ye(e,"active",v[0])},i(v){a||(N(l.$$.fragment,v),a=!0)},o(v){X(l.$$.fragment,v),a=!1},d(v){v&&d(e),R(l),c=!1,me(u)}}}const Es=r=>r.stopPropagation();function As(r,e,t){let n;Je(r,Le,c=>t(0,n=c));function i(){Le.set(!1)}function s(){Zt("/")}function o(c){we.call(this,r,c)}function l(c){we.call(this,r,c)}function a(c){we.call(this,r,c)}return[n,i,s,o,l,a]}class Us extends B{constructor(e){super(),F(this,e,As,Ts,z,{})}}function Cs(r){let e,t,n,i,s,o,l,a;return t=new Us({}),s=new pn({}),l=new ws({}),{c(){e=p("main"),j(t.$$.fragment),n=b(),i=p("div"),j(s.$$.fragment),o=b(),j(l.$$.fragment),x(i,"id","content"),x(i,"class","svelte-1hx8wd3"),x(e,"class","svelte-1hx8wd3")},m(c,u){h(c,e,u),D(t,e,null),C(e,n),C(e,i),D(s,i,null),C(i,o),D(l,i,null),a=!0},p:y,i(c){a||(N(t.$$.fragment,c),N(s.$$.fragment,c),N(l.$$.fragment,c),a=!0)},o(c){X(t.$$.fragment,c),X(s.$$.fragment,c),X(l.$$.fragment,c),a=!1},d(c){c&&d(e),R(t),R(s),R(l)}}}class Ns extends B{constructor(e){super(),F(this,e,null,Cs,z,{})}}new Ns({target:document.getElementById("app")});
