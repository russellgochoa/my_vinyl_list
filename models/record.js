const { Schema } = require('mongoose')

const recordSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    list_ID: { type: Schema.Types.ObjectId, ref: 'Record' }
  },
  { timestamps: true }
)

module.exports = recordSchema
