<template>
  <div class='left'>
    <h3>首页</h3>
    <ul>
      <li>
        <p @click='tg1'>用户管理</p>
        <div v-show='show1'>
          <p><router-link to='/index/user'>普通用户</router-link></p>
          <p><router-link to='/index/userVip'>会员用户</router-link></p>
          <p><router-link to='/index/userShop'>商户用户</router-link></p>
        </div>
      </li>
      <li>
        <p @click='tg2'>任务管理</p>
        <div v-show='show2'>
          <p>已完成任务</p>
          <p>未完成任务</p>
        </div>
      </li>
      <li >
        <p @click='tg3'>文档管理</p>
        <div v-show='show3'>
          <p>新闻管理</p>
          <p>图片管理</p>
        </div>
      </li>
      <li>
        <p @click='tg4'>商城管理</p>
        <div v-show='show4'>
          <p>新品上市</p>
          <p>商家推荐</p>
        </div>
      </li>
      <li>
        <p @click='tg5'>系统管理</p>
        <div v-show='show5'>
          <p>密码管理</p>
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
    border: 1px solid #000;
    overflow-y: auto;
  }
  .left ul li {
    /*height: 50px;*/
    line-height: 50px;
  }
</style>
