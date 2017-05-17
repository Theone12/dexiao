<template>
  <div class="page">
    <ul class="pagination" >
      <li v-show="current != 1" @click="current-- && goto(current)" ><a>上一页</a></li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
        <a  >{{index}}</a>
      </li>
      <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a >下一页</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'page',
  data: function () {
    return {
      current: 1,
      showItem: 5,
      allpage: 13
    }
  },
  computed: {
    pages: function () {
      var pag = []
      if (this.current < this.showItem) {
        var i = Math.min(this.showItem, this.allpage)
        while (i) {
          pag.unshift(i--)
        }
      } else {
        var middle = this.current - Math.floor(this.showItem / 2)
        i = this.showItem
        if (middle > (this.allpage - this.showItem)) {
          middle = (this.allpage - this.showItem) + 1
        }
        while (i--) {
          pag.push(middle++)
        }
      }
      return pag
    }
  },
  methods: {
    goto: function (index) {
      if (index === this.current) return
      this.current = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    width: 100%;
    height: 8%;
    position: absolute;
    left: 0;
    bottom: 15px;
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  .pagination {
    position: relative;
    text-align: right;
    padding-right: 50px;
  }
  .pagination li{
    display: inline-block;
    margin:0 5px;
  }
  .pagination li a{
    padding: 5px 10px;
    display:inline-block;
    border:1px solid #ddd;
    background:#fff;
    font-size: 14px;
    color:#0E90D2;
  }
  .pagination li a:hover{
    background:#eee;
  }
  .pagination li.active a{
    background:#0E90D2;
    color:#fff;
  }
</style>
