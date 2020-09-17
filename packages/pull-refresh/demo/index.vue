<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-pull-refresh
          v-model="isLoading"
          @refresh="onRefresh"
          :headHeight="headHeight"
        >
          <!-- <img
            src="../../img/1.jpg"
            alt=""
            style="display: inline-block;width: 100%; height: 100px;"
            slot="loading"
          >
          <img
            src="../../img/2.jpg"
            alt=""
            style="display: inline-block;width: 100%; height: 100px;"
            slot="pulling"
          > -->
          <p style="text-align: center;">刷新次数：{{count}}</p>
        </sun-pull-refresh>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        headHeight: 100,
        isLoading: false
      }
    },
    methods: {
    onRefresh() {
      setTimeout(() => {
        // this.$toast(this.$t('success'));
        console.log(123456789)
        this.isLoading = false;
        this.count++;
      }, 500);
    }
   }
  }
</script>

<style lang="less" >
.sun-pull-refresh__track {
  height: calc(100vh - 100px);
}
</style>