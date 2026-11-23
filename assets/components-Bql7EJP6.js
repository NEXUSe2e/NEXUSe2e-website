import{$t as e,Dn as t,Lt as n,Mt as r,Rt as i,dn as a,jt as o,n as s,t as c}from"./VRow-Y9OI8PVy.js";import{t as l}from"./NEXUSe2eImage-BwnQYMf8.js";import{t as u}from"./marked.esm-rWN5bayK.js";var d=`/assets/components_list-CKWlwywt.png`,f=[`innerHTML`],p=[`innerHTML`],m=i({__name:`index`,setup(i){let m=u(`
# Components
---

All components are automatically scanned and available after startup. Manuall registration is no longer required. The components list shows all available components and their types. The components list is used to reference components in services or pipelets.
`),h=u(`
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
`);return(i,u)=>(e(),r(c,null,{default:a(()=>[n(s,{cols:`12`},{default:a(()=>[o(`div`,{innerHTML:t(m)},null,8,f),n(l,{src:d}),o(`div`,{innerHTML:t(h)},null,8,p)]),_:1})]),_:1}))}});export{m as default};