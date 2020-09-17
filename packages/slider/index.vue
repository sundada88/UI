<template>
  <div
    :class="['sun-slider', {'sun-slider-disabled': disabled}]"
    :style="style"
    @click.stop="onClick"
  >
    <div
      class="sun-slider-bar"
      :style="barStyle"
    >
      <div
        class="sun-slider-button-wrapper"
        @touchstart="onTouchStart"
        @touchmove.prevent.stop="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
        <slot name="button">
          <div class="sun-slider-button"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Touch from 'packages/utils/mixins/touch'
export default {
  name: 'sun-slider',
  mixins: [Touch],
  props: {
    // min: {
    //   type: Number,
    //   default: 0
    // },
    min: {
      type: Number,
      default: 0
    },
    value: Number,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  computed: {
    style () {
      return {
        background: this.inactiveColor
      }
    },
    barStyle () {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight,
        background: this.activeColor
      }
    }
  },
  methods: {
    onTouchStart (event) {
      if (this.disabled) return
      this.touchStart(event)
      this.startValue = this.format(this.value)
    },
    onTouchMove (event) {
      if (this.disabled) return
      this.touchMove(event)
      console.log(this.deltaX)
      const rect = this.$el.getBoundingClientRect()
      console.log(rect.width)
      const diff = this.deltaX / rect.width * 100
      console.log(diff)
      console.log(this.startValue + diff)
      this.updateValue(this.startValue + diff)
    },
    onTouchEnd () {
      if (this.disabled) return
      this.updateValue(this.value, true)
    },
    format (value) {
      return (Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step)
    },
    onClick () {
      if (this.disabled) return
      const rect = this.$el.getBoundingClientRect()
      const value = (event.clientX - rect.left) / rect.width * 100
      this.updateValue(value, true)
    },
    updateValue (value, end) {
      value = this.format(value)
      this.$emit('input', value)
      if (end) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sun-slider {
  position: relative;
  border-radius: 999px;
  background-color: #e5e5e5;
  &-bar {
    position: relative;
    border-radius: inherit;
    background-color: #1989fa;
  }
  &-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    &-wrapper {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate3d(50%, -50%, 0);
      &::after {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
      }
    }
  }
  &-disabled {
    opacity: 0.3;
  }
}
</style>