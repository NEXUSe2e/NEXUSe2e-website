(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function h(){}function Bt(r,e){for(const t in e)r[t]=e[t];return r}function jt(r){return r()}function ct(){return Object.create(null)}function ie(r){r.forEach(jt)}function Fe(r){return typeof r=="function"}function A(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Ae;function oe(r,e){return Ae||(Ae=document.createElement("a")),Ae.href=e,r===Ae.href}function rn(r){return Object.keys(r).length===0}function Ht(r,...e){if(r==null)return h;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function We(r,e,t){r.$$.on_destroy.push(Ht(e,t))}function y(r,e){r.appendChild(e)}function b(r,e,t){r.insertBefore(e,t||null)}function m(r){r.parentNode.removeChild(r)}function Se(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function p(r){return document.createElement(r)}function ke(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function ue(r){return document.createTextNode(r)}function N(){return ue(" ")}function Ze(){return ue("")}function K(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function v(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function sn(r){return Array.from(r.childNodes)}function Le(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Ie(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ae(r,e,t){r.classList[t?"add":"remove"](e)}function on(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}class qe{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=ke(t.nodeName):this.e=p(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}function De(r,e){return new r(e)}let ye;function _e(r){ye=r}function Qe(){if(!ye)throw new Error("Function called outside component initialization");return ye}function an(r){Qe().$$.after_update.push(r)}function ln(r){Qe().$$.on_destroy.push(r)}function Ve(){const r=Qe();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=on(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function se(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const ve=[],ut=[],Ce=[],ht=[],qt=Promise.resolve();let Pe=!1;function Pt(){Pe||(Pe=!0,qt.then(Ft))}function Ot(){return Pt(),qt}function Oe(r){Ce.push(r)}const je=new Set;let Ue=0;function Ft(){const r=ye;do{for(;Ue<ve.length;){const e=ve[Ue];Ue++,_e(e),cn(e.$$)}for(_e(null),ve.length=0,Ue=0;ut.length;)ut.pop()();for(let e=0;e<Ce.length;e+=1){const t=Ce[e];je.has(t)||(je.add(t),t())}Ce.length=0}while(ve.length);for(;ht.length;)ht.pop()();Pe=!1,je.clear(),_e(r)}function cn(r){if(r.fragment!==null){r.update(),ie(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Oe)}}const ze=new Set;let ce;function he(){ce={r:0,c:[],p:ce}}function fe(){ce.r||ie(ce.c),ce=ce.p}function z(r,e){r&&r.i&&(ze.delete(r),r.i(e))}function D(r,e,t,n){if(r&&r.o){if(ze.has(r))return;ze.add(r),ce.c.push(()=>{ze.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function Wt(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const a=r[s],l=e[s];if(l){for(const o in a)o in l||(n[o]=1);for(const o in l)i[o]||(t[o]=l[o],i[o]=1);r[s]=l}else for(const o in a)i[o]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Zt(r){return typeof r=="object"&&r!==null?r:{}}function P(r){r&&r.c()}function H(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||Oe(()=>{const a=r.$$.on_mount.map(jt).filter(Fe);r.$$.on_destroy?r.$$.on_destroy.push(...a):ie(a),r.$$.on_mount=[]}),s.forEach(Oe)}function q(r,e){const t=r.$$;t.fragment!==null&&(ie(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function un(r,e){r.$$.dirty[0]===-1&&(ve.push(r),Pt(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function I(r,e,t,n,i,s,a,l=[-1]){const o=ye;_e(r);const c=r.$$={fragment:null,ctx:[],props:s,update:h,not_equal:i,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ct(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(w,d,...f)=>{const x=f.length?f[0]:d;return c.ctx&&i(c.ctx[w],c.ctx[w]=x)&&(!c.skip_bound&&c.bound[w]&&c.bound[w](x),u&&un(r,w)),d}):[],c.update(),u=!0,ie(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const w=sn(e.target);c.fragment&&c.fragment.l(w),w.forEach(m)}else c.fragment&&c.fragment.c();e.intro&&z(r.$$.fragment),H(r,e.target,e.anchor,e.customElement),Ft()}_e(o)}class U{$destroy(){q(this,1),this.$destroy=h}$on(e,t){if(!Fe(t))return h;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!rn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hn="/assets/nexus_header.ba62d497.png",we=[];function Qt(r,e){return{subscribe:Ge(r,e).subscribe}}function Ge(r,e=h){let t;const n=new Set;function i(l){if(A(r,l)&&(r=l,t)){const o=!we.length;for(const c of n)c[1](),we.push(c,r);if(o){for(let c=0;c<we.length;c+=2)we[c][0](we[c+1]);we.length=0}}}function s(l){i(l(r))}function a(l,o=h){const c=[l,o];return n.add(c),n.size===1&&(t=e(i)||h),l(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function Vt(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return Qt(t,a=>{let l=!1;const o=[];let c=0,u=h;const w=()=>{if(c)return;u();const f=e(n?o[0]:o,a);s?a(f):u=Fe(f)?f:h},d=i.map((f,x)=>Ht(f,E=>{o[x]=E,c&=~(1<<x),l&&w()},()=>{c|=1<<x}));return l=!0,w(),function(){ie(d),u()}})}const xe=Ge(window.innerWidth>=640);function fn(r){let e,t,n,i,s,a,l,o,c;return{c(){e=p("div"),t=p("img"),i=N(),s=p("button"),s.innerHTML='<svg class="the-app-bar__menu-button-icon svelte-1sfxt2l" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',a=N(),l=p("div"),l.innerHTML=`<div class="the-app-bar__heading-header svelte-1sfxt2l">The proven open source</div> 
    <div class="the-app-bar__heading-sub-header svelte-1sfxt2l">B2B solution</div>`,oe(t.src,n=hn)||v(t,"src",n),v(t,"alt","nexus header"),v(t,"class","the-app-bar__img svelte-1sfxt2l"),v(s,"aria-label","menu-button"),v(s,"class","the-app-bar__menu-button svelte-1sfxt2l"),v(l,"class","the-app-bar__heading svelte-1sfxt2l"),v(e,"id","the-app-bar"),v(e,"class","svelte-1sfxt2l")},m(u,w){b(u,e,w),y(e,t),y(e,i),y(e,s),y(e,a),y(e,l),o||(c=K(s,"click",r[0]),o=!0)},p:h,i:h,o:h,d(u){u&&m(e),o=!1,c()}}}function dn(r,e,t){let n;We(r,xe,s=>t(1,n=s));function i(){xe.set(!n)}return[i]}class pn extends U{constructor(e){super(),I(this,e,dn,fn,A,{})}}function gn(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,i,s,a=[],l="",o=r.split("/");for(o[0]||o.shift();i=o.shift();)t=i[0],t==="*"?(a.push("wild"),l+="/(.*)"):t===":"?(n=i.indexOf("?",1),s=i.indexOf(".",1),a.push(i.substring(1,~n?n:~s?s:i.length)),l+=!!~n&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(l+=(~n?"?":"")+"\\"+i.substring(s))):l+="/"+i;return{keys:a,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}function mn(r){let e,t,n;const i=[r[2]];var s=r[0];function a(l){let o={};for(let c=0;c<i.length;c+=1)o=Bt(o,i[c]);return{props:o}}return s&&(e=De(s,a()),e.$on("routeEvent",r[7])),{c(){e&&P(e.$$.fragment),t=Ze()},m(l,o){e&&H(e,l,o),b(l,t,o),n=!0},p(l,o){const c=o&4?Wt(i,[Zt(l[2])]):{};if(s!==(s=l[0])){if(e){he();const u=e;D(u.$$.fragment,1,0,()=>{q(u,1)}),fe()}s?(e=De(s,a()),e.$on("routeEvent",l[7]),P(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&z(e.$$.fragment,l),n=!0)},o(l){e&&D(e.$$.fragment,l),n=!1},d(l){l&&m(t),e&&q(e,l)}}}function wn(r){let e,t,n;const i=[{params:r[1]},r[2]];var s=r[0];function a(l){let o={};for(let c=0;c<i.length;c+=1)o=Bt(o,i[c]);return{props:o}}return s&&(e=De(s,a()),e.$on("routeEvent",r[6])),{c(){e&&P(e.$$.fragment),t=Ze()},m(l,o){e&&H(e,l,o),b(l,t,o),n=!0},p(l,o){const c=o&6?Wt(i,[o&2&&{params:l[1]},o&4&&Zt(l[2])]):{};if(s!==(s=l[0])){if(e){he();const u=e;D(u.$$.fragment,1,0,()=>{q(u,1)}),fe()}s?(e=De(s,a()),e.$on("routeEvent",l[6]),P(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&z(e.$$.fragment,l),n=!0)},o(l){e&&D(e.$$.fragment,l),n=!1},d(l){l&&m(t),e&&q(e,l)}}}function bn(r){let e,t,n,i;const s=[wn,mn],a=[];function l(o,c){return o[1]?0:1}return e=l(r),t=a[e]=s[e](r),{c(){t.c(),n=Ze()},m(o,c){a[e].m(o,c),b(o,n,c),i=!0},p(o,[c]){let u=e;e=l(o),e===u?a[e].p(o,c):(he(),D(a[u],1,1,()=>{a[u]=null}),fe(),t=a[e],t?t.p(o,c):(t=a[e]=s[e](o),t.c()),z(t,1),t.m(n.parentNode,n))},i(o){i||(z(t),i=!0)},o(o){D(t),i=!1},d(o){a[e].d(o),o&&m(n)}}}function ft(){const r=window.location.href.indexOf("#/");let e=r>-1?window.location.href.substr(r+1):"/";const t=e.indexOf("?");let n="";return t>-1&&(n=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:n}}const Je=Qt(null,function(e){e(ft());const t=()=>{e(ft())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),vn=Vt(Je,r=>r.location);Vt(Je,r=>r.querystring);const dt=Ge(void 0);async function Gt(r){if(!r||r.length<1||r.charAt(0)!="/"&&r.indexOf("#/")!==0)throw Error("Invalid parameter location");await Ot(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(r.charAt(0)=="#"?"":"#")+r}function _n(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function kn(r,e,t){let{routes:n={}}=e,{prefix:i=""}=e,{restoreScrollState:s=!1}=e;class a{constructor(T,$){if(!$||typeof $!="function"&&(typeof $!="object"||$._sveltesparouter!==!0))throw Error("Invalid component object");if(!T||typeof T=="string"&&(T.length<1||T.charAt(0)!="/"&&T.charAt(0)!="*")||typeof T=="object"&&!(T instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:B,keys:M}=gn(T);this.path=T,typeof $=="object"&&$._sveltesparouter===!0?(this.component=$.component,this.conditions=$.conditions||[],this.userData=$.userData,this.props=$.props||{}):(this.component=()=>Promise.resolve($),this.conditions=[],this.props={}),this._pattern=B,this._keys=M}match(T){if(i){if(typeof i=="string")if(T.startsWith(i))T=T.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const Z=T.match(i);if(Z&&Z[0])T=T.substr(Z[0].length)||"/";else return null}}const $=this._pattern.exec(T);if($===null)return null;if(this._keys===!1)return $;const B={};let M=0;for(;M<this._keys.length;){try{B[this._keys[M]]=decodeURIComponent($[M+1]||"")||null}catch{B[this._keys[M]]=null}M++}return B}async checkConditions(T){for(let $=0;$<this.conditions.length;$++)if(!await this.conditions[$](T))return!1;return!0}}const l=[];n instanceof Map?n.forEach((L,T)=>{l.push(new a(T,L))}):Object.keys(n).forEach(L=>{l.push(new a(L,n[L]))});let o=null,c=null,u={};const w=Ve();async function d(L,T){await Ot(),w(L,T)}let f=null,x=null;s&&(x=L=>{L.state&&(L.state.__svelte_spa_router_scrollY||L.state.__svelte_spa_router_scrollX)?f=L.state:f=null},window.addEventListener("popstate",x),an(()=>{_n(f)}));let E=null,k=null;const C=Je.subscribe(async L=>{E=L;let T=0;for(;T<l.length;){const $=l[T].match(L.location);if(!$){T++;continue}const B={route:l[T].path,location:L.location,querystring:L.querystring,userData:l[T].userData,params:$&&typeof $=="object"&&Object.keys($).length?$:null};if(!await l[T].checkConditions(B)){t(0,o=null),k=null,d("conditionsFailed",B);return}d("routeLoading",Object.assign({},B));const M=l[T].component;if(k!=M){M.loading?(t(0,o=M.loading),k=M,t(1,c=M.loadingParams),t(2,u={}),d("routeLoaded",Object.assign({},B,{component:o,name:o.name,params:c}))):(t(0,o=null),k=null);const Z=await M();if(L!=E)return;t(0,o=Z&&Z.default||Z),k=M}$&&typeof $=="object"&&Object.keys($).length?t(1,c=$):t(1,c=null),t(2,u=l[T].props),d("routeLoaded",Object.assign({},B,{component:o,name:o.name,params:c})).then(()=>{dt.set(c)});return}t(0,o=null),k=null,dt.set(void 0)});ln(()=>{C(),x&&window.removeEventListener("popstate",x)});function j(L){se.call(this,r,L)}function W(L){se.call(this,r,L)}return r.$$set=L=>{"routes"in L&&t(3,n=L.routes),"prefix"in L&&t(4,i=L.prefix),"restoreScrollState"in L&&t(5,s=L.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=s?"manual":"auto")},[o,c,u,n,i,s,j,W]}class yn extends U{constructor(e){super(),I(this,e,kn,bn,A,{routes:3,prefix:4,restoreScrollState:5})}}function Jt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let be=Jt();function xn(r){be=r}const Sn=/[&<>"']/,$n=/[&<>"']/g,En=/[<>"']|&(?!#?\w+;)/,Tn=/[<>"']|&(?!#?\w+;)/g,An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pt=r=>An[r];function O(r,e){if(e){if(Sn.test(r))return r.replace($n,pt)}else if(En.test(r))return r.replace(Tn,pt);return r}const In=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kt(r){return r.replace(In,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Un=/(^|[^\[])\^/g;function X(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(Un,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const Nn=/[^\w:]/g,Ln=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function gt(r,e,t){if(r){let n;try{n=decodeURIComponent(Kt(t)).replace(Nn,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Ln.test(t)&&(t=Dn(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Ne={},Cn=/^[^:]+:\/*[^/]*$/,zn=/^([^:]+:)[\s\S]*$/,Rn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Dn(r,e){Ne[" "+r]||(Cn.test(r)?Ne[" "+r]=r+"/":Ne[" "+r]=Re(r,"/",!0)),r=Ne[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(zn,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(Rn,"$1")+e:r+e}const Xe={exec:function(){}};function Y(r){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}function mt(r,e){const t=r.replace(/\|/g,(s,a,l)=>{let o=!1,c=a;for(;--c>=0&&l[c]==="\\";)o=!o;return o?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Re(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Xn(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function Yt(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function wt(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function bt(r,e,t,n){const i=e.href,s=e.title?O(e.title):null,a=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:s,text:O(a)}}function Mn(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[a]=s;return a.length>=n.length?i.slice(n.length):i}).join(`
`)}class Ke{constructor(e){this.options=e||be}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Re(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Mn(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=Re(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,s,a,l,o,c,u,w,d,f,x,E=t[1].trim();const k=E.length>1,C={type:"list",raw:"",ordered:k,start:k?+E.slice(0,-1):"",loose:!1,items:[]};E=k?`\\d{1,9}\\${E.slice(-1)}`:`\\${E}`,this.options.pedantic&&(E=k?E:"[*+-]");const j=new RegExp(`^( {0,3}${E})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(x=!1,!(!(t=j.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],w=e.split(`
`,1)[0],this.options.pedantic?(a=2,f=u.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,f=u.slice(a),a+=t[1].length),o=!1,!u&&/^ *$/.test(w)&&(n+=w+`
`,e=e.substring(w.length+1),x=!0),!x){const L=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),T=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),$=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),B=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!($.test(u)||B.test(u)||L.test(u)||T.test(e)));){if(u.search(/[^ ]/)>=a||!u.trim())f+=`
`+u.slice(a);else if(!o)f+=`
`+u;else break;!o&&!u.trim()&&(o=!0),n+=d+`
`,e=e.substring(d.length+1)}}C.loose||(c?C.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(f),i&&(s=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),C.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:f}),C.raw+=n}C.items[C.items.length-1].raw=n.trimRight(),C.items[C.items.length-1].text=f.trimRight(),C.raw=C.raw.trimRight();const W=C.items.length;for(l=0;l<W;l++){this.lexer.state.top=!1,C.items[l].tokens=this.lexer.blockTokens(C.items[l].text,[]);const L=C.items[l].tokens.filter($=>$.type==="space"),T=L.every($=>{const B=$.raw.split("");let M=0;for(const Z of B)if(Z===`
`&&(M+=1),M>1)return!0;return!1});!C.loose&&L.length&&T&&(C.loose=!0,C.items[l].loose=!0)}return C}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):O(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:mt(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,s,a,l,o;for(s=0;s<i;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(i=n.rows.length,s=0;s<i;s++)n.rows[s]=mt(n.rows[s],n.header.length).map(c=>({text:c}));for(i=n.header.length,a=0;a<i;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(i=n.rows.length,a=0;a<i;a++)for(o=n.rows[a],l=0;l<o.length;l++)o[l].tokens=this.lexer.inline(o[l].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:O(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):O(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=Re(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=Xn(t[2],"()");if(a>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),bt(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return bt(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const a=i[0].length-1;let l,o,c=a,u=0;const w=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(w.lastIndex=0,t=t.slice(-1*e.length+a);(i=w.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=l.length,i[3]||i[4]){c+=o;continue}else if((i[5]||i[6])&&a%3&&!((a+o)%3)){u+=o;continue}if(c-=o,c>0)continue;if(o=Math.min(o,o+c+u),Math.min(a,o)%2){const f=e.slice(1,a+i.index+o);return{type:"em",raw:e.slice(0,a+i.index+o+1),text:f,tokens:this.lexer.inlineTokens(f)}}const d=e.slice(2,a+i.index+o-1);return{type:"strong",raw:e.slice(0,a+i.index+o+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=O(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=O(this.options.mangle?t(n[1]):n[1]),s="mailto:"+i):(i=O(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=O(this.options.mangle?t(n[0]):n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);i=O(n[0]),n[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):O(n[0]):n[0]:i=O(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const S={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Xe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};S._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;S._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;S.def=X(S.def).replace("label",S._label).replace("title",S._title).getRegex();S.bullet=/(?:[*+-]|\d{1,9}[.)])/;S.listItemStart=X(/^( *)(bull) */).replace("bull",S.bullet).getRegex();S.list=X(S.list).replace(/bull/g,S.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+S.def.source+")").getRegex();S._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";S._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;S.html=X(S.html,"i").replace("comment",S._comment).replace("tag",S._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();S.paragraph=X(S._paragraph).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex();S.blockquote=X(S.blockquote).replace("paragraph",S.paragraph).getRegex();S.normal=Y({},S);S.gfm=Y({},S.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});S.gfm.table=X(S.gfm.table).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex();S.gfm.paragraph=X(S._paragraph).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",S.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex();S.pedantic=Y({},S.normal,{html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",S._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Xe,paragraph:X(S.normal._paragraph).replace("hr",S.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",S.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const _={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Xe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Xe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};_._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";_.punctuation=X(_.punctuation).replace(/punctuation/g,_._punctuation).getRegex();_.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;_.escapedEmSt=/\\\*|\\_/g;_._comment=X(S._comment).replace("(?:-->|$)","-->").getRegex();_.emStrong.lDelim=X(_.emStrong.lDelim).replace(/punct/g,_._punctuation).getRegex();_.emStrong.rDelimAst=X(_.emStrong.rDelimAst,"g").replace(/punct/g,_._punctuation).getRegex();_.emStrong.rDelimUnd=X(_.emStrong.rDelimUnd,"g").replace(/punct/g,_._punctuation).getRegex();_._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;_._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;_._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;_.autolink=X(_.autolink).replace("scheme",_._scheme).replace("email",_._email).getRegex();_._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;_.tag=X(_.tag).replace("comment",_._comment).replace("attribute",_._attribute).getRegex();_._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;_._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;_._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;_.link=X(_.link).replace("label",_._label).replace("href",_._href).replace("title",_._title).getRegex();_.reflink=X(_.reflink).replace("label",_._label).replace("ref",S._label).getRegex();_.nolink=X(_.nolink).replace("ref",S._label).getRegex();_.reflinkSearch=X(_.reflinkSearch,"g").replace("reflink",_.reflink).replace("nolink",_.nolink).getRegex();_.normal=Y({},_);_.pedantic=Y({},_.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",_._label).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_._label).getRegex()});_.gfm=Y({},_.normal,{escape:X(_.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});_.gfm.url=X(_.gfm.url,"i").replace("email",_.gfm._extended_email).getRegex();_.breaks=Y({},_.gfm,{br:X(_.br).replace("{2,}","*").getRegex(),text:X(_.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Bn(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function vt(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class ne{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||be,this.options.tokenizer=this.options.tokenizer||new Ke,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:S.normal,inline:_.normal};this.options.pedantic?(t.block=S.pedantic,t.inline=_.pedantic):this.options.gfm&&(t.block=S.gfm,this.options.breaks?t.inline=_.breaks:t.inline=_.gfm),this.tokenizer.rules=t}static get rules(){return{block:S,inline:_}}static lex(e,t){return new ne(t).lex(e)}static lexInline(e,t){return new ne(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,o,c)=>o+"    ".repeat(c.length));let n,i,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},o),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],a&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),a=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,a=e,l,o,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(a))!=null;)a=a.slice(0,l.index)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(c=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,vt)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,vt))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const w=e.slice(1);let d;this.options.extensions.startInline.forEach(function(f){d=f.call({lexer:this},w),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,Bn)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),o=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Ye{constructor(e){this.options=e||be}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+O(i,!0)+'">'+(n?e:O(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:O(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=gt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+O(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=gt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class en{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class tn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class ee{constructor(e){this.options=e||be,this.options.renderer=this.options.renderer||new Ye,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new en,this.slugger=new tn}static parse(e,t){return new ee(t).parse(e)}static parseInline(e,t){return new ee(t).parseInline(e)}parse(e,t=!0){let n="",i,s,a,l,o,c,u,w,d,f,x,E,k,C,j,W,L,T,$;const B=e.length;for(i=0;i<B;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&($=this.options.extensions.renderers[f.type].call({parser:this},f),$!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){n+=$||"";continue}switch(f.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Kt(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(w="",u="",l=f.header.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(f.header[s].tokens),{header:!0,align:f.align[s]});for(w+=this.renderer.tablerow(u),d="",l=f.rows.length,s=0;s<l;s++){for(c=f.rows[s],u="",o=c.length,a=0;a<o;a++)u+=this.renderer.tablecell(this.parseInline(c[a].tokens),{header:!1,align:f.align[a]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(w,d);continue}case"blockquote":{d=this.parse(f.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(x=f.ordered,E=f.start,k=f.loose,l=f.items.length,d="",s=0;s<l;s++)j=f.items[s],W=j.checked,L=j.task,C="",j.task&&(T=this.renderer.checkbox(W),k?j.tokens.length>0&&j.tokens[0].type==="paragraph"?(j.tokens[0].text=T+" "+j.tokens[0].text,j.tokens[0].tokens&&j.tokens[0].tokens.length>0&&j.tokens[0].tokens[0].type==="text"&&(j.tokens[0].tokens[0].text=T+" "+j.tokens[0].tokens[0].text)):j.tokens.unshift({type:"text",text:T}):C+=T),C+=this.parse(j.tokens,k),d+=this.renderer.listitem(C,L,W);n+=this.renderer.list(d,x,E);continue}case"html":{n+=this.renderer.html(f.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;i+1<B&&e[i+1].type==="text";)f=e[++i],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const M='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(M);return}else throw new Error(M)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,s,a;const l=e.length;for(i=0;i<l;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(a=this.options.extensions.renderers[s.type].call({parser:this},s),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){n+=a||"";continue}switch(s.type){case"escape":{n+=t.text(s.text);break}case"html":{n+=t.html(s.text);break}case"link":{n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{n+=t.image(s.href,s.title,s.text);break}case"strong":{n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(s.tokens,t));break}case"text":{n+=t.text(s.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return n}}function g(r,e,t){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Y({},g.defaults,e||{}),Yt(e),t){const i=e.highlight;let s;try{s=ne.lex(r,e)}catch(o){return t(o)}const a=function(o){let c;if(!o)try{e.walkTokens&&g.walkTokens(s,e.walkTokens),c=ee.parse(s,e)}catch(u){o=u}return e.highlight=i,o?t(o):t(null,c)};if(!i||i.length<3||(delete e.highlight,!s.length))return a();let l=0;g.walkTokens(s,function(o){o.type==="code"&&(l++,setTimeout(()=>{i(o.text,o.lang,function(c,u){if(c)return a(c);u!=null&&u!==o.text&&(o.text=u,o.escaped=!0),l--,l===0&&a()})},0))}),l===0&&a();return}function n(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+O(i.message+"",!0)+"</pre>";throw i}try{const i=ne.lex(r,e);if(e.walkTokens){if(e.async)return Promise.all(g.walkTokens(i,e.walkTokens)).then(()=>ee.parse(i,e)).catch(n);g.walkTokens(i,e.walkTokens)}return ee.parse(i,e)}catch(i){n(i)}}g.options=g.setOptions=function(r){return Y(g.defaults,r),xn(g.defaults),g};g.getDefaults=Jt;g.defaults=be;g.use=function(...r){const e=Y({},...r),t=g.defaults.extensions||{renderers:{},childTokens:{}};let n;r.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const a=t.renderers?t.renderers[s.name]:null;a?t.renderers[s.name]=function(...l){let o=s.renderer.apply(this,l);return o===!1&&(o=a.apply(this,l)),o}:t.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[s.level]?t[s.level].unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}s.childTokens&&(t.childTokens[s.name]=s.childTokens)})),i.renderer){const s=g.defaults.renderer||new Ye;for(const a in i.renderer){const l=s[a];s[a]=(...o)=>{let c=i.renderer[a].apply(s,o);return c===!1&&(c=l.apply(s,o)),c}}e.renderer=s}if(i.tokenizer){const s=g.defaults.tokenizer||new Ke;for(const a in i.tokenizer){const l=s[a];s[a]=(...o)=>{let c=i.tokenizer[a].apply(s,o);return c===!1&&(c=l.apply(s,o)),c}}e.tokenizer=s}if(i.walkTokens){const s=g.defaults.walkTokens;e.walkTokens=function(a){let l=[];return l.push(i.walkTokens.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}n&&(e.extensions=t),g.setOptions(e)})};g.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(g,n)),n.type){case"table":{for(const i of n.header)t=t.concat(g.walkTokens(i.tokens,e));for(const i of n.rows)for(const s of i)t=t.concat(g.walkTokens(s.tokens,e));break}case"list":{t=t.concat(g.walkTokens(n.items,e));break}default:g.defaults.extensions&&g.defaults.extensions.childTokens&&g.defaults.extensions.childTokens[n.type]?g.defaults.extensions.childTokens[n.type].forEach(function(i){t=t.concat(g.walkTokens(n[i],e))}):n.tokens&&(t=t.concat(g.walkTokens(n.tokens,e)))}return t};g.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=Y({},g.defaults,e||{}),Yt(e);try{const t=ne.lexInline(r,e);return e.walkTokens&&g.walkTokens(t,e.walkTokens),ee.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+O(t.message+"",!0)+"</pre>";throw t}};g.Parser=ee;g.parser=ee.parse;g.Renderer=Ye;g.TextRenderer=en;g.Lexer=ne;g.lexer=ne.lex;g.Tokenizer=Ke;g.Slugger=tn;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;ee.parse;ne.lex;const jn="/NEXUSe2e-website/assets/nexus_on_java_11.86fd1c91.jpg";function Hn(r){let e,t,n=g.parse(r[0])+"",i,s,a,l,o,c=g.parse(r[1])+"";return{c(){e=p("div"),t=new qe(!1),i=N(),s=p("img"),l=N(),o=new qe(!1),t.a=i,oe(s.src,a=jn)||v(s,"src",a),v(s,"alt","nexus on java 11"),v(s,"class","img"),o.a=null},m(u,w){b(u,e,w),t.m(n,e),y(e,i),y(e,s),y(e,l),o.m(c,e)},p:h,i:h,o:h,d(u){u&&m(e)}}}function qn(r){return[`
  <h1>Home</h1>
  <hr>
  <h2 style="color: var(--color-brand)">NEXUSe2e is now running on Java 11</h2>
`,`
  ## NEXUSe2e 5.9 and Java 11
  
  All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK as production instances would now require an oracle JDK license to run. 
  `]}class Pn extends U{constructor(e){super(),I(this,e,qn,Hn,A,{})}}function On(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Fn(r){return[`
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
  `]}class Wn extends U{constructor(e){super(),I(this,e,Fn,On,A,{})}}function Zn(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Qn(r){return[`
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
  `]}class Vn extends U{constructor(e){super(),I(this,e,Qn,Zn,A,{})}}const Gn="/NEXUSe2e-website/assets/solution.b1b6bfc4.jpg";function Jn(r){let e,t,n=g.parse(r[0])+"",i,s,a;return{c(){e=p("div"),t=new qe(!1),i=N(),s=p("img"),t.a=i,oe(s.src,a=Gn)||v(s,"src",a),v(s,"alt","NEXUSe2e solution"),v(s,"class","img")},m(l,o){b(l,e,o),t.m(n,e),y(e,i),y(e,s)},p:h,i:h,o:h,d(l){l&&m(e)}}}function Kn(r){return[`
  # The Solution

  ---
  

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTPS, SMTP, SFTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `]}class Yn extends U{constructor(e){super(),I(this,e,Kn,Jn,A,{})}}function ei(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function ti(r){return[`
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
  - We help you to develop your own NEXUSe2e components.`]}class ni extends U{constructor(e){super(),I(this,e,ti,ei,A,{})}}function ii(r){let e,t,n;return{c(){e=p("h1"),e.textContent="Documentation",t=N(),n=p("hr")},m(i,s){b(i,e,s),b(i,t,s),b(i,n,s)},p:h,i:h,o:h,d(i){i&&m(e),i&&m(t),i&&m(n)}}}class ri extends U{constructor(e){super(),I(this,e,null,ii,A,{})}}function si(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function oi(r){return[`
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





  `]}class ai extends U{constructor(e){super(),I(this,e,oi,si,A,{})}}function li(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function ci(r){return[`
  # Installation

  <hr>
  
  `]}class ui extends U{constructor(e){super(),I(this,e,ci,li,A,{})}}function hi(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function fi(r){return[`
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
 `]}class di extends U{constructor(e){super(),I(this,e,fi,hi,A,{})}}function pi(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function gi(r){return[`
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
  `]}class mi extends U{constructor(e){super(),I(this,e,gi,pi,A,{})}}function wi(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function bi(r){return[`
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

  `]}class vi extends U{constructor(e){super(),I(this,e,bi,wi,A,{})}}function _i(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function ki(r){return[`
  # Upgrade

  <hr>
  
  `]}class yi extends U{constructor(e){super(),I(this,e,ki,_i,A,{})}}const xi="/NEXUSe2e-website/assets/alterURL1.ec8d0877.jpg",Si="/NEXUSe2e-website/assets/alterURL2.1c2bdeda.jpg";function $i(r){let e,t=g.parse(r[0])+"",n,i,s,a,l,o=g.parse(r[1])+"",c,u,w,d,f,x=g.parse(r[2])+"";return{c(){e=p("div"),n=N(),i=p("img"),a=N(),l=p("div"),c=N(),u=p("img"),d=N(),f=p("div"),oe(i.src,s=xi)||v(i,"src",s),v(i,"alt","nexus on java 11"),v(i,"class","img"),oe(u.src,w=Si)||v(u,"src",w),v(u,"alt","nexus on java 11"),v(u,"class","img")},m(E,k){b(E,e,k),e.innerHTML=t,b(E,n,k),b(E,i,k),b(E,a,k),b(E,l,k),l.innerHTML=o,b(E,c,k),b(E,u,k),b(E,d,k),b(E,f,k),f.innerHTML=x},p:h,i:h,o:h,d(E){E&&m(e),E&&m(n),E&&m(i),E&&m(a),E&&m(l),E&&m(c),E&&m(u),E&&m(d),E&&m(f)}}}function Ei(r){return[`
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
  `]}class Ti extends U{constructor(e){super(),I(this,e,Ei,$i,A,{})}}function Ai(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Ii(r){return[`
  # NEXUSe2e Backend Integration

  <hr>
  
  `]}class Ui extends U{constructor(e){super(),I(this,e,Ii,Ai,A,{})}}function Ni(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Li(r){return[`
  # Configuration

  <hr>
  
  `]}class Ci extends U{constructor(e){super(),I(this,e,Li,Ni,A,{})}}function zi(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Ri(r){return[`
  # Logging with Log4j 2

  <hr>
  
  `]}class Di extends U{constructor(e){super(),I(this,e,Ri,zi,A,{})}}function Xi(r){let e,t,n;return{c(){e=p("div"),t=p("img"),oe(t.src,n=r[0])||v(t,"src",n),v(t,"alt",r[1]),v(t,"class","img svelte-i49qvk"),Ie(t,"height",`${r[2]}px`),v(e,"class","img-container svelte-i49qvk"),Ie(e,"justify-content",r[3])},m(i,s){b(i,e,s),y(e,t)},p(i,[s]){s&1&&!oe(t.src,n=i[0])&&v(t,"src",n),s&2&&v(t,"alt",i[1]),s&4&&Ie(t,"height",`${i[2]}px`),s&8&&Ie(e,"justify-content",i[3])},i:h,o:h,d(i){i&&m(e)}}}function Mi(r,e,t){let n,{img:i}=e,{alt:s=""}=e,{height:a="300"}=e,{position:l="center"}=e;return r.$$set=o=>{"img"in o&&t(0,i=o.img),"alt"in o&&t(1,s=o.alt),"height"in o&&t(2,a=o.height),"position"in o&&t(4,l=o.position)},r.$$.update=()=>{r.$$.dirty&16&&t(3,n={left:"flex-start",center:"center",right:"flex-end"}[l])},[i,s,a,n,l]}class He extends U{constructor(e){super(),I(this,e,Mi,Xi,A,{img:0,alt:1,height:2,position:4})}}const Bi="/NEXUSe2e-website/assets/mssqlAuth1.24d2bab4.png",ji="/NEXUSe2e-website/assets/mssqlAuth2.db7b578e.png",Hi="/NEXUSe2e-website/assets/mssqlAuth3.5302e9f6.png";function qi(r){let e,t=g.parse(r[0])+"",n,i,s,a,l=g.parse(r[1])+"",o,c,u,w,d=g.parse(r[2])+"",f,x,E;return i=new He({props:{img:Bi,alt:"directory structure"}}),c=new He({props:{img:ji,alt:"Service JVM Parameters"}}),x=new He({props:{img:Hi,alt:"Service Login"}}),{c(){e=p("div"),n=N(),P(i.$$.fragment),s=N(),a=p("div"),o=N(),P(c.$$.fragment),u=N(),w=p("div"),f=N(),P(x.$$.fragment)},m(k,C){b(k,e,C),e.innerHTML=t,b(k,n,C),H(i,k,C),b(k,s,C),b(k,a,C),a.innerHTML=l,b(k,o,C),H(c,k,C),b(k,u,C),b(k,w,C),w.innerHTML=d,b(k,f,C),H(x,k,C),E=!0},p:h,i(k){E||(z(i.$$.fragment,k),z(c.$$.fragment,k),z(x.$$.fragment,k),E=!0)},o(k){D(i.$$.fragment,k),D(c.$$.fragment,k),D(x.$$.fragment,k),E=!1},d(k){k&&m(e),k&&m(n),q(i,k),k&&m(s),k&&m(a),k&&m(o),q(c,k),k&&m(u),k&&m(w),k&&m(f),q(x,k)}}}function Pi(r){return[`
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
  `]}class Oi extends U{constructor(e){super(),I(this,e,Pi,qi,A,{})}}function Fi(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Wi(r){return[`
  # Windows Service

  <hr>
  
  `]}class Zi extends U{constructor(e){super(),I(this,e,Wi,Fi,A,{})}}function Qi(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Vi(r){return[`
  # XSD - Schema Validation

  <hr>
  
  `]}class Gi extends U{constructor(e){super(),I(this,e,Vi,Qi,A,{})}}function Ji(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Ki(r){return[`
  # Client Authentication

  <hr>
  
  The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even if NEXUSe2e is a server application compareable to a website it acts as a client as well which is the major different to standard website certificates. When receiving a business message from your partner, the webapplication server handles this incomming request.

  The SSL Handshake is done before any data is forward into the NEXUSe2e web app. Therefore its important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

  The server provides the server certificate and the client validates this against the configured partner certifcate, the ca certificates and the expiration time. without clientauth the handshake process is done and the user data is transfered. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore it is required to apply the changes on ca certificates in your web app server configuration as well. Even if the clients CA cert is installed in NEXUSe2e, the ssl handshake fails if the required CA certificate is not found in the web app server key store.

  The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in there web app server configurations.
  `]}class Yi extends U{constructor(e){super(),I(this,e,Ki,Ji,A,{})}}function er(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function tr(r){return[`
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
  `]}class nr extends U{constructor(e){super(),I(this,e,tr,er,A,{})}}function ir(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function rr(r){return[`
  # Security

  <hr>
  
  `]}class sr extends U{constructor(e){super(),I(this,e,rr,ir,A,{})}}function or(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function ar(r){return[`
  # SSL

  <hr>
  
  `]}class lr extends U{constructor(e){super(),I(this,e,ar,or,A,{})}}function cr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function ur(r){return[`
  # Backend Web Service Integration

  <hr>
  
  `]}class hr extends U{constructor(e){super(),I(this,e,ur,cr,A,{})}}function fr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function dr(r){return[`
  # First Steps in Messaging

  <hr>
  
  `]}class pr extends U{constructor(e){super(),I(this,e,dr,fr,A,{})}}function gr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function mr(r){return[`
  # HTTP Plain Messaging

  <hr>
  
  `]}class wr extends U{constructor(e){super(),I(this,e,mr,gr,A,{})}}function br(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function vr(r){return[`
  # Messaging

  <hr>
  
  `]}class _r extends U{constructor(e){super(),I(this,e,vr,br,A,{})}}function kr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function yr(r){return[`
  # Conversation / Message Purging

  <hr>
  
  `]}class xr extends U{constructor(e){super(),I(this,e,yr,kr,A,{})}}function Sr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function $r(r){return[`
  # Testing Connectivity

  <hr>
  
  `]}class Er extends U{constructor(e){super(),I(this,e,$r,Sr,A,{})}}function Tr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Ar(r){return[`
  # Unconfigured Content Type

  <hr>
  
  `]}class Ir extends U{constructor(e){super(),I(this,e,Ar,Tr,A,{})}}function Ur(r){let e,t,n;return{c(){e=ke("svg"),t=ke("path"),v(t,"d",n=r[1][r[0]]),v(e,"class","icon svelte-17jwhoa"),v(e,"viewBox","0 0 24 24"),v(e,"stroke-width","2"),v(e,"stroke","currentColor")},m(i,s){b(i,e,s),y(e,t)},p(i,[s]){s&1&&n!==(n=i[1][i[0]])&&v(t,"d",n)},i:h,o:h,d(i){i&&m(e)}}}function Nr(r,e,t){let{icon:n}=e;const i={copy:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"};return r.$$set=s=>{"icon"in s&&t(0,n=s.icon)},[n,i]}class _t extends U{constructor(e){super(),I(this,e,Nr,Ur,A,{icon:0})}}function kt(r,e,t){const n=r.slice();return n[7]=e[t],n}function yt(r,e,t){const n=r.slice();return n[10]=e[t],n}function xt(r){let e;return{c(){e=p("span"),e.textContent="latest",v(e,"class","version-card__header-badge svelte-w8jn3f")},m(t,n){b(t,e,n)},d(t){t&&m(e)}}}function St(r){let e,t=g.parse(r[10])+"";return{c(){e=p("li"),v(e,"class","version-card__change svelte-w8jn3f")},m(n,i){b(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=g.parse(n[10])+"")&&(e.innerHTML=t)},d(n){n&&m(e)}}}function $t(r){let e,t,n,i,s,a=r[0].knownIssues,l=[];for(let o=0;o<a.length;o+=1)l[o]=Et(kt(r,a,o));return{c(){e=p("h4"),e.textContent="Known Issues",t=N(),n=p("ul");for(let o=0;o<l.length;o+=1)l[o].c();i=N(),s=p("hr")},m(o,c){b(o,e,c),b(o,t,c),b(o,n,c);for(let u=0;u<l.length;u+=1)l[u].m(n,null);b(o,i,c),b(o,s,c)},p(o,c){if(c&1){a=o[0].knownIssues;let u;for(u=0;u<a.length;u+=1){const w=kt(o,a,u);l[u]?l[u].p(w,c):(l[u]=Et(w),l[u].c(),l[u].m(n,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=a.length}},d(o){o&&m(e),o&&m(t),o&&m(n),Se(l,o),o&&m(i),o&&m(s)}}}function Et(r){let e,t=g.parse(r[7])+"";return{c(){e=p("li"),v(e,"class","version-card__change svelte-w8jn3f")},m(n,i){b(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=g.parse(n[7])+"")&&(e.innerHTML=t)},d(n){n&&m(e)}}}function Tt(r){let e,t,n,i,s,a,l;return{c(){e=p("hr"),t=N(),n=p("h4"),n.textContent="Downloads",i=N(),s=p("a"),a=ue(".war via GitHub"),v(s,"href",l=`${At}/${r[0].download}`),v(s,"target","_blank"),v(s,"class","version-card__download svelte-w8jn3f"),v(s,"rel","noreferrer")},m(o,c){b(o,e,c),b(o,t,c),b(o,n,c),b(o,i,c),b(o,s,c),y(s,a)},p(o,c){c&1&&l!==(l=`${At}/${o[0].download}`)&&v(s,"href",l)},d(o){o&&m(e),o&&m(t),o&&m(n),o&&m(i),o&&m(s)}}}function Lr(r){let e,t,n,i=r[0].version+"",s,a,l,o,c,u,w,d,f,x,E,k,C,j,W,L,T,$,B,M=r[0].md5+"",Z,et,de,tt,nt,it,pe,$e,rt,re,Ee,Te=r[0].sha256+"",Me,st,ge,ot,le,Be,at,J=r[1]&&xt(),me=r[0].changes,Q=[];for(let R=0;R<me.length;R+=1)Q[R]=St(yt(r,me,R));let V=r[0].knownIssues&&r[0].knownIssues.length>0&&$t(r);de=new _t({props:{icon:"copy"}}),ge=new _t({props:{icon:"copy"}});let G=r[0].download&&Tt(r);return{c(){e=p("div"),t=p("div"),n=p("span"),s=ue(i),a=N(),J&&J.c(),l=N(),o=p("hr"),c=N(),u=p("h4"),u.textContent="Changes",w=N(),d=p("ul");for(let R=0;R<Q.length;R+=1)Q[R].c();f=N(),x=p("hr"),E=N(),V&&V.c(),k=N(),C=p("h4"),C.textContent="Checksums",j=N(),W=p("div"),L=p("span"),L.textContent="MD5:",T=N(),$=p("div"),B=p("span"),Z=ue(M),et=N(),P(de.$$.fragment),tt=N(),nt=p("br"),it=N(),pe=p("div"),$e=p("span"),$e.textContent="SHA256:",rt=N(),re=p("div"),Ee=p("span"),Me=ue(Te),st=N(),P(ge.$$.fragment),ot=N(),G&&G.c(),v(n,"class","version-card__header-text svelte-w8jn3f"),v(t,"class","version-card__header svelte-w8jn3f"),v(L,"class","version-card__checksum-type svelte-w8jn3f"),v(B,"class","version-card__checksum-hash svelte-w8jn3f"),v($,"class","version-card__checksum-value svelte-w8jn3f"),v(W,"class","version-card__checksum svelte-w8jn3f"),v($e,"class","version-card__checksum-type svelte-w8jn3f"),v(Ee,"class","version-card__checksum-hash svelte-w8jn3f"),v(re,"class","version-card__checksum-value svelte-w8jn3f"),v(pe,"class","version-card__checksum svelte-w8jn3f"),v(e,"class","version-card svelte-w8jn3f")},m(R,te){b(R,e,te),y(e,t),y(t,n),y(n,s),y(t,a),J&&J.m(t,null),y(e,l),y(e,o),y(e,c),y(e,u),y(e,w),y(e,d);for(let F=0;F<Q.length;F+=1)Q[F].m(d,null);y(e,f),y(e,x),y(e,E),V&&V.m(e,null),y(e,k),y(e,C),y(e,j),y(e,W),y(W,L),y(W,T),y(W,$),y($,B),y(B,Z),y($,et),H(de,$,null),y(e,tt),y(e,nt),y(e,it),y(e,pe),y(pe,$e),y(pe,rt),y(pe,re),y(re,Ee),y(Ee,Me),y(re,st),H(ge,re,null),y(e,ot),G&&G.m(e,null),le=!0,Be||(at=[K($,"click",r[5]),K($,"keypress",r[4]),K(re,"click",r[6]),K(re,"keypress",r[3])],Be=!0)},p(R,[te]){if((!le||te&1)&&i!==(i=R[0].version+"")&&Le(s,i),R[1]?J||(J=xt(),J.c(),J.m(t,null)):J&&(J.d(1),J=null),te&1){me=R[0].changes;let F;for(F=0;F<me.length;F+=1){const lt=yt(R,me,F);Q[F]?Q[F].p(lt,te):(Q[F]=St(lt),Q[F].c(),Q[F].m(d,null))}for(;F<Q.length;F+=1)Q[F].d(1);Q.length=me.length}R[0].knownIssues&&R[0].knownIssues.length>0?V?V.p(R,te):(V=$t(R),V.c(),V.m(e,k)):V&&(V.d(1),V=null),(!le||te&1)&&M!==(M=R[0].md5+"")&&Le(Z,M),(!le||te&1)&&Te!==(Te=R[0].sha256+"")&&Le(Me,Te),R[0].download?G?G.p(R,te):(G=Tt(R),G.c(),G.m(e,null)):G&&(G.d(1),G=null)},i(R){le||(z(de.$$.fragment,R),z(ge.$$.fragment,R),le=!0)},o(R){D(de.$$.fragment,R),D(ge.$$.fragment,R),le=!1},d(R){R&&m(e),J&&J.d(),Se(Q,R),V&&V.d(),q(de),q(ge),G&&G.d(),Be=!1,ie(at)}}}const At="https://github.com/NEXUSe2e/NEXUSe2e/releases/download";function Cr(r,e,t){let{version:n}=e,{latest:i}=e;const s=u=>{navigator.clipboard.writeText(u).then(()=>{alert("In die Zwischenablage kopiert")})};function a(u){se.call(this,r,u)}function l(u){se.call(this,r,u)}const o=()=>s(n.md5),c=()=>s(n.sha256);return r.$$set=u=>{"version"in u&&t(0,n=u.version),"latest"in u&&t(1,i=u.latest)},[n,i,s,a,l,o,c]}class zr extends U{constructor(e){super(),I(this,e,Cr,Lr,A,{version:0,latest:1})}}const It=[{version:"NEXUSe2e 5.11.5",md5:"BB37D202B5F4B6F52E02AE73489BE78A",sha256:"358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2",download:"v5.11.5/nexuse2e-webapp-5.11.5.war",changes:["Added basic auth option for http receiver.","Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.","Improved token replacement."]},{version:"NEXUSe2e 5.11.1",md5:"5366B9E97F13A489B0540DC7299698CD",sha256:"2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9",download:"v5.11.1/nexuse2e-webapp-5.11.1.war",changes:["Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.","Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.","Bumped Postgres version to version 42.2.25",'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.']},{version:"NEXUSe2e 5.9.15",md5:"2D3869567E10047C90CD7729A4B48864",sha256:"C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39",download:"v5.9.15/nexuse2e-webapp-5.9.15.war",changes:["Added http header folding option to prevent content type from being folded into a new line."]},{version:"NEXUSe2e 5.9.11",md5:"8E547BF1B85D871A283C73FCEB67BC86",sha256:"EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B",changes:["Implemented HttpResponses for synchronous messaging","Fixed deadlock when synchronously receiving messages","Fixed backend status"],knownIssues:['"Synchronous" for incoming messages still does not work properly in combination with "Reliable"']}];function Ut(r,e,t){const n=r.slice();return n[0]=e[t],n[2]=t,n}function Nt(r){let e,t;return e=new zr({props:{version:r[0],latest:r[2]===0}}),{c(){P(e.$$.fragment)},m(n,i){H(e,n,i),t=!0},p:h,i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Rr(r){let e,t,n,i,s,a,l,o,c=It,u=[];for(let d=0;d<c.length;d+=1)u[d]=Nt(Ut(r,c,d));const w=d=>D(u[d],1,1,()=>{u[d]=null});return{c(){e=p("h1"),e.textContent="Downloads",t=N(),n=p("hr"),i=N(),s=p("br"),a=N(),l=p("div");for(let d=0;d<u.length;d+=1)u[d].c();v(l,"class","downloads__versions svelte-1q5hjp8")},m(d,f){b(d,e,f),b(d,t,f),b(d,n,f),b(d,i,f),b(d,s,f),b(d,a,f),b(d,l,f);for(let x=0;x<u.length;x+=1)u[x].m(l,null);o=!0},p(d,[f]){if(f&0){c=It;let x;for(x=0;x<c.length;x+=1){const E=Ut(d,c,x);u[x]?(u[x].p(E,f),z(u[x],1)):(u[x]=Nt(E),u[x].c(),z(u[x],1),u[x].m(l,null))}for(he(),x=c.length;x<u.length;x+=1)w(x);fe()}},i(d){if(!o){for(let f=0;f<c.length;f+=1)z(u[f]);o=!0}},o(d){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)D(u[f]);o=!1},d(d){d&&m(e),d&&m(t),d&&m(n),d&&m(i),d&&m(s),d&&m(a),d&&m(l),Se(u,d)}}}class Dr extends U{constructor(e){super(),I(this,e,null,Rr,A,{})}}function Xr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Mr(r){return[`
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

`]}class Br extends U{constructor(e){super(),I(this,e,Mr,Xr,A,{})}}function jr(r){let e,t=g.parse(r[0])+"";return{c(){e=p("div")},m(n,i){b(n,e,i),e.innerHTML=t},p:h,i:h,o:h,d(n){n&&m(e)}}}function Hr(r){return[`
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
`]}class qr extends U{constructor(e){super(),I(this,e,Hr,jr,A,{})}}function Pr(r){let e,t,n;return t=new yn({props:{routes:r[0]}}),{c(){e=p("div"),P(t.$$.fragment),v(e,"id","router"),v(e,"class","svelte-181d4p6")},m(i,s){b(i,e,s),H(t,e,null),n=!0},p:h,i(i){n||(z(t.$$.fragment,i),n=!0)},o(i){D(t.$$.fragment,i),n=!1},d(i){i&&m(e),q(t)}}}function Or(r){return[{"/":Pn,"/solution":Yn,"/solution/features":Wn,"/solution/scenarios":Vn,"/service":ni,"/documentation":ri,"/documentation/installation":ui,"/documentation/installation/system-requirements":mi,"/documentation/installation/setting-up":di,"/documentation/installation/external-config":ai,"/documentation/upgrade":yi,"/documentation/upgrade/checklist":vi,"/documentation/configuration/":Ci,"/documentation/configuration/alter-url":Ti,"/documentation/configuration/mssql-auth":Oi,"/documentation/configuration/windows-service":Zi,"/documentation/configuration/backend-integration":Ui,"/documentation/configuration/xsd-schema-validation":Gi,"/documentation/configuration/log4j-logging":Di,"/documentation/security":sr,"/documentation/security/client-auth":Yi,"/documentation/security/secure-endpoint-config":nr,"/documentation/security/ssl":lr,"/documentation/messaging":_r,"/documentation/messaging/first-steps":pr,"/documentation/messaging/testing-connectivity":Er,"/documentation/messaging/unconfigured-content-type":Ir,"/documentation/messaging/http-plain-messaging":wr,"/documentation/messaging/backend-web-service-integration":hr,"/documentation/messaging/purging":xr,"/downloads":Dr,"/contact":Br,"/imprint":qr}]}class Fr extends U{constructor(e){super(),I(this,e,Or,Pr,A,{})}}const Wr="/assets/logo.db89ed63.png";function Lt(r,e,t){const n=r.slice();return n[8]=e[t],n}function Ct(r){let e,t;return{c(){e=ke("svg"),t=ke("path"),v(t,"d","M8.25 4.5l7.5 7.5-7.5 7.5"),v(e,"fill","none"),v(e,"viewBox","0 0 24 24"),v(e,"stroke-width","2.5"),v(e,"stroke","currentColor"),v(e,"class","navigation-list-item__sub-icon svelte-1suezlb"),ae(e,"active",r[2])},m(n,i){b(n,e,i),y(e,t)},p(n,i){i&4&&ae(e,"active",n[2])},d(n){n&&m(e)}}}function zt(r){let e,t,n=r[0].subroutes,i=[];for(let a=0;a<n.length;a+=1)i[a]=Rt(Lt(r,n,a));const s=a=>D(i[a],1,1,()=>{i[a]=null});return{c(){e=p("ul");for(let a=0;a<i.length;a+=1)i[a].c();v(e,"class","navigation-list-item__sub-list svelte-1suezlb"),ae(e,"active",r[2])},m(a,l){b(a,e,l);for(let o=0;o<i.length;o+=1)i[o].m(e,null);t=!0},p(a,l){if(l&19){n=a[0].subroutes;let o;for(o=0;o<n.length;o+=1){const c=Lt(a,n,o);i[o]?(i[o].p(c,l),z(i[o],1)):(i[o]=Rt(c),i[o].c(),z(i[o],1),i[o].m(e,null))}for(he(),o=n.length;o<i.length;o+=1)s(o);fe()}(!t||l&4)&&ae(e,"active",a[2])},i(a){if(!t){for(let l=0;l<n.length;l+=1)z(i[l]);t=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)D(i[l]);t=!1},d(a){a&&m(e),Se(i,a)}}}function Rt(r){let e,t;return e=new nn({props:{navItem:r[8],activeRoute:r[1]}}),e.$on("setActive",r[4]),{c(){P(e.$$.fragment)},m(n,i){H(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.navItem=n[8]),i&2&&(s.activeRoute=n[1]),e.$set(s)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Zr(r){let e,t,n,i=r[0].text+"",s,a,l,o,c,u,w=r[0].subroutes&&Ct(r),d=r[0].subroutes&&zt(r);return{c(){e=p("li"),t=p("div"),n=p("span"),s=ue(i),a=N(),w&&w.c(),l=N(),d&&d.c(),v(t,"class","navigation-list-item__text svelte-1suezlb"),ae(t,"active",r[0].route===r[1]),v(e,"class","navigation-list-item")},m(f,x){b(f,e,x),y(e,t),y(t,n),y(n,s),y(t,a),w&&w.m(t,null),y(e,l),d&&d.m(e,null),o=!0,c||(u=[K(t,"click",r[3]),K(t,"keypress",r[5])],c=!0)},p(f,[x]){(!o||x&1)&&i!==(i=f[0].text+"")&&Le(s,i),f[0].subroutes?w?w.p(f,x):(w=Ct(f),w.c(),w.m(t,null)):w&&(w.d(1),w=null),(!o||x&3)&&ae(t,"active",f[0].route===f[1]),f[0].subroutes?d?(d.p(f,x),x&1&&z(d,1)):(d=zt(f),d.c(),z(d,1),d.m(e,null)):d&&(he(),D(d,1,1,()=>{d=null}),fe())},i(f){o||(z(d),o=!0)},o(f){D(d),o=!1},d(f){f&&m(e),w&&w.d(),d&&d.d(),c=!1,ie(u)}}}function Qr(r,e,t){let n;const i=Ve();let{navItem:s}=e,{activeRoute:a}=e;function l(w){w.stopPropagation(),c(),i("setActive",s.route)}function o({detail:w}){c(),i("setActive",w)}function c(){const w=s.subroutes===void 0;window.innerWidth<640&&w&&xe.set(!1)}function u(w){se.call(this,r,w)}return r.$$set=w=>{"navItem"in w&&t(0,s=w.navItem),"activeRoute"in w&&t(1,a=w.activeRoute)},r.$$.update=()=>{r.$$.dirty&3&&t(2,n=a.includes(s.route))},[s,a,n,l,o,u]}class nn extends U{constructor(e){super(),I(this,e,Qr,Zr,A,{navItem:0,activeRoute:1})}}function Dt(r,e,t){const n=r.slice();return n[4]=e[t],n}function Xt(r){let e,t;return e=new nn({props:{navItem:r[4],activeRoute:r[1]}}),e.$on("setActive",r[2]),{c(){P(e.$$.fragment)},m(n,i){H(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.navItem=n[4]),i&2&&(s.activeRoute=n[1]),e.$set(s)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Vr(r){let e,t,n=r[0],i=[];for(let a=0;a<n.length;a+=1)i[a]=Xt(Dt(r,n,a));const s=a=>D(i[a],1,1,()=>{i[a]=null});return{c(){e=p("ul");for(let a=0;a<i.length;a+=1)i[a].c();v(e,"class","the-navigation__list svelte-1o65xxw")},m(a,l){b(a,e,l);for(let o=0;o<i.length;o+=1)i[o].m(e,null);t=!0},p(a,[l]){if(l&7){n=a[0];let o;for(o=0;o<n.length;o+=1){const c=Dt(a,n,o);i[o]?(i[o].p(c,l),z(i[o],1)):(i[o]=Xt(c),i[o].c(),z(i[o],1),i[o].m(e,null))}for(he(),o=n.length;o<i.length;o+=1)s(o);fe()}},i(a){if(!t){for(let l=0;l<n.length;l+=1)z(i[l]);t=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)D(i[l]);t=!1},d(a){a&&m(e),Se(i,a)}}}function Gr(r,e,t){const n=Ve();let{navItems:i}=e,{activeItem:s}=e;function a({detail:l}){n("setActive",l)}return r.$$set=l=>{"navItems"in l&&t(0,i=l.navItems),"activeItem"in l&&t(1,s=l.activeItem)},[i,s,a]}class Mt extends U{constructor(e){super(),I(this,e,Gr,Vr,A,{navItems:0,activeItem:1})}}function Jr(r){let e,t,n,i,s;return t=new Mt({props:{navItems:r[1],activeItem:r[0]}}),t.$on("setActive",r[3]),i=new Mt({props:{navItems:r[2],activeItem:r[0]}}),i.$on("setActive",r[3]),{c(){e=p("nav"),P(t.$$.fragment),n=N(),P(i.$$.fragment),v(e,"id","the-navigation"),v(e,"class","svelte-79l316")},m(a,l){b(a,e,l),H(t,e,null),y(e,n),H(i,e,null),s=!0},p(a,[l]){const o={};l&1&&(o.activeItem=a[0]),t.$set(o);const c={};l&1&&(c.activeItem=a[0]),i.$set(c)},i(a){s||(z(t.$$.fragment,a),z(i.$$.fragment,a),s=!0)},o(a){D(t.$$.fragment,a),D(i.$$.fragment,a),s=!1},d(a){a&&m(e),q(t),q(i)}}}function Kr(r,e,t){let n;We(r,vn,o=>t(4,n=o));const i=[{route:"/",text:"Home"},{route:"/solution",text:"Solution",subroutes:[{route:"/solution/features",text:"Features"},{route:"/solution/scenarios",text:"Scenarios"}]},{route:"/service",text:"Service"},{route:"/documentation",text:"Documentation",subroutes:[{route:"/documentation/installation",text:"Installation",subroutes:[{route:"/documentation/installation/system-requirements",text:"System Requirements"},{route:"/documentation/installation/setting-up",text:"Setting up NEXUSe2e"},{route:"/documentation/installation/external-config",text:"External Configuration Folder"}]},{route:"/documentation/upgrade",text:"Upgrade",subroutes:[{route:"/documentation/upgrade/checklist",text:"Upgrade Checklist"}]},{route:"/documentation/configuration",text:"Configuration",subroutes:[{route:"/documentation/configuration/alter-url",text:"How to Alter the NEXUSe2e URL"},{route:"/documentation/configuration/mssql-auth",text:"Integrated Authentication with MSSQL"},{route:"/documentation/configuration/windows-service",text:"Windows Service"},{route:"/documentation/configuration/backend-integration",text:"NEXUSe2e Backend Integration"},{route:"/documentation/configuration/xsd-schema-validation",text:"XSD - Schema Validation"},{route:"/documentation/configuration/log4j-logging",text:"Logging with Log4j 2"}]},{route:"/documentation/security",text:"Security",subroutes:[{route:"/documentation/security/client-auth",text:"Client Authentication"},{route:"/documentation/security/secure-endpoint-config",text:"Configure a secure web service endpoint"},{route:"/documentation/security/ssl",text:"SSL"}]},{route:"/documentation/messaging",text:"Messaging",subroutes:[{route:"/documentation/messaging/first-steps",text:"First Steps in Messaging"},{route:"/documentation/messaging/testing-connectivity",text:"Testing Connectivity"},{route:"/documentation/messaging/unconfigured-content-type",text:"Unconfigured Content Type"},{route:"/documentation/messaging/http-plain-messaging",text:"HTTP Plain Messaging"},{route:"/documentation/messaging/backend-web-service-integration",text:"Backend Web Service Integration"},{route:"/documentation/messaging/purging",text:"Conversation / Message Purging"},{route:"/documentation/messaging/comet",text:"NEXUSe2e - comet"}]}]},{route:"/downloads",text:"Downloads"}],s=[{route:"/contact",text:"Contact"},{route:"/imprint",text:"Legal Notices / Impressum"}];let a=n;function l({detail:o}){t(0,a=o),Gt(o)}return[a,i,s,l]}class Yr extends U{constructor(e){super(),I(this,e,Kr,Jr,A,{})}}function es(r){let e,t,n,i,s,a,l,o,c,u;return l=new Yr({}),{c(){e=p("div"),t=p("aside"),n=p("img"),s=N(),a=p("div"),P(l.$$.fragment),oe(n.src,i=Wr)||v(n,"src",i),v(n,"alt","nexus logo"),v(n,"class","the-navigation-drawer__logo svelte-1nk0iid"),v(a,"class","the-navigation-drawer__content svelte-1nk0iid"),v(t,"id","the-navigation-drawer"),v(t,"class","svelte-1nk0iid"),v(e,"class","the-navigation-drawer__overlay svelte-1nk0iid"),ae(e,"active",r[0])},m(w,d){b(w,e,d),y(e,t),y(t,n),y(t,s),y(t,a),H(l,a,null),o=!0,c||(u=[K(n,"click",r[2]),K(n,"keypress",r[5]),K(t,"click",ts),K(t,"keypress",r[4]),K(e,"click",r[1]),K(e,"keypress",r[3])],c=!0)},p(w,[d]){(!o||d&1)&&ae(e,"active",w[0])},i(w){o||(z(l.$$.fragment,w),o=!0)},o(w){D(l.$$.fragment,w),o=!1},d(w){w&&m(e),q(l),c=!1,ie(u)}}}const ts=r=>r.stopPropagation();function ns(r,e,t){let n;We(r,xe,c=>t(0,n=c));function i(){xe.set(!1)}function s(){Gt("/")}function a(c){se.call(this,r,c)}function l(c){se.call(this,r,c)}function o(c){se.call(this,r,c)}return[n,i,s,a,l,o]}class is extends U{constructor(e){super(),I(this,e,ns,es,A,{})}}function rs(r){let e,t,n,i,s,a,l,o;return t=new is({}),s=new pn({}),l=new Fr({}),{c(){e=p("main"),P(t.$$.fragment),n=N(),i=p("div"),P(s.$$.fragment),a=N(),P(l.$$.fragment),v(i,"id","content"),v(i,"class","svelte-1hx8wd3"),v(e,"class","svelte-1hx8wd3")},m(c,u){b(c,e,u),H(t,e,null),y(e,n),y(e,i),H(s,i,null),y(i,a),H(l,i,null),o=!0},p:h,i(c){o||(z(t.$$.fragment,c),z(s.$$.fragment,c),z(l.$$.fragment,c),o=!0)},o(c){D(t.$$.fragment,c),D(s.$$.fragment,c),D(l.$$.fragment,c),o=!1},d(c){c&&m(e),q(t),q(s),q(l)}}}class ss extends U{constructor(e){super(),I(this,e,null,rs,A,{})}}new ss({target:document.getElementById("app")});
