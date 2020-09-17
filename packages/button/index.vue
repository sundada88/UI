<template>
  <button
    :class="[
      'sun-button',
      'sun-button-' + size,
      'sun-button-' + type,
      {
        'sun-button-disabled': disabled,
        'sun-button-unclickable': disabled,
        'sun-button-round': round
      }
    ]"
    @click="handleClick"
    @touchstart="handleTouch"
  >
    <span class="sun-button-text">
      <slot>{{ text }}</slot>
    </span>
    <span
      v-if="animation"
      :style="{
        backgroundImage: `radial-gradient(circle, ${color} 10%, transparent 10.01%)`
      }"
      class="sun-button-animation"
    ></span>
  </button>
</template>

<script>
export default {
  name: 'sun-button',
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    animation: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    },
    type: {
      default: 'default',
      type: String
    },
    size: {
      default: 'normal',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    round: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      sundada: true
    };
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
    handleTouch() {
      this.$emit('touchstart');
    }
  }
};
</script>

<style lang="less">
@import '../../assets/less/var.less';
.sun-button {
  position: relative;
  display: inline-block;
  height: 44px;
  line-height: 42px;
  border-radius: 2px;
  font-size: 16px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  background-color: white;
  outline: none;
  border: 1px solid green;
  overflow: hidden;

  &:not(.sun-button-animation)::before {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: inherit;
    border-color: black;
    background-color: black;
    border-radius: inherit;
    transform: translate(-50%, -50%);
  }
  &:not(.sun-button-animation):active::before {
    opacity: 0.15;
  }
  &-unclickable::before {
    display: none;
  }
  &-default {
    color: @button-default-color;
    background-color: @button-default-background-color;
    border: 1px solid @button-default-border-color;
  }
  &-primary {
    color: @button-primary-color;
    background-color: @button-primary-background-color;
    border: 1px solid @button-primary-border-color;
  }
  &-danger {
    color: @button-danger-color;
    background-color: @button-danger-background-color;
    border: 1px solid @button-danger-border-color;
  }
  &-warning {
    color: @button-warning-color;
    background-color: @button-warning-background-color;
    border: 1px solid @button-warning-border-color;
  }
  &-normal {
    padding: 0 15px;
    font-size: 14px;
  }
  &-small {
    height: 30px;
    padding: 0 8px;
    min-width: 60px;
    font-size: 12px;
    line-height: 28px;
  }
  &-large {
    width: 100%;
    height: 50px;
    line-height: 48px;
    overflow: hidden;
  }
  &-disabled {
    opacity: 0.3;
  }
  &-round {
    border-radius: 10em;
  }
  &:active {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  &:hover {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
}
.sun-button-animation {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none; /*设置径向渐变 */
  background-repeat: no-repeat;
  background-position: 50%;
  // transform: scale(10, 10);
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.3s, opacity 0.5s;
}
.sun-button:active .sun-button-animation {
  /*设置初始状态 */
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
</style>
