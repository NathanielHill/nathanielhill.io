const path = require('path');
const withOffline = require('next-offline');

module.exports = withOffline({
  async redirects() {
    return [
      {
        source: '/schedule',
        destination:
          'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SnR5b7nSt3hGMfSsGUuH41ZTloN4FktMmqdLHCNeoMwobd3NpqnTSONVBrxZ-BUtfcpwRrVJV',
        permanent: true,
      },
    ];
  },
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components'),
    };
    return config;
  },
});
