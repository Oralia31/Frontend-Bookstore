import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import { LoginRoutes } from '@/modules/login/routes'
// import HomePage from '@/modules/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  redirect: '/login' 
  
  },
  ...LoginRoutes
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
