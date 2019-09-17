import Vue from 'vue'
import Router from 'vue-router'
import Player from '../src/views/Player/Player'
import Login from '../src/views/Login'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/player"
    },
    {
      path: "/player",
      component: Player
    },
    {
      path: "/login",
      component: Login
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
