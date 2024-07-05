const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherContoller");

router.get("/current", weatherController.getCurrentWeather);

module.exports = router;
