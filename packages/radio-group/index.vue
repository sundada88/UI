<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'sun-radio-group',
    props: {
      value: String,
      disabled: Boolean
    },
    watch: {
      value (val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style lang="less" scoped>
</style>