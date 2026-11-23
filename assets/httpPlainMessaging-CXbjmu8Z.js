import{Ct as e,Ot as t,St as n,Ut as r,en as i,hn as a,kt as o,n as s,t as c}from"./VRow-8QlEuB43.js";import{L as l}from"./index-DXlJAPBD.js";import{t as u}from"./marked.esm-Of0D6mTi.js";var d=`/assets/plain1-PExP68Ih.jpg`,f=`/assets/plain2-BXzOYxpR.jpg`,p=`/assets/plain3-DOy5DY68.jpg`,m=`/assets/plain4-ADD8g1Ce.jpg`,h=`/assets/plain5-CmdN_y8V.jpg`,g=`/assets/plain6-DkbfV6HO.jpg`,_=`/assets/plain7-DM0dr3p3.jpg`,v=[`innerHTML`],y=[`innerHTML`],b=[`innerHTML`],x=[`innerHTML`],S=[`innerHTML`],C=[`innerHTML`],w=[`innerHTML`],T=o({__name:`index`,setup(o){let T=u(`
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
`);return(o,u)=>(r(),e(c,null,{default:i(()=>[t(s,{cols:`12`},{default:i(()=>[n(`div`,{innerHTML:a(T)},null,8,v),t(l,{"max-height":`550px`,src:d}),n(`div`,{innerHTML:a(E)},null,8,y),t(l,{"max-height":`550px`,src:f}),n(`div`,{innerHTML:a(D)},null,8,b),t(l,{"max-height":`550px`,src:p}),n(`div`,{innerHTML:a(O)},null,8,x),t(l,{"max-height":`550px`,src:m}),n(`div`,{innerHTML:a(k)},null,8,S),t(l,{"max-height":`550px`,src:h}),n(`div`,{innerHTML:a(A)},null,8,C),t(l,{"max-height":`550px`,src:g}),n(`div`,{innerHTML:a(j)},null,8,w),t(l,{"max-height":`550px`,src:_})]),_:1})]),_:1}))}});export{T as default};