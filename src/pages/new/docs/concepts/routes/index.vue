<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        class="cursor-pointer"
        src="@/assets/routes.png"
      />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown1 = marked(`
  # Routes
  ---
  While the old TRP concept was quite versatile, it was also quite clunky and not easy to understand. The routes are part of the replacement concept for them. A route describes a link between two partners.

`)
const markdown2 = marked(`
  Which partner ist used as first or second is not relevant for the behavior. (#1 and #2) We strongly suggest having a pattern for your self, but technically there is no difference. Therefore its also possible to use to reference two external or two internal partners in one route. To do so, you have to activate the "allow same Partner Type" checkbox which acts as a safety net for your configuration. As routes are only the building block to all connectivity options, you always need to create the partners first. The selected partner (#3) must have a valid connection (#4). You can optionally configure a client certificate (#5) for this partner and connection. This is used to identify yourself against the server configured in the connection. Last but not least you can configure an Inflow pipeline for this route which is triggered after an inflow messages is processed by the Resolver pipeline. (#6) This is required because the resolver pipeline extracts the routing parameters like choreography, partner which is used to determine the route. The message is stored the first time after the optional Inflow Pipeline is processed successfully.
`)
</script>
