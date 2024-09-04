import{m as de}from"./marked.esm-8ZxQ78w7.js";import{p as se,I as M,m as oe,a0 as Te,n as ie,a1 as Se,s as re,a2 as Re,a3 as Le,a4 as Ae,a5 as U,v as b,a6 as ve,a7 as Ne,a8 as fe,a9 as Ue,O as we,a,aa as he,K as x,ab as Me,ac as Oe,q as Ee,r as xe,x as _e,ad as Ge,G as W,N as Be,ae as pe,af as He,g as Xe,i as We,ag as je,l as $e,ah as qe,ai as Ke,aj as Ze,H as Je,ak as Qe,y as Ye,z as et,B as tt,E as lt,al as at,t as nt,am as st,an as ot,ao as me,ap as it,J as rt,aq as ct,L as j,ar as ut,Y as D,as as ge,d as Ie,o as k,c as K,w as A,at as dt,b as d,Z as q,au as De,av as le,U as vt,aw as $,W as I,X as ae,u as ne,T as ft,V as ye,e as be}from"./index-B4nLAmZD.js";function ht(e){let{selectedElement:o,containerElement:n,isRtl:i,isHorizontal:s}=e;const v=O(s,n),c=Fe(s,i,n),y=O(s,o),h=Ve(s,o),C=y*.4;return c>h?h-C:c+v<h+y?h-v+y+C:c}function pt(e){let{selectedElement:o,containerElement:n,isHorizontal:i}=e;const s=O(i,n),v=Ve(i,o),c=O(i,o);return v-s/2+c/2}function ke(e,o){const n=e?"scrollWidth":"scrollHeight";return(o==null?void 0:o[n])||0}function mt(e,o){const n=e?"clientWidth":"clientHeight";return(o==null?void 0:o[n])||0}function Fe(e,o,n){if(!n)return 0;const{scrollLeft:i,offsetWidth:s,scrollWidth:v}=n;return e?o?v-s+i:i:n.scrollTop}function O(e,o){const n=e?"offsetWidth":"offsetHeight";return(o==null?void 0:o[n])||0}function Ve(e,o){const n=e?"offsetLeft":"offsetTop";return(o==null?void 0:o[n])||0}const gt=Symbol.for("vuetify:v-slide-group"),ze=se({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:gt},nextIcon:{type:M,default:"$next"},prevIcon:{type:M,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...oe(),...Te({mobile:null}),...ie(),...Se({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ce=re()({name:"VSlideGroup",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{isRtl:i}=Re(),{displayClasses:s,mobile:v}=Le(e),c=Ae(e,e.symbol),y=U(!1),h=U(0),C=U(0),_=U(0),f=b(()=>e.direction==="horizontal"),{resizeRef:p,contentRect:T}=ve(),{resizeRef:m,contentRect:F}=ve(),r=Ne(),S=b(()=>({container:p.el,duration:200,easing:"easeOutQuart"})),Z=b(()=>c.selected.value.length?c.items.value.findIndex(t=>t.id===c.selected.value[0]):-1),w=b(()=>c.selected.value.length?c.items.value.findIndex(t=>t.id===c.selected.value[c.selected.value.length-1]):-1);if(fe){let t=-1;Ue(()=>[c.selected.value,T.value,F.value,f.value],()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{if(T.value&&F.value){const l=f.value?"width":"height";C.value=T.value[l],_.value=F.value[l],y.value=C.value+1<_.value}if(Z.value>=0&&m.el){const l=m.el.children[w.value];R(l,e.centerActive)}})})}const V=U(!1);function R(t,l){let u=0;l?u=pt({containerElement:p.el,isHorizontal:f.value,selectedElement:t}):u=ht({containerElement:p.el,isHorizontal:f.value,isRtl:i.value,selectedElement:t}),G(u)}function G(t){if(!fe||!p.el)return;const l=O(f.value,p.el),u=Fe(f.value,i.value,p.el);if(!(ke(f.value,p.el)<=l||Math.abs(t-u)<16)){if(f.value&&i.value&&p.el){const{scrollWidth:X,offsetWidth:te}=p.el;t=X-te-t}f.value?r.horizontal(t,S.value):r(t,S.value)}}function g(t){const{scrollTop:l,scrollLeft:u}=t.target;h.value=f.value?u:l}function B(t){if(V.value=!0,!(!y.value||!m.el)){for(const l of t.composedPath())for(const u of m.el.children)if(u===l){R(u);return}}}function J(t){V.value=!1}let L=!1;function H(t){var l;!L&&!V.value&&!(t.relatedTarget&&((l=m.el)!=null&&l.contains(t.relatedTarget)))&&E(),L=!1}function N(){L=!0}function Q(t){if(!m.el)return;function l(u){t.preventDefault(),E(u)}f.value?t.key==="ArrowRight"?l(i.value?"prev":"next"):t.key==="ArrowLeft"&&l(i.value?"next":"prev"):t.key==="ArrowDown"?l("next"):t.key==="ArrowUp"&&l("prev"),t.key==="Home"?l("first"):t.key==="End"&&l("last")}function E(t){var u,P;if(!m.el)return;let l;if(!t)l=Me(m.el)[0];else if(t==="next"){if(l=(u=m.el.querySelector(":focus"))==null?void 0:u.nextElementSibling,!l)return E("first")}else if(t==="prev"){if(l=(P=m.el.querySelector(":focus"))==null?void 0:P.previousElementSibling,!l)return E("last")}else t==="first"?l=m.el.firstElementChild:t==="last"&&(l=m.el.lastElementChild);l&&l.focus({preventScroll:!0})}function z(t){const l=f.value&&i.value?-1:1,u=(t==="prev"?-l:l)*C.value;let P=h.value+u;if(f.value&&i.value&&p.el){const{scrollWidth:X,offsetWidth:te}=p.el;P+=X-te}G(P)}const Y=b(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),ee=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!v.value;case!0:return y.value||Math.abs(h.value)>0;case"mobile":return v.value||y.value||Math.abs(h.value)>0;default:return!v.value&&(y.value||Math.abs(h.value)>0)}}),ce=b(()=>Math.abs(h.value)>1),ue=b(()=>{if(!p.value)return!1;const t=ke(f.value,p.el),l=mt(f.value,p.el);return t-l-Math.abs(h.value)>1});return we(()=>a(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":ee.value,"v-slide-group--is-overflowing":y.value},s.value,e.class],style:e.style,tabindex:V.value||c.selected.value.length?-1:0,onFocus:H},{default:()=>{var t,l,u;return[ee.value&&a("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ce.value}],onMousedown:N,onClick:()=>ce.value&&z("prev")},[((t=n.prev)==null?void 0:t.call(n,Y.value))??a(he,null,{default:()=>[a(x,{icon:i.value?e.nextIcon:e.prevIcon},null)]})]),a("div",{key:"container",ref:p,class:"v-slide-group__container",onScroll:g},[a("div",{ref:m,class:"v-slide-group__content",onFocusin:B,onFocusout:J,onKeydown:Q},[(l=n.default)==null?void 0:l.call(n,Y.value)])]),ee.value&&a("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ue.value}],onMousedown:N,onClick:()=>ue.value&&z("next")},[((u=n.next)==null?void 0:u.call(n,Y.value))??a(he,null,{default:()=>[a(x,{icon:i.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:h,focus:E}}}),Pe=Symbol.for("vuetify:v-chip-group"),yt=se({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Oe},...ze(),...oe(),...Se({selectedClass:"v-chip--selected"}),...ie(),...Ee(),...xe({variant:"tonal"})},"VChipGroup");re()({name:"VChipGroup",props:yt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:i}=_e(e),{isSelected:s,select:v,next:c,prev:y,selected:h}=Ae(e,Pe);return Ge({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),we(()=>{const C=Ce.filterProps(e);return a(Ce,Be(C,{class:["v-chip-group",{"v-chip-group--column":e.column},i.value,e.class],style:e.style}),{default:()=>{var _;return[(_=n.default)==null?void 0:_.call(n,{isSelected:s,select:v,next:c,prev:y,selected:h.value})]}})}),{}}});const bt=se({activeClass:String,appendAvatar:String,appendIcon:M,closable:Boolean,closeIcon:{type:M,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:pe(),onClickOnce:pe(),...He(),...oe(),...Xe(),...We(),...je(),...$e(),...qe(),...Ke(),...ie({tag:"span"}),...Ee(),...xe({variant:"tonal"})},"VChip"),kt=re()({name:"VChip",directives:{Ripple:Ze},props:bt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,o){let{attrs:n,emit:i,slots:s}=o;const{t:v}=Je(),{borderClasses:c}=Qe(e),{colorClasses:y,colorStyles:h,variantClasses:C}=Ye(e),{densityClasses:_}=et(e),{elevationClasses:f}=tt(e),{roundedClasses:p}=lt(e),{sizeClasses:T}=at(e),{themeClasses:m}=_e(e),F=nt(e,"modelValue"),r=st(e,Pe,!1),S=ot(e,n),Z=b(()=>e.link!==!1&&S.isLink.value),w=b(()=>!e.disabled&&e.link!==!1&&(!!r||e.link||S.isClickable.value)),V=b(()=>({"aria-label":v(e.closeLabel),onClick(g){g.preventDefault(),g.stopPropagation(),F.value=!1,i("click:close",g)}}));function R(g){var B;i("click",g),w.value&&((B=S.navigate)==null||B.call(S,g),r==null||r.toggle())}function G(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),R(g))}return()=>{const g=S.isLink.value?"a":e.tag,B=!!(e.appendIcon||e.appendAvatar),J=!!(B||s.append),L=!!(s.close||e.closable),H=!!(s.filter||e.filter)&&r,N=!!(e.prependIcon||e.prependAvatar),Q=!!(N||s.prepend),E=!r||r.isSelected.value;return F.value&&me(a(g,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":w.value,"v-chip--filter":H,"v-chip--pill":e.pill},m.value,c.value,E?y.value:void 0,_.value,f.value,p.value,T.value,C.value,r==null?void 0:r.selectedClass.value,e.class],style:[E?h.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:S.href.value,tabindex:w.value?0:void 0,onClick:R,onKeydown:w.value&&!Z.value&&G},{default:()=>{var z;return[rt(w.value,"v-chip"),H&&a(ct,{key:"filter"},{default:()=>[me(a("div",{class:"v-chip__filter"},[s.filter?a(j,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},s.filter):a(x,{key:"filter-icon",icon:e.filterIcon},null)]),[[ut,r.isSelected.value]])]}),Q&&a("div",{key:"prepend",class:"v-chip__prepend"},[s.prepend?a(j,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},s.prepend):a(D,null,[e.prependIcon&&a(x,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(ge,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),a("div",{class:"v-chip__content","data-no-activator":""},[((z=s.default)==null?void 0:z.call(s,{isSelected:r==null?void 0:r.isSelected.value,selectedClass:r==null?void 0:r.selectedClass.value,select:r==null?void 0:r.select,toggle:r==null?void 0:r.toggle,value:r==null?void 0:r.value.value,disabled:e.disabled}))??e.text]),J&&a("div",{key:"append",class:"v-chip__append"},[s.append?a(j,{key:"append-defaults",disabled:!B,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},s.append):a(D,null,[e.appendIcon&&a(x,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(ge,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),L&&a("button",Be({key:"close",class:"v-chip__close",type:"button"},V.value),[s.close?a(j,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},s.close):a(x,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[it("ripple"),w.value&&e.ripple,null]])}}}),Ct={class:"text-h4"},St=d("div",{class:"text-h6"},"Changes",-1),At=["innerHTML"],wt=d("div",{class:"text-h6"},"Known Issues",-1),Et=["innerHTML"],xt=d("div",{class:"text-h6"},"Checksums",-1),_t=d("br",null,null,-1),Bt=d("span",{class:"font-weight-bold"},"MD5:",-1),It={class:"mr-2"},Dt=d("br",null,null,-1),Ft=d("span",{class:"font-weight-bold"},"SHA256:",-1),Vt={class:"mr-2"},zt=d("div",{class:"text-h6"},"Downloads",-1),Pt=d("br",null,null,-1),Tt=["href"],Rt="https://github.com/NEXUSe2e/NEXUSe2e/releases/download",Lt=Ie({__name:"DownloadCard",props:{version:{type:Object,required:!0},latest:{type:Boolean,required:!0}},setup(e){const o=n=>{navigator.clipboard.writeText(n).then(()=>{alert("In die Zwischenablage kopiert")})};return(n,i)=>(k(),K(ft,{class:"w-100 w-md-75"},{default:A(()=>[a(dt,{class:"d-flex align-center ga-3"},{default:A(()=>[d("div",Ct,q(e.version.version),1),e.latest?(k(),K(kt,{key:0,size:"small",variant:"outlined",color:"success"},{default:A(()=>[De(" latest ")]),_:1})):le("",!0)]),_:1}),a(vt,null,{default:A(()=>[a($),St,d("ul",null,[(k(!0),I(D,null,ae(e.version.changes,(s,v)=>(k(),I("li",{key:v,innerHTML:ne(de)(s)},null,8,At))),128))]),a($),e.version.knownIssues&&e.version.knownIssues.length>0?(k(),I(D,{key:0},[wt,d("ul",null,[(k(!0),I(D,null,ae(e.version.knownIssues,(s,v)=>(k(),I("li",{key:v,innerHTML:ne(de)(s)},null,8,Et))),128))]),a($)],64)):le("",!0),xt,_t,Bt,d("div",{class:"cursor-pointer",onClick:i[0]||(i[0]=()=>o(e.version.md5))},[d("span",It,q(e.version.md5),1),a(x,{size:"small",icon:"mdi-content-copy"})]),Dt,d("div",null,[Ft,d("div",{class:"cursor-pointer",onClick:i[1]||(i[1]=()=>o(e.version.sha256))},[d("span",Vt,q(e.version.sha256),1),a(x,{size:"small",icon:"mdi-content-copy"})])]),e.version.download?(k(),I(D,{key:1},[a($),zt,Pt,d("a",{class:"border px-2 py-1",target:"_blank",rel:"noreferrer",href:`${Rt}/${e.version.download}`}," .war via GitHub ",8,Tt)],64)):le("",!0)]),_:1})]),_:1}))}}),Nt=[{version:"NEXUSe2e 5.11.6",md5:"1328F4D46D2E19A5AD8D51AA665A53B3",sha256:"05426B426FE352FFAD339A02687804EC9B081622ADCAA5D6C4773C5CFA68A985",download:"v5.11.6/nexuse2e-webapp-5.11.6.war",changes:["Fixed payload download links and backend status display in new UI (/ui).","Set autocomplete to off for login form."]},{version:"NEXUSe2e 5.11.5",md5:"BB37D202B5F4B6F52E02AE73489BE78A",sha256:"358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2",download:"v5.11.5/nexuse2e-webapp-5.11.5.war",changes:["Added basic auth option for http receiver.","Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.","Improved token replacement."]},{version:"NEXUSe2e 5.11.1",md5:"5366B9E97F13A489B0540DC7299698CD",sha256:"2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9",download:"v5.11.1/nexuse2e-webapp-5.11.1.war",changes:["Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.","Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.","Bumped Postgres version to version 42.2.25",'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.']},{version:"NEXUSe2e 5.9.15",md5:"2D3869567E10047C90CD7729A4B48864",sha256:"C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39",download:"v5.9.15/nexuse2e-webapp-5.9.15.war",changes:["Added http header folding option to prevent content type from being folded into a new line."]},{version:"NEXUSe2e 5.9.11",md5:"8E547BF1B85D871A283C73FCEB67BC86",sha256:"EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B",changes:["Implemented HttpResponses for synchronous messaging","Fixed deadlock when synchronously receiving messages","Fixed backend status"],knownIssues:['"Synchronous" for incoming messages still does not work properly in combination with "Reliable"']}],Ut=d("h1",null,"Downloads",-1),Mt=d("hr",null,null,-1),Ot=d("br",null,null,-1),Xt=Ie({__name:"index",setup(e){return(o,n)=>(k(),K(ye,null,{default:A(()=>[a(be,{cols:"12"},{default:A(()=>[Ut,Mt,Ot,a(ye,null,{default:A(()=>[(k(!0),I(D,null,ae(ne(Nt),(i,s)=>(k(),K(be,{key:s,cols:"12"},{default:A(()=>[a(Lt,{version:i,latest:s===0},{default:A(()=>[De(q(i),1)]),_:2},1032,["version","latest"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}});export{Xt as default};