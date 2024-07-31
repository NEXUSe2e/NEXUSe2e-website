<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        src="@/assets/new_service1.png"
      />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
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
  As soon as you pick a component, the parameter options for the selected component are shown. While every component defines their own required parameters, all services require at least the name.




`)
</script>
