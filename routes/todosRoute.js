const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/Todo');

todoRouter.get('/', async (req, res) => {
    const todos = await (await Todo.find()).reverse();
    res.render('index', { title: 'Welcome to todoRouter', toDoList: todos });
});

todoRouter.post('/', async (req, res) => {
    console.log("create todo: ", req.body);
    const todo = new Todo({
        name: req.body.taskName
    }
    );
    await todo.save();
    res.redirect('/');
});

todoRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    console.debug(`Todo with id ${id} deleted successfully`);
    res.send({ message: 'Todo deleted successfully' });
});

module.exports = todoRouter;