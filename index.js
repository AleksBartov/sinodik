const mongoose = require('mongoose'),
    genres = require('./routes/genres'),
    customers = require('./routes/customers'),
    express = require('express'),
    app = express();

mongoose.connect('mongodb://AleksBartov:Merahba2018@ds159676.mlab.com:59676/sinodik')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
