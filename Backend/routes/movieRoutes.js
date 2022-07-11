const router = require("express").Router();
const Movie = require("../models/movie");

//Create movie
router.post("/create", async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    res.status(201).json("savedMovie");
  } catch (err) {
    status.json(err);
  }
});

//Update movie
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateMovie = req.body;
    const options = { new: true };

    const result = await Movie.findByIdAndUpdate(id, updateMovie, options);

    res.send(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete movie
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Movie.findByIdAndDelete(id);
    res.send(`Movie with name: ${data.title} has been successfully deleted`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get 1 movie by id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Movie.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get all movie
router.get("/getAll", async (req, res) => {
  try {
    const data = await Movie.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
