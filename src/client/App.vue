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
</style>
