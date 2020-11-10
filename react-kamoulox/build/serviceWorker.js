console.log('hello from sw');

self.addEventListener('install', (evt) => {
    console.log(`sw installé à ${new Date().toLocaleTimeString()}`);
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
	
const cacheName = 'veille-techno' + '1.2';

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
 
    // 8.1 afficher son contenu dans une notification
    const title = evt.data.text();
    const objNotification = {
        body: "ça fonctionne", 
        icon : "favicon.ico"
    };
    self.registration.showNotification(title, objNotification);
})