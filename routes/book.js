const express = require("express");
const {
  getAllBook,
  createBook,
  searchBook
} = require("../controllers/book");
 
const router = express.Router();
 
router.route("/").get(getAllBook).post(createBook);
router.route("/searchBooks").post(searchBook);
 
module.exports = router;