const express = require('express');
const app = express();
const path = require('path');
const todoRoutes = require('./routes/todoRoute');
const initialize = require('./init');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', todoRoutes);

initialize();

app.listen(3003, function () {
    console.log('Example app listening on port 3003!');
});