<template>
  <div :class="['sun-cell-group', { 'sun-hairline--top-bottom': border }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'sun-cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.sun-cell-group {
  background-color: white;
}
</style>