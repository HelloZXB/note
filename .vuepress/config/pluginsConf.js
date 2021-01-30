const moment = require('moment'); // 导入moment依赖包

module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒")
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "Found new content available",
      buttonText: "Update"
    }
  },
  // '@vssue/vuepress-plugin-vssue': {
  //   // 设置 `platform` 而不是 `api`
  //   platform: 'github-v4',
  //
  //   // 其他的 Vssue 配置
  //   owner: 'HelloZXB', // github用户名
  //   repo: 'note', // 仓库名称
  //   clientId: 'be80fbd3a5c32a78eb99', // clientId
  //   clientSecret: '6acfc1cc709e476fd116229c2c092f42eb8a38a9', // clientSecret
  // },
}

