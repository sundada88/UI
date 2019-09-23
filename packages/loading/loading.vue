<template>
  <div :class="['sun-loading-${type}',{}]">
  </div>
</template>

<script>
export default {
  name: "sun-loading",
  props: {
    type: {
      type: String,
      default: 'circular'
    }
  }
}
</script>

<style lang="less" scoped>

</style>