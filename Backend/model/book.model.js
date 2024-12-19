import mongoose from 'mongoose';

//Write a schema for the data
const bookSchema = mongoose.Schema({
  title: String,
  name: String,
  price: Number,
  category: String,
  image: String,
});
const Book = mongoose.model('Book', bookSchema); //in database it will store as Book

export default Book;
