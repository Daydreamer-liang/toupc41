<template>
  <!-- 先在最外层放一个大容器 -->
  <el-container>
    <!-- 左侧 -->
    <el-aside style="width: 230px">
      <Left-navigation></Left-navigation>
    </el-aside>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <Right-Header></Right-Header>
      </el-header>
      <!-- ：底栏容器。  -->
      <el-main style="padding:0">
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
// .el-main {
//   padding: 0;
// }
</style>
