<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <NEXUSe2eImage
        class="cursor-pointer"
        src="@/assets/routes.png"
      />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import NEXUSe2eImage from '@/components/nexus2eImage/NEXUSe2eImage.vue'

import { marked } from 'marked'

const markdown1 = marked(`
  # Partners
  ---

`)
const markdown2 = marked(`

`)
</script>
