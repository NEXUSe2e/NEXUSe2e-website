<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import { marked } from 'marked'

const markdown1 = marked(`
# Allowed File Size
---

By default NEXUSe2e only allows a limited file size when uploading files in the UI (e.g. selecting a file to send using 'Manual Message" function).\\
This might also effect the allowed size of payloads send by external partners or internal backend systems depending on kind of payload and the way the payload is send.\\
The purpose of the limit is to protect against uploading files too large for the system to handle.

When trying to upload a file is larger then the allowed limit, a "Couldn't upload file" error will be displayed.

It is possible to configure this limit to allow uploading larger files, but should be done with care and might require more resources (memory).\\
If not explicitly configured the default limit is currently 5 MB.

The configuration is done in the NEXUSe2e application properties.\\
For NEXUSe2e running in Tomcat the application properties are usually located in the application-nexuse2e.yml in the Tomcat /conf directory.

Locate the spring.servlet.multipart.max-file-size and spring.servlet.multipart.max-request-size properties or add them if missing and set them to the desired value, e.g. to 20 MB:
`)

const markdown2 = marked(`
    spring:
      servlet:
        multipart:
          max-file-size: 20MB
          max-request-size: 20MB
`)
</script>
