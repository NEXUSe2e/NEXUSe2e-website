import{At as e,Vt as t,gt as n,ht as r,lt as i,n as a,nn as o,t as s,ut as c}from"./VRow-D0FG8Fr6.js";import{L as l}from"./index-D6sb8cKR.js";import{t as u}from"./marked.esm-Ccg6WR5l.js";var d=`/assets/backendws1-BAhdKFu0.jpg`,f=`/assets/backendws2-BiNjVhgz.jpg`,p=[`innerHTML`],m=[`innerHTML`],h=[`innerHTML`],g=n({__name:`index`,setup(n){let g=u(`
# Backend Web Service Integration

  <hr>
  

This tutorial will show you how to enable WSDL services for NEXUSe2e.

Note: This is the old documentation for the endpoint which doesn't support WS-security. For the new documentation, see Configure a secure web service endpoint.



### Check if WSDL is Enabled

You can do a quick test to find out if this feature is allready active at your instance.

Substitute parts in the following URL which differ from your configuration and visit the link with a browser of your choice:

    http://localhost:8080/NEXUSe2e/wshandler/NEXUSe2eInterface?WSDL

You'll receive "No service was found." if this feature is disabled.
### Activate WSDL Services

To enable this feature you need to edit your cxf-config.xml which is located in your NEXUSe2e webapp folder:

    \\your-tomcat\\webapps\\YourNEXUSe2e\\WEB-INF
Open the cxf-config.xml with an editor and look for following block:

     <jaxws:endpoint publish="false"
          id="nexusE2EInterface"
          implementor="#nexusE2EInterfaceBean"
          address="/NEXUSe2eInterface" />

Substitute "false" with "true" at <jaxws:endpoint publish="false", you need to restart your NEXUSe2e instance after this parameter is changed.
### Ready to Send Messages

The above configuration change enables you to send message threw NEXUSe2e with your Web Service.

To see the operations available, please switch to our Downloads section and grab the NEXUSe2eInterface.wsdl file.

The most common operation used is sendNewStringMessage, which creates a new conversation and message from the given parameters and message payload.

Alternatively, if you do not want to pass the payload data directly, you can use the triggerSendingNewMessage operation. It takes a primaryKey object which can be used by a NEXUSe2e pipelet to load the payload. For example, if you pass a file path as primaryKey, you can use a FileSystemLoadPipelet to create the message payload from that file.
### Receive Messages with WSDL Services

If you want NEXUSe2e to pass messages trough to your backend you need to create a new WSDL component and substitute the standard FileSave pipelet in the FileSaveInbound pipeline with it.


Create the WSDL Component

Log into your NEXUSe2e Admin GUI and switch to:

    NEXUSe2e > Server Configuration > Components

Click on "Add Component" at the bottom right of the screen.

In the next screen do following steps:

  1. Add following class into the class name field:
    org.nexuse2e.backend.pipelets.BackendDeliveryWSClientPipelet
  2. Add a name for this pipelet.
  3. (optional) Add a description.
  4. Click on "Save"
  5. Apply these changes.
`),_=u(`
Substitute FileSave Pipelet

In your NEXUSe2e Admin GUI switch to:

    NEXUSe2e > Server Configuration > Backend Pipelines > FileSaveInboundPipeline

And do following steps:


  1. Delete the "FileSave" pipelet
  2. Add your created BackendIntegrion component
  3. Configure this component
  4. Click on "Save"
  5. Apply these settings.
`),v=u(`
### Last Step

At last you need to implement the BackendDeliveryInterface.wsdl in your backend.

You can find this file in our Downloads section under "Backend Integration".
### (hint) SSL Messaging

If you want to use a secure SSL connection, you need to add the certificate of your backend to the JAVA cacerts keystore of your tomcat instance NEXUSe2e is deployed on.
`);return(n,u)=>(e(),c(s,null,{default:t(()=>[r(a,{cols:`12`},{default:t(()=>[i(`div`,{innerHTML:o(g)},null,8,p),r(l,{"max-height":`550px`,src:d}),i(`div`,{innerHTML:o(_)},null,8,m),r(l,{"max-height":`550px`,src:f}),i(`div`,{innerHTML:o(v)},null,8,h)]),_:1})]),_:1}))}});export{g as default};