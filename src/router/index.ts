import { createRouter, createWebHashHistory } from 'vue-router'

import NewLayout from '@/layouts/NewLayout.vue'
import OldLayout from '@/layouts/OldLayout.vue'
import Overview from '@/pages/index.vue'

import newRoutes from './newRoutes'
import oldRoutes from './oldRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/',
      component: OldLayout,
      children: oldRoutes
    },
    {
      path: '/new',
      component: NewLayout,
      children: newRoutes
    }
  ]
})

export default router
