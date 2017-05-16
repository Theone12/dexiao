import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Login from './components/Login'
import Index from './components/Index'
import User from './components/User'
import UserVip from './components/UserVip'
import UserShop from './components/UserShop'

Vue.config.debug = true
Vue.use(Router)

const router = new Router({
  routes: [
    { name: 'login', path: '/', component: Login },
    { name: 'index', path: '/index', component: Index },
    {
      path: '/index',
      component: Index,
      children: [
         { path: '/index/user', component: User },
         { path: '/index/userVip', component: UserVip },
         { path: '/index/userShop', component: UserShop }
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
