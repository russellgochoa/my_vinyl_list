const { Schema } = require('mongoose')

const listSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = listSchema
