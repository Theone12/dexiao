<template>
  <div class="index">
    <top></top>
    <left></left>
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

<style>
  .index {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
</style>
