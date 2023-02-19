---
title: 快速开始
---
## 快速上手
## 快速开始
1. 安装依赖
```
pnpm install pisces-ui
```
2. 引入依赖
```ts
import PiscesUI from 'pisces-ui';
import 'pisces-ui/dist/style.css'

createApp(App).use(PiscesUI).mount('#app');
```
3. 在组件中使用
```vue
<template>
  <div>
    <YButton color="red">测试按钮</YButton>
  </div>
</template>
```