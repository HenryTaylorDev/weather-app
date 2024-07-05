import React, { useState } from "react";
import weatherService from "../services/weatherService";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setError("");

      setLoading(true);

      const data = await weatherService.getCurrentWeather(city);

      setWeather(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      if (error.response && error.response.status === 404) {
        setError("City not found. Please enter a valid place name.");
      } else {
        setError("An error occurred while fetching weather data.");
      }

      setWeather(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
