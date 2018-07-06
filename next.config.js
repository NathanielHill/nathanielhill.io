const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    [nextOffline, ['!', PHASE_DEVELOPMENT_SERVER]]
  ],
  {
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' }
      }
    }
  }
)
