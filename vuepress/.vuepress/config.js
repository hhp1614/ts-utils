module.exports = {
  title: 'ts-utils',
  description: 'ts-utils 文档',
  base: '/ts-utils/', // 部署到 github 相关的配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/hhp1614/ts-utils',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '最近更新',
    displayAllHeaders: true,
    sidebarDepth: 2,
    /**
     * 右上角
     */
    nav: [
      {
        text: 'API',
        link: '/api/',
        items: [
          { text: '开始', link: '/api/start' },
          { text: '设备', link: '/api/device' },
          { text: '方法', link: '/api/func' },
          { text: '类型', link: '/api/type' }
        ]
      },
      { text: '关于', link: '/about' },
      { text: '日志', link: '/log' },
      { text: '博客', link: 'https://github.com/hhp1614/ts-utils' }
    ],
    sidebar: 'auto'
  }
};
