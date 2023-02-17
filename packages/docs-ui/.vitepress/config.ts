import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default {
  themeConfig: {
    sidebar: {
      '/': [
        { text: '快速开始', link: '/' },
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/Button/' },
          ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
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