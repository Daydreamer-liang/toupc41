// 这是导航守卫  设置权限
// 引入router文件导出的router
import router from '@/router'
// 注册全局守卫
// router.beforeEach((to, from, next) => {
//   // ...
// });
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/home')) {
    //   获取token、
    const token = localStorage.getItem('user-token')
    if (token) {
      //   如果他有token 就放他过去
      next()
    } else {
      //   没有就去登录页
      next('/login')
    }
  } else {
    // 如果不是去home 主页  放过
    next()
  }
})
