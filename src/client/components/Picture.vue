<template>
  <div class='picture'>
    <div class="indexBanner">
      <h3>首页轮播</h3>
      <upload></upload>
      <upload></upload>
      <upload></upload>
      <upload></upload>
    </div>
    <div class="newsBanner">
      <h3>新闻管理轮播</h3>
      <upload></upload>
      <upload></upload>
      <upload></upload>
    </div>
    <div class="news">
      <h3>新闻内广告</h3>
      <upload></upload>
      <upload></upload>
      <upload></upload>
    </div>
  </div>
</template>

<script>
import upload from './Upload.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    upload
  }
}
</script>
<style scoped>
  .picture {
    position: relative;
    text-align: center;
  }
  .indexBanner{
    position: absolute;
    left: 0;
    width: 200px;
    height: 400px;
  }
  .newsBanner {
    position: absolute;
    left: 200px;
    width: 200px;
    height: 200px;
  }
  .news {
    position: absolute;
    left: 400px;
    width: 200px;
    height: 200px;
  }
  h3 {
    font-size: 15px;
  }
</style>
