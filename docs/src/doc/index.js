// doc显示
import Vue from 'vue'
import VueRouter from 'vue-router'
import Doc from '../../doc/src/main'
import routes from '../router'
import App from './App'
import {
  isMobile
} from '../assets/js/index'
import '../assets/css/base.css'


Vue.prototype.$bus = new Vue()

Vue.use(Doc)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes: routes({
    mobile: false
  })
})
window.onresize = function () {
  if (document.documentElement.clientWidth < 800) {
    location.replace('mobile.html' + location.hash)
  } else {
    location.replace('/' + location.hash)
  }
}

router.beforeEach((to, from, next) => {
  if (isMobile || document.documentElement.clientWidth < 800) {
    location.replace('mobile.html' + location.hash)
  }
  next()
})

router.afterEach(() => {
  Vue.nextTick(() =>
    window.syncPath()
  )
})
window.vueRouter = router
new Vue({
  el: '#app',
  render: h => h(App),
  router
})