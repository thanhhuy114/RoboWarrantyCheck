'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b54367fa2a47fff0f9a12e33ff145c75",
"assets/AssetManifest.bin.json": "d32e80daa772956ff770b7d6cd7f1d4d",
"assets/AssetManifest.json": "3a81b06ec4a4c4815e4f4e54af665782",
"assets/assets/fonts/MyriadPro/MyriadPro-Black.ttf": "06b251661dab072d9a51d3371827a1fb",
"assets/assets/fonts/MyriadPro/MyriadPro-Bold.ttf": "d5b486487376f7295854815db1a93224",
"assets/assets/fonts/MyriadPro/MyriadPro-Light.ttf": "f4bf8ccd575532aae5e5b07b1749de32",
"assets/assets/fonts/MyriadPro/MyriadPro-Regular.ttf": "be82e3850974c1ccddfcf305d93ad7ce",
"assets/assets/fonts/MyriadPro/MyriadPro-SemiBold.ttf": "e753d434a34f00b2afa45aa4771ecee2",
"assets/assets/icons/arrow-trend-up.png": "53dfed7a83f0b5b8c2984e89f98b3405",
"assets/assets/icons/arrow-up-left-svgrepo.png": "2f2438e6de6df495aa548b603b6adfbb",
"assets/assets/icons/bell.svg": "0b7a27d1c1a91df595e485cb37419ad0",
"assets/assets/icons/chart_purple.svg": "b64cc685f69063dbf755a4a706ec5256",
"assets/assets/icons/cup.svg": "15b7440f73663e7d1eaceaf6b2ce6a16",
"assets/assets/icons/filter.png": "cb29e4112da1954de6341644a10db8b3",
"assets/assets/icons/Heart.png": "0995f7da8e3f8e303c5f59160bfb7fe8",
"assets/assets/icons/history-2.png": "53abbffd9aca547f8608467a77dd47a9",
"assets/assets/icons/home.svg": "a299a6b1349e983fb1069f96c4107ec6",
"assets/assets/icons/Instagram.jpg": "04367d5e8ee08a7d441ebcd6b2c69696",
"assets/assets/icons/new_user_blue.svg": "ef53887110a51fa1ca6fc02a42f4c636",
"assets/assets/icons/rocket_orange.svg": "62c4cc19315a3899f5193501714eb55a",
"assets/assets/icons/search-1.png": "6b626653aa98217c1e0b751919fecdd6",
"assets/assets/icons/search-2.png": "32f56774975490a714088296f8b5ca5a",
"assets/assets/icons/shopping%2520bag.png": "47278ad369821e32eb08b2f07f91befe",
"assets/assets/icons/speedometer_yellow.svg": "0afb44f3e48d24f56d8e37b965dcddc8",
"assets/assets/icons/stack.svg": "bbeed2175644e1fe22a886d66b263cbd",
"assets/assets/icons/star.png": "ade6bf80f32501ee7b9257af8b44ead4",
"assets/assets/icons/Twitter.jpg": "c3d17506b36bd5aa8766a73dbbd808a9",
"assets/assets/icons/vector.png": "97e09f1cce50b178c18ffeceb0630469",
"assets/assets/icons/voice.png": "628b53ad11bfa9343174715e19f8f3e7",
"assets/assets/icons/white_logo.svg": "3b3a2c007be896a93d1bd6fb6c1451cc",
"assets/assets/icons/YouTube.jpg": "6f9eb9434460966199a79b5af9906293",
"assets/assets/images/back_arrow.png": "421ae8b6b9cc764e57c3e70c5f8cf179",
"assets/assets/images/cellphones.jpg": "b0889679a65b58d7d26bd2392d75e2bd",
"assets/assets/images/grid.png": "2ebcdf0661981dbd4c0d125f1210bb7c",
"assets/assets/images/html.jpg": "35598268b6e3a4897e380253c958e3d8",
"assets/assets/images/lazada.png": "b801cb5dc1916bd2cdc7eb86863089be",
"assets/assets/images/list.png": "3ffe212cdfeb9475fdcc35ec4ff9bfc2",
"assets/assets/images/loading%2520animation.gif": "3d59ae872ee49726bdf2f65cf55cf1cf",
"assets/assets/images/no-image.png": "5975d96b60a6337d4319ca9900f2bc2f",
"assets/assets/images/no_image_2.png": "a07d802642fbcec768cb91e2a9401127",
"assets/assets/images/tiki.jpg": "2dbbdcb5e654e11c345a426f2d1e8bcf",
"assets/FontManifest.json": "4e10111ca561cc894873e9622f7e7fd4",
"assets/fonts/MaterialIcons-Regular.otf": "bd7c4400289f7e1e847820ee11320a3e",
"assets/NOTICES": "7b63330bd7d6784eae7355918f9f4bbd",
"assets/packages/iconly/fonts/IconlyBold.ttf": "6c73fc0a864250644f562a679591e0a4",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "ae60c99d5cf25644beb25a87577bf6ca",
"assets/packages/iconly/fonts/IconlyLight.ttf": "baf08d3e753c86f1bdacb3535d66e2aa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e33a4599cd482231469330eed810c754",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c995f148a1bad93a0f916011dc4ef034",
"/": "c995f148a1bad93a0f916011dc4ef034",
"main.dart.js": "aedb9cb388bb612bb5748ab124fcdfe8",
"manifest.json": "c1a0e1e5ff9cdf3af3bc8afc991fd2b2",
"version.json": "a17fac7a1ba7b5879f73019d57fab115"};
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
