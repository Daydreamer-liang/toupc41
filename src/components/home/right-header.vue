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
        <el-dropdown trigger='click'>
          <span class="el-dropdown-link"> 下拉菜单 </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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
