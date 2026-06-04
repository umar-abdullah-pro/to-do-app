const express = require('express')
const todoItemRouter = express.Router()

const todoItemController = require('../Controllers/todoItemController')

todoItemRouter.post('/', todoItemController.createTodoItems)

module.exports = todoItemRouter