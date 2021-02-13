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
    "revision": "10a547964e40fbc58c2f2d165b7ac549"
  },
  {
    "url": "assets/css/0.styles.99e25c7e.css",
    "revision": "66c056d8ed3046c67cd75c481dc1d63b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.786d157c.js",
    "revision": "4dfaf3d7abcd94585e5623e80be41e20"
  },
  {
    "url": "assets/js/10.80d6aff2.js",
    "revision": "3b9b81a38736c3b99191e5185e79879d"
  },
  {
    "url": "assets/js/11.b9ef64a8.js",
    "revision": "3d8074ab78c96e72b54312ac26c0b184"
  },
  {
    "url": "assets/js/12.ebba0342.js",
    "revision": "b624ebd27788e70940e3dec2275fe922"
  },
  {
    "url": "assets/js/13.c55286b1.js",
    "revision": "0f476d8650448baf1f09dafd1da5345a"
  },
  {
    "url": "assets/js/14.9b48c783.js",
    "revision": "2b83de9d77d4a6a6ddf8d46429dc0e1b"
  },
  {
    "url": "assets/js/15.a42181c4.js",
    "revision": "92d939f9216594c9125cac841c5194b6"
  },
  {
    "url": "assets/js/16.221aca20.js",
    "revision": "3b9c86eeb51f47f2713781e25053ce10"
  },
  {
    "url": "assets/js/17.f34bf29a.js",
    "revision": "a611b177bdb49f3fc6755bf656d3b9cc"
  },
  {
    "url": "assets/js/18.70f45717.js",
    "revision": "3d843a20eb47e49160dab3651b73ba4e"
  },
  {
    "url": "assets/js/19.1b413781.js",
    "revision": "7373254ad694bad880bcb0d570be9860"
  },
  {
    "url": "assets/js/20.ef798523.js",
    "revision": "5facf69cf51c1555c12048b6634d3026"
  },
  {
    "url": "assets/js/21.6161ee54.js",
    "revision": "f9d493b68b8a17c1b8d1270409d732bc"
  },
  {
    "url": "assets/js/3.99fe49fd.js",
    "revision": "8442f80747c0873925c1a38a67ef81a9"
  },
  {
    "url": "assets/js/4.e9e0b2be.js",
    "revision": "efe8317d7e3c00a5bd921cbb95ca8541"
  },
  {
    "url": "assets/js/5.b731a247.js",
    "revision": "d64a34c331ba73b066f6c496cd9305fe"
  },
  {
    "url": "assets/js/6.efc21822.js",
    "revision": "a02ea2afe14f68ae3ba96661491648e7"
  },
  {
    "url": "assets/js/7.c19b9d56.js",
    "revision": "694d9dfd17afe7fdf1dcdfc16ce74030"
  },
  {
    "url": "assets/js/8.746e6cb1.js",
    "revision": "d18587b605ed5cfe6df3d24e2f689697"
  },
  {
    "url": "assets/js/9.270a91d4.js",
    "revision": "2662c12ff19953e2bd117c3b9a052a7b"
  },
  {
    "url": "assets/js/app.b67be20d.js",
    "revision": "4761863c60892182a0e0664348fd9e44"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/20210131.html",
    "revision": "21ac2c9fc3927b3b60b5a296c44a8343"
  },
  {
    "url": "blogs/essay/20210210.html",
    "revision": "bb2de711c166c96c6babe9a9a9ae69fd"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "e186e8134f2e95a39f50057df4f8df5f"
  },
  {
    "url": "blogs/recording/20210131.html",
    "revision": "9728eb0c02a99cbfad702e00471fd401"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "74c376d7e946453f71b6ad01eaa7d2e3"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "0b0014c9e23ff02b5b575b356eb989a4"
  },
  {
    "url": "blogs/web/vue/20210209.html",
    "revision": "3867406c87872b950cff5156ee8a4e7f"
  },
  {
    "url": "blogs/web/vue/20210213.html",
    "revision": "266af4c5eb934afb4ae112c021e78d63"
  },
  {
    "url": "categories/ESSAY/index.html",
    "revision": "3a30e7829161623cc4e1a716e7377646"
  },
  {
    "url": "categories/index.html",
    "revision": "0cb7b79016db78eb1bab4eab84708b67"
  },
  {
    "url": "categories/RECORDING/index.html",
    "revision": "7e84d6c500d3c37d4d859f2292f59efe"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "708f407024bbbafae0d3d825305fdcf7"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "e8f78640c5f9cd65f630b53c27b494db"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "7543fdaab229b4c8178ed4e4437a6b05"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "3e71470632bb76583af852eba63bb34c"
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
    "revision": "9169e84259fdd33e98e58cf0f4010793"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "11a9de1ca31f792be0eee8b3517675b4"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "7a68be23e2fdc5175a899ca319dee8b7"
  },
  {
    "url": "tag/index.html",
    "revision": "339c35b44357250bf7d8b916683d1d58"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9d3da85e158e164f13f9b1736c897d76"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "eede578d1ec70eb384c68f24c41d99fd"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "23023d90e802b1b12b05f9c9058745fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ed8772f891b13484eddd5163b7ea87f"
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
