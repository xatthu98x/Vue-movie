const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes.js");
const movieRoutes = require("./routes/movieRoutes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => console.log(err));
}

app = express();

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
  })
);

app.use(express.json());

app.use("/api", userRoutes);
app.use("/movie", movieRoutes);

app.listen(8000, () => {
  console.log("Backend server is running");
});
