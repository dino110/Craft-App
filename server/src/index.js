const express = require('express');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://dino110:Dinamo1986@craftappcluster.4qnks.mongodb.net/Craft-app',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log('Connected to DB..');
  })
  .catch((err) => console.log(err.reason));

// Client.create();

// TODO
// Add middleware (bodyparser)
// Connect to mongoose
// Import models module
// Import controllers module

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

// Start on specific port
const PORT = 3001;
app.listen(PORT, () => console.log(`There will be dragons on port ${PORT}`));
