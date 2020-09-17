<template>
  <div class="box">
    <demo-section>
      <demo-block title="Circular">
        <sun-loading color='red'></sun-loading>
        <sun-loading color="white"></sun-loading>
      </demo-block>
      <demo-block title="Spinner">
        <sun-loading type="spinner"></sun-loading>
        <sun-loading
          type="spinner"
          color="white"
        ></sun-loading>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.sun-doc-demo-block {
  .sun-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }
  > .sun-loading-white {
    background: #c9c9c9;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>