
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
import { navigate } from "svelte-routing"
import NavigationList from "./NavigationList.svelte"

const navItems = [
  {
    route: '/NEXUSe2e-website/',
    text: 'Home'
  },
  {
    route: '/NEXUSe2e-website/solution',
    text: 'Solution',
    subroutes: [
      {
        route: '/NEXUSe2e-website/solution/features',
        text: 'Features'
      },
      {
        route: '/NEXUSe2e-website/solution/scenarios',
        text: 'Scenarios'
      }
    ]
  },
  {
    route: '/NEXUSe2e-website/service',
    text: 'Service'
  },
  {
    route: '/NEXUSe2e-website/documentation',
    text: 'Documentation',
    subroutes: [
      {
        route: '/NEXUSe2e-website/documentation/installation',
        text: 'Installation',
        subroutes: [
          {
            route: '/NEXUSe2e-website/documentation/installation/system-requirements',
            text: 'System Requirements'
          },
          {
            route: '/NEXUSe2e-website/documentation/installation/setting-up',
            text: 'Setting up NEXUSe2e'
          },
          {
            route: '/NEXUSe2e-website/documentation/installation/external-config',
            text: 'External Configuration Folder'
          }
        ]
      },
      {
        route: '/NEXUSe2e-website/documentation/upgrade',
        text: 'Upgrade',
        subroutes: [
          {
            route: '/NEXUSe2e-website/documentation/upgrade/checklist',
            text: 'Upgrade Checklist'
          }          
        ]
      },
      {
        route: '/NEXUSe2e-website/documentation/configuration',
        text: 'Configuration',
        subroutes: [
          {
            route: '/NEXUSe2e-website/documentation/configuration/alter-url',
            text: 'How to Alter the NEXUSe2e URL'
          },
          {
            route: '/NEXUSe2e-website/documentation/configuration/mssql-auth',
            text: 'Integrated Authentication with MSSQL'
          },
          {
            route: '/NEXUSe2e-website/documentation/configuration/windows-service',
            text: 'Windows Service'
          },
          {
            route: '/NEXUSe2e-website/documentation/configuration/backend-integration',
            text: 'NEXUSe2e Backend Integration'
          },
          {
            route: '/NEXUSe2e-website/documentation/configuration/xsd-schema-validation',
            text: 'XSD - Schema Validation'
          },
          {
            route: '/NEXUSe2e-website/documentation/configuration/log4j-logging',
            text: 'Logging with Log4j 2'
          }
        ]
      },
      {
        route: '/NEXUSe2e-website/documentation/security',
        text: 'Security',
        subroutes: [
          {
            route: '/NEXUSe2e-website/documentation/security/client-auth',
            text: 'Client Authentication'
          },
          {
            route: '/NEXUSe2e-website/documentation/security/secure-endpoint-config',
            text: 'Configure a secure web service endpoint'
          },
          {
            route: '/NEXUSe2e-website/documentation/security/ssl',
            text: 'SSL'
          }
        ]
      },
      {
        route: '/NEXUSe2e-website/documentation/messaging',
        text: 'Messaging',
        subroutes: [
          {
            route: '/NEXUSe2e-website/documentation/messaging/first-steps',
            text: 'First Steps in Messaging'
          },
          {
            route: '/NEXUSe2e-website/documentation/messaging/testing-connectivity',
            text: 'Testing Connectivity'
          },
          {
            route: '/NEXUSe2e-website/documentation/messaging/unconfigured-content-type',
            text: 'Unconfigured Content Type'
          },
          {
            route: '/NEXUSe2e-website/documentation/messaging/http-plain-messaging',
            text: 'HTTP Plain Messaging'
          },
          {
            route: '/NEXUSe2e-website/documentation/messaging/backend-web-service-integration',
            text: 'Backend Web Service Integration'
          },
          {
            route: '/NEXUSe2e-website/documentation/messaging/purging',
            text: 'Conversation / Message Purging'
          },
          {
            route: '/NEXUSe2e-website/documentation/messaging/comet',
            text: 'NEXUSe2e - comet'
          }
        ]
      },
    ]
  },
  {
    route: '/NEXUSe2e-website/downloads',
    text: 'Downloads'
  }
]

const legalPoints = [
  {
    route: '/NEXUSe2e-website/contact',
    text: 'Contact'
  },
  {
    route: '/NEXUSe2e-website/imprint',
    text: 'Legal Notices / Impressum'
  }
]

let activeItem = '/home'

function setActive({ detail }) {
  activeItem = detail
  navigate(detail)
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