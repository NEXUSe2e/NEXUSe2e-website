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
        subtitle="Old Version"
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

      <v-list-group value="docs">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Documentation"
            color="accent"
            :active="route.path === '/new/docs'"
            @click="router.push('/new/docs')"
          />
        </template>
        <v-list-item
          title="Overview"
          color="accent"
          :active="route.path === '/new/docs/overview'"
          @click="router.push('/new/docs/overview')"
        />
        <v-list-item
          title="Dictionary"
          color="accent"
          :active="route.path === '/new/docs/dictionary'"
          @click="router.push('/new/docs/dictionary')"
        />
      </v-list-group>
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
          title="Imprint / Impressum"
          color="accent"
          :active="route.path === '/new/imprint'"
          @click="router.push('/new/imprint')"
        />
        <v-list-item
          title="Privacy Policy / Datenschutz"
          color="accent"
          :active="route.path === '/new/privacy'"
          @click="router.push('/new/privacy')"
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
