<template  style="width: 230px">
  <!-- 左侧导航组件 -->
  <div class="layout-aside">
    <div class="title"><img src="@/assets/img/logo_admin.png" alt="" /></div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
          <el-menu-item>选项3</el-menu-item>
          <el-menu-item>选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
          <el-menu-item>选项3</el-menu-item>
          <el-menu-item>选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-aside {
  background-color: #2e2f32;
  width: 230px;
  height: 100vh;
  .title {
    padding: 10px 0;
    text-align: center;
    img {
      height: 35px;
    }
  }
  .el-menu {
    border-right: 0;
  }
  .el-aside {
    width: 230px;
  }
}
</style>
