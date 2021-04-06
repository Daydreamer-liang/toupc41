<template>
  <!-- 素材管理 -->
  <el-card>
    <!-- 面包屑 -->
    <Bread-Crumb slot="header">
      <template slot="title"> 素材管理 </template>
    </Bread-Crumb>
    <el-row type="flex" justify="end">
      <!-- httprequest 上传图片 -->
      <el-upload action="" :http-request="httprequest" :show-file-list="false">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-row>
    <!-- {{ activeName }} -->
    <el-tabs v-model="activeName" @tab-click="tabclick">
      <el-tab-pane label="全部素材" name="all">
        <div class="el">
          <!-- <el-card class="elcard" v-for="item in list " :key="item">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
            <el-row
              class="row"
              type="flex"
              justify="space-around"
              align="middle"
            >
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete"></i>
            </el-row>
          </el-card> -->
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
            <el-row
              class="row"
              type="flex"
              justify="space-around"
              align="middle"
            >
              <i @click="addimg(item)" class="el-icon-star-on"></i>
              <i @click="delimg(item)" class="el-icon-delete"></i>
            </el-row>
          </el-card>
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
            <el-row
              class="row"
              type="flex"
              justify="space-around"
              align="middle"
            >
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete"></i>
            </el-row>
          </el-card>
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
            <el-row
              class="row"
              type="flex"
              justify="space-around"
              align="middle"
            >
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="sc">
        <div class="el">
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </el-card>
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </el-card>
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </el-card>
          <el-card class="elcard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页组件 -->
    <el-row type="flex" justify="center" align="middle" style="height: 80px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="page.total"
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
      activeName: 'all',
      list: [], // 素材数据
      page: {
        total: 1000,
        pagesize: 10,
        currentpage: 1
      }
    }
  },
  methods: {
    //   删除图片
    delimg (item) {
      this.$confrim('确定删除吗', '提示').then(() => {
        this.$axios({
          url: `/user/images/${item.id}`,
          method: 'delete'
        })
          .then(() => {
            this.alltabclick()
          })
          .catch(() => {
            this.$message.error('操作失败')
          })
      })
    },
    //   收藏图片
    addimg (item) {
      console.log(1)
      this.$axios({
        url: `/user/images/${item.id}`,
        method: 'put',
        data: {
          collect: !item.is_collected
        }
      })
        .then(() => {
          this.alltabclick()
        })
        .catch(() => {
          this.$message.error('操作失败')
        })
    },
    httprequest (params) {
      //   上传图片，params就是上传的文件
      const data = new FormData()
      data.append('image', params.file) // 加入文件参数
      this.$axios({
        url: '/user/images',
        method: 'post',
        data
      })
        .then(() => {
          this.alltabclick()
        })
        .catch(() => {
          this.$message.error('上传失败')
        })
    },
    //   分页切换 获取数据
    currentchange (newpage) {
      this.page.currentpage = newpage
      this.alltabclick()
    },
    alltabclick () {
      //   获取全部素材数据
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'sc' // 全部图片
        }
      }).then((result) => {
        this.list = result.data
        this.page.total = result.data.total
      })
    },
    tabclick () {
      // 素材切换
      this.alltabclick()
    }
  },
  created () {
    // 获取素材数据
    this.page.currentpage = 1
    console.log(123)
    this.alltabclick()
  }
}
</script>

<style lang="less" scoped>
.el {
  display: flex;
  flex-wrap: wrap;
  .elcard {
    position: relative;
    width: 300px;
    height: 300pxx;
    margin: 20px 40px;
    img {
      width: 100%;
      height: 100%;
    }
    .row {
      position: absolute;
      bottom: 10px;
      left: 10px;
      width: 100%;
      height: 30px;
      background: #f4f5f6;
      i {
        font-size: 30px;
      }
    }
  }
}
</style>
