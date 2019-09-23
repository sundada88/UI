<template>
  <div class="app">
    <doc
      :config="config"
      :simulator="simulators"
    >
      <router-view></router-view>
    </doc>
  </div>
</template>

<script>
import docConfig from './docs.config';
export default {
  data () {
    return {
      simulators: `./mobile.html#/`,
      demoURL: '',
      full: false
    };
  },
  computed: {
    config () {
      return docConfig
    }
  },
  mounted () {
    window.console.log(location.hash)
    window.console.log(location.hash)
  }
};
</script>

<style lang="less">
</style>
