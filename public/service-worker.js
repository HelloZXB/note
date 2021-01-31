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
    "revision": "68609548ec8152b557bc5f9610d6ab36"
  },
  {
    "url": "assets/css/0.styles.97b7072b.css",
    "revision": "3944e824994c6669eb210d5d559421ef"
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
    "url": "assets/js/1.451db0fe.js",
    "revision": "67ffb7a8a1c64f5a9e04364b864d2ba0"
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
    "url": "assets/js/12.a471b7a2.js",
    "revision": "d4c0c3bc05ac5a6fd4936c6b84c265be"
  },
  {
    "url": "assets/js/13.2b85fc4f.js",
    "revision": "ef06eaef59dcfdae4eaea997f76dcd34"
  },
  {
    "url": "assets/js/14.d36f091d.js",
    "revision": "46eba9e21910973d62106e3a1a1037a6"
  },
  {
    "url": "assets/js/15.ba2d9528.js",
    "revision": "15c2a11c1672b479ff1ab018e049c535"
  },
  {
    "url": "assets/js/16.0bb5dcfe.js",
    "revision": "1db9581e757dc0513b5d623ea81eeb8a"
  },
  {
    "url": "assets/js/17.ce47f304.js",
    "revision": "6d262ac863a71f428ab47757393e5d8e"
  },
  {
    "url": "assets/js/18.b585a6ff.js",
    "revision": "b4bcb85ddc06ab812fc8fd131ff20057"
  },
  {
    "url": "assets/js/19.3ea7d84d.js",
    "revision": "7dc4880b7bb2c3067a3ee0654a085b3f"
  },
  {
    "url": "assets/js/20.de998b92.js",
    "revision": "8528e5ce683a358c5aec01f915bf1279"
  },
  {
    "url": "assets/js/21.0fadc5a8.js",
    "revision": "24eda688846887d6302cd556cabc22f2"
  },
  {
    "url": "assets/js/22.3e3438f3.js",
    "revision": "0eba316976f8122e342ba293820e6fe5"
  },
  {
    "url": "assets/js/23.6ca2d59a.js",
    "revision": "abec999d78048af0e79e1f28db5f5f24"
  },
  {
    "url": "assets/js/24.44418880.js",
    "revision": "a57c93ad259f2e1642b3fd2130c1aa02"
  },
  {
    "url": "assets/js/25.13582e68.js",
    "revision": "711caf0fb49b2426eddd276b5db839c6"
  },
  {
    "url": "assets/js/26.bf38e956.js",
    "revision": "2f6ca1c58da4122856d90ec77875c207"
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
    "url": "assets/js/8.ee411cb1.js",
    "revision": "b4523a65295978afbb21cae50627256a"
  },
  {
    "url": "assets/js/9.46bf7d12.js",
    "revision": "18a5659784bb0f53d4bcef6dd4f84b8a"
  },
  {
    "url": "assets/js/app.b06c0332.js",
    "revision": "ef68d37b1587464d71d23201682decbc"
  },
  {
    "url": "avatar.png",
    "revision": "b369a9d017070e6277df8b4160a5c60d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b7a0d6138fe1632c582976431c98d1d6"
  },
  {
    "url": "blogs/server/java/092101.html",
    "revision": "6208393ea8790fff8e228e571ebededb"
  },
  {
    "url": "blogs/server/node/121501.html",
    "revision": "bd98bf8284020c130047408f66d6c0f6"
  },
  {
    "url": "blogs/tool/vscode.html",
    "revision": "6f2e82a833cb05a95761977990188e34"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "6a67df1072f17f6e884b049ade0a1294"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "d0b02a1605443e7270d8da8e35c129fc"
  },
  {
    "url": "blogs/web/css/092101.html",
    "revision": "054eb62c3f4af3c911116b29a69d9a3f"
  },
  {
    "url": "blogs/web/html/121501.html",
    "revision": "ccae9538cc9be75d4018be795fe5e430"
  },
  {
    "url": "blogs/web/javascript/01.html",
    "revision": "5cb8317f8f00450a415a75dcb0e28c6f"
  },
  {
    "url": "blogs/web/javascript/02.html",
    "revision": "0cf020c1bf892ffa4fff75f8c7b8375d"
  },
  {
    "url": "categories/index.html",
    "revision": "1c2ced54ca8f4f5b503e78b6bde528a1"
  },
  {
    "url": "categories/SERVER/index.html",
    "revision": "295235ca7d51e07a54c3fc007063bdc8"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "7127138bed5f0ad61d05eb317b0a056f"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "c2c1c034febf09756edb01b380c13c05"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "6744c78ec98aefdc3f21d2a1fe9b3859"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "08057e8097d554ba741f8423a7707c69"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "8f49f873029130ba8bf2d26c56131095"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "eaf1ca57c570466ec3545102e8addeb2"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "eb7f756dfa16b18c1f36a0c05a3533b6"
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
    "url": "index.html",
    "revision": "e6dfff52f553276cf2ce28d20dcad2f7"
  },
  {
    "url": "logo.png",
    "revision": "7ab54dfe8fc5ab0ee1a3909838fd2bcb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e3be8c3ae97120e92a8ca8fd116fa43b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7e7836246340edcbdcad3a085f94ddf6"
  },
  {
    "url": "tag/index.html",
    "revision": "86dd89bd41fd182c0f908d5de385c943"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3cae69363b916eb3c5fd2feab51e0500"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "0fe61f3f60950505addd0ed8cd67a34b"
  },
  {
    "url": "tag/node/index.html",
    "revision": "e13df96d7f5204447e80f88320a33f7f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0332ea7186e81712403e61221c3a5903"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "eb916c433c30c6969bf88208f23ff71a"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "0573841640e7909c2cfa7b13ebe35b6f"
  },
  {
    "url": "timeline/index.html",
    "revision": "28828b122c4d4c1cdd296318099464d1"
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
