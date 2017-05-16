<template>
  <div class="app full-height">
    <router-link :to="{ name: 'login'}"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
  }
  .app,.full-height{
    height: 100%;
  }
</style>
