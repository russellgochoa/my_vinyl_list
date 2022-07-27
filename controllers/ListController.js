const { List } = require('../models')

const createList = async (req, res) => {
  try {
    const list = await new List(req.body)
    await list.save()
    return res.status(201).json({
      list
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllLists = async (req, res) => {
  try {
    const lists = await List.find()
    return res.status(200).json({ lists })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createList,
  getAllLists
}
