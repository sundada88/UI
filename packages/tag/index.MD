## Tag 标记

### 使用指南

```javascript
import { Tag } from 'sun-bundle.js';

Vue.use(Tag);
```

## 代码演示

### 基础用法

通过 type 属性控制 Tag 颜色，默认为灰色

```html
<sun-tag>标签</sun-tag>
<sun-tag type="danger">标签</sun-tag>
<sun-tag type="primary">标签</sun-tag>
<sun-tag type="success">标签</sun-tag>
```

### 空心样式

设置`plain`属性设置为空心样式

```html
<sun-tag plain>标签</sun-tag>
<sun-tag plain type="danger">标签</sun-tag>
<sun-tag plain type="primary">标签</sun-tag>
<sun-tag plain type="success">标签</sun-tag>
```

### 圆角样式

通过`round`设置为圆角样式

```html
<sun-tag round>标签</sun-tag>
<sun-tag round type="danger">标签</sun-tag>
<sun-tag round type="primary">标签</sun-tag>
<sun-tag round type="success">标签</sun-tag>
```

### 标记样式

通过`mark`设置为标记样式(半圆角)

```html
<sun-tag mark>标签</sun-tag>
<sun-tag mark type="danger">标签</sun-tag>
<sun-tag mark type="primary">标签</sun-tag>
<sun-tag mark type="success">标签</sun-tag>
```

### 自定义颜色

```html
<sun-tag color="#f2826a">标签</sun-tag>
<sun-tag color="#f2826a" plain>标签</sun-tag>
<sun-tag color="#7232dd">标签</sun-tag>
<sun-tag color="#7232dd" plain>标签</sun-tag>
<sun-tag color="#ffe1e1" text-color="#ad0000">标签</sun-tag>
```

### 标签大小

```html
<sun-tag>标签</sun-tag>
<sun-tag size="medium">标签</sun-tag>
<sun-tag size="large">标签</sun-tag>
```

### API

| 参数       | 说明                                       | 类型      | 默认值  | 版本  |
| ---------- | ------------------------------------------ | --------- | ------- | ----- |
| type       | 类型，可选值为`primary` `success` `danger` | `String`  | -       | -     |
| size       | 大小, 可选值为`large` `medium`             | `String`  | -       | 1.3.8 |
| color      | 标签颜色                                   | `String`  | -       | 1.3.8 |
| plain      | 是否为空心样式                             | `Boolean` | `false` | -     |
| round      | 是否为圆角样式                             | `Boolean` | `false` | 1.3.8 |
| mark       | 是否为标记样式                             | `Boolean` | `false` | -     |
| text-color | 文本颜色，优先级高于`color`属性            | `String`  | `white` | 1.5.0 |

### Slot

| 名称 | 说明                |
| ---- | ------------------- |
| -    | 自定义 Tag 显示内容 |
