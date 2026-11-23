import{$t as e,Dn as t,Lt as n,Mt as r,Rt as i,dn as a,jt as o,n as s,t as c}from"./VRow-Y9OI8PVy.js";import{t as l}from"./NEXUSe2eImage-BwnQYMf8.js";import{t as u}from"./marked.esm-rWN5bayK.js";var d=`/assets/services_flow-C55i1wx8.png`,f=[`innerHTML`],p=[`innerHTML`],m=i({__name:`index`,setup(i){let m=u(`
# Inflow and Outflow
---

For a very long time we worked with inbound and outbound in conjunction with frontend and backend. However, this is not only missleading or sometimes confusing but also unnecessary complicated. Starting with NEXUSe2e 10.x we try to focus only on the flow direction from NEXUSe2e perspective. Therefore all the wording is focused on the edges of your NEXUSe2e instance which is most likely some sort of service depending on your needs. There are rare instances where you want for example multiple outputs which softens the service pattern. Below you can see a selection of services sorted by type. Besides the Inflow and Outflow services you can also see Support services. This are special helper services that carry configuration and specific implementations of reusable functionality.
`),h=u(`
### Inflow
All inflow services are used to get data into NEXUSe2e. Its not important if data gets pushed into the service or if its fetched by a specific service. The important part is the general direction of the data flow. Its also not important if data is coming from a partner, or from any internal backend system.

### Outflow
Similar to Inflow services, the outflow services are used to move data out of NEXUSe2e. This can be done by pushing or pulling and it also works for all directions. Therefore services like \`httpPlainSender\` can be used for integration with partners and integration with internal backend systems at the same time. This was not possible in the old version of NEXUSe2e.
`);return(i,u)=>(e(),r(c,null,{default:a(()=>[n(s,{cols:`12`},{default:a(()=>[o(`div`,{innerHTML:t(m)},null,8,f),n(l,{src:d}),o(`div`,{innerHTML:t(h)},null,8,p)]),_:1})]),_:1}))}});export{m as default};