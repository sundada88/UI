<template>
  <transition :name="currentTransition">
    <div
      v-if="shouldRender"
      v-show="value"
      :class="[position ? `sun-popup-${position}` : '', 'sun-popup']"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import popup from '../utils/mixins/popup'
export default {
  name: 'sun-popup',
  mixins: [popup],
  data () {
    return {
      // shouldRender: true
    }
  },
  props: {
    position: String,
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentTransition () {
      return this.transition || (this.position ? `popup-slide-${this.position}` : 'sun-fade')
    }
  }
}
</script>

<style lang="less" scoped>
.sun {
  &-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    background-color: white;
    color: black;
    transition: 0.3s ease-out;
    transform: translate3d(-50%, -50%, 0);
    &-top {
      width: 100%;
      top: 0;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      // background-color: black;
      // color: white;
    }
    &-right {
      top: 50%;
      right: 0;
      bottom: auto;
      left: auto;
      transform: translate3d(0, -50%, 0);
    }

    &-bottom {
      width: 100%;
      top: auto;
      bottom: 0;
      right: auto;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }

    &-left {
      top: 50%;
      right: auto;
      bottom: auto;
      left: 0;
      transform: translate3d(0, -50%, 0);
    }
  }
}
.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate3d(100%, -50%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate3d(-100%, -50%, 0);
}
</style>