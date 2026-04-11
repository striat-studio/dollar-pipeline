// No-op service worker — unregisters itself so browsers stop requesting this file.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => {
  self.registration.unregister();
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => client.navigate(client.url));
  });
});
