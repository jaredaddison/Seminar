
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
/*import About from './views/About.vue'
import VetOps from './views/VetOps.vue'
import ClinOps from './views/ClinOps.vue'
import Recruitment from './views/Recruitment.vue'
import NotFound from './views/NotFound.vue'*/

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: Home,
      },
    }, /*
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: About,
      },
    },
    {
      path: '/vetops',
      name: 'VetOps',
      component: VetOps,
      meta: {
        title: VetOps,
      },
    },
    {
      path: '/clinops',
      name: 'ClinOps',
      component: ClinOps,
      meta: {
        title: ClinOps,
      },
    },
    {
      path: '/recruitment',
      name: 'Recruitment',
      component: Recruitment,
      meta: {
        title: Recruitment,
      },
    },
    {
      path: '/:path(.*)',
      component: NotFound,
      meta: {
        title: NotFound,
      },
    }, */
  ],
})

export default router
