<template>
  <!-- 内容列表 -->
  <el-card class="articles">
    <!-- 使用 components 文件下 common的面包屑导航 -->
    <Bread-Crumb slot="header">
      <template slot="title"> 内容管理 </template>
    </Bread-Crumb>
    <el-form style="padding-left: 55px">
      <el-form-item label="文章状态">
        <!-- 单选按钮 -->
        <!-- <el-radio-group v-model="seachForm.status" @change="changeCondition"> -->
        <el-radio-group v-model="seachForm.status">
          <!-- <el-radio-group v-model="seachForm.status"  > -->
          <!-- 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除 -->
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道管理">
        <el-select placeholder="请选择频道">
          <el-option> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <div class="block">
          <!-- {{ seachForm.dateRange }} -->
          <el-date-picker
            v-model="seachForm.dateRange"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
      </el-form-item>
    </el-form>
    <el-row class="row" type="flex" align="middle">
      <span>共找到1378条符合条件的内容</span>
    </el-row>
    <!-- 列表 -->
    <div class="article-item" v-for="item in 10" :key="item">
      <!-- 左侧内容 -->
      <div class="left">
        <!-- <img :src="item.img.length ? item.img : imgs" alt="" /> -->
        <img
          src="https://img1.baidu.com/it/u=50787246,2279973100&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
        <div class="info">
          <span>333</span>
          <!-- 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除 -->
          <!-- <el-tag class="tag" :type="item.staus |filterscolor">{{item.staus | filtersall }}</el-tag> -->
          <el-tag class="tag">草稿</el-tag>
          <span>2010/10/20</span>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="right">
        <span>
          <i class="el-icon-edit">修改</i>
        </span>
        <span @click="del(item.id.toString())">
          <i class="el-icon-delete">删除</i>
        </span>
      </div>
    </div>
    <el-row type="flex" justify="center" align="middle" style="height: 80px">
      <!-- <el-row type='flex' justify="center" style='height:80px' align="middle"> -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="page.total"
        :current-page="page.currentpage"
        :page-size="page.pagesize"
        @current-change="currentchange"
      >
      </el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 分页
      page: {
        total: 1000,
        pagesize: 10,
        currentpage: 1
      },
      seachForm: {
        status: 5, // 默认全部状态
        change_id: null, // 表示没有任何频道
        dateRange: [] // 时间
      },
      list: [],
      //   imgs: require('https://img1.baidu.com/it/u=50787246,2279973100&fm=26&fmt=auto&gp=0.jpg'),
      channels: [] // 频道数据
    }
  },
  watch: {
    //   监听哪个数据 写哪个
    seachForm: {
      deep: true,
      handler () {
        this.page.currentpage = 1
        this.changeCondition()
      }
    }
  },
  methods: {
    //   删除
    del (id) {
      this.$axios({
        url: `/articles${id}`,
        method: 'delete'
      })
        .then(() => {
          this.changeCondition()
        })
        .catch(() => {
          this.$message.erorr('删除文章失败')
        })
    },
    //   分页
    currentchange (newpage) {
      this.page.currentpage = newpage
      this.changeCondition()
    },
    //   按条件查找内容
    changeCondition () {
      alert(1)
      const params = {
        page: this.page.currentpage,
        per_page: this.page.pagesize,
        status: this.seachForm.status === 5 ? null : this.seachForm.status,
        channel_id: this.seachForm.change_id,
        begin_pubdate:
          this.seachForm.dateRange && this.seachForm.dateRange.length
            ? this.seachForm.dateRange[0]
            : null,
        end_pubdate:
          this.seachForm.dateRange && this.seachForm.dateRange.length > 1
            ? this.seachForm.dateRange[1]
            : null
      }
      this.getArticles(params)
    },
    getArticles (params) {
      //   获取内容
      this.$axios({
        url: '/articles',
        params
      }).then((result) => {
        this.list = result.data
        this.page.total = result.data.total_count
      })
    }
  },
  filters: {
    filtersall (value) {
      switch (value) {
        // 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '审核通过'
        case 3:
          return '审核失败'
      }
    },
    filterscolor (value) {
      switch (value) {
        // 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除
        case 0:
          return 'success'
        case 1:
          return 'info'
        case 2:
          return ' '
        case 3:
          return 'danger'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.row {
  height: 60px;
  border-bottom: dashed 1px #ccc;
}
.article-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: solid 1px #ccc;
  .left {
    display: flex;
    img {
      width: 180px;
      height: 100px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 20px;
      .tag {
        width: 50px;
        text-align: center;
      }
    }
  }
  .right {
    i {
      font-size: 12px;
      padding-right: 20px;
      cursor: pointer;
      user-select: none; //css控制页面文字不能被选中user-select:none;
    }
  }
}
</style>
