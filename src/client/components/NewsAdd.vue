<template>
  <div class='newsAdd'>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="新闻标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <div class="upload-demo"><upload></upload></div>
      <el-form-item label="新闻内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit"><router-link to="/index/news" class="add">提交</router-link></el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import upload from './Upload.vue'
export default {
  data () {
    return {
      form: {
        name: '',
        date1: '',
        date2: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },
  components: {
    upload
  }
}
</script>

<style scoped>
  .newsAdd {
    width: 60%;
    margin: 50px auto;
    font-size: 15px;
  }
  .upload-demo {
    width: 200px;
    height: 80px;
    margin: 15px 15px;
  }
  .newsAdd .add {
    text-decoration: none;
  }
</style>
