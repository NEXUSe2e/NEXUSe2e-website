import{$t as e,Dn as t,Lt as n,Mt as r,Rt as i,dn as a,jt as o,n as s,t as c}from"./VRow-Y9OI8PVy.js";import{t as l}from"./marked.esm-rWN5bayK.js";import{t as u}from"./VImg-jJ52b13S.js";var d=`/assets/plain1-PExP68Ih.jpg`,f=`/assets/plain2-BXzOYxpR.jpg`,p=`/assets/plain3-DOy5DY68.jpg`,m=`/assets/plain4-ADD8g1Ce.jpg`,h=`/assets/plain5-CmdN_y8V.jpg`,g=`/assets/plain6-DkbfV6HO.jpg`,_=`/assets/plain7-DM0dr3p3.jpg`,v=[`innerHTML`],y=[`innerHTML`],b=[`innerHTML`],x=[`innerHTML`],S=[`innerHTML`],C=[`innerHTML`],w=[`innerHTML`],T=i({__name:`index`,setup(i){let T=l(`
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
`),E=l(`
#### Configure Inboundpipeline

Jump back into your created pipeline and

  1. Add the TransportReceiver, httpPlainMessageUnpacker and httpPlainHeaderDeserializer in this order
  2. Click "Configure Pipelet" for the TransportReceiver and select HttpPlainReceiverService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.
`),D=l(`
#### Create Outboundpipeline

Click "Add Pipeline" and

  1. Give your Pipeline a distinct Name
  2. Define the direction as Outbound
  3. Select httpplain-1.0-http as TRP
  4. Save your Pipeline for later editing
`),O=l(`
#### Configure Outboundpipeline

Jump back into your created pipeline and

  1. Add the httpPLainMessagePacker and TransportSender in this order
  2. Click "Configure Pipelet" for the TransportSender and select HttpPlainSenderService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.
`),k=l(`
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
`),A=l(`
#### Configure Partner Connection for 2-Way Messaging

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

If you want to send and receive messages with NEXUSe2e via HTTP Plain do as followed:

  1. Add a distinct connection name and a valid connection URL.
  2. Choose the TRP you are planning to use.
  3. Disable Reliable, which will not work correctly with HTTP Plain messaging.
  4. Save your connection
`),j=l(`
#### Configure Choreography without Acknowledgement

This choreography is used for sending and receiving messages without follow up actions, like ackknowledgements.

You can use the default choreography "Generic File" which is predefined in every NEXUSe2e installation. Only add your partner to the choreography participants.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Choreographies > httpPlain > Participants > Add Participant

And do as instructed:

  1. Choose your desired Partner ID.
  2. Choose the connection you configured.
  3. Click on "Create"
`);return(i,l)=>(e(),r(c,null,{default:a(()=>[n(s,{cols:`12`},{default:a(()=>[o(`div`,{innerHTML:t(T)},null,8,v),n(u,{"max-height":`550px`,src:d}),o(`div`,{innerHTML:t(E)},null,8,y),n(u,{"max-height":`550px`,src:f}),o(`div`,{innerHTML:t(D)},null,8,b),n(u,{"max-height":`550px`,src:p}),o(`div`,{innerHTML:t(O)},null,8,x),n(u,{"max-height":`550px`,src:m}),o(`div`,{innerHTML:t(k)},null,8,S),n(u,{"max-height":`550px`,src:h}),o(`div`,{innerHTML:t(A)},null,8,C),n(u,{"max-height":`550px`,src:g}),o(`div`,{innerHTML:t(j)},null,8,w),n(u,{"max-height":`550px`,src:_})]),_:1})]),_:1}))}});export{T as default};