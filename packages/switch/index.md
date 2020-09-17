# Switch 开关

### 引入

```javascript
import { Switch } from 'sun-bundle.js'

Vue.use(Switch)
```

## 代码演示

### 基础用法

```html
<sun-switch v-model="checked"></sun-switch>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```

### 禁用状态

```html
<sun-switch v-model="checked" disabled />
```

### 加载状态

```html
<sun-switch v-model="checked" loading></sun-switch>
```

### 自定义颜色

```html
<sun-switch
  active-color="green"
  inactive-color="pink"
  v-model="checked"
></sun-switch>
```

### 加上文字

```html
<sun-switch
  active-text="打开"
  inactive-text="关闭"
  active-color="green"
  inactive-color="pink"
  v-model="checked"
></sun-switch>
```

### 异步控制

```html
<sun-switch :value="checked" @input="handleInput"></sun-switch>
```

```js
export default {
  data() {
    return {
      checked: true
    }
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked
      })
    }
  }
}
```

### API

| 参数           | 说明             | 类型      | 默认值     | 版本  |
| -------------- | ---------------- | --------- | ---------- | ----- |
| v-model        | 开关选中状态     | `Boolean` | `false`    | -     |
| disabled       | 是否为禁用状态   | `Boolean` | `false`    | -     |
| active-color   | 打开时的背景色   | `String`  | `#1989fa`  | 1.0.0 |
| inactive-color | 关闭时的背景色   | `String`  | `#fff`     | 1.0.0 |
| active-text    | 打开时的文字显示 | `String`  | `` | 1.0.0 |
| inactive-text  | 关闭时的文字显示 | `String`  | `` | 1.0.0 |

### Event

| 事件名 | 说明             | 参数                  |
| ------ | ---------------- | --------------------- |
| change | 开关状态切换回调 | checked: 是否选中开关 |
