// 全局注册
import leftnav from './home/Left-navigation'
import rihgt from './home/right-header'
import BreadCrumb from './common/bread-crumb'
export default {
  install: function (Vue) {
    //   全局组件  一旦注册 任意使用
    Vue.component('Left-navigation', leftnav)// 左侧导航
    Vue.component('Right-Header', rihgt)// 右侧主页
    Vue.component('Bread-Crumb', BreadCrumb)// 面包屑导航  谁用都可以
  }
}
