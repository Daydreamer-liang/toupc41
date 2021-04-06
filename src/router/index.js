import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '@/views/home' // 主页
import Login from '@/views/login' // 登录页
import SecondHome from '@/views/home/second_home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home', // 主页
    component: Home,
    children: [
      // 二级路由
      {
        path: '', //
        component: SecondHome
      },
      {
        // path: "/home/comment", // ping评论列表
        path: 'comment', // 简写
        component: () => import('@/views/comment') // 缓存
      },
      {
        // 素材列表的路由
        path: 'material', // 简写
        component: () => import('@/views/material') // 缓存
      },
      {
        // 内容列表的路由
        path: 'articles', // 简写
        component: () => import('@/views/articles') // 缓存
      }
    ]
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
