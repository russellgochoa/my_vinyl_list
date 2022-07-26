const Record = require('../models')

const createRecord = async (req, res) => {
  try {
    const record = await new Record(req.body)
    await record.save()
    return res.status(201).json({
      record
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRecords = async (req, res) => {
  try {
    const records = await Record.find()
    return res.status(200).json({ records })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRecord,
  getAllRecords
}
