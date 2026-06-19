import{Ct as e,Et as t,a as n,bt as r,ht as i,jt as a,mt as o,o as s,yt as c}from"./index-B21uHxR9.js";import{t as l}from"./marked.esm-DT5b__v5.js";import{t as u}from"./NEXUSe2eImage-gkMst0BH.js";var d=`/assets/new_service1-B6sXW8-l.png`,f=`/assets/new_service2-BA18WOAu.png`,p=[`innerHTML`],m=[`innerHTML`],h=[`innerHTML`],g=r({__name:`index`,setup(r){let g=l(`
# Services
---
All services are grouped into one of the following types:
- Inflow
- Outflow
- Support
After selecting the type (#1), the component selection (#2) is updated. The selected component is also removed as soon as the type is changed.
`),_=l(`
Depending on the type, the pipeline selection at the bottom gets visible or not. All inflow and outflow services have multiple pipelines available to work with. The Support Services are only referenced by other services and have no pipelines.
As soon as you pick a component, the parameter options for the selected component are shown. While every component defines their own required parameters, all services require at least the name. As soon as the service is saved, its shown in the overview list.
`),v=l(`
The Overview list shows all services which can be enabled or disabled at any time. When clicking on one service (#1), the common list view right side drawer will appear and shown the service configuration. For manual runs, the service can be triggered by clicking the play button (#2). The action bar in the drawer also contains a edit button (#3) and a close button (#4).
`);return(r,l)=>(e(),i(n,null,{default:t(()=>[c(s,{cols:`12`},{default:t(()=>[o(`div`,{innerHTML:a(g)},null,8,p),c(u,{src:d}),o(`div`,{innerHTML:a(_)},null,8,m),c(u,{src:f}),o(`div`,{innerHTML:a(v)},null,8,h)]),_:1})]),_:1}))}});export{g as default};