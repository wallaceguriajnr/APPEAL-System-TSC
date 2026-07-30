// Minimal service worker — its only job is to make the dashboard
// eligible for "Install app" / "Add to Home Screen" in Chrome, Edge,
// and Android. It doesn't cache anything or work offline; every
// request just goes straight to the network as normal.
self.addEventListener("fetch", function(event){
  event.respondWith(fetch(event.request));
});
