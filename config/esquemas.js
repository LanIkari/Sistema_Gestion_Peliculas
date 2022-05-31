'use strict';
const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    titulo: {type: String, required: true},
    anno: {type: Number, required: true},
    genero: {type: String, required: true},
    duracion: {type: String, required: true},
    sinopsis: {type: String, required: true},
    director: {type: String, required: true},
    reparto: {type: String, required: true}
});

module.exports = mongoose.model('Peliculas', peliculaSchema)
