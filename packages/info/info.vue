<template>
  <div
    class="sun-info"
    v-text="info"
    v-if="info"
  />

</template>

<script>
export default {
  name: 'sun-info',
  props: {
    info: [String, Number]
  }
}
</script>

<style lang="less" scoped>
.sun-info {
  position: absolute;
  right: 0;
  top: -8px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  text-align: center;
  box-sizing: border-box;
  padding: 0 3px;
  min-width: 16px;
  line-height: 14px;
  border: 1px solid white;
  border-radius: 16px;
  background-color: red;
  transform: translateX(50%);
  transform-origin: 100%;
}
</style>