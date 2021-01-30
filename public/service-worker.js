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
    "revision": "0184621f45ea6f3eb6acedfe59f1826b"
  },
  {
    "url": "assets/css/0.styles.57131ae0.css",
    "revision": "90c283463ffb97f208f41713410bb42e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.8b19e94a.js",
    "revision": "749ca285be3e3e6ec273cb4461e7d8c9"
  },
  {
    "url": "assets/js/10.322150dd.js",
    "revision": "b0480eee6690d6ffe7876bd537ff783c"
  },
  {
    "url": "assets/js/11.14d543a0.js",
    "revision": "099b687ac2d2e4b15469820ad8d64002"
  },
  {
    "url": "assets/js/12.805cc220.js",
    "revision": "2eec302a97b031c176d7197130b0a9cd"
  },
  {
    "url": "assets/js/13.a3f371d3.js",
    "revision": "465deb5928e42df8d9764d80d174eb3a"
  },
  {
    "url": "assets/js/14.936510e4.js",
    "revision": "c30cbb82f1f2f26a039d01f4fb21d0df"
  },
  {
    "url": "assets/js/15.26476cdc.js",
    "revision": "ce1ffb89653b774d262fd860d28ea329"
  },
  {
    "url": "assets/js/16.d0d1ccd2.js",
    "revision": "5350b5dea94b10cb7725e0f0cd6c1ee6"
  },
  {
    "url": "assets/js/17.e064422a.js",
    "revision": "7c364706b7d971795d5ca0d184019ed8"
  },
  {
    "url": "assets/js/18.a9bfaf99.js",
    "revision": "e466c523e21dbadfff64702f778624f3"
  },
  {
    "url": "assets/js/19.7411c61e.js",
    "revision": "407a843ecdefb2888e158a46b36d205a"
  },
  {
    "url": "assets/js/20.8be151bb.js",
    "revision": "6def223024583f736254c44316e7128f"
  },
  {
    "url": "assets/js/21.e416872e.js",
    "revision": "c000631402a507a9b92f4a89ab79d4b8"
  },
  {
    "url": "assets/js/22.ba64a757.js",
    "revision": "d34826c45a952417a0df84af9d9f4619"
  },
  {
    "url": "assets/js/23.1863a1b2.js",
    "revision": "6b0cb2203628328dbaa2b688fad5bcee"
  },
  {
    "url": "assets/js/24.7711a885.js",
    "revision": "92249d25b0818b66f53c0fc247054ab8"
  },
  {
    "url": "assets/js/25.95d8b5ab.js",
    "revision": "ba0e759d4123aa854d3ba611bb961f11"
  },
  {
    "url": "assets/js/26.0b3e7b8e.js",
    "revision": "bd45f46a422e1f0186c378f8e26bc1cf"
  },
  {
    "url": "assets/js/3.d4a41ea2.js",
    "revision": "b31c38f87208b110647b2dabc2a085ec"
  },
  {
    "url": "assets/js/4.17a87822.js",
    "revision": "99ec7096c024a5e36f109227e9dce8f6"
  },
  {
    "url": "assets/js/5.09a678d7.js",
    "revision": "44f37ceb81347dd0dbf6a3a18f44d920"
  },
  {
    "url": "assets/js/6.7c54b192.js",
    "revision": "eb335c44a13bee8d58a1a0af8db1177b"
  },
  {
    "url": "assets/js/7.09034cce.js",
    "revision": "9f0211b2243a19b2116fb155b6b31825"
  },
  {
    "url": "assets/js/8.ace9b07d.js",
    "revision": "a2c13040aea8bf1b0b19d0887de0a934"
  },
  {
    "url": "assets/js/9.90291572.js",
    "revision": "01e2625ac728be2d5f725578a9dcf1c7"
  },
  {
    "url": "assets/js/app.5d08aa42.js",
    "revision": "8826d953ce95d167129f231bedd722df"
  },
  {
    "url": "avatar.png",
    "revision": "b369a9d017070e6277df8b4160a5c60d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "4a06f2a1b13db26bc7dc447c596381aa"
  },
  {
    "url": "blogs/server/java/092101.html",
    "revision": "a46a5a30db019d5349a7e96530399289"
  },
  {
    "url": "blogs/server/node/121501.html",
    "revision": "14635ecd589304e6bc1d3e5880ef26be"
  },
  {
    "url": "blogs/tool/vscode.html",
    "revision": "b66b84d0c3bc9594df30e93d3b7e452a"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "e34716a674fa5a1d71e6abf48f2d3eeb"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "0eb2ae598fd0a83f1b410706117da988"
  },
  {
    "url": "blogs/web/css/092101.html",
    "revision": "55da904b80d37ca900437b9383b833c7"
  },
  {
    "url": "blogs/web/html/121501.html",
    "revision": "8cceb7e289b57c23aba9fa08c0613016"
  },
  {
    "url": "blogs/web/javascript/01.html",
    "revision": "2b6dc47e151245cb77576107ccdcd37d"
  },
  {
    "url": "blogs/web/javascript/02.html",
    "revision": "9da5a03104fed92637118194768e67d6"
  },
  {
    "url": "categories/index.html",
    "revision": "196ce6b19138241dfb90d89f300315b7"
  },
  {
    "url": "categories/SERVER/index.html",
    "revision": "6c63818a63794450a1c99981cef676ea"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "8fa1a6ef4ea09acd062348546211b634"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "39f4e1ba32b5137aa3041a6fc3d7a506"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "a818f9a7758008aa186861504348e3dd"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "5ef67c05dfa744cbc56b0b055fd19e60"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "3dd05ba6ddcc23175c3aca270b190fcf"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "56cabdc531307b62a8b0cb4a0906ee3b"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "f95defccc5740a1f61d1ca98b677921f"
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
    "revision": "f7055b77587ac8c179eceaf211eb6f0d"
  },
  {
    "url": "logo.png",
    "revision": "7ab54dfe8fc5ab0ee1a3909838fd2bcb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d9f4e5dffc4e9c36e9ec3a3457c3f3a1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "54083ecd68bedb4a7015d10fed5fef35"
  },
  {
    "url": "tag/index.html",
    "revision": "ba29de65dac5bb3f189421f55729b9b4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "2879f55f408a814042a6d3854c1c0746"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "602f0ef41a6ff86c227c8d85b5cb145c"
  },
  {
    "url": "tag/node/index.html",
    "revision": "e9290a5f4c2e121b4b04691cb7997dd7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c7c34c4662073c0b5f19e621d1308cfb"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2693b208322fc45af16d027fc0415ab2"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "1e201917583737143eeb62ffa1d1f763"
  },
  {
    "url": "timeline/index.html",
    "revision": "0315739da489801d2636c53e8d631f9c"
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
