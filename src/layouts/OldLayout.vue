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
          <router-view v-slot="{ Component }">
            <v-scroll-x-transition>
              <component :is="Component" />
            </v-scroll-x-transition>
          </router-view>
        </v-container>
      </v-main>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
import TheOldNavigationDrawer from '@/components/theOldNavigationDrawer/TheOldNavigationDrawer.vue'
import TheOldToolbar from '@/components/theOldToolbar/TheOldToolbar.vue'
</script>
