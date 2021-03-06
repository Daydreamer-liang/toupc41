import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入
import 'element-ui/lib/theme-chalk/index.css' // 引入css
import '@/styles/index.less'// 引入样式
import axios from '@/utils/request' // 改成拦截器axios的地址
import Components from '@/components'

Vue.use(ElementUI)
Vue.use(Components)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
