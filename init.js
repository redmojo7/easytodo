const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const db = require('./db');

const todos = [
    {name: 'Finish COMP6006 Prac'},
    {name: 'Walk the dog'},
    {name: 'Buy groceries'},
    {name: 'Do laundry'},
    {name: 'Clean the house'},
];


const initialize = async () => {
  await Todo.deleteMany(); // Optional: delete all existing Todos before inserting new one
  console.log('Todos deleted successfully');
  const createdTodos = await Todo.create(todos);
  console.log('[createdTodos]', createdTodos);
  console.log('Todo created successfully.');
}

module.exports = initialize;