const TodoItem = require('../Models/todoItem')

exports.createTodoItems = async (req, res) => {
    console.log(req.body)
    const { task, date } = req.body
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();
    res.status(201).json(todoItem);
}

exports.getTodoItems = async (req, res) => {
    const todoItems = await TodoItem.find();
    res.status(200).json(todoItems);
}

exports.deleteTodoItem = async (req, res) => {
    const { id } = req.params;
    await TodoItem.findByIdAndDelete(id);
    res.status(204).json({ message: `Todo item ${id} deleted successfully` });
}

exports.markCompleted = async (req, res) => {
    const { id } = req.params;
    const todoItem = await TodoItem.findById(id);
    if (!todoItem) {
        return res.status(404).json({ message: 'Todo item not found' });
    }
    todoItem.completed = true;
    await todoItem.save();
    res.status(200).json(todoItem);
}