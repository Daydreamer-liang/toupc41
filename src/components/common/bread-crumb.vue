
<template>
  <!-- // 使用面包屑导航 -->
  <!-- 每个页面都会使用 谁用给谁 -->
  <el-breadcrumb separator=">">
    <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="title"></slot>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {}
</script>

<style>
</style>
