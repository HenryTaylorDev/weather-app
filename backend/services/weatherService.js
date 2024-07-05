const axios = require("axios");
require("dotenv").config();

exports.fetchCurrentWeather = async (city) => {
  const API_KEY = process.env.WEATHER_API_KEY;
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  return response.data;
};
