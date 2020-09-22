<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-button
          text="显示消息通知"
          @click="showNotify"
        />
      </demo-block>

      <demo-block title="自定义配置">
        <sun-button
          text="显示自定义消息通知"
          @click="showCustomNotify"
        />
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:true
      }
    },
    methods: {
      showNotify() {
        console.log(1)
        this.$notify('通知内容')
      },
      showCustomNotify () {
        this.$notify({
          message: '通知内容',
          duration: 1000,
          background: '#1989fa'
        })
      }
    },
    mounted() {
      // setTimeout(() => {
      //   this.show = false
      // }, 400)
    }
  }
</script>

<style lang="less" scoped>
</style>