const path = require('path');
const withOffline = require('next-offline');

module.exports = withOffline({
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'components'),
    };
    return config;
  },
  pageExtensions: ['js', 'mdx'],
});
