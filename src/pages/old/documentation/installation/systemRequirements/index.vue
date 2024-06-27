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
# System Requirements

<hr>

NEXUSe2e runs on a variety of system configurations. These brief requirements only illustrate the recommended settings, NEXUSe2e will probably run with lower specifcations. However, requirements depend on the workload, message size, schedules and any type of custom extensions. The estimates are for NEXUSe2e only, not for the also required database.  

## Hardware & Operating System
- Linux or Windows
- Dual core CPU
- 4GB RAM
- About 10GB of free HDD space

## Software
- Java JDK 11
- Apache Tomcat 9 (Tomcat 10 is not supported)
- Supported database depending on the use cause and environment
`)
</script>
