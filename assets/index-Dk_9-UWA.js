import{N as a}from"./NEXUSe2eImage-lrhM6WFg.js";import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as c,c as l,w as o,V as d,o as f,a as t,b as n,u as s,e as u}from"./index-B4nLAmZD.js";const h="/assets/services_flow-C55i1wx8.png",m=["innerHTML"],p=["innerHTML"],k=c({__name:"index",setup(w){const i=e(`
# Inflow and Outflow
---

For a very long time we worked with inbound and outbound in conjunction with frontend and backend. However, this is not only missleading or sometimes confusing but also unnecessary complicated. Starting with NEXUSe2e 10.x we try to focus only on the flow direction from NEXUSe2e perspective. Therefore all the wording is focused on the edges of your NEXUSe2e instance which is most likely some sort of service depending on your needs. There are rare instances where you want for example multiple outputs which softens the service pattern. Below you can see a selection of services sorted by type. Besides the Inflow and Outflow services you can also see Support services. This are special helper services that carry configuration and specific implementations of reusable functionality.
`),r=e(`
### Inflow
All inflow services are used to get data into NEXUSe2e. Its not important if data gets pushed into the service or if its fetched by a specific service. The important part is the general direction of the data flow. Its also not important if data is coming from a partner, or from any internal backend system.

### Outflow
Similar to Inflow services, the outflow services are used to move data out of NEXUSe2e. This can be done by pushing or pulling and it also works for all directions. Therefore services like \`httpPlainSender\` can be used for integration with partners and integration with internal backend systems at the same time. This was not possible in the old version of NEXUSe2e.
`);return(v,y)=>(f(),l(d,null,{default:o(()=>[t(u,{cols:"12"},{default:o(()=>[n("div",{innerHTML:s(i)},null,8,m),t(a,{src:h}),n("div",{innerHTML:s(r)},null,8,p)]),_:1})]),_:1}))}});export{k as default};
