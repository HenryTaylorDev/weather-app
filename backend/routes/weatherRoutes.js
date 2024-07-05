const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const API_KEY = process.env.WEATHER_API_KEY; // Replace with your actual API key

router.get("/current", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).send("City is required");
  }

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    if (error.response && error.response.status === 404) {
      res.status(404).send("City not found");
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

module.exports = router;
