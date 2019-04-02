const path = require('path');
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
// require('./startup/config')();
require('./startup/validation')();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const port = process.env.PORT || 80;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
