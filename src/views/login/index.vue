<template>
  <div class="login">
    <!-- 放置一个el-card组件 -->
    <el-card class="login-card">
      <!-- 放置标题图片 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="" />
      </div>
      <!-- 放置表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <!-- 表单域 里面   放置 input/select/checkbox 相当于一行-->
        <el-form-item prop="mobile">
          <el-input
            v-model="loginForm.mobile"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            style="width: 65%"
            placeholder="验证码"
          ></el-input>
          <el-button style="float: right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <!-- 复选框 -->
          <el-checkbox v-model="loginForm.checked"
            >我已阅读并同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 同意选项
      },
      loginRules: {
        //   验证规则
        mobile: [
          {
            required: true,
            message: '手机号不对'
          },
          {
            pattern: /^1[3-9]\d{9}$/, // 正则表达式
            message: '您的手机号格式不正确'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不对'
          },
          {
            pattern: /^\d{6}$/, // 要求6个数字
            message: '验证码应该是6位数字'
          }
        ],
        checked: [
          {
            validator: function (rule, value, callback) {
              value ? callback() : callback(new Error('你必须同意'))
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate().then(() => {
        console.log(1)
        // 请求数据
        this.$axios({
          url: '/authorizations',
          data: this.loginForm,
          method: 'post'
        })
          .then((result) => {
            console.log(result.data)
            // 把token存在本地缓存
            window.localStorage.setItem('user-token', result.data.data.token)
            // 跳转到主页
            this.$router.push('/home')
          })
          .catch(() => {
            this.$message.error('错了哦，这是一条错误消息')
          })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/default.gif");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      margin-bottom: 30px;
      img {
        height: 45px;
      }
    }
  }
}
</style>
