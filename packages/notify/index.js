import Vue from 'vue'
import SunNotify from './index.vue'
import { isObj } from '../utils'
import { options } from 'less'
let instance
let timer


const initInstance = options => {
  instance = new (Vue.extend(SunNotify))({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
}

const parseOptions = message => (isObj(message) ? message : { message })

const Notify = options => {
  if (!instance) {
    initInstance()
  }
  options = { ...Notify.currentOptions, ...parseOptions(options) }
  Object.assign(instance, options)
  clearTimeout(timer)
  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration)
  }
  return instance
}

Notify.clear = () => {
  instance && (instance.value = false)
}

Notify.defaultOptions = {
  value: true,
  text: '',
  color: 'white',
  background: 'red',
  duration: 3000
}
Notify.setDefaultOptions = options => {
  Object.assign(Notify.currentOptions, options)
}
Notify.resetDefaultOptions = () => {
  Notify.currentOptions = { ...Notify.defaultOptions }
}

Notify.install = () => {
  Vue.component(SunNotify.name, SunNotify)
}

Notify.resetDefaultOptions()
export default Notify