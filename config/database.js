const mongoose = require('mongoose')
const User = require('../models/User')
const Category = require('../models/Category')
const mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;

var url = process.env.MONGODB_URI || 'mongodb://heroku_rhm2cbc6:2451323danny@ds011442.mlab.com:11442/heroku_rhm2cbc6';

mongoose.Promise = global.Promise

module.exports = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    }, function(err) {
      console.log('err', err);
    });

  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('MongoDB ready!')
    User.seedAdminUser()
    Category.seedCategory()
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}
