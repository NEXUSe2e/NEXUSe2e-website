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

  import Features from '../views/product/features/Features.svelte'
  import Product from '../views/product/Product.svelte'
  import Scenarios from '../views/product/scenarios/Scenarios.svelte'
  
  import Service from '../views/service/Service.svelte'

  import Documentation from '../views/documentation/Documentation.svelte'
  import ExternalConfig from "../views/documentation/installation/externalConfig/ExternalConfig.svelte"
  import Installation from '../views/documentation/installation/Installation.svelte'
  import SettingUp from "../views/documentation/installation/settingUp/SettingUp.svelte"
  import SettingUpForMobile from "../views/documentation/installation/settingUpForMobile/SettingUpForMobile.svelte"
  import SystemRequirements from "../views/documentation/installation/systemRequirements/SystemRequirements.svelte"

  import Checklist from "../views/documentation/upgrade/checklist/Checklist.svelte"
  import From4To4 from "../views/documentation/upgrade/from4To4/From4To4.svelte"
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
      path: '/',
      component: Home
    },
/*
 * Product Paths
*/
    {
      path: '/product',
      component: Product
    },
    {
      path: '/product/features',
      component: Features
    },
    {
      path: '/product/scenarios',
      component: Scenarios
    },
/**
 * Service Paths
*/
    {
      path: '/service',
      component: Service
    },
/**
 * Documentation Paths
*/
    {
      path: '/documentation',
      component: Documentation
    },
    {
      path: '/documentation/installation',
      component: Installation
    },
    {
      path: '/documentation/installation/system-requirements',
      component: SystemRequirements
    },
    {
      path: '/documentation/installation/setting-up',
      component: SettingUp
    },
    {
      path: '/documentation/installation/setting-up-for-mobile',
      component: SettingUpForMobile
    },
    {
      path: '/documentation/installation/external-config',
      component: ExternalConfig
    },
    {
      path: '/documentation/upgrade',
      component: Upgrade
    },
    {
      path: '/documentation/upgrade/checklist',
      component: Checklist
    },
    {
      path: '/documentation/upgrade/from-4-to-4',
      component: From4To4
    },
    {
      path: '/documentation/configuration/',
      component: Configuration
    },
    {
      path: '/documentation/configuration/alter-url',
      component: AlterUrl
    },
    {
      path: '/documentation/configuration/mssql-auth',
      component: MssqlAuth
    },
    {
      path: '/documentation/configuration/windows-service',
      component: WindowsService
    },
    {
      path: '/documentation/configuration/backend-integration',
      component: BackendIntegration
    },
    {
      path: '/documentation/configuration/xsd-schema-validation',
      component: XsdSchemaValidation
    },
    {
      path: '/documentation/configuration/log4j-logging',
      component: Log4jLogging
    },
    {
      path: '/documentation/security',
      component: Security
    },
    {
      path: '/documentation/security/client-auth',
      component: ClientAuth
    },
    {
      path: '/documentation/security/secure-endpoint-config',
      component: SecureEndpointConfig
    },
    {
      path: '/documentation/security/ssl',
      component: Ssl
    },
    {
      path: '/documentation/messaging',
      component: Messaging
    },
    {
      path: '/documentation/messaging/first-steps',
      component: FirstSteps
    },
    {
      path: '/documentation/messaging/testing-connectivity',
      component: TestingConnectivity
    },
    {
      path: '/documentation/messaging/unconfigured-content-type',
      component: UnconfiguredContentType
    },
    {
      path: '/documentation/messaging/http-plain-messaging',
      component: HttpPlainMessaging
    },
    {
      path: '/documentation/messaging/backend-web-service-integration',
      component: BackendWebServiceIntegration
    },
    {
      path: '/documentation/messaging/purging',
      component: Purging
    },

/**
 * Download Paths
*/
    {
      path: '/downloads',
      component: Downloads
    },
/**
 * Contact and Imprint Paths
*/
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/imprint',
      component: Imprint
    }
  ]
</script>

<style>
#router {
  height: calc(100% - 8rem);
  padding: 1rem;

  overflow-y: scroll;
}
</style>
