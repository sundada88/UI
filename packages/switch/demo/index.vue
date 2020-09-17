<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-switch v-model="checked"></sun-switch>
      </demo-block>
      <demo-block title="禁用状态">
        <sun-switch
          disabled
          v-model="checked"
        ></sun-switch>
      </demo-block>
      <demo-block title="加载状态">
        <sun-switch
          v-model="checked"
          loading
        ></sun-switch>
      </demo-block>
      <demo-block title="自定义颜色">
        <sun-switch
          active-color="green"
          inactive-color="pink"
          v-model="checked"
        ></sun-switch>
      </demo-block>
      <demo-block title="加上文字">
        <sun-switch
          active-text="打开"
          inactive-text="关闭"
          active-color="green"
          inactive-color="pink"
          v-model="checked"
          @change="handleChange"
        ></sun-switch>
      </demo-block>
      <demo-block title="异步控制">
        <sun-switch
          :value="checked"
          @input="handleInput"
        ></sun-switch>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  methods: {
    handleInput (checked) {
      alert('这是一个测试')
      this.checked = checked
    },
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>