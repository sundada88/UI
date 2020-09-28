
<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-cell-group>
          <sun-switch-cell
            v-model="checked"
            title="标题"
          />
        </sun-cell-group>
      </demo-block>
      <demo-block title="禁用状态">
        <sun-cell-group>
          <sun-switch-cell
            v-model="checked"
            disabled
            title="标题"
          />
        </sun-cell-group>
      </demo-block>
      <demo-block title="加载状态">
        <sun-cell-group>
          <sun-switch-cell
            v-model="checked"
            loading
            title="标题"
          />
        </sun-cell-group>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
</style>