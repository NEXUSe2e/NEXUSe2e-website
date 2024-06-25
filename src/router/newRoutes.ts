export default [
  {
    path: '',
    name: 'newOverview',
    component: () => import(/* webpackChunkName: "NewOverviewPage" */ '@/pages/new/index.vue')
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
