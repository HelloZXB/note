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
    "revision": "1bac13d95567c34db9c081ec53ae7bf3"
  },
  {
    "url": "assets/css/0.styles.a4278afa.css",
    "revision": "acae98ac5ef2edd83836065c5f231c5d"
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
    "url": "assets/js/1.64e903ae.js",
    "revision": "94cdec26b30b0dfc3cab78c621ef0da9"
  },
  {
    "url": "assets/js/10.96178d33.js",
    "revision": "b0ff1ccc8637ac7dd6b657a89d309129"
  },
  {
    "url": "assets/js/11.c3b19234.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/12.f3e58b7b.js",
    "revision": "2f221573e801d2abd1c75dee95c7bcfb"
  },
  {
    "url": "assets/js/13.c26c1031.js",
    "revision": "44dbdd869e0997db968e413084778de5"
  },
  {
    "url": "assets/js/14.adb05e3a.js",
    "revision": "301e1525fd610d966ac71a362424010b"
  },
  {
    "url": "assets/js/15.63c9021d.js",
    "revision": "7f83be881ceaa90b23457417e84c1ee7"
  },
  {
    "url": "assets/js/16.1165265c.js",
    "revision": "2831999c7ebeb5fc182cb3970883c856"
  },
  {
    "url": "assets/js/17.2248e610.js",
    "revision": "50f97d9184b760d8bf8773fc07c4cc44"
  },
  {
    "url": "assets/js/18.c8a3e398.js",
    "revision": "99f88d56deddaf56a9fa2166e736994b"
  },
  {
    "url": "assets/js/19.41995ab3.js",
    "revision": "14ffc2ee79f9a7fc59de089d39345631"
  },
  {
    "url": "assets/js/20.bbfbdb04.js",
    "revision": "6fbf5ea20ccd4e20e05def34c31f84e0"
  },
  {
    "url": "assets/js/3.10d4c35e.js",
    "revision": "875bc58fb60738ccaa71cf120128e2db"
  },
  {
    "url": "assets/js/4.33aa54fe.js",
    "revision": "06366c1f93be2eb01d5317b371a7d1e0"
  },
  {
    "url": "assets/js/5.ed57c5b1.js",
    "revision": "71dbb52cd6585f14b9b5ecb2f18dc4a4"
  },
  {
    "url": "assets/js/6.91ed7f5c.js",
    "revision": "5064964d113a0ae721526dfb27795954"
  },
  {
    "url": "assets/js/7.86fbbe6c.js",
    "revision": "7fc9683746665118512d28ea00538536"
  },
  {
    "url": "assets/js/8.56a18805.js",
    "revision": "3313c81bc3e1d258dc87d692d55fc60c"
  },
  {
    "url": "assets/js/9.d6ad22ee.js",
    "revision": "147020f45f98300cfcc8b97ae7c959ef"
  },
  {
    "url": "assets/js/app.70b92f2b.js",
    "revision": "9d12d6bb4896ba4035a0cfdf5092dc66"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/01.html",
    "revision": "999e203490635c77c28d030ee4f14997"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1e9c55c87ebeb1e26e79c2588477c5c0"
  },
  {
    "url": "blogs/other/reward.html",
    "revision": "471c30142ae07c0875ab05e832bd358a"
  },
  {
    "url": "blogs/recording/01.html",
    "revision": "14c5043dd39bcb838432ed3374a24f29"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "2fb3f12acec1066141636a8f4b5100f5"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "fe7234852b2e04696fb6dc5c962ec42c"
  },
  {
    "url": "blogs/web/vue/vue.html",
    "revision": "0a294ebae400a634328eb7c8464af17a"
  },
  {
    "url": "categories/ESSAY/index.html",
    "revision": "c3f54c98b9636d19962b661f04ab4d21"
  },
  {
    "url": "categories/index.html",
    "revision": "31a4aca9720ed3fd8b7b21c62bd99a35"
  },
  {
    "url": "categories/RECORDING/index.html",
    "revision": "c753e5654768d6581e96e5c3f00be68a"
  },
  {
    "url": "categories/TOOL/index.html",
    "revision": "0bc472b67f2901f112932d0aef778992"
  },
  {
    "url": "categories/TUTORIALS/index.html",
    "revision": "37b690fbef6dfd9c6bcab60acf9cbbb3"
  },
  {
    "url": "categories/WEB前端/index.html",
    "revision": "6620d3309a9cd392a36e03d08c3f5f18"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "7a3215e2ef5891e5264a432d8c86620c"
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
    "revision": "ba74f510498be5c04238a34d94a3b95f"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "6f34301f4ef4d172c151fb416c2bf2a9"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "14c20c5d6c2270faf94186dd540b3a43"
  },
  {
    "url": "tag/index.html",
    "revision": "39fb26ce9697063847251aeb9f1ed080"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ae16143d0bf386fcacda168bc7f88ff3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d984b1d2210e55a1350a3ff2be69e21a"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "656ba9b6495b349ce37bfd396d6bc1a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c3f03e7cc8613290a2bb2a7350c390c"
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
