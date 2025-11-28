// Simple Vite PWA service worker
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // You can add custom caching logic here
  // For now, just pass through
});
