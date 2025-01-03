'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "13f3e933bff1537628b5de7095b252e3",
".git/config": "ef8ec0a32a3926cf8c71435801de0e44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9b972fb7c054e0f65491404cc9e7f43b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "071efdfabd616f16aca4b657e2788569",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2576c28a2e444a628626c57d55d5f688",
".git/logs/refs/heads/main": "2576c28a2e444a628626c57d55d5f688",
".git/logs/refs/remotes/origin/HEAD": "0316fbfe477a0374f8521003bf4fbb02",
".git/logs/refs/remotes/origin/main": "55e2abee6b35b898dd8e4b99226a9373",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/9307ca6be002fc61e352520e91344baea97386": "f519e4c14386ba0e7af60a6bbd5f3837",
".git/objects/18/7028cfead6b5592e576cbfdaf021eb31b84bf5": "70e7dd09d69277dd8a95436aea9b3220",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/d67a63e9b1fb94e8e667238e34fd04b48c5a31": "8810ca2edfe517c8cbc2518ca3e38eb0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/f27a8bc363bf93816a38e0c10cbe207ce54732": "04299fbc06f037b738cca1b4e13202a5",
".git/objects/2b/b1e3febd594a4b31fa74fe34b9a68dc0716d72": "675f55c2e99b29a99016036e3f07d1b4",
".git/objects/2d/234430a2cc24ae82dd577b6266b2c3ef7252bf": "3420e7e324ef9bb9d189a64452a0c51f",
".git/objects/34/dbedb5664d909615edc29e7cd85ccfbaa3585c": "d641478e4f1067550721a3bda22a8ef5",
".git/objects/37/4808250b12a3ebc0b5783f39d83b4c0edbf6a4": "19960d7898538ceb204064616af775cc",
".git/objects/37/6b50cd20e35980e0228c7af9b0f30ab81331e6": "6466b30003514a890a317819c6dce3fd",
".git/objects/38/78d84b77f597be98df781b26fe3ff5ec556377": "41816291fcdeecdb826dce3e154a0500",
".git/objects/3c/4556472fbdba90e41ef6dbdfac805150451ee8": "033d99d07e054907693e5a3f7daebe5b",
".git/objects/3c/ee14a6bbf1268aeb7eeb8a7d83494d0b2fb71b": "8f99f0d3edcbf4b08070ae0d03786860",
".git/objects/44/ad3b05283f87380d5229183423cfe44e70df4c": "63711ef86765fee09629408881fc6da7",
".git/objects/45/fb3133845da76748c71f91e40fd20ad31212c6": "40d9479f7bfcfd2186750bbce9dae2bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/a45559d8d283cedfa3720542bb77f5eee4b0a9": "6926bc7539e0997b45e2d39f39aaf767",
".git/objects/50/a0355da5d7e8bdf5152ca7cf4916acbad99719": "3258c27150e4a19023dac9a6884e19f9",
".git/objects/51/b37419e14a7d5aa8b9c84299c4b36f0034299d": "d502bace18f3302a59a593db99c81d1c",
".git/objects/52/656c22034af355426d318d83fa15b162dd6f71": "7e8d365b2a203c9d52762295d71cc656",
".git/objects/53/f2e4a1c60ddeccee04abca489bedff4b3bb8c9": "aa7338791496641f36fc92b2f1e307a1",
".git/objects/55/3c9a160e164d097178e6c0283e6ba6a2ced3ad": "ff464a37b515817dfd4324b68b0df857",
".git/objects/5a/9b9acffc6114eff9cf6188d959e2c150301229": "01686d735cfd69d3dca89ec84efdc958",
".git/objects/5b/1bb92eeabb337b27099a11837e0f3516095c8b": "3f86b1e1ab8abb610a3df1b41ff22736",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/4a8d8a56ad9def4edf107a045b185d58611dc3": "0639b4b502d227f606fed5b280c537ce",
".git/objects/67/7770a12319c3b7daf2e153f2ab584b62c660a7": "a118f2e6d0ed9fc08a1d06a363671883",
".git/objects/6a/a6bb31e58b40070521c45860dd0e0a7b595814": "6cae4050857591cf93fe192cd720257f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/f1f23fcfc248242945fa6a5d7a89d63f033420": "0373b410493de0246fb003c49b610c8e",
".git/objects/79/238e58b71a015b82355429e7a9d80d4316bbe2": "ac9039d6a05e90342eb95bb077d943e9",
".git/objects/7b/0b655eab3d06162a5b04dd1075b4e48ce01608": "48a0c8661984c69a97a3b537bb67c85f",
".git/objects/7c/69224caf784e6ea92ca296fca885260a45c2c0": "da85f23b62276f891078e327102b69de",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/b44673a3234287ef35cabfe64122e50071cafb": "0744da938f19a9a84561bf261425abc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a4708c94c73df91224cfa64d3613a7ab9f8bbf": "113f95b433825cfa84d6ac140f903517",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/5f83380de5a7076810b0f259a6a653e3f222ce": "d834de857926adb647d316e80bed2536",
".git/objects/94/d21bee4d1c91daaf2acc8d1dd9bb1798d858b7": "a35d5fe26f5983315d58047a0d92b8f6",
".git/objects/95/710f8f6db7518946f9530e1c0045a7ed96e42f": "ffea9df6f3d6e26a3248cc23d39bf59d",
".git/objects/95/9d5ea1bb555c46f641cc6dee950a92453096a2": "35f4472227decf86b9d88f347ae7ff29",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a2/42c051f6e1cb4158b48ba97bc935321c9850ca": "7c172e0da51f55b3e1474c4fbed6db3c",
".git/objects/a4/e909f90e1f7a1efaa39c3f299f7e085473fafc": "236174f700a0b5b1abc7fef61ca4b916",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ae/5543b9cf097ed2ba81b21100b5405cc34d7093": "fb58875a72a00dc866d6479a05585fdf",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e3ef9c3b58eaadbe048e1a57f73fa40166d8cd": "081b7ac4ea3aa55a1ec1164d7424bbb7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/b6aa6c842418b3ce122655e89d9d743a590de3": "c5d4f36eaa10e9e736ef7f9bf3fc57e4",
".git/objects/d0/9365703c81901a5306032d41df8ec6e862acab": "899501bc2dc5efb26c8da654c412304e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5a49cb64c644ff620415289912969879505c22": "11f9c379ff1620999bb0bc6716c2e79b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/5ae349e591f3a9bb88e3c0a4e7bac21420408e": "4a20bbea5e82d15ef2fa965cf937f77e",
".git/objects/e7/b08044a7ed1b5b91f9a95ee36a79d930e4129b": "0adadeb0f752fa0d5eedab2a2c4c0201",
".git/objects/ea/61859ed6f35b273c002aed3f70ad9a3907bf99": "8fd82bffb6daf1b03179683d30c57f1c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/a6e10f0a5aca59f60c0f52a48b441d4528e0ed": "a84649e70a4defe88bee716c83dae7c0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/da519e2ac1599d754e4313589a0a0ef3b81723": "7be86532fcb72a766da791a098575a7f",
".git/refs/heads/main": "3f8a023276e8c7851b43579f35b86535",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3f8a023276e8c7851b43579f35b86535",
"assets/AssetManifest.bin": "33eec6ee05452359b851b1878b7d55c0",
"assets/AssetManifest.bin.json": "86ec4539562413b7f0f0598c8d606904",
"assets/AssetManifest.json": "dccef45f6dbce78384a92794d1f97ff9",
"assets/assets/98.apk": "97ba5ead03483b42c2e6d9e67a4364aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9598549df7838ac866ab97efdb1ab55",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e6fa6e7c46a6ffa91785cee749c63dd4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a9bde8cba2fc2b9b92b497bf7e6cca32",
"/": "a9bde8cba2fc2b9b92b497bf7e6cca32",
"main.dart.js": "1c825dfa5b238c75e3544a4453a862b1",
"manifest.json": "dd2e0c009dfdc9c24c918d0b71f281a8",
"version.json": "ab69c44d6c0b45356d1a8cf83716f533"};
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
