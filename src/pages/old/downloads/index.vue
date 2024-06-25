<template>
  <v-row>
    <v-col cols="12">
      <h1>Downloads</h1>
      <hr />
      <br />
      <v-row>
        <v-col
          v-for="(version, index) in versions"
          :key="index"
          cols="12"
        >
          <DownloadCard
            :version="version"
            :latest="index === 0"
          >
            {{ version }}
          </DownloadCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import DownloadCard from '@/components/downloadCard/DownloadCard.vue'

import versions from './versions'
</script>
