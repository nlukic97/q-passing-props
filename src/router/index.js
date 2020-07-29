import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import view3 from '../views/view3.vue'
import admin from '../views/Admin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/view3',
    name: 'view3',
    component: view3
  },
  {
    path:'/admin',
    name: 'admin',
    component: admin
  }
]

const router = new VueRouter({
  routes
})

export default router
