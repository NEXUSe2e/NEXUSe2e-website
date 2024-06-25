<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
      <v-img
        max-height="550px"
        src="./purge1.jpg"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown = marked(`
# Conversation / Message Purging

<hr>
  

1. Set desired filter options.
2. Review conversations or messages shown. Please be aware that all elements shown in the filtered view will be purged.
3. Click on "Purge All" to delete the entries permanently.
`)
</script>
