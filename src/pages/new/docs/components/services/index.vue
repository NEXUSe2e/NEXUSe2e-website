<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <NEXUSe2eImage src="@/assets/new_service1.png" />
      <div v-html="markdown2" />
      <NEXUSe2eImage src="@/assets/new_service2.png" />
      <div v-html="markdown3" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import NEXUSe2eImage from '@/components/nexus2eImage/NEXUSe2eImage.vue'

import { marked } from 'marked'

const markdown1 = marked(`
  # Services
  ---
  All services are grouped into one of the following types:
  - Inflow
  - Outflow
  - Support

  After selecting the type (#1), the component selection (#2) is updated. The selected component is also removed as soon as the type is changed.

`)
const markdown2 = marked(`

  Depending on the type, the pipeline selection at the bottom gets visible or not. All inflow and outflow services have multiple pipelines available to work with. The Support Services are only referenced by other services and have no pipelines.
  As soon as you pick a component, the parameter options for the selected component are shown. While every component defines their own required parameters, all services require at least the name. As soon as the service is saved, its shown in the overview list.

`)

const markdown3 = marked(`
  The Overview list shows all services which can be enabled or disabled at any time. When clicking on one service (#1), the common list view right side drawer will appear and shown the service configuration. For manual runs, the service can be triggered by clicking the play button (#2). The action bar in the drawer also contains a edit button (#3) and a close button (#4).
`)
</script>
