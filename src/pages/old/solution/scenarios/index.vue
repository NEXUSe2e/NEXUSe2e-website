<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown = marked(`
# Scenarios

---

Supply Chain Integration
Order raw materials & utilities just-in-time from your vendors. Or offer your customers an automated interface for purchasing.

## Trading
Exchange electronic vouchers with your distributors/creditors and payment service providers

## Logistics
Automatically hand over shipping documents to your transport service provider. Or as a carrier update your clients electronically, when the status of their shipment changes.

## Integration Proxy/Adapter
Do you want use an existing integration interface of your back-end system or technical or organizational constraints might dictate its use? But the majority of your business partners use their own integration technology and they are all incompatible? Then NEXUEe2e can act as a reliable adapter und integrates all those partners' systems with your back-end.

<br />
*NEXUSe2e is specialized in automated exchange of electronic documents. However, it is not limited to a specific domain or industry. Our customers rely on NEXUSe2e in agriculture (production and distribution), transport, and e-commerce.*
`)
</script>
