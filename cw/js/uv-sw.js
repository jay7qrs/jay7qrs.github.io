// The service worker for Ultraviolet
// This handles the requests for the proxy

importScripts('/cw/uv.bundle.js');
importScripts('/cw/uv.config.js');
importScripts(__uv$config.sw || '/cw/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
