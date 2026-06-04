const express = require('express')
const todoItemRouter = express.Router()

const todoItemController = require('../Controllers/todoItemController')

todoItemRouter.post('/', todoItemController.createTodoItems)
todoItemRouter.get('/', todoItemController.getTodoItems)
todoItemRouter.delete('/:id', todoItemController.deleteTodoItem)
todoItemRouter.put('/:id', todoItemController.markCompleted)

module.exports = todoItemRouter