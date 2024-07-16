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

      <v-list-group value="docs">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Documentation"
            color="accent"
            :active="route.path === '/new/docs'"
          />
        </template>
        <v-list-group value="concepts">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Concepts"
              color="accent"
              :active="route.path === '/new/docs/concepts'"
            />
          </template>
          <v-list-item
            title="Inflow and Outflow"
            color="accent"
            :active="route.path === '/new/docs/concepts/flows'"
            @click="router.push('/new/docs/concepts/flows')"
          />
          <v-list-item
            title="Routes"
            color="accent"
            :active="route.path === '/new/docs/concepts/routes'"
            @click="router.push('/new/docs/concepts/routes')"
          />
        </v-list-group>
        <v-list-group value="components">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Components"
              color="accent"
              :active="route.path === '/new/docs/components'"
            />
          </template>
          <v-list-item
            title="DirectoryScanner"
            color="accent"
            :active="route.path === '/new/docs/components/directory_scanner'"
            @click="router.push('/new/docs/components/directory_scanner')"
          />
        </v-list-group>
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
