const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    year: Number,
    cast: [],
    

})

exports.Movie = mongoose.model('Movie', movieSchema);



