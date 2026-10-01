import{At as e,Vt as t,gt as n,ht as r,lt as i,n as a,nn as o,t as s,ut as c}from"./VRow-D0FG8Fr6.js";import{L as l}from"./index-D6sb8cKR.js";import{t as u}from"./marked.esm-Ccg6WR5l.js";var d=`/assets/alterURL1-UqgqOTAj.jpg`,f=`/assets/alterURL2-CyPCiX5I.jpg`,p=[`innerHTML`],m=[`innerHTML`],h=[`innerHTML`],g=n({__name:`index`,setup(n){let g=u(`
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
`),_=u(`
As displayed in the screenshot, your URL would now be something like HTTP://192.168.2.1/NEXUSe2e_FAQ/. Remember to share it with your partners, administrators and change it in the monitoring, as well.

When later updating NEXUSe2e, you also have to mind that the new war-file must match the name of the changed file.

## Change Endpoint path for a NEXUSe2e Service  

The next option is to change the NEXUSe2e internal service name. Go to your NEXUSe2e Admin-GUI and switch to:

    Server Configuration > Services > HttpReceiverService

Edit the Logical Name to your needs, save and apply the changes.
`),v=u(`
After the changes are applied, the URL for ebxml20 connections is /NEXUSe2e/handler/<newlogicalname>. This time, the change is stored in the database, and will be consistent for future upgrades.
`);return(n,u)=>(e(),c(s,null,{default:t(()=>[r(a,{cols:`12`},{default:t(()=>[i(`div`,{innerHTML:o(g)},null,8,p),r(l,{"max-height":`550px`,src:d}),i(`div`,{innerHTML:o(_)},null,8,m),r(l,{"max-height":`550px`,src:f}),i(`div`,{innerHTML:o(v)},null,8,h)]),_:1})]),_:1}))}});export{g as default};