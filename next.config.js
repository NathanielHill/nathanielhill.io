const nextOffline = require('next-offline')

module.exports = nextOffline({
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  }
})
