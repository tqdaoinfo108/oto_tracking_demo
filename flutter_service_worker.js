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
"index.html": "e88916c6af808a76217562a401c472f8",
"/": "e88916c6af808a76217562a401c472f8",
"main.dart.js": "5d1c1476d2764d1c4011e220e33ce2c1",
"main.dart.js_1.part.js": "14278643a6c81486c9b846e35427d4e0",
"main.dart.js_10.part.js": "5a284ad72e8eeb4edf7c7d142e075b37",
"main.dart.js_11.part.js": "6cf6b65f0e24a2cd2feb2cda220bf8ce",
"main.dart.js_12.part.js": "108958090d73af4f170310bea98c4372",
"main.dart.js_13.part.js": "5466fe0ec4b84f1c22ba44d73bb9dc52",
"main.dart.js_14.part.js": "aecec85b049d27ea64462cbe5c969a8c",
"main.dart.js_15.part.js": "5d75af7c43d867ca7a5306eacd13ba31",
"main.dart.js_16.part.js": "28fcaedec50b33da4e93d33f9aa56604",
"main.dart.js_17.part.js": "75028e207613422049c4bd1933f2d1ec",
"main.dart.js_18.part.js": "32cab538a7e9b0ffd08f9df6a8aa7365",
"main.dart.js_19.part.js": "80c231370354be378c31e6f08913a943",
"main.dart.js_2.part.js": "e40a9ed8bc6f58cdfcd17c6405f28b20",
"main.dart.js_20.part.js": "c6428db93fd2adaf183014486ff3f61c",
"main.dart.js_21.part.js": "3188f436d776b5367728b25020764df0",
"main.dart.js_22.part.js": "2f1394a4d0fd251268b9e0d804f043e9",
"main.dart.js_23.part.js": "f09200260eaeeacff3d7f8b23c703229",
"main.dart.js_24.part.js": "07b7a6b27ab0822f2c3bad3ecd6af0ca",
"main.dart.js_25.part.js": "f778c47e5674870583d795e3de513278",
"main.dart.js_26.part.js": "e75f8bc6828231225c48b58a8d562c2e",
"main.dart.js_27.part.js": "6a589993c0ad7e8ab0b66123a90fc50a",
"main.dart.js_28.part.js": "d55d1c1b958ad86c1a2a523d5239393f",
"main.dart.js_29.part.js": "7901c079d9c179a85dbfb733ed2e18c8",
"main.dart.js_3.part.js": "c89586fe66bb762bf63c96ae0a53b818",
"main.dart.js_30.part.js": "9a9c79bf31b7254a40dee2afb85ffed4",
"main.dart.js_31.part.js": "af5ada1e87bd4be23aa442b7634a2c28",
"main.dart.js_32.part.js": "7bab9a4e5a8cb0771a50bd96c03d6b91",
"main.dart.js_33.part.js": "174c677d9899d432ec807f60ffd5a1b9",
"main.dart.js_34.part.js": "9e696a9a5d89a199221b824317903bc0",
"main.dart.js_35.part.js": "5e24d307e6eaf159835805850de23404",
"main.dart.js_36.part.js": "c66e1b72f084d39303f341836698d305",
"main.dart.js_37.part.js": "ac78b36066475f2be584883c2008f987",
"main.dart.js_38.part.js": "7483debe4f91e0dbdb9186e4e8f06b85",
"main.dart.js_39.part.js": "c27e946a140a0c5fe4e9fa99d005949b",
"main.dart.js_4.part.js": "ddb8b05fbf17e90fffcf31c9e1dbdd41",
"main.dart.js_40.part.js": "649c71ef39db094a44db0e2c776da30e",
"main.dart.js_5.part.js": "56b4e5e8748bf0d01dfd47782e8d1339",
"main.dart.js_6.part.js": "4e79c110f7f8abaa0603e3b13297ff0f",
"main.dart.js_7.part.js": "465a6f3fa857a02affc3ad2ec02774e6",
"main.dart.js_8.part.js": "f8dfca898b636db9fc17d7df88addeca",
"main.dart.js_9.part.js": "f04ad04ea834a10760e894b622476afc",
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
