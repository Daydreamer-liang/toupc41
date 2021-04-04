// 对axios二次封装   做 拦截器
// 引入 在中间写拦截器  在导出  以后用axios 用导出的
import axios from 'axios'
import JSONBig from 'json-bigint' // 引入处理大数字的包
// import router from '@/router'
axios.defaults.transformResponse = [
  // 大数字的处理
  function (data) {
    return data ? JSONBig.parse('data') : {}
  }
]
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截器
// axios.interceptors.request.use(); 里面两个函数 成功执行第一个，失败执行第二个
axios.interceptors.request.use(
  function (config) {
    //   获取token
    const token = localStorage.getItem('user-token')
    // 统一注入token
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : {}
  },
  function (error) {
    //   进到这里证明你是有token的 前面的导航守卫检查了，还错误证明你错了
    if (error.response.status === 401) {
      //  错误 删除token
      localStorage.removeItem('user-token') // 删除钥匙
      //   跳回登录页 这里是js  不是在vue 不能用this.$router  编程导航
      //   window.location.href('/login')//这个也行  但是会强制刷新页面
      //   router.push('/login')
      return Promise.reject(error)
    }
  }
)
export default axios
