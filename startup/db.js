const winston = require('winston'),
        config = require('config'),
        mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(`mongodb://AleksBartov:${config.get("MongoDBPassword")}@ds159676.mlab.com:59676/sinodik`)
        .then(()=> winston.info('Connected to MongoDB...'));
}