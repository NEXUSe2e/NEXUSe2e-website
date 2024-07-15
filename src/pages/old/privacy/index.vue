<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { privacyPolicy } from '@/utils/LegalTexts'
const markdown = privacyPolicy
</script>
