<template>
  <div class="index">
    <top></top>
    <left></left>
    <div class="right">
      <div class="rightTop">
        <p>当前位置：<span>首页</span><span>&gt;用户管理</span><span>&gt;会员用户</span></p>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import top from './Top.vue'
import left from './Left.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    top,
    left
  }
}
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
  .right {
    position: relative;
    top:-85%;
    left: 15%;
    width: 85%;
    height: 85%;
  }
  .rightTop {
    height: 5%;
    padding-left: 10px;
    border-bottom: 1px solid #000;
  }
</style>
