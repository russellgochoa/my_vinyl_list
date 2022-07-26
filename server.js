const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

const { Record } = require('./models')

app.get('/records', async (req, res) => {
  const records = await Record.find({})
  res.json(records)
})

app.get('/records/:id', async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findById(id)
    if (!record) throw Error('Record not found')
    res.json(record)
  } catch (e) {
    console.log(e)
    res.send('Record not found!')
  }
})

app.post('/hello', (request, response) => {
  console.log(`You've sent a post request to the /hello endpoint.`)
  response.send({ msg: 'Thanks for the post!' })
})

// app.get('/', (req, res) => {
//   res.send('This is root!')
// })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
