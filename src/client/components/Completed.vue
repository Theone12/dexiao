<template>
  <div class='user'>
    <div class="top">
      <span class="topLeft">任务列表</span>
      <span class="topRight">选择类型</span>
      <select name='user'>
        <option value="1">北京</option>
        <option value="2">上海</option>
        <option value="3">广州</option>
        <option value="4">河北</option>
      </select>
      <input type="button" value="搜索">
    </div>
    <div class="bottom">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>标题</th>
            <th>地址</th>
            <th>内容</th>
            <th>奖励公分</th>
            <th>完成者</th>
            <th>完成时间</th>
            <th>发布者</th>
            <th>发布时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for='x in relist'>
              <td>{{ x.id }}</td>
              <td>{{ x.title }}</td>
              <td>{{ x.address }}</td>
              <td>{{ x.main }}</td>
              <td>{{ x.gongFen }}</td>
              <td>{{ x.finishName }}</td>
              <td>{{ x.finishTime }}</td>
              <td> {{ x.publisher }}</td>
              <td>{{ x.publishTime }}</td>
              <td>{{ x.operation }}</td>
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
       relist: [
        { id: 1, title: '打扫敬老院', address: '北京', main: '星期天打扫敬老院...', gongFen: 300, finishName: '李四', finishTime: '2017/06/20', publisher: '张三', publishTime: '2017/06/16', operation: '删除' },
        { id: 2, title: '打扫敬老院', address: '北京', main: '星期天打扫敬老院...', gongFen: 300, finishName: '李四', finishTime: '2017/06/20', publisher: '张三', publishTime: '2017/06/16', operation: '删除' },
        { id: 3, title: '打扫敬老院', address: '北京', main: '星期天打扫敬老院...', gongFen: 300, finishName: '李四', finishTime: '2017/06/20', publisher: '张三', publishTime: '2017/06/16', operation: '删除' }
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
    overflow: hidden;
  }
</style>
