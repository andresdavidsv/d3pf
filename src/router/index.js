import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Index.vue'

Vue.use(VueRouter)

const routerOptions = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/:region/:battleTag',
    name: 'Profile'
  },
  {
    path: '/:region/:battleTag/hero/:heroId',
    name: 'Hero'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/error',
    name: 'Error'
  },
  {
    path: '*',
    redirect: { name: 'Home' }
  }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
