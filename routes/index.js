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

module.exports = router;
