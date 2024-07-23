export default [
  {
    path: '',
    component: () => import('@/pages/new/index.vue')
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
    path: 'docs/components/directory_scanner',
    component: () => import('@/pages/new/docs/components/directory_scanner/index.vue')
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
