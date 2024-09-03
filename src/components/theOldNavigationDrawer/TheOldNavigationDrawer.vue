<template>
  <v-navigation-drawer
    id="old-navigation-drawer"
    color="background"
    :model-value="drawerOpen"
    @update:model-value="toggleDrawer"
  >
    <v-img src="@/assets/logo.png" />
    <v-list
      density="compact"
      :opened="currentlyOpen"
    >
      <v-list-item
        subtitle="Switch to 5.x Version"
        style="min-height: 24px"
        @click="router.push('/new')"
      />

      <v-divider class="my-2" />

      <v-list-item
        title="Home"
        color="accent"
        :active="route.path === '/home'"
        @click="router.push('/home')"
      />
      <v-list-group value="solution">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Solution"
            color="accent"
            :active="route.path === '/solution'"
            @click="router.push('/solution')"
          />
        </template>

        <v-list-item
          title="Features"
          color="accent"
          :active="route.path === '/solution/features'"
          @click="router.push('/solution/features')"
        />
        <v-list-item
          title="Scenarios"
          color="accent"
          :active="route.path === '/solution/scenarios'"
          @click="router.push('/solution/scenarios')"
        />
      </v-list-group>

      <v-list-item
        title="Service"
        color="accent"
        :active="route.path === '/service'"
        @click="router.push('/service')"
      />

      <v-list-group value="documentation">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Documentation"
            color="accent"
          />
        </template>

        <v-list-group value="installation">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Installation"
              color="accent"
            />
          </template>

          <v-list-item
            title="System Requirements"
            color="accent"
            :active="route.path === '/documentation/installation/system-requirements'"
            @click="router.push('/documentation/installation/system-requirements')"
          />
          <v-list-item
            title="Setting up NEXUSe2e"
            color="accent"
            :active="route.path === '/documentation/installation/setting-up'"
            @click="router.push('/documentation/installation/setting-up')"
          />
          <v-list-item
            title="External Configuration Folder"
            color="accent"
            :active="route.path === '/documentation/installation/external-config'"
            @click="router.push('/documentation/installation/external-config')"
          />
        </v-list-group>

        <v-list-item
          title="Upgrade"
          color="accent"
          :active="route.path === '/documentation/upgrade'"
          @click="router.push('/documentation/upgrade')"
        />

        <v-list-group value="configuration">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Configuration"
              color="accent"
            />
          </template>

          <v-list-item
            title="How to Alter the NEXUSe2e URL"
            color="accent"
            :active="route.path === '/documentation/configuration/alter-url'"
            @click="router.push('/documentation/configuration/alter-url')"
          />
          <v-list-item
            title="Integrated Authentication with MSSQL"
            color="accent"
            :active="route.path === '/documentation/configuration/mssql-auth'"
            @click="router.push('/documentation/configuration/mssql-auth')"
          />
          <v-list-item
            title="Windows Service"
            color="accent"
            :active="route.path === '/documentation/configuration/windows-service'"
            @click="router.push('/documentation/configuration/windows-service')"
          />
          <v-list-item
            title="NEXUSe2e Backend Integration"
            color="accent"
            :active="route.path === '/documentation/configuration/backend-integration'"
            @click="router.push('/documentation/configuration/backend-integration')"
          />
          <v-list-item
            title="XSD - Schema Validation"
            color="accent"
            :active="route.path === '/documentation/configuration/xsd-schema-validation'"
            @click="router.push('/documentation/configuration/xsd-schema-validation')"
          />
          <v-list-item
            title="Logging with Log4j 2"
            color="accent"
            :active="route.path === '/documentation/configuration/log4j-logging'"
            @click="router.push('/documentation/configuration/log4j-logging')"
          />
        </v-list-group>

        <v-list-item
          title="Security"
          color="accent"
          :active="route.path === '/documentation/security'"
          @click="router.push('/documentation/security')"
        />

        <v-list-group value="messaging">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Messaging"
              color="accent"
            />
          </template>

          <v-list-item
            title="First Steps in Messaging"
            color="accent"
            :active="route.path === '/documentation/messaging/first-steps'"
            @click="router.push('/documentation/messaging/first-steps')"
          />
          <v-list-item
            title="Testing Connectivity"
            color="accent"
            :active="route.path === '/documentation/messaging/testing-connectivity'"
            @click="router.push('/documentation/messaging/testing-connectivity')"
          />
          <v-list-item
            title="Unconfigured Content Type"
            color="accent"
            :active="route.path === '/documentation/messaging/unconfigured-content-type'"
            @click="router.push('/documentation/messaging/unconfigured-content-type')"
          />
          <v-list-item
            title="HTTP Plain Messaging"
            color="accent"
            :active="route.path === '/documentation/messaging/http-plain-messaging'"
            @click="router.push('/documentation/messaging/http-plain-messaging')"
          />
          <v-list-item
            title="Backend Web Service Integration"
            color="accent"
            :active="route.path === '/documentation/messaging/backend-web-service-integration'"
            @click="router.push('/documentation/messaging/backend-web-service-integration')"
          />
          <v-list-item
            title="Conversation / Message Purging"
            color="accent"
            :active="route.path === '/documentation/messaging/purging'"
            @click="router.push('/documentation/messaging/purging')"
          />
        </v-list-group>
      </v-list-group>

      <v-list-item
        title="Downloads"
        color="accent"
        :active="route.path === '/downloads'"
        @click="router.push('/downloads')"
      />
    </v-list>

    <template #append>
      <v-list density="compact">
        <v-list-item
          title="Contact"
          color="accent"
          :active="route.path === '/contact'"
          @click="router.push('/contact')"
        />
        <v-list-item
          title="Imprint / Impressum"
          color="accent"
          :active="route.path === '/imprint'"
          @click="router.push('/imprint')"
        />
        <v-list-item
          title="Privacy Policy / Datenschutz"
          color="accent"
          :active="route.path === '/privacy'"
          @click="router.push('/privacy')"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import useOldNavigationDrawer from './useOldNavigationDrawer'

const router = useRouter()
const route = useRoute()

const { drawerOpen, toggleDrawer } = useOldNavigationDrawer()

const currentlyOpen = computed(() => {
  if (route.path.includes('/documentation/messaging')) return ['documentation', 'messaging']

  if (route.path.includes('/documentation/configuration')) return ['documentation', 'configuration']

  if (route.path.includes('/documentation/installation')) return ['documentation', 'installation']

  if (route.path.includes('/documentation')) return ['documentation']

  if (route.path.includes('/solution')) return ['solution']

  return []
})
</script>

<style>
#old-navigation-drawer .v-list-item-title {
  white-space: unset;
}
</style>
