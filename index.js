const mongoose = require('mongoose'),
    path =require('path'),
    indexRouter = require('./routes/index'),
    genres = require('./routes/genres'),
    customers = require('./routes/customers'),
    express = require('express'),
    app = express();

mongoose.connect('mongodb://AleksBartov:Merahba2018@ds159676.mlab.com:59676/sinodik')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect MongoDB...'));

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}...`));
