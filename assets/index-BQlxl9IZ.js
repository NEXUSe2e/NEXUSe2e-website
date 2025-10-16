import{N as s}from"./NEXUSe2eImage-NpENTOiw.js";import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as l,c as p,w as i,V as d,o as h,a as n,b as o,u as t,e as m}from"./index-r7MUJSo1.js";const u="/assets/new_service1-B6sXW8-l.png",v="/assets/new_service2-BA18WOAu.png",w=["innerHTML"],_=["innerHTML"],f=["innerHTML"],H=l({__name:"index",setup(g){const r=e(`
# Services
---
All services are grouped into one of the following types:
- Inflow
- Outflow
- Support
After selecting the type (#1), the component selection (#2) is updated. The selected component is also removed as soon as the type is changed.
`),a=e(`
Depending on the type, the pipeline selection at the bottom gets visible or not. All inflow and outflow services have multiple pipelines available to work with. The Support Services are only referenced by other services and have no pipelines.
As soon as you pick a component, the parameter options for the selected component are shown. While every component defines their own required parameters, all services require at least the name. As soon as the service is saved, its shown in the overview list.
`),c=e(`
The Overview list shows all services which can be enabled or disabled at any time. When clicking on one service (#1), the common list view right side drawer will appear and shown the service configuration. For manual runs, the service can be triggered by clicking the play button (#2). The action bar in the drawer also contains a edit button (#3) and a close button (#4).
`);return(b,y)=>(h(),p(d,null,{default:i(()=>[n(m,{cols:"12"},{default:i(()=>[o("div",{innerHTML:t(r)},null,8,w),n(s,{src:u}),o("div",{innerHTML:t(a)},null,8,_),n(s,{src:v}),o("div",{innerHTML:t(c)},null,8,f)]),_:1})]),_:1}))}});export{H as default};
