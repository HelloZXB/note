const moment = require('moment'); // 导入moment依赖包

module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒")
  },
  '@vuepress-reco/vuepress-plugin-pagation': { // 添加分页
    perPage: 10
  },
  '@vuepress-reco/vuepress-plugin-loading-page': 'auto', // 载入页面
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "Found new content available",
      buttonText: "Update"
    }
  },
  '@vuepress/google-analytics': {
    'ga': 'UA-188413535-4' // 跟踪ID
  },
  "ribbon": {
    size: 90, // width of the ribbon, default: 90
    opacity: 0.8, // opacity of the ribbon, default: 0.3
    zIndex: -1 // z-index property of the background, default: -1
  },
  "cursor-effects": "auto", // 添加光标动画
  "dynamic-title": { // 添加动态标题
    showIcon: "/favicon.ico",
    showText: "Hey, that's good again!",
    hideIcon: "/failure.ico",
    hideText: "Oh, it broke down!",
    recoverTime: 2000
  },
  "@vuepress-reco/vuepress-plugin-bgm-player": { // 设置背景音乐播放器
    audios: [
      // 网络文件示例
      {
        name: '你不是他星球上的玫瑰',
        artist: '温野',
        url: 'https://webfs.yun.kugou.com/202101311018/90e6fb03d16c8f29931e4d8f7ac537c8/G161/M07/13/18/gZQEAFyaqO2AeAs1AChM6NXcvhQ808.mp3',
        cover: 'http://p1.music.126.net/JhWpssxu2alUKlNW-6cplA==/109951164646616239.jpg?param=640y300'
      },
      {
        name: 'Childhood\'s Memory',
        artist: '熱田公紀',
        url: 'https://webfs.yun.kugou.com/202101302214/acbf1f8a66a19d1b0855d49f8846f32d/part/0/960983/G114/M04/1B/07/UpQEAFvodBCAGWMhAIFqK6IORFQ020.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20151225/20151225003211275414.jpg'
      },
      {
        name: 'Dream It Possible',
        artist: 'Delacey',
        url: 'https://webfs.yun.kugou.com/202101302218/f4a0e599bcf03fe16114b8033b645521/G148/M02/13/0F/NIcBAFvJVaqAb5N6ADHXW3DSEx4595.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20161031/20161031151741660508.jpg'
      },
      {
        name: '花火が瞬く夜に',
        artist: '羽肿',
        url: 'https://webfs.yun.kugou.com/202101302225/babbc16ad6cb6e9aa45c876139498b7e/G171/M03/05/15/6w0DAF2bUvGAKGFXAEIlDjm1260737.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20170622/20170622214007481858.jpg'
      },
      {
        name: 'remember',
        artist: 'Uru',
        url: 'https://webfs.yun.kugou.com/202101311027/35489a3cdc75e7f54c66d225b96f56b9/KGTX/CLTX001/ab319a6afbb8ae1d520e250ac6a41f45.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20180929/20180929143315672838.jpg'
      }
    ],
    // 自动缩小
    autoShrink: true,
    // 悬浮窗模式，吸边
    shrinkMode: 'float',
    // 悬浮窗位置
    floatStyle: {
      bottom: '10px',
      'z-index': '999999'
    },
  }
}