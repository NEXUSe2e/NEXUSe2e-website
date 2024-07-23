<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
      <v-alert
        text="The old version of NEXUSe2e worked with a local configuration which is applied on as a set of pending changes. This feature is removed, all changes are available as soon as you hit the save button in the bottom right. There is no apply or revert or anything, just save and its done. Sometimes you have to create the component first by saving the component before diving into further configuration details."
        title="Important Notice"
        type="info"
        variant="tonal"
      ></v-alert>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown = marked(`
# Overview

NEXUSe2e is still the toolbox to cater to you needs for moving and transforming you data between your locations. And as all the tools you have, it needs some documentation to use it in the most efficient way. To keep things simple and give as some wiggle room to maintain the old version as well, we decided on a version jump to 10.x for the new implementation. The documentation for the old version of NEXUSe2e is still available and all deeplinks should still work fine. To give you an easy guideline on your navigation we decided on keeping the old/light design the same but selecting the dark theme style for the new documentation. So even if you switch back and forth to compare settings, you are always aware on which version you are looking at. The new documentation should give you an understanding of all the bits and pieces of the next generation of NEXUSe2e. This Documentation applies to all versions of NEXUSe2e after version 10.x.


`)
</script>
