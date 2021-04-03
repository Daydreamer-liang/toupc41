<template>
  <el-row type="flex" class="layout-header" align="middle">
    <el-col class="left" :span="12">
      <i class="el-icon-s-fold"></i>
      <span>黑暗地界</span>
    </el-col>
    <el-col class="right" :span="12">
      <el-row type="flex" justify="end" align="middle">
        <img
          src="https://img2.baidu.com/it/u=2890165884,1588619991&fm=26&fmt=auto&gp=0.jpg"
        />
        <!-- 下拉菜单 -->
        <el-dropdown @command="clickmand" trigger="click">
          <span class="el-dropdown-link"> 下拉菜单 </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息 </el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="out">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {} // 用户信息
    }
  },
  methods: {
    clickmand (command) {
      // 退出登录
      if (command === 'info') {
        location.href('个人信息地址')
      } else if (command === 'git') {
        window.location.href('git地址')
      } else {
        //   退出系统  1.删除token 跳转登录页
        localStorage.removeItem('user-token')
        // push从哪来回哪去
        this.$router.push('/login')
      }
    }
  },
  created () {
    //   获取用户信息
    const token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile',
      Headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((result) => {
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  height: 60px;
  .left {
    i {
      font-size: 20px;
    }
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 4px;
    }
  }
}
</style>
