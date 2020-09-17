<template>
  <div class="box">
    <demo-section>
      <demo-block title="按钮类型">
        <div class="demo-button-row">
          <sun-button
            type="default"
            animation
            @touchstart="touchstart"
            @click="handleClick"
            >默认按钮</sun-button
          >
          <sun-button type="primary">主要按钮</sun-button>
          <sun-button type="warning">警告按钮</sun-button>
        </div>
        <sun-button type="danger">危险按钮</sun-button>
      </demo-block>
      <demo-block title="禁用状态">
        <div class="demo-button-row">
          <sun-button disabled type="default">默认按钮</sun-button>
          <sun-button disabled type="primary">主要按钮</sun-button>
        </div>
      </demo-block>
      <demo-block title="按钮形状">
        <div class="demo-button-row">
          <sun-button type="default">方形按钮</sun-button>
          <sun-button round type="primary">圆型按钮</sun-button>
        </div>
      </demo-block>
      <demo-block title="动画按钮">
        <sun-button animation type="default">默认按钮</sun-button>
        <sun-button animation color="red" type="primary">主要按钮</sun-button>
      </demo-block>
      <demo-block title="按钮尺寸">
        <div class="demo-button-row">
          <sun-button size="large" type="default">大号按钮</sun-button>
        </div>
        <div class="demo-button-row">
          <sun-button type="default">普通按钮</sun-button>
          <sun-button size="small" type="default">小号按钮</sun-button>
        </div>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  name: 'button',
  methods: {
    touchstart() {
      console.log(11111111111111);
    },
    handleClick() {
      console.log(22222222222222222);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-button {
  .sun-doc-demo-block {
    // display: flex;
  }
  .sun-button {
    margin-right: 3px;
  }
  .demo-button-row {
    margin-bottom: 10px;
  }
}
</style>
