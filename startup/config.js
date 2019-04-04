const config = require('config');

module.exports = function() {
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }

    if (!config.get('MongoDBPassword')) {
        throw new Error('FATAL ERROR: MongoDBPassword is not defined.');
    }
}
