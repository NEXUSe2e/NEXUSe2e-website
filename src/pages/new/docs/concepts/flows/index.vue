<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <NEXUSe2eImage src="@/assets/services_flow.png" />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import NEXUSe2eImage from '@/components/nexus2eImage/NEXUSe2eImage.vue'

import { marked } from 'marked'

const markdown1 = marked(`
  # Inflow and Outflow
  ---

For a very long time we worked with inbound and outbound in conjunction with frontend and backend. However, this is not only missleading or sometimes confusing but also unnecessary complicated. Starting with NEXUSe2e 10.x we try to focus only on the flow direction from NEXUSe2e perspective. Therefore all the wording is focused on the edges of your NEXUSe2e instance which is most likely some sort of service depending on your needs. There are rare instances where you want for example multiple outputs which softens the service pattern. Below you can see a selection of services sorted by type. Besides the Inflow and Outflow services you can also see Support services. This are special helper services that carry configuration and specific implementations of reusable functionality.

`)

const markdown2 = marked(`
### Inflow
All inflow services are used to get data into NEXUSe2e. Its not important if data gets pushed into the service or if its fetched by a specific service. The important part is the general direction of the data flow. Its also not important if data is coming from a partner, or from any internal backend system.

### Outflow
Similar to Inflow services, the outflow services are used to move data out of NEXUSe2e. This can be done by pushing or pulling and it also works for all directions. Therefore services like \`httpPlainSender\` can be used for integration with partners and integration with internal backend systems at the same time. This was not possible in the old version of NEXUSe2e.
`)
</script>
