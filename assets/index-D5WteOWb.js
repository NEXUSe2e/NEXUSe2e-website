import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as c,c as h,w as n,V as d,o as p,a as t,b as a,u as o,Q as i,e as m}from"./index-BII6WmDy.js";const u="/assets/alterURL1-UqgqOTAj.jpg",f="/assets/alterURL2-CyPCiX5I.jpg",w=["innerHTML"],g=["innerHTML"],y=["innerHTML"],v=c({__name:"index",setup(_){const r=e(`
# How to Alter the NEXUSe2e URL

<hr>
  
## Change Application Name

The application name in the URL ("/NEXUSe2e) is determined by the directory name of your NEXUSe2e instance inside your Tomcat's webapp folder.

To change this part of the URL please follow these steps:

    Stop your NEXUSe2e Service. *
    Rename your application folder and the war-file accordingly.
    Start your NEXUSe2e Service. **

* Else Tomcat's autoDeploy feature will delete every folder without a fitting *.war file and will also deploy *.war-files without the corresponding application directory.

** Make sure these two match, otherwise the directory is deleted and a new clean directory is created with the war file content. This might lead to a configuration loss.
`),s=e(`
As displayed in the screenshot, your URL would now be something like HTTP://192.168.2.1/NEXUSe2e_FAQ/. Remember to share it with your partners, administrators and change it in the monitoring, as well.

When later updating NEXUSe2e, you also have to mind that the new war-file must match the name of the changed file.

## Change Endpoint path for a NEXUSe2e Service  

The next option is to change the NEXUSe2e internal service name. Go to your NEXUSe2e Admin-GUI and switch to:

    Server Configuration > Services > HttpReceiverService

Edit the Logical Name to your needs, save and apply the changes.
`),l=e(`
After the changes are applied, the URL for ebxml20 connections is /NEXUSe2e/handler/<newlogicalname>. This time, the change is stored in the database, and will be consistent for future upgrades.
`);return(U,S)=>(p(),h(d,null,{default:n(()=>[t(m,{cols:"12"},{default:n(()=>[a("div",{innerHTML:o(r)},null,8,w),t(i,{"max-height":"550px",src:u}),a("div",{innerHTML:o(s)},null,8,g),t(i,{"max-height":"550px",src:f}),a("div",{innerHTML:o(l)},null,8,y)]),_:1})]),_:1}))}});export{v as default};
