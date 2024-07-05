import axios from "axios";

export const fetchWeather = async (location) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    return { data: response.data, error: null };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return {
        data: null,
        error: "City not found. Please enter a valid place name.",
      };
    } else {
      return {
        data: null,
        error: "An error occurred while fetching weather data.",
      };
    }
  }
};
