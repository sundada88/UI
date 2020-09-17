## Radio 单选框

### 使用指南

```javascript
import { RadioGroup, Radio } from 'sun-bundle.js';

Vue.use(RadioGroup);
Vue.use(Radio);
```

## 代码演示

### 基础用法

通过`v-model`绑定值当前选中项的 name

```html
<sun-radio-group v-model="radio">
  <sun-radio name="1">单选框 1</sun-radio>
  <sun-radio name="2">单选框 2</sun-radio>
</sun-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    };
  }
};
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`sun-radio`上设置`disabled`可以禁用单个选项

```html
<sun-radio-group v-model="radio" disabled>
  <sun-radio name="1">单选框 1</sun-radio>
  <sun-radio name="2">单选框 2</sun-radio>
</sun-radio-group>
```

### 自定义颜色

```html
<sun-radio name="1" value="1" checked-color="#4b0">复选框</sun-radio>
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```html
<sun-radio-group v-model="radio">
  <sun-cell-group>
    <sun-cell title="单选框 1" clickable @click="radio = '1'">
      <sun-radio name="1" />
    </sun-cell>
    <sun-cell title="单选框 2" clickable @click="radio = '2'">
      <sun-radio name="2" />
    </sun-cell>
  </sun-cell-group>
</sun-radio-group>
```

### Radio API

| 参数           | 说明                      | 类型      | 默认值    | 版本   |
| -------------- | ------------------------- | --------- | --------- | ------ |
| name           | 标识符                    | 任意类型  | -         | -      |
| disabled       | 是否为禁用状态            | `Boolean` | `false`   | -      |
| label-disabled | 是否禁用文本内容点击      | `Boolean` | `false`   | 1.1.13 |
| label-position | 文本位置，可选值为 `left` | `String`  | `right`   | 1.1.13 |
| checked-color  | 选中状态颜色              | `String`  | `#1989fa` | 1.4.5  |

### RadioGroup API

| 参数     | 说明               | 类型      | 默认值  | 版本 |
| -------- | ------------------ | --------- | ------- | ---- |
| v-model  | 当前选中项的标识符 | 任意类型  | -       | -    |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | -    |

### RadioGroup Event

| 事件名称 | 说明                     | 回调参数          |
| -------- | ------------------------ | ----------------- |
| change   | 当绑定值变化时触发的事件 | 当前选中项的 name |
