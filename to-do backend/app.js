const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const cors = require('cors')
const DB_PATH = "mongodb://admin0:admin@ac-phkcd3l-shard-00-00.cxzzuah.mongodb.net:27017,ac-phkcd3l-shard-00-01.cxzzuah.mongodb.net:27017,ac-phkcd3l-shard-00-02.cxzzuah.mongodb.net:27017/TODO?ssl=true&replicaSet=atlas-7d8ajg-shard-0&authSource=admin&appName=Cluster0"

const todoItemRouter = require('./routes/todoItemRouter')
const errorsController = require('./controllers/errorsController')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api/todo', todoItemRouter)

app.use(errorsController.pageNotFound)
const PORT = 3000;

mongoose.connect(DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log('Error Connecting in Database', err)
})