export default [
  {
    path: 'home',
    name: 'oldOverview',
    component: () => import(/* webpackChunkName: "OldOverviewPage" */ '@/pages/old/home/index.vue')
  },
  {
    path: 'solution',
    name: 'solution',
    component: () => import(/* webpackChunkName: "OldSolutionPage" */ '@/pages/old/solution/index.vue')
  },
  {
    path: 'solution/features',
    name: 'features',
    component: () => import(/* webpackChunkName: "OldFeaturesPage" */ '@/pages/old/solution/features/index.vue')
  },
  {
    path: 'solution/scenarios',
    name: 'scenarios',
    component: () => import(/* webpackChunkName: "OldScenariosPage" */ '@/pages/old/solution/scenarios/index.vue')
  },
  {
    path: 'service',
    name: 'service',
    component: () => import(/* webpackChunkName: "OldServicePage" */ '@/pages/old/service/index.vue')
  },
  {
    path: 'documentation',
    name: 'documentation',
    component: () => import(/* webpackChunkName: "OldDocumentationPage" */ '@/pages/old/documentation/index.vue')
  },
  {
    path: 'documentation/installation',
    name: 'installation',
    component: () =>
      import(/* webpackChunkName: "OldInstallationPage" */ '@/pages/old/documentation/installation/index.vue')
  },
  {
    path: '/documentation/installation/system-requirements',
    name: 'systemRequirements',
    component: () =>
      import(
        /* webpackChunkName: "OldSystemRequirementsPage" */ '@/pages/old/documentation/installation/systemRequirements/index.vue'
      )
  },
  {
    path: '/documentation/installation/setting-up',
    name: 'settingUp',
    component: () =>
      import(/* webpackChunkName: "OldSettingUpPage" */ '@/pages/old/documentation/installation/settingUp/inde.vue')
  },
  {
    path: '/documentation/installation/external-config',
    name: 'externalConfig',
    component: () =>
      import(
        /* webpackChunkName: "OldExternalConfigPage" */ '@/pages/old/documentation/installation/externalConfig/index.vue'
      )
  },
  {
    path: 'documentation/upgrade',
    name: 'upgrade',
    component: () => import(/* webpackChunkName: "OldUpgradePage" */ '@/pages/old/documentation/upgrade/index.vue')
  },
  {
    path: 'documentation/configuration',
    name: 'configuration',
    component: () =>
      import(/* webpackChunkName: "OldConfigurationPage" */ '@/pages/old/documentation/configuration/index.vue')
  },
  {
    path: 'documentation/configuration/alter-url',
    name: 'alterUrl',
    component: () =>
      import(/* webpackChunkName: "OldAlterUrlPage" */ '@/pages/old/documentation/configuration/alterUrl/index.vue')
  },
  {
    path: 'documentation/configuration/mssql-auth',
    name: 'mssqlAuth',
    component: () =>
      import(/* webpackChunkName: "OldMssqlAuthPage" */ '@/pages/old/documentation/configuration/mssqlAuth/index.vue')
  },
  {
    path: 'documentation/configuration/windows-service',
    name: 'windowsService',
    component: () =>
      import(
        /* webpackChunkName: "OldWindowsServicePage" */ '@/pages/old/documentation/configuration/windowsService/index.vue'
      )
  },
  {
    path: 'documentation/configuration/backend-integration',
    name: 'backendIntegration',
    component: () =>
      import(
        /* webpackChunkName: "OldBackendIntegrationPage" */ '@/pages/old/documentation/configuration/backendIntegration/index.vue'
      )
  },
  {
    path: 'documentation/configuration/xsd-schema-validation',
    name: 'xsdSchemaValidation',
    component: () =>
      import(
        /* webpackChunkName: "OldXsdSchemaValidationPage" */ '@/pages/old/documentation/configuration/xsdSchemaValidation/index.vue'
      )
  },
  {
    path: 'documentation/configuration/log4j-logging',
    name: 'log4jLogging',
    component: () =>
      import(
        /* webpackChunkName: "OldLog4jLoggingPage" */ '@/pages/old/documentation/configuration/log4jLogging/index.vue'
      )
  },
  {
    path: 'documentation/security',
    name: 'security',
    component: () => import(/* webpackChunkName: "OldSecurityPage" */ '@/pages/old/documentation/security/index.vue')
  },
  {
    path: 'documentation/messaging',
    name: 'messaging',
    component: () => import(/* webpackChunkName: "OldMessagingPage" */ '@/pages/old/documentation/messaging/index.vue')
  },
  {
    path: 'documentation/messaging/first-steps',
    name: 'firstSteps',
    component: () =>
      import(/* webpackChunkName: "OldFirstStepsPage" */ '@/pages/old/documentation/messaging/firstSteps/index.vue')
  },
  {
    path: 'documentation/messaging/testing-connectivity',
    name: 'testingConnectivity',
    component: () =>
      import(
        /* webpackChunkName: "OldTestingConnectivityPage" */ '@/pages/old/documentation/messaging/testingConnectivity/index.vue'
      )
  },
  {
    path: 'documentation/messaging/unconfigured-content-type',
    name: 'unconfiguredContentType',
    component: () =>
      import(
        /* webpackChunkName: "OldUnconfiguredContentTypePage" */ '@/pages/old/documentation/messaging/unconfiguredContentType/index.vue'
      )
  },
  {
    path: 'documentation/messaging/http-plain-messaging',
    name: 'httpPlainMessaging',
    component: () =>
      import(
        /* webpackChunkName: "OldHttpPlainMessagingPage" */ '@/pages/old/documentation/messaging/httpPlainMessaging/index.vue'
      )
  },
  {
    path: 'documentation/messaging/backend-web-service-integration',
    name: 'backendWebServiceIntegration',
    component: () =>
      import(
        /* webpackChunkName: "OldBackendWebServiceIntegrationPage" */ '@/pages/old/documentation/messaging/backendWebServiceIntegration/index.vue'
      )
  },
  {
    path: 'documentation/messaging/purging',
    name: 'purging',
    component: () =>
      import(/* webpackChunkName: "OldPurgingPage" */ '@/pages/old/documentation/messaging/purging/index.vue')
  },
  {
    path: 'downloads',
    name: 'downloads',
    component: () => import(/* webpackChunkName: "OldDownloadsPage" */ '@/pages/old/downloads/index.vue')
  },
  {
    path: 'contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "OldContactPage" */ '@/pages/old/contact/index.vue')
  },
  {
    path: 'imprint',
    name: 'imprint',
    component: () => import(/* webpackChunkName: "OldImprintPage" */ '@/pages/old/imprint/index.vue')
  }
]
