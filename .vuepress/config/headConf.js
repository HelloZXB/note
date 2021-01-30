module.exports = [
  ["link", { // 设置ico图标
    "rel": "icon",
    "href": "/favicon.ico"
  }
  ],
  ["meta", { // 设置视口
    "name": "viewport",
    "content": "width=device-width,initial-scale=1,user-scalable=no"
  }
  ],
  ['meta', { // 设置作者
    name: 'author',
    content: "dawnIceZhu"
  }], // 添加SEO
  ['meta', { // 设置关键字
    name: 'keywords',
    content: '朱晓冰, 朱晓冰的博客, 朱晓冰的笔记, 博客, 笔记, 前端博客, WEB前端开发, 前端技术分享, html, css, javascript, node, vue, react, 前端面试题, 前端常见bug, 开发工具, 文档, Vue Press'
  }],
  ['link', {rel: 'manifest', href: '/manifest.json'}],
  ['meta', {name: 'theme-color', content: '#3eaf7c'}],
  ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
  ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
  ['link', {rel: 'apple-touch-icon', href: '/icons/icon-512x512.png'}],
  ['link', {rel: 'mask-icon', href: '/icons/icon-384x384.png', color: '#3eaf7c'}],
  ['meta', {name: 'msapplication-TileImage', content: '/icons/icon-192x192.png'}],
  ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
]
