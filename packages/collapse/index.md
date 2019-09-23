## Collapse 折叠面板

### 使用指南

```javascript
import { Collapse, CollapseItem } from "sun-bundle.js";

Vue.use(Collapse).use(CollapseItem);
```

## 代码演示

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<sun-collapse v-model="activeNames">
  <sun-collapse-item title="sunui" name="1">
    基于 Vue 开发的组件库。
  </sun-collapse-item>
  <sun-collapse-item title="sunui" name="2">
    帮助开发者快速开发。
  </sun-collapse-item>
  <sun-collapse-item title="sun-ui" name="3" disabled>
    帮助开发者快速的开发。
  </sun-collapse-item>
</sun-collapse>
```

```javascript
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<sun-collapse v-model="activeName" accordion>
  <sun-collapse-item title="sunui" name="1">
    基于 Vue 开发的组件库。
  </sun-collapse-item>
  <sun-collapse-item title="sunui" name="2">
    帮助开发者快速开发。
  </sun-collapse-item>
  <sun-collapse-item title="sun-ui" name="3" disabled>
    帮助开发者快速的开发。
  </sun-collapse-item>
</sun-collapse>
```

```javascript
export default {
  data() {
    return {
      activeName: "1"
    };
  }
};
```

### 自定义标题内容

```html
<sun-collapse v-model="activeNames">
  <sun-collapse-item name="1">
    <div slot="title">sunui<sun-icon name="question-o" /></div>
    轻量、可靠的移动端 Vue 组件库，帮助开发者快速的开发。
  </sun-collapse-item>
  <sun-collapse-item title="sunui" name="2" icon="shop-o">
    帮助开发者快速的开发。
  </sun-collapse-item>
</sun-collapse>
```

### Collapse API

| 参数      | 说明                | 类型                      | 默认值  | 版本 |
| --------- | ------------------- | ------------------------- | ------- | ---- |
| v-model   | 当前展开面板的 name | `Array | String | Number` | -       |
| accordion | 是否开启手风琴模式  | `Boolean`                 | `false` |

### Collapse Event

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| change | 切换面板时触发 | activeNames: `string | array` |
| click  | 点击面板时触发 | chooseName: `string | number` |

### CollapseItem API

| 参数        | 说明                                             | 类型              | 默认值  | 版本  |
| ----------- | ------------------------------------------------ | ----------------- | ------- | ----- |
| name        | 唯一标识符，默认为索引值                         | `String | Number` | `index` | -     |
| icon        | 标题栏左侧图标名称或图片链接，可选值见 Icon 组件 | `String`          | -       | 1.2.1 |
| title       | 标题栏左侧内容                                   | `String | Number` | -       | -     |
| value       | 标题栏右侧内容                                   | `String | Number` | -       | 1.2.1 |
| label       | 标题栏描述信息                                   | `String | Number` | -       | 1.2.1 |
| border      | 是否显示内边框                                   | `Boolean`         | `true`  | 1.2.1 |
| is-link     | 是否展示标题栏右侧箭头并开启点击反馈             | `Boolean`         | `true`  | 1.2.1 |
| disabled    | 是否禁用面板                                     | `Boolean`         | `false` | 1.3.6 |
| title-class | 左侧标题额外类名                                 | `String`          | -       | 1.4.8 |
| value-class | 右侧内容额外类名                                 | `String`          | -       | 1.4.8 |
| label-class | 描述信息额外类名                                 | `String`          | -       | 1.4.8 |

### CollapseItem Slot

| 名称       | 说明                          |
| ---------- | ----------------------------- |
| -          | 面板内容                      |
| value      | 自定义显示内容                |
| icon       | 自定义`icon`                  |
| title      | 自定义`title`                 |
| right-icon | 自定义右侧按钮，默认是`arrow` |
