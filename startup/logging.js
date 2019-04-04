const winston = require('winston');
const config = require('config');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );
    
    process.on('unhandledRejection', (ex)=>{
        throw ex;
    });
    
    winston.add(winston.transports.File, { filename: 'logfile.log' });
    winston.add(winston.transports.MongoDB, {
        db: `mongodb://AleksBartov:${config.get("MongoDBPassword")}@ds159676.mlab.com:59676/sinodik`,
        level: 'info'
    });
}
