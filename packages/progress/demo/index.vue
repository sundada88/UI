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
          color="#f2826a"
          :percentage="25"
          pivot-text="orange"
        />
        <sun-progress
          color="#f44"
          :percentage="50"
          pivot-text='red'
        />
        <sun-progress
          :percentage="75"
          pivot-text='purple'
          pivot-color="#7232dd"
          color="linear-gradient(to right, #be99ff, #7232dd)"
        />
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
</style>