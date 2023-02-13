<div>{@html marked.parse(markdown1)}</div>
<ImgContainer img={img_1} alt="plain" height="200px"/>
<div>{@html marked.parse(markdown2)}</div>
<ImgContainer img={img_2} alt="plain" height="200px"/>
<div>{@html marked.parse(markdown3)}</div>
<ImgContainer img={img_3} alt="plain" height="200px"/>
<div>{@html marked.parse(markdown4)}</div>
<ImgContainer img={img_4} alt="plain" height="200px"/>
<div>{@html marked.parse(markdown5)}</div>
<ImgContainer img={img_5} alt="plain" height="200px"/>
<div>{@html marked.parse(markdown6)}</div>
<ImgContainer img={img_6} alt="plain" height="200px"/>
<div>{@html marked.parse(markdown7)}</div>
<ImgContainer img={img_7} alt="plain" height="200px"/>

<script>
  import ImgContainer from '@/components/ImgContainer.svelte'
  import { marked } from 'marked'
  import img_1 from './plain1.jpg'
  import img_2 from './plain2.jpg'
  import img_3 from './plain3.jpg'
  import img_4 from './plain4.jpg'
  import img_5 from './plain5.jpg'
  import img_6 from './plain6.jpg'
  import img_7 from './plain7.jpg'

  const markdown1 = `
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

  `
  const markdown2 = `
  

#### Configure Inboundpipeline

Jump back into your created pipeline and

  1. Add the TransportReceiver, httpPlainMessageUnpacker and httpPlainHeaderDeserializer in this order
  2. Click "Configure Pipelet" for the TransportReceiver and select HttpPlainReceiverService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.

  `
  const markdown3 = `
#### Create Outboundpipeline

Click "Add Pipeline" and

  1. Give your Pipeline a distinct Name
  2. Define the direction as Outbound
  3. Select httpplain-1.0-http as TRP
  4. Save your Pipeline for later editing

  `
  const markdown4 = `
  

#### Configure Outboundpipeline

Jump back into your created pipeline and

  1. Add the httpPLainMessagePacker and TransportSender in this order
  2. Click "Configure Pipelet" for the TransportSender and select HttpPlainSenderService and save this change
  3. Save your Pipeline

Click "Apply" to save your settings.

  `
  const markdown5 = `
  
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


  `
  const markdown6 = `
  

#### Configure Partner Connection for 2-Way Messaging

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Collaboration Partners > YourPartner > Connections

If you want to send and receive messages with NEXUSe2e via HTTP Plain do as followed:

  1. Add a distinct connection name and a valid connection URL.
  2. Choose the TRP you are planning to use.
  3. Disable Reliable, which will not work correctly with HTTP Plain messaging.
  4. Save your connection

  `
  const markdown7 = `
  

#### Configure Choreography without Acknowledgement

This choreography is used for sending and receiving messages without follow up actions, like ackknowledgements.

You can use the default choreography "Generic File" which is predefined in every NEXUSe2e installation. Only add your partner to the choreography participants.

Switch to following menu point in your NEXUSe2e Admin GUI:

    NEXUSe2e > Choreographies > httpPlain > Participants > Add Participant

And do as instructed:

  1. Choose your desired Partner ID.
  2. Choose the connection you configured.
  3. Click on "Create"


  `

</script>