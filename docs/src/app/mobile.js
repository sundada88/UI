import Vue from 'vue'
import VueRouter from 'vue-router'
import Doc from "../../doc/src/main"
import ui from '../../../packages/main'
import App from './App'
import routes from '../router'
import './helper/touch-simulator'

// function $t(x) {
//   return i18n[zh - CN][x]
// }
Vue.mixin({
  methods: {
    $t(type) {
      return this.$options.i18n['zh-CN'][type]
    }
  }
})
// import {
//   isMobile
// } from '../assets/js/index'
Vue.use(VueRouter)
  .use(ui)
  .use(Doc)
const vm = new Vue()
const router = new VueRouter({
  mode: "hash",
  routes: routes({
    mobile: true
  })
})
window.onresize = function () {
  if (document.documentElement.clientWidth > 800) {
    location.replace('/' + location.hash)
  }
}

// router.beforeEach((to, from, next) => {
//   if (isMobile) {
//     return
//   } else {
//     if (document.documentElement.clientWidth > 800) {
//       console.log(location.hash)
//       location.replace('/' + location.hash)
//     }
//   }
//   next()
// })
router.afterEach(() => {
  Vue.nextTick(() => window.syncPath())
})
window.vueRouter = router
new Vue({
  el: "#app",
  render: h => h(App),
  router
})