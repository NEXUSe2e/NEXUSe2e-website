import{Ct as e,Et as t,W as n,a as r,bt as i,ht as a,jt as o,mt as s,o as c,yt as l}from"./index-B21uHxR9.js";import{t as u}from"./marked.esm-DT5b__v5.js";var d=`/assets/plain1-PExP68Ih.jpg`,f=`/assets/plain2-BXzOYxpR.jpg`,p=`/assets/plain3-DOy5DY68.jpg`,m=`/assets/plain4-ADD8g1Ce.jpg`,h=`/assets/plain5-CmdN_y8V.jpg`,g=`/assets/plain6-DkbfV6HO.jpg`,_=`/assets/plain7-DM0dr3p3.jpg`,v=[`innerHTML`],y=[`innerHTML`],b=[`innerHTML`],x=[`innerHTML`],S=[`innerHTML`],C=[`innerHTML`],w=[`innerHTML`],T=i({__name:`index`,setup(i){let T=u(`
# HTTP Plain Messaging

<hr>

### Create In- and Outboundpipeline

Login to your NEXUSe2e ADMIN GUI and switch to:

    NEXUSe2e > Server Configuration > Frontend Pipelines

#### Create Inboundpipeline

Click "Add Pipeline" and

1. Give your Pipeline a distinct Name
2. Define the direction as Inbound
3. Select httpplain-1.0-http as TRP
4. Save your Pipeline for later editing
`),E=u(`
#### Configure Inboundpipeline

Jump back into your created pipeline and

  1. Add the TransportReceiver, httpPlainMessageUnpacker and httpPlainHeaderDeserializer in this order
  2. Click "Configure Pipelet" for the TransportReceiver and select HttpPlainReceiverService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.
`),D=u(`
#### Create Outboundpipeline

Click "Add Pipeline" and

  1. Give your Pipeline a distinct Name
  2. Define the direction as Outbound
  3. Select httpplain-1.0-http as TRP
  4. Save your Pipeline for later editing
`),O=u(`
#### Configure Outboundpipeline

Jump back into your created pipeline and

  1. Add the httpPLainMessagePacker and TransportSender in this order
  2. Click "Configure Pipelet" for the TransportSender and select HttpPlainSenderService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.
`),k=u(`
### Configure Partner & Choreography

To ensure NEXUSe2e will accept incoming HTTP plain messages you need a configured partner. You can use an excisting partner or create a new. This Partner needs to be in the choreography of the action you want to use.

#### Configure Partner

If you want to use an excisting partner you can skip this step.

Switch to following menu point in the NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners

And click on "Add Collaboration Partner".

In the next screen fill least a Partner ID and confirm with "Save".



#### Configure Partner Connection for Receive Only

If you only want to receive HTTP plain messages, without answering with an ackkowledgement or sending a messages by your own, you don't need a correctly configured connection.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

Click on new "Add Connection" and follow these instructions:

  1. Add a connection name and add localhost to connection URL.
`),A=u(`
#### Configure Partner Connection for 2-Way Messaging

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

If you want to send and receive messages with NEXUSe2e via HTTP Plain do as followed:

  1. Add a distinct connection name and a valid connection URL.
  2. Choose the TRP you are planning to use.
  3. Disable Reliable, which will not work correctly with HTTP Plain messaging.
  4. Save your connection
`),j=u(`
#### Configure Choreography without Acknowledgement

This choreography is used for sending and receiving messages without follow up actions, like ackknowledgements.

You can use the default choreography "Generic File" which is predefined in every NEXUSe2e installation. Only add your partner to the choreography participants.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Choreographies > httpPlain > Participants > Add Participant

And do as instructed:

  1. Choose your desired Partner ID.
  2. Choose the connection you configured.
  3. Click on "Create"
`);return(i,u)=>(e(),a(r,null,{default:t(()=>[l(c,{cols:`12`},{default:t(()=>[s(`div`,{innerHTML:o(T)},null,8,v),l(n,{"max-height":`550px`,src:d}),s(`div`,{innerHTML:o(E)},null,8,y),l(n,{"max-height":`550px`,src:f}),s(`div`,{innerHTML:o(D)},null,8,b),l(n,{"max-height":`550px`,src:p}),s(`div`,{innerHTML:o(O)},null,8,x),l(n,{"max-height":`550px`,src:m}),s(`div`,{innerHTML:o(k)},null,8,S),l(n,{"max-height":`550px`,src:h}),s(`div`,{innerHTML:o(A)},null,8,C),l(n,{"max-height":`550px`,src:g}),s(`div`,{innerHTML:o(j)},null,8,w),l(n,{"max-height":`550px`,src:_})]),_:1})]),_:1}))}});export{T as default};