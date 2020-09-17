import manager from './manager'
import context from './context'
import scrollUtils from '../../scroll'
import {
  on,
  off
} from '../../event'
import Touch from '../touch'

export default {
  mixins: [Touch],
  props: {
    value: Boolean,
    overlay: Boolean,
    overlayStyle: Object,
    overlayClass: String,
    closeOnClickOverlay: Boolean,
    zIndex: [String, Number],
    getContainer: [String, Function],
    lockScroll: {
      type: Boolean,
      default: true
    },
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inited: this.value
    }
  },
  computed: {
    shouldRender() {
      return this.inited || !this.lazyRender
    }
  },
  watch: {
    value(val) {
      this.inited = this.inited || this.value
      this[val ? 'open' : 'close']()
    },
    getContainer() {
      this.move();
    },

    overlay() {
      this.renderOverlay();
    }
  },
  mounted() {
    if (this.getContainer) {
      this.move()
    }
    if (this.value) {
      this.open()
    }
  },
  activated() {
    if (this.value) {
      this.open()
    }
  },
  beforeDestroy() {
    this.close();

    if (this.getContainer) {
      this.$parent.$el.appendChild(this.$el);
    }
  },
  deactivated() {
    /* istanbul ignore next */
    this.close();
  },
  methods: {
    open() {
      // if (this.$isServer || this.opened) {
      //   return;
      // }
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }
      this.opened = true
      this.renderOverlay()
      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart)
        on(document, 'touchmove', this.onTouchMove)
        if (!context.lockCount) {
          document.body.classList.add('sun-overflow-hidden')
        }
        context.lockCount++
      }
    },
    close() {
      if (!this.opened) {
        return
      }
      if (this.lockScroll) {
        context.lockCount--;
        off(document, 'touchstart', this.touchStart)
        off(document, 'touchmove', this.onTouchMove)
        if (!context.lockCount) {
          document.body.classList.remove('sun-overflow-hidden')
        }
      }
      this.opened = false
      console.log('popup   close =======>')
      manager.close(this)
      this.$emit('input', false)
    },
    move() {
      let container
      const {
        getContainer
      } = this
      if (getContainer) {
        container = typeof getContainer === 'string' ? document.querySelector(getContainer) :
          getContainer()
      } else if (this.$parent) {
        container = this.$parent.$el
      }
      if (container) {
        container.appendChild(this.$el);
      }
    },
    renderOverlay() {
      if (this.overlay) {
        // 产生遮罩层
        manager.open(this, {
          zIndex: context.zIndex++,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        })
      } else {
        manager.close(this)
      }
      this.$nextTick(() => {
        this.$el.style.zIndex = context.zIndex++
      })
    }
  }
}