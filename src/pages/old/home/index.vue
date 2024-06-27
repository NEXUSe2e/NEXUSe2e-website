<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
      <v-img
        max-height="550"
        src="./nexus_on_java_11.jpg"
      />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown = marked(`
# Home

---

 <h2 style="color: rgba(230, 96, 9)">NEXUSe2e is now running on Java 11</h2>
`)

const markdown2 = marked(`
## NEXUSe2e 5.9 and Java 11
  
All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK as production instances would now require an oracle JDK license to run. 
`)
</script>
