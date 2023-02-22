const BookModel = require("../models/book");

 
exports.getAllBook = async () => {
  const res = await BookModel.find();
  return res
};

exports.createBook = async (book) => {
  console.log(book)
  const res = await BookModel.create(book);
  return res
};