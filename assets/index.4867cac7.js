(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function h(){}function De(r,e){for(const n in e)r[n]=e[n];return r}function tn(r){return r()}function bt(){return Object.create(null)}function te(r){r.forEach(tn)}function nt(r){return typeof r=="function"}function S(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Ie;function Pe(r,e){return Ie||(Ie=document.createElement("a")),Ie.href=e,r===Ie.href}function _n(r){return Object.keys(r).length===0}function nn(r,...e){if(r==null)return h;const n=r.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ue(r,e,n){r.$$.on_destroy.push(nn(e,n))}function rn(r,e,n,t){if(r){const i=sn(r,e,n,t);return r[0](i)}}function sn(r,e,n,t){return r[1]&&t?De(n.ctx.slice(),r[1](t(e))):n.ctx}function on(r,e,n,t){if(r[2]&&t){const i=r[2](t(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let l=0;l<o;l+=1)s[l]=e.dirty[l]|i[l];return s}return e.dirty|i}return e.dirty}function an(r,e,n,t,i,s){if(i){const o=sn(e,n,t,s);r.p(o,i)}}function ln(r){if(r.ctx.length>32){const e=[],n=r.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function vt(r){const e={};for(const n in r)n[0]!=="$"&&(e[n]=r[n]);return e}function k(r,e){r.appendChild(e)}function b(r,e,n){r.insertBefore(e,n||null)}function w(r){r.parentNode.removeChild(r)}function ve(r,e){for(let n=0;n<r.length;n+=1)r[n]&&r[n].d(e)}function g(r){return document.createElement(r)}function xe(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function le(r){return document.createTextNode(r)}function X(){return le(" ")}function je(){return le("")}function Q(r,e,n,t){return r.addEventListener(e,n,t),()=>r.removeEventListener(e,n,t)}function _(r,e,n){n==null?r.removeAttribute(e):r.getAttribute(e)!==n&&r.setAttribute(e,n)}function yn(r){return Array.from(r.childNodes)}function Re(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function se(r,e,n){r.classList[n?"add":"remove"](e)}function xn(r,e,{bubbles:n=!1,cancelable:t=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,n,t,e),i}class Qe{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,t=null){this.e||(this.is_svg?this.e=xe(n.nodeName):this.e=g(n.nodeName),this.t=n,this.c(e)),this.i(t)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)b(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}function kt(r,e){return new r(e)}let Se;function ye(r){Se=r}function Ee(){if(!Se)throw new Error("Function called outside component initialization");return Se}function Sn(r){Ee().$$.on_mount.push(r)}function $n(r){Ee().$$.on_destroy.push(r)}function cn(){const r=Ee();return(e,n,{cancelable:t=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=xn(e,n,{cancelable:t});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function _t(r,e){return Ee().$$.context.set(r,e),e}function Be(r){return Ee().$$.context.get(r)}function be(r,e){const n=r.$$.callbacks[e.type];n&&n.slice().forEach(t=>t.call(this,e))}const _e=[],yt=[],Le=[],xt=[],En=Promise.resolve();let Je=!1;function Tn(){Je||(Je=!0,En.then(un))}function Ve(r){Le.push(r)}const Fe=new Set;let Xe=0;function un(){const r=Se;do{for(;Xe<_e.length;){const e=_e[Xe];Xe++,ye(e),Nn(e.$$)}for(ye(null),_e.length=0,Xe=0;yt.length;)yt.pop()();for(let e=0;e<Le.length;e+=1){const n=Le[e];Fe.has(n)||(Fe.add(n),n())}Le.length=0}while(_e.length);for(;xt.length;)xt.pop()();Je=!1,Fe.clear(),ye(r)}function Nn(r){if(r.fragment!==null){r.update(),te(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Ve)}}const ze=new Set;let ce;function oe(){ce={r:0,c:[],p:ce}}function ae(){ce.r||te(ce.c),ce=ce.p}function N(r,e){r&&r.i&&(ze.delete(r),r.i(e))}function R(r,e,n,t){if(r&&r.o){if(ze.has(r))return;ze.add(r),ce.c.push(()=>{ze.delete(r),t&&(n&&r.d(1),t())}),r.o(e)}else t&&t()}function Un(r,e){const n={},t={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],l=e[s];if(l){for(const a in o)a in l||(t[a]=1);for(const a in l)i[a]||(n[a]=l[a],i[a]=1);r[s]=l}else for(const a in o)i[a]=1}for(const o in t)o in n||(n[o]=void 0);return n}function St(r){return typeof r=="object"&&r!==null?r:{}}function q(r){r&&r.c()}function O(r,e,n,t){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,n),t||Ve(()=>{const o=r.$$.on_mount.map(tn).filter(nt);r.$$.on_destroy?r.$$.on_destroy.push(...o):te(o),r.$$.on_mount=[]}),s.forEach(Ve)}function W(r,e){const n=r.$$;n.fragment!==null&&(te(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function An(r,e){r.$$.dirty[0]===-1&&(_e.push(r),Tn(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function $(r,e,n,t,i,s,o,l=[-1]){const a=Se;ye(r);const c=r.$$={fragment:null,ctx:[],props:s,update:h,not_equal:i,bound:bt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:bt(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(r,e.props||{},(p,d,...f)=>{const y=f.length?f[0]:d;return c.ctx&&i(c.ctx[p],c.ctx[p]=y)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](y),u&&An(r,p)),d}):[],c.update(),u=!0,te(c.before_update),c.fragment=t?t(c.ctx):!1,e.target){if(e.hydrate){const p=yn(e.target);c.fragment&&c.fragment.l(p),p.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&N(r.$$.fragment),O(r,e.target,e.anchor,e.customElement),un()}ye(a)}class E{$destroy(){W(this,1),this.$destroy=h}$on(e,n){if(!nt(n))return h;const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const i=t.indexOf(n);i!==-1&&t.splice(i,1)}}$set(e){this.$$set&&!_n(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const In="/NEXUSe2e-website/assets/nexus_header.ba62d497.png",me=[];function Xn(r,e){return{subscribe:we(r,e).subscribe}}function we(r,e=h){let n;const t=new Set;function i(l){if(S(r,l)&&(r=l,n)){const a=!me.length;for(const c of t)c[1](),me.push(c,r);if(a){for(let c=0;c<me.length;c+=2)me[c][0](me[c+1]);me.length=0}}}function s(l){i(l(r))}function o(l,a=h){const c=[l,a];return t.add(c),t.size===1&&(n=e(i)||h),l(r),()=>{t.delete(c),t.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function Cn(r,e,n){const t=!Array.isArray(r),i=t?[r]:r,s=e.length<2;return Xn(n,o=>{let l=!1;const a=[];let c=0,u=h;const p=()=>{if(c)return;u();const f=e(t?a[0]:a,o);s?o(f):u=nt(f)?f:h},d=i.map((f,y)=>nn(f,A=>{a[y]=A,c&=~(1<<y),l&&p()},()=>{c|=1<<y}));return l=!0,p(),function(){te(d),u()}})}const $e=we(window.innerWidth>=640);function Rn(r){let e,n,t,i,s,o,l,a,c;return{c(){e=g("div"),n=g("img"),i=X(),s=g("button"),s.innerHTML='<svg class="the-app-bar__menu-button-icon svelte-612oem" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',o=X(),l=g("div"),l.innerHTML=`<div class="the-app-bar__heading-header svelte-612oem">The proven open source</div> 
    <div class="the-app-bar__heading-sub-header svelte-612oem">B2B solution</div>`,Pe(n.src,t=In)||_(n,"src",t),_(n,"alt","nexus header"),_(n,"class","the-app-bar__img svelte-612oem"),_(s,"aria-label","menu-button"),_(s,"class","the-app-bar__menu-button svelte-612oem"),_(l,"class","the-app-bar__heading svelte-612oem"),_(e,"id","the-app-bar"),_(e,"class","svelte-612oem")},m(u,p){b(u,e,p),k(e,n),k(e,i),k(e,s),k(e,o),k(e,l),a||(c=Q(s,"click",r[0]),a=!0)},p:h,i:h,o:h,d(u){u&&w(e),a=!1,c()}}}function Ln(r,e,n){let t;ue(r,$e,s=>n(1,t=s));function i(){$e.set(!t)}return[i]}class zn extends E{constructor(e){super(),$(this,e,Ln,Rn,S,{})}}const Ke={},Ye={};function Ze(r){return{...r.location,state:r.history.state,key:r.history.state&&r.history.state.key||"initial"}}function Mn(r,e){const n=[];let t=Ze(r);return{get location(){return t},listen(i){n.push(i);const s=()=>{t=Ze(r),i({location:t,action:"POP"})};return r.addEventListener("popstate",s),()=>{r.removeEventListener("popstate",s);const o=n.indexOf(i);n.splice(o,1)}},navigate(i,{state:s,replace:o=!1}={}){s={...s,key:Date.now()+""};try{o?r.history.replaceState(s,null,i):r.history.pushState(s,null,i)}catch{r.location[o?"replace":"assign"](i)}t=Ze(r),n.forEach(l=>l({location:t,action:"PUSH"}))}}}function Dn(r="/"){let e=0;const n=[{pathname:r,search:""}],t=[];return{get location(){return n[e]},addEventListener(i,s){},removeEventListener(i,s){},history:{get entries(){return n},get index(){return e},get state(){return t[e]},pushState(i,s,o){const[l,a=""]=o.split("?");e++,n.push({pathname:l,search:a}),t.push(i)},replaceState(i,s,o){const[l,a=""]=o.split("?");n[e]={pathname:l,search:a},t[e]=i}}}}const Bn=Boolean(typeof window<"u"&&window.document&&window.document.createElement),et=Mn(Bn?window:Dn()),{navigate:hn}=et,fn=/^:(.+)/,$t=4,Hn=3,Pn=2,jn=1,On=1;function Wn(r){return r===""}function qn(r){return fn.test(r)}function dn(r){return r[0]==="*"}function tt(r){return r.replace(/(^\/+|\/+$)/g,"").split("/")}function Ge(r){return r.replace(/(^\/+|\/+$)/g,"")}function Fn(r,e){const n=r.default?0:tt(r.path).reduce((t,i)=>(t+=$t,Wn(i)?t+=On:qn(i)?t+=Pn:dn(i)?t-=$t+jn:t+=Hn,t),0);return{route:r,score:n,index:e}}function Zn(r){return r.map(Fn).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function pn(r,e){let n,t;const[i]=e.split("?"),s=tt(i),o=s[0]==="",l=Zn(r);for(let a=0,c=l.length;a<c;a++){const u=l[a].route;let p=!1;if(u.default){t={route:u,params:{},uri:e};continue}const d=tt(u.path),f={},y=Math.max(s.length,d.length);let A=0;for(;A<y;A++){const U=d[A],I=s[A];if(U!==void 0&&dn(U)){const H=U==="*"?"*":U.slice(1);f[H]=s.slice(A).map(decodeURIComponent).join("/");break}if(I===void 0){p=!0;break}let z=fn.exec(U);if(z&&!o){const H=decodeURIComponent(I);f[z[1]]=H}else if(U!==I){p=!0;break}}if(!p){n={route:u,params:f,uri:"/"+s.slice(0,A).join("/")};break}}return n||t||null}function Gn(r,e){return pn([r],e)}function Et(r,e){return`${Ge(e==="/"?r:`${Ge(r)}/${Ge(e)}`)}/`}function Qn(r){let e;const n=r[9].default,t=rn(n,r,r[8],null);return{c(){t&&t.c()},m(i,s){t&&t.m(i,s),e=!0},p(i,[s]){t&&t.p&&(!e||s&256)&&an(t,n,i,i[8],e?on(n,i[8],s,null):ln(i[8]),null)},i(i){e||(N(t,i),e=!0)},o(i){R(t,i),e=!1},d(i){t&&t.d(i)}}}function Jn(r,e,n){let t,i,s,{$$slots:o={},$$scope:l}=e,{basepath:a="/"}=e,{url:c=null}=e;const u=Be(Ke),p=Be(Ye),d=we([]);ue(r,d,T=>n(6,i=T));const f=we(null);let y=!1;const A=u||we(c?{pathname:c}:et.location);ue(r,A,T=>n(5,t=T));const U=p?p.routerBase:we({path:a,uri:a});ue(r,U,T=>n(7,s=T));const I=Cn([U,f],([T,D])=>{if(D===null)return T;const{path:L}=T,{route:B,uri:J}=D;return{path:B.default?L:B.path.replace(/\*.*$/,""),uri:J}});function z(T){const{path:D}=s;let{path:L}=T;if(T._path=L,T.path=Et(D,L),typeof window>"u"){if(y)return;const B=Gn(T,t.pathname);B&&(f.set(B),y=!0)}else d.update(B=>(B.push(T),B))}function H(T){d.update(D=>{const L=D.indexOf(T);return D.splice(L,1),D})}return u||(Sn(()=>et.listen(D=>{A.set(D.location)})),_t(Ke,A)),_t(Ye,{activeRoute:f,base:U,routerBase:I,registerRoute:z,unregisterRoute:H}),r.$$set=T=>{"basepath"in T&&n(3,a=T.basepath),"url"in T&&n(4,c=T.url),"$$scope"in T&&n(8,l=T.$$scope)},r.$$.update=()=>{if(r.$$.dirty&128){const{path:T}=s;d.update(D=>(D.forEach(L=>L.path=Et(T,L._path)),D))}if(r.$$.dirty&96){const T=pn(i,t.pathname);f.set(T)}},[d,A,U,a,c,t,i,s,l,o]}class Vn extends E{constructor(e){super(),$(this,e,Jn,Qn,S,{basepath:3,url:4})}}const Kn=r=>({params:r&4,location:r&16}),Tt=r=>({params:r[2],location:r[4]});function Nt(r){let e,n,t,i;const s=[ei,Yn],o=[];function l(a,c){return a[0]!==null?0:1}return e=l(r),n=o[e]=s[e](r),{c(){n.c(),t=je()},m(a,c){o[e].m(a,c),b(a,t,c),i=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(oe(),R(o[u],1,1,()=>{o[u]=null}),ae(),n=o[e],n?n.p(a,c):(n=o[e]=s[e](a),n.c()),N(n,1),n.m(t.parentNode,t))},i(a){i||(N(n),i=!0)},o(a){R(n),i=!1},d(a){o[e].d(a),a&&w(t)}}}function Yn(r){let e;const n=r[10].default,t=rn(n,r,r[9],Tt);return{c(){t&&t.c()},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&532)&&an(t,n,i,i[9],e?on(n,i[9],s,Kn):ln(i[9]),Tt)},i(i){e||(N(t,i),e=!0)},o(i){R(t,i),e=!1},d(i){t&&t.d(i)}}}function ei(r){let e,n,t;const i=[{location:r[4]},r[2],r[3]];var s=r[0];function o(l){let a={};for(let c=0;c<i.length;c+=1)a=De(a,i[c]);return{props:a}}return s&&(e=kt(s,o())),{c(){e&&q(e.$$.fragment),n=je()},m(l,a){e&&O(e,l,a),b(l,n,a),t=!0},p(l,a){const c=a&28?Un(i,[a&16&&{location:l[4]},a&4&&St(l[2]),a&8&&St(l[3])]):{};if(s!==(s=l[0])){if(e){oe();const u=e;R(u.$$.fragment,1,0,()=>{W(u,1)}),ae()}s?(e=kt(s,o()),q(e.$$.fragment),N(e.$$.fragment,1),O(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(l){t||(e&&N(e.$$.fragment,l),t=!0)},o(l){e&&R(e.$$.fragment,l),t=!1},d(l){l&&w(n),e&&W(e,l)}}}function ti(r){let e,n,t=r[1]!==null&&r[1].route===r[7]&&Nt(r);return{c(){t&&t.c(),e=je()},m(i,s){t&&t.m(i,s),b(i,e,s),n=!0},p(i,[s]){i[1]!==null&&i[1].route===i[7]?t?(t.p(i,s),s&2&&N(t,1)):(t=Nt(i),t.c(),N(t,1),t.m(e.parentNode,e)):t&&(oe(),R(t,1,1,()=>{t=null}),ae())},i(i){n||(N(t),n=!0)},o(i){R(t),n=!1},d(i){t&&t.d(i),i&&w(e)}}}function ni(r,e,n){let t,i,{$$slots:s={},$$scope:o}=e,{path:l=""}=e,{component:a=null}=e;const{registerRoute:c,unregisterRoute:u,activeRoute:p}=Be(Ye);ue(r,p,U=>n(1,t=U));const d=Be(Ke);ue(r,d,U=>n(4,i=U));const f={path:l,default:l===""};let y={},A={};return c(f),typeof window<"u"&&$n(()=>{u(f)}),r.$$set=U=>{n(13,e=De(De({},e),vt(U))),"path"in U&&n(8,l=U.path),"component"in U&&n(0,a=U.component),"$$scope"in U&&n(9,o=U.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&t&&t.route===f&&n(2,y=t.params);{const{path:U,component:I,...z}=e;n(3,A=z)}},e=vt(e),[a,t,y,A,i,p,d,f,l,o,s]}class ii extends E{constructor(e){super(),$(this,e,ni,ti,S,{path:8,component:0})}}function gn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ke=gn();function ri(r){ke=r}const si=/[&<>"']/,oi=/[&<>"']/g,ai=/[<>"']|&(?!#?\w+;)/,li=/[<>"']|&(?!#?\w+;)/g,ci={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ut=r=>ci[r];function P(r,e){if(e){if(si.test(r))return r.replace(oi,Ut)}else if(ai.test(r))return r.replace(li,Ut);return r}const ui=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function mn(r){return r.replace(ui,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const hi=/(^|[^\[])\^/g;function M(r,e){r=typeof r=="string"?r:r.source,e=e||"";const n={replace:(t,i)=>(i=i.source||i,i=i.replace(hi,"$1"),r=r.replace(t,i),n),getRegex:()=>new RegExp(r,e)};return n}const fi=/[^\w:]/g,di=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function At(r,e,n){if(r){let t;try{t=decodeURIComponent(mn(n)).replace(fi,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!di.test(n)&&(n=wi(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Ce={},pi=/^[^:]+:\/*[^/]*$/,gi=/^([^:]+:)[\s\S]*$/,mi=/^([^:]+:\/*[^/]*)[\s\S]*$/;function wi(r,e){Ce[" "+r]||(pi.test(r)?Ce[" "+r]=r+"/":Ce[" "+r]=Me(r,"/",!0)),r=Ce[" "+r];const n=r.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:r.replace(gi,"$1")+e:e.charAt(0)==="/"?n?e:r.replace(mi,"$1")+e:r+e}const He={exec:function(){}};function V(r){let e=1,n,t;for(;e<arguments.length;e++){n=arguments[e];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}function It(r,e){const n=r.replace(/\|/g,(s,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),t=n.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function Me(r,e,n){const t=r.length;if(t===0)return"";let i=0;for(;i<t;){const s=r.charAt(t-i-1);if(s===e&&!n)i++;else if(s!==e&&n)i++;else break}return r.slice(0,t-i)}function bi(r,e){if(r.indexOf(e[1])===-1)return-1;const n=r.length;let t=0,i=0;for(;i<n;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])t++;else if(r[i]===e[1]&&(t--,t<0))return i;return-1}function wn(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Xt(r,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=r),e>>=1,r+=r;return n+r}function Ct(r,e,n,t){const i=e.href,s=e.title?P(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){t.state.inLink=!0;const l={type:"link",raw:n,href:i,title:s,text:o,tokens:t.inlineTokens(o)};return t.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:s,text:P(o)}}function vi(r,e){const n=r.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=t.length?i.slice(t.length):i}).join(`
`)}class it{constructor(e){this.options=e||ke}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Me(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],i=vi(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const i=Me(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const t=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(t,[]),text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t,i,s,o,l,a,c,u,p,d,f,y,A=n[1].trim();const U=A.length>1,I={type:"list",raw:"",ordered:U,start:U?+A.slice(0,-1):"",loose:!1,items:[]};A=U?`\\d{1,9}\\${A.slice(-1)}`:`\\${A}`,this.options.pedantic&&(A=U?A:"[*+-]");const z=new RegExp(`^( {0,3}${A})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(y=!1,!(!(n=z.exec(e))||this.rules.block.hr.test(e)));){if(t=n[0],e=e.substring(t.length),u=n[2].split(`
`,1)[0],p=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=n[1].length),a=!1,!u&&/^ *$/.test(p)&&(t+=p+`
`,e=e.substring(p.length+1),y=!0),!y){const T=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),D=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),L=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),B=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(L.test(u)||B.test(u)||T.test(u)||D.test(e)));){if(u.search(/[^ ]/)>=o||!u.trim())f+=`
`+u.slice(o);else if(!a)f+=`
`+u;else break;!a&&!u.trim()&&(a=!0),t+=d+`
`,e=e.substring(d.length+1)}}I.loose||(c?I.loose=!0:/\n *\n *$/.test(t)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(f),i&&(s=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),I.items.push({type:"list_item",raw:t,task:!!i,checked:s,loose:!1,text:f}),I.raw+=t}I.items[I.items.length-1].raw=t.trimRight(),I.items[I.items.length-1].text=f.trimRight(),I.raw=I.raw.trimRight();const H=I.items.length;for(l=0;l<H;l++){this.lexer.state.top=!1,I.items[l].tokens=this.lexer.blockTokens(I.items[l].text,[]);const T=I.items[l].tokens.filter(L=>L.type==="space"),D=T.every(L=>{const B=L.raw.split("");let J=0;for(const he of B)if(he===`
`&&(J+=1),J>1)return!0;return!1});!I.loose&&T.length&&D&&(I.loose=!0,I.items[l].loose=!0)}return I}}html(e){const n=this.rules.block.html.exec(e);if(n){const t={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(n[0]):P(n[0]);t.type="paragraph",t.text=i,t.tokens=this.lexer.inline(i)}return t}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const t=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:t,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const t={type:"table",header:It(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=n[0];let i=t.align.length,s,o,l,a;for(s=0;s<i;s++)/^ *-+: *$/.test(t.align[s])?t.align[s]="right":/^ *:-+: *$/.test(t.align[s])?t.align[s]="center":/^ *:-+ *$/.test(t.align[s])?t.align[s]="left":t.align[s]=null;for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=It(t.rows[s],t.header.length).map(c=>({text:c}));for(i=t.header.length,o=0;o<i;o++)t.header[o].tokens=this.lexer.inline(t.header[o].text);for(i=t.rows.length,o=0;o<i;o++)for(a=t.rows[o],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return t}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:P(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):P(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const o=Me(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{const o=bi(n[2],"()");if(o>-1){const a=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,a).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),Ct(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Ct(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(t===""||this.rules.inline.punctuation.exec(t))){const o=i[0].length-1;let l,a,c=o,u=0;const p=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(p.lastIndex=0,n=n.slice(-1*e.length+o);(i=p.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(a=l.length,i[3]||i[4]){c+=a;continue}else if((i[5]||i[6])&&o%3&&!((o+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(o,a)%2){const f=e.slice(1,o+i.index+a);return{type:"em",raw:e.slice(0,o+i.index+a+1),text:f,tokens:this.lexer.inlineTokens(f)}}const d=e.slice(2,o+i.index+a-1);return{type:"strong",raw:e.slice(0,o+i.index+a+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=P(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let i,s;return t[2]==="@"?(i=P(this.options.mangle?n(t[1]):t[1]),s="mailto:"+i):(i=P(t[1]),s=i),{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=P(this.options.mangle?n(t[0]):t[0]),s="mailto:"+i;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(o!==t[0]);i=P(t[0]),t[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):P(t[0]):t[0]:i=P(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:i}}}}const x={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:He,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};x._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;x._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;x.def=M(x.def).replace("label",x._label).replace("title",x._title).getRegex();x.bullet=/(?:[*+-]|\d{1,9}[.)])/;x.listItemStart=M(/^( *)(bull) */).replace("bull",x.bullet).getRegex();x.list=M(x.list).replace(/bull/g,x.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+x.def.source+")").getRegex();x._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";x._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;x.html=M(x.html,"i").replace("comment",x._comment).replace("tag",x._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();x.paragraph=M(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex();x.blockquote=M(x.blockquote).replace("paragraph",x.paragraph).getRegex();x.normal=V({},x);x.gfm=V({},x.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});x.gfm.table=M(x.gfm.table).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex();x.gfm.paragraph=M(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",x.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex();x.pedantic=V({},x.normal,{html:M(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",x._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:He,paragraph:M(x.normal._paragraph).replace("hr",x.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",x.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const v={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:He,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:He,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};v._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";v.punctuation=M(v.punctuation).replace(/punctuation/g,v._punctuation).getRegex();v.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;v.escapedEmSt=/\\\*|\\_/g;v._comment=M(x._comment).replace("(?:-->|$)","-->").getRegex();v.emStrong.lDelim=M(v.emStrong.lDelim).replace(/punct/g,v._punctuation).getRegex();v.emStrong.rDelimAst=M(v.emStrong.rDelimAst,"g").replace(/punct/g,v._punctuation).getRegex();v.emStrong.rDelimUnd=M(v.emStrong.rDelimUnd,"g").replace(/punct/g,v._punctuation).getRegex();v._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;v._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;v._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;v.autolink=M(v.autolink).replace("scheme",v._scheme).replace("email",v._email).getRegex();v._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;v.tag=M(v.tag).replace("comment",v._comment).replace("attribute",v._attribute).getRegex();v._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;v._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;v._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;v.link=M(v.link).replace("label",v._label).replace("href",v._href).replace("title",v._title).getRegex();v.reflink=M(v.reflink).replace("label",v._label).replace("ref",x._label).getRegex();v.nolink=M(v.nolink).replace("ref",x._label).getRegex();v.reflinkSearch=M(v.reflinkSearch,"g").replace("reflink",v.reflink).replace("nolink",v.nolink).getRegex();v.normal=V({},v);v.pedantic=V({},v.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:M(/^!?\[(label)\]\((.*?)\)/).replace("label",v._label).getRegex(),reflink:M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v._label).getRegex()});v.gfm=V({},v.normal,{escape:M(v.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});v.gfm.url=M(v.gfm.url,"i").replace("email",v.gfm._extended_email).getRegex();v.breaks=V({},v.gfm,{br:M(v.br).replace("{2,}","*").getRegex(),text:M(v.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function ki(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Rt(r){let e="",n,t;const i=r.length;for(n=0;n<i;n++)t=r.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}class ee{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ke,this.options.tokenizer=this.options.tokenizer||new it,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:x.normal,inline:v.normal};this.options.pedantic?(n.block=x.pedantic,n.inline=v.pedantic):this.options.gfm&&(n.block=x.gfm,this.options.breaks?n.inline=v.breaks:n.inline=v.gfm),this.tokenizer.rules=n}static get rules(){return{block:x,inline:v}}static lex(e,n){return new ee(n).lex(e)}static lexInline(e,n){return new ee(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,a,c)=>a+"    ".repeat(c.length));let t,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(t=l.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){i=n[n.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),o=s.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,i,s,o=e,l,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+Xt("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+Xt("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(t=u.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,o,c)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,Rt)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,Rt))){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const p=e.slice(1);let d;this.options.extensions.startInline.forEach(function(f){d=f.call({lexer:this},p),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(t=this.tokenizer.inlineText(s,ki)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(c=t.raw.slice(-1)),a=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class rt{constructor(e){this.options=e||ke}code(e,n,t){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(t=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+P(i,!0)+'">'+(t?e:P(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:P(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,t,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(t);return`<h${n} id="${s}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){const i=n?"ol":"ul",s=n&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){if(e=At(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i='<a href="'+P(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+t+"</a>",i}image(e,n,t){if(e=At(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i=`<img src="${e}" alt="${t}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class bn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class vn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,i=0;if(this.seen.hasOwnProperty(t)){i=this.seen[e];do i++,t=e+"-"+i;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=i,this.seen[t]=0),t}slug(e,n={}){const t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}}class K{constructor(e){this.options=e||ke,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new bn,this.slugger=new vn}static parse(e,n){return new K(n).parse(e)}static parseInline(e,n){return new K(n).parseInline(e)}parse(e,n=!0){let t="",i,s,o,l,a,c,u,p,d,f,y,A,U,I,z,H,T,D,L;const B=e.length;for(i=0;i<B;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(L=this.options.extensions.renderers[f.type].call({parser:this},f),L!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){t+=L||"";continue}switch(f.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{t+=this.renderer.heading(this.parseInline(f.tokens),f.depth,mn(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{t+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(p="",u="",l=f.header.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(f.header[s].tokens),{header:!0,align:f.align[s]});for(p+=this.renderer.tablerow(u),d="",l=f.rows.length,s=0;s<l;s++){for(c=f.rows[s],u="",a=c.length,o=0;o<a;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});d+=this.renderer.tablerow(u)}t+=this.renderer.table(p,d);continue}case"blockquote":{d=this.parse(f.tokens),t+=this.renderer.blockquote(d);continue}case"list":{for(y=f.ordered,A=f.start,U=f.loose,l=f.items.length,d="",s=0;s<l;s++)z=f.items[s],H=z.checked,T=z.task,I="",z.task&&(D=this.renderer.checkbox(H),U?z.tokens.length>0&&z.tokens[0].type==="paragraph"?(z.tokens[0].text=D+" "+z.tokens[0].text,z.tokens[0].tokens&&z.tokens[0].tokens.length>0&&z.tokens[0].tokens[0].type==="text"&&(z.tokens[0].tokens[0].text=D+" "+z.tokens[0].tokens[0].text)):z.tokens.unshift({type:"text",text:D}):I+=D),I+=this.parse(z.tokens,U),d+=this.renderer.listitem(I,T,H);t+=this.renderer.list(d,y,A);continue}case"html":{t+=this.renderer.html(f.text);continue}case"paragraph":{t+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;i+1<B&&e[i+1].type==="text";)f=e[++i],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);t+=n?this.renderer.paragraph(d):d;continue}default:{const J='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(J);return}else throw new Error(J)}}}return t}parseInline(e,n){n=n||this.renderer;let t="",i,s,o;const l=e.length;for(i=0;i<l;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){t+=o||"";continue}switch(s.type){case"escape":{t+=n.text(s.text);break}case"html":{t+=n.html(s.text);break}case"link":{t+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{t+=n.image(s.href,s.title,s.text);break}case"strong":{t+=n.strong(this.parseInline(s.tokens,n));break}case"em":{t+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{t+=n.codespan(s.text);break}case"br":{t+=n.br();break}case"del":{t+=n.del(this.parseInline(s.tokens,n));break}case"text":{t+=n.text(s.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return t}}function m(r,e,n){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=V({},m.defaults,e||{}),wn(e),n){const i=e.highlight;let s;try{s=ee.lex(r,e)}catch(a){return n(a)}const o=function(a){let c;if(!a)try{e.walkTokens&&m.walkTokens(s,e.walkTokens),c=K.parse(s,e)}catch(u){a=u}return e.highlight=i,a?n(a):n(null,c)};if(!i||i.length<3||(delete e.highlight,!s.length))return o();let l=0;m.walkTokens(s,function(a){a.type==="code"&&(l++,setTimeout(()=>{i(a.text,a.lang,function(c,u){if(c)return o(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),l--,l===0&&o()})},0))}),l===0&&o();return}function t(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+P(i.message+"",!0)+"</pre>";throw i}try{const i=ee.lex(r,e);if(e.walkTokens){if(e.async)return Promise.all(m.walkTokens(i,e.walkTokens)).then(()=>K.parse(i,e)).catch(t);m.walkTokens(i,e.walkTokens)}return K.parse(i,e)}catch(i){t(i)}}m.options=m.setOptions=function(r){return V(m.defaults,r),ri(m.defaults),m};m.getDefaults=gn;m.defaults=ke;m.use=function(...r){const e=V({},...r),n=m.defaults.extensions||{renderers:{},childTokens:{}};let t;r.forEach(i=>{if(i.extensions&&(t=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const o=n.renderers?n.renderers[s.name]:null;o?n.renderers[s.name]=function(...l){let a=s.renderer.apply(this,l);return a===!1&&(a=o.apply(this,l)),a}:n.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[s.level]?n[s.level].unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}s.childTokens&&(n.childTokens[s.name]=s.childTokens)})),i.renderer){const s=m.defaults.renderer||new rt;for(const o in i.renderer){const l=s[o];s[o]=(...a)=>{let c=i.renderer[o].apply(s,a);return c===!1&&(c=l.apply(s,a)),c}}e.renderer=s}if(i.tokenizer){const s=m.defaults.tokenizer||new it;for(const o in i.tokenizer){const l=s[o];s[o]=(...a)=>{let c=i.tokenizer[o].apply(s,a);return c===!1&&(c=l.apply(s,a)),c}}e.tokenizer=s}if(i.walkTokens){const s=m.defaults.walkTokens;e.walkTokens=function(o){let l=[];return l.push(i.walkTokens.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}t&&(e.extensions=n),m.setOptions(e)})};m.walkTokens=function(r,e){let n=[];for(const t of r)switch(n=n.concat(e.call(m,t)),t.type){case"table":{for(const i of t.header)n=n.concat(m.walkTokens(i.tokens,e));for(const i of t.rows)for(const s of i)n=n.concat(m.walkTokens(s.tokens,e));break}case"list":{n=n.concat(m.walkTokens(t.items,e));break}default:m.defaults.extensions&&m.defaults.extensions.childTokens&&m.defaults.extensions.childTokens[t.type]?m.defaults.extensions.childTokens[t.type].forEach(function(i){n=n.concat(m.walkTokens(t[i],e))}):t.tokens&&(n=n.concat(m.walkTokens(t.tokens,e)))}return n};m.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=V({},m.defaults,e||{}),wn(e);try{const n=ee.lexInline(r,e);return e.walkTokens&&m.walkTokens(n,e.walkTokens),K.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+P(n.message+"",!0)+"</pre>";throw n}};m.Parser=K;m.parser=K.parse;m.Renderer=rt;m.TextRenderer=bn;m.Lexer=ee;m.lexer=ee.lex;m.Tokenizer=it;m.Slugger=vn;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;K.parse;ee.lex;const _i="/NEXUSe2e-website/assets/nexus_on_java_11.86fd1c91.jpg";function yi(r){let e,n,t=m.parse(r[0])+"",i,s,o,l,a,c=m.parse(r[1])+"";return{c(){e=g("div"),n=new Qe(!1),i=X(),s=g("img"),l=X(),a=new Qe(!1),n.a=i,Pe(s.src,o=_i)||_(s,"src",o),_(s,"alt","nexus on java 11"),_(s,"class","img"),a.a=null},m(u,p){b(u,e,p),n.m(t,e),k(e,i),k(e,s),k(e,l),a.m(c,e)},p:h,i:h,o:h,d(u){u&&w(e)}}}function xi(r){return[`
  <h1>Home</h1>
  <hr>
  <h2 style="color: var(--color-brand)">NEXUSe2e is now running on Java 11</h2>
`,`
  ## NEXUSe2e 5.9 and Java 11
  Java 11 is the current Java Long Time Support (LTS) version. The newly released NEXUSe2e versions are now supporting this Java version.

  All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK.
  `]}class Si extends E{constructor(e){super(),$(this,e,xi,yi,S,{})}}function $i(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Ei(r){return[`
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
  - Data encryption on the transport level (e.g. SSL, S/MIME)
  - Validation of partner/client certificates
  - Built-in certificate and key management
  
  ## Reporting
  - Standard reports for message volume
  - Reports for identifying failed transmissions
  - Transaction and application log with flexible filtering
  - Customizable report look and feel
  
  ## User Interface
  - Web interface compatible with standard web browsers (IE, Firefox, Safari, Opera)
  - Fine grained role model and user authentication
  
  ## Configuration
  - Transaction oriented change management: multiple changes can be entered sequentially and commited at once or discarded
  - Export/import of system configuration in XML format for backup and replication
  
  ## Deployment and Operation
  - JEE web application (distributed as a WAR file)
  - Bundled in-process database for testing
  - Compatible with most SQL compliant database systems (MS SQL Server, Oracle, DB2, MySQL, PostgreSQL, Derby etc.)
  
  ## Maintenance
  - Easy extensibility through component oriented design
  - Online update mechanism (desktop version)
  
  ## Monitoring
  - System availability check through HTTP and Web service interfaces (e.g. for load balancer integration)
  - Automatic system shut-down on database unavailability and restart on database recovery
  - Customizable error notification mechanism through email
  - Extensible error notification sub system for adding additional protocols (e.g. SMS)
  
  ## Available Communication/Messaging Protocols
  - ebXML 1.0
  - ebXML 2.0
  - agGateway Web services
  - Email (SMTP, POP3, IMAP)
  - FTP/FTPS
  - SFTP
  - Web services
  
  ## Back-End/Lagacy Systems Integration
  - HTTP connector
  - Web services connector
  - JDBC connector
  - File system connector
  
  ## Out-of-the-box Data Validation and Conversion
  - XML/XSLT/XSD/DTD
  - CSV
  - Plain Text
  - Compression/decompression (ZIP)
  `]}class Ti extends E{constructor(e){super(),$(this,e,Ei,$i,S,{})}}const Ni="/NEXUSe2e-website/assets/product.b1b6bfc4.jpg";function Ui(r){let e,n,t=m.parse(r[0])+"",i,s,o;return{c(){e=g("div"),n=new Qe(!1),i=X(),s=g("img"),n.a=i,Pe(s.src,o=Ni)||_(s,"src",o),_(s,"alt","nexus product"),_(s,"class","img")},m(l,a){b(l,e,a),n.m(t,e),k(e,i),k(e,s)},p:h,i:h,o:h,d(l){l&&w(e)}}}function Ai(r){return[`
  # Product

  ---

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTP, SMTP, FTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `]}class Ii extends E{constructor(e){super(),$(this,e,Ai,Ui,S,{})}}function Xi(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Ci(r){return[`
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
  `]}class Ri extends E{constructor(e){super(),$(this,e,Ci,Xi,S,{})}}function Li(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function zi(r){return[`
  # Service

  ---

  ## Professional Services provided by evolving systems consulting

  The developers of NEXUSe2e are part of the Skaylink GmbH, a German IT and business consultancy, which specializes in:
  - IT strategy consulting and organizational consulting
  - IT architecture and projects
  - Collaboration, eBusiness and process integration

  **We are all ease for your requirements. Please contact us with your individual request.**

  ## Installation & Update
  - We install NEXUSe2e on your machines.
  - We install software updates for you, and upgrade your machines to the latest version of NEXUSe2e.
  - We offer remote or on site service.

  ## Integration & Consulting
  - We design an realize integration with your business partners based on your individual requirements.
  - We develop the connection to the interfaces of your backend systems, whether those are standardized or proprietary.
  - We realize the connection to your business partners, whether they make use of standardized or proprietary frontend protocols.

  ## Custom Development
  - Do you need a special functionality that NEXUSe2e does not provide, yet? We offer to develop individual features for you, that meet either open source or closed source criteria.

  ## Support

  **Standard**
  - We monitor the operation of your NEXUSe2e instances remotely.
  - We answer your questions and give you a hand on operational problems.
  - We assist you in using and configuring NEXUSe2e.
  - We help you to develop your own NEXUSe2e components.

  **Enterprise**
  - In addition to the standard support service you gain access to the clustering code of NEXUSe2e, which enables you to set up a scalable network of NEXUSe2e nodes.
  - With the clustering code you    
    - distribute the load of your transactions to several machines, and in addition to that
    - ensure availability in case of failure
`]}class Mi extends E{constructor(e){super(),$(this,e,zi,Li,S,{})}}function Di(r){let e,n,t;return{c(){e=g("h1"),e.textContent="Documentation",n=X(),t=g("hr")},m(i,s){b(i,e,s),b(i,n,s),b(i,t,s)},p:h,i:h,o:h,d(i){i&&w(e),i&&w(n),i&&w(t)}}}class Bi extends E{constructor(e){super(),$(this,e,null,Di,S,{})}}function Hi(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Pi(r){return[`
  # External Configuration Folder

  <hr>
  
  `]}class ji extends E{constructor(e){super(),$(this,e,Pi,Hi,S,{})}}function Oi(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Wi(r){return[`
  # Installation

  <hr>
  
  `]}class qi extends E{constructor(e){super(),$(this,e,Wi,Oi,S,{})}}function Fi(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Zi(r){return[`
  # Setting up NEXUSe2e

  <hr>
  
  ## Out-of-the-box Installation for Windows
  If you are running a Windows system, you can download the Windows installer for NEXUSe2e server in the <a href="/downloads" class="standard-link">Download</a> section.

  The installer package includes everything you need to run NEXUSe2e server. It includes an Apache Tomcat server, a Java Runtime Environment (JRE) and an embedded database <a href="/documentation/installation/system-requirements" class="standard-link">you should switch to a different SQL database for production</a>.

  The installer registers the Tomcat server that runs NEXUSe2e as a Windows service. After the standard installation procedure you will find shortcuts in your start menu, that enable you to start/stop the service.

  When the server is started, you can log in to the admin interface by pointing your browser to <a href="http://localhost:8080/NEXUSe2e" target="_blank" class="standard-link">http://localhost:8080/NEXUSe2e</a>. The default administration account is admin with password admin. Now you can configure the server for messaging. You can find a step-by-step guide below.
  
  ## Manual Installation

  ## Requirements

  The current version 5.0.x of NEXUSe2e requires:
  - Java 7 (JDK or JRE 1.7.x) or higher
  - A Servlet container supporting the Servlet API version 2.4 or later (e.g. <a href="https://tomcat.apache.org/" target="_blank" class="standard-link">Apache Tomcat</a> 5.5)

  NEXUSe2e server comes with an embedded <a href="https://db.apache.org/derby/" target="_blank" class="standard-link">Apache Derby</a> database, for evaluation and development use. We disadvise you from using the embedded database in a production environment. If you want to run NEXUSe2e server in a production environment, you also need:
  - An SQL database that can be accessed through JDCB (e.g. MS SQL Server, Oracle, DB2, MySQL, PostgreSQL)
  
  ## Installing Your Server
  - Download the WAR file from the <a href="/downloads" class="standard-link">Download</a> section.
  - Deploy the WAR file in your servlet container.
  
  >To deploy the WAR file please follow the instructions of your Servlet container/Web application server. For Tomcat the deployment is as easy as copying the WAR file into the *\\<Tomcat root>/\\<webapps>* directory and starting Tomcat. This will expand the WAR and start the Web application.

  >The default WAR configuration will create a Derby database and pre-populate it with a basic sample configuration. The database will be created in the directory *\\<NEXUSe2e Web app root>/WEB-INF/config/database/derby* and be named *NEXUSe2eDB*.

  - Log in to the admin interface and configure the server.

  >Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine, the url is: <a href="http://localhost:8080/NEXUSe2e" target="_blank" class="standard-link">http://localhost:8080/NEXUSe2e</a>. If you have not chopped the version substring, e.g. *_4.5.1*, from the war file's name before deployment, you probably need to append it to the URL.

  >The default administration account is admin with password admin.

  Now you can configure the server for messaging. You may want to follow our <a href="/documentation/messaging/first-steps" class="standard-link">step-by-step guide</a>.
 `]}class Gi extends E{constructor(e){super(),$(this,e,Zi,Fi,S,{})}}function Qi(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Ji(r){return[`
  # Setting up NEXUSe2e for Mobile Admin App

  <hr>
  
  `]}class Vi extends E{constructor(e){super(),$(this,e,Ji,Qi,S,{})}}function Ki(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Yi(r){return[`
  # System Requirements

  <hr>
  
  NEXUSe2e runs on a variety of system configurations. These brief requirements only illustrate the recommended settings, NEXUSe2e will probably run with lower specifcations.

  ## Hardware & Operating System
  - Linux or Windows
  - Dual core CPU
  - 4GB RAM
  - About 10GB of free HDD space

  ## Software
  - Java JDK 11
  - Apache Tomcat 9
  - Java Cryptography Extension (JCE) Unlimited
  - Hibernate supported database

  `]}class er extends E{constructor(e){super(),$(this,e,Yi,Ki,S,{})}}function tr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function nr(r){return[`
  # Upgrade Checklist

  <hr>
  
  `]}class ir extends E{constructor(e){super(),$(this,e,nr,tr,S,{})}}function rr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function sr(r){return[`
  # NEXUSe2e from 4.x to 4.x

  <hr>
  
  `]}class or extends E{constructor(e){super(),$(this,e,sr,rr,S,{})}}function ar(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function lr(r){return[`
  # Upgrade

  <hr>
  
  `]}class cr extends E{constructor(e){super(),$(this,e,lr,ar,S,{})}}function ur(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function hr(r){return[`
  # How to Alter the NEXUSe2e URL

  <hr>
  
  `]}class fr extends E{constructor(e){super(),$(this,e,hr,ur,S,{})}}function dr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function pr(r){return[`
  # NEXUSe2e Backend Integration

  <hr>
  
  `]}class gr extends E{constructor(e){super(),$(this,e,pr,dr,S,{})}}function mr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function wr(r){return[`
  # Configuration

  <hr>
  
  `]}class br extends E{constructor(e){super(),$(this,e,wr,mr,S,{})}}function vr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function kr(r){return[`
  # Logging with Log4j 2

  <hr>
  
  `]}class _r extends E{constructor(e){super(),$(this,e,kr,vr,S,{})}}function yr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function xr(r){return[`
  # Integrated Authentication with MSSQL

  <hr>
  
  `]}class Sr extends E{constructor(e){super(),$(this,e,xr,yr,S,{})}}function $r(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Er(r){return[`
  # Windows Service

  <hr>
  
  `]}class Tr extends E{constructor(e){super(),$(this,e,Er,$r,S,{})}}function Nr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Ur(r){return[`
  # XSD - Schema Validation

  <hr>
  
  `]}class Ar extends E{constructor(e){super(),$(this,e,Ur,Nr,S,{})}}function Ir(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Xr(r){return[`
  # Client Authentication

  <hr>
  
  The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even if NEXUSe2e is a server application compareable to a website it acts as a client as well which is the major different to standard website certificates. When receiving a business message from your partner, the webapplication server handles this incomming request.

  The SSL Handshake is done before any data is forward into the NEXUSe2e web app. Therefore its important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

  The server provides the server certificate and the client validates this against the configured partner certifcate, the ca certificates and the expiration time. without clientauth the handshake process is done and the user data is transfered. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore it is required to apply the changes on ca certificates in your web app server configuration as well. Even if the clients CA cert is installed in NEXUSe2e, the ssl handshake fails if the required CA certificate is not found in the web app server key store.

  The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in there web app server configurations.
  `]}class Cr extends E{constructor(e){super(),$(this,e,Xr,Ir,S,{})}}function Rr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Lr(r){return[`
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
  `]}class zr extends E{constructor(e){super(),$(this,e,Lr,Rr,S,{})}}function Mr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Dr(r){return[`
  # Security

  <hr>
  
  `]}class Br extends E{constructor(e){super(),$(this,e,Dr,Mr,S,{})}}function Hr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Pr(r){return[`
  # SSL

  <hr>
  
  `]}class jr extends E{constructor(e){super(),$(this,e,Pr,Hr,S,{})}}function Or(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Wr(r){return[`
  # Backend Web Service Integration

  <hr>
  
  `]}class qr extends E{constructor(e){super(),$(this,e,Wr,Or,S,{})}}function Fr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Zr(r){return[`
  # First Steps in Messaging

  <hr>
  
  `]}class Gr extends E{constructor(e){super(),$(this,e,Zr,Fr,S,{})}}function Qr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Jr(r){return[`
  # HTTP Plain Messaging

  <hr>
  
  `]}class Vr extends E{constructor(e){super(),$(this,e,Jr,Qr,S,{})}}function Kr(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function Yr(r){return[`
  # Messaging

  <hr>
  
  `]}class es extends E{constructor(e){super(),$(this,e,Yr,Kr,S,{})}}function ts(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function ns(r){return[`
  # Conversation / Message Purging

  <hr>
  
  `]}class is extends E{constructor(e){super(),$(this,e,ns,ts,S,{})}}function rs(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function ss(r){return[`
  # Testing Connectivity

  <hr>
  
  `]}class os extends E{constructor(e){super(),$(this,e,ss,rs,S,{})}}function as(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function ls(r){return[`
  # Unconfigured Content Type

  <hr>
  
  `]}class cs extends E{constructor(e){super(),$(this,e,ls,as,S,{})}}function us(r){let e,n,t;return{c(){e=xe("svg"),n=xe("path"),_(n,"d",t=r[1][r[0]]),_(e,"class","icon svelte-17jwhoa"),_(e,"viewBox","0 0 24 24"),_(e,"stroke-width","2"),_(e,"stroke","currentColor")},m(i,s){b(i,e,s),k(e,n)},p(i,[s]){s&1&&t!==(t=i[1][i[0]])&&_(n,"d",t)},i:h,o:h,d(i){i&&w(e)}}}function hs(r,e,n){let{icon:t}=e;const i={copy:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"};return r.$$set=s=>{"icon"in s&&n(0,t=s.icon)},[t,i]}class Lt extends E{constructor(e){super(),$(this,e,hs,us,S,{icon:0})}}function zt(r,e,n){const t=r.slice();return t[7]=e[n],t}function Mt(r,e,n){const t=r.slice();return t[10]=e[n],t}function Dt(r){let e;return{c(){e=g("span"),e.textContent="latest",_(e,"class","version-card__header-badge svelte-w8jn3f")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Bt(r){let e,n=m.parse(r[10])+"";return{c(){e=g("li"),_(e,"class","version-card__change svelte-w8jn3f")},m(t,i){b(t,e,i),e.innerHTML=n},p(t,i){i&1&&n!==(n=m.parse(t[10])+"")&&(e.innerHTML=n)},d(t){t&&w(e)}}}function Ht(r){let e,n,t,i,s,o=r[0].knownIssues,l=[];for(let a=0;a<o.length;a+=1)l[a]=Pt(zt(r,o,a));return{c(){e=g("h4"),e.textContent="Known Issues",n=X(),t=g("ul");for(let a=0;a<l.length;a+=1)l[a].c();i=X(),s=g("hr")},m(a,c){b(a,e,c),b(a,n,c),b(a,t,c);for(let u=0;u<l.length;u+=1)l[u].m(t,null);b(a,i,c),b(a,s,c)},p(a,c){if(c&1){o=a[0].knownIssues;let u;for(u=0;u<o.length;u+=1){const p=zt(a,o,u);l[u]?l[u].p(p,c):(l[u]=Pt(p),l[u].c(),l[u].m(t,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=o.length}},d(a){a&&w(e),a&&w(n),a&&w(t),ve(l,a),a&&w(i),a&&w(s)}}}function Pt(r){let e,n=m.parse(r[7])+"";return{c(){e=g("li"),_(e,"class","version-card__change svelte-w8jn3f")},m(t,i){b(t,e,i),e.innerHTML=n},p(t,i){i&1&&n!==(n=m.parse(t[7])+"")&&(e.innerHTML=n)},d(t){t&&w(e)}}}function fs(r){let e,n,t,i=r[0].version+"",s,o,l,a,c,u,p,d,f,y,A,U,I,z,H,T,D,L,B,J=r[0].md5+"",he,st,fe,ot,at,lt,de,Te,ct,ne,Ne,Ue=r[0].sha256+"",Oe,ut,pe,ht,ft,dt,We,pt,ie,gt,Ae,re,qe,mt,G=r[1]&&Dt(),ge=r[0].changes,F=[];for(let C=0;C<ge.length;C+=1)F[C]=Bt(Mt(r,ge,C));let Z=r[0].knownIssues&&r[0].knownIssues.length>0&&Ht(r);return fe=new Lt({props:{icon:"copy"}}),pe=new Lt({props:{icon:"copy"}}),{c(){e=g("div"),n=g("div"),t=g("span"),s=le(i),o=X(),G&&G.c(),l=X(),a=g("hr"),c=X(),u=g("h4"),u.textContent="Changes",p=X(),d=g("ul");for(let C=0;C<F.length;C+=1)F[C].c();f=X(),y=g("hr"),A=X(),Z&&Z.c(),U=X(),I=g("h4"),I.textContent="Checksums",z=X(),H=g("div"),T=g("span"),T.textContent="MD5:",D=X(),L=g("div"),B=g("span"),he=le(J),st=X(),q(fe.$$.fragment),ot=X(),at=g("br"),lt=X(),de=g("div"),Te=g("span"),Te.textContent="SHA256:",ct=X(),ne=g("div"),Ne=g("span"),Oe=le(Ue),ut=X(),q(pe.$$.fragment),ht=X(),ft=g("hr"),dt=X(),We=g("h4"),We.textContent="Downloads",pt=X(),ie=g("a"),gt=le(".war via GitHub"),_(t,"class","version-card__header-text svelte-w8jn3f"),_(n,"class","version-card__header svelte-w8jn3f"),_(T,"class","version-card__checksum-type svelte-w8jn3f"),_(B,"class","version-card__checksum-hash svelte-w8jn3f"),_(L,"class","version-card__checksum-value svelte-w8jn3f"),_(H,"class","version-card__checksum svelte-w8jn3f"),_(Te,"class","version-card__checksum-type svelte-w8jn3f"),_(Ne,"class","version-card__checksum-hash svelte-w8jn3f"),_(ne,"class","version-card__checksum-value svelte-w8jn3f"),_(de,"class","version-card__checksum svelte-w8jn3f"),_(ie,"href",Ae=`${jt}/${r[0].download}`),_(ie,"target","_blank"),_(ie,"class","version-card__download svelte-w8jn3f"),_(ie,"rel","noreferrer"),_(e,"class","version-card svelte-w8jn3f")},m(C,Y){b(C,e,Y),k(e,n),k(n,t),k(t,s),k(n,o),G&&G.m(n,null),k(e,l),k(e,a),k(e,c),k(e,u),k(e,p),k(e,d);for(let j=0;j<F.length;j+=1)F[j].m(d,null);k(e,f),k(e,y),k(e,A),Z&&Z.m(e,null),k(e,U),k(e,I),k(e,z),k(e,H),k(H,T),k(H,D),k(H,L),k(L,B),k(B,he),k(L,st),O(fe,L,null),k(e,ot),k(e,at),k(e,lt),k(e,de),k(de,Te),k(de,ct),k(de,ne),k(ne,Ne),k(Ne,Oe),k(ne,ut),O(pe,ne,null),k(e,ht),k(e,ft),k(e,dt),k(e,We),k(e,pt),k(e,ie),k(ie,gt),re=!0,qe||(mt=[Q(L,"click",r[5]),Q(L,"keypress",r[4]),Q(ne,"click",r[6]),Q(ne,"keypress",r[3])],qe=!0)},p(C,[Y]){if((!re||Y&1)&&i!==(i=C[0].version+"")&&Re(s,i),C[1]?G||(G=Dt(),G.c(),G.m(n,null)):G&&(G.d(1),G=null),Y&1){ge=C[0].changes;let j;for(j=0;j<ge.length;j+=1){const wt=Mt(C,ge,j);F[j]?F[j].p(wt,Y):(F[j]=Bt(wt),F[j].c(),F[j].m(d,null))}for(;j<F.length;j+=1)F[j].d(1);F.length=ge.length}C[0].knownIssues&&C[0].knownIssues.length>0?Z?Z.p(C,Y):(Z=Ht(C),Z.c(),Z.m(e,U)):Z&&(Z.d(1),Z=null),(!re||Y&1)&&J!==(J=C[0].md5+"")&&Re(he,J),(!re||Y&1)&&Ue!==(Ue=C[0].sha256+"")&&Re(Oe,Ue),(!re||Y&1&&Ae!==(Ae=`${jt}/${C[0].download}`))&&_(ie,"href",Ae)},i(C){re||(N(fe.$$.fragment,C),N(pe.$$.fragment,C),re=!0)},o(C){R(fe.$$.fragment,C),R(pe.$$.fragment,C),re=!1},d(C){C&&w(e),G&&G.d(),ve(F,C),Z&&Z.d(),W(fe),W(pe),qe=!1,te(mt)}}}const jt="https://github.com/solutionsdirekt/NEXUSe2e/releases/download";function ds(r,e,n){let{version:t}=e,{latest:i}=e;const s=u=>{navigator.clipboard.writeText(u).then(()=>{alert("In die Zwischenablage kopiert")})};function o(u){be.call(this,r,u)}function l(u){be.call(this,r,u)}const a=()=>s(t.md5),c=()=>s(t.sha256);return r.$$set=u=>{"version"in u&&n(0,t=u.version),"latest"in u&&n(1,i=u.latest)},[t,i,s,o,l,a,c]}class ps extends E{constructor(e){super(),$(this,e,ds,fs,S,{version:0,latest:1})}}const Ot=[{version:"NEXUSe2e 5.11.5",md5:"BB37D202B5F4B6F52E02AE73489BE78A",sha256:"358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2",download:"v5.11.5/nexuse2e-webapp-5.11.5.war",changes:["Added basic auth option for http receiver.","Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.","Improved token replacement."]},{version:"NEXUSe2e 5.11.1",md5:"5366B9E97F13A489B0540DC7299698CD",sha256:"2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9",download:"v5.11.1/nexuse2e-webapp-5.11.1.war",changes:["Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.","Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.","Bumped Postgres version to version 42.2.25",'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.']},{version:"NEXUSe2e 5.9.15",md5:"2D3869567E10047C90CD7729A4B48864",sha256:"C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39",download:"v5.9.15/nexuse2e-webapp-5.9.15.war",changes:["Added http header folding option to prevent content type from being folded into a new line."]},{version:"NEXUSe2e 5.9.11",md5:"8E547BF1B85D871A283C73FCEB67BC86",sha256:"EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B",download:"v5.9.11/nexuse2e-webapp-5.9.11.war",changes:["Implemented HttpResponses for synchronous messaging","Fixed deadlock when synchronously receiving messages","Fixed backend status"],knownIssues:['"Synchronous" for incoming messages still does not work properly in combination with "Reliable"']}];function Wt(r,e,n){const t=r.slice();return t[0]=e[n],t[2]=n,t}function qt(r){let e,n;return e=new ps({props:{version:r[0],latest:r[2]===0}}),{c(){q(e.$$.fragment)},m(t,i){O(e,t,i),n=!0},p:h,i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function gs(r){let e,n,t,i,s,o,l,a,c=Ot,u=[];for(let d=0;d<c.length;d+=1)u[d]=qt(Wt(r,c,d));const p=d=>R(u[d],1,1,()=>{u[d]=null});return{c(){e=g("h1"),e.textContent="Downloads",n=X(),t=g("hr"),i=X(),s=g("br"),o=X(),l=g("div");for(let d=0;d<u.length;d+=1)u[d].c();_(l,"class","downloads__versions svelte-1q5hjp8")},m(d,f){b(d,e,f),b(d,n,f),b(d,t,f),b(d,i,f),b(d,s,f),b(d,o,f),b(d,l,f);for(let y=0;y<u.length;y+=1)u[y].m(l,null);a=!0},p(d,[f]){if(f&0){c=Ot;let y;for(y=0;y<c.length;y+=1){const A=Wt(d,c,y);u[y]?(u[y].p(A,f),N(u[y],1)):(u[y]=qt(A),u[y].c(),N(u[y],1),u[y].m(l,null))}for(oe(),y=c.length;y<u.length;y+=1)p(y);ae()}},i(d){if(!a){for(let f=0;f<c.length;f+=1)N(u[f]);a=!0}},o(d){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)R(u[f]);a=!1},d(d){d&&w(e),d&&w(n),d&&w(t),d&&w(i),d&&w(s),d&&w(o),d&&w(l),ve(u,d)}}}class ms extends E{constructor(e){super(),$(this,e,null,gs,S,{})}}function ws(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function bs(r){return[`
  # Contact

  ---

  <br>

  **How to get in touch**

  Do you have a question or suggestion relating to this web site? Would you like more information? Below you will find different ways to get in touch with us.

  We are available by phone 8 am through 6 pm Central European Time:

  Tel.: <a href="tel:+49 40 88155-0" class="phone">+49 40 88155 \u2013 0</a>
  <br>
  E-Mail: <a href="mailto:nexuse2e@evolvsys.com" class="email">nexuse2e@evolvsys.com</a>

  ---

  ## HAMBURG

  Griegstra\xDFe 75, H. 26
  
  22763 Hamburg

  ---

  ## K\xD6LN

  Im Mediapark 6b
  
  50670 K\xF6ln

  ---

  ## M\xDCNCHEN

  Zielstattstr. 42
  
  81379 M\xFCnchen

  ---

  ## GARCHING

  Parkring 29
  
  85748 Garching bei M\xFCnchen

  ---

  ## PADERBORN

  Technologiepark 9
  
  33100 Paderborn

  ---

  ## ESSEN

  Natorpstra\xDFe 36-38
  
  45139 Essen

  ---

  ## REGENSBURG

  Dr.-Leo-Ritter-Stra\xDFe 4
  
  93049 Regensburg

  ---

  ## BRASIL

  Rua Manoel de Oliveira Ramos 205
  
  Edif\xEDcio Andr\xE9 Maykot, Sala 201
  
  88075-120 Florian\xF3polis SC Brasilien

  ---

  ## ROMANIA

  Hexagon Office
  
  Calea Turzii nr. 178K, Et. 7
  
  400495, Cluj-Napoca Rum\xE4nien

`]}class vs extends E{constructor(e){super(),$(this,e,bs,ws,S,{})}}function ks(r){let e,n=m.parse(r[0])+"";return{c(){e=g("div")},m(t,i){b(t,e,i),e.innerHTML=n},p:h,i:h,o:h,d(t){t&&w(e)}}}function _s(r){return[`
  # Legal Notices / Impressum

  ---

  **Skaylink GmbH**
  <br>
  Zielstattstra\xDFe 42
  <br>
  81379 M\xFCnchen

  **Amtsgericht M\xFCnchen**
  <br>
  HRB 253086

  **USt-IdNr.:**
  <br>
  DE330020107

  Tel.: <a href="tel:+49 40 88155-0" class="phone">+49 40 88155 \u2013 0</a>
  <br>
  E-Mail: <a href="mailto:info@skaylink.com" class="email">info@skaylink.com</a>

  **Vertretungsberechtigte Gesch\xE4ftsf\xFChrer**
  <br>
  Dr. Ulrich Bannm\xFCller

  **Haftungsausschluss**
  <br>
  Die Inhalte dieser Webseiten wurden sorgf\xE4ltig erstellt. Gleichwohl \xFCbernimmt die Skaylink GmbH keine Haftung daf\xFCr, dass die auf diesen Webseiten bereitgestellten Informationen jeweils vollst\xE4ndig, richtig und aktuell sind.
  Insbesondere \xFCbernimmt die Skaylink GmbH keine Haftung f\xFCr solche Inhalte, die ausdr\xFCcklich als fremde Inhalte gekennzeichnet sind, oder f\xFCr die sich dies aus den Umst\xE4nden ergibt.
  Die Skaylink GmbH ist nicht daf\xFCr verantwortlich, dass solche Inhalte Dritter vollst\xE4ndig, richtig, aktuell und rechtm\xE4\xDFig sind und nicht in unzul\xE4ssiger Weise in Rechtsg\xFCter Dritter eingreifen.
  Dies gilt auch, soweit auf fremde Inhalte durch einen Link verwiesen wird.

  Die Skaylink GmbH beh\xE4lt sich das Recht vor, ohne vorherige Ank\xFCndigung \xC4nderungen oder Erg\xE4nzungen der bereitgestellten Informationen vorzunehmen oder diese zu entfernen.

  Auf keinen Fall haftet die Skaylink GmbH f\xFCr Sch\xE4den, die durch fehlende Nutzungsm\xF6glichkeiten oder Datenverluste im Zusammenhang mit der Nutzung von Dokumenten oder Informationen bzw. der Erbringung von Dienstleistungen entstehen, die auf dieser Website zug\xE4nglich sind.
`]}class ys extends E{constructor(e){super(),$(this,e,_s,ks,S,{})}}function Ft(r,e,n){const t=r.slice();return t[1]=e[n],t}function Zt(r){let e,n;return e=new ii({props:{path:r[1].path,component:r[1].component}}),{c(){q(e.$$.fragment)},m(t,i){O(e,t,i),n=!0},p:h,i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function xs(r){let e,n,t=r[0],i=[];for(let o=0;o<t.length;o+=1)i[o]=Zt(Ft(r,t,o));const s=o=>R(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=je()},m(o,l){for(let a=0;a<i.length;a+=1)i[a].m(o,l);b(o,e,l),n=!0},p(o,l){if(l&1){t=o[0];let a;for(a=0;a<t.length;a+=1){const c=Ft(o,t,a);i[a]?(i[a].p(c,l),N(i[a],1)):(i[a]=Zt(c),i[a].c(),N(i[a],1),i[a].m(e.parentNode,e))}for(oe(),a=t.length;a<i.length;a+=1)s(a);ae()}},i(o){if(!n){for(let l=0;l<t.length;l+=1)N(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)R(i[l]);n=!1},d(o){ve(i,o),o&&w(e)}}}function Ss(r){let e,n,t;return n=new Vn({props:{$$slots:{default:[xs]},$$scope:{ctx:r}}}),{c(){e=g("div"),q(n.$$.fragment),_(e,"id","router"),_(e,"class","svelte-c6nqnl")},m(i,s){b(i,e,s),O(n,e,null),t=!0},p(i,[s]){const o={};s&16&&(o.$$scope={dirty:s,ctx:i}),n.$set(o)},i(i){t||(N(n.$$.fragment,i),t=!0)},o(i){R(n.$$.fragment,i),t=!1},d(i){i&&w(e),W(n)}}}function $s(r){return[[{path:"/NEXUSe2e-website/",component:Si},{path:"/NEXUSe2e-website/product",component:Ii},{path:"/NEXUSe2e-website/product/features",component:Ti},{path:"/NEXUSe2e-website/product/scenarios",component:Ri},{path:"/NEXUSe2e-website/service",component:Mi},{path:"/NEXUSe2e-website/documentation",component:Bi},{path:"/NEXUSe2e-website/documentation/installation",component:qi},{path:"/NEXUSe2e-website/documentation/installation/system-requirements",component:er},{path:"/NEXUSe2e-website/documentation/installation/setting-up",component:Gi},{path:"/NEXUSe2e-website/documentation/installation/setting-up-for-mobile",component:Vi},{path:"/NEXUSe2e-website/documentation/installation/external-config",component:ji},{path:"/NEXUSe2e-website/documentation/upgrade",component:cr},{path:"/NEXUSe2e-website/documentation/upgrade/checklist",component:ir},{path:"/NEXUSe2e-website/documentation/upgrade/from-4-to-4",component:or},{path:"/NEXUSe2e-website/documentation/configuration/",component:br},{path:"/NEXUSe2e-website/documentation/configuration/alter-url",component:fr},{path:"/NEXUSe2e-website/documentation/configuration/mssql-auth",component:Sr},{path:"/NEXUSe2e-website/documentation/configuration/windows-service",component:Tr},{path:"/NEXUSe2e-website/documentation/configuration/backend-integration",component:gr},{path:"/NEXUSe2e-website/documentation/configuration/xsd-schema-validation",component:Ar},{path:"/NEXUSe2e-website/documentation/configuration/log4j-logging",component:_r},{path:"/NEXUSe2e-website/documentation/security",component:Br},{path:"/NEXUSe2e-website/documentation/security/client-auth",component:Cr},{path:"/NEXUSe2e-website/documentation/security/secure-endpoint-config",component:zr},{path:"/NEXUSe2e-website/documentation/security/ssl",component:jr},{path:"/NEXUSe2e-website/documentation/messaging",component:es},{path:"/NEXUSe2e-website/documentation/messaging/first-steps",component:Gr},{path:"/NEXUSe2e-website/documentation/messaging/testing-connectivity",component:os},{path:"/NEXUSe2e-website/documentation/messaging/unconfigured-content-type",component:cs},{path:"/NEXUSe2e-website/documentation/messaging/http-plain-messaging",component:Vr},{path:"/NEXUSe2e-website/documentation/messaging/backend-web-service-integration",component:qr},{path:"/NEXUSe2e-website/documentation/messaging/purging",component:is},{path:"/NEXUSe2e-website/downloads",component:ms},{path:"/NEXUSe2e-website/contact",component:vs},{path:"/NEXUSe2e-website/imprint",component:ys}]]}class Es extends E{constructor(e){super(),$(this,e,$s,Ss,S,{})}}const Ts="/NEXUSe2e-website/assets/nexus_logo.db89ed63.png";function Gt(r,e,n){const t=r.slice();return t[8]=e[n],t}function Qt(r){let e,n;return{c(){e=xe("svg"),n=xe("path"),_(n,"d","M8.25 4.5l7.5 7.5-7.5 7.5"),_(e,"fill","none"),_(e,"viewBox","0 0 24 24"),_(e,"stroke-width","2.5"),_(e,"stroke","currentColor"),_(e,"class","navigation-list-item__sub-icon svelte-1suezlb"),se(e,"active",r[2])},m(t,i){b(t,e,i),k(e,n)},p(t,i){i&4&&se(e,"active",t[2])},d(t){t&&w(e)}}}function Jt(r){let e,n,t=r[0].subroutes,i=[];for(let o=0;o<t.length;o+=1)i[o]=Vt(Gt(r,t,o));const s=o=>R(i[o],1,1,()=>{i[o]=null});return{c(){e=g("ul");for(let o=0;o<i.length;o+=1)i[o].c();_(e,"class","navigation-list-item__sub-list svelte-1suezlb"),se(e,"active",r[2])},m(o,l){b(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);n=!0},p(o,l){if(l&19){t=o[0].subroutes;let a;for(a=0;a<t.length;a+=1){const c=Gt(o,t,a);i[a]?(i[a].p(c,l),N(i[a],1)):(i[a]=Vt(c),i[a].c(),N(i[a],1),i[a].m(e,null))}for(oe(),a=t.length;a<i.length;a+=1)s(a);ae()}(!n||l&4)&&se(e,"active",o[2])},i(o){if(!n){for(let l=0;l<t.length;l+=1)N(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)R(i[l]);n=!1},d(o){o&&w(e),ve(i,o)}}}function Vt(r){let e,n;return e=new kn({props:{navItem:r[8],activeRoute:r[1]}}),e.$on("setActive",r[4]),{c(){q(e.$$.fragment)},m(t,i){O(e,t,i),n=!0},p(t,i){const s={};i&1&&(s.navItem=t[8]),i&2&&(s.activeRoute=t[1]),e.$set(s)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Ns(r){let e,n,t,i=r[0].text+"",s,o,l,a,c,u,p=r[0].subroutes&&Qt(r),d=r[0].subroutes&&Jt(r);return{c(){e=g("li"),n=g("div"),t=g("span"),s=le(i),o=X(),p&&p.c(),l=X(),d&&d.c(),_(n,"class","navigation-list-item__text svelte-1suezlb"),se(n,"active",r[0].route===r[1]),_(e,"class","navigation-list-item")},m(f,y){b(f,e,y),k(e,n),k(n,t),k(t,s),k(n,o),p&&p.m(n,null),k(e,l),d&&d.m(e,null),a=!0,c||(u=[Q(n,"click",r[3]),Q(n,"keypress",r[5])],c=!0)},p(f,[y]){(!a||y&1)&&i!==(i=f[0].text+"")&&Re(s,i),f[0].subroutes?p?p.p(f,y):(p=Qt(f),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!a||y&3)&&se(n,"active",f[0].route===f[1]),f[0].subroutes?d?(d.p(f,y),y&1&&N(d,1)):(d=Jt(f),d.c(),N(d,1),d.m(e,null)):d&&(oe(),R(d,1,1,()=>{d=null}),ae())},i(f){a||(N(d),a=!0)},o(f){R(d),a=!1},d(f){f&&w(e),p&&p.d(),d&&d.d(),c=!1,te(u)}}}function Us(r,e,n){let t;const i=cn();let{navItem:s}=e,{activeRoute:o}=e;function l(p){p.stopPropagation(),c(),i("setActive",s.route)}function a({detail:p}){c(),i("setActive",p)}function c(){const p=s.subroutes===void 0;window.innerWidth<640&&p&&$e.set(!1)}function u(p){be.call(this,r,p)}return r.$$set=p=>{"navItem"in p&&n(0,s=p.navItem),"activeRoute"in p&&n(1,o=p.activeRoute)},r.$$.update=()=>{r.$$.dirty&3&&n(2,t=o.includes(s.route))},[s,o,t,l,a,u]}class kn extends E{constructor(e){super(),$(this,e,Us,Ns,S,{navItem:0,activeRoute:1})}}function Kt(r,e,n){const t=r.slice();return t[4]=e[n],t}function Yt(r){let e,n;return e=new kn({props:{navItem:r[4],activeRoute:r[1]}}),e.$on("setActive",r[2]),{c(){q(e.$$.fragment)},m(t,i){O(e,t,i),n=!0},p(t,i){const s={};i&1&&(s.navItem=t[4]),i&2&&(s.activeRoute=t[1]),e.$set(s)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function As(r){let e,n,t=r[0],i=[];for(let o=0;o<t.length;o+=1)i[o]=Yt(Kt(r,t,o));const s=o=>R(i[o],1,1,()=>{i[o]=null});return{c(){e=g("ul");for(let o=0;o<i.length;o+=1)i[o].c();_(e,"class","the-navigation__list svelte-1o65xxw")},m(o,l){b(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);n=!0},p(o,[l]){if(l&7){t=o[0];let a;for(a=0;a<t.length;a+=1){const c=Kt(o,t,a);i[a]?(i[a].p(c,l),N(i[a],1)):(i[a]=Yt(c),i[a].c(),N(i[a],1),i[a].m(e,null))}for(oe(),a=t.length;a<i.length;a+=1)s(a);ae()}},i(o){if(!n){for(let l=0;l<t.length;l+=1)N(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)R(i[l]);n=!1},d(o){o&&w(e),ve(i,o)}}}function Is(r,e,n){const t=cn();let{navItems:i}=e,{activeItem:s}=e;function o({detail:l}){t("setActive",l)}return r.$$set=l=>{"navItems"in l&&n(0,i=l.navItems),"activeItem"in l&&n(1,s=l.activeItem)},[i,s,o]}class en extends E{constructor(e){super(),$(this,e,Is,As,S,{navItems:0,activeItem:1})}}function Xs(r){let e,n,t,i,s;return n=new en({props:{navItems:r[1],activeItem:r[0]}}),n.$on("setActive",r[3]),i=new en({props:{navItems:r[2],activeItem:r[0]}}),i.$on("setActive",r[3]),{c(){e=g("nav"),q(n.$$.fragment),t=X(),q(i.$$.fragment),_(e,"id","the-navigation"),_(e,"class","svelte-79l316")},m(o,l){b(o,e,l),O(n,e,null),k(e,t),O(i,e,null),s=!0},p(o,[l]){const a={};l&1&&(a.activeItem=o[0]),n.$set(a);const c={};l&1&&(c.activeItem=o[0]),i.$set(c)},i(o){s||(N(n.$$.fragment,o),N(i.$$.fragment,o),s=!0)},o(o){R(n.$$.fragment,o),R(i.$$.fragment,o),s=!1},d(o){o&&w(e),W(n),W(i)}}}function Cs(r,e,n){const t=[{route:"/NEXUSe2e-website/",text:"Home"},{route:"/NEXUSe2e-website/product",text:"Product",subroutes:[{route:"/NEXUSe2e-website/product/features",text:"Features"},{route:"/NEXUSe2e-website/product/scenarios",text:"Scenarios"}]},{route:"/NEXUSe2e-website/service",text:"Service"},{route:"/NEXUSe2e-website/documentation",text:"Documentation",subroutes:[{route:"/NEXUSe2e-website/documentation/installation",text:"Installation",subroutes:[{route:"/NEXUSe2e-website/documentation/installation/system-requirements",text:"System Requirements"},{route:"/NEXUSe2e-website/documentation/installation/setting-up",text:"Setting up NEXUSe2e"},{route:"/NEXUSe2e-website/documentation/installation/setting-up-for-mobile",text:"Setting up NEXUSe2e for Mobile Admin App"},{route:"/NEXUSe2e-website/documentation/installation/external-config",text:"External Configuration Folder"}]},{route:"/NEXUSe2e-website/documentation/upgrade",text:"Upgrade",subroutes:[{route:"/NEXUSe2e-website/documentation/upgrade/checklist",text:"Upgrade Checklist"},{route:"/NEXUSe2e-website/documentation/upgrade/from-4-to-4",text:"NEXUSe2e from 4.x to 4.x"}]},{route:"/NEXUSe2e-website/documentation/configuration",text:"Configuration",subroutes:[{route:"/NEXUSe2e-website/documentation/configuration/alter-url",text:"How to Alter the NEXUSe2e URL"},{route:"/NEXUSe2e-website/documentation/configuration/mssql-auth",text:"Integrated Authentication with MSSQL"},{route:"/NEXUSe2e-website/documentation/configuration/windows-service",text:"Windows Service"},{route:"/NEXUSe2e-website/documentation/configuration/backend-integration",text:"NEXUSe2e Backend Integration"},{route:"/NEXUSe2e-website/documentation/configuration/xsd-schema-validation",text:"XSD - Schema Validation"},{route:"/NEXUSe2e-website/documentation/configuration/log4j-logging",text:"Logging with Log4j 2"}]},{route:"/NEXUSe2e-website/documentation/security",text:"Security",subroutes:[{route:"/NEXUSe2e-website/documentation/security/client-auth",text:"Client Authentication"},{route:"/NEXUSe2e-website/documentation/security/secure-endpoint-config",text:"Configure a secure web service endpoint"},{route:"/NEXUSe2e-website/documentation/security/ssl",text:"SSL"}]},{route:"/NEXUSe2e-website/documentation/messaging",text:"Messaging",subroutes:[{route:"/NEXUSe2e-website/documentation/messaging/first-steps",text:"First Steps in Messaging"},{route:"/NEXUSe2e-website/documentation/messaging/testing-connectivity",text:"Testing Connectivity"},{route:"/NEXUSe2e-website/documentation/messaging/unconfigured-content-type",text:"Unconfigured Content Type"},{route:"/NEXUSe2e-website/documentation/messaging/http-plain-messaging",text:"HTTP Plain Messaging"},{route:"/NEXUSe2e-website/documentation/messaging/backend-web-service-integration",text:"Backend Web Service Integration"},{route:"/NEXUSe2e-website/documentation/messaging/purging",text:"Conversation / Message Purging"},{route:"/NEXUSe2e-website/documentation/messaging/comet",text:"NEXUSe2e - comet"}]}]},{route:"/NEXUSe2e-website/downloads",text:"Downloads"}],i=[{route:"/NEXUSe2e-website/contact",text:"Contact"},{route:"/NEXUSe2e-website/imprint",text:"Legal Notices / Impressum"}];let s="/home";function o({detail:l}){n(0,s=l),hn(l)}return[s,t,i,o]}class Rs extends E{constructor(e){super(),$(this,e,Cs,Xs,S,{})}}function Ls(r){let e,n,t,i,s,o,l,a,c,u;return l=new Rs({}),{c(){e=g("div"),n=g("aside"),t=g("img"),s=X(),o=g("div"),q(l.$$.fragment),Pe(t.src,i=Ts)||_(t,"src",i),_(t,"alt","nexus logo"),_(t,"class","the-navigation-drawer__logo svelte-1nk0iid"),_(o,"class","the-navigation-drawer__content svelte-1nk0iid"),_(n,"id","the-navigation-drawer"),_(n,"class","svelte-1nk0iid"),_(e,"class","the-navigation-drawer__overlay svelte-1nk0iid"),se(e,"active",r[0])},m(p,d){b(p,e,d),k(e,n),k(n,t),k(n,s),k(n,o),O(l,o,null),a=!0,c||(u=[Q(t,"click",r[2]),Q(t,"keypress",r[5]),Q(n,"click",zs),Q(n,"keypress",r[4]),Q(e,"click",r[1]),Q(e,"keypress",r[3])],c=!0)},p(p,[d]){(!a||d&1)&&se(e,"active",p[0])},i(p){a||(N(l.$$.fragment,p),a=!0)},o(p){R(l.$$.fragment,p),a=!1},d(p){p&&w(e),W(l),c=!1,te(u)}}}const zs=r=>r.stopPropagation();function Ms(r,e,n){let t;ue(r,$e,c=>n(0,t=c));function i(){$e.set(!1)}function s(){hn("/")}function o(c){be.call(this,r,c)}function l(c){be.call(this,r,c)}function a(c){be.call(this,r,c)}return[t,i,s,o,l,a]}class Ds extends E{constructor(e){super(),$(this,e,Ms,Ls,S,{})}}function Bs(r){let e,n,t,i,s,o,l,a;return n=new Ds({}),s=new zn({}),l=new Es({}),{c(){e=g("main"),q(n.$$.fragment),t=X(),i=g("div"),q(s.$$.fragment),o=X(),q(l.$$.fragment),_(i,"id","content"),_(i,"class","svelte-1hx8wd3"),_(e,"class","svelte-1hx8wd3")},m(c,u){b(c,e,u),O(n,e,null),k(e,t),k(e,i),O(s,i,null),k(i,o),O(l,i,null),a=!0},p:h,i(c){a||(N(n.$$.fragment,c),N(s.$$.fragment,c),N(l.$$.fragment,c),a=!0)},o(c){R(n.$$.fragment,c),R(s.$$.fragment,c),R(l.$$.fragment,c),a=!1},d(c){c&&w(e),W(n),W(s),W(l)}}}class Hs extends E{constructor(e){super(),$(this,e,null,Bs,S,{})}}new Hs({target:document.getElementById("app")});
