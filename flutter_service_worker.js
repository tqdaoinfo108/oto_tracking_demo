'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dc9d04ca64fed9130131568d37ce784c",
"assets/AssetManifest.bin.json": "5daff00456af8d96cebe781290654cc7",
"assets/AssetManifest.json": "bff0a25bff321ebe1aad20ffb2116dbb",
"assets/assets/sub_source/index.html": "3aeb04ff805224f5cba870fb4be1806b",
"assets/assets/sub_source/test.png": "72073dd4c6ba9a8dda99210a63c5afa2",
"assets/assets/sub_source/test1.png": "22ebd2e84831efd3f751c3ce093cc3a0",
"assets/assets/sub_source/vite.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/FontManifest.json": "4e0e2525459c2fabcc76d5aab10dd996",
"assets/fonts/MaterialIcons-Regular.otf": "e56455fc51a73614c9eb357bdb68e41d",
"assets/NOTICES": "16d6dff0ad49291871dfaed11bb4d869",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
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
"index.html": "9477d0c8d469ddab9dfed796f87d0727",
"/": "9477d0c8d469ddab9dfed796f87d0727",
"main.dart.js": "bf8231360cd6b15e0657204c00030074",
"main.dart.js_1.part.js": "a65d2da558612984d7ab4e321af54763",
"main.dart.js_10.part.js": "bd1c9daf1fd9ac0a9d423f0fccf5ad2c",
"main.dart.js_11.part.js": "d6f1f7d15952abc5850a85b6a20ec21a",
"main.dart.js_12.part.js": "bd97fa7657c87fe1df77ed51035f2aec",
"main.dart.js_13.part.js": "f3c5aff9be35d6e64da4ccaaf1d0991e",
"main.dart.js_14.part.js": "49caa9896273392fa0549f78f1b0bee7",
"main.dart.js_15.part.js": "5e1ac215d54a091a2eaae801928f5fcf",
"main.dart.js_16.part.js": "4756fdda4f2017aaff1d7ffefb3f9c82",
"main.dart.js_17.part.js": "bf00b9d0b633d36013f6a63bef5ade84",
"main.dart.js_18.part.js": "e9cbc60022f423bdcd9c7410edc9a0a8",
"main.dart.js_19.part.js": "3064f93b03cfc946483f95a837d2d6a5",
"main.dart.js_2.part.js": "e4c6f94ea50f33c865895482349579cb",
"main.dart.js_20.part.js": "b821a2f8cbf334fdcd9935eb30c4dc74",
"main.dart.js_21.part.js": "d9cb9b00d98013b27244ee90d2303a50",
"main.dart.js_22.part.js": "304fc46b6a04434d49f32733eeff51f5",
"main.dart.js_23.part.js": "d93e5db69fb8f4cc7e066424002a587c",
"main.dart.js_24.part.js": "b9e197b315054f6e77e07212f7d6d14b",
"main.dart.js_25.part.js": "7b528f914fd9f60ae368e9cefc0ec849",
"main.dart.js_26.part.js": "5190f7ef984abe9b0bb51d95baf587e5",
"main.dart.js_27.part.js": "d48bfd40b4be7e4f610fb5307a9023c8",
"main.dart.js_28.part.js": "995df7e25681ca9c07259fc3cbac7b28",
"main.dart.js_29.part.js": "3a7de458a4efb53b94a039d133b762b2",
"main.dart.js_3.part.js": "c19ea17213256da4eef79bf8d54cd4b0",
"main.dart.js_30.part.js": "1cd6c7271f1d98ed1d90c360de9355bd",
"main.dart.js_31.part.js": "3d045c2a9609584083c7113c0d788962",
"main.dart.js_32.part.js": "a66bb6f654ac8ba02ce2ec461378a320",
"main.dart.js_33.part.js": "b2b84eb9163bbacef73450e6d86e3287",
"main.dart.js_34.part.js": "5c561d36d34a7d35f38fbf2670db95e5",
"main.dart.js_35.part.js": "b3f1c29db9250b6da15d6a53411d1c2b",
"main.dart.js_36.part.js": "c66e1b72f084d39303f341836698d305",
"main.dart.js_37.part.js": "ac78b36066475f2be584883c2008f987",
"main.dart.js_38.part.js": "7483debe4f91e0dbdb9186e4e8f06b85",
"main.dart.js_39.part.js": "c27e946a140a0c5fe4e9fa99d005949b",
"main.dart.js_4.part.js": "da555efde0622436e4c2afe2bbd6890c",
"main.dart.js_40.part.js": "649c71ef39db094a44db0e2c776da30e",
"main.dart.js_5.part.js": "b143967caf657aff01f3fbd872e81b0c",
"main.dart.js_6.part.js": "c94cf442fa15f253b879cd4f032cbb72",
"main.dart.js_7.part.js": "0b0bf06413a6e0592681f816945239f1",
"main.dart.js_8.part.js": "722c7093e83685d9a86725f0d66314dd",
"main.dart.js_9.part.js": "e05f671a9f68085b0e8404d8369588b8",
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
