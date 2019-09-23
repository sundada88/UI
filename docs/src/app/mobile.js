import Vue from 'vue'
import VueRouter from 'vue-router'
import Doc from "../../doc/src/main"
import ui from '../../../packages/main'
import App from './App'
import routes from '../router'
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
router.afterEach(() => {
  Vue.nextTick(() => window.syncPath())
})
window.vueRouter = router
new Vue({
  el: "#app",
  render: h => h(App),
  router
})