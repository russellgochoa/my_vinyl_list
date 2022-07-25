const { Schema } = require('mongoose')

const recordSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Record' }
  },
  { timestamps: true }
)

module.exports = recordSchema
