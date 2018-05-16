const express = require('express')
const path = require('path')

// express app
const app = express()

// port number
const port = process.env.PORT || 8080

// serve static folder
app.use(express.static(
  path.join(__dirname, 'dist', 'website')
))

// fire up the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
