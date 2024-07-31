<template>
  <v-row>
    <v-col cols="12">
      <div v-html="changelog" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { changelog } from './changelog'
</script>
