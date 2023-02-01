<div id="router">
  <Router>
    {#each routeComponents as routeComponent}
      <Route path={routeComponent.path} component={routeComponent.component} />
    {/each}
  </Router>
</div>

<script>
  import { Route, Router } from "svelte-routing"
  import Home from '../views/home/Home.svelte'

  import Features from '../views/solution/features/Features.svelte'
  import Scenarios from '../views/solution/scenarios/Scenarios.svelte'
  import Solution from '../views/solution/Solution.svelte'
  
  import Service from '../views/service/Service.svelte'

  import Documentation from '../views/documentation/Documentation.svelte'
  import ExternalConfig from "../views/documentation/installation/externalConfig/ExternalConfig.svelte"
  import Installation from '../views/documentation/installation/Installation.svelte'
  import SettingUp from "../views/documentation/installation/settingUp/SettingUp.svelte"
  import SystemRequirements from "../views/documentation/installation/systemRequirements/SystemRequirements.svelte"

  import Checklist from "../views/documentation/upgrade/checklist/Checklist.svelte"
  import Upgrade from "../views/documentation/upgrade/Upgrade.svelte"

  import AlterUrl from "../views/documentation/configuration/alterUrl/AlterUrl.svelte"
  import BackendIntegration from "../views/documentation/configuration/backendIntegration/BackendIntegration.svelte"
  import Configuration from "../views/documentation/configuration/Configuration.svelte"
  import Log4jLogging from "../views/documentation/configuration/log4jLogging/Log4jLogging.svelte"
  import MssqlAuth from "../views/documentation/configuration/mssqlAuth/MssqlAuth.svelte"
  import WindowsService from "../views/documentation/configuration/windowsService/WindowsService.svelte"
  import XsdSchemaValidation from "../views/documentation/configuration/xsdSchemaValidation/XsdSchemaValidation.svelte"

  import ClientAuth from "../views/documentation/security/clientAuth/ClientAuth.svelte"
  import SecureEndpointConfig from "../views/documentation/security/secureEndpointConfig/SecureEndpointConfig.svelte"
  import Security from "../views/documentation/security/Security.svelte"
  import Ssl from "../views/documentation/security/ssl/SSL.svelte"

  import BackendWebServiceIntegration from "../views/documentation/messaging/backendWebServiceIntegration/BackendWebServiceIntegration.svelte"
  import FirstSteps from "../views/documentation/messaging/firstSteps/FirstSteps.svelte"
  import HttpPlainMessaging from "../views/documentation/messaging/httpPlainMessaging/HttpPlainMessaging.svelte"
  import Messaging from "../views/documentation/messaging/Messaging.svelte"
  import Purging from "../views/documentation/messaging/purging/Purging.svelte"
  import TestingConnectivity from "../views/documentation/messaging/testingConnectivity/TestingConnectivity.svelte"
  import UnconfiguredContentType from "../views/documentation/messaging/unconfiguredContentType/UnconfiguredContentType.svelte"

  import Downloads from '../views/downloads/Downloads.svelte'

  import Contact from '../views/contact/Contact.svelte'
  import Imprint from '../views/imprint/Imprint.svelte'

  const routeComponents = [
    {
      path: '/NEXUSe2e-website/',
      component: Home
    },
/*
 * Product Paths
*/
    {
      path: '/NEXUSe2e-website/solution',
      component: Solution
    },
    {
      path: '/NEXUSe2e-website/solution/features',
      component: Features
    },
    {
      path: '/NEXUSe2e-website/solution/scenarios',
      component: Scenarios
    },
/**
 * Service Paths
*/
    {
      path: '/NEXUSe2e-website/service',
      component: Service
    },
/**
 * Documentation Paths
*/
    {
      path: '/NEXUSe2e-website/documentation',
      component: Documentation
    },
    {
      path: '/NEXUSe2e-website/documentation/installation',
      component: Installation
    },
    {
      path: '/NEXUSe2e-website/documentation/installation/system-requirements',
      component: SystemRequirements
    },
    {
      path: '/NEXUSe2e-website/documentation/installation/setting-up',
      component: SettingUp
    },
    {
      path: '/NEXUSe2e-website/documentation/installation/external-config',
      component: ExternalConfig
    },
    {
      path: '/NEXUSe2e-website/documentation/upgrade',
      component: Upgrade
    },
    {
      path: '/NEXUSe2e-website/documentation/upgrade/checklist',
      component: Checklist
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/',
      component: Configuration
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/alter-url',
      component: AlterUrl
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/mssql-auth',
      component: MssqlAuth
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/windows-service',
      component: WindowsService
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/backend-integration',
      component: BackendIntegration
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/xsd-schema-validation',
      component: XsdSchemaValidation
    },
    {
      path: '/NEXUSe2e-website/documentation/configuration/log4j-logging',
      component: Log4jLogging
    },
    {
      path: '/NEXUSe2e-website/documentation/security',
      component: Security
    },
    {
      path: '/NEXUSe2e-website/documentation/security/client-auth',
      component: ClientAuth
    },
    {
      path: '/NEXUSe2e-website/documentation/security/secure-endpoint-config',
      component: SecureEndpointConfig
    },
    {
      path: '/NEXUSe2e-website/documentation/security/ssl',
      component: Ssl
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging',
      component: Messaging
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging/first-steps',
      component: FirstSteps
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging/testing-connectivity',
      component: TestingConnectivity
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging/unconfigured-content-type',
      component: UnconfiguredContentType
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging/http-plain-messaging',
      component: HttpPlainMessaging
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging/backend-web-service-integration',
      component: BackendWebServiceIntegration
    },
    {
      path: '/NEXUSe2e-website/documentation/messaging/purging',
      component: Purging
    },

/**
 * Download Paths
*/
    {
      path: '/NEXUSe2e-website/downloads',
      component: Downloads
    },
/**
 * Contact and Imprint Paths
*/
    {
      path: '/NEXUSe2e-website/contact',
      component: Contact
    },
    {
      path: '/NEXUSe2e-website/imprint',
      component: Imprint
    }
  ]
</script>

<style>
#router {
  height: calc(100% - 8rem);
  padding: 1.5rem;

  overflow-y: scroll;
}

@media screen and (min-width: 640px) {
  #router {
    padding-inline: 2.5rem;
  }
}
</style>
