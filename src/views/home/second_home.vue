<template>
  <!-- 这是路由home  默认的主页 -->
  <div class="second-home">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'https://img2.baidu.com/it/u=2697845935,3044214536&fm=11&fmt=auto&gp=0.jpg',
        'https://img2.baidu.com/it/u=1613029778,1507777131&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=1753589914,3429261228&fm=26&fmt=auto&gp=0.jpg',
        'https://img1.baidu.com/it/u=1622712873,2686999046&fm=26&fmt=auto&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.second-home {
  //   height: 100vh;
  height: calc(100vh - 60px);
  background-size: cover;
  background-image: url("https://img0.baidu.com/it/u=1753589914,3429261228&fm=26&fmt=auto&gp=0.jpg");

}
</style>
