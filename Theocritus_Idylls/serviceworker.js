'use strict';

var CACHE_NAME = 'Theocritus_Idylls';
var urlsToCache = [
  'Theocritus_Idylls.html',
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

for (var i = 2; i <= 1; i++) {
  urlsToCache.push("Theocritus_Idylls_" + i + ".html");
}

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
urlsToCache.push("Theocritus_Idylls_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Theocritus_Idylls_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Theocritus_Idylls_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Theocritus_Idylls_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Theocritus_Idylls_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Theocritus_Idylls_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Theocritus_Idylls_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Theocritus_Idylls_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Theocritus_Idylls_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Theocritus_Idylls_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Theocritus_Idylls_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Theocritus_Idylls_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Theocritus_Idylls_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Theocritus_Idylls_14.html");
urlsToCache.push("commentary14.js");
urlsToCache.push("Theocritus_Idylls_15.html");
urlsToCache.push("commentary15.js");
urlsToCache.push("Theocritus_Idylls_16.html");
urlsToCache.push("commentary16.js");
urlsToCache.push("Theocritus_Idylls_17.html");
urlsToCache.push("commentary17.js");
urlsToCache.push("Theocritus_Idylls_18.html");
urlsToCache.push("commentary18.js");
urlsToCache.push("Theocritus_Idylls_19.html");
urlsToCache.push("commentary19.js");
urlsToCache.push("Theocritus_Idylls_20.html");
urlsToCache.push("commentary20.js");
urlsToCache.push("Theocritus_Idylls_21.html");
urlsToCache.push("commentary21.js");
urlsToCache.push("Theocritus_Idylls_22.html");
urlsToCache.push("commentary22.js");
urlsToCache.push("Theocritus_Idylls_23.html");
urlsToCache.push("commentary23.js");
urlsToCache.push("Theocritus_Idylls_24.html");
urlsToCache.push("commentary24.js");
urlsToCache.push("Theocritus_Idylls_25.html");
urlsToCache.push("commentary25.js");
urlsToCache.push("Theocritus_Idylls_26.html");
urlsToCache.push("commentary26.js");
urlsToCache.push("Theocritus_Idylls_27.html");
urlsToCache.push("commentary27.js");
urlsToCache.push("Theocritus_Idylls_28.html");
urlsToCache.push("commentary28.js");
urlsToCache.push("Theocritus_Idylls_29.html");
urlsToCache.push("commentary29.js");
urlsToCache.push("Theocritus_Idylls_30.html");
urlsToCache.push("commentary30.js");
urlsToCache.push("Theocritus_Idylls_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Theocritus_Idylls_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Theocritus_Idylls_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Theocritus_Idylls_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Theocritus_Idylls_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Theocritus_Idylls_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Theocritus_Idylls_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Theocritus_Idylls_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Theocritus_Idylls_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Theocritus_Idylls_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Theocritus_Idylls_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Theocritus_Idylls_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Theocritus_Idylls_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Theocritus_Idylls_14.html");
urlsToCache.push("commentary14.js");
urlsToCache.push("Theocritus_Idylls_15.html");
urlsToCache.push("commentary15.js");
urlsToCache.push("Theocritus_Idylls_16.html");
urlsToCache.push("commentary16.js");
urlsToCache.push("Theocritus_Idylls_17.html");
urlsToCache.push("commentary17.js");
urlsToCache.push("Theocritus_Idylls_18.html");
urlsToCache.push("commentary18.js");
urlsToCache.push("Theocritus_Idylls_19.html");
urlsToCache.push("commentary19.js");
urlsToCache.push("Theocritus_Idylls_20.html");
urlsToCache.push("commentary20.js");
urlsToCache.push("Theocritus_Idylls_21.html");
urlsToCache.push("commentary21.js");
urlsToCache.push("Theocritus_Idylls_22.html");
urlsToCache.push("commentary22.js");
urlsToCache.push("Theocritus_Idylls_23.html");
urlsToCache.push("commentary23.js");
urlsToCache.push("Theocritus_Idylls_24.html");
urlsToCache.push("commentary24.js");
