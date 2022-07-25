const db = require('../db')
const { Record, List } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const list1 = await new List({
    name: 'Havelist'
  })
  list1.save()

  const list2 = await new List({
    name: 'Wishlist'
  })
  list2.save()

  const records = [
    {
      title: 'Bridge Over Troubled Water',
      artist: 'Simon & Garfunkel',
      description: 'Black Vinyl',
      image: 'https://i.imgur.com/KKnTP9g.jpg',
      list: list2._id
    },
    {
      title: 'Years',
      artist: 'Sun June',
      description: 'Clear Vinyl',
      image: 'https://i.imgur.com/xOpgRq1.jpg',
      list: list1._id
    },
    {
      title: 'A Moon Shaped Pool',
      artist: 'Radiohead',
      description: 'Coke Bottle Green Vinyl',
      image: 'https://i.imgur.com/ivt6RFY.jpg',
      list: list2._id
    }
  ]

  await Record.insertMany(records)
  console.log('Created records!')
}

const run = async () => {
  await main()
  db.close()
}

run()
