import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as h,c as l,w as i,V as p,o as v,a as t,b as o,u as n,Q as s,e as w}from"./index-Ca7GPTek.js";const _="/assets/service1-BsYLl4yH.png",y="/assets/service2-B0H53Tu-.png",f="/assets/service3-OvMyxfBZ.png",g="/assets/service4-ZsFamN79.png",S="/assets/service5-Cu4wr6cM.png",x=["innerHTML"],T=["innerHTML"],M=["innerHTML"],k=["innerHTML"],H=["innerHTML"],L=["innerHTML"],U=h({__name:"index",setup(b){const a=e(`
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
`),r=e(`
- Next, switch in the bin directory of your Tomcat and rename the "Tomcatw.exe" to whatever you named your service. Make sure you include the "w.exe".

- Execute your "NEXUSe2eFAQw.exe".


The Service is now fully functional and can be edited further if needed.

## Configure Services


### General

You can change the display name to your desire and set the Startup type to automatically.
`),c=e(`
### Log On

Set which user Windows should use to start the Service.
`),d=e(`
### Logging

Set the log level, log path and log prefix for the tomcat instance.

NEXUSe2e log settings are not influenced by these options.
`),m=e(`
### Java

You can add Java specific parameters into the Java Options, like SSL Debugging.

Set the minmun and maximun amout of memory this Service can use. For NEXUSe2e it is recommended to use 4096 MB as maximun memory. This might depending on your workload.
`),u=e(`
### Remove Windows Services

To remove the service, open a Command Prompt window and switch into your tomcat\\bin folder.

Execute following command:

    C:\\apache-tomcat\\bin> tomcat7.exe //DS//NEXUSe2eFAQ
    (Switch NEXUSe2eFAQ to whatever you named your service)

This should be it, you can check your Windows Services to make sure it is removed.
`);return(N,E)=>(v(),l(p,null,{default:i(()=>[t(w,{cols:"12"},{default:i(()=>[o("div",{innerHTML:n(a)},null,8,x),t(s,{"max-height":"550px",src:_}),o("div",{innerHTML:n(r)},null,8,T),t(s,{"max-height":"550px",src:y}),o("div",{innerHTML:n(c)},null,8,M),t(s,{"max-height":"550px",src:f}),o("div",{innerHTML:n(d)},null,8,k),t(s,{"max-height":"550px",src:g}),o("div",{innerHTML:n(m)},null,8,H),t(s,{"max-height":"550px",src:S}),o("div",{innerHTML:n(u)},null,8,L)]),_:1})]),_:1}))}});export{U as default};
