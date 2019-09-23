<template>
  <i
    :class="[isSrc ? 'sun-icon--image' : `${classPre}-${name}`, 'sun-icon']"
    :style="style"
    @click="handleClick"
  >
    <img
      v-if="isSrc"
      :src="name"
    />
    <sun-info :info="info" />
  </i>
</template>

<script>

import isSrc from "../utils/icon/src"
import info from "../info/info"
export default {
  name: "sun-icon",
  componemts: {
    sunInfo: info
  },
  props: {
    name: String,
    classPre: {
      type: String,
      default: "sun-icon"
    },
    info: [String, Number],
    color: String,
    size: String
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  computed: {
    style () {
      return {
        color: this.color,
        fontSize: this.size
      }
    },
    isSrc () {
      return isSrc(this.name)
    }
  }
}
</script>

<style lang="less" scoped>
@import './icon.less';
.sun-icon {
  &--image {
    width: 1em;
    height: 1em;

    img {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
    }
  }
}
</style>