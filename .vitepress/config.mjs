import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs';	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "我的文档项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle:"目录",
    outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', items:[
      { text:'首页', link: '/' },
      { text:'markdown示例', link: '/markdown-examples' },
      ],
     },
     { text: "markdown示例", link: "/markdown-examples" },
     { text: "自动生成侧边栏", link: "/front-end/react/" },
     { text: "自动生成侧边栏2", link: "/backend/rabbitmq/" },
    ],

     //sidebar: [
     // {
     //   text: 'Examples',
     //   items: [
     //     { text: 'Markdown Examples', link: '/markdown-examples' },
     //     { text: 'Runtime API Examples', link: '/api-examples' }
     //   ]
     // }
     //],
    sidebar: { "/front-end/react": set_sidebar("front-end/react"),
               "/backend/rabbitmq": set_sidebar("backend/rabbitmq")
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xyy698' }
    ]
  }
     // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
})
