const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRouter = require("./routes/book");
const cors = require("cors");

  app.use(cors());
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use("/api/book", bookRouter);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/books",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );

app.use(express.urlencoded({ extended: true }));
 
module.exports = app;
