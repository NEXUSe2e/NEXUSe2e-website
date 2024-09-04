<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        max-height="550px"
        src="./first1.jpg"
      />

      <div v-html="markdown2" />
      <v-img
        max-height="550px"
        src="./first2.jpg"
      />

      <div v-html="markdown3" />
      <v-img
        max-height="550px"
        src="./first3.jpg"
      />

      <div v-html="markdown4" />
      <v-img
        max-height="550px"
        src="./first4.jpg"
      />

      <div v-html="markdown5" />
      <v-img
        max-height="550px"
        src="./first5.jpg"
      />

      <div v-html="markdown6" />
      <v-img
        max-height="550px"
        src="./first6.jpg"
      />

      <div v-html="markdown7" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown1 = marked(`
# First Steps in Messaging

<hr>


In this section we show you how easy it is to set up reliable messaging over the ebXML 2.0 standard protocol.

The fundamental prerequisite for exchanging messages is a peer that receives your messages or sends messages to you. If you do not have a suitable business partner at hand yet, you can install another instance of NEXUSe2e server on a different machine. Another idea would be to set up an additional servlet container on the same machine, that listens on a different port, or deploy the NEXUSe2e webapp twice to the same servlet container, but with different names.

The default configuration of NEXUSe2e server contains several preset. You can just use the presets or modify them as you like in the following configuration steps.

### Log In as Administrator

Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine--this is the case if you installed with the Windows installer, the url is: http://localhost:8080/NEXUSe2e. If you have not chopped the version substring, e.g. _4.2.4, from the war file's name before deployment, you probably need to append it to the URL.

The default administration account is admin with password admin.

### Set the Server Identity

The Server Identity is a unique id called Partner Id identifying your server to your communication partners. The Partner Id can be anything and its structure or format is typically agreed upon between communication partners. One possible example is the D-U-N-S number of your organization.

  1. Navigate through the tree and find NEXUSe2e > Server Configuration > Server Identities.

  2. You can either add a new identity with the Add Server Identity button, or select an existing identity for editing.

  3. On the Collaboration Partner tab enter your identity information. Enter at least:

  **<em>Partner Id</em>**  
    The logical id of your organisation/server, e.g. your D-U-N-S number. This is a logical unique identifier that is not interpreted by the system.

  **<em>Partner Id Type</em>**  
    The type of your id, e.g. "DUNS" or "Custom", if not registered anywhere. This is a logical classification of the Partner Id that is not interpreted by the system.

  **<em>Name</em>**  
    Human readable name of your organisation/server.

  4. Click Save
`)

const markdown2 = marked(`
5. Select the Connections tab and click Add Connection

6. Give it at least a:

**<em>Name</em>**  
Display name of this connection.

**<em>Connection URL</em>**  
The url of your server's message handler. For example the NEXUSe2e standard handlerhandler/ebxml20.

**<em>TRP</em>**  
Transport/Routing/Packaging information. Select ebxml-2.0-http for this example.

7. Click Save
`)

const markdown3 = marked(`
### Add a Collaboration Partner

Now you should specify with whom you want to exchange messages. The settings are similar to your Server Identity above.

  1. Navigate through the tree and find NEXUSe2e > Collaboration Partners.

  2. Click Add Collaboration Partner or edit an existing partner.

  3. On the Collaboration Partner tab enter your partner's identity information. Enter at least:

  **<em>Partner Id</em>**  
    The logical id of your partner's organisation/server, e.g. the D-U-N-S number.

  **<em>Partner Id Type</em>**  
    The type of your partner's id, e.g. "DUNS" or "Custom", if not registered anywhere.

  **<em>Name</em>**  
    Human readable name of your partner's organisation/server.

  4. Click Save
`)

const markdown4 = marked(`
5. Select the Connections tab and click Add Connection, or edit an already existing connection.

6. Give it at least a:

**<em>Name</em>**  
Display name of this connection.

**<em>Connection URL</em>**  
The url of your partner's server message handler. For example the NEXUSe2e standard handler handler/ebxml20. This should be the url of your second NEXUSe2e installation.

Note that you cannot use a single instance of NEXUSe2e as a loopback to send messages to yourself.

**<em>TRP</em>**  
Transport/Routing/Packaging information. Select ebxml-2.0-http for this example.

7. Click Save
`)

const markdown5 = marked(`
### Create a Choreography

Choreographies (based on the ebXML terminology) are business processes. Each choreography is identified by a unique logical id that has to be agreed upon between communications partners.

The default configuration contains a preconfigured choreography called GenericFile. GenericFilemodels a simple business process for sending and receiving files without any additional processing.

In order to exchange files based on GenericFile, you must add a business partner as Participant.

  1. Navigate through the menu tree and find NEXUSe2e > Choreographies > GenericFile > Participants
  2. If your partner--that you've created in the previous step of this guide--is not yet listed as participant click Add Participant. If you find your partner already listed as participant, because you edited the preset partner, click on the partner link and verify the settings.

  3. In the Add Participant or Update Participant form select:

  **<em>Partner ID</em>**
    The partner you want to exchange messages with.

  **<em>Local Partner ID</em>**
    The local server identity you want to act as.

  **<em>Connection</em>**
    The url of your partner's message handler.

  4. Click Save or Update.
`)

const markdown6 = marked(`
### Apply Configuration Changes and Send a Message

Configuration changes in NEXUSe2e server are transactional. They are only activated after you clicked the Apply button on top of the gui. This will reload the NEXUSe2e engine with the new configuration. Of course, you can alternatively revert all changes by clicking Revert. The Apply and Revert buttons get enabled as soon as there are pending configuration changes.

Usually you will want to send messages automatically. But in order to test connectivity you can manually send a message to your partner:

  1. Apply your configuration changes by click on Apply.

  2. Navigate through the tree and find NEXUSe2e > Tools > Message Submission

  3. Select at least:

  **<em>Choreography ID</em>**
    The id of the business process for this message--in this case GenericFile.

  **<em>Action</em>**
    The action to take within the selected choreography--for GenericFile there is a preset action called SendFile.

  **<em>Receiver</em>**
    A participant of the selected choreography that should receive your message--the collaboration partner you configured above.

  **<em>File</em>**
    Select any file to submit.

  4. Click Execute. Sooner or later you should get a brief notification that your message was sent or that something went wrong.
`)

const markdown7 = marked(`
### Check the Status of Your Messages

NEXUSe2e contains a transaction log that lists all messages that were sent and received. You can filter by Partner, Choreography, Action, Status, Message ID, Conversation ID and Date.

In NEXUSe2e all messages are part of a Conversation (based on ebXML terminology). A conversation is basically an instance of a Choreography. Conversations have their own status. In this example we made use of a one-step choreography. Advanced business processes implement multi-step choreographies. Related messages of a multi-step choreography are grouped in the same conversation.

  1. Navigate through the tree and find NEXUSe2e > Reporting > Transaction Reporting

  2. You should see the conversation of the message you just sent. If the message was sent correctly, and an acknowledgement was received, the status should be COMPLETED.

  3. To see all messages related to this conversation, click on the conversation entry.

  4. If everything went right, you should find there two message entries: the message you sent to your partner (message type Normal) and the acknowledgement (message typeAcknowledgement) you got back from your partner.

  5. To examine the contents of the messages, click on them and find the download link.

That is it. If you experience any problems, consult other help and troubleshooting resources available on this website. If you are still stuck, drop us a line to nexuse2e dot support atdirekt-gruppe dot de.
`)
</script>
