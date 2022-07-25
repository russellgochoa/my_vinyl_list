const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/records', (req, res) => {
  res.send("You're a wizard, Harry!")
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
