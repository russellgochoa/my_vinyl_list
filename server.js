const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

const { Record } = require('./models')
const { createRecord } = require('./controllers/RecordController')
// CONTROLLERS
// const RecordController = require('./controllers/RecordController')

// ROUTES

// GET records

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

// app.get('/', (req, res) => {
//   res.send('This is root!')
// })

// POST create new record

// app.post('/records', async (req, res) => {
//   try {
//     const newRecord = req.body
//     console.log(req.body)
//     const record = new Record(newRecord)
//     await record.save()
//     if (!record) throw Error('Record not found')
//     res.json(record)
//   } catch (e) {
//     console.log(e)
//     res.send('Record not found!')
//   }
// })

app.post('/records', createRecord)

// app.post('/records', (req, res) => {
//   console.log(`You've sent a post request to the /hello endpoint.`)
//   res.send({ msg: 'Thanks for the post!' })
// })

// PUT update an existing record

app.put('/records/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const record = await Record.findByIdAndUpdate(
      _id,
      {
        description: req.body.description
      },
      { new: true }
    )
    if (!record) throw Error('Record not found')
    res.json(record)
  } catch (e) {
    console.log(e)
    res.send('Record not found!')
  }
})

// app.put('/records', (req, res) => {
//   res.send(`User profile with the username of ${req.params.id} was updated`)
// })

// DELETE an existing records

app.delete('/tacos', (req, res) => {
  res.send({
    msg: `I deleted the ${req.query.type} with an id of ${req.query.tacoId}`
  })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
