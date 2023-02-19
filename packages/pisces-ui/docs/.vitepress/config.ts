import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default {
  title: 'pisces-ui',
  description: 'Vue3 + Typescript',
  lang: "zh-cn",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/da34" }],
    logo: '/logo.png',
    sidebar: {
      '/': [
        { text: '⚡ 快速开始', link: '/guide/' },
        {
          text: '📦 通用组件',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
          ]
        }
      ]
    },
    nav: [
      { text: '快速开始', link: '/guide' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present da34'
    }
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin)
    }
  }
}