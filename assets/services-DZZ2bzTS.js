import{Ht as e,_t as t,dt as n,gt as r,jt as i,n as a,rn as o,t as s,ut as c}from"./VRow-DyRmL_Vx.js";import{t as l}from"./marked.esm-CCiCWKfQ.js";import{t as u}from"./NEXUSe2eImage-DiNNxQG7.js";var d=`/assets/new_service1-B6sXW8-l.png`,f=`/assets/new_service2-BA18WOAu.png`,p=[`innerHTML`],m=[`innerHTML`],h=[`innerHTML`],g=t({__name:`index`,setup(t){let g=l(`
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
`);return(t,l)=>(i(),n(s,null,{default:e(()=>[r(a,{cols:`12`},{default:e(()=>[c(`div`,{innerHTML:o(g)},null,8,p),r(u,{src:d}),c(`div`,{innerHTML:o(_)},null,8,m),r(u,{src:f}),c(`div`,{innerHTML:o(v)},null,8,h)]),_:1})]),_:1}))}});export{g as default};