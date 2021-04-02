// 全局注册
import leftnav from './home/Left-navigation'
import rihgt from './home/right-header'
export default {
  install: function (Vue) {
    //   全局组件  一旦注册 任意使用
    Vue.component('Left-navigation', leftnav)
    Vue.component('Right-Header', rihgt)
  }
}
