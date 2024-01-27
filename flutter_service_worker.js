'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fbc9d349549f06876e32fcd0e6347527",
"assets/assets/5356678.png": "f751a7204c7a4b5727a0afd48c044271",
"assets/assets/error.png": "f751a7204c7a4b5727a0afd48c044271",
"assets/assets/historial.png": "4f1dbb8006e65fcffe23dc8be99d5977",
"assets/assets/icon/bills.png": "a5f77f9390374d03b63a49c15437234e",
"assets/assets/icon/calendario.png": "406875e47dfc36526f593c16179be686",
"assets/assets/icon/car.png": "92d76e03ded852da853c5fd99fe2cee8",
"assets/assets/icon/combustible.png": "f16c85ec9fd962240a0fe3d6e7471640",
"assets/assets/icon/costo.png": "7a0ae252f9e99f5add3f27284650dc73",
"assets/assets/icon/extra.png": "f490fb439736713ea2fea78a88232ae9",
"assets/assets/icon/gas.png": "42416d53510489d26f96e1edfea77da0",
"assets/assets/icon/gastipo.png": "f16c85ec9fd962240a0fe3d6e7471640",
"assets/assets/icon/icon.png": "fb10d53f7f0ba449e0baafd398ce0394",
"assets/assets/icon/mantenimiento.png": "82bb76f140314cb596a180d3bef73cfd",
"assets/assets/icon/reloj.png": "a74d4fd450cfe4c50ae6f7fbb01126b9",
"assets/assets/icon/reporte.png": "3ae5a57a7b0063ebab080ac375196929",
"assets/assets/icon/tipogas.png": "510e6938dd01cb7a31cfb305b9665669",
"assets/assets/icon/usuario.png": "b91810d0dec88867d9639d75c53a4413",
"assets/assets/icon/velocimetro.png": "5c61c93961e890e3a2561eca7cee2cae",
"assets/assets/images/arts.png": "a267217a9fe37b84e55779fe0457e7c8",
"assets/assets/img/error.png": "f751a7204c7a4b5727a0afd48c044271",
"assets/assets/img/giphy.gif": "b0d3b9451f2304170c19b169edecc20e",
"assets/assets/img/illustration_error.png": "aa7c86da584118e3d42589c8efbd2489",
"assets/assets/img/illustration_not_found.png": "816e4a0dfcf98e31cb238eaf403dbcd5",
"assets/assets/img/illustration_stop.png": "574be42dfdf6027740c5d31d986c9035",
"assets/assets/img/illustration_wrong.png": "70d228097549a4becddb9b5020fa7425",
"assets/assets/img/no-image.png": "855e8ca01684f0d61e302ba09a177bfd",
"assets/assets/logoart.png": "fb10d53f7f0ba449e0baafd398ce0394",
"assets/assets/no-internet.png": "cbac280d4be6a6eb691e0eee61801e2b",
"assets/assets/nocone.svg": "3698a7f824c60281ce9bb76d787fc99f",
"assets/assets/nocone22.svg": "4ec9489a28e3e7a18e6b5ed6ddf463dc",
"assets/FontManifest.json": "a3940779967ab05a98f90745ce8ee2d7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Rubik-Medium.ttf": "394a3b3371914d7a65e80ff82ae35f78",
"assets/fonts/Rubik-Regular.ttf": "6c980940392587c8d7d325c07965ebda",
"assets/NOTICES": "73441a90413920af8ebdc51b56a85fc8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0b55d68bd1e917ca714e700df43f7326",
"/": "0b55d68bd1e917ca714e700df43f7326",
"main.dart.js": "c7b179762d7d24453ca62c86a2f05df8",
"manifest.json": "7ca70a3c9b33966d5f8ae402f5058a4c",
"version.json": "5aa9d6950339bd19d21c75e86502a51f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
