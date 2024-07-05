import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const getCurrentWeather = async (city) => {
  const response = await axios.get(`${API_BASE_URL}/api/weather/current`, {
    params: { city },
  });
  return response.data;
};

const weatherService = {
  getCurrentWeather,
};

export default weatherService;
