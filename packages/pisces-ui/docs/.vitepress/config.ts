import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default {
  title: 'pisces-ui',
  description: 'Vue3 + Typescript',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // siteTitle: 'Vue3 + Typescript 构建的 UI 组件库',
    logo: 'https://camo.githubusercontent.com/ff60d684183b22539cdad4506bb6a4cd85104a9c6a8e202fe78c3a9f0ee80ff3/68747470733a2f2f7265736f757263652e6c7379626f792e636e2f626c6f672f7374617469632f696d672f6c6f676f2e636439626234332e706e67',
    sidebar: {
      '/': [
        { text: 'Guide', link: '/' },
        {
          text: 'General',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
          ]
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin)
    }
  }
}