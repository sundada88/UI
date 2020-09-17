<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-progress
          color="#f2826a"
          :percentage="25"
        ></sun-progress>
      </demo-block>
      <demo-block title="置灰">
        <sun-progress
          inactive
          :percentage="25"
        ></sun-progress>
      </demo-block>
      <demo-block title="样式定制">
        <sun-progress
          pivot-text="橙色"
          color="#f2826a"
          :percentage="25"
        />

        <sun-progress
          pivot-text="红色"
          color="#f44"
          :percentage="50"
        />

        <sun-progress
          :percentage="73"
          pivot-text="紫色"
          pivot-color="#7232dd"
          color="linear-gradient(to right, #be99ff, #7232dd)"
        />
      </demo-block>
      <demo-block title="进度条内容自定制">
        <sun-progress :percentage="10">
          <div class="slider">测试</div>
        </sun-progress>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 20
    }
  }
}
</script>

<style lang="less">
.box {
  height: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .sun-doc-demo-block {
    .sun-progress {
      margin: 20px 0;
    }
  }
}
.slider {
  width: 40px;
  background-color: red;
  border-radius: 5px;
  text-align: center;
  font-size: 10px;
  line-height: 20px;
}
</style>