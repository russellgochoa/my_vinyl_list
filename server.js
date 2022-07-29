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
app.use(express.static(`${__dirname}/client/build`))

const { Record } = require('./models')
const { List } = require('./models')

// CONTROLLERS
const {
  createRecord,
  getAllRecords
} = require('./controllers/RecordController')

const { getAllLists } = require('./controllers/ListController')

// const RecordController = require('./controllers/RecordController')

// ROUTES

// GET Lists

app.get('/lists', getAllLists)

// GET records

app.get('/records', getAllRecords)

// app.get('/records', async (req, res) => {
//   const records = await Record.find({})
//   res.json(records)
// })

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

// POST (create new record)

app.post('/records', createRecord)

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

// app.post('/records', (req, res) => {
//   console.log(`You've sent a post request to the /hello endpoint.`)
//   res.send({ msg: 'Thanks for the post!' })
// })

// PUT (update an existing record)

app.put('/records/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const record = await Record.findByIdAndUpdate(_id, req.body, { new: true })
    if (!record) throw Error('Record not found')
    res.json(record)
  } catch (e) {
    console.log(e)
    res.send('Record not found!')
  }
})

// DELETE an existing record

app.delete('/records/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const deleted = await Record.findByIdAndDelete(_id)
    if (deleted) {
      return res.status(200).send('Record deleted')
    }
    throw new Error('Record not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
