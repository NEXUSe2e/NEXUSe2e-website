<template>
  <v-app-bar
    flat
    height="112"
    class="border-b"
    color="background"
    image="@/assets/nexus_header.png"
  >
    <template #prepend>
      <div class="d-flex flex-column h-100">
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
      </div>
    </template>
    <template #append>
      <div class="text-right">
        <div class="py-1 px-8 mb-2 text-h6 text-md-h5 text-white bg-accent">The proven open source</div>
        <span
          class="py-1 px-8 text-h6 text-md-h5 text-white"
          style="background-color: #ff914c"
        >
          B2B solution
        </span>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import useOldNavigationDrawer from '@/components/theOldNavigationDrawer/useOldNavigationDrawer'

const { toggleDrawer } = useOldNavigationDrawer()
</script>
