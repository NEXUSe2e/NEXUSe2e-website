import{At as e,Vt as t,gt as n,ht as r,lt as i,n as a,nn as o,t as s,ut as c}from"./VRow-D0FG8Fr6.js";import{t as l}from"./marked.esm-Ccg6WR5l.js";import{t as u}from"./NEXUSe2eImage-ClHFhnNY.js";var d=`/assets/components_list-CKWlwywt.png`,f=[`innerHTML`],p=[`innerHTML`],m=n({__name:`index`,setup(n){let m=l(`
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
`);return(n,l)=>(e(),c(s,null,{default:t(()=>[r(a,{cols:`12`},{default:t(()=>[i(`div`,{innerHTML:o(m)},null,8,f),r(u,{src:d}),i(`div`,{innerHTML:o(h)},null,8,p)]),_:1})]),_:1}))}});export{m as default};