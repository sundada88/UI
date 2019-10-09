<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-slider
          :min="0"
          v-model="value"
        >
        </sun-slider>
      </demo-block>
      <demo-block title="指定选择范围（10-90）">
        <sun-slider
          :min="10"
          :max="90"
          v-model="value1"
        >
        </sun-slider>
      </demo-block>
      <demo-block title="禁用">
        <sun-slider
          disabled
          :min="0"
          v-model="value2"
        >
        </sun-slider>
      </demo-block>
      <demo-block title="指定步长为10">
        <sun-slider
          :step="10"
          v-model="value3"
        >
        </sun-slider>
      </demo-block>
      <demo-block title="自定义样式">
        <sun-slider
          bar-height="4px"
          active-color="#f44"
          v-model="value4"
        >
        </sun-slider>
      </demo-block>
      <demo-block title="自定义按钮">
        <sun-slider
          :min="0"
          v-model="value5"
          active-color="#f44"
        >
          <div
            slot="button"
            class="custom-button"
          >
            {{ value5 }}
          </div>
        </sun-slider>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 10,
      value1: 10,
      value2: 10,
      value3: 10,
      value4: 10,
      value5: 10
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .sun-doc-demo-block {
    .sun-slider {
      margin: 20px 0;
    }
  }
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    border-radius: 100px;
    background-color: #f44;
  }
}
</style>