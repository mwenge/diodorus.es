'use strict';

var CACHE_NAME = 'Callimachus_Epigrams';
var urlsToCache = [
  'Callimachus_Epigrams.html',
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
  urlsToCache.push("Callimachus_Epigrams_" + i + ".html");
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
urlsToCache.push("Callimachus_Epigrams_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Callimachus_Epigrams_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Callimachus_Epigrams_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Callimachus_Epigrams_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Callimachus_Epigrams_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Callimachus_Epigrams_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Callimachus_Epigrams_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Callimachus_Epigrams_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Callimachus_Epigrams_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Callimachus_Epigrams_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Callimachus_Epigrams_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Callimachus_Epigrams_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Callimachus_Epigrams_14.html");
urlsToCache.push("commentary14.js");
urlsToCache.push("Callimachus_Epigrams_15.html");
urlsToCache.push("commentary15.js");
urlsToCache.push("Callimachus_Epigrams_16.html");
urlsToCache.push("commentary16.js");
urlsToCache.push("Callimachus_Epigrams_17.html");
urlsToCache.push("commentary17.js");
urlsToCache.push("Callimachus_Epigrams_18.html");
urlsToCache.push("commentary18.js");
urlsToCache.push("Callimachus_Epigrams_19.html");
urlsToCache.push("commentary19.js");
urlsToCache.push("Callimachus_Epigrams_20.html");
urlsToCache.push("commentary20.js");
urlsToCache.push("Callimachus_Epigrams_21.html");
urlsToCache.push("commentary21.js");
urlsToCache.push("Callimachus_Epigrams_22.html");
urlsToCache.push("commentary22.js");
urlsToCache.push("Callimachus_Epigrams_23.html");
urlsToCache.push("commentary23.js");
urlsToCache.push("Callimachus_Epigrams_24.html");
urlsToCache.push("commentary24.js");
urlsToCache.push("Callimachus_Epigrams_25.html");
urlsToCache.push("commentary25.js");
urlsToCache.push("Callimachus_Epigrams_26.html");
urlsToCache.push("commentary26.js");
urlsToCache.push("Callimachus_Epigrams_27.html");
urlsToCache.push("commentary27.js");
urlsToCache.push("Callimachus_Epigrams_28.html");
urlsToCache.push("commentary28.js");
urlsToCache.push("Callimachus_Epigrams_29.html");
urlsToCache.push("commentary29.js");
urlsToCache.push("Callimachus_Epigrams_30.html");
urlsToCache.push("commentary30.js");
urlsToCache.push("Callimachus_Epigrams_31.html");
urlsToCache.push("commentary31.js");
urlsToCache.push("Callimachus_Epigrams_32.html");
urlsToCache.push("commentary32.js");
urlsToCache.push("Callimachus_Epigrams_33.html");
urlsToCache.push("commentary33.js");
urlsToCache.push("Callimachus_Epigrams_34.html");
urlsToCache.push("commentary34.js");
urlsToCache.push("Callimachus_Epigrams_35.html");
urlsToCache.push("commentary35.js");
urlsToCache.push("Callimachus_Epigrams_37.html");
urlsToCache.push("commentary37.js");
urlsToCache.push("Callimachus_Epigrams_38.html");
urlsToCache.push("commentary38.js");
urlsToCache.push("Callimachus_Epigrams_39.html");
urlsToCache.push("commentary39.js");
urlsToCache.push("Callimachus_Epigrams_40.html");
urlsToCache.push("commentary40.js");
urlsToCache.push("Callimachus_Epigrams_41.html");
urlsToCache.push("commentary41.js");
urlsToCache.push("Callimachus_Epigrams_42.html");
urlsToCache.push("commentary42.js");
urlsToCache.push("Callimachus_Epigrams_43.html");
urlsToCache.push("commentary43.js");
urlsToCache.push("Callimachus_Epigrams_44.html");
urlsToCache.push("commentary44.js");
urlsToCache.push("Callimachus_Epigrams_45.html");
urlsToCache.push("commentary45.js");
urlsToCache.push("Callimachus_Epigrams_46.html");
urlsToCache.push("commentary46.js");
urlsToCache.push("Callimachus_Epigrams_47.html");
urlsToCache.push("commentary47.js");
urlsToCache.push("Callimachus_Epigrams_48.html");
urlsToCache.push("commentary48.js");
urlsToCache.push("Callimachus_Epigrams_49.html");
urlsToCache.push("commentary49.js");
urlsToCache.push("Callimachus_Epigrams_50.html");
urlsToCache.push("commentary50.js");
urlsToCache.push("Callimachus_Epigrams_51.html");
urlsToCache.push("commentary51.js");
urlsToCache.push("Callimachus_Epigrams_52.html");
urlsToCache.push("commentary52.js");
urlsToCache.push("Callimachus_Epigrams_53.html");
urlsToCache.push("commentary53.js");
urlsToCache.push("Callimachus_Epigrams_54.html");
urlsToCache.push("commentary54.js");
urlsToCache.push("Callimachus_Epigrams_55.html");
urlsToCache.push("commentary55.js");
urlsToCache.push("Callimachus_Epigrams_56.html");
urlsToCache.push("commentary56.js");
urlsToCache.push("Callimachus_Epigrams_57.html");
urlsToCache.push("commentary57.js");
urlsToCache.push("Callimachus_Epigrams_58.html");
urlsToCache.push("commentary58.js");
urlsToCache.push("Callimachus_Epigrams_59.html");
urlsToCache.push("commentary59.js");
urlsToCache.push("Callimachus_Epigrams_60.html");
urlsToCache.push("commentary60.js");
urlsToCache.push("Callimachus_Epigrams_61.html");
urlsToCache.push("commentary61.js");
urlsToCache.push("Callimachus_Epigrams_62.html");
urlsToCache.push("commentary62.js");
urlsToCache.push("Callimachus_Epigrams_63.html");
urlsToCache.push("commentary63.js");
