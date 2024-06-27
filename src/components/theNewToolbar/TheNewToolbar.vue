<template>
  <v-app-bar
    flat
    class="border-b"
    color="background"
  >
    <template #prepend>
      <v-btn
        icon
        size="x-large"
        color="accent"
        @click="() => toggleDrawer()"
      >
        <v-icon
          icon="mdi-menu"
          size="x-large"
        />
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import useNewNavigationDrawer from '@/components/theNewNavigationDrawer/useNewNavigationDrawer'

const { toggleDrawer } = useNewNavigationDrawer()
</script>
