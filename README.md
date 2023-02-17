<p align="center"><a href="https://blog.lsyboy.cn" target="_blank"><img width="200"src="https://resource.lsyboy.cn/blog/static/img/logo.cd9bb43.png"></a></p>

<div align="center">
  <strong>
    📝 Vue3 组件库 YUI
  </strong>
</div>

<p align="center">
    <a href="https://github.com/da34/y-ui/actions/workflows/main.yml">
    <img src="https://github.com/da34/y-ui/actions/workflows/main.yml/badge.svg?branch=main" />
</a>
</p>

## Features

前端工程化演示项目。
- 基于 Vue3 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付

## Install
```bash
npm i pisces-ui
 ```

## Quick Start

```js
import Vue from 'vue'
import PiscesUI from 'pisces-ui'

const App = {
    template: `
        <YButton />
    `
}

createApp(App)
    .use(PiscesUI)
    .mount('#app')
```
