import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '@/views/home'// 主页
import Login from '@/views/login'// 登录页
Vue.use(VueRouter)

const routes = [
  {
    path: '/home', // 主页
    component: Home
  },
  {
    path: '/login', // 登录
    component: Login
  }
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
  routes
})

export default router
