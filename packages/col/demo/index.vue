<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-row>
          <sun-col span="8">span: 8</sun-col>
          <sun-col span="8">span: 8</sun-col>
          <sun-col span="8">span: 8</sun-col>
        </sun-row>
        <sun-row>
          <sun-col span="4">span: 4</sun-col>
          <sun-col span="10"
                   offset="4">offset: 4, span: 10</sun-col>
        </sun-row>

        <sun-row>
          <sun-col offset="12"
                   span="12">offset: 12, span: 12</sun-col>
        </sun-row>
      </demo-block>
      <demo-block title="在列元素之间增加间隔">
        <sun-row gutter="20">
          <sun-col span="8">span: 8</sun-col>
          <sun-col span="8">span: 8</sun-col>
          <sun-col span="8">span: 8</sun-col>
        </sun-row>
      </demo-block>
      <demo-block title="flex布局">
        <!-- 左对齐 -->
        <sun-row type="flex">
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
        </sun-row>
        <!-- 居中 -->
        <sun-row type="flex"
                 justify="center">
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
        </sun-row>
        <!-- 右对齐 -->
        <sun-row type="flex"
                 justify="end">
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
        </sun-row>

        <!-- 两端对齐 -->
        <sun-row type="flex"
                 justify="space-between">
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
        </sun-row>
        <!-- 每个元素间隔相等 -->
        <sun-row type="flex"
                 justify="space-around">
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
          <sun-col span="6">span: 6</sun-col>
        </sun-row>
      </demo-block>
    </demo-section>

  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.sun-doc-demo-block {
  padding: 0 15px;
}

.sun-doc-demo-block__title {
  padding-left: 0;
}

.sun-col {
  color: white;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
  background-clip: content-box;

  &:nth-child(odd) {
    background-color: #39a9ed;
  }

  &:nth-child(even) {
    background-color: #66c6f2;
  }
}
</style>