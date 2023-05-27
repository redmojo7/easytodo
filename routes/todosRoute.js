const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/Todo');

todoRouter.get('/', async (req, res) => {
    try {
        console.log("[Get] Todos");
        const todos = await (await Todo.find()).reverse();
        res.render('index', { title: 'Welcome to todoRouter', toDoList: todos });
    } catch (error) {
        console.error("An error occurred while retrieving todos:", error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


todoRouter.post('/', async (req, res) => {
    console.log(`[Post] Todo with content = ${req.body}`);
    try {
        const todo = new Todo({
            name: req.body.taskName
        });
        await todo.save();
        res.redirect("/todos");
    } catch (error) {
        console.error("An error occurred while creating the todo:", error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


todoRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`[Delete] Todo with id = ${id}`);
    try {
        await Todo.deleteOne({ _id: id });
        console.debug(`[Delete] Todo with id ${id} deleted successfully`);
        res.send({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error(`An error occurred while deleting the todo with id ${id}:`, error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


module.exports = todoRouter;