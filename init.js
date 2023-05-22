const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const db = require('./db');

const todos = [
    {name: 'Task 1'},
    {name: 'Task 2'},
    {name: 'Task 3'}
];


const initialize = async () => {
  await Todo.deleteMany(); // Optional: delete all existing Todos before inserting new one
  console.log('Todos deleted successfully');
  const createdUsers = await Todo.create(todos);
  console.log('[createdUsers]', createdUsers);
  console.log('Todo created successfully.');
}

module.exports = initialize;