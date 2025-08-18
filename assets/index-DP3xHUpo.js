import{m as n}from"./marked.esm-8ZxQ78w7.js";import{d as u,c as g,w as a,V as m,o as f,a as e,b as i,u as o,Q as t,e as P}from"./index-R_OBdHHJ.js";const w="/assets/plain1-PExP68Ih.jpg",y="/assets/plain2-BXzOYxpR.jpg",C="/assets/plain3-DOy5DY68.jpg",_="/assets/plain4-ADD8g1Ce.jpg",T="/assets/plain5-CmdN_y8V.jpg",k="/assets/plain6-DkbfV6HO.jpg",v="/assets/plain7-DM0dr3p3.jpg",S=["innerHTML"],x=["innerHTML"],H=["innerHTML"],U=["innerHTML"],A=["innerHTML"],M=["innerHTML"],b=["innerHTML"],D=u({__name:"index",setup(N){const r=n(`
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
`),s=n(`
#### Configure Inboundpipeline

Jump back into your created pipeline and

  1. Add the TransportReceiver, httpPlainMessageUnpacker and httpPlainHeaderDeserializer in this order
  2. Click "Configure Pipelet" for the TransportReceiver and select HttpPlainReceiverService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.
`),c=n(`
#### Create Outboundpipeline

Click "Add Pipeline" and

  1. Give your Pipeline a distinct Name
  2. Define the direction as Outbound
  3. Select httpplain-1.0-http as TRP
  4. Save your Pipeline for later editing
`),l=n(`
#### Configure Outboundpipeline

Jump back into your created pipeline and

  1. Add the httpPLainMessagePacker and TransportSender in this order
  2. Click "Configure Pipelet" for the TransportSender and select HttpPlainSenderService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.
`),d=n(`
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
`),p=n(`
#### Configure Partner Connection for 2-Way Messaging

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

If you want to send and receive messages with NEXUSe2e via HTTP Plain do as followed:

  1. Add a distinct connection name and a valid connection URL.
  2. Choose the TRP you are planning to use.
  3. Disable Reliable, which will not work correctly with HTTP Plain messaging.
  4. Save your connection
`),h=n(`
#### Configure Choreography without Acknowledgement

This choreography is used for sending and receiving messages without follow up actions, like ackknowledgements.

You can use the default choreography "Generic File" which is predefined in every NEXUSe2e installation. Only add your partner to the choreography participants.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Choreographies > httpPlain > Participants > Add Participant

And do as instructed:

  1. Choose your desired Partner ID.
  2. Choose the connection you configured.
  3. Click on "Create"
`);return(I,L)=>(f(),g(m,null,{default:a(()=>[e(P,{cols:"12"},{default:a(()=>[i("div",{innerHTML:o(r)},null,8,S),e(t,{"max-height":"550px",src:w}),i("div",{innerHTML:o(s)},null,8,x),e(t,{"max-height":"550px",src:y}),i("div",{innerHTML:o(c)},null,8,H),e(t,{"max-height":"550px",src:C}),i("div",{innerHTML:o(l)},null,8,U),e(t,{"max-height":"550px",src:_}),i("div",{innerHTML:o(d)},null,8,A),e(t,{"max-height":"550px",src:T}),i("div",{innerHTML:o(p)},null,8,M),e(t,{"max-height":"550px",src:k}),i("div",{innerHTML:o(h)},null,8,b),e(t,{"max-height":"550px",src:v})]),_:1})]),_:1}))}});export{D as default};
