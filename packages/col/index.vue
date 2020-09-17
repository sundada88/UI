<template>
  <component
    :is="tag"
    :class="['sun-col', {[`sun-col-${span}`]: span, [`sun-col-offset-${offset}`]: offset}]"
    :style="style"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'sun-col',
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },
    style() {
      const padding = `${this.gutter / 2}px`
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {}
    },
  },
}
</script>

<style lang="less" scoped>
.sun-col {
  font-size: 100%;
  float: left;
  box-sizing: border-box;
}
.generate-col(24);
.generate-col(@n, @i: 1) when (@i < @n) {
  .sun-col-@{i} {
    width: @i / @n * 100%;
  }
  .sun-col-offset-@{i} {
    margin-left: @i * 100% /24;
  }
  .generate-col(@n, @i + 1);
}
</style>