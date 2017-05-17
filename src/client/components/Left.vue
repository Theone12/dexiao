<template>
  <div class='left'>
    <h3>首页</h3>
    <ul>
      <li>
        <p @click='tg1' class="change">用户管理</p>
        <div v-show='show1'>
          <p ><router-link to='/index/user' class="rl current">普通用户</router-link></p>
          <p><router-link to='/index/userVip' class="rl">会员用户</router-link></p>
          <p><router-link to='/index/userShop' class="rl">商户用户</router-link></p>
        </div>
      </li>
      <li>
        <p @click='tg2'>任务管理</p>
        <div v-show='show2'>
          <p><router-link to='/index/completed' class="rl">已完成任务</router-link></p>
          <p><router-link to='/index/unfinished' class="rl">未完成任务</router-link></p>
        </div>
      </li>
      <li >
        <p @click='tg3'>文档管理</p>
        <div v-show='show3'>
          <p><router-link to='/index/news' class="rl">新闻管理</router-link></p>
          <p><router-link to='/index/picture' class="rl">图片管理</router-link></p>
        </div>
      </li>
      <li>
        <p @click='tg4'>商城管理</p>
        <div v-show='show4'>
          <p><router-link to='/index/new' class="rl">新品上市</router-link></p>
          <p><router-link to='/index/seller' class="rl">商家推荐</router-link></p>
        </div>
      </li>
      <li>
        <p @click='tg5'>系统管理</p>
        <div v-show='show5'>
          <p><router-link to='/index/password' class="rl">密码管理</router-link></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
//      lis: ['用户管理', '任务管理', '文档管理', '商城管理', '系统管理'],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    tg1: function () {
      this.show1 = !this.show1
    },
    tg2: function () {
      this.show2 = !this.show2
    },
    tg3: function () {
      this.show3 = !this.show3
    },
    tg4: function () {
      this.show4 = !this.show4
    },
    tg5: function () {
      this.show5 = !this.show5
    }
  }
}
</script>

<style scoped>
  .left {
    width: 15%;
    height: 85%;
    text-align: center;
    background-color: #ccc;
    border: 1px solid #000;
    overflow-y: auto;
  }
  .left h3 {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #000;
  }
  .left ul li {
    /*height: 50px;*/
    line-height: 40px;
    border-bottom: 1px solid #000;
  }
  .left ul li .change {
    background-color: dimgrey;
  }
  .left ul li div p{
     height: 30px;
    line-height: 30px;
  }
  .left ul li div p .rl{
    text-decoration: none;
    font-size: 13px;
    color: #000;
  }
  .left ul li div p .current {
    color: blue;
  }
</style>
