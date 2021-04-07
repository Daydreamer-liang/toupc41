<template>
  <!-- 发布文章 列表 -->
  <el-card>
    <Bread-Crumb slot="header">
      <template slot="title">发布文章</template>
    </Bread-Crumb>
    <el-form label-width="80px">
      <el-form-item label="标题">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="4" placeholder="请输入内容">
        </el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="radio">
          <el-radio :label="1">备选项</el-radio>
          <el-radio :label="2">备选项</el-radio>
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="4">备选项</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">发表</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: 10
    }
  }
}
</script>

<style>
</style>
