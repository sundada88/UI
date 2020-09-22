<template>
  <transition name="sun-slide-down">
    <div
      class="sun-notify"
      v-show="value"
      v-text="message"
      :style="style"
    />
  </transition>
</template>

<script>
  export default {
    name: 'sun-notify',
    props: {
      message: [String, Number],
      value: Boolean,
      color: {
        type: String,
        default: 'white'
      },
      background: {
        type: String,
        default: 'red'
      },
      duration: {
        type: Number,
        value: 3000
      }
    },
    computed: {
      style () {
        return {
          color: this.color,
          background: this.background
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../../assets/less/var.less";
.sun-notify {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: @notify-padding;
  font-size: @notify-font-size;
  line-height: @notify-line-height;
}
</style>