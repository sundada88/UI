## Slider 滑块

### 使用指南

```javascript
import { Slider } from "sun-bundle.js";

Vue.use(Slider);
```

#### 注意

如果在非移动端使用，请先引入模拟移动端 touch 事件

### 基本用法

```html
<sun-slider v-model="value" @change="onChange" />
```

```js
export default {
  data() {
    return {
      value: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast("当前值：" + value);
    }
  }
};
```

### 指定选择范围

```html
<sun-slider v-model="value" :min="10" :max="90" />
```

### 禁用

```html
<sun-slider v-model="value" disabled />
```

### 指定步长

```html
<sun-slider v-model="value" :step="10" />
```

### 自定义样式

```html
<sun-slider v-model="value" bar-height="4px" active-color="#f44" />
```

### 自定义按钮

```html
<sun-slider v-model="value" active-color="#f44">
  <div slot="button" class="custom-button">
    {{ value }}
  </div>
</sun-slider>
```

### API

| 参数           | 说明             | 类型      | 默认值    | 版本  |
| -------------- | ---------------- | --------- | --------- | ----- |
| value          | 当前进度百分比   | `Number`  | `0`       | 1.1.0 |
| disabled       | 是否禁用滑块     | `Boolean` | `false`   | 1.1.0 |
| max            | 最大值           | `Number`  | `100`     | 1.1.0 |
| min            | 最小值           | `Number`  | `0`       | 1.1.0 |
| step           | 步长             | `Number`  | `1`       | 1.1.0 |
| bar-height     | 进度条高度       | `String`  | `2px`     | 1.1.0 |
| active-color   | 进度条激活态颜色 | `String`  | `#1989fa` | 1.5.1 |
| inactive-color | 进度条默认颜色   | `String`  | `#e5e5e5` | 1.5.1 |

### Event

| 事件名 | 说明             | 参数            |
| ------ | ---------------- | --------------- |
| change | 进度值改变后触发 | value: 当前进度 |

### Slot

| 名称   | 说明           |
| ------ | -------------- |
| button | 自定义滑动按钮 |
