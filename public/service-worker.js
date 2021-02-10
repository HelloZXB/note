/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e80cfded722e2d95ed3c078276239f4b"
  },
  {
    "url": "assets/css/0.styles.19e4f761.css",
    "revision": "e9810e07a99ca9570b26ddf33382c49d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d82b3c85.js",
    "revision": "573b6f79d8ee2742bf555876e441c540"
  },
  {
    "url": "assets/js/10.d7eb85bc.js",
    "revision": "66bdb987762d1377d62581670eacd655"
  },
  {
    "url": "assets/js/11.eb80698f.js",
    "revision": "9d6d892713162111b03b3835b2948446"
  },
  {
    "url": "assets/js/12.8ff23dd0.js",
    "revision": "9562396564ad6e4ddd58555988ba1ddf"
  },
  {
    "url": "assets/js/13.7e96db9f.js",
    "revision": "4aaa1ec6072eb5cb523c0617f0e48ab9"
  },
  {
    "url": "assets/js/14.243b8f96.js",
    "revision": "21180da96e751e2617c92ad5260b2a47"
  },
  {
    "url": "assets/js/15.59db84a4.js",
    "revision": "1d862945425459135085afc9a384db23"
  },
  {
    "url": "assets/js/16.9455a68f.js",
    "revision": "0ccac1b8eefc721c5d45777e004987a3"
  },
  {
    "url": "assets/js/17.ea373031.js",
    "revision": "83f862af50f9a1ddb59d9cc8d583d0f0"
  },
  {
    "url": "assets/js/18.b5e0c632.js",
    "revision": "3719f67fdd3f25dc76766fe43f3163f4"
  },
  {
    "url": "assets/js/19.dda43ad7.js",
    "revision": "d4632a4f720cc17551ba166649524f1a"
  },
  {
    "url": "assets/js/3.9a3c1063.js",
    "revision": "351cf70de96cc329e3c49403a5ce3340"
  },
  {
    "url": "assets/js/4.e347b52f.js",
    "revision": "abea75cf2a059f6a0047f961b831b1b5"
  },
  {
    "url": "assets/js/5.b7c910ab.js",
    "revision": "9cc8d7196dcd106696d9d89e2ef18ca3"
  },
  {
    "url": "assets/js/6.f56c1e15.js",
    "revision": "c104842dddb683306e49f321c828077e"
  },
  {
    "url": "assets/js/7.b3746541.js",
    "revision": "acc5fcba96ae719cc686d1a8515a4e28"
  },
  {
    "url": "assets/js/8.619bb2b1.js",
    "revision": "d89ce39f7421c96ef58bc5d4495709db"
  },
  {
    "url": "assets/js/9.f622394e.js",
    "revision": "21f96596439495f00dd8995e9b5b5063"
  },
  {
    "url": "assets/js/app.321f6e26.js",
    "revision": "cfc6acee9c53a497d14dd8fb739aca3e"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/01.html",
    "revision": "20e6abf2c7efa340b9c582c3130aa64b"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "9b9c81f5781a815dea8623af12ee428d"
  },
  {
    "url": "blogs/recording/01.html",
    "revision": "fbef7c22162cff259d7482d63bbe9ad3"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "43dff67c5b8c764fd09bdffebf6d3ee3"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "d1178e4857bb698304ef9f7f6c2f9b43"
  },
  {
    "url": "blogs/web/vue/01.html",
    "revision": "f89fb0aac0c3d8a60d3875870b8e13b5"
  },
  {
    "url": "categories/ESSAY/index.html",
    "revision": "3a4838419109b8ca6dfc73e080dcbb52"
  },
  {
    "url": "categories/index.html",
    "revision": "88d217431e06bb238676772a6d32dd6e"
  },
  {
    "url": "categories/RECORDING/index.html",
    "revision": "0f3e8415703b1b6a1a82501146d9668c"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "828d5cf8b13722d3f3e667645607f730"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "883380a05992739ca21d7cc6345f2ac7"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "4aec47ac6e89f54776cffc247643b895"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "c89ebd79cf826bccf017a96a5b5d3ce9"
  },
  {
    "url": "img/image-20210128185506793.png",
    "revision": "143c14e271b091f96ddc844cd75b3188"
  },
  {
    "url": "img/image-20210129091550792.png",
    "revision": "b36d46e2bac2b2cb2f4eb05ef3a660d1"
  },
  {
    "url": "img/image-20210129091848643.png",
    "revision": "baf12911dc663cee9b7886ec987ec849"
  },
  {
    "url": "img/image-20210129092230778.png",
    "revision": "b0d7f8cff5cc059cf8ea2b267f88caba"
  },
  {
    "url": "img/image-20210129092233422.png",
    "revision": "b0d7f8cff5cc059cf8ea2b267f88caba"
  },
  {
    "url": "img/image-20210129093315004.png",
    "revision": "b48c35d3b325cc879589658820a1803b"
  },
  {
    "url": "img/image-20210129093734739.png",
    "revision": "ff159457070116581d0fa64ab2d0798c"
  },
  {
    "url": "img/image-20210129100033331.png",
    "revision": "189c26cb8043a89ba17bbc986a8314e1"
  },
  {
    "url": "img/image-20210129104346966.png",
    "revision": "be1646ac06f9e87243570f07129bfd2e"
  },
  {
    "url": "img/image-20210129105153442.png",
    "revision": "595e3a98cbcb7a3a5fc1c11f11167722"
  },
  {
    "url": "img/image-20210129112635715.png",
    "revision": "dc63d67468d21694c4e348619ad32c6a"
  },
  {
    "url": "img/image-20210129113731530.png",
    "revision": "6137509b60ce8441c7e092ef186061d3"
  },
  {
    "url": "img/image-20210129114254097.png",
    "revision": "b1a4c8aa34cd4f40ec93d610d3daa17b"
  },
  {
    "url": "img/image-20210129114257742.png",
    "revision": "b1a4c8aa34cd4f40ec93d610d3daa17b"
  },
  {
    "url": "img/image-20210129120842507.png",
    "revision": "fb63caea07b37086880b6743030dfa46"
  },
  {
    "url": "img/image-20210129121410517.png",
    "revision": "a96f788cc46bc0c9289e3cb3f4cee864"
  },
  {
    "url": "img/image-20210129121810551.png",
    "revision": "296a37f69443b11822dcc57cf5fdbe25"
  },
  {
    "url": "img/image-20210129131826561.png",
    "revision": "92368483df8d1da64cdfb86c3d71bcea"
  },
  {
    "url": "img/image-20210129134410897.png",
    "revision": "fecab84c523cb77d8035dca5b5106184"
  },
  {
    "url": "img/image-20210129134501052.png",
    "revision": "33f2d4da27b2a9c7285a1b334e2e8458"
  },
  {
    "url": "img/image-20210129135538068.png",
    "revision": "ad63c71ef3ed51a1a4930f06d9bdefc7"
  },
  {
    "url": "img/image-20210129135751438.png",
    "revision": "0dee5efeb651d1dca54f41fcd3e3c396"
  },
  {
    "url": "img/image-20210129140640775.png",
    "revision": "8cba2894c7283cc3a0e8f1463c78b6a5"
  },
  {
    "url": "img/image-20210129142956755.png",
    "revision": "0db26f8275881a079d032c99c649251a"
  },
  {
    "url": "img/image-20210129155441598.png",
    "revision": "cbb0ced3c5945c1a0089eb67fc85698f"
  },
  {
    "url": "img/image-20210129161702286.png",
    "revision": "3a4623cc2b6b34f1faa574abfcbd83c0"
  },
  {
    "url": "img/image-20210129162024832.png",
    "revision": "b759f6829bdf000ac7b63771f9aa6ea8"
  },
  {
    "url": "img/image-20210129162321495.png",
    "revision": "12748ff21a0b6c4952de2014996525dd"
  },
  {
    "url": "img/image-20210129162405185.png",
    "revision": "772a4877ef8df80fa6a9ff5813697f48"
  },
  {
    "url": "img/image-20210129162539162.png",
    "revision": "743a4d52ada335335e431e6abe87d7a6"
  },
  {
    "url": "img/image-20210129162826266.png",
    "revision": "e125e5bc637950d78f65c9a10d2ddcfe"
  },
  {
    "url": "img/image-20210129162922223.png",
    "revision": "843826fab6f2912648d87738b61d47dc"
  },
  {
    "url": "img/image-20210129163211931.png",
    "revision": "1d09cff0da12e2235e153626e200bf97"
  },
  {
    "url": "img/image-20210129163437040.png",
    "revision": "826aefa2f27fd0ef4601938d1c1a1d0a"
  },
  {
    "url": "img/image-20210129163849074.png",
    "revision": "82b9f51b13313a28c91e38cc45151a70"
  },
  {
    "url": "img/image-20210129164114910.png",
    "revision": "538b781d81d3da1e01c372985a4391d2"
  },
  {
    "url": "img/image-20210129165038355.png",
    "revision": "e10888c3fb09354ada19d83a6c309296"
  },
  {
    "url": "img/image-20210129170344857.png",
    "revision": "3fa8db244e439b9518d073604c734f4c"
  },
  {
    "url": "img/image-20210129171048434.png",
    "revision": "3244d5050202d1b4e6718cd5ae3d2f98"
  },
  {
    "url": "img/image-20210129171254341.png",
    "revision": "fe68079375ee9f9a5ca94a81b03c44a4"
  },
  {
    "url": "img/image-20210129171700329.png",
    "revision": "3769759679c3e57852e9a571ffa8579a"
  },
  {
    "url": "img/image-20210129184224647.png",
    "revision": "b9a4b205a02632aaf5c1aaf6cef006e1"
  },
  {
    "url": "img/image-20210129184927274.png",
    "revision": "a32bb9929756ea5be68973adc564147b"
  },
  {
    "url": "img/image-20210129185440810.png",
    "revision": "6168fd4ac96ad715b6e75f054c16979f"
  },
  {
    "url": "img/image-20210129190037314.png",
    "revision": "94bf5102ffaa3910ea61c10405cddec7"
  },
  {
    "url": "img/image-20210129190146333.png",
    "revision": "20aaee6026569aeac0e9ccad76acf6c7"
  },
  {
    "url": "img/image-20210129190522929.png",
    "revision": "5e3b06970709ce97fb7910e89d3d62e2"
  },
  {
    "url": "img/image-20210129190704034.png",
    "revision": "26ef4f25fad6a555357171ca3d479547"
  },
  {
    "url": "img/image-20210129190708446.png",
    "revision": "26ef4f25fad6a555357171ca3d479547"
  },
  {
    "url": "img/image-20210129191344074.png",
    "revision": "50ffee74e9f4109635b8e1fa4c97a170"
  },
  {
    "url": "img/image-20210129191929502.png",
    "revision": "f0deba4d982be36c904e8c540c24de89"
  },
  {
    "url": "img/image-20210129192226404.png",
    "revision": "5da937f0d611facc4a9ab9e19b8c6ebe"
  },
  {
    "url": "img/image-20210129194038136.png",
    "revision": "229314dafb4fce753e64977295a5c737"
  },
  {
    "url": "img/image-20210129194517457.png",
    "revision": "bdbc73d5186a0cfa98651e613c52acac"
  },
  {
    "url": "img/image-20210129195455359.png",
    "revision": "354fc499f9c29ec70805dbf60c73f5c8"
  },
  {
    "url": "img/image-20210129201630129.png",
    "revision": "4ded1125a772d330916ea4718902c367"
  },
  {
    "url": "img/image-20210131115807187.png",
    "revision": "d57dd9891916058900d6b34efa0ab19f"
  },
  {
    "url": "img/image-20210131115832854.png",
    "revision": "a933c3650bf94f470ae27ede3e791431"
  },
  {
    "url": "index.html",
    "revision": "f0d9ee7297325123fb7200af77d6effa"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3c688aca2dee5f6af2c8c4a3f048eb8a"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "0020ebdcdd1d7128a4e89c4f39c3eaef"
  },
  {
    "url": "tag/index.html",
    "revision": "7577cef03c805e11aefc5b5631aa04cf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "991d3d87b0a20fa3d939d5caca62d9de"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4862dc2504a80ee4f5b210158b18ab67"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "7300f6a4b6e869323c37e90c92cfeada"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd42e5b130d2735fcd722d748fd991b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
