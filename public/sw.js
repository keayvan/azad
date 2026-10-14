const CACHE = 'azad-v2';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(SHELL);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const { method, url } = request;

  // Only handle GET requests
  if (method !== 'GET') {
    return;
  }

  // Never cache the version check
  if (url.includes('version.json')) {
    return;
  }

  // Only handle same-origin requests
  if (!url.startsWith(self.location.origin)) {
    return;
  }

  const isNavigationRequest = request.mode === 'navigate';

  if (isNavigationRequest) {
    // Network-first for navigation requests
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            caches.open(CACHE).then((cache) => {
              cache.put(request, response.clone());
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match('./index.html');
        })
    );
  } else {
    // Stale-while-revalidate for everything else
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response.ok) {
            caches.open(CACHE).then((cache) => {
              cache.put(request, response.clone());
            });
          }
          return response;
        }).catch(() => {
          return Response.error();
        });

        return cachedResponse || fetchPromise;
      })
    );
  }
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'cache' && Array.isArray(event.data.urls)) {
    event.waitUntil(
      caches.open(CACHE).then((cache) => {
        return Promise.all(
          event.data.urls.map((url) => {
            // Only cache same-origin URLs
            if (typeof url === 'string' && url.startsWith(self.location.origin)) {
              return cache.add(url).catch(() => {
                // Ignore individual failures
              });
            }
          })
        );
      })
    );
  }
});
