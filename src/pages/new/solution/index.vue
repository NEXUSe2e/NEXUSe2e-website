<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <NEXUSe2eImage src="@/assets/dashboard.png" />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import NEXUSe2eImage from '@/components/nexus2eImage/NEXUSe2eImage.vue'

import { marked } from 'marked'

const markdown1 = marked(`
# It's all about integration.
---
## We connect different systems and processes with each other.
Modern structures and supply chains are highly dependent on efficient collaboration and a comprehensive exchange of information with a diverse network of partners.
NEXUSe2e supports fully automated data exchange - even across company boundaries.
`)
const markdown2 = marked(`
# Secure and reliable
---
## Even for smaller applications.
NEXUSe2e is a toolbox that is tailored to the needs of our customers. Every process and every connection has its own requirements, which need to be discussed in detail. NEXUSe2e is software that can transmit and convert data securely and reliably.

✓ The receipt of messages can be confirmed by additional technical confirmation messages<br/>
✓ Generalized messaging workflow, independent of protocols, ready to be extended to handle different communication protocol<br/>
✓ Individual settings for maximum number of retries and interval between resends for all connections<br/>
✓ Transaction logs reflect the status of the message confirmation<br/>
✓ You decide what to filter on logs with custom meta data generated for your messages<br/>
✓ Standard reports on the volume of messages<br/>
✓ Reports to identify failed transmissions<br/>
✓ Transaction and application log with flexible filtering<br/>
✓ The message exchange follows a defined message sequence<br/>
✓ Messages can be validated accordingly by means of a partner and process directory<br/>
✓ Communication with partners can follow different standards (transport, identifiers, security settings)<br/>
✓ Flexible data encryption at the transport level<br/>
`)
</script>
