self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  await self.registration.unregister();
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
  allClients.forEach((client) => client.navigate(client.url));
});
