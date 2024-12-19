import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//import the routes and store into a variable
import bookRoutes from './route/book.route.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to MongoDB with handling try catch block
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected successfully');
} catch (error) {
  console.log('MongoDB connection failed');
}

app.get('/', (req, res) => {
  res.send('Hello World***!');
});

//use the routes
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
