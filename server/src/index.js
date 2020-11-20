const express = require('express')
const app = express()

//TODO
// Add middleware (bodyparser)
// Connect to mongo
// Import models module
// Import controllers module

app.get('/', (req, res) => {
  res.send('Hello world')
})



// Start on specific port
const PORT = 3001
app.listen(PORT, () => console.log(`There will be dragons on port ${PORT}`))