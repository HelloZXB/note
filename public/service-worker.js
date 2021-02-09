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
    "revision": "c57e0421d3e47e426ad9bd1987281169"
  },
  {
    "url": "assets/css/0.styles.231a961f.css",
    "revision": "c6f6a0112eb115ed58a637f11bc56592"
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
    "url": "assets/js/1.09dedf9a.js",
    "revision": "83718a0771a48c922ebc1106dd556a16"
  },
  {
    "url": "assets/js/10.d5ab75fc.js",
    "revision": "9d531ff0a2b9a59b833490eec52ce50d"
  },
  {
    "url": "assets/js/11.78901252.js",
    "revision": "8d6e3ecf76e09905205596c703dd4c75"
  },
  {
    "url": "assets/js/12.e5ff0ffe.js",
    "revision": "d621d92c63616135c6a7c05568a93c76"
  },
  {
    "url": "assets/js/13.193b4a17.js",
    "revision": "f6ca84e48a82f81890fa128280e0c11a"
  },
  {
    "url": "assets/js/14.409e4e32.js",
    "revision": "9a14b2df72083dd2c62ee74b3f12579a"
  },
  {
    "url": "assets/js/15.de8f9640.js",
    "revision": "481cda79dacbf7f25fd48434eb0c5790"
  },
  {
    "url": "assets/js/16.b913add4.js",
    "revision": "cc8f4dc350a1ebfec0c400be755538ef"
  },
  {
    "url": "assets/js/17.9e2e7f49.js",
    "revision": "e3ba81497f5366875b401ada91fb58f3"
  },
  {
    "url": "assets/js/18.08520c0f.js",
    "revision": "4e9d43c703ea4efc8b312b55e0d57fcd"
  },
  {
    "url": "assets/js/19.dda43ad7.js",
    "revision": "d4632a4f720cc17551ba166649524f1a"
  },
  {
    "url": "assets/js/3.05f29a9c.js",
    "revision": "77f002a6db8ff2f37738a4584815c605"
  },
  {
    "url": "assets/js/4.915e6185.js",
    "revision": "8bff323b8ce610957ca65385ddee35fc"
  },
  {
    "url": "assets/js/5.05153da3.js",
    "revision": "75f9f39aa87c19b498c107ebb2055065"
  },
  {
    "url": "assets/js/6.760b4d53.js",
    "revision": "a9d7e8fda37e8bbc8466d89a74bb0dbd"
  },
  {
    "url": "assets/js/7.145137de.js",
    "revision": "a002f7e20650ca80b672882f2795428a"
  },
  {
    "url": "assets/js/8.cf6b9c9e.js",
    "revision": "32b109c6658d9f5aa695ad756f6e395d"
  },
  {
    "url": "assets/js/9.689773f7.js",
    "revision": "baf7b094894fc87d45d256257ec1ceb8"
  },
  {
    "url": "assets/js/app.6cec843f.js",
    "revision": "44f24dd9d16772068573f98093266628"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/01.html",
    "revision": "f3e84d6f44ae4923807c492ea03ac8bb"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "573e9a8d0a25d64547e9a3513e1f05ce"
  },
  {
    "url": "blogs/recording/01.html",
    "revision": "6e44e55fa71e48258ea23d33fd3e992b"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "bbc87ca42ad0e248aa9f895b2ab2a37a"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "54a51dd49f238c2e17044df380d3ee3c"
  },
  {
    "url": "blogs/web/vue/01.html",
    "revision": "3cc37a7c573842c26d7bf63733ecc7a6"
  },
  {
    "url": "categories/ESSAY/index.html",
    "revision": "c0a31a6529b08f15b451ce12d3e985c8"
  },
  {
    "url": "categories/index.html",
    "revision": "71ffee55ed317337ffb39423a6709ee0"
  },
  {
    "url": "categories/RECORDING/index.html",
    "revision": "b442100441308e02ad5442c4f1f9568e"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "aa2ba930c37e9b33718234df4a82abc8"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "4693939f4fee02ed3dc43b8f99d9c1c6"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "99304dc617e8ea474c2eb63b2b190f72"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "776c9e277d379020bd17a263e0e7a3a7"
  },
  {
    "url": "group.jpg",
    "revision": "ee7dc01a0328b9be70f9a499cdf7ac11"
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
    "revision": "13284b8cc7b519ebc6e17647d2c89dd7"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "08177abe2022f6a733ac38bcaaca639a"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "d321f7b9d8e47228b90d79ef3159defb"
  },
  {
    "url": "tag/index.html",
    "revision": "b17434ff34e330c13847dbb084c2cfdb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4f4521bc4152f0c0071df7221457b9e3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "196705f5fcbcc6daf4978c18b9b8af44"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "aae037b6ea650e13ff7a5596ad1e84fb"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c113adb4bb39af6dac60946258ad79e"
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
