export default [
  {
    path: 'home',
    component: () => import('@/pages/old/home/index.vue')
  },
  {
    path: 'solution',
    component: () => import('@/pages/old/solution/index.vue')
  },
  {
    path: 'solution/features',
    component: () => import('@/pages/old/solution/features/index.vue')
  },
  {
    path: 'solution/scenarios',
    component: () => import('@/pages/old/solution/scenarios/index.vue')
  },
  {
    path: 'service',
    component: () => import('@/pages/old/service/index.vue')
  },
  {
    path: '/documentation/installation/system-requirements',
    component: () => import('@/pages/old/documentation/installation/systemRequirements/index.vue')
  },
  {
    path: '/documentation/installation/setting-up',
    component: () => import('@/pages/old/documentation/installation/settingUp/index.vue')
  },
  {
    path: '/documentation/installation/external-config',
    component: () => import('@/pages/old/documentation/installation/externalConfig/index.vue')
  },
  {
    path: 'documentation/upgrade',
    component: () => import('@/pages/old/documentation/upgrade/index.vue')
  },
  {
    path: 'documentation/configuration/alter-url',
    component: () => import('@/pages/old/documentation/configuration/alterUrl/index.vue')
  },
  {
    path: 'documentation/configuration/mssql-auth',
    component: () => import('@/pages/old/documentation/configuration/mssqlAuth/index.vue')
  },
  {
    path: 'documentation/configuration/windows-service',
    component: () => import('@/pages/old/documentation/configuration/windowsService/index.vue')
  },
  {
    path: 'documentation/configuration/backend-integration',
    component: () => import('@/pages/old/documentation/configuration/backendIntegration/index.vue')
  },
  {
    path: 'documentation/configuration/xsd-schema-validation',
    component: () => import('@/pages/old/documentation/configuration/xsdSchemaValidation/index.vue')
  },
  {
    path: 'documentation/configuration/log4j-logging',
    component: () => import('@/pages/old/documentation/configuration/log4jLogging/index.vue')
  },
  {
    path: 'documentation/security',
    component: () => import('@/pages/old/documentation/security/index.vue')
  },
  {
    path: 'documentation/messaging/first-steps',
    component: () => import('@/pages/old/documentation/messaging/firstSteps/index.vue')
  },
  {
    path: 'documentation/messaging/testing-connectivity',
    component: () => import('@/pages/old/documentation/messaging/testingConnectivity/index.vue')
  },
  {
    path: 'documentation/messaging/unconfigured-content-type',
    component: () => import('@/pages/old/documentation/messaging/unconfiguredContentType/index.vue')
  },
  {
    path: 'documentation/messaging/http-plain-messaging',
    component: () => import('@/pages/old/documentation/messaging/httpPlainMessaging/index.vue')
  },
  {
    path: 'documentation/messaging/backend-web-service-integration',
    component: () => import('@/pages/old/documentation/messaging/backendWebServiceIntegration/index.vue')
  },
  {
    path: 'documentation/messaging/purging',
    component: () => import('@/pages/old/documentation/messaging/purging/index.vue')
  },
  {
    path: 'downloads',
    component: () => import('@/pages/old/downloads/index.vue')
  },
  {
    path: 'contact',
    component: () => import('@/pages/old/contact/index.vue')
  },
  {
    path: 'imprint',
    component: () => import('@/pages/old/imprint/index.vue')
  },
  {
    path: 'privacy',
    component: () => import('@/pages/old/privacy/index.vue')
  }
]
