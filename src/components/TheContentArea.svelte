<div id="router">
  <Router {routes} />
</div>

<script>
  import Router from "svelte-spa-router"
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

  import NotFound from '../views/NotFound.svelte'

  const routes = {
    '/': Home,
    /*
     * Product Paths
    */
    '/solution': Solution,
    '/solution/features': Features,
    '/solution/scenarios': Scenarios,
    /**
     * Service Paths
    */
    '/service': Service,
    /**
     * Documentation Paths
    */
    '/documentation': Documentation,
    '/documentation/installation': Installation,
    '/documentation/installation/system-requirements': SystemRequirements,
    '/documentation/installation/setting-up': SettingUp,
    '/documentation/installation/external-config': ExternalConfig,
    '/documentation/upgrade': Upgrade,
    '/documentation/upgrade/checklist': Checklist,
    '/documentation/configuration/': Configuration,
    '/documentation/configuration/alter-url': AlterUrl,
    '/documentation/configuration/mssql-auth': MssqlAuth,
    '/documentation/configuration/windows-service': WindowsService,
    '/documentation/configuration/backend-integration': BackendIntegration,
    '/documentation/configuration/xsd-schema-validation': XsdSchemaValidation,
    '/documentation/configuration/log4j-logging': Log4jLogging,
    '/documentation/security': Security,
    '/documentation/security/client-auth': ClientAuth,
    '/documentation/security/secure-endpoint-config': SecureEndpointConfig,
    '/documentation/security/ssl': Ssl,
    '/documentation/messaging': Messaging,
    '/documentation/messaging/first-steps': FirstSteps,
    '/documentation/messaging/testing-connectivity': TestingConnectivity,
    '/documentation/messaging/unconfigured-content-type': UnconfiguredContentType,
    '/documentation/messaging/http-plain-messaging': HttpPlainMessaging,
    '/documentation/messaging/backend-web-service-integration': BackendWebServiceIntegration,
    '/documentation/messaging/purging': Purging,
    /**
     * Download Paths
    */
    '/downloads': Downloads,
    /**
     * Contact and Imprint Paths
    */
    '/contact': Contact,
    '/imprint':Imprint,
    /**
     * Fallback for false routes
    */
   '*': NotFound
  }
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
