const Book = require("../model/book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No product found" });
  }

  return res.status(200).json({ books });
};

const addbooks = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Book is not available" });
  }
  return res.status(201).json({ book });
};

const getById = async (req, res, next) => {
  const id = req.params.BookId;
  let book;

  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No product found" });
  }

  return res.status(200).json({ book });
};

const updateId = async (req, res, next) => {
  const id = req.params.BookId;
  const { name, author, description, price, available } = req.body;

  let book;

  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });

    book = await Book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res
      .status(404)
      .json({ message: "unable to update book of this id" });
  }

  return res.status(200).json({ book });
};

const deleteById = async (req, res, next) => {
  const id = req.params.BookId;

  let book;

  try {
    book = await Book.findOneAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res
      .status(404)
      .json({ message: "unable to delete book of this id" });
  }

  return res.status(200).json({ message: "Book Deleted Succsecfully" });
};

exports.getAllBooks = getAllBooks;
exports.addbooks = addbooks;
exports.getById = getById;
exports.updateId = updateId;
exports.deleteById = deleteById;
