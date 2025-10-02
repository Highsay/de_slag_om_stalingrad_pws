'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6974d72ee84dd207bccb1a4d3dbb8d37",
"assets/AssetManifest.bin.json": "37d91b341c26504b3f9f75ee853efc0a",
"assets/AssetManifest.json": "d2679db7f77d5a4f55fbf47cadac7157",
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
"flutter_bootstrap.js": "3ef3b5277041b93e4184a889fb781ab4",
"icons/icon-192.png": "b82f85b9a865378b13c5cf8d9378c006",
"icons/icon-512.png": "f60599774b704de91719b863d5439504",
"icons/Icon-maskable-192.png": "9db22c05c544eab5ec1160a7d0eca5fb",
"icons/Icon-maskable-512.png": "59dc3b8b855a82c553239407b07c9ddf",
"index.html": "f9c7969d7b93d720a86f0baabbd2fbfa",
"/": "f9c7969d7b93d720a86f0baabbd2fbfa",
"main.dart.js": "2afe36ddd3e339b2106183a79ca8a5f6",
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
