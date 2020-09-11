const express = require('express')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api')
const viewRoutes = require('./routes/view')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', apiRoutes)
app.use('/', viewRoutes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.listen(PORT, () => {
  console.log('app running on port' + PORT)
})
