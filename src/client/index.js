import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Login from './components/Login'
import Index from './components/Index'
import User from './components/User'
import UserVip from './components/UserVip'
import UserShop from './components/UserShop'
import Completed from './components/Completed'
import Unfinished from './components/Unfinished'
import News from './components/News'
import Picture from './components/Picture'
import New from './components/New'
import Seller from './components/Seller'
import Password from './components/Password'

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
         { path: '/index/userShop', component: UserShop },
         { path: '/index/completed', component: Completed },
         { path: '/index/unfinished', component: Unfinished },
         { path: '/index/news', component: News },
         { path: '/index/picture', component: Picture },
         { path: '/index/new', component: New },
         { path: '/index/seller', component: Seller },
         { path: '/index/password', component: Password }
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
