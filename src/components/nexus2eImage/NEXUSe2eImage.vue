<template>
  <v-img
    class="nexus-img"
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
.nexus-img {
  max-width: 100%;
  height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
