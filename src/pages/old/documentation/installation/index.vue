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
# Installation

---

- System Requirements
- Setting up NEXUSe2e
- External Configuration
`)
</script>
