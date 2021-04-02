<template>
  <!-- 先在最外层放一个大容器 -->
  <el-container>
    <!-- 左侧 -->
    <el-aside>
      <h1>左侧</h1>
    </el-aside>
    <el-container>
      <!-- 顶部 -->
      <el-header>顶部</el-header>
      <!-- ：底栏容器。  -->
      <el-main
        >主要区域
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
