import{Ht as e,_t as t,dt as n,gt as r,jt as i,n as a,rn as o,t as s,ut as c}from"./VRow-DyRmL_Vx.js";import{t as l}from"./marked.esm-CCiCWKfQ.js";import{t as u}from"./NEXUSe2eImage-DiNNxQG7.js";var d=`/assets/components_list-CKWlwywt.png`,f=[`innerHTML`],p=[`innerHTML`],m=t({__name:`index`,setup(t){let m=l(`
# Components
---

All components are automatically scanned and available after startup. Manuall registration is no longer required. The components list shows all available components and their types. The components list is used to reference components in services or pipelets.
`),h=l(`
### #1 Name
Shows the name of the component. The name is unique and used to reference the component in service or pipelet configurations.

### #2 Type
Type shows the type of the component. This is either
- Pipelet, used in pipelines
- Inflow Service, see [Inflow and Outflow](#/new/docs/concepts/flows)
- Outflow Service, see [Inflow and Outflow](#/new/docs/concepts/flows)
- Support Service, a special service that is used to configure and implement reusable functionality. May be used in other services or pipelets.

### #3 Class
The fully qualified class name of the component.

### #4 Description
The description shows a short description what the component does.

### #5 Filter
The filter can be used to filter the list of components. The filter is applied to the name or type of the component.
`);return(t,l)=>(i(),n(s,null,{default:e(()=>[r(a,{cols:`12`},{default:e(()=>[c(`div`,{innerHTML:o(m)},null,8,f),r(u,{src:d}),c(`div`,{innerHTML:o(h)},null,8,p)]),_:1})]),_:1}))}});export{m as default};