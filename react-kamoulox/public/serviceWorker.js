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

self.addEventListener("push", (e) => {
    let data
    if (e.data) {
        data = e.data.json()
    }

    console.log('data for notification', data);

    const options = {
        body: data.body,
        icon: '/img/icons/android-chrome-192x192.png',
        image: '/img/autumn-forest.png',
        vibrate: [300, 200, 300],
        badge: '/img/icons/plint-badge-96x96.png',
    }

    console.log('options passed to Notification', options);

    e.waitUntil(self.registration.showNotification(data.title, options))
})