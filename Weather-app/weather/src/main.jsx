import React, { useState } from "react";

function MainContent() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "7160996784c2f6c234079c359e5a571a";

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const searchWeather = () => {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setWeather(null);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter city to search"
            value={city}
            onChange={handleInputChange}
          />
          <button onClick={searchWeather}>Search</button>
        </div>
        {error && <div className="error">{error}</div>}
        {weather && (
          <div className="weather-details">
            <h2>Weather details for {weather.name}</h2>
            <p>Temperature: {weather.main.temp} Kelvin</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Weather: {weather.weather[0].main}</p>
          </div>
        )}
        {!weather && !error && (
          <div className="weather-details">
            Enter a city to search for weather details
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
