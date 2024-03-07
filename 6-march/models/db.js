const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
  _id: String,
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  countries: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    type: Object
  },
  year: Number,
  imdb: {
    type: Object
  },
  tomatoes: {
    type: Object
  }
});
module.exports = mongoose.model('Movie',movieSchema);

