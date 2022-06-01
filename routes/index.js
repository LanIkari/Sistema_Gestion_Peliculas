const express = require('express');
const router = express.Router();
const Peliculas = require('../config/esquemas');
require('../config/conexion');

/* GET home page. */
router.get('/', function(req, res, next) {
  Peliculas.find().then(result => {
    res.status(200);
    res.render('index', {result})
  });
});

router.delete('/:id', (req, res, next) => {
  var route = "/";
  Peliculas.deleteOne({'_id': req.params.id}).then(result => {
    res.status(200);
    res.redirect(route);
  });
});

router.post('/addform', (req, res, next) => {
  var route = "/";
  const pelicula = new Peliculas({
      _id: req.body._id,
      titulo: req.body.titulo,
      anno: req.body.anno,
      genero: req.body.genero,
      duracion: req.body.duracion,
      sinopsis: req.body.sinopsis,
      director: req.body.director,
      reparto: req.body.reparto
  });
  pelicula.save();
  res.status(200);
  res.redirect(route);
});

router.get('/addform', function(req, res, next) {
  Peliculas.find().then(result => {
    res.status(200);
    res.render('addform');
  });
});


module.exports = router;
