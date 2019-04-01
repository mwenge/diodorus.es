'use strict';

var CACHE_NAME = 'Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere';
var urlsToCache = [
  'Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere.html',
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
urlsToCache.push("Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere.html");
urlsToCache.push("Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere_2.html");
urlsToCache.push("Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere_3.html");
urlsToCache.push("Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere_4.html");
urlsToCache.push("Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere_5.html");
urlsToCache.push("Plutarch_Compendium_Argumenti_Stoicos_absurdiora_poetis_dicere_6.html");
