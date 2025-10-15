'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "04f147a361c7565e4043dd3b7b81a125",
"assets/AssetManifest.bin.json": "473c8ce2b75cd2135412866f9d25b7b1",
"assets/AssetManifest.json": "006252cefe9df10a32fe4245707f59b8",
"assets/assets/fonts/Pinkend.ttf": "ab3ee6f3d1c29cb57a631255b18adb86",
"assets/assets/fonts/Renasfi%2520Demo.otf": "8ce75586ea6aee1f77fa571ec1b6920c",
"assets/assets/fonts/SCRATCHL.ttf": "33c2f624b9f78f96667b34493be2d73c",
"assets/assets/images/back_poster.jpg": "1c1c8860cf7515adb87461f5a0b298ff",
"assets/assets/images/bookmark1.png": "ffa436f3b862ed3a6af79f60d924ccd0",
"assets/assets/images/bookmark2.png": "46969445ec1c803ac2bdf1bdc0cd20d2",
"assets/assets/images/building.jpg": "69055fdaa1174bad971f30eb3ff462fd",
"assets/assets/images/cover.png": "da225fdeb106f72b62ddceaae8f26f44",
"assets/assets/images/flag.jpg": "8d1cf04badb017f09ea0f19fcb7fa03b",
"assets/assets/images/inner_cover.png": "12d87b9abe75bf2ebe84f238a1d1a8f6",
"assets/assets/images/paper.jpg": "80a84237302c54ee309a0ab44ce585d6",
"assets/assets/images/poster_1.jpg": "43efbb06ca76c4735ca91e0d03eca517",
"assets/assets/images/poster_10.jpg": "7a7d7cf469ffb229381a1ae24c41cce2",
"assets/assets/images/poster_11.png": "981e3e631ac0f3ea66e4b4b5986fc69d",
"assets/assets/images/poster_12.png": "0ad5db272eb380eea0df944742697e67",
"assets/assets/images/poster_2.jpg": "466db5e2cb8cc290fb44df0dc35c8aa6",
"assets/assets/images/poster_3.jpg": "5bcd36b1df833e2bd59318bd2ccfc23b",
"assets/assets/images/poster_4.jpg": "918c0011f89ec96224b0986f575cfb72",
"assets/assets/images/poster_5.png": "c14e29913f0c2044c8c326215e9382cc",
"assets/assets/images/poster_6.png": "220270b508f9cf572ff8ff140b9e4597",
"assets/assets/images/poster_7.jpg": "2f804dbe6b0296c95bc1136c887955ee",
"assets/assets/images/poster_8.png": "263e27ab6dff64bcfabe82da0528e2f7",
"assets/assets/images/poster_9.png": "b0861085b0d14d73f696890efdc6f830",
"assets/assets/images/soldiers.jpg": "f2ec404413ff204061f696066dab3825",
"assets/assets/images/strelochkauwu.png": "c131aa83d5f175e0d1aef3378caa0ca7",
"assets/assets/images/table.jpg": "896be848bbf6ab9b91adf6672188ea53",
"assets/assets/images/table_2.jpg": "a5416d19d2df15517e3cab7913d96fa9",
"assets/assets/images/table_scissors.jpg": "cff637dd08bb132d4f0974aaab300649",
"assets/assets/pages/page-01.png": "229896c08a8977b30223b4e089ce51b7",
"assets/assets/pages/page-02.png": "3dbb28db375c5aae6ee4f5fb566a33fb",
"assets/assets/pages/page-03.png": "ede262eb0f0042e3580eb66e7e422e39",
"assets/assets/pages/page-04.png": "f8b0354379f1cafe764ea9554daffd2a",
"assets/assets/pages/page-05.png": "fb7b0209341d5505367e20bdfeeab789",
"assets/assets/pages/page-06.png": "8e37f156eaed41009ae1e613fc8b1554",
"assets/assets/pages/page-07.png": "2474546f2e98ab0378ecfd2f2f6aaa7f",
"assets/assets/pages/page-08.png": "2a590caf2e20be543346c16712351fef",
"assets/assets/pages/page-09.png": "d4975148085cd79a3b4b1417938f99c1",
"assets/assets/pages/page-10.png": "78148a80f3eb2e690560e69aa6b1b2ac",
"assets/assets/pages/page-11.png": "802667707f969b86d2efb200c1b58fd9",
"assets/assets/pages/page-12.png": "75570ecfde94f9a29cf86354f280c7d5",
"assets/assets/pages/page-13.png": "9f4fe376ae88430f9844e0ce14d873a9",
"assets/assets/pages/page-14.png": "9cb434e4a33cc02e8641f89db440bd37",
"assets/assets/pages/page-15.png": "899364d9009a1932ee68fb9d765aa26b",
"assets/assets/pages/page-16.png": "694b275e7536840abb9e6fe7d40d5a53",
"assets/assets/pages/page-17.png": "6a7102b96595b578b29b61e309cf5785",
"assets/assets/pages/page-18.png": "7e391e3fc1c95cad5c516d398e8c5ede",
"assets/assets/pages/page-19.png": "9e05f4390e0be5a5e4311442eeed8f4c",
"assets/assets/pages/page-20.png": "e065931295e1310ea1f248afb2f81779",
"assets/assets/pages/page-21.png": "95d581983bd5177bdc7723bc2d271fad",
"assets/assets/pages/page-22.png": "a1393322a9cec48616500775db2cadb4",
"assets/assets/pages/page-23.png": "8adb57088dc31af63d12006aeb10713b",
"assets/assets/pages/page-24.png": "802d7228529e47749e3e5e22933144ca",
"assets/assets/pages/page-25.png": "9a41b11b0d5885187c63c8f29ef2a6a0",
"assets/assets/pages/page-26.png": "83c24363572228cd73811e4c90c1f3bc",
"assets/assets/pages/page-27.png": "b124329ec0ecda6ab21c51f3a1ec845d",
"assets/assets/pages/page-28.png": "ad63bb6b4a7ce1c16105f3a66124ac6d",
"assets/assets/pages/page-29.png": "3a555e02524065604b8fbbbd289b7eef",
"assets/assets/pages/page-30.png": "21e4bf5ea32ddc438fbf608a591712d1",
"assets/assets/pages/page-31.png": "e1fda0e3bbc4552a7652faf19a06f08c",
"assets/assets/pages/page-32.png": "ca645793c827d3d84214ae3552a16e29",
"assets/assets/pages/page-33.png": "cdc114867fb28794885090fc27c2044b",
"assets/assets/pages/page-34.png": "3e61af0e81c1e752af3075620fa02cf2",
"assets/assets/pages/page-35.png": "37d88786fef2b9b73859e346cf772a3b",
"assets/assets/pages/page-36.png": "0766faca3d9e77907975523957a9f0b2",
"assets/assets/pages/page-37.png": "a2cf31802519c38ec7b26a3508cfcb70",
"assets/assets/pages/page-38.png": "d6a55e140e54e7c0721d778dfae78556",
"assets/assets/pages/page-39.png": "86daedfe0d61c8a92760950d6ac99435",
"assets/assets/pages/page-40.png": "8825c11a45f4733dcd2555a7defbc82c",
"assets/assets/pages/page-41.png": "1bd7f94c1c3777e719e01a05ef352990",
"assets/assets/pages/page-42.png": "88519b2deb7a77985ab049459358bf98",
"assets/assets/pages/page-43.png": "5758e100bc0a5f7cb47d5c15e7f89aac",
"assets/assets/pages/page-44.png": "88f846df06374fc9557a932f492a5d40",
"assets/assets/pages/page-45.png": "d1b548980da04c6a63e10137c19488a4",
"assets/assets/pages/page-46.png": "f9b3f82ba1322143f489ecfbb9ad0c7c",
"assets/assets/sounds/book_close.wav": "48f17edd775de69d1f7910d3e75f9e36",
"assets/assets/sounds/book_open.wav": "bfc93d4f0f75b205c4d63619a15a8020",
"assets/assets/sounds/page_turn_1.wav": "859435e423455e052455a5ee35aaaef1",
"assets/assets/sounds/page_turn_2.wav": "13835f12076b065ec3149f4b97bc2469",
"assets/assets/sounds/scroll.wav": "4413af7764db440a115be3371446a253",
"assets/assets/sounds/scroll2.wav": "6ab3185e752ec3bf9b12d248e7b26d19",
"assets/FontManifest.json": "36a4ab6ae2b271dc42aa014ad73010d7",
"assets/fonts/MaterialIcons-Regular.otf": "ae2b98fe77544a0a7daeaabe5a108c14",
"assets/NOTICES": "f714291799cfb925d0b2563719fce01f",
"assets/packages/flutter_soloud/web/init_module.dart.js": "ea0b343660fd4dace81cfdc2910d14e6",
"assets/packages/flutter_soloud/web/libflutter_soloud_plugin.js": "fda499f4cf7725c740cf53d28b8970e5",
"assets/packages/flutter_soloud/web/libflutter_soloud_plugin.wasm": "cc369a6499c45bc7b647326179b31fa5",
"assets/packages/flutter_soloud/web/worker.dart.js": "2fddc14058b5cc9ad8ba3a15749f9aef",
"assets/packages/pdfrx/assets/pdfium.wasm": "d4f7ac5f1cb87453b04726dff0a88941",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "3611f8c6df2cd721ddbc1833f289e055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "02aff8dbcc662b94653ce2a9437d9151",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "655bf203a361c861b56db5f43d457ac3",
"icons/icon-192.png": "b82f85b9a865378b13c5cf8d9378c006",
"icons/icon-512.png": "f60599774b704de91719b863d5439504",
"icons/Icon-maskable-192.png": "9db22c05c544eab5ec1160a7d0eca5fb",
"icons/Icon-maskable-512.png": "59dc3b8b855a82c553239407b07c9ddf",
"index.html": "934dfc5925832ac3d006d0424b9289ca",
"/": "934dfc5925832ac3d006d0424b9289ca",
"main.dart.js": "4a6a73fdc64e3cea254fa1fa0b633ed7",
"manifest.json": "f5e4b90900996d60192572cfe7dbda24",
"version.json": "5812ef829f3c1ad1518168fb57189c9c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
