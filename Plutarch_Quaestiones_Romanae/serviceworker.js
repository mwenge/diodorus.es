'use strict';

var CACHE_NAME = 'Plutarch_Quaestiones_Romanae';
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
urlsToCache.push("Plutarch_Quaestiones_Romanae.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_2.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_3.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_4.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_5.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_6.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_7.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_8.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_9.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_10.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_11.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_12.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_13.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_14.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_15.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_16.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_17.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_18.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_19.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_20.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_21.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_22.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_23.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_24.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_25.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_26.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_27.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_28.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_29.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_30.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_31.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_32.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_33.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_34.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_35.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_36.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_37.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_38.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_39.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_40.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_41.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_42.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_43.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_44.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_45.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_46.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_47.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_48.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_49.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_50.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_51.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_52.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_53.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_54.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_55.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_56.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_57.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_58.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_59.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_60.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_61.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_62.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_63.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_64.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_65.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_66.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_67.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_68.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_69.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_70.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_71.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_72.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_73.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_74.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_75.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_76.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_77.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_78.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_79.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_80.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_81.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_82.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_83.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_84.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_85.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_86.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_87.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_88.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_89.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_90.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_91.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_92.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_93.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_94.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_95.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_96.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_97.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_98.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_99.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_100.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_101.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_102.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_103.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_104.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_105.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_106.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_107.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_108.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_109.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_110.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_111.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_112.html");
urlsToCache.push("Plutarch_Quaestiones_Romanae_113.html");
