 importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
 if (workbox) {
   console.log('[ Hello ] from Maye');
const wkb = {
  ...workbox.core,
  ...workbox.routing,
  ...workbox.precaching,
  ...workbox.strategies,
  ...workbox.cacheableResponse,
  ...workbox.expiration
}
const {
  clientsClaim,
  cacheNames,
  setCacheNameDetails,
  setCatchHandler,
  NavigationRoute,
  registerRoute,
  precacheAndRoute,
  createHandlerBoundToURL,
  matchPrecache,
  NetworkFirst,
  NetworkOnly,
  CacheFirst,
  CacheOnly,
  StaleWhileRevalidate,
  CacheExpiration,
  ExpirationPlugin,
  CacheableResponsePlugin
  } = wkb;


    // Cache routes...
    registerRoute(
    // Check to see if the request is a navigation to a new page...
    ({ request }) => request.mode === 'navigate',
    // Use a Network First caching strategy...
     new NetworkFirst({
       // Put all cached files in a cache named 'pages'...
       cacheName: 'pages',
       plugins: [
          // Ensure that only requests that result in a 200 status are cached...
          new CacheableResponsePlugin({
             statuses: [200]
          }),
          new ExpirationPlugin({
             maxEntries: 20,
             maxAgeSeconds: 1 * 24 * 60 * 60 // 1 Day
          }),
       ],
     })
    );

    // Cache CSS, JS, and Web Worker requests...
    registerRoute(
    //  Check to see if the request's destination is style for css, script , or worker...
    ({ request }) => request.destination === 'style' ||
                     request.destination === 'script' ||
                     request.destination === 'worker',
    // Use a Stale While Revalidate caching strategy...
     new StaleWhileRevalidate({
       // Put all cached files in a cache named 'assets'...
       cacheName: 'assets',
       plugins: [
          // Ensure that only requests that result in a 200 status are cached...
          new CacheableResponsePlugin({
             statuses: [200]
          }),
          new ExpirationPlugin({
             maxEntries: 20,
             maxAgeSeconds: 1 * 24 * 60 * 60 // 1 Day
          }),
       ],
     })
    );

    // Cache images requests...
    registerRoute(
    // Check to see if the request's destination is style for an image...
    ({ request }) => request.destination === 'image',
    // Use a Cache First caching strategy...
     new CacheFirst({
       // Put all cached files in a cache named 'images'...
       cacheName: 'images',
       plugins: [
          // Ensure that only requests that result in a 200 status are cached...
          new CacheableResponsePlugin({
             statuses: [200]
          }),
          new ExpirationPlugin({
             maxEntries: 20,
             maxAgeSeconds: 1 * 24 * 60 * 60 // 1 Day
          }),
       ],
     })
    );

    // Cache resources from external origins say bootstrap for 30 days
    workbox.routing.registerRoute(
     'https://fonts.googleapis.com/css?family=Product%20Sans',
     new CacheFirst({
      cacheName: 'external-origins',
      plugins: [
       new CacheableResponsePlugin({
        statuses: [0, 200],
       }),
       new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
       }),
      ],
     })
    );

    workbox.setConfig({
    debug:true
    });

   self.skipWaiting();
   clientsClaim();
 } else {
   console.log('Boo! Workbox failed to load 😬');
 }