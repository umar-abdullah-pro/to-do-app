const express = require('express')
const todoItemRouter = express.Router()
const todoItemController = require('../Controllers/todoItemController')

todoItemRouter.post('/items', todoItemController.createTodoItems)

module.exports = todoItemRouter