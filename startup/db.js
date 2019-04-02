const winston = require('winston'),
        mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://AleksBartov:Merahba2018@ds159676.mlab.com:59676/sinodik')
        .then(()=> winston.info('Connected to MongoDB...'));
}