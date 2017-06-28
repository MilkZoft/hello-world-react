// Dependencies
import express from 'express';

// Data
import books from '../../data/books.json';

// Express Router
const Router = express.Router();

Router.get('/books', (req, res, next) => {
  res.json(books);
});

// localhost:3000/api/library/book?id=1
Router.get('/book', (req, res, next) => {
  const {
    query: {
      id = 0
    }
  } = req;

  const selectedBook = books.response.filter(book => book.id === Number(id));

  res.json({
    response: selectedBook
  });
});

export default Router;
