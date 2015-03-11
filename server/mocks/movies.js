module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();

  moviesRouter.get('/', function(req, res) {
    var movies = require('../../data/movie-page1.json');
    res.send(movies);
  });

  moviesRouter.get('/:id', function(req, res) {
    var movies = require('../../data/movie-page1.json');
    var movie = movies.results.filter(function(movie) {
      return movie.id == req.params.id;
    });
    res.send(movie);
  });

  app.use('/api/movies', moviesRouter);
};
