module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();

  moviesRouter.get('/', function(req, res) {
    var movies = require('../../data/movie-page1.json');
    res.send(movies);
  });

  moviesRouter.get('/:id', function(req, res) {
    var movie = require('../../data/movie/' + req.params.id + '.json');
    res.send(movie);
  });

  app.use('/api/movies', moviesRouter);
};
