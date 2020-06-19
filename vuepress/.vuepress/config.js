const nav = require('./config/nav');

module.exports = {
  title: 'utils',
  description: 'utils 文档',
  base: '/utils/', // 部署到 github 相关的配置
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/hhp1614/utils',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '最近更新',
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav
  },
  plugins: {
    'vuepress-plugin-auto-sidebar': {}
  }
};
