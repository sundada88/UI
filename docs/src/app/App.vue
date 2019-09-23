<template>
  <div class="sun-container-content">
    <sun-cell
      v-if="title"
      :title="title"
      icon="arrow-left"
      center
    >
      <sun-icon
        slot="icon"
        name="arrow-left"
        @click="handleClick()"
      ></sun-icon>
    </sun-cell>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1', '2'],
      activeName: '1'
    }
  },
  methods: {
    handleClick () {
      this.$router.go(-1)
    }
  },
  computed: {
    title () {
      return this.$route.meta.name
    }
  }
}
</script>

<style lang="less">
body {
  line-height: 1;
  color: #455a64;
  background-color: #fafafa;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei',
    Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.sun-container-content {
  position: absolute;
  width: 100%;
}
</style>