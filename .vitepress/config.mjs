import { defineConfig } from "vitepress"

export default defineConfig({
  title: "我的文档项目",
  description: "A VitePress Site",
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" }
    ],
    
    socialLinks: [
      { icon: "github", link: "https://github.com/xyy698" }
    ]
  }
})
