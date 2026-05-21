import{Ct as e,Et as t,W as n,a as r,bt as i,ht as a,jt as o,mt as s,o as c,yt as l}from"./index-XsyDZOvb.js";import{t as u}from"./marked.esm-DT5b__v5.js";var d=`/assets/service1-BsYLl4yH.png`,f=`/assets/service2-B0H53Tu-.png`,p=`/assets/service3-OvMyxfBZ.png`,m=`/assets/service4-ZsFamN79.png`,h=`/assets/service5-Cu4wr6cM.png`,g=[`innerHTML`],_=[`innerHTML`],v=[`innerHTML`],y=[`innerHTML`],b=[`innerHTML`],x=[`innerHTML`],S=i({__name:`index`,setup(i){let S=u(`
# Windows Service

<hr>


In this article we will show you briefly how to setup and deactivate a Windows Service for NEXUSe2e.

Make sure you have set a JAVA_HOME in your Windows environmental variables.

## How to Install the Service

- Open your tomcat\\bin folder in a Command Prompt window.
- Install the Service named NEXUSe2eFAQ:  

      C:\\apache-tomcat\\bin> service.bat install NEXUSe2eFAQ
      (Insert your preferred name instead of NEXUSe2eFAQ)

- If the cmd is not started as administrator you will be asked for permission to execute this process with administration rights.  
- After that you should see something similar in your cmd:
`),C=u(`
- Next, switch in the bin directory of your Tomcat and rename the "Tomcatw.exe" to whatever you named your service. Make sure you include the "w.exe".

- Execute your "NEXUSe2eFAQw.exe".


The Service is now fully functional and can be edited further if needed.

## Configure Services


### General

You can change the display name to your desire and set the Startup type to automatically.
`),w=u(`
### Log On

Set which user Windows should use to start the Service.
`),T=u(`
### Logging

Set the log level, log path and log prefix for the tomcat instance.

NEXUSe2e log settings are not influenced by these options.
`),E=u(`
### Java

You can add Java specific parameters into the Java Options, like SSL Debugging.

Set the minmun and maximun amout of memory this Service can use. For NEXUSe2e it is recommended to use 4096 MB as maximun memory. This might depending on your workload.
`),D=u(`
### Remove Windows Services

To remove the service, open a Command Prompt window and switch into your tomcat\\bin folder.

Execute following command:

    C:\\apache-tomcat\\bin> tomcat7.exe //DS//NEXUSe2eFAQ
    (Switch NEXUSe2eFAQ to whatever you named your service)

This should be it, you can check your Windows Services to make sure it is removed.
`);return(i,u)=>(e(),a(r,null,{default:t(()=>[l(c,{cols:`12`},{default:t(()=>[s(`div`,{innerHTML:o(S)},null,8,g),l(n,{"max-height":`550px`,src:d}),s(`div`,{innerHTML:o(C)},null,8,_),l(n,{"max-height":`550px`,src:f}),s(`div`,{innerHTML:o(w)},null,8,v),l(n,{"max-height":`550px`,src:p}),s(`div`,{innerHTML:o(T)},null,8,y),l(n,{"max-height":`550px`,src:m}),s(`div`,{innerHTML:o(E)},null,8,b),l(n,{"max-height":`550px`,src:h}),s(`div`,{innerHTML:o(D)},null,8,x)]),_:1})]),_:1}))}});export{S as default};