import{$t as e,Dn as t,Lt as n,Mt as r,Rt as i,dn as a,jt as o,n as s,t as c}from"./VRow-Y9OI8PVy.js";import{t as l}from"./NEXUSe2eImage-BwnQYMf8.js";import{t as u}from"./marked.esm-rWN5bayK.js";var d=`/assets/new_service1-B6sXW8-l.png`,f=`/assets/new_service2-BA18WOAu.png`,p=[`innerHTML`],m=[`innerHTML`],h=[`innerHTML`],g=i({__name:`index`,setup(i){let g=u(`
# Services
---
All services are grouped into one of the following types:
- Inflow
- Outflow
- Support
After selecting the type (#1), the component selection (#2) is updated. The selected component is also removed as soon as the type is changed.
`),_=u(`
Depending on the type, the pipeline selection at the bottom gets visible or not. All inflow and outflow services have multiple pipelines available to work with. The Support Services are only referenced by other services and have no pipelines.
As soon as you pick a component, the parameter options for the selected component are shown. While every component defines their own required parameters, all services require at least the name. As soon as the service is saved, its shown in the overview list.
`),v=u(`
The Overview list shows all services which can be enabled or disabled at any time. When clicking on one service (#1), the common list view right side drawer will appear and shown the service configuration. For manual runs, the service can be triggered by clicking the play button (#2). The action bar in the drawer also contains a edit button (#3) and a close button (#4).
`);return(i,u)=>(e(),r(c,null,{default:a(()=>[n(s,{cols:`12`},{default:a(()=>[o(`div`,{innerHTML:t(g)},null,8,p),n(l,{src:d}),o(`div`,{innerHTML:t(_)},null,8,m),n(l,{src:f}),o(`div`,{innerHTML:t(v)},null,8,h)]),_:1})]),_:1}))}});export{g as default};