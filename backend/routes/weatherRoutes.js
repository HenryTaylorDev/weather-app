const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherContoller");

// Route to get current weather
router.get("/current", weatherController.getCurrentWeather);

module.exports = router;
