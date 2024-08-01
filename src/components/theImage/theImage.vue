

<template>
  <div>{{resolvedSrc}}</div>
  <v-img
    display="true"
    :src="src"
  />
</template>
<script setup lang="ts">

defineProps({
  src: {
    type: String,
    required: true
  }
})




</script>



<style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
</style>
