# Button 按钮

### 引入

```javascript
import { Button } from "sun-bundle.js";

Vue.use(Button);
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`warning`、`danger`四种类型，默认为`default`

```html
<sun-button type="default">默认按钮</sun-button>
<sun-button type="primary">主要按钮</sun-button>
<sun-button type="warning">警告按钮</sun-button>
<sun-button type="danger">危险按钮</sun-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<sun-button disabled type="primary">禁用状态</sun-button>
<sun-button disabled type="danger">禁用状态</sun-button>
```

### 按钮形状

通过`round`设置圆形按钮

```html
<sun-button type="primary">方形按钮</sun-button>
<sun-button round type="danger">圆形按钮</sun-button>
```

### 动画按钮

通过`animation`属性设置按钮图标

```html
<sun-button animation type="default">默认按钮</sun-button>
<sun-button animation type="primary">主要按钮</sun-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、三种尺寸，默认为`normal`

```html
<sun-button type="primary" size="large">大号按钮</sun-button>
<sun-button type="primary" size="normal">普通按钮</sun-button>
<sun-button type="primary" size="small">小型按钮</sun-button>
```

## API

### Props

| 参数      | 说明                                        | 类型      | 默认值    |
| --------- | ------------------------------------------- | --------- | --------- |
| type      | 类型，可选值为 `primary` `warning` `danger` | `string`  | `default` |
| size      | 尺寸，可选值为 `large` `small` `mini`       | `string`  | `normal`  |
| text      | 按钮文字                                    | `string`  | -         |
| round     | 是否为圆形按钮                              | `boolean` | `false`   |
| disabled  | 是否禁用按钮                                | `boolean` | `false`   |
| animation | 是否显示按下的时候的动画                    | `boolean` | `false`   |

### Events

| 事件名 | 说明                                     | 回调参数     |
| ------ | ---------------------------------------- | ------------ |
| click  | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |
