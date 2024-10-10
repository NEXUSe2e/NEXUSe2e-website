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
        subtitle="Switch to 5.x Version"
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

      <v-list-item
        title="Solution"
        color="accent"
        :active="route.path === '/solutions'"
        @click="router.push('/solutions')"
      />

      <v-list-group value="docs">
        <v-list-item
          title="Overview"
          color="accent"
          :active="route.path === '/new/docs/overview'"
          @click="router.push('/new/docs/overview')"
        />
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
          <v-list-item
            title="Components"
            color="accent"
            :active="route.path === '/new/docs/concepts/components'"
            @click="router.push('/new/docs/concepts/components')"
          />
          <v-list-item
            title="Message flow"
            color="accent"
            :active="route.path === '/new/docs/concepts/message-flow'"
            @click="router.push('/new/docs/concepts/message-flow')"
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
          <v-list-group value="services">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Services"
                color="accent"
                :active="route.path === '/new/docs/components/services'"
                @click="router.push('/new/docs/components/services')"
              />
            </template>
            <v-list-item
              title="DirectoryScanner"
              color="accent"
              :active="route.path === '/new/docs/components/services/directoryScanner'"
              @click="router.push('/new/docs/components/services/directoryScanner')"
            />
          </v-list-group>
        </v-list-group>
        <v-list-group value="configuration">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Configuration"
              color="accent"
              :active="route.path === '/new/docs/configuration'"
            />
          </template>
          <v-list-item
            title="Allowed File Size"
            color="accent"
            :active="route.path === '/new/docs/configuration/allowed-file-size'"
            @click="router.push('/new/docs/configuration/allowed-file-size')"
          />
          <v-list-item
            title="Scheduling"
            color="accent"
            :active="route.path === '/new/docs/configuration/scheduling'"
            @click="router.push('/new/docs/configuration/scheduling')"
          />
          <v-list-item
            title="Client Authentication"
            color="accent"
            :active="route.path === '/new/docs/configuration/client-auth'"
            @click="router.push('/new/docs/configuration/client-auth')"
          />
          <v-list-item
            title="Server Authentication"
            color="accent"
            :active="route.path === '/new/docs/configuration/server-auth'"
            @click="router.push('/new/docs/configuration/server-auth')"
          />
        </v-list-group>
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
    <v-list-item
      title="Changelog"
      color="accent"
      :active="route.path === '/changelog'"
      @click="router.push('/changelog')"
    />
    <v-list-item
      v-show="false"
      title="Recommendations"
      color="accent"
      :active="route.path === '/recommendations'"
      @click="router.push('/recommendations')"
    />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import useNewNavigationDrawer from './useNewNavigationDrawer'

const { drawerOpen, toggleDrawer } = useNewNavigationDrawer()

const router = useRouter()
const route = useRoute()
</script>
