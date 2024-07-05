import { useState } from "react";
import { fetchWeather } from "../api/weatherApi";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleFetchWeather = async () => {
    const { data, error } = await fetchWeather(location);
    setWeather(data);
    setError(error);
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        locationholder="Enter location"
      />
      <button onClick={handleFetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
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
