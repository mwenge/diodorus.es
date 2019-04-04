'use strict';

var CACHE_NAME = 'Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum';
var urlsToCache = [
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
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_2.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_3.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_4.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_5.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_6.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_7.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_8.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_9.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_10.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_11.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_12.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_13.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_14.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_15.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_16.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_17.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_18.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_19.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_20.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_21.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_22.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_23.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_24.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_25.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_26.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_27.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_28.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_29.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_30.html");
urlsToCache.push("Plutarch_Non_posse_suaviter_vivi_secundum_Epicurum_31.html");
