<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        max-height="550px"
        src="./light-dark.png"
      />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown1 = marked(`
# Home

---

## The next generation of NEXUSe2e</h2>

`)
const markdown2 = marked(`

## NEXUSe2e 10.0

The next generation of NEXUSe2e is now available. While the 5.x version is still available and will stay as an open source solution for anyone to use, the new implementation of NEXUSe2e starting with version 10.  \ 
The new NEXUSe2e implementation is a full rewrite to keep it separate from the open source solution. We stick with the convincing concepts but also redesigned quite a few models and concepts to make them future prove and more flexible or just simpler than before. The rewrite provide us with the opportunity to replace all aged software libraries and replace the with up to date technologies. Therefore we only support Java versions > 21 and Tomcat > 10.1. For security and compliance purposes we now support technologies like OAuth2 and secure storages like Azure Keyvault.
\
Besides of all the technical improvements, we also changed to the license to a closed source model.  
\ 
Feel free to get in touch with us and we help you getting your new version going. 
\
### Your NEXUSe2e Team


`)
</script>


raus:
Angaben gemäß 5 TGM

Datemschutzerklärung