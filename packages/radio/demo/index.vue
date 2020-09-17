<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-radio-group v-model="model1">
          <sun-radio name="1"> 单选框1</sun-radio>
          <sun-radio name="2"> 单选框2</sun-radio>
        </sun-radio-group>
      </demo-block>
      <demo-block title="禁用状态">
        <sun-radio-group
          v-model="model2"
          disabled
        >
          <sun-radio name="1">单选框 1</sun-radio>
          <sun-radio name="2">单选框 2</sun-radio>
        </sun-radio-group>
      </demo-block>
      <demo-block title="自定义颜色">
        <sun-radio
          name="1"
          value="1"
          checked-color="#4b0"
        >单选框</sun-radio>
      </demo-block>
      <demo-block title="和单元格一起使用">
        <sun-radio-group v-model="radio">
          <sun-cell-group>
            <sun-cell
              title="单选框 1"
              clickable
              @click="radio = '1'"
            >
              <sun-radio name="1" />
            </sun-cell>
            <sun-cell
              title="单选框 2"
              clickable
              @click="radio = '2'"
            >
              <sun-radio name="2" />
            </sun-cell>
          </sun-cell-group>
        </sun-radio-group>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data ()  {
    return {
      model1: '1',
      model2: '1',
      radio: '1'
    }
  }
}
</script>
<style lang="less">
.sun-radio {
  margin: 10px;
}
</style>