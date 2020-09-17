## Progress 进度条

### 使用指南

```javascript
import { Progress } from 'sun-bundle.js';

Vue.use(Progress);
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度

```html
<sun-progress :percentage="25" />
```

### 置灰

```html
<sun-progress inactive :percentage="25" />
```

### 样式定制

可以使用`pivot-text`属性自定义文字，`color`属性自定义进度条颜色

```html
<sun-progress pivot-text="橙色" color="#f2826a" :percentage="25" />

<sun-progress pivot-text="红色" color="#f44" :percentage="50" />

<sun-progress
  :percentage="75"
  pivot-text="紫色"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

### 进度条内容自定义

可以使用使用 slot 自定义进度条内容

```html
<sun-progress :percentage="10">
  <div class="slider">测试</div>
</sun-progress>
```

```css
.slider {
  width: 40px;
  background-color: red;
  border-radius: 5px;
  text-align: center;
  font-size: 10px;
  line-height: 20px;
}
```

### API

| 参数        | 说明             | 类型      | 默认值           | 版本 |
| ----------- | ---------------- | --------- | ---------------- | ---- |
| inactive    | 是否置灰         | `Boolean` | `false`          | -    |
| percentage  | 进度百分比       | `Number`  | `false`          | -    |
| show-pivot  | 是否显示进度文字 | `Boolean` | `true`           | -    |
| color       | 进度条颜色       | `String`  | `#1989fa`        | -    |
| text-color  | 进度条文字颜色   | `String`  | `#fff`           | -    |
| pivot-text  | 文字显示         | `String`  | 百分比文字       | -    |
| pivot-color | 文字背景色       | `String`  | 与进度条颜色一致 | -    |
