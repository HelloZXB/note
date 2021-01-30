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
    "revision": "65cf5de5092b725f51cab098328fd7da"
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
    "url": "assets/js/1.260b02e1.js",
    "revision": "d735e857a43bdf7a98854af355fa500d"
  },
  {
    "url": "assets/js/10.78ad1f63.js",
    "revision": "cbf8e9e4a1ea2e8cb73c816bf74671ca"
  },
  {
    "url": "assets/js/11.14d543a0.js",
    "revision": "099b687ac2d2e4b15469820ad8d64002"
  },
  {
    "url": "assets/js/12.eb864d05.js",
    "revision": "c4bec63062e2cec8b4027fcfdc56d79b"
  },
  {
    "url": "assets/js/13.fc1b1b17.js",
    "revision": "7813cdd63853b4ba71e8ec47a7cc5c1d"
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
    "url": "assets/js/17.c1063a41.js",
    "revision": "d51e84af9a7115db06df747a5be8e13d"
  },
  {
    "url": "assets/js/18.a9bfaf99.js",
    "revision": "e466c523e21dbadfff64702f778624f3"
  },
  {
    "url": "assets/js/19.86851baa.js",
    "revision": "eefc6a2d6caa3fba59ac0343b436d6f4"
  },
  {
    "url": "assets/js/20.0578285d.js",
    "revision": "807ad368e68a8df3710df179b3343bec"
  },
  {
    "url": "assets/js/21.c4f78d37.js",
    "revision": "ef878131181b9f71f87fea300f79a3d9"
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
    "url": "assets/js/3.66c235ec.js",
    "revision": "f5b739f097f42cde2a9eed068df900df"
  },
  {
    "url": "assets/js/4.5684e7c5.js",
    "revision": "9e7c3b44267b6fd8707b6dbea4b876c3"
  },
  {
    "url": "assets/js/5.9bc0f451.js",
    "revision": "7922a2da6ed14193896d1e8d34502036"
  },
  {
    "url": "assets/js/6.387841cf.js",
    "revision": "fd95c1aede520608ff01eb25d1ef51aa"
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
    "url": "assets/js/app.58e49bb5.js",
    "revision": "a2fa0dd3f5cbb048f305189d5b59ef37"
  },
  {
    "url": "avatar.png",
    "revision": "b369a9d017070e6277df8b4160a5c60d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "a282b618258c99b53f2ed1f8c1feece9"
  },
  {
    "url": "blogs/server/java/092101.html",
    "revision": "8a73c50e27a6338a2d802579002ac14e"
  },
  {
    "url": "blogs/server/node/121501.html",
    "revision": "306611e7ddb0704b53f633c37e7bca9b"
  },
  {
    "url": "blogs/tool/vscode.html",
    "revision": "15aa606ec3eba834c3134242a100914a"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "544907531033b82e59428859fc5bf91d"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "a935369c88b3c321c83846d99a4085a4"
  },
  {
    "url": "blogs/web/css/092101.html",
    "revision": "710cd177aa10e7a6799befe7d23a270e"
  },
  {
    "url": "blogs/web/html/121501.html",
    "revision": "a8649bb2ed267a637df2dd334a8cdb0a"
  },
  {
    "url": "blogs/web/javascript/01.html",
    "revision": "c5e3b9f807e2d5f6175331f1308696a1"
  },
  {
    "url": "blogs/web/javascript/02.html",
    "revision": "cf2ede96cb779d6e255a6f2e6a184bfa"
  },
  {
    "url": "categories/index.html",
    "revision": "ce6e4630d7861fe1e0ee59fa9e00c03c"
  },
  {
    "url": "categories/SERVER/index.html",
    "revision": "8e7f681af2161ee859a7978912baeb4e"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "8f3205121558c07471c87f31fb0910ed"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "4a2294fef6eb1b116ff8ca068ef79158"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "8039dce1cfe3590013ac3526249dde73"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "3364fe6c471040f3f66294d36a5b1e2b"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "d9ccc1a48b33b0a7a9afd2a5c786b5d1"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "286fe9fceccce60b239b4a7bff463814"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "e982e5a1c17a17237434a11547808c60"
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
    "revision": "9c649e8fd848f454f81e263ae8779ab9"
  },
  {
    "url": "logo.png",
    "revision": "7ab54dfe8fc5ab0ee1a3909838fd2bcb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "52de53401527ca0733757a99dfbfd1eb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4f0c7e60a4ed5c69c0516e0102d3e53f"
  },
  {
    "url": "tag/index.html",
    "revision": "8157d716749a0631e8a4825872eb23df"
  },
  {
    "url": "tag/java/index.html",
    "revision": "11447fa42cb5d0ebda0efbcfb4be4eb6"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "875dc04197a29340e979ea80524a2122"
  },
  {
    "url": "tag/node/index.html",
    "revision": "ea47c6af8e03e4aa0171b00185e077f5"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "1829128ef9bcbcee9bffbd7eee58345f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bafd40fa4221fbd7a135ee1a76aac55e"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "c05a15cafea082cb7a7156096cb903f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "1580751cbca5fdd7ba1715835f4bfed7"
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
