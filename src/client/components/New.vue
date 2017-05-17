<template>
  <div class='user'>
    <div class="top">
      <span class="topLeft">用户列表</span>
      <span class="topRight">选择类型</span>
      <select name='user'>
        <option value="1">姓名</option>
        <option value="2">积分</option>
        <option value="3">等级</option>
        <option value="4">称号</option>
      </select>
      <input type="button" value="搜索">
    </div>
    <div class="bottom">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>积分/公分</th>
            <th>等级</th>
            <th>称号</th>
            <th>发布任务</th>
            <th>接收任务</th>
            <th>完成次数</th>
            <th>注册时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for='x in tblist'>
              <td>{{ x.id }}</td>
              <td>{{ x.name }}</td>
              <td>{{ x.score }}</td>
              <td>{{ x.grade }}</td>
              <td>{{ x.title }}</td>
              <td>{{ x.tasks }}</td>
              <td>{{ x.receive }}</td>
              <td> {{ x.complete }}</td>
              <td>{{ x.register }}</td>
              <td><a href="#">{{ x.operation }}</a></td>
            </tr>
        </tbody>
      </table>
    </div>
    <page></page>
  </div>
</template>

<script>
 import page from './VuePage.vue'
export default {
   data () {
     return {
       tblist: [
        { id: 1, name: '张三', score: '500/1000', grade: '4级', title: '徳孝知府', tasks: 5, receive: 4, complete: 3, register: '2017/06/15', operation: '删除' },
        { id: 2, name: '李四', score: '500/1000', grade: '4级', title: '徳孝知府', tasks: 5, receive: 4, complete: 3, register: '2017/06/15', operation: '删除' },
        { id: 3, name: '张三', score: '500/1000', grade: '4级', title: '徳孝知府', tasks: 5, receive: 4, complete: 3, register: '2017/06/15', operation: '删除' },
        { id: 4, name: '张七', score: '500/1000', grade: '4级', title: '徳孝知府', tasks: 5, receive: 4, complete: 3, register: '2017/06/15', operation: '删除' }
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
