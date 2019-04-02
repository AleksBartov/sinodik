const express = require('express'),
        path =require('path'),
        users = require('../routes/users'),
        genres = require('../routes/genres'),
        customers = require('../routes/customers'),
        movies = require('../routes/movies'),
        auth = require('../routes/auth'),
        rentals = require('../routes/rentals');

module.exports = function(app) {
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/api/genres', genres);
    app.use('/api/customers', customers);
    app.use('/api/movies', movies);
    app.use('/api/rentals', rentals);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
}
