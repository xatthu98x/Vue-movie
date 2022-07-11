const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    trailer: { type: String },
    tmdb: { type: String, unique: true },
    year: { type: String },
    limit: { type: String },
    genre: { type: String },
    duration: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
