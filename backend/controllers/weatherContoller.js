const weatherService = require("../services/weatherService");

exports.getCurrentWeather = async (req, res) => {
  const { city } = req.query;
  try {
    const weatherData = await weatherService.fetchCurrentWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
};
