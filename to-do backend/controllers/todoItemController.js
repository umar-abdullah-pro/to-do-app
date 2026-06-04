const TodoItem = require('../Models/todoItem')

exports.createTodoItems = async (req, res) => {
    console.log(req.body)
    const { task, date } = req.body

    if (!task) {
        return res.status(400).json({ error: 'Task is required' })
    }
    const newTodoItem = new TodoItem({
        task,
        date
    })
    
    await newTodoItem.save()
        .then(savedItem => res.status(201).json(savedItem))
        .catch(err => res.status(500).json({ error: 'Failed to create To-Do item' }))
}