const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../'))

module.exports = {
  development: {
    db: 'mongodb://heroku_rhm2cbc6:2451323danny@ds011442.mlab.com:11442/heroku_rhm2cbc6', 
    rootPath: rootPath,
    port: 5000
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
