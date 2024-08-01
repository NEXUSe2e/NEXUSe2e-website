export default [
  {
    path: '',
    component: () => import('@/pages/new/index.vue')
  },
  {
    path: '/solutions',
    component: () => import('@/pages/new/solution/index.vue')
  },
  {
    path: '/changelog',
    component: () => import('@/pages/new/changelog/index.vue')
  },
  {
    path: '/recommendations',
    component: () => import('@/pages/new/recommendations/index.vue')
  },
  {
    path: 'docs/concepts/flows',
    component: () => import('@/pages/new/docs/concepts/flows/index.vue')
  },
  {
    path: 'docs/concepts/routes',
    component: () => import('@/pages/new/docs/concepts/routes/index.vue')
  },
  {
    path: 'docs/components/services',
    component: () => import('@/pages/new/docs/components/services/index.vue')
  },
  {
    path: 'docs/components/services/directory_scanner',
    component: () => import('@/pages/new/docs/components/services/directory_scanner/index.vue')
  },
  {
    path: 'docs/concepts/components',
    component: () => import('@/pages/new/docs/concepts/components/index.vue')
  },
  {
    path: 'docs/concepts/message-flow',
    component: () => import('@/pages/new/docs/concepts/message-flow/index.vue')
  },
  {
    path: 'docs/components/directory_scanner',
    component: () => import('@/pages/new/docs/components/services/directory_scanner/index.vue')
  },
  {
    path: 'docs/overview',
    component: () => import('@/pages/new/docs/overview/index.vue')
  },
  {
    path: 'docs/dictionary',
    component: () => import('@/pages/new/docs/dictionary/index.vue')
  },
  {
    path: 'contact',
    component: () => import('@/pages/new/contact/index.vue')
  },
  {
    path: 'imprint',
    component: () => import('@/pages/new/imprint/index.vue')
  },
  {
    path: 'privacy',
    component: () => import('@/pages/new/privacy/index.vue')
  }
]
