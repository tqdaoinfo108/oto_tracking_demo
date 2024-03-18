'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/AssetManifest.bin.json": "ddd3257fb805b264e2dadba5b806e0f3",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/fonts/MaterialIcons-Regular.otf": "cce6012ec401c9b0c376ef2762921efd",
"assets/NOTICES": "6d47640153d09b74be800b12e818ca9b",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "047ad9cbabfaf799e72d75c133bab5c3",
"/": "047ad9cbabfaf799e72d75c133bab5c3",
"main.dart.js": "3cdcb1b2f23b54fa0267b85931fd5ecf",
"main.dart.js_1.part.js": "9ebd9f888f00e6dbf51ba6f39827cd46",
"main.dart.js_10.part.js": "3f7f2097cab2c489363e0b0bddf09ec7",
"main.dart.js_11.part.js": "e69c811facc8fa98bfa3851543eb9a16",
"main.dart.js_12.part.js": "0c8f175be8ae9ba12ad15d928b1e5e8c",
"main.dart.js_13.part.js": "c20b7a101b029410fde0960589c1ea48",
"main.dart.js_14.part.js": "86530c864d6c1a497ae6fab8096063c5",
"main.dart.js_15.part.js": "598dcfe2ca1632e1d7247b86160bbaa5",
"main.dart.js_16.part.js": "d84efa55107c71f5f8db048c0e8afbe8",
"main.dart.js_17.part.js": "9266461aa2f7f02c0069bef4995bdb04",
"main.dart.js_18.part.js": "c665f79c3e8550408fa8d1e66765e686",
"main.dart.js_19.part.js": "2b3a61ec19e557ecfa71706287557b45",
"main.dart.js_2.part.js": "a1c5aaaaed09437ba35e99b27bcf25f5",
"main.dart.js_20.part.js": "1aa3ab0685fac756b9ef00a701cf50a6",
"main.dart.js_21.part.js": "db6b7e909b2b630bc74336c774b48b53",
"main.dart.js_22.part.js": "c89dbb0b3c9cd5cfc4c73c7d53e26700",
"main.dart.js_23.part.js": "08268fbb093e2f176cd10fc6be6a68a3",
"main.dart.js_24.part.js": "15de038e840fb4637680eb78cd88be95",
"main.dart.js_25.part.js": "f9d67019e8d2882d0e7b5dd5ca1f56f4",
"main.dart.js_26.part.js": "2c4c1a6b05baf1edde290d520c4ac1d5",
"main.dart.js_27.part.js": "c60132a23a244ffd094d862a01f941eb",
"main.dart.js_28.part.js": "4cae22c8aaa9a7291f31eb32e853c41f",
"main.dart.js_29.part.js": "c961e8b4c8a8a1025763811a1f877ee4",
"main.dart.js_3.part.js": "b63e492498eaa69d2eb409f534dd12c0",
"main.dart.js_30.part.js": "867784db297e5dbd11f45feca6268ef5",
"main.dart.js_31.part.js": "f62245d10b1843921d18b471181af72c",
"main.dart.js_32.part.js": "97cc91ed25462723c17277e2f08c12d7",
"main.dart.js_33.part.js": "2a8aa62b57c146d9c076f7203af2e26c",
"main.dart.js_34.part.js": "08c191562bd9f8893f079c8ec0c5bdcd",
"main.dart.js_35.part.js": "992f0e8b9ecdf8fa33bbb55c0efc3558",
"main.dart.js_36.part.js": "c66e1b72f084d39303f341836698d305",
"main.dart.js_37.part.js": "ac78b36066475f2be584883c2008f987",
"main.dart.js_38.part.js": "7483debe4f91e0dbdb9186e4e8f06b85",
"main.dart.js_39.part.js": "c27e946a140a0c5fe4e9fa99d005949b",
"main.dart.js_4.part.js": "d538bca41025f604e737ddf4e8b01634",
"main.dart.js_40.part.js": "649c71ef39db094a44db0e2c776da30e",
"main.dart.js_5.part.js": "924f20a8101828e972e0fe4b585aae17",
"main.dart.js_6.part.js": "9a9e7d6b6d0862e9d224fee10412bb99",
"main.dart.js_7.part.js": "374afe2155a4731eae4b9531e60a4a50",
"main.dart.js_8.part.js": "8239f382d456acdf9f031c60e69fabf6",
"main.dart.js_9.part.js": "9dac5657e8e1092cbf519dc5ad2f77f7",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"splash/img/dark-1x.png": "b22585631f56d461044a7b4ca5af9528",
"splash/img/dark-2x.png": "dfa7a0cf806bc9cac42613159c3b16ff",
"splash/img/dark-3x.png": "b30fe827a16f3090f36f1c14a018a3eb",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-1x.png": "b22585631f56d461044a7b4ca5af9528",
"splash/img/light-2x.png": "dfa7a0cf806bc9cac42613159c3b16ff",
"splash/img/light-3x.png": "b30fe827a16f3090f36f1c14a018a3eb",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"version.json": "b3b87f9153d4406c14bc11865bbe1089"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
