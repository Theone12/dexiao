<template>
  <div class='user'>
    <div class="top">
      <span class="topLeft">新闻列表</span>
      <span class="topRight">选择类型</span>
      <select name='user'>
        <option value="1">时间</option>
      </select>
      <input type="button" value="搜索">
    </div>
    <div class="bottom">
      <button><router-link to='/newsadd'>添加</router-link></button>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>标题</th>
            <th>图片</th>
            <th>内容</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for='x in newslist'>
              <td>{{ x.id }}</td>
              <td>{{ x.title }}</td>
              <td>{{ x.picture }}</td>
              <td>{{ x.main }}</td>
              <td>{{ x.time }}</td>
              <td>{{ x.operation1 }}/{{ x.operation2}}</td>
            </tr>
        </tbody>
      </table>
    </div>
    <page></page>
  </div>
</template>

<script>
 import page from './Page.vue'
export default {
   data () {
     return {
       newslist: [
        { id: 1, title: '北京某敬老院', picture: '图片125', main: '发生一件...', time: '2017/06/20', operation1: '编辑', operation2: '删除' },
        { id: 2, title: '北京某敬老院', picture: '图片126', main: '发生一件...', time: '2017/06/25', operation1: '编辑', operation2: '删除' },
        { id: 3, title: '北京某敬老院', picture: '图片127', main: '发生一件...', time: '2017/06/22', operation1: '编辑', operation2: '删除' }
       ]
     }
   },
   components: {
     page
   }
}
</script>

<style scoped>
  .user {
    width: 100%;
    height:95%;
    padding-top: 5px;
  }
  .top {
    height: 30px;
    margin-top: 10px;
    font-size: 14px;
    line-height: 30px;
    position: relative;
  }
  .top span {
    display: inline-block;
    margin-left: 10px;
  }
  .top .topRight {
    position: absolute;
    right: 200px;
  }
  .top select {
    display: inline-block;
    position: absolute;
    right: 115px;
    margin-top: 2px;
    width: 80px;
    height: 25px;
  }
  .top input[type="button"]{
    display: inline-block;
    position: absolute;
    right: 40px;
    margin-top: 2px;
    width: 50px;
    height: 25px;
  }
  .bottom {
    width: 100%;
    margin-top: 15px;
  }
  .bottom button {
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 15px;
    width: 50px;
    height: 25px;
    font-size: 16px;
    line-height: 20px;
    color: blue;
  }
  .bottom table {
    width: 95%;
    border: 2px solid #000;
    margin-left: 15px;
    border-collapse: collapse;
  }
  .bottom table tr th,.bottom table tr td{
    text-align: center;
    font-size: 14px;
    border:1px solid #000;
  }
</style>
