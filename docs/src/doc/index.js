// doc显示
import Vue from 'vue'
import VueRouter from 'vue-router'
import Doc from '../../doc/src/main'
import routes from '../router'
import App from './App'
import '../assets/css/base.css'


Vue.prototype.$bus = new Vue()

Vue.use(Doc)
Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  routes: routes({
    mobile: false
  })
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