(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function _(){}function Wt(r,e){for(const t in e)r[t]=e[t];return r}function qt(r){return r()}function ht(){return Object.create(null)}function fe(r){r.forEach(qt)}function Ye(r){return typeof r=="function"}function H(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Pe;function Oe(r,e){return Pe||(Pe=document.createElement("a")),Pe.href=e,r===Pe.href}function pn(r){return Object.keys(r).length===0}function Vt(r,...e){if(r==null)return _;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ke(r,e,t){r.$$.on_destroy.push(Vt(e,t))}function I(r,e){r.appendChild(e)}function h(r,e,t){r.insertBefore(e,t||null)}function d(r){r.parentNode.removeChild(r)}function Te(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function g(r){return document.createElement(r)}function Ie(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function ve(r){return document.createTextNode(r)}function y(){return ve(" ")}function et(){return ve("")}function re(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function C(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function mn(r){return Array.from(r.childNodes)}function Ue(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Me(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ye(r,e,t){r.classList[t?"add":"remove"](e)}function gn(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}class Qe{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Ie(t.nodeName):this.e=g(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function We(r,e){return new r(e)}let Le;function Ne(r){Le=r}function tt(){if(!Le)throw new Error("Function called outside component initialization");return Le}function wn(r){tt().$$.after_update.push(r)}function vn(r){tt().$$.on_destroy.push(r)}function nt(){const r=tt();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const o=gn(e,t,{cancelable:n});return i.slice().forEach(s=>{s.call(r,o)}),!o.defaultPrevented}return!0}}function me(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Ce=[],ft=[],He=[],pt=[],Gt=Promise.resolve();let Ze=!1;function Qt(){Ze||(Ze=!0,Gt.then(Jt))}function Zt(){return Qt(),Gt}function Je(r){He.push(r)}const Ge=new Set;let De=0;function Jt(){const r=Le;do{for(;De<Ce.length;){const e=Ce[De];De++,Ne(e),yn(e.$$)}for(Ne(null),Ce.length=0,De=0;ft.length;)ft.pop()();for(let e=0;e<He.length;e+=1){const t=He[e];Ge.has(t)||(Ge.add(t),t())}He.length=0}while(Ce.length);for(;pt.length;)pt.pop()();Ze=!1,Ge.clear(),Ne(r)}function yn(r){if(r.fragment!==null){r.update(),fe(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Je)}}const Fe=new Set;let ke;function _e(){ke={r:0,c:[],p:ke}}function Se(){ke.r||fe(ke.c),ke=ke.p}function E(r,e){r&&r.i&&(Fe.delete(r),r.i(e))}function N(r,e,t,n){if(r&&r.o){if(Fe.has(r))return;Fe.add(r),ke.c.push(()=>{Fe.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function Yt(r,e){const t={},n={},i={$$scope:1};let o=r.length;for(;o--;){const s=r[o],a=e[o];if(a){for(const l in s)l in a||(n[l]=1);for(const l in a)i[l]||(t[l]=a[l],i[l]=1);r[o]=a}else for(const l in s)i[l]=1}for(const s in n)s in t||(t[s]=void 0);return t}function Kt(r){return typeof r=="object"&&r!==null?r:{}}function D(r){r&&r.c()}function P(r,e,t,n){const{fragment:i,after_update:o}=r.$$;i&&i.m(e,t),n||Je(()=>{const s=r.$$.on_mount.map(qt).filter(Ye);r.$$.on_destroy?r.$$.on_destroy.push(...s):fe(s),r.$$.on_mount=[]}),o.forEach(Je)}function M(r,e){const t=r.$$;t.fragment!==null&&(fe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function bn(r,e){r.$$.dirty[0]===-1&&(Ce.push(r),Qt(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function B(r,e,t,n,i,o,s,a=[-1]){const l=Le;Ne(r);const c=r.$$={fragment:null,ctx:[],props:o,update:_,not_equal:i,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ht(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(m,w,...p)=>{const f=p.length?p[0]:w;return c.ctx&&i(c.ctx[m],c.ctx[m]=f)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](f),u&&bn(r,m)),w}):[],c.update(),u=!0,fe(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const m=mn(e.target);c.fragment&&c.fragment.l(m),m.forEach(d)}else c.fragment&&c.fragment.c();e.intro&&E(r.$$.fragment),P(r,e.target,e.anchor,e.customElement),Jt()}Ne(l)}class O{$destroy(){M(this,1),this.$destroy=_}$on(e,t){if(!Ye(t))return _;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!pn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kn="/assets/nexus_header.ba62d497.png",Ee=[];function en(r,e){return{subscribe:it(r,e).subscribe}}function it(r,e=_){let t;const n=new Set;function i(a){if(H(r,a)&&(r=a,t)){const l=!Ee.length;for(const c of n)c[1](),Ee.push(c,r);if(l){for(let c=0;c<Ee.length;c+=2)Ee[c][0](Ee[c+1]);Ee.length=0}}}function o(a){i(a(r))}function s(a,l=_){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||_),a(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:o,subscribe:s}}function tn(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,o=e.length<2;return en(t,s=>{let a=!1;const l=[];let c=0,u=_;const m=()=>{if(c)return;u();const p=e(n?l[0]:l,s);o?s(p):u=Ye(p)?p:_},w=i.map((p,f)=>Vt(p,U=>{l[f]=U,c&=~(1<<f),a&&m()},()=>{c|=1<<f}));return a=!0,m(),function(){fe(w),u()}})}const Xe=it(window.innerWidth>=640);function _n(r){let e,t,n,i,o,s,a,l,c;return{c(){e=g("div"),t=g("img"),i=y(),o=g("button"),o.innerHTML='<svg class="the-app-bar__menu-button-icon svelte-1sfxt2l" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',s=y(),a=g("div"),a.innerHTML=`<div class="the-app-bar__heading-header svelte-1sfxt2l">The proven open source</div> 
    <div class="the-app-bar__heading-sub-header svelte-1sfxt2l">B2B solution</div>`,Oe(t.src,n=kn)||C(t,"src",n),C(t,"alt","nexus header"),C(t,"class","the-app-bar__img svelte-1sfxt2l"),C(o,"aria-label","menu-button"),C(o,"class","the-app-bar__menu-button svelte-1sfxt2l"),C(a,"class","the-app-bar__heading svelte-1sfxt2l"),C(e,"id","the-app-bar"),C(e,"class","svelte-1sfxt2l")},m(u,m){h(u,e,m),I(e,t),I(e,i),I(e,o),I(e,s),I(e,a),l||(c=re(o,"click",r[0]),l=!0)},p:_,i:_,o:_,d(u){u&&d(e),l=!1,c()}}}function Sn(r,e,t){let n;Ke(r,Xe,o=>t(1,n=o));function i(){Xe.set(!n)}return[i]}class xn extends O{constructor(e){super(),B(this,e,Sn,_n,H,{})}}function Re(r){if(!r)throw Error("Parameter args is required");if(!r.component==!r.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(r.component&&(r.asyncComponent=()=>Promise.resolve(r.component)),typeof r.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(r.conditions){Array.isArray(r.conditions)||(r.conditions=[r.conditions]);for(let t=0;t<r.conditions.length;t++)if(!r.conditions[t]||typeof r.conditions[t]!="function")throw Error("Invalid parameter conditions["+t+"]")}return r.loadingComponent&&(r.asyncComponent.loading=r.loadingComponent,r.asyncComponent.loadingParams=r.loadingParams||void 0),{component:r.asyncComponent,userData:r.userData,conditions:r.conditions&&r.conditions.length?r.conditions:void 0,props:r.props&&Object.keys(r.props).length?r.props:{},_sveltesparouter:!0}}function $n(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,i,o,s=[],a="",l=r.split("/");for(l[0]||l.shift();i=l.shift();)t=i[0],t==="*"?(s.push("wild"),a+="/(.*)"):t===":"?(n=i.indexOf("?",1),o=i.indexOf(".",1),s.push(i.substring(1,~n?n:~o?o:i.length)),a+=!!~n&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(a+=(~n?"?":"")+"\\"+i.substring(o))):a+="/"+i;return{keys:s,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function En(r){let e,t,n;const i=[r[2]];var o=r[0];function s(a){let l={};for(let c=0;c<i.length;c+=1)l=Wt(l,i[c]);return{props:l}}return o&&(e=We(o,s()),e.$on("routeEvent",r[7])),{c(){e&&D(e.$$.fragment),t=et()},m(a,l){e&&P(e,a,l),h(a,t,l),n=!0},p(a,l){const c=l&4?Yt(i,[Kt(a[2])]):{};if(o!==(o=a[0])){if(e){_e();const u=e;N(u.$$.fragment,1,0,()=>{M(u,1)}),Se()}o?(e=We(o,s()),e.$on("routeEvent",a[7]),D(e.$$.fragment),E(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(a){n||(e&&E(e.$$.fragment,a),n=!0)},o(a){e&&N(e.$$.fragment,a),n=!1},d(a){a&&d(t),e&&M(e,a)}}}function Tn(r){let e,t,n;const i=[{params:r[1]},r[2]];var o=r[0];function s(a){let l={};for(let c=0;c<i.length;c+=1)l=Wt(l,i[c]);return{props:l}}return o&&(e=We(o,s()),e.$on("routeEvent",r[6])),{c(){e&&D(e.$$.fragment),t=et()},m(a,l){e&&P(e,a,l),h(a,t,l),n=!0},p(a,l){const c=l&6?Yt(i,[l&2&&{params:a[1]},l&4&&Kt(a[2])]):{};if(o!==(o=a[0])){if(e){_e();const u=e;N(u.$$.fragment,1,0,()=>{M(u,1)}),Se()}o?(e=We(o,s()),e.$on("routeEvent",a[6]),D(e.$$.fragment),E(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(a){n||(e&&E(e.$$.fragment,a),n=!0)},o(a){e&&N(e.$$.fragment,a),n=!1},d(a){a&&d(t),e&&M(e,a)}}}function An(r){let e,t,n,i;const o=[Tn,En],s=[];function a(l,c){return l[1]?0:1}return e=a(r),t=s[e]=o[e](r),{c(){t.c(),n=et()},m(l,c){s[e].m(l,c),h(l,n,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?s[e].p(l,c):(_e(),N(s[u],1,1,()=>{s[u]=null}),Se(),t=s[e],t?t.p(l,c):(t=s[e]=o[e](l),t.c()),E(t,1),t.m(n.parentNode,n))},i(l){i||(E(t),i=!0)},o(l){N(t),i=!1},d(l){s[e].d(l),l&&d(n)}}}function mt(){const r=window.location.href.indexOf("#/");let e=r>-1?window.location.href.substr(r+1):"/";const t=e.indexOf("?");let n="";return t>-1&&(n=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:n}}const rt=en(null,function(e){e(mt());const t=()=>{e(mt())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),Cn=tn(rt,r=>r.location);tn(rt,r=>r.querystring);const gt=it(void 0);async function ot(r){if(!r||r.length<1||r.charAt(0)!="/"&&r.indexOf("#/")!==0)throw Error("Invalid parameter location");await Zt(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(r.charAt(0)=="#"?"":"#")+r}function Un(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Nn(r,e,t){let{routes:n={}}=e,{prefix:i=""}=e,{restoreScrollState:o=!1}=e;class s{constructor(A,X){if(!X||typeof X!="function"&&(typeof X!="object"||X._sveltesparouter!==!0))throw Error("Invalid component object");if(!A||typeof A=="string"&&(A.length<1||A.charAt(0)!="/"&&A.charAt(0)!="*")||typeof A=="object"&&!(A instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:W,keys:b}=$n(A);this.path=A,typeof X=="object"&&X._sveltesparouter===!0?(this.component=X.component,this.conditions=X.conditions||[],this.userData=X.userData,this.props=X.props||{}):(this.component=()=>Promise.resolve(X),this.conditions=[],this.props={}),this._pattern=W,this._keys=b}match(A){if(i){if(typeof i=="string")if(A.startsWith(i))A=A.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const z=A.match(i);if(z&&z[0])A=A.substr(z[0].length)||"/";else return null}}const X=this._pattern.exec(A);if(X===null)return null;if(this._keys===!1)return X;const W={};let b=0;for(;b<this._keys.length;){try{W[this._keys[b]]=decodeURIComponent(X[b+1]||"")||null}catch{W[this._keys[b]]=null}b++}return W}async checkConditions(A){for(let X=0;X<this.conditions.length;X++)if(!await this.conditions[X](A))return!1;return!0}}const a=[];n instanceof Map?n.forEach((L,A)=>{a.push(new s(A,L))}):Object.keys(n).forEach(L=>{a.push(new s(L,n[L]))});let l=null,c=null,u={};const m=nt();async function w(L,A){await Zt(),m(L,A)}let p=null,f=null;o&&(f=L=>{L.state&&(L.state.__svelte_spa_router_scrollY||L.state.__svelte_spa_router_scrollX)?p=L.state:p=null},window.addEventListener("popstate",f),wn(()=>{Un(p)}));let U=null,$=null;const j=rt.subscribe(async L=>{U=L;let A=0;for(;A<a.length;){const X=a[A].match(L.location);if(!X){A++;continue}const W={route:a[A].path,location:L.location,querystring:L.querystring,userData:a[A].userData,params:X&&typeof X=="object"&&Object.keys(X).length?X:null};if(!await a[A].checkConditions(W)){t(0,l=null),$=null,w("conditionsFailed",W);return}w("routeLoading",Object.assign({},W));const b=a[A].component;if($!=b){b.loading?(t(0,l=b.loading),$=b,t(1,c=b.loadingParams),t(2,u={}),w("routeLoaded",Object.assign({},W,{component:l,name:l.name,params:c}))):(t(0,l=null),$=null);const z=await b();if(L!=U)return;t(0,l=z&&z.default||z),$=b}X&&typeof X=="object"&&Object.keys(X).length?t(1,c=X):t(1,c=null),t(2,u=a[A].props),w("routeLoaded",Object.assign({},W,{component:l,name:l.name,params:c})).then(()=>{gt.set(c)});return}t(0,l=null),$=null,gt.set(void 0)});vn(()=>{j(),f&&window.removeEventListener("popstate",f)});function q(L){me.call(this,r,L)}function F(L){me.call(this,r,L)}return r.$$set=L=>{"routes"in L&&t(3,n=L.routes),"prefix"in L&&t(4,i=L.prefix),"restoreScrollState"in L&&t(5,o=L.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[l,c,u,n,i,o,q,F]}class In extends O{constructor(e){super(),B(this,e,Nn,An,H,{routes:3,prefix:4,restoreScrollState:5})}}function Ln(r){let e,t,n;return{c(){e=g("div"),t=g("img"),Oe(t.src,n=r[0])||C(t,"src",n),C(t,"alt",r[1]),C(t,"class","img svelte-i49qvk"),Me(t,"height",`${r[2]}px`),C(e,"class","img-container svelte-i49qvk"),Me(e,"justify-content",r[3])},m(i,o){h(i,e,o),I(e,t)},p(i,[o]){o&1&&!Oe(t.src,n=i[0])&&C(t,"src",n),o&2&&C(t,"alt",i[1]),o&4&&Me(t,"height",`${i[2]}px`),o&8&&Me(e,"justify-content",i[3])},i:_,o:_,d(i){i&&d(e)}}}function Xn(r,e,t){let n,{img:i}=e,{alt:o=""}=e,{height:s="300"}=e,{position:a="center"}=e;return r.$$set=l=>{"img"in l&&t(0,i=l.img),"alt"in l&&t(1,o=l.alt),"height"in l&&t(2,s=l.height),"position"in l&&t(4,a=l.position)},r.$$.update=()=>{r.$$.dirty&16&&t(3,n={left:"flex-start",center:"center",right:"flex-end"}[a])},[i,o,s,n,a]}class G extends O{constructor(e){super(),B(this,e,Xn,Ln,H,{img:0,alt:1,height:2,position:4})}}function nn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ae=nn();function Pn(r){Ae=r}const Mn=/[&<>"']/,Dn=/[&<>"']/g,Rn=/[<>"']|&(?!#?\w+;)/,jn=/[<>"']|&(?!#?\w+;)/g,zn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wt=r=>zn[r];function K(r,e){if(e){if(Mn.test(r))return r.replace(Dn,wt)}else if(Rn.test(r))return r.replace(jn,wt);return r}const Hn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function rn(r){return r.replace(Hn,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Fn=/(^|[^\[])\^/g;function Y(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(Fn,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const Bn=/[^\w:]/g,On=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function vt(r,e,t){if(r){let n;try{n=decodeURIComponent(rn(t)).replace(Bn,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!On.test(t)&&(t=Gn(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const je={},Wn=/^[^:]+:\/*[^/]*$/,qn=/^([^:]+:)[\s\S]*$/,Vn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Gn(r,e){je[" "+r]||(Wn.test(r)?je[" "+r]=r+"/":je[" "+r]=Be(r,"/",!0)),r=je[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(qn,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(Vn,"$1")+e:r+e}const qe={exec:function(){}};function de(r){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}function yt(r,e){const t=r.replace(/\|/g,(o,s,a)=>{let l=!1,c=s;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Be(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const o=r.charAt(n-i-1);if(o===e&&!t)i++;else if(o!==e&&t)i++;else break}return r.slice(0,n-i)}function Qn(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function on(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function bt(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function kt(r,e,t,n){const i=e.href,o=e.title?K(e.title):null,s=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:i,title:o,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:o,text:K(s)}}function Zn(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class st{constructor(e){this.options=e||Ae}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Be(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Zn(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=Be(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,o,s,a,l,c,u,m,w,p,f,U=t[1].trim();const $=U.length>1,j={type:"list",raw:"",ordered:$,start:$?+U.slice(0,-1):"",loose:!1,items:[]};U=$?`\\d{1,9}\\${U.slice(-1)}`:`\\${U}`,this.options.pedantic&&(U=$?U:"[*+-]");const q=new RegExp(`^( {0,3}${U})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(f=!1,!(!(t=q.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],m=e.split(`
`,1)[0],this.options.pedantic?(s=2,p=u.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,p=u.slice(s),s+=t[1].length),l=!1,!u&&/^ *$/.test(m)&&(n+=m+`
`,e=e.substring(m.length+1),f=!0),!f){const L=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),X=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),W=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);for(;e&&(w=e.split(`
`,1)[0],u=w,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(u)||W.test(u)||L.test(u)||A.test(e)));){if(u.search(/[^ ]/)>=s||!u.trim())p+=`
`+u.slice(s);else if(!l)p+=`
`+u;else break;!l&&!u.trim()&&(l=!0),n+=w+`
`,e=e.substring(w.length+1)}}j.loose||(c?j.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(p),i&&(o=i[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),j.items.push({type:"list_item",raw:n,task:!!i,checked:o,loose:!1,text:p}),j.raw+=n}j.items[j.items.length-1].raw=n.trimRight(),j.items[j.items.length-1].text=p.trimRight(),j.raw=j.raw.trimRight();const F=j.items.length;for(a=0;a<F;a++){this.lexer.state.top=!1,j.items[a].tokens=this.lexer.blockTokens(j.items[a].text,[]);const L=j.items[a].tokens.filter(X=>X.type==="space"),A=L.every(X=>{const W=X.raw.split("");let b=0;for(const z of W)if(z===`
`&&(b+=1),b>1)return!0;return!1});!j.loose&&L.length&&A&&(j.loose=!0,j.items[a].loose=!0)}return j}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):K(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:yt(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,o,s,a,l;for(o=0;o<i;o++)/^ *-+: *$/.test(n.align[o])?n.align[o]="right":/^ *:-+: *$/.test(n.align[o])?n.align[o]="center":/^ *:-+ *$/.test(n.align[o])?n.align[o]="left":n.align[o]=null;for(i=n.rows.length,o=0;o<i;o++)n.rows[o]=yt(n.rows[o],n.header.length).map(c=>({text:c}));for(i=n.header.length,s=0;s<i;s++)n.header[s].tokens=this.lexer.inline(n.header[s].text);for(i=n.rows.length,s=0;s<i;s++)for(l=n.rows[s],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:K(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):K(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=Be(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=Qn(t[2],"()");if(s>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),kt(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return kt(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=i[1]||i[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const s=i[0].length-1;let a,l,c=s,u=0;const m=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(m.lastIndex=0,t=t.slice(-1*e.length+s);(i=m.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=a.length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){u+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+u),Math.min(s,l)%2){const p=e.slice(1,s+i.index+l);return{type:"em",raw:e.slice(0,s+i.index+l+1),text:p,tokens:this.lexer.inlineTokens(p)}}const w=e.slice(2,s+i.index+l-1);return{type:"strong",raw:e.slice(0,s+i.index+l+1),text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return i&&o&&(n=n.substring(1,n.length-1)),n=K(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,o;return n[2]==="@"?(i=K(this.options.mangle?t(n[1]):n[1]),o="mailto:"+i):(i=K(n[1]),o=i),{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=K(this.options.mangle?t(n[0]):n[0]),o="mailto:"+i;else{let s;do s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(s!==n[0]);i=K(n[0]),n[1]==="www."?o="http://"+i:o=i}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):K(n[0]):n[0]:i=K(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const R={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:qe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};R._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;R._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;R.def=Y(R.def).replace("label",R._label).replace("title",R._title).getRegex();R.bullet=/(?:[*+-]|\d{1,9}[.)])/;R.listItemStart=Y(/^( *)(bull) */).replace("bull",R.bullet).getRegex();R.list=Y(R.list).replace(/bull/g,R.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+R.def.source+")").getRegex();R._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";R._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;R.html=Y(R.html,"i").replace("comment",R._comment).replace("tag",R._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();R.paragraph=Y(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex();R.blockquote=Y(R.blockquote).replace("paragraph",R.paragraph).getRegex();R.normal=de({},R);R.gfm=de({},R.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});R.gfm.table=Y(R.gfm.table).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex();R.gfm.paragraph=Y(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",R.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex();R.pedantic=de({},R.normal,{html:Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",R._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qe,paragraph:Y(R.normal._paragraph).replace("hr",R.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",R.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const T={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:qe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:qe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};T._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";T.punctuation=Y(T.punctuation).replace(/punctuation/g,T._punctuation).getRegex();T.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;T.escapedEmSt=/\\\*|\\_/g;T._comment=Y(R._comment).replace("(?:-->|$)","-->").getRegex();T.emStrong.lDelim=Y(T.emStrong.lDelim).replace(/punct/g,T._punctuation).getRegex();T.emStrong.rDelimAst=Y(T.emStrong.rDelimAst,"g").replace(/punct/g,T._punctuation).getRegex();T.emStrong.rDelimUnd=Y(T.emStrong.rDelimUnd,"g").replace(/punct/g,T._punctuation).getRegex();T._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;T._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;T._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;T.autolink=Y(T.autolink).replace("scheme",T._scheme).replace("email",T._email).getRegex();T._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;T.tag=Y(T.tag).replace("comment",T._comment).replace("attribute",T._attribute).getRegex();T._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;T._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;T._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;T.link=Y(T.link).replace("label",T._label).replace("href",T._href).replace("title",T._title).getRegex();T.reflink=Y(T.reflink).replace("label",T._label).replace("ref",R._label).getRegex();T.nolink=Y(T.nolink).replace("ref",R._label).getRegex();T.reflinkSearch=Y(T.reflinkSearch,"g").replace("reflink",T.reflink).replace("nolink",T.nolink).getRegex();T.normal=de({},T);T.pedantic=de({},T.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Y(/^!?\[(label)\]\((.*?)\)/).replace("label",T._label).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",T._label).getRegex()});T.gfm=de({},T.normal,{escape:Y(T.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});T.gfm.url=Y(T.gfm.url,"i").replace("email",T.gfm._extended_email).getRegex();T.breaks=de({},T.gfm,{br:Y(T.br).replace("{2,}","*").getRegex(),text:Y(T.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Jn(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function _t(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class ge{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ae,this.options.tokenizer=this.options.tokenizer||new st,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:R.normal,inline:T.normal};this.options.pedantic?(t.block=R.pedantic,t.inline=T.pedantic):this.options.gfm&&(t.block=R.gfm,this.options.breaks?t.inline=T.breaks:t.inline=T.gfm),this.tokenizer.rules=t}static get rules(){return{block:R,inline:T}}static lex(e,t){return new ge(t).lex(e)}static lexInline(e,t){return new ge(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let n,i,o,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),s=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,o,s=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+bt("a",a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+bt("a",a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,s,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,_t)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,_t))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const m=e.slice(1);let w;this.options.extensions.startInline.forEach(function(p){w=p.call({lexer:this},m),typeof w=="number"&&w>=0&&(u=Math.min(u,w))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(o,Jn)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class at{constructor(e){this.options=e||Ae}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(e,i);o!=null&&o!==e&&(n=!0,e=o)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+K(i,!0)+'">'+(n?e:K(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:K(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,i){if(this.options.headerIds){const o=this.options.headerPrefix+i.slug(n);return`<h${t} id="${o}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=vt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+K(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=vt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class sn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class an{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class he{constructor(e){this.options=e||Ae,this.options.renderer=this.options.renderer||new at,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new sn,this.slugger=new an}static parse(e,t){return new he(t).parse(e)}static parseInline(e,t){return new he(t).parseInline(e)}parse(e,t=!0){let n="",i,o,s,a,l,c,u,m,w,p,f,U,$,j,q,F,L,A,X;const W=e.length;for(i=0;i<W;i++){if(p=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(X=this.options.extensions.renderers[p.type].call({parser:this},p),X!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){n+=X||"";continue}switch(p.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(p.tokens),p.depth,rn(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(m="",u="",a=p.header.length,o=0;o<a;o++)u+=this.renderer.tablecell(this.parseInline(p.header[o].tokens),{header:!0,align:p.align[o]});for(m+=this.renderer.tablerow(u),w="",a=p.rows.length,o=0;o<a;o++){for(c=p.rows[o],u="",l=c.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(c[s].tokens),{header:!1,align:p.align[s]});w+=this.renderer.tablerow(u)}n+=this.renderer.table(m,w);continue}case"blockquote":{w=this.parse(p.tokens),n+=this.renderer.blockquote(w);continue}case"list":{for(f=p.ordered,U=p.start,$=p.loose,a=p.items.length,w="",o=0;o<a;o++)q=p.items[o],F=q.checked,L=q.task,j="",q.task&&(A=this.renderer.checkbox(F),$?q.tokens.length>0&&q.tokens[0].type==="paragraph"?(q.tokens[0].text=A+" "+q.tokens[0].text,q.tokens[0].tokens&&q.tokens[0].tokens.length>0&&q.tokens[0].tokens[0].type==="text"&&(q.tokens[0].tokens[0].text=A+" "+q.tokens[0].tokens[0].text)):q.tokens.unshift({type:"text",text:A}):j+=A),j+=this.parse(q.tokens,$),w+=this.renderer.listitem(j,L,F);n+=this.renderer.list(w,f,U);continue}case"html":{n+=this.renderer.html(p.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(w=p.tokens?this.parseInline(p.tokens):p.text;i+1<W&&e[i+1].type==="text";)p=e[++i],w+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);n+=t?this.renderer.paragraph(w):w;continue}default:{const b='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(b);return}else throw new Error(b)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,o,s;const a=e.length;for(i=0;i<a;i++){if(o=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(s=this.options.extensions.renderers[o.type].call({parser:this},o),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){n+=s||"";continue}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{const l='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return n}}function v(r,e,t){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=de({},v.defaults,e||{}),on(e),t){const i=e.highlight;let o;try{o=ge.lex(r,e)}catch(l){return t(l)}const s=function(l){let c;if(!l)try{e.walkTokens&&v.walkTokens(o,e.walkTokens),c=he.parse(o,e)}catch(u){l=u}return e.highlight=i,l?t(l):t(null,c)};if(!i||i.length<3||(delete e.highlight,!o.length))return s();let a=0;v.walkTokens(o,function(l){l.type==="code"&&(a++,setTimeout(()=>{i(l.text,l.lang,function(c,u){if(c)return s(c);u!=null&&u!==l.text&&(l.text=u,l.escaped=!0),a--,a===0&&s()})},0))}),a===0&&s();return}function n(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+K(i.message+"",!0)+"</pre>";throw i}try{const i=ge.lex(r,e);if(e.walkTokens){if(e.async)return Promise.all(v.walkTokens(i,e.walkTokens)).then(()=>he.parse(i,e)).catch(n);v.walkTokens(i,e.walkTokens)}return he.parse(i,e)}catch(i){n(i)}}v.options=v.setOptions=function(r){return de(v.defaults,r),Pn(v.defaults),v};v.getDefaults=nn;v.defaults=Ae;v.use=function(...r){const e=de({},...r),t=v.defaults.extensions||{renderers:{},childTokens:{}};let n;r.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const s=t.renderers?t.renderers[o.name]:null;s?t.renderers[o.name]=function(...a){let l=o.renderer.apply(this,a);return l===!1&&(l=s.apply(this,a)),l}:t.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[o.level]?t[o.level].unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}o.childTokens&&(t.childTokens[o.name]=o.childTokens)})),i.renderer){const o=v.defaults.renderer||new at;for(const s in i.renderer){const a=o[s];o[s]=(...l)=>{let c=i.renderer[s].apply(o,l);return c===!1&&(c=a.apply(o,l)),c}}e.renderer=o}if(i.tokenizer){const o=v.defaults.tokenizer||new st;for(const s in i.tokenizer){const a=o[s];o[s]=(...l)=>{let c=i.tokenizer[s].apply(o,l);return c===!1&&(c=a.apply(o,l)),c}}e.tokenizer=o}if(i.walkTokens){const o=v.defaults.walkTokens;e.walkTokens=function(s){let a=[];return a.push(i.walkTokens.call(this,s)),o&&(a=a.concat(o.call(this,s))),a}}n&&(e.extensions=t),v.setOptions(e)})};v.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(v,n)),n.type){case"table":{for(const i of n.header)t=t.concat(v.walkTokens(i.tokens,e));for(const i of n.rows)for(const o of i)t=t.concat(v.walkTokens(o.tokens,e));break}case"list":{t=t.concat(v.walkTokens(n.items,e));break}default:v.defaults.extensions&&v.defaults.extensions.childTokens&&v.defaults.extensions.childTokens[n.type]?v.defaults.extensions.childTokens[n.type].forEach(function(i){t=t.concat(v.walkTokens(n[i],e))}):n.tokens&&(t=t.concat(v.walkTokens(n.tokens,e)))}return t};v.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=de({},v.defaults,e||{}),on(e);try{const t=ge.lexInline(r,e);return e.walkTokens&&v.walkTokens(t,e.walkTokens),he.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+K(t.message+"",!0)+"</pre>";throw t}};v.Parser=he;v.parser=he.parse;v.Renderer=at;v.TextRenderer=sn;v.Lexer=ge;v.lexer=ge.lex;v.Tokenizer=st;v.Slugger=an;v.parse=v;v.options;v.setOptions;v.use;v.walkTokens;v.parseInline;he.parse;ge.lex;const Yn="/assets/nexus_on_java_11.86fd1c91.jpg";function Kn(r){let e,t,n=v.parse(r[0])+"",i,o,s,a,l=v.parse(r[1])+"",c;return o=new G({props:{img:Yn,alt:"nexus on java 11",height:"200px"}}),{c(){e=g("div"),t=new Qe(!1),i=y(),D(o.$$.fragment),s=y(),a=new Qe(!1),t.a=i,a.a=null},m(u,m){h(u,e,m),t.m(n,e),I(e,i),P(o,e,null),I(e,s),a.m(l,e),c=!0},p:_,i(u){c||(E(o.$$.fragment,u),c=!0)},o(u){N(o.$$.fragment,u),c=!1},d(u){u&&d(e),M(o)}}}function ei(r){return[`
  <h1>Home</h1>
  <hr>
  <h2 style="color: var(--color-brand)">NEXUSe2e is now running on Java 11</h2>
`,`
  ## NEXUSe2e 5.9 and Java 11
  
  All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK as production instances would now require an oracle JDK license to run. 
  `]}class ln extends O{constructor(e){super(),B(this,e,ei,Kn,H,{})}}const ti=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"}));function ni(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function ii(r){return[`
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
  `]}class cn extends O{constructor(e){super(),B(this,e,ii,ni,H,{})}}const ri=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"}));function oi(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function si(r){return[`
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
  `]}class un extends O{constructor(e){super(),B(this,e,si,oi,H,{})}}const ai=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),li="/assets/solution.b1b6bfc4.jpg";function ci(r){let e,t,n=v.parse(r[0])+"",i,o,s;return o=new G({props:{img:li,alt:"NEXUSe2e solution",height:"400px"}}),{c(){e=g("div"),t=new Qe(!1),i=y(),D(o.$$.fragment),t.a=i},m(a,l){h(a,e,l),t.m(n,e),I(e,i),P(o,e,null),s=!0},p:_,i(a){s||(E(o.$$.fragment,a),s=!0)},o(a){N(o.$$.fragment,a),s=!1},d(a){a&&d(e),M(o)}}}function ui(r){return[`
  # The Solution

  ---
  

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTPS, SMTP, SFTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `]}class dn extends O{constructor(e){super(),B(this,e,ui,ci,H,{})}}const di=Object.freeze(Object.defineProperty({__proto__:null,default:dn},Symbol.toStringTag,{value:"Module"}));function hi(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function fi(r){return[`
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
  - We design and realize integration with your business partners based on your individual requirements.
  - We develop the connection to the interfaces of your backend systems, whether those are standardized or proprietary.
  - We realize the connection to your business partners, whether they make use of standardized or proprietary frontend protocols.

  ## Custom Development
  - Do you need a special functionality that NEXUSe2e does not provide, yet? We offer to develop individual features for you, that meet either open source or closed source criteria.

  ## Support

  - We answer your questions and give you a hand on operational problems.
  - We assist you in using and configuring NEXUSe2e.
  - We help you to develop your own NEXUSe2e components.`]}class pi extends O{constructor(e){super(),B(this,e,fi,hi,H,{})}}function St(r,e,t){const n=r.slice();return n[4]=e[t],n}function xt(r){let e,t=r[4].text+"",n,i,o;function s(){return r[3](r[4])}return{c(){e=g("li"),n=ve(t)},m(a,l){h(a,e,l),I(e,n),i||(o=[re(e,"click",s),re(e,"keypress",r[2])],i=!0)},p(a,l){r=a,l&1&&t!==(t=r[4].text+"")&&Ue(n,t)},d(a){a&&d(e),i=!1,fe(o)}}}function mi(r){let e,t=r[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=xt(St(r,t,i));return{c(){e=g("ul");for(let i=0;i<n.length;i+=1)n[i].c()},m(i,o){h(i,e,o);for(let s=0;s<n.length;s+=1)n[s].m(e,null)},p(i,[o]){if(o&3){t=i[0];let s;for(s=0;s<t.length;s+=1){const a=St(i,t,s);n[s]?n[s].p(a,o):(n[s]=xt(a),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}},i:_,o:_,d(i){i&&d(e),Te(n,i)}}}function gi(r,e,t){let{subroutes:n=[]}=e;function i(a){ot(a)}function o(a){me.call(this,r,a)}const s=a=>i(a.link);return r.$$set=a=>{"subroutes"in a&&t(0,n=a.subroutes)},[n,i,o,s]}class hn extends O{constructor(e){super(),B(this,e,gi,mi,H,{subroutes:0})}}function wi(r){let e,t,n,i,o,s;return o=new hn({props:{subroutes:r[0]}}),{c(){e=g("h1"),e.textContent="Documentation",t=y(),n=g("hr"),i=y(),D(o.$$.fragment)},m(a,l){h(a,e,l),h(a,t,l),h(a,n,l),h(a,i,l),P(o,a,l),s=!0},p:_,i(a){s||(E(o.$$.fragment,a),s=!0)},o(a){N(o.$$.fragment,a),s=!1},d(a){a&&d(e),a&&d(t),a&&d(n),a&&d(i),M(o,a)}}}function vi(r){return[[{text:"Installation",link:"/documentation/installation"},{text:"Upgrade",link:"/documentation/upgrade"},{text:"Configuration",link:"/documentation/configuration"},{text:"Security",link:"/documentation/securtiy"},{text:"Messaging",link:"/documentation/messaging"}]]}class yi extends O{constructor(e){super(),B(this,e,vi,wi,H,{})}}function bi(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function ki(r){return[`
  # External Configuration Folder

  <hr>
  
  

As of NEXUSe2e 5.2.0, you can provide an external set of configuration files for your NEXUSe2e instance, allowing you to upgrade or reinstall without having to re-configure everything.

To get started with this, make a copy of the config-folder under <tomcat-location>/webapps/NEXUSe2e/WEB-INF/ . Place this copy somewhere convenient, you can remove all files except database.properties, bean.properties and machine_name.txt from it if you want to (there is also support for the logger-configuration, see below).

If you have just freshly installed NEXUSe2e, you will now want to make your configuration changes, specifically your database configuration in database.properties and editing the name of the instance in machine_name.txt, in this folder.

Then to get NEXUSe2e to use your external configuration, provide a JVM option named externalconfig which points to the folder holding your external configuration files.
How you do this varies a bit depending on how you installed your instance and what operating system you are using:

- If you have NEXUSe2e installed as a windows service, you need to go into the configuration program (located under \\bin\\ in your tomcat-folder, called <servicename>w.exe .e.g. tomcatw.exe if you did not change the service name while installing tomcat), navigate to the tab 'Java', and under 'Java Options' add an entry for the parameter.
- If you start your instance from the command line (e.g. via a script) or running linux you need to provide or edit your setenv.bat or setenv.sh file (located under \\bin\\ in your tomcat-folder). Windows uses the .bat file. Add the parameter here.

**Example:**  

1. Files placed in C:\\Example\\NEXUSe2e\\  
2. Navigate to C:\\Program FilesNEXUSe2e\\tomcat\\bin\\, launch tomcatw.exe .  
3. Add '-Dexternalconfig=C:\\Example\\NEXUSe2e' under Java Options.  
4. (Optional, depending on your setup) Now take your database-driver (if you need a specific one) and put it into the C:\\Program Files\\tomcat\\lib\\ folder (the specific path might vary depending on where and how you installed Tomcat - In general, you need this file to be available on the classpath, usually via the lib-folder of your webserver of choice. This way it is not part of the actual deployed NEXUSe2e, but of the webserver, and hence will not be deleted when you upgrade your NEXUSe2e installation. Specifically for this example, check that it in the tomcat-lib-folder as given above, not in \\tomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib\\ .





  `]}class _i extends O{constructor(e){super(),B(this,e,ki,bi,H,{})}}function Si(r){let e,t,n,i,o,s;return o=new hn({props:{subroutes:r[0]}}),{c(){e=g("h1"),e.textContent="Installation",t=y(),n=g("hr"),i=y(),D(o.$$.fragment)},m(a,l){h(a,e,l),h(a,t,l),h(a,n,l),h(a,i,l),P(o,a,l),s=!0},p:_,i(a){s||(E(o.$$.fragment,a),s=!0)},o(a){N(o.$$.fragment,a),s=!1},d(a){a&&d(e),a&&d(t),a&&d(n),a&&d(i),M(o,a)}}}function xi(r){return[[{text:"System Requirements",link:"/documentation/installation/system-requirements"},{text:"Setting up NEXUSe2e",link:"/documentation/installation/setting-up"},{text:"External Configuration",link:"/documentation/installation/external-config"}]]}class $i extends O{constructor(e){super(),B(this,e,xi,Si,H,{})}}function Ei(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function Ti(r){return[`
  # Setting up NEXUSe2e

  <hr>
  
  ## Installation



  ### Requirements

  The current version 5.x of NEXUSe2e requires:
  - Java 11 or higher <a href="https://jdk.java.net/archive/" target="_blank">Link</a>
  - Tomcat 9  <a href="https://tomcat.apache.org/" target="_blank">Link</a>
 
  NEXUSe2e server comes with an embedded <a href="https://db.apache.org/derby/" target="_blank" class="standard-link">Apache Derby</a> database, for evaluation and development use. We disadvise you from using the embedded database in a production environment. If you want to run NEXUSe2e server in a production environment, you also need:
  - An SQL database that can be accessed through JDBC (e.g. MS SQL Server, Oracle, DB2, MySQL, PostgreSQL)
  
  ### Installing Your Server
  - Download the WAR file from the Download section or directly from github <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank">Releases</a>.
  - Deploy the WAR file in your servlet container.
  
  >To deploy the WAR file please follow the instructions of your Servlet container/Web application server. For Tomcat the deployment is as easy as copying the WAR file into the *\\<Tomcat root>\\webapps* directory and starting Tomcat. This will expand the WAR and start the Web application.

  >The shipped configuration inside the WAR file will create a Derby database and pre-populate it with a basic sample configuration on first startup. The database will be created in the directory *\\<Tomcat root>\\NEXUSe2eDB*. This database is for testing purposes only.

  - Log in to the admin interface and configure the server.

  >Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine, the deployment path is the same as the war file name. Therefore its recommended the rename the downloaded war file to NEXUSe2e.war which leads to the following url: <a href="http://localhost:8080/NEXUSe2e" target="_blank">http://localhost:8080/NEXUSe2e</a>.

  >The default administration account is admin with password admin. The first step should be changing the password in the user management in the Web UI.

  Now you can configure the server for messaging. You may want to follow our First steps in the messaging section.
 `]}class Ai extends O{constructor(e){super(),B(this,e,Ti,Ei,H,{})}}function Ci(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function Ui(r){return[`
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
  `]}class Ni extends O{constructor(e){super(),B(this,e,Ui,Ci,H,{})}}function Ii(r){let e,t,n,i,o,s=v.parse(r[0])+"";return{c(){e=g("h1"),e.textContent="Upgrade",t=y(),n=g("hr"),i=y(),o=g("div")},m(a,l){h(a,e,l),h(a,t,l),h(a,n,l),h(a,i,l),h(a,o,l),o.innerHTML=s},p:_,i:_,o:_,d(a){a&&d(e),a&&d(t),a&&d(n),a&&d(i),a&&d(o)}}}function Li(r){return[`

  This page provides a brief checklist of the NEXUSe2e upgrade process. Please keep in mind that this is not meant to replace a full upgrade guide.

  ## Preparation

  - **Get the .war-file used for the update.**  
    Depending on your specific case you either want to download the official release from the <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank">NEXUSe2e Github Project</a>, you will have a .war-file which the NEXUSe2e support team provided, or your department or team has built a .war-file to use for the update.

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

  `]}class Xi extends O{constructor(e){super(),B(this,e,Li,Ii,H,{})}}const Pi="/assets/alterURL1.ec8d0877.jpg",Mi="/assets/alterURL2.1c2bdeda.jpg";function Di(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p;return i=new G({props:{img:Pi,alt:"nexus on java 11",height:"200px"}}),c=new G({props:{img:Mi,alt:"nexus on java 11",height:"200px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div")},m(f,U){h(f,e,U),e.innerHTML=t,h(f,n,U),P(i,f,U),h(f,o,U),h(f,s,U),s.innerHTML=a,h(f,l,U),P(c,f,U),h(f,u,U),h(f,m,U),m.innerHTML=w,p=!0},p:_,i(f){p||(E(i.$$.fragment,f),E(c.$$.fragment,f),p=!0)},o(f){N(i.$$.fragment,f),N(c.$$.fragment,f),p=!1},d(f){f&&d(e),f&&d(n),M(i,f),f&&d(o),f&&d(s),f&&d(l),M(c,f),f&&d(u),f&&d(m)}}}function Ri(r){return[`
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
  `]}class ji extends O{constructor(e){super(),B(this,e,Ri,Di,H,{})}}const zi="/assets/backend1.33169ffb.png";function Hi(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l;return i=new G({props:{img:zi,alt:"service",height:"200px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div")},m(c,u){h(c,e,u),e.innerHTML=t,h(c,n,u),P(i,c,u),h(c,o,u),h(c,s,u),s.innerHTML=a,l=!0},p:_,i(c){l||(E(i.$$.fragment,c),l=!0)},o(c){N(i.$$.fragment,c),l=!1},d(c){c&&d(e),c&&d(n),M(i,c),c&&d(o),c&&d(s)}}}function Fi(r){return[`
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

The last not very common option is using a database integration. There is a service and corresponding pipelet which provide a basic integration for inbound and outbound messages, based on the content of the specified table. From high level, it\u2019s the same as file transfer but not stored in the file system but a database table. This table is not part of NEXUSe2e and must be created manually and requires a predefined layout which is not configurable.

Another downside of this intermediate database table is the burst load you will generate on your partners systems. Every time the database is being polled it will generate burst of messages. The polling time is configurable for sure, but you have also keep an eye on your export services which should be somewhat synchronized with the NEXUSe2e service. Otherwise you can run into some interesting locking situations.

  
  `]}class Bi extends O{constructor(e){super(),B(this,e,Fi,Hi,H,{})}}function Oi(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function Wi(r){return[`
  # Configuration

  <hr>
  
  `]}class qi extends O{constructor(e){super(),B(this,e,Wi,Oi,H,{})}}function Vi(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function Gi(r){return[`
  # Logging with Log4j 2

  <hr>
  


  Logging in NEXUSe2e is implemented using Log4j 2 (starting with NEXUSe2e version 5.11.1).

All logging is configured via the log4j2.xml file located in the \\WEB-INF\\classes\\ folder, including database and email logging that was configured through the Notifiers section in the ui of previous NEXUSe2e verions.

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


  `]}class Qi extends O{constructor(e){super(),B(this,e,Gi,Vi,H,{})}}const Zi="/assets/mssqlAuth1.24d2bab4.png",Ji="/assets/mssqlAuth2.db7b578e.png",Yi="/assets/mssqlAuth3.5302e9f6.png";function Ki(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p,f,U;return i=new G({props:{img:Zi,alt:"directory structure"}}),c=new G({props:{img:Ji,alt:"Service JVM Parameters"}}),f=new G({props:{img:Yi,alt:"Service Login"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div"),p=y(),D(f.$$.fragment)},m($,j){h($,e,j),e.innerHTML=t,h($,n,j),P(i,$,j),h($,o,j),h($,s,j),s.innerHTML=a,h($,l,j),P(c,$,j),h($,u,j),h($,m,j),m.innerHTML=w,h($,p,j),P(f,$,j),U=!0},p:_,i($){U||(E(i.$$.fragment,$),E(c.$$.fragment,$),E(f.$$.fragment,$),U=!0)},o($){N(i.$$.fragment,$),N(c.$$.fragment,$),N(f.$$.fragment,$),U=!1},d($){$&&d(e),$&&d(n),M(i,$),$&&d(o),$&&d(s),$&&d(l),M(c,$),$&&d(u),$&&d(m),$&&d(p),M(f,$)}}}function er(r){return[`
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
  `]}class tr extends O{constructor(e){super(),B(this,e,er,Ki,H,{})}}const nr="/assets/service1.277e19e8.png",ir="/assets/service2.5c9d920d.png",rr="/assets/service3.0b8de283.png",or="/assets/service4.37962a2a.png",sr="/assets/service5.3ab699ea.png";function ar(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p,f,U,$,j=v.parse(r[3])+"",q,F,L,A,X=v.parse(r[4])+"",W,b,z,ee,ce=v.parse(r[5])+"",ie;return i=new G({props:{img:nr,alt:"service",height:"200px"}}),c=new G({props:{img:ir,alt:"service",height:"500px"}}),f=new G({props:{img:rr,alt:"service",height:"500px"}}),F=new G({props:{img:or,alt:"service",height:"500px"}}),b=new G({props:{img:sr,alt:"service",height:"500px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div"),p=y(),D(f.$$.fragment),U=y(),$=g("div"),q=y(),D(F.$$.fragment),L=y(),A=g("div"),W=y(),D(b.$$.fragment),z=y(),ee=g("div")},m(x,Z){h(x,e,Z),e.innerHTML=t,h(x,n,Z),P(i,x,Z),h(x,o,Z),h(x,s,Z),s.innerHTML=a,h(x,l,Z),P(c,x,Z),h(x,u,Z),h(x,m,Z),m.innerHTML=w,h(x,p,Z),P(f,x,Z),h(x,U,Z),h(x,$,Z),$.innerHTML=j,h(x,q,Z),P(F,x,Z),h(x,L,Z),h(x,A,Z),A.innerHTML=X,h(x,W,Z),P(b,x,Z),h(x,z,Z),h(x,ee,Z),ee.innerHTML=ce,ie=!0},p:_,i(x){ie||(E(i.$$.fragment,x),E(c.$$.fragment,x),E(f.$$.fragment,x),E(F.$$.fragment,x),E(b.$$.fragment,x),ie=!0)},o(x){N(i.$$.fragment,x),N(c.$$.fragment,x),N(f.$$.fragment,x),N(F.$$.fragment,x),N(b.$$.fragment,x),ie=!1},d(x){x&&d(e),x&&d(n),M(i,x),x&&d(o),x&&d(s),x&&d(l),M(c,x),x&&d(u),x&&d(m),x&&d(p),M(f,x),x&&d(U),x&&d($),x&&d(q),M(F,x),x&&d(L),x&&d(A),x&&d(W),M(b,x),x&&d(z),x&&d(ee)}}}function lr(r){return[`
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

- Next, switch in the bin directory of your Tomcat and rename the "Tomcatw.exe" to whatever you named your service. Make sure you include the "w.exe".

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

  `]}class cr extends O{constructor(e){super(),B(this,e,lr,ar,H,{})}}const ur="/assets/xsd1.bfc416fb.png",dr="/assets/xsd2.84300edc.png",hr="/assets/xsd3.dda4fff4.png",fr="/assets/xsd4.4bea371d.png";function pr(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p,f,U,$,j=v.parse(r[3])+"",q,F,L,A,X=v.parse(r[4])+"",W;return i=new G({props:{img:ur,alt:"service",height:"200px"}}),c=new G({props:{img:dr,alt:"service",height:"500px"}}),f=new G({props:{img:hr,alt:"service",height:"500px"}}),F=new G({props:{img:fr,alt:"service",height:"500px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div"),p=y(),D(f.$$.fragment),U=y(),$=g("div"),q=y(),D(F.$$.fragment),L=y(),A=g("div")},m(b,z){h(b,e,z),e.innerHTML=t,h(b,n,z),P(i,b,z),h(b,o,z),h(b,s,z),s.innerHTML=a,h(b,l,z),P(c,b,z),h(b,u,z),h(b,m,z),m.innerHTML=w,h(b,p,z),P(f,b,z),h(b,U,z),h(b,$,z),$.innerHTML=j,h(b,q,z),P(F,b,z),h(b,L,z),h(b,A,z),A.innerHTML=X,W=!0},p:_,i(b){W||(E(i.$$.fragment,b),E(c.$$.fragment,b),E(f.$$.fragment,b),E(F.$$.fragment,b),W=!0)},o(b){N(i.$$.fragment,b),N(c.$$.fragment,b),N(f.$$.fragment,b),N(F.$$.fragment,b),W=!1},d(b){b&&d(e),b&&d(n),M(i,b),b&&d(o),b&&d(s),b&&d(l),M(c,b),b&&d(u),b&&d(m),b&&d(p),M(f,b),b&&d(U),b&&d($),b&&d(q),M(F,b),b&&d(L),b&&d(A)}}}function mr(r){return[`
  # XSD - Schema Validation

  <hr>
  
  XSD validation is possible with NEXUSe2e for outbound and inbound messages. However the components are not enabled by default, you have to create a new pipelet depending on what end you want to validate XML files. For incoming messages it would be suitable to use the frontend pipelet, the backend pipelet for outgoing, thus failed conversation/messages due to invalid XML validations will not occur in your database. If this is an intentional behavior, you need to add the pipelet in the frontend pipeline for outgoing messages vice versa in the backend pipeline for incoming messages. Create the component as descripted and add the pipelet into your pipeline and, also add the relevant XSD file, that is all.

Please make also sure, that the account you are using for the Tomcat Service is allowed to access the folder of your XSD file.

## Backend Validation

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

## Frontend Validation

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

  `]}class gr extends O{constructor(e){super(),B(this,e,mr,pr,H,{})}}function wr(r){let e,t,n,i,o,s=v.parse(r[0])+"",a,l,c=v.parse(r[1])+"";return{c(){e=g("h1"),e.textContent="Security",t=y(),n=g("hr"),i=y(),o=g("div"),a=y(),l=g("div")},m(u,m){h(u,e,m),h(u,t,m),h(u,n,m),h(u,i,m),h(u,o,m),o.innerHTML=s,h(u,a,m),h(u,l,m),l.innerHTML=c},p:_,i:_,o:_,d(u){u&&d(e),u&&d(t),u&&d(n),u&&d(i),u&&d(o),u&&d(a),u&&d(l)}}}function vr(r){return[`
  ## Client Authentication
  
  The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even though NEXUSe2e is a server application comparable to a website, it acts as a client as well, which is the major difference to standard website certificates. When receiving a business message from your partner, the web application server handles this incoming request.

The SSL Handshake is done before any data is forwarded into the NEXUSe2e web app. Therefore, it's important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

The server provides the server certificate and the client validates this against the configured partner certificate, the CA certificates and the expiration time. Without client auth the handshake process is done and the user data is transferred. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore, it is required to apply the changes on CA certificates in your web app server configuration as well. Even if the clients CA certificate is installed in NEXUSe2e, the SSL handshake fails if the required CA certificate is not found in the web app server key store.

The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in their web app server configurations.
  
  <hr />
  `,`
  ## Configure a secure web service endpoint
  
  As of release 5.3.0, you can easily start a WS-security protected webservices endpoint for sending messages through NEXUSe2e. Read on for information on how to set up this service.

  ### Adding the component
  Under Server Configuration > Components, add a new component.

  Fill in the name and description however you want it, for the class name put in org.nexuse2e.integration.secure.WSDispatcherService. Save, then apply the changes to your system, and you should have the new component showing up in the overview.
  
  ### Registering the service
  Go to Server Configuration > Services, add a new Service.

  Select the newly registered component (if it's not showing up, make sure you applied your changes to the components via the Apply-button at the top of the Admin UI), enter any name you want, and whether you want the component to autostart.

  The URL you can input here is relative to your NEXUSe2e-instance. If your instance is found at https://<servername>/NEXUSe2e/, then putting in /secureWS would result in having the endpoint show up at https://<servername>/NEXUSe2e/wshandler/secureWS.

  For username and password, input the credentials you want to use, they'll later be needed to communicate with the endpoint. Then click save, and again apply the changes to your system.
  
  ### Final steps
  Lastly, start the new service unless it was already set to autostart. We advice you to briefly test your new endpoint by making the above configuration in a test environment and using a specialized tool or a test instance sending data to your NEXUSe2e instance to check whether everything is configured as desired.
  `]}class yr extends O{constructor(e){super(),B(this,e,vr,wr,H,{})}}const br="/assets/backendws1.9331eafd.jpg",kr="/assets/backendws2.7aa9232d.jpg";function _r(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p;return i=new G({props:{img:br,alt:"plain",height:"200px"}}),c=new G({props:{img:kr,alt:"plain",height:"200px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div")},m(f,U){h(f,e,U),e.innerHTML=t,h(f,n,U),P(i,f,U),h(f,o,U),h(f,s,U),s.innerHTML=a,h(f,l,U),P(c,f,U),h(f,u,U),h(f,m,U),m.innerHTML=w,p=!0},p:_,i(f){p||(E(i.$$.fragment,f),E(c.$$.fragment,f),p=!0)},o(f){N(i.$$.fragment,f),N(c.$$.fragment,f),p=!1},d(f){f&&d(e),f&&d(n),M(i,f),f&&d(o),f&&d(s),f&&d(l),M(c,f),f&&d(u),f&&d(m)}}}function Sr(r){return[`
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

  `]}class xr extends O{constructor(e){super(),B(this,e,Sr,_r,H,{})}}const $r="/assets/first1.1d65bbff.jpg",Er="/assets/first2.536195b7.jpg",Tr="/assets/first3.50d9eef4.jpg",Ar="/assets/first4.47dfe714.jpg",Cr="/assets/first5.f6b97dcd.jpg",Ur="/assets/first6.afcf619c.jpg";function Nr(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p,f,U,$,j=v.parse(r[3])+"",q,F,L,A,X=v.parse(r[4])+"",W,b,z,ee,ce=v.parse(r[5])+"",ie,x,Z,te,we=v.parse(r[6])+"",ue;return i=new G({props:{img:$r,alt:"service",height:"200px"}}),c=new G({props:{img:Er,alt:"service",height:"500px"}}),f=new G({props:{img:Tr,alt:"service",height:"500px"}}),F=new G({props:{img:Ar,alt:"service",height:"500px"}}),b=new G({props:{img:Cr,alt:"service",height:"500px"}}),x=new G({props:{img:Ur,alt:"service",height:"500px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div"),p=y(),D(f.$$.fragment),U=y(),$=g("div"),q=y(),D(F.$$.fragment),L=y(),A=g("div"),W=y(),D(b.$$.fragment),z=y(),ee=g("div"),ie=y(),D(x.$$.fragment),Z=y(),te=g("div")},m(k,V){h(k,e,V),e.innerHTML=t,h(k,n,V),P(i,k,V),h(k,o,V),h(k,s,V),s.innerHTML=a,h(k,l,V),P(c,k,V),h(k,u,V),h(k,m,V),m.innerHTML=w,h(k,p,V),P(f,k,V),h(k,U,V),h(k,$,V),$.innerHTML=j,h(k,q,V),P(F,k,V),h(k,L,V),h(k,A,V),A.innerHTML=X,h(k,W,V),P(b,k,V),h(k,z,V),h(k,ee,V),ee.innerHTML=ce,h(k,ie,V),P(x,k,V),h(k,Z,V),h(k,te,V),te.innerHTML=we,ue=!0},p:_,i(k){ue||(E(i.$$.fragment,k),E(c.$$.fragment,k),E(f.$$.fragment,k),E(F.$$.fragment,k),E(b.$$.fragment,k),E(x.$$.fragment,k),ue=!0)},o(k){N(i.$$.fragment,k),N(c.$$.fragment,k),N(f.$$.fragment,k),N(F.$$.fragment,k),N(b.$$.fragment,k),N(x.$$.fragment,k),ue=!1},d(k){k&&d(e),k&&d(n),M(i,k),k&&d(o),k&&d(s),k&&d(l),M(c,k),k&&d(u),k&&d(m),k&&d(p),M(f,k),k&&d(U),k&&d($),k&&d(q),M(F,k),k&&d(L),k&&d(A),k&&d(W),M(b,k),k&&d(z),k&&d(ee),k&&d(ie),M(x,k),k&&d(Z),k&&d(te)}}}function Ir(r){return[`

  # First Steps in Messaging

  <hr>
  

In this section we show you how easy it is to set up reliable messaging over the ebXML 2.0 standard protocol.

The fundamental prerequisite for exchanging messages is a peer that receives your messages or sends messages to you. If you do not have a suitable business partner at hand yet, you can install another instance of NEXUSe2e server on a different machine. Another idea would be to set up an additional servlet container on the same machine, that listens on a different port, or deploy the NEXUSe2e webapp twice to the same servlet container, but with different names.

The default configuration of NEXUSe2e server contains several preset. You can just use the presets or modify them as you like in the following configuration steps.

### Log In as Administrator

Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine--this is the case if you installed with the Windows installer, the url is: http://localhost:8080/NEXUSe2e. If you have not chopped the version substring, e.g. _4.2.4, from the war file's name before deployment, you probably need to append it to the URL.

The default administration account is admin with password admin.

### Set the Server Identity

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

Configuration changes in NEXUSe2e server are transactional. They are only activated after you clicked the Apply button on top of the gui. This will reload the NEXUSe2e engine with the new configuration. Of course, you can alternatively revert all changes by clicking Revert. The Apply and Revert buttons get enabled as soon as there are pending configuration changes.

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

  `]}class Lr extends O{constructor(e){super(),B(this,e,Ir,Nr,H,{})}}const Xr="/assets/plain1.7a2d4dd8.jpg",Pr="/assets/plain2.9ca369e5.jpg",Mr="/assets/plain3.4ed16f8e.jpg",Dr="/assets/plain4.60f9cc89.jpg",Rr="/assets/plain5.04de3adb.jpg",jr="/assets/plain6.3ecc5a85.jpg",zr="/assets/plain7.9c6c63c5.jpg";function Hr(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l,c,u,m,w=v.parse(r[2])+"",p,f,U,$,j=v.parse(r[3])+"",q,F,L,A,X=v.parse(r[4])+"",W,b,z,ee,ce=v.parse(r[5])+"",ie,x,Z,te,we=v.parse(r[6])+"",ue,k,V;return i=new G({props:{img:Xr,alt:"plain",height:"200px"}}),c=new G({props:{img:Pr,alt:"plain",height:"200px"}}),f=new G({props:{img:Mr,alt:"plain",height:"200px"}}),F=new G({props:{img:Dr,alt:"plain",height:"200px"}}),b=new G({props:{img:Rr,alt:"plain",height:"200px"}}),x=new G({props:{img:jr,alt:"plain",height:"200px"}}),k=new G({props:{img:zr,alt:"plain",height:"200px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div"),l=y(),D(c.$$.fragment),u=y(),m=g("div"),p=y(),D(f.$$.fragment),U=y(),$=g("div"),q=y(),D(F.$$.fragment),L=y(),A=g("div"),W=y(),D(b.$$.fragment),z=y(),ee=g("div"),ie=y(),D(x.$$.fragment),Z=y(),te=g("div"),ue=y(),D(k.$$.fragment)},m(S,J){h(S,e,J),e.innerHTML=t,h(S,n,J),P(i,S,J),h(S,o,J),h(S,s,J),s.innerHTML=a,h(S,l,J),P(c,S,J),h(S,u,J),h(S,m,J),m.innerHTML=w,h(S,p,J),P(f,S,J),h(S,U,J),h(S,$,J),$.innerHTML=j,h(S,q,J),P(F,S,J),h(S,L,J),h(S,A,J),A.innerHTML=X,h(S,W,J),P(b,S,J),h(S,z,J),h(S,ee,J),ee.innerHTML=ce,h(S,ie,J),P(x,S,J),h(S,Z,J),h(S,te,J),te.innerHTML=we,h(S,ue,J),P(k,S,J),V=!0},p:_,i(S){V||(E(i.$$.fragment,S),E(c.$$.fragment,S),E(f.$$.fragment,S),E(F.$$.fragment,S),E(b.$$.fragment,S),E(x.$$.fragment,S),E(k.$$.fragment,S),V=!0)},o(S){N(i.$$.fragment,S),N(c.$$.fragment,S),N(f.$$.fragment,S),N(F.$$.fragment,S),N(b.$$.fragment,S),N(x.$$.fragment,S),N(k.$$.fragment,S),V=!1},d(S){S&&d(e),S&&d(n),M(i,S),S&&d(o),S&&d(s),S&&d(l),M(c,S),S&&d(u),S&&d(m),S&&d(p),M(f,S),S&&d(U),S&&d($),S&&d(q),M(F,S),S&&d(L),S&&d(A),S&&d(W),M(b,S),S&&d(z),S&&d(ee),S&&d(ie),M(x,S),S&&d(Z),S&&d(te),S&&d(ue),M(k,S)}}}function Fr(r){return[`
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


  `]}class Br extends O{constructor(e){super(),B(this,e,Fr,Hr,H,{})}}function Or(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function Wr(r){return[`
  # Messaging

  <hr>
  
  `]}class qr extends O{constructor(e){super(),B(this,e,Wr,Or,H,{})}}const Vr="/assets/purge1.3322dcad.jpg";function Gr(r){let e,t=v.parse(r[0])+"",n,i,o;return i=new G({props:{img:Vr,alt:"plain",height:"200px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment)},m(s,a){h(s,e,a),e.innerHTML=t,h(s,n,a),P(i,s,a),o=!0},p:_,i(s){o||(E(i.$$.fragment,s),o=!0)},o(s){N(i.$$.fragment,s),o=!1},d(s){s&&d(e),s&&d(n),M(i,s)}}}function Qr(r){return[`
  # Conversation / Message Purging

  <hr>
  

  1. Set desired filter options.
  2. Review conversations or messages shown. Please be aware that all elements shown in the filtered view will be purged.
  3. Click on "Purge All" to delete the entries permanently.


  `]}class Zr extends O{constructor(e){super(),B(this,e,Qr,Gr,H,{})}}const Jr="/assets/test1.22603d62.png";function Yr(r){let e,t=v.parse(r[0])+"",n,i,o,s,a=v.parse(r[1])+"",l;return i=new G({props:{img:Jr,alt:"service",height:"200px"}}),{c(){e=g("div"),n=y(),D(i.$$.fragment),o=y(),s=g("div")},m(c,u){h(c,e,u),e.innerHTML=t,h(c,n,u),P(i,c,u),h(c,o,u),h(c,s,u),s.innerHTML=a,l=!0},p:_,i(c){l||(E(i.$$.fragment,c),l=!0)},o(c){N(i.$$.fragment,c),l=!1},d(c){c&&d(e),c&&d(n),M(i,c),c&&d(o),c&&d(s)}}}function Kr(r){return[`
  # Testing Connectivity

  <hr>
  

Based on the requirements for secure inbound and outbound connections its sometimes not that easy to pinpoint the issues directly. From top level point of view there are six components involved in the communcation process.

- the senders backend system (maybe something like SAP)
- the sending communication server (NEXUSe2e)
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

  `]}class eo extends O{constructor(e){super(),B(this,e,Kr,Yr,H,{})}}function to(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function no(r){return[`
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

  `]}class io extends O{constructor(e){super(),B(this,e,no,to,H,{})}}function ro(r){let e,t,n;return{c(){e=Ie("svg"),t=Ie("path"),C(t,"d",n=r[1][r[0]]),C(e,"class","icon svelte-17jwhoa"),C(e,"viewBox","0 0 24 24"),C(e,"stroke-width","2"),C(e,"stroke","currentColor")},m(i,o){h(i,e,o),I(e,t)},p(i,[o]){o&1&&n!==(n=i[1][i[0]])&&C(t,"d",n)},i:_,o:_,d(i){i&&d(e)}}}function oo(r,e,t){let{icon:n}=e;const i={copy:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"};return r.$$set=o=>{"icon"in o&&t(0,n=o.icon)},[n,i]}class $t extends O{constructor(e){super(),B(this,e,oo,ro,H,{icon:0})}}function Et(r,e,t){const n=r.slice();return n[7]=e[t],n}function Tt(r,e,t){const n=r.slice();return n[10]=e[t],n}function At(r){let e;return{c(){e=g("span"),e.textContent="latest",C(e,"class","version-card__header-badge svelte-w8jn3f")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function Ct(r){let e,t=v.parse(r[10])+"";return{c(){e=g("li"),C(e,"class","version-card__change svelte-w8jn3f")},m(n,i){h(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=v.parse(n[10])+"")&&(e.innerHTML=t)},d(n){n&&d(e)}}}function Ut(r){let e,t,n,i,o,s=r[0].knownIssues,a=[];for(let l=0;l<s.length;l+=1)a[l]=Nt(Et(r,s,l));return{c(){e=g("h4"),e.textContent="Known Issues",t=y(),n=g("ul");for(let l=0;l<a.length;l+=1)a[l].c();i=y(),o=g("hr")},m(l,c){h(l,e,c),h(l,t,c),h(l,n,c);for(let u=0;u<a.length;u+=1)a[u].m(n,null);h(l,i,c),h(l,o,c)},p(l,c){if(c&1){s=l[0].knownIssues;let u;for(u=0;u<s.length;u+=1){const m=Et(l,s,u);a[u]?a[u].p(m,c):(a[u]=Nt(m),a[u].c(),a[u].m(n,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=s.length}},d(l){l&&d(e),l&&d(t),l&&d(n),Te(a,l),l&&d(i),l&&d(o)}}}function Nt(r){let e,t=v.parse(r[7])+"";return{c(){e=g("li"),C(e,"class","version-card__change svelte-w8jn3f")},m(n,i){h(n,e,i),e.innerHTML=t},p(n,i){i&1&&t!==(t=v.parse(n[7])+"")&&(e.innerHTML=t)},d(n){n&&d(e)}}}function It(r){let e,t,n,i,o,s,a;return{c(){e=g("hr"),t=y(),n=g("h4"),n.textContent="Downloads",i=y(),o=g("a"),s=ve(".war via GitHub"),C(o,"href",a=`${Lt}/${r[0].download}`),C(o,"target","_blank"),C(o,"class","version-card__download svelte-w8jn3f"),C(o,"rel","noreferrer")},m(l,c){h(l,e,c),h(l,t,c),h(l,n,c),h(l,i,c),h(l,o,c),I(o,s)},p(l,c){c&1&&a!==(a=`${Lt}/${l[0].download}`)&&C(o,"href",a)},d(l){l&&d(e),l&&d(t),l&&d(n),l&&d(i),l&&d(o)}}}function so(r){let e,t,n,i=r[0].version+"",o,s,a,l,c,u,m,w,p,f,U,$,j,q,F,L,A,X,W,b=r[0].md5+"",z,ee,ce,ie,x,Z,te,we,ue,k,V,S=r[0].sha256+"",J,lt,xe,ct,be,Ve,ut,le=r[1]&&At(),$e=r[0].changes,oe=[];for(let Q=0;Q<$e.length;Q+=1)oe[Q]=Ct(Tt(r,$e,Q));let se=r[0].knownIssues&&r[0].knownIssues.length>0&&Ut(r);ce=new $t({props:{icon:"copy"}}),xe=new $t({props:{icon:"copy"}});let ae=r[0].download&&It(r);return{c(){e=g("div"),t=g("div"),n=g("span"),o=ve(i),s=y(),le&&le.c(),a=y(),l=g("hr"),c=y(),u=g("h4"),u.textContent="Changes",m=y(),w=g("ul");for(let Q=0;Q<oe.length;Q+=1)oe[Q].c();p=y(),f=g("hr"),U=y(),se&&se.c(),$=y(),j=g("h4"),j.textContent="Checksums",q=y(),F=g("div"),L=g("span"),L.textContent="MD5:",A=y(),X=g("div"),W=g("span"),z=ve(b),ee=y(),D(ce.$$.fragment),ie=y(),x=g("br"),Z=y(),te=g("div"),we=g("span"),we.textContent="SHA256:",ue=y(),k=g("div"),V=g("span"),J=ve(S),lt=y(),D(xe.$$.fragment),ct=y(),ae&&ae.c(),C(n,"class","version-card__header-text svelte-w8jn3f"),C(t,"class","version-card__header svelte-w8jn3f"),C(L,"class","version-card__checksum-type svelte-w8jn3f"),C(W,"class","version-card__checksum-hash svelte-w8jn3f"),C(X,"class","version-card__checksum-value svelte-w8jn3f"),C(F,"class","version-card__checksum svelte-w8jn3f"),C(we,"class","version-card__checksum-type svelte-w8jn3f"),C(V,"class","version-card__checksum-hash svelte-w8jn3f"),C(k,"class","version-card__checksum-value svelte-w8jn3f"),C(te,"class","version-card__checksum svelte-w8jn3f"),C(e,"class","version-card svelte-w8jn3f")},m(Q,pe){h(Q,e,pe),I(e,t),I(t,n),I(n,o),I(t,s),le&&le.m(t,null),I(e,a),I(e,l),I(e,c),I(e,u),I(e,m),I(e,w);for(let ne=0;ne<oe.length;ne+=1)oe[ne].m(w,null);I(e,p),I(e,f),I(e,U),se&&se.m(e,null),I(e,$),I(e,j),I(e,q),I(e,F),I(F,L),I(F,A),I(F,X),I(X,W),I(W,z),I(X,ee),P(ce,X,null),I(e,ie),I(e,x),I(e,Z),I(e,te),I(te,we),I(te,ue),I(te,k),I(k,V),I(V,J),I(k,lt),P(xe,k,null),I(e,ct),ae&&ae.m(e,null),be=!0,Ve||(ut=[re(X,"click",r[5]),re(X,"keypress",r[4]),re(k,"click",r[6]),re(k,"keypress",r[3])],Ve=!0)},p(Q,[pe]){if((!be||pe&1)&&i!==(i=Q[0].version+"")&&Ue(o,i),Q[1]?le||(le=At(),le.c(),le.m(t,null)):le&&(le.d(1),le=null),pe&1){$e=Q[0].changes;let ne;for(ne=0;ne<$e.length;ne+=1){const dt=Tt(Q,$e,ne);oe[ne]?oe[ne].p(dt,pe):(oe[ne]=Ct(dt),oe[ne].c(),oe[ne].m(w,null))}for(;ne<oe.length;ne+=1)oe[ne].d(1);oe.length=$e.length}Q[0].knownIssues&&Q[0].knownIssues.length>0?se?se.p(Q,pe):(se=Ut(Q),se.c(),se.m(e,$)):se&&(se.d(1),se=null),(!be||pe&1)&&b!==(b=Q[0].md5+"")&&Ue(z,b),(!be||pe&1)&&S!==(S=Q[0].sha256+"")&&Ue(J,S),Q[0].download?ae?ae.p(Q,pe):(ae=It(Q),ae.c(),ae.m(e,null)):ae&&(ae.d(1),ae=null)},i(Q){be||(E(ce.$$.fragment,Q),E(xe.$$.fragment,Q),be=!0)},o(Q){N(ce.$$.fragment,Q),N(xe.$$.fragment,Q),be=!1},d(Q){Q&&d(e),le&&le.d(),Te(oe,Q),se&&se.d(),M(ce),M(xe),ae&&ae.d(),Ve=!1,fe(ut)}}}const Lt="https://github.com/NEXUSe2e/NEXUSe2e/releases/download";function ao(r,e,t){let{version:n}=e,{latest:i}=e;const o=u=>{navigator.clipboard.writeText(u).then(()=>{alert("In die Zwischenablage kopiert")})};function s(u){me.call(this,r,u)}function a(u){me.call(this,r,u)}const l=()=>o(n.md5),c=()=>o(n.sha256);return r.$$set=u=>{"version"in u&&t(0,n=u.version),"latest"in u&&t(1,i=u.latest)},[n,i,o,s,a,l,c]}class lo extends O{constructor(e){super(),B(this,e,ao,so,H,{version:0,latest:1})}}const Xt=[{version:"NEXUSe2e 5.11.5",md5:"BB37D202B5F4B6F52E02AE73489BE78A",sha256:"358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2",download:"v5.11.5/nexuse2e-webapp-5.11.5.war",changes:["Added basic auth option for http receiver.","Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.","Improved token replacement."]},{version:"NEXUSe2e 5.11.1",md5:"5366B9E97F13A489B0540DC7299698CD",sha256:"2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9",download:"v5.11.1/nexuse2e-webapp-5.11.1.war",changes:["Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.","Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.","Bumped Postgres version to version 42.2.25",'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.']},{version:"NEXUSe2e 5.9.15",md5:"2D3869567E10047C90CD7729A4B48864",sha256:"C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39",download:"v5.9.15/nexuse2e-webapp-5.9.15.war",changes:["Added http header folding option to prevent content type from being folded into a new line."]},{version:"NEXUSe2e 5.9.11",md5:"8E547BF1B85D871A283C73FCEB67BC86",sha256:"EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B",changes:["Implemented HttpResponses for synchronous messaging","Fixed deadlock when synchronously receiving messages","Fixed backend status"],knownIssues:['"Synchronous" for incoming messages still does not work properly in combination with "Reliable"']}];function Pt(r,e,t){const n=r.slice();return n[0]=e[t],n[2]=t,n}function Mt(r){let e,t;return e=new lo({props:{version:r[0],latest:r[2]===0}}),{c(){D(e.$$.fragment)},m(n,i){P(e,n,i),t=!0},p:_,i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function co(r){let e,t,n,i,o,s,a,l,c=Xt,u=[];for(let w=0;w<c.length;w+=1)u[w]=Mt(Pt(r,c,w));const m=w=>N(u[w],1,1,()=>{u[w]=null});return{c(){e=g("h1"),e.textContent="Downloads",t=y(),n=g("hr"),i=y(),o=g("br"),s=y(),a=g("div");for(let w=0;w<u.length;w+=1)u[w].c();C(a,"class","downloads__versions svelte-1q5hjp8")},m(w,p){h(w,e,p),h(w,t,p),h(w,n,p),h(w,i,p),h(w,o,p),h(w,s,p),h(w,a,p);for(let f=0;f<u.length;f+=1)u[f].m(a,null);l=!0},p(w,[p]){if(p&0){c=Xt;let f;for(f=0;f<c.length;f+=1){const U=Pt(w,c,f);u[f]?(u[f].p(U,p),E(u[f],1)):(u[f]=Mt(U),u[f].c(),E(u[f],1),u[f].m(a,null))}for(_e(),f=c.length;f<u.length;f+=1)m(f);Se()}},i(w){if(!l){for(let p=0;p<c.length;p+=1)E(u[p]);l=!0}},o(w){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)N(u[p]);l=!1},d(w){w&&d(e),w&&d(t),w&&d(n),w&&d(i),w&&d(o),w&&d(s),w&&d(a),Te(u,w)}}}class uo extends O{constructor(e){super(),B(this,e,null,co,H,{})}}function ho(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function fo(r){return[`
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

`]}class po extends O{constructor(e){super(),B(this,e,fo,ho,H,{})}}function mo(r){let e,t=v.parse(r[0])+"";return{c(){e=g("div")},m(n,i){h(n,e,i),e.innerHTML=t},p:_,i:_,o:_,d(n){n&&d(e)}}}function go(r){return[`
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
`]}class wo extends O{constructor(e){super(),B(this,e,go,mo,H,{})}}function vo(r){let e;return{c(){e=g("div"),e.innerHTML=`<h1 class="not-found__header svelte-1vhr8a1">Site not found</h1> 
  <p class="not-found__text svelte-1vhr8a1">The requested page was not found. <a href="#/">Back</a></p>`,C(e,"class","not-found svelte-1vhr8a1")},m(t,n){h(t,e,n)},p:_,i:_,o:_,d(t){t&&d(e)}}}class yo extends O{constructor(e){super(),B(this,e,null,vo,H,{})}}function bo(r){let e,t,n;return t=new In({props:{routes:r[0]}}),{c(){e=g("div"),D(t.$$.fragment),C(e,"id","router"),C(e,"class","svelte-181d4p6")},m(i,o){h(i,e,o),P(t,e,null),n=!0},p:_,i(i){n||(E(t.$$.fragment,i),n=!0)},o(i){N(t.$$.fragment,i),n=!1},d(i){i&&d(e),M(t)}}}function ko(r){return[{"/":ln,"/solution":dn,"/solution/features":cn,"/solution/scenarios":un,"/service":pi,"/documentation":yi,"/documentation/installation":$i,"/documentation/installation/system-requirements":Ni,"/documentation/installation/setting-up":Ai,"/documentation/installation/external-config":_i,"/documentation/upgrade":Xi,"/documentation/configuration/":qi,"/documentation/configuration/alter-url":ji,"/documentation/configuration/mssql-auth":tr,"/documentation/configuration/windows-service":cr,"/documentation/configuration/backend-integration":Bi,"/documentation/configuration/xsd-schema-validation":gr,"/documentation/configuration/log4j-logging":Qi,"/documentation/security":yr,"/documentation/messaging":qr,"/documentation/messaging/first-steps":Lr,"/documentation/messaging/testing-connectivity":eo,"/documentation/messaging/unconfigured-content-type":io,"/documentation/messaging/http-plain-messaging":Br,"/documentation/messaging/backend-web-service-integration":xr,"/documentation/messaging/purging":Zr,"/downloads":uo,"/contact":po,"/imprint":wo,"*":yo}]}class _o extends O{constructor(e){super(),B(this,e,ko,bo,H,{})}}const So="/assets/logo.db89ed63.png",xo="modulepreload",$o=function(r){return"/"+r},Dt={},ze=function(e,t,n){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=$o(i),i in Dt)return;Dt[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":xo,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Eo=[{route:"/",text:"Home",component:Re({asyncComponent:()=>ze(()=>Promise.resolve().then(()=>ti),void 0)})},{route:"/solution",text:"Solution",component:Re({asyncComponent:()=>ze(()=>Promise.resolve().then(()=>di),void 0)}),subroutes:[{route:"/solution/features",text:"Features",component:Re({asyncComponent:()=>ze(()=>Promise.resolve().then(()=>ri),void 0)})},{route:"/solution/scenarios",text:"Scenarios",component:Re({asyncComponent:()=>ze(()=>Promise.resolve().then(()=>ai),void 0)})}]},{route:"/service",text:"Service"},{route:"/documentation",text:"Documentation",subroutes:[{route:"/documentation/installation",text:"Installation",subroutes:[{route:"/documentation/installation/system-requirements",text:"System Requirements"},{route:"/documentation/installation/setting-up",text:"Setting up NEXUSe2e"},{route:"/documentation/installation/external-config",text:"External Configuration Folder"}]},{route:"/documentation/upgrade",text:"Upgrade"},{route:"/documentation/configuration",text:"Configuration",subroutes:[{route:"/documentation/configuration/alter-url",text:"How to Alter the NEXUSe2e URL"},{route:"/documentation/configuration/mssql-auth",text:"Integrated Authentication with MSSQL"},{route:"/documentation/configuration/windows-service",text:"Windows Service"},{route:"/documentation/configuration/backend-integration",text:"NEXUSe2e Backend Integration"},{route:"/documentation/configuration/xsd-schema-validation",text:"XSD - Schema Validation"},{route:"/documentation/configuration/log4j-logging",text:"Logging with Log4j 2"}]},{route:"/documentation/security",text:"Security"},{route:"/documentation/messaging",text:"Messaging",subroutes:[{route:"/documentation/messaging/first-steps",text:"First Steps in Messaging"},{route:"/documentation/messaging/testing-connectivity",text:"Testing Connectivity"},{route:"/documentation/messaging/unconfigured-content-type",text:"Unconfigured Content Type"},{route:"/documentation/messaging/http-plain-messaging",text:"HTTP Plain Messaging"},{route:"/documentation/messaging/backend-web-service-integration",text:"Backend Web Service Integration"},{route:"/documentation/messaging/purging",text:"Conversation / Message Purging"}]}]},{route:"/downloads",text:"Downloads"}],To=[{route:"/contact",text:"Contact"},{route:"/imprint",text:"Legal Notices / Impressum"}];function Rt(r,e,t){const n=r.slice();return n[8]=e[t],n}function jt(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),C(t,"d","M8.25 4.5l7.5 7.5-7.5 7.5"),C(e,"fill","none"),C(e,"viewBox","0 0 24 24"),C(e,"stroke-width","2.5"),C(e,"stroke","currentColor"),C(e,"class","navigation-list-item__sub-icon svelte-1suezlb"),ye(e,"active",r[2])},m(n,i){h(n,e,i),I(e,t)},p(n,i){i&4&&ye(e,"active",n[2])},d(n){n&&d(e)}}}function zt(r){let e,t,n=r[0].subroutes,i=[];for(let s=0;s<n.length;s+=1)i[s]=Ht(Rt(r,n,s));const o=s=>N(i[s],1,1,()=>{i[s]=null});return{c(){e=g("ul");for(let s=0;s<i.length;s+=1)i[s].c();C(e,"class","navigation-list-item__sub-list svelte-1suezlb"),ye(e,"active",r[2])},m(s,a){h(s,e,a);for(let l=0;l<i.length;l+=1)i[l].m(e,null);t=!0},p(s,a){if(a&19){n=s[0].subroutes;let l;for(l=0;l<n.length;l+=1){const c=Rt(s,n,l);i[l]?(i[l].p(c,a),E(i[l],1)):(i[l]=Ht(c),i[l].c(),E(i[l],1),i[l].m(e,null))}for(_e(),l=n.length;l<i.length;l+=1)o(l);Se()}(!t||a&4)&&ye(e,"active",s[2])},i(s){if(!t){for(let a=0;a<n.length;a+=1)E(i[a]);t=!0}},o(s){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)N(i[a]);t=!1},d(s){s&&d(e),Te(i,s)}}}function Ht(r){let e,t;return e=new fn({props:{navItem:r[8],activeRoute:r[1]}}),e.$on("setActive",r[4]),{c(){D(e.$$.fragment)},m(n,i){P(e,n,i),t=!0},p(n,i){const o={};i&1&&(o.navItem=n[8]),i&2&&(o.activeRoute=n[1]),e.$set(o)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Ao(r){let e,t,n,i=r[0].text+"",o,s,a,l,c,u,m=r[0].subroutes&&jt(r),w=r[0].subroutes&&zt(r);return{c(){e=g("li"),t=g("div"),n=g("span"),o=ve(i),s=y(),m&&m.c(),a=y(),w&&w.c(),C(t,"class","navigation-list-item__text svelte-1suezlb"),ye(t,"active",r[0].route===r[1]),C(e,"class","navigation-list-item")},m(p,f){h(p,e,f),I(e,t),I(t,n),I(n,o),I(t,s),m&&m.m(t,null),I(e,a),w&&w.m(e,null),l=!0,c||(u=[re(t,"click",r[3]),re(t,"keypress",r[5])],c=!0)},p(p,[f]){(!l||f&1)&&i!==(i=p[0].text+"")&&Ue(o,i),p[0].subroutes?m?m.p(p,f):(m=jt(p),m.c(),m.m(t,null)):m&&(m.d(1),m=null),(!l||f&3)&&ye(t,"active",p[0].route===p[1]),p[0].subroutes?w?(w.p(p,f),f&1&&E(w,1)):(w=zt(p),w.c(),E(w,1),w.m(e,null)):w&&(_e(),N(w,1,1,()=>{w=null}),Se())},i(p){l||(E(w),l=!0)},o(p){N(w),l=!1},d(p){p&&d(e),m&&m.d(),w&&w.d(),c=!1,fe(u)}}}function Co(r,e,t){let n;const i=nt();let{navItem:o}=e,{activeRoute:s}=e;function a(m){m.stopPropagation(),c(),i("setActive",o.route)}function l({detail:m}){c(),i("setActive",m)}function c(){const m=o.subroutes===void 0;window.innerWidth<640&&m&&Xe.set(!1)}function u(m){me.call(this,r,m)}return r.$$set=m=>{"navItem"in m&&t(0,o=m.navItem),"activeRoute"in m&&t(1,s=m.activeRoute)},r.$$.update=()=>{r.$$.dirty&3&&t(2,n=s.includes(o.route))},[o,s,n,a,l,u]}class fn extends O{constructor(e){super(),B(this,e,Co,Ao,H,{navItem:0,activeRoute:1})}}function Ft(r,e,t){const n=r.slice();return n[4]=e[t],n}function Bt(r){let e,t;return e=new fn({props:{navItem:r[4],activeRoute:r[1]}}),e.$on("setActive",r[2]),{c(){D(e.$$.fragment)},m(n,i){P(e,n,i),t=!0},p(n,i){const o={};i&1&&(o.navItem=n[4]),i&2&&(o.activeRoute=n[1]),e.$set(o)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Uo(r){let e,t,n=r[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=Bt(Ft(r,n,s));const o=s=>N(i[s],1,1,()=>{i[s]=null});return{c(){e=g("ul");for(let s=0;s<i.length;s+=1)i[s].c();C(e,"class","the-navigation__list svelte-1o65xxw")},m(s,a){h(s,e,a);for(let l=0;l<i.length;l+=1)i[l].m(e,null);t=!0},p(s,[a]){if(a&7){n=s[0];let l;for(l=0;l<n.length;l+=1){const c=Ft(s,n,l);i[l]?(i[l].p(c,a),E(i[l],1)):(i[l]=Bt(c),i[l].c(),E(i[l],1),i[l].m(e,null))}for(_e(),l=n.length;l<i.length;l+=1)o(l);Se()}},i(s){if(!t){for(let a=0;a<n.length;a+=1)E(i[a]);t=!0}},o(s){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)N(i[a]);t=!1},d(s){s&&d(e),Te(i,s)}}}function No(r,e,t){const n=nt();let{navItems:i}=e,{activeItem:o}=e;function s({detail:a}){n("setActive",a)}return r.$$set=a=>{"navItems"in a&&t(0,i=a.navItems),"activeItem"in a&&t(1,o=a.activeItem)},[i,o,s]}class Ot extends O{constructor(e){super(),B(this,e,No,Uo,H,{navItems:0,activeItem:1})}}function Io(r){let e,t,n,i,o;return t=new Ot({props:{navItems:Eo,activeItem:r[0]}}),t.$on("setActive",r[1]),i=new Ot({props:{navItems:To,activeItem:r[0]}}),i.$on("setActive",r[1]),{c(){e=g("nav"),D(t.$$.fragment),n=y(),D(i.$$.fragment),C(e,"id","the-navigation"),C(e,"class","svelte-79l316")},m(s,a){h(s,e,a),P(t,e,null),I(e,n),P(i,e,null),o=!0},p(s,[a]){const l={};a&1&&(l.activeItem=s[0]),t.$set(l);const c={};a&1&&(c.activeItem=s[0]),i.$set(c)},i(s){o||(E(t.$$.fragment,s),E(i.$$.fragment,s),o=!0)},o(s){N(t.$$.fragment,s),N(i.$$.fragment,s),o=!1},d(s){s&&d(e),M(t),M(i)}}}function Lo(r,e,t){let n;Ke(r,Cn,s=>t(2,n=s));let i=n;function o({detail:s}){t(0,i=s),ot(s)}return[i,o]}class Xo extends O{constructor(e){super(),B(this,e,Lo,Io,H,{})}}function Po(r){let e,t,n,i,o,s,a,l,c,u;return a=new Xo({}),{c(){e=g("div"),t=g("aside"),n=g("img"),o=y(),s=g("div"),D(a.$$.fragment),Oe(n.src,i=So)||C(n,"src",i),C(n,"alt","nexus logo"),C(n,"class","the-navigation-drawer__logo svelte-1lh1kp9"),C(s,"class","the-navigation-drawer__content svelte-1lh1kp9"),C(t,"id","the-navigation-drawer"),C(t,"class","svelte-1lh1kp9"),C(e,"class","the-navigation-drawer__overlay svelte-1lh1kp9"),ye(e,"active",r[0])},m(m,w){h(m,e,w),I(e,t),I(t,n),I(t,o),I(t,s),P(a,s,null),l=!0,c||(u=[re(n,"click",r[2]),re(n,"keypress",r[5]),re(t,"click",Mo),re(t,"keypress",r[4]),re(e,"click",r[1]),re(e,"keypress",r[3])],c=!0)},p(m,[w]){(!l||w&1)&&ye(e,"active",m[0])},i(m){l||(E(a.$$.fragment,m),l=!0)},o(m){N(a.$$.fragment,m),l=!1},d(m){m&&d(e),M(a),c=!1,fe(u)}}}const Mo=r=>r.stopPropagation();function Do(r,e,t){let n;Ke(r,Xe,c=>t(0,n=c));function i(){Xe.set(!1)}function o(){ot("/")}function s(c){me.call(this,r,c)}function a(c){me.call(this,r,c)}function l(c){me.call(this,r,c)}return[n,i,o,s,a,l]}class Ro extends O{constructor(e){super(),B(this,e,Do,Po,H,{})}}function jo(r){let e,t,n,i,o,s,a,l;return t=new Ro({}),o=new xn({}),a=new _o({}),{c(){e=g("main"),D(t.$$.fragment),n=y(),i=g("div"),D(o.$$.fragment),s=y(),D(a.$$.fragment),C(i,"id","content"),C(i,"class","svelte-1hx8wd3"),C(e,"class","svelte-1hx8wd3")},m(c,u){h(c,e,u),P(t,e,null),I(e,n),I(e,i),P(o,i,null),I(i,s),P(a,i,null),l=!0},p:_,i(c){l||(E(t.$$.fragment,c),E(o.$$.fragment,c),E(a.$$.fragment,c),l=!0)},o(c){N(t.$$.fragment,c),N(o.$$.fragment,c),N(a.$$.fragment,c),l=!1},d(c){c&&d(e),M(t),M(o),M(a)}}}class zo extends O{constructor(e){super(),B(this,e,null,jo,H,{})}}new zo({target:document.getElementById("app")});
