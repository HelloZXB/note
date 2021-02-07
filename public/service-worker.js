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
    "revision": "22b58cb5b5f3fe4640b801e22edad2c2"
  },
  {
    "url": "assets/css/0.styles.1800e38c.css",
    "revision": "eef9e968c725d72966137ab170b81840"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.f76597bb.js",
    "revision": "7c2b1c2327295103119934abcb5ebc55"
  },
  {
    "url": "assets/js/10.78abf93a.js",
    "revision": "ae213d42327dc035855372b50aa21bd5"
  },
  {
    "url": "assets/js/11.a7a7a142.js",
    "revision": "5c9ee27cb578a38c9a04d742622e9633"
  },
  {
    "url": "assets/js/12.cd0d4b93.js",
    "revision": "8f1e2e5cf3c0727229c5bb69d13fff07"
  },
  {
    "url": "assets/js/13.bf6258f1.js",
    "revision": "b8f591f3cd87c13526dda9a9896407cf"
  },
  {
    "url": "assets/js/14.eb137694.js",
    "revision": "3bf3abe15c07c68433dd4967bf6e46ac"
  },
  {
    "url": "assets/js/15.9e2f5c73.js",
    "revision": "e1fdcdaa2d429d956942bc0cd20cd13a"
  },
  {
    "url": "assets/js/16.49cb7289.js",
    "revision": "851617e2c74f734f9f834a76ea5b972c"
  },
  {
    "url": "assets/js/17.c81caa1f.js",
    "revision": "4e99389d542496eba399cbb5b62dab59"
  },
  {
    "url": "assets/js/18.b5e0c632.js",
    "revision": "3719f67fdd3f25dc76766fe43f3163f4"
  },
  {
    "url": "assets/js/19.f739954f.js",
    "revision": "87dce4fe02eeeb483c87d10aefa51a64"
  },
  {
    "url": "assets/js/3.abbe8497.js",
    "revision": "a3b2ac6ae761a3391770958813f04e8b"
  },
  {
    "url": "assets/js/4.6c07e9b2.js",
    "revision": "32413702a27049d40013b796863449c2"
  },
  {
    "url": "assets/js/5.7d215495.js",
    "revision": "a22067f53603c510172cb69e625fabc4"
  },
  {
    "url": "assets/js/6.e290ab58.js",
    "revision": "62ab613fb63a3b70cf284d1f371d24f8"
  },
  {
    "url": "assets/js/7.b7751cd5.js",
    "revision": "eab6e44b32adfefc15f1ca21cd654634"
  },
  {
    "url": "assets/js/8.3d7e30d6.js",
    "revision": "ed83108ed3832616cbe02268c0c9dac0"
  },
  {
    "url": "assets/js/9.2da64f99.js",
    "revision": "5066056de0a6df1b24987d1d75958987"
  },
  {
    "url": "assets/js/app.7a710b9a.js",
    "revision": "924481bb847b7dffbdf172924c46e064"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/01.html",
    "revision": "366a6f2d3f8892f54e9b61ff4cd34e6c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "68a1d2e3c86f4c605422bcd3ddc53893"
  },
  {
    "url": "blogs/recording/01.html",
    "revision": "126f4c531029887c43999f157febf4f1"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "2c5fd3a471981a7c92ef5b9a5f2ba1a6"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "ea17bfc1c1540166477f3296f3b3b8e6"
  },
  {
    "url": "blogs/web/vue/vue.html",
    "revision": "6e2590f456c06ea9607a3151879a5e91"
  },
  {
    "url": "categories/ESSAY/index.html",
    "revision": "b86f606c70d5e7f6500fe2d29f643c2d"
  },
  {
    "url": "categories/index.html",
    "revision": "ad59577be292035322178218d757d0f2"
  },
  {
    "url": "categories/RECORDING/index.html",
    "revision": "2b80113a26cab29fa24c68a739bbfd6d"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "73076c23551a9cb41c8c32ec8abd90e8"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "abc0e492eb7d309392e85d7353d8601f"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "7e537656e8e2928348a8e3931bb020f3"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "0b53790faca00068466afdfe5c3f141c"
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
    "revision": "abe445438b3c83d6cfb4d430abe3fa50"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "a49f873267db6e1b529047c5d7f71d39"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "8a556ad5ed2f142b2bfb9703ebc0ef33"
  },
  {
    "url": "tag/index.html",
    "revision": "57b170cbe89351f8f746b277a4a9732f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "50bbe23848fd579d091af236439ffad8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c6b9cb0da4e6304097f14c5d40b3aef2"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "8f5270cfd4b8326ca7f0f181ea938747"
  },
  {
    "url": "timeline/index.html",
    "revision": "469298225c16b5bc894f61233eba3802"
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
