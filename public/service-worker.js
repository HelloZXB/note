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
    "revision": "93a437d84386e36ca44c64f57c5b581e"
  },
  {
    "url": "assets/css/0.styles.594b2955.css",
    "revision": "82024ee20ae241895a55c8d35dc82d82"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.101887ac.js",
    "revision": "a481b231136c4f668d5088e90f70b20c"
  },
  {
    "url": "assets/js/10.db10e000.js",
    "revision": "7fa240497341094d10eaab28697578fc"
  },
  {
    "url": "assets/js/11.64e2e992.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.df8c0f94.js",
    "revision": "39873aeaf4f272517c2fe4b987034478"
  },
  {
    "url": "assets/js/13.9d2b6963.js",
    "revision": "168554125c946c6c4cc028fca2e86294"
  },
  {
    "url": "assets/js/14.e2da9357.js",
    "revision": "749546f278f49da5471003fa0068ecac"
  },
  {
    "url": "assets/js/15.98029075.js",
    "revision": "7e466ff3ce5562a33b6d600df464721f"
  },
  {
    "url": "assets/js/16.84a7d654.js",
    "revision": "4d3ebd6ab32dc2b2ee387eed39096818"
  },
  {
    "url": "assets/js/17.a28ad658.js",
    "revision": "e1deb66f3f6bf0c5303ce46f51f9e5cd"
  },
  {
    "url": "assets/js/18.736469fe.js",
    "revision": "cc0d103ed98516577b596ff3664c2a2a"
  },
  {
    "url": "assets/js/19.8c6d89d5.js",
    "revision": "a512e4337d7734cf0eccb906c8456bec"
  },
  {
    "url": "assets/js/3.cf7d42e2.js",
    "revision": "0fbdeca8201abe23d16826b6c1cf819f"
  },
  {
    "url": "assets/js/4.65cdcd50.js",
    "revision": "26186ba4611b6d6e222878f1c502359a"
  },
  {
    "url": "assets/js/5.f1a01b71.js",
    "revision": "b58dfad1324ae52db79c9796a3fa92dd"
  },
  {
    "url": "assets/js/6.d5e6872c.js",
    "revision": "1a6f1cfa96d3c6fd57e6eb5d3042a39f"
  },
  {
    "url": "assets/js/7.df8e4c47.js",
    "revision": "f9566498112e7645b8bccae186a2017e"
  },
  {
    "url": "assets/js/8.8ffae7fe.js",
    "revision": "b428cacaf09c87d1feeb0e56bd39b5ef"
  },
  {
    "url": "assets/js/9.878c86b4.js",
    "revision": "62ba42d9f832a12273f084cd295ac201"
  },
  {
    "url": "assets/js/app.3f005e18.js",
    "revision": "51e4174758025373684a5cd1b68e08c0"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/01.html",
    "revision": "c2a6be6a2392ae731a8d317341ec7035"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "6ac303e8e9a676c77a33bc30e433c0f8"
  },
  {
    "url": "blogs/recording/01.html",
    "revision": "0c6b0423feee2106fa4103361c4f9fdb"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "6137185958efa2fac8134d371cfafe7e"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "fea345ebe19f640661c1a9e7d758e97c"
  },
  {
    "url": "blogs/web/vue/01.html",
    "revision": "7e5b35a41914dc381c2ba2e4f602df3a"
  },
  {
    "url": "categories/ESSAY/index.html",
    "revision": "c97f92ec3db57ca3622a53df1ec1b1cc"
  },
  {
    "url": "categories/index.html",
    "revision": "d4920a4a6898a234ef913b0f506dd1b2"
  },
  {
    "url": "categories/RECORDING/index.html",
    "revision": "829d233f939875846b8b5caeb368e26f"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "9346903cbc0b4d41d6b0188431b7526e"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "79f5f73d0d3c874c53a985be774d2153"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "54882baae3d5b5361013135d8208cc30"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "60e5bdc6ed1293a9c3b86164f7f31081"
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
    "revision": "b6a334bb6fde6b0d36278a2e7231c666"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "c5e88ba35e981f422203e9e1fc44f811"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "34beb9763b4f00c9563b07428ee5e46a"
  },
  {
    "url": "tag/index.html",
    "revision": "163c88ba9e51a7f82a91993aa545fd3f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "aba896a865915163a5a210b4ed9fb234"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1796db2ac8eafe547730775756d66b0f"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "b7ac97a777dc55aaf3dc613a0f2d3ce3"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e0521e534f45d023d549c71e426df2d"
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
