export default [
  {
    path: '',
    name: 'newOverview',
    component: () => import(/* webpackChunkName: "NewOverviewPage" */ '@/pages/new/index.vue')
  },
  {
    path: 'docs',
    name: 'docs',
    component: () => import(/* webpackChunkName: "Documentation" */ '@/pages/new/docs/index.vue')
  }, 
  {
    path: 'docs/overview',
    name: 'overview',
    component: () => import(/* webpackChunkName: "Overview" */ '@/pages/new/docs/overview/index.vue')
  }, 
  {
    path: 'docs/dictionary',
    name: 'dictionary',
    component: () => import(/* webpackChunkName: "Overview" */ '@/pages/new/docs/dictionary/index.vue')
  }, 
  
  {
    path: 'contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "ContactPage" */ '@/pages/new/contact/index.vue')
  },
  {
    path: 'imprint',
    name: 'imprint',
    component: () => import(/* webpackChunkName: "ImprintPage" */ '@/pages/new/imprint/index.vue')
  }
]
