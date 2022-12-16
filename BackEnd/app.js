const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:Mahant1309@cluster0.p18au7h.mongodb.net/BookStore?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected Database");
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((er) => {
    console.log(er);
  });

// Mahant1309
