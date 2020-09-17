import Vue from 'vue'
import context from './context'
import Overlay from '../../../overlay'
const defaultConfig = {
  className: '',
  customStyle: {}
}
export default {
  open (vm, config) {
    if (!context.stack.some(item => item.vm === vm)) {
      const el = vm.$el
      const target = el && el.parentNode ? el.parentNode : document.body
      context.stack.push({
        vm,
        config,
        target
      })
      this.update()
    }
  },
  close (vm) {
    console.log('manager  close ======>')
    const {
      stack
    } = context
    if (stack.length) {
      if (context.top.vm === vm) {
        stack.pop()
        this.update()
      } else {
        context.stack = stack.filter(item => item.vm !== vm)
      }
    }
  },
  update () {
    let {
      modal
    } = context
    console.log(modal)
    if (!modal) {
      modal = new (Vue.extend(Overlay))({
        el: document.createElement('div')
      })
      modal.$on('click', this.onClick)
      context.modal = modal
    }
    // console.log(modal.$el.paren)
    if (modal.$el.parentNode) {
      modal.visible = false
    }
    if (context.top) {
      const {
        target,
        config
      } = context.top
      target.appendChild(modal.$el)
      Object.assign(modal, defaultConfig, config, {
        visible: true
      })
    }
  },
  onClick () {
    if (context.top) {
      const {
        vm
      } = context.top
      // 这个click-overlay是谁的？
      vm.$emit('click-overlay')
      vm.closeOnClickOverlay && vm.$emit('input', false)
    }
  }
}