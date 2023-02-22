const bookService = require("../services/book");
const axios = require('axios');
require('dotenv').config()
 
exports.getAllBook = async (req, res) => {
  try {
    const book = await bookService.getAllBook();
    res.json({ data: book, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchBook = async (req, res) => {
  const title = req.body.bookTitle.replace(/ /g, '%20');
  const urlGoogle = 'https://www.googleapis.com/books/v1/volumes?q='+ title +'&maxResults=9&key=' + process.env.ACCESSKEY
  await axios({
    method:'GET',
    url: urlGoogle,
  }).then(response => {
    response.data.items.map((v) => {
      if (v.volumeInfo.description){
      let word = v.volumeInfo.description.split(' ')
      let res = word[0];
      for(var i = 1; i <= 11; i++){
        res = res.concat(' ', word[i])
        if(i === 4){
          res = res.concat('...')
        }
      }

      v.volumeInfo.description = res}
    })
    res.json({ data: response.data})
  });
};

exports.createBook = async (req, res) => {
  console.log(req.body)
  try {
    const book = await bookService.createBook(req.body);
    res.json({ data: book, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};