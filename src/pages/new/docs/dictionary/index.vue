<template>
  <v-row>
    <v-col cols="12">
      <h1>Dictionary</h1>
      <v-card>
        <v-card-text>
          <div
            v-for="item in dictionary"
            :key="item.key"
          >
            <div class="text-subtitle-1 font-weight-bold">{{ item.key }}</div>
            <div
              class="dictionary-content"
              v-html="item.value"
            />
          </div>
        </v-card-text>
      </v-card>
      <div v-html="markdown" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { rawDictionary } from './rawDictionary'
import { marked } from 'marked'

interface DictionaryItem {
  key: string
  value: string
}


const dictionary = ref<DictionaryItem[]>([])

function compare( a : any, b : any ) {
  if ( a.key < b.key ){
    return -1;
  }
  if ( a.key > b.key ){
    return 1;
  }
  return 0;
}


async function processDictionary() {
  dictionary.value = await Promise.all(
    rawDictionary.map(async (item) => ({
      ...item,
      value: await marked(item.value)
    }))
  )

  dictionary.value.sort( compare );
}

onMounted(() => {
  processDictionary()
})

const markdown = marked(`


And after all this, we want to make sure a couple of phrases aren't missed above but were actually removed from the concepts in NEXUSe2e.

- Frontend and Backend: Yes it took some time but eventually we learned, its not only confusing but also not necessary at all.
- Persistent Properties: These are replaced by the Key Value Properties. The behavior is more or less the same.
- TRP: the transport/routing/protocol configuration got removed in favor of the routes. They replace the existing options and adding some new options as well.
- Roles: Roles are not really gone but got be summarized as default rules within NEXUSe2e. Now you have System Administrator, Administrator and Report. This might change over time, but we want to keep it as simple as possible.

`)
</script>

<style>
.dictionary-content > p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}
</style>
