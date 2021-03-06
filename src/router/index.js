import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/views/Feed'
import Settings from '@/views/Settings'
import Signup from '@/views/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Feed
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
