'use strict';

var CACHE_NAME = 'Nonnus_Dionysiaca';
var urlsToCache = [
  'Nonnus_Dionysiaca.html',
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
  urlsToCache.push("Nonnus_Dionysiaca_" + i + ".html");
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
urlsToCache.push("Nonnus_Dionysiaca_16.html");
urlsToCache.push("commentary16.js");
urlsToCache.push("Nonnus_Dionysiaca_17.html");
urlsToCache.push("commentary17.js");
urlsToCache.push("Nonnus_Dionysiaca_18.html");
urlsToCache.push("commentary18.js");
urlsToCache.push("Nonnus_Dionysiaca_19.html");
urlsToCache.push("commentary19.js");
urlsToCache.push("Nonnus_Dionysiaca_20.html");
urlsToCache.push("commentary20.js");
urlsToCache.push("Nonnus_Dionysiaca_21.html");
urlsToCache.push("commentary21.js");
urlsToCache.push("Nonnus_Dionysiaca_22.html");
urlsToCache.push("commentary22.js");
urlsToCache.push("Nonnus_Dionysiaca_23.html");
urlsToCache.push("commentary23.js");
urlsToCache.push("Nonnus_Dionysiaca_24.html");
urlsToCache.push("commentary24.js");
urlsToCache.push("Nonnus_Dionysiaca_25.html");
urlsToCache.push("commentary25.js");
urlsToCache.push("Nonnus_Dionysiaca_26.html");
urlsToCache.push("commentary26.js");
urlsToCache.push("Nonnus_Dionysiaca_27.html");
urlsToCache.push("commentary27.js");
urlsToCache.push("Nonnus_Dionysiaca_28.html");
urlsToCache.push("commentary28.js");
urlsToCache.push("Nonnus_Dionysiaca_29.html");
urlsToCache.push("commentary29.js");
urlsToCache.push("Nonnus_Dionysiaca_30.html");
urlsToCache.push("commentary30.js");
urlsToCache.push("Nonnus_Dionysiaca_31.html");
urlsToCache.push("commentary31.js");
urlsToCache.push("Nonnus_Dionysiaca_32.html");
urlsToCache.push("commentary32.js");
urlsToCache.push("Nonnus_Dionysiaca_33.html");
urlsToCache.push("commentary33.js");
urlsToCache.push("Nonnus_Dionysiaca_34.html");
urlsToCache.push("commentary34.js");
urlsToCache.push("Nonnus_Dionysiaca_35.html");
urlsToCache.push("commentary35.js");
urlsToCache.push("Nonnus_Dionysiaca_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Nonnus_Dionysiaca_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Nonnus_Dionysiaca_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Nonnus_Dionysiaca_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Nonnus_Dionysiaca_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Nonnus_Dionysiaca_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Nonnus_Dionysiaca_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Nonnus_Dionysiaca_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Nonnus_Dionysiaca_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Nonnus_Dionysiaca_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Nonnus_Dionysiaca_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Nonnus_Dionysiaca_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Nonnus_Dionysiaca_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Nonnus_Dionysiaca_14.html");
urlsToCache.push("commentary14.js");
urlsToCache.push("Nonnus_Dionysiaca_15.html");
urlsToCache.push("commentary15.js");
