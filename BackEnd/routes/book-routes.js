const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const BookControllers = require("../controllers/bookControllers");

router.get("/", BookControllers.getAllBooks);

router.post("/", BookControllers.addbooks);

router.get("/:BookId",BookControllers.getById);

router.put("/:BookId", BookControllers.updateId);
router.delete("/:BookId", BookControllers.deleteById);


module.exports = router;
