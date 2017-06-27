// Dependencies
import express from 'express';

// Data
import posts from '../../data/posts.json';

// Express Router
const Router = express.Router();

Router.get('/posts', (req, res, next) => {
  res.json(posts);
});

Router.get('/post', (req, res, next) => {
  const {
    query: {
      slug = ''
    }
  } = req;

  const selectedPost = posts.response.filter(book => book.slug === slug);

  res.json({
    response: selectedPost
  });
});

export default Router;
