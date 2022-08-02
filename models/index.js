const mongoose = require('mongoose')
// const recordSchema = require('./Record')
// const listSchema = require('./List')

const Record = mongoose.model('Record', recordSchema)
const List = mongoose.model('List', listSchema)

module.exports = {
  Record,
  List
}
