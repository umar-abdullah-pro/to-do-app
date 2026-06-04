const TodoItem = require('../Models/todoItem')

exports.createTodoItems = async (req, res) => {
    console.log(req.body)
    const { task, date } = req.body
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();
    res.status(201).json(todoItem);
}