'use strict';

var CACHE_NAME = 'Plutarch_De_defectu_oraculorum';
var urlsToCache = [
  'Plutarch_De_defectu_oraculorum.html',
  'translation.js',
  '../book.css',
  '../book.js',
  '../atobAndBtoaTogether.min.js',
  '../GFSDidot.css',
  '../GFSDidot.ttf',
  '../OpenSans.css',
  '../OpenSans.ttf',
  '../Cinzel.css',
  '../Cinzel.ttf',
  '../CormorantGaramond.css',
  '../CormorantGaramond.ttf',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
urlsToCache.push("Plutarch_De_defectu_oraculorum.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_2.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_3.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_4.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_5.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_6.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_7.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_8.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_9.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_10.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_11.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_12.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_13.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_14.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_15.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_16.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_17.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_18.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_19.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_20.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_21.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_22.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_23.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_24.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_25.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_26.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_27.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_28.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_29.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_30.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_31.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_32.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_33.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_34.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_35.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_36.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_37.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_38.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_39.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_40.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_41.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_42.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_43.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_44.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_45.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_46.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_47.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_48.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_49.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_50.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_51.html");
urlsToCache.push("Plutarch_De_defectu_oraculorum_52.html");
