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
  }
}

