'use strict';

var CACHE_NAME = 'Theocritus_Epigrams';
var urlsToCache = [
  'Theocritus_Epigrams.html',
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
  urlsToCache.push("Theocritus_Epigrams_" + i + ".html");
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
urlsToCache.push("Theocritus_Epigrams_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Theocritus_Epigrams_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Theocritus_Epigrams_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Theocritus_Epigrams_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Theocritus_Epigrams_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Theocritus_Epigrams_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Theocritus_Epigrams_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Theocritus_Epigrams_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Theocritus_Epigrams_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Theocritus_Epigrams_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Theocritus_Epigrams_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Theocritus_Epigrams_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Theocritus_Epigrams_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Theocritus_Epigrams_14.html");
urlsToCache.push("commentary14.js");
urlsToCache.push("Theocritus_Epigrams_15.html");
urlsToCache.push("commentary15.js");
urlsToCache.push("Theocritus_Epigrams_16.html");
urlsToCache.push("commentary16.js");
urlsToCache.push("Theocritus_Epigrams_17.html");
urlsToCache.push("commentary17.js");
urlsToCache.push("Theocritus_Epigrams_18.html");
urlsToCache.push("commentary18.js");
urlsToCache.push("Theocritus_Epigrams_19.html");
urlsToCache.push("commentary19.js");
urlsToCache.push("Theocritus_Epigrams_20.html");
urlsToCache.push("commentary20.js");
urlsToCache.push("Theocritus_Epigrams_21.html");
urlsToCache.push("commentary21.js");
urlsToCache.push("Theocritus_Epigrams_22.html");
urlsToCache.push("commentary22.js");
urlsToCache.push("Theocritus_Epigrams_23.html");
urlsToCache.push("commentary23.js");
urlsToCache.push("Theocritus_Epigrams_24.html");
urlsToCache.push("commentary24.js");
