const path = require('path')

const express = require('express')
const { default: mongoose, Collection } = require('mongoose')
const DB_PATH = "mongodb://admin0:admin@ac-phkcd3l-shard-00-00.cxzzuah.mongodb.net:27017,ac-phkcd3l-shard-00-01.cxzzuah.mongodb.net:27017,ac-phkcd3l-shard-00-02.cxzzuah.mongodb.net:27017/to-do?ssl=true&replicaSet=atlas-7d8ajg-shard-0&authSource=admin&appName=Cluster0"

const app = express()

app.use(express.urlencoded())
app.use(express.static(path.join(rootDir, 'public')))


app.use(errorsController.pageNotFound)
const PORT = 5000;

mongoose.connect(DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log('Error Connecting in Database', err)
})