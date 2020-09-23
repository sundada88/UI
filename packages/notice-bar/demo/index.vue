<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-notice-bar :text="text" />
      </demo-block>
      <demo-block title="禁用滚动">
        <sun-notice-bar
          leftIcon="volume-o"
          :text="text"
          :scrollable="false"
        />
      </demo-block>
      <demo-block title="通告栏模式">
        <sun-notice-bar
          leftIcon="volume-o"
          mode="closeable"
          :text="text"
        />
        <div style="height: 20px"></div>
        <sun-notice-bar
          leftIcon="volume-o"
          mode="link"
          :text="text"
        />
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '这是要给简单的小情歌，唱着我们的欢乐，不管你是不是'
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