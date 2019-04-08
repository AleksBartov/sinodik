const path = require('path');
const winston = require('winston');
const expressSession = require('express-session');
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expressSession({
    secret: 'secret'
}))
app.use(express.static(path.join(__dirname, 'public')));
require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const port = process.env.PORT || 80;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
