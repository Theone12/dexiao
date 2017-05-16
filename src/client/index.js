import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Login from './components/Login'
import Index from './components/Index'

Vue.config.debug = true
Vue.use(Router)

const router = new Router({
  routes: [
    { name: 'login', path: '/', component: Login },
    { name: 'index', path: '/index', component: Index }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
