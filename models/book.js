const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const bookSchema = new Schema({
  title: String,
  description: String,
  authors: [String],
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Book", bookSchema);