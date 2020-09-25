
<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法1">
        <sun-tag>标签</sun-tag>
        <sun-tag type="danger">标签</sun-tag>
        <sun-tag type="primary">标签</sun-tag>
        <sun-tag type="success">标签</sun-tag>
      </demo-block>
      <demo-block title="空心样式">
        <sun-tag plain>标签</sun-tag>
        <sun-tag
          plain
          type="danger"
        >标签</sun-tag>
        <sun-tag
          plain
          type="primary"
        >标签</sun-tag>
        <sun-tag
          plain
          type="success"
        >标签</sun-tag>
      </demo-block>
      <demo-block title="圆角样式">
        <sun-tag round>标签</sun-tag>
        <sun-tag
          round
          type="danger"
        >标签</sun-tag>
        <sun-tag
          round
          type="primary"
        >标签</sun-tag>
        <sun-tag
          round
          type="success"
        >标签</sun-tag>
      </demo-block>

      <demo-block title="标记样式">
        <sun-tag mark>标签</sun-tag>
        <sun-tag
          mark
          type="danger"
        >标签</sun-tag>
        <sun-tag
          mark
          type="primary"
        >标签</sun-tag>
        <sun-tag
          mark
          type="success"
        >标签</sun-tag>
      </demo-block>
      <demo-block title="自定义颜色">
        <sun-tag color="#f2826a">标签</sun-tag>
        <sun-tag
          color="#f2826a"
          plain
        >标签</sun-tag>
        <sun-tag color="#7232dd">标签</sun-tag>
        <sun-tag
          color="#7232dd"
          plain
        >标签</sun-tag>
        <sun-tag
          color="#ffe1e1"
          text-color="#ad0000"
        >标签</sun-tag>
      </demo-block>
      <demo-block title="标签大小">
        <sun-tag>标签</sun-tag>
        <sun-tag size="medium">标签</sun-tag>
        <sun-tag size="large">标签</sun-tag>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
  export default {
    data() {
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
@import "../../assets/less/var.less";
</style>