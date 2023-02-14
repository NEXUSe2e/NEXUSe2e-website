
<nav id="the-navigation">
  <NavigationList
    navItems={navItems}
    activeItem={activeItem}
    on:setActive={setActive}
  />

  <NavigationList
    navItems={legalPoints}
    activeItem={activeItem}
    on:setActive={setActive}
  />
</nav>

<script>
import { location, push } from 'svelte-spa-router'
import NavigationList from "./NavigationList.svelte"

const navItems = [
  {
    route: '/',
    text: 'Home'
  },
  {
    route: '/solution',
    text: 'Solution',
    subroutes: [
      {
        route: '/solution/features',
        text: 'Features'
      },
      {
        route: '/solution/scenarios',
        text: 'Scenarios'
      }
    ]
  },
  {
    route: '/service',
    text: 'Service'
  },
  {
    route: '/documentation',
    text: 'Documentation',
    subroutes: [
      {
        route: '/documentation/installation',
        text: 'Installation',
        subroutes: [
          {
            route: '/documentation/installation/system-requirements',
            text: 'System Requirements'
          },
          {
            route: '/documentation/installation/setting-up',
            text: 'Setting up NEXUSe2e'
          },
          {
            route: '/documentation/installation/external-config',
            text: 'External Configuration Folder'
          }
        ]
      },
      {
        route: '/documentation/upgrade',
        text: 'Upgrade'
      },
      {
        route: '/documentation/configuration',
        text: 'Configuration',
        subroutes: [
          {
            route: '/documentation/configuration/alter-url',
            text: 'How to Alter the NEXUSe2e URL'
          },
          {
            route: '/documentation/configuration/mssql-auth',
            text: 'Integrated Authentication with MSSQL'
          },
          {
            route: '/documentation/configuration/windows-service',
            text: 'Windows Service'
          },
          {
            route: '/documentation/configuration/backend-integration',
            text: 'NEXUSe2e Backend Integration'
          },
          {
            route: '/documentation/configuration/xsd-schema-validation',
            text: 'XSD - Schema Validation'
          },
          {
            route: '/documentation/configuration/log4j-logging',
            text: 'Logging with Log4j 2'
          }
        ]
      },
      {
        route: '/documentation/security',
        text: 'Security'
      },
      {
        route: '/documentation/messaging',
        text: 'Messaging',
        subroutes: [
          {
            route: '/documentation/messaging/first-steps',
            text: 'First Steps in Messaging'
          },
          {
            route: '/documentation/messaging/testing-connectivity',
            text: 'Testing Connectivity'
          },
          {
            route: '/documentation/messaging/unconfigured-content-type',
            text: 'Unconfigured Content Type'
          },
          {
            route: '/documentation/messaging/http-plain-messaging',
            text: 'HTTP Plain Messaging'
          },
          {
            route: '/documentation/messaging/backend-web-service-integration',
            text: 'Backend Web Service Integration'
          },
          {
            route: '/documentation/messaging/purging',
            text: 'Conversation / Message Purging'
          }
        ]
      },
    ]
  },
  {
    route: '/downloads',
    text: 'Downloads'
  }
]

const legalPoints = [
  {
    route: '/contact',
    text: 'Contact'
  },
  {
    route: '/imprint',
    text: 'Legal Notices / Impressum'
  }
]

let activeItem = $location

function setActive({ detail }) {
  activeItem = detail
  push(detail)
}
</script>

<style>
#the-navigation {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>