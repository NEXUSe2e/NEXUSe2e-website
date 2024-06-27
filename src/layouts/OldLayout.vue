<template>
  <v-app>
    <v-theme-provider
      with-background
      class="h-100"
      theme="LIGHT"
    >
      <TheOldNavigationDrawer />
      <TheOldToolbar />
      <v-main>
        <v-container
          fluid
          style="max-width: 1200px"
        >
          <v-scroll-x-transition>
            <router-view />
          </v-scroll-x-transition>
        </v-container>
      </v-main>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
import TheOldNavigationDrawer from '@/components/theOldNavigationDrawer/TheOldNavigationDrawer.vue'
import TheOldToolbar from '@/components/theOldToolbar/TheOldToolbar.vue'
</script>
