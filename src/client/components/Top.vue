<template>
  <div class='head'>
    <div class='left'>
      <img :src='src' alt='logo'>
      <span>徳孝后台管理系统</span>
    </div>
    <div class='right'>
     <p>欢迎您<span>{{ name }}</span><span>{{ time }}</span><span>{{ day }}</span></p>
      <p><i></i><span>注销</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '/images/4.jpg',
      name: 'xxx',
      time: 'x年x月x日',
      day: '星期几'
    }
  }
}
</script>

<style scoped>
  .head {
    height: 80px;
    background-color: #9da0a4;
  }
  .left {
    width: 50%;
    height: 80px;
    float: left;
  }
  .left img {
    display: inline-block;
    padding-left: 20px;
    vertical-align: middle;
    width: 50px;
    height: 50px;
  }
  .left span {
    display: inline-block;
    margin-left: 15px;
    font: 500 20px/80px '微软雅黑';
  }
  .right {
    width: 50%;
    float: left;
    text-align: right;
  }
  .right p {
    padding-right: 25px;
    font-size: 14px;
    line-height: 30px;
    height:30px;
  }
  .right p span {
    padding-left: 10px;
  }
</style>
