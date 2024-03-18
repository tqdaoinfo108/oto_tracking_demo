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
"index.html": "fab53ecf2c2a9a0d5d6dab50faba2244",
"/": "fab53ecf2c2a9a0d5d6dab50faba2244",
"main.dart.js": "ef0060bf84e6c4694d8294ab454bccbc",
"main.dart.js_1.part.js": "ca55593e0c4d06cb35b8976cf0c83dd3",
"main.dart.js_10.part.js": "b7b5848cf8b9375d4404cb3261d48d00",
"main.dart.js_11.part.js": "cb73d1aaa93d0e12aac546a956181912",
"main.dart.js_12.part.js": "94af36a51f539c3afe5b0a913ebb01c0",
"main.dart.js_13.part.js": "ae30f0a4cd3b619f422b14b4741288e7",
"main.dart.js_14.part.js": "fbeab2e289281f27ea4dd4e8ab5d8f5d",
"main.dart.js_15.part.js": "598dcfe2ca1632e1d7247b86160bbaa5",
"main.dart.js_16.part.js": "e8832377a3101e961414088ce164c33a",
"main.dart.js_17.part.js": "439ae118215107a27cfe561d15bc0a11",
"main.dart.js_18.part.js": "b7adf484a5805e7ebbf0d89c19a99ff6",
"main.dart.js_19.part.js": "4fc6195d56bf38eb2ee08ebdc2af8459",
"main.dart.js_2.part.js": "bf9787bab1c953e5c87f50ab2d204a61",
"main.dart.js_20.part.js": "1661e53f325179d72bc314e04d838630",
"main.dart.js_21.part.js": "97910e006e847d0b97aa31d42c4aba76",
"main.dart.js_22.part.js": "7a86ff6a2f5bf31fd64e6a7ee03a1adc",
"main.dart.js_23.part.js": "7477ff487a3bebb6cae4046c65c179c6",
"main.dart.js_24.part.js": "c7c6980205ac3027e585dcff24a55c62",
"main.dart.js_25.part.js": "60a2a27aa219557430d79c2f45a8b659",
"main.dart.js_26.part.js": "a70fa798fb48e59625606b5c1816f601",
"main.dart.js_27.part.js": "e34623d38a6f19cbbca5b5fc5f760fa5",
"main.dart.js_28.part.js": "fdf9c6fd1db96b7e52dcb5c84008cadd",
"main.dart.js_29.part.js": "04d7204ae8c616bc8076c6aa391c0332",
"main.dart.js_3.part.js": "e7a141413dd15d8206b7fc84cf05cb1c",
"main.dart.js_30.part.js": "4fd97cb013ce202014154612c7b67b92",
"main.dart.js_31.part.js": "5fcd3faa41b2a073b60876ee0ac1271e",
"main.dart.js_32.part.js": "dd0e0ca5b031a82e25a8da72ff905a0c",
"main.dart.js_33.part.js": "63bf84809c083fa6663a1f8650cbc124",
"main.dart.js_34.part.js": "a3d131531e6ed7178daf0868ab87dacb",
"main.dart.js_35.part.js": "52048ae96a17d5a2ea3282ce14b896d9",
"main.dart.js_36.part.js": "cee6e746e9d65a9591c2b52306090985",
"main.dart.js_37.part.js": "63d548f11b3c89d5f1745aa90f102e0d",
"main.dart.js_38.part.js": "dc6f2d5dda896b4eba33a2541cce55d3",
"main.dart.js_39.part.js": "acdc4e9da7398e66ef83c721e0907bf2",
"main.dart.js_4.part.js": "9a25140b9b3a6a5cbab59a0ed4843f8d",
"main.dart.js_40.part.js": "7e79c46a765009a4f9e84f10cbeb76e4",
"main.dart.js_5.part.js": "21be7903d85ee0f5152ec025706efa09",
"main.dart.js_6.part.js": "58531dccacc6ce8649cb0542eb4153e7",
"main.dart.js_7.part.js": "8b48833058415dcb8fc131c041d97cdf",
"main.dart.js_8.part.js": "505cb98a42c335f75d8209db74ff0c22",
"main.dart.js_9.part.js": "7917514f43409275e59492c4dc379dbd",
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
