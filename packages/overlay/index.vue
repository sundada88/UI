<template>
  <transition name="sun-fade">
    <div
      v-show="visible"
      class="sun-overlay"
      :className="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    >

    </div>
  </transition>
</template>

<script>
export default {
  name: 'sun-overlay',
  props: {
    zIndex: Number,
    visible: Boolean,
    className: String,
    customStyle: Object
  },
  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sun-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease-out;
}
</style>