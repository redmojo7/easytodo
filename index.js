const express = require('express');
const app = express();
const path = require('path');
const todoRoutes = require('./routes/todosRoute');
const initialize = require('./init');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/todos', todoRoutes);

// Default route
app.get('/', (req, res) => {
    res.redirect('/todos');
});

initialize().then(() => {
    console.log('Database initialized');
    app.listen(3003, function () {
        console.log('EasyToDo App listening on port 3003!');
    });
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

