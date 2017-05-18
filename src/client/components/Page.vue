<template>
  <div class="block" id="block">
    <el-pagination class="main"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[20, 30, 50]"
            :page-size="10"
            layout="sizes, prev, pager, next"
            :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentPage: 5
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #block {
   position: absolute;
   left: 0;
   bottom: 20px;
   margin: 0 auto;
 }

</style>
