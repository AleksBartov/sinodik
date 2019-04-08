const express = require('express'),
        index = require('../routes/index'),
        enter = require('../routes/enter'),
        register = require('../routes/register'),
        users = require('../routes/users'),
        genres = require('../routes/genres'),
        customers = require('../routes/customers'),
        movies = require('../routes/movies'),
        auth = require('../routes/auth'),
        rentals = require('../routes/rentals');

module.exports = function(app) {
    app.use('/', index);
    app.use('/enter', enter);
    app.use('/register', register);
    app.use('/api/genres', genres);
    app.use('/api/customers', customers);
    app.use('/api/movies', movies);
    app.use('/api/rentals', rentals);
    app.use('/users', users);
    app.use('/auth', auth);
}
