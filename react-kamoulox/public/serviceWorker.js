console.log('hello from sw');
const version = "v1"
const assetsToCache = [
    '/',
    'index.html',
    '../src/index.js',
    'styles.css',
    'manifest.webmanifest',
    'images/icon-192x192.png',
    'images/icon-256x256.png',
    'images/icon-512x512.png',
    'images/logo.png',
    'images/icon-72x72.png'
  ];

const cacheName = 'veille-techno' + '1.0';

self.addEventListener('install', (evt) => {
    console.log(`sw installé à ${new Date().toLocaleTimeString()}`);
    const cachePromise = caches.open(cacheName).then(cache =>{
        return cache.addAll(assetsToCache)
        .then(console.log('cache initialisé'))
        .catch(console.err);
    })

    evt.waitUntil(cachePromise);
});

self.addEventListener('activate', (evt) => {
    console.log(`sw activé à ${new Date().toLocaleTimeString()}`);
    let cacheCleanPromise = caches.keys().then(keys => {
        keys.forEach(key => {            
            if(key !== cacheName){
                caches.delete(key);
            }
        });
    });
 
    evt.waitUntil(cacheCleanPromise);
});
	

self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        fetch(evt.request).then(res => {
            console.log("url récupérée depuis le réseau", evt.request.url);
            caches.open(cacheName).then(cache => cache.put(evt.request, res));
            return res.clone();
        })
        .catch(err => {
            console.log("url récupérée depuis le cache", evt.request.url);
            return caches.match(evt.request);
        })
    );
});

self.addEventListener("push", evt => {
    console.log("push event", evt);
    console.log("data envoyée par la push notification :", evt.data.text());

    const title = evt.data.text();
    const objNotification = {
        body: "ça fonctionne", 
        icon : "images/icon-72x72.png"
    };
    self.registration.showNotification(title, objNotification);
})