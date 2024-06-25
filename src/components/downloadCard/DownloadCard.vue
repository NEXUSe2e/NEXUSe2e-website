<template>
  <v-card class="w-100 w-md-75">
    <v-card-title class="d-flex align-center ga-3">
      <div class="text-h4">{{ version.version }}</div>
      <v-chip
        v-if="latest"
        size="small"
        variant="outlined"
        color="success"
      >
        latest
      </v-chip>
    </v-card-title>
    <v-card-text>
      <v-divider />
      <div class="text-h6">Changes</div>
      <ul>
        <li
          v-for="(change, index) in version.changes"
          :key="index"
          v-html="marked(change)"
        />
      </ul>
      <v-divider />

      <template v-if="version.knownIssues && version.knownIssues.length > 0">
        <div class="text-h6">Known Issues</div>
        <ul>
          <li
            v-for="(issue, index) in version.knownIssues"
            :key="index"
            v-html="marked(issue)"
          />
        </ul>
        <v-divider />
      </template>
      <div class="text-h6">Checksums</div>
      <br />
      <span class="font-weight-bold">MD5:</span>
      <div
        class="cursor-pointer"
        @click="() => copyToClipboard(version.md5)"
      >
        <span class="mr-2">{{ version.md5 }}</span>
        <v-icon
          size="small"
          icon="mdi-content-copy"
        />
      </div>
      <br />
      <div>
        <span class="font-weight-bold">SHA256:</span>
        <div
          class="cursor-pointer"
          @click="() => copyToClipboard(version.sha256)"
        >
          <span class="mr-2">{{ version.sha256 }}</span>
          <v-icon
            size="small"
            icon="mdi-content-copy"
          />
        </div>
      </div>
      <template v-if="version.download">
        <v-divider />
        <div class="text-h6">Downloads</div>
        <br />
        <a
          class="border px-2 py-1"
          target="_blank"
          rel="noreferrer"
          :href="`${BASE_URL}/${version.download}`"
        >
          .war via GitHub
        </a>
      </template>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { marked } from 'marked'

defineProps({
  version: {
    type: Object,
    required: true
  },
  latest: {
    type: Boolean,
    required: true
  }
})

const BASE_URL = 'https://github.com/NEXUSe2e/NEXUSe2e/releases/download'

const copyToClipboard = (hash: string) => {
  navigator.clipboard.writeText(hash).then(() => {
    alert('In die Zwischenablage kopiert')
  })
}
</script>
