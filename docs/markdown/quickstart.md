## 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 [Vue Cli 3](https://cli.vuejs.org/zh/) 创建项目

```bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world
```

## 引入组件

### 修改配置文件

```js
// 在src/main.js中导入polyfill
import "@babel/polyfill";

// 修改babel.config.js 中配置
module.exports = {
  presets: [
    [
      "@vue/app",
      {
        useBuiltIns: "entry"
      }
    ]
  ]
};
```

### 方式一. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import { Button } from "bos-bundle.js";
```

### 方式二. 导入所有组件

```js
import Vue from "vue";
import bosui from "bundle.js";

Vue.use(bosui);
```
