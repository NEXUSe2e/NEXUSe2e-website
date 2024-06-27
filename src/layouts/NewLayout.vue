<template>
  <v-app>
    <v-theme-provider
      with-background
      class="h-100"
      theme="DARK"
    >
      <TheNewNavigationDrawer />
      <TheNewToolbar />
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
import TheNewNavigationDrawer from '@/components/theNewNavigationDrawer/TheNewNavigationDrawer.vue'
import TheNewToolbar from '@/components/theNewToolbar/TheNewToolbar.vue'
</script>
