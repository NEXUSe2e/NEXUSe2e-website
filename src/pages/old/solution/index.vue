<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
      <v-img
        max-height="550"
        src="./solution.jpg"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown = marked(`
# The Solution

---

NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTPS, SMTP, SFTP, etc.) to integrate business processes that span multiple companies.

Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

<br />
`)
</script>
