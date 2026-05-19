const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/movies/:name", async (req, res) => {
  try {

    console.log("API KEY:", process.env.API_KEY);

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.params.name}`
    );

    console.log(response.data);

    res.json(response.data);

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    res.status(500).json({
      message: "Error fetching movies"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});