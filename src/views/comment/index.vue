<template>
  <!-- 1评论页面 -->
  <el-card>
    <!-- 使用 components 文件下 common的面包屑导航 -->

    <Bread-Crumb slot="header">
      <template slot="title"> 评论管理 </template>
    </Bread-Crumb>
    <!-- 表格组件 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="评论状态" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="caozuo" label="操作">
        <template slot-scope="obj">
          <el-button type="text">修改</el-button>
          <el-button type="text" @click="openOrclose(obj.row)"
            >{{ obj.row.comment_status ? "关闭" : "打开" }}评论</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '关闭'
        },
        {
          date: '2016-05-04',
          name: '王小虎2',
          address: '打开'
        },
        {
          date: '2016-05-01',
          name: '王小虎3',
          address: '打开'
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          address: '打开'
        }
      ]
    }
  },
  methods: {
    //   获取评论数据
    gitComment () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment '
        }
      }).then((result) => {
        // 评论数据
        console.log(result)
        this.tableData = result.data
      })
    },
    //   格式化内容table-column 设置状态。是打开 还是关闭
    formatter (row, column, cellValue, index) {
      //   评论状态管理
      return cellValue ? '打开' : '关闭'
    },
    openOrclose (row) {
      const meen = row.common_status ? '关闭' : '打开'
      // 点击-打开或者关闭评论
      this.$confirm(`此操作将永久${meen}该文件, 是否继续?`, '提示', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        // type: 'warning'
      })
        .then(
          this.$axios({
            url: '/comments/status',
            method: 'put',
            params: {
              article_id: row.id
            },
            data: {
              allow_comment: !row.common_status
            }
          })
        )
        .then(() => {
          this.$message({
            type: 'success',
            message: `${meen}成功`
            // 成功之后重新拉去数据
          })
          this.gitComment()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: `${meen}失败`
          })
        })
    }
  },

  created () {
    this.gitComment()
  }
}
</script>

<style>
</style>
