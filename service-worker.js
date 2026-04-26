const CACHE_NAME="snake-meme-god-v1";

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(c=>c.addAll([
"./",
"index.html",
"manifest.json",
"icon.png",
"snake.png",
"food.png"
]))
);
});

self.addEventListener("activate",e=>{
e.waitUntil(
caches.keys().then(keys=>{
return Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));
})
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});
