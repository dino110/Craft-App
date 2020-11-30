const express = require("express");
const mongoose = require("mongoose");
const clientRouter = require("./routers/clients");
const userRouter = require("./routers/users");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to DB..");
  })
  .catch((err) => console.log(err.reason));

// TODO
// Add middleware (bodyparser)
// Connect to mongoose
// Import models module
// Import controllers module

const app = express();

app.use(express.json());
app.use(clientRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Start on specific port
const PORT = 3001;
app.listen(PORT, () => console.log(`There will be dragons on port ${PORT}`));
