const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./config/routes');
const app = express();
const port = 4001;

app.options('*', cors()) // include before other routes 
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes);

app.get('/', (req, res) => {
    res.send('works!');
});

mongoose.connect('mongodb://localhost/store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(port, () => {
        console.log('Listening on http://localhost:' + port);
    });
});
