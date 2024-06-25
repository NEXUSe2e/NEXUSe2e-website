<template>
  <v-navigation-drawer
    floating
    color="surface"
    :model-value="drawerOpen"
    @update:model-value="toggleDrawer"
  >
    <v-img src="@/assets/logo.png" />
    <v-list>
      <v-list-item
        density="compact"
        subtitle="Old docs"
        style="min-height: 24px"
        @click="router.push('/home')"
      />

      <v-divider class="my-2" />

      <v-list-item
        title="Home"
        color="accent"
        :active="route.path === '/new'"
        @click="router.push('/new')"
      />
    </v-list>

    <template #append>
      <v-list>
        <v-list-item
          title="Contact"
          color="accent"
          :active="route.path === '/new/contact'"
          @click="router.push('/new/contact')"
        />
        <v-list-item
          title="Legal Notices / Impressum"
          color="accent"
          :active="route.path === '/new/imprint'"
          @click="router.push('/new/imprint')"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import useNewNavigationDrawer from './useNewNavigationDrawer'

const { drawerOpen, toggleDrawer } = useNewNavigationDrawer()

const router = useRouter()
const route = useRoute()
</script>
