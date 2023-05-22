const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String
});

// User model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;