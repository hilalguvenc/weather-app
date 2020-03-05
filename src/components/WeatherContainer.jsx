import React from "react";

function WeatherContainer() {
  return (
    <div className="weather-container">
      <header className="weather-header">
        <h3>Weather</h3>
        <div>
          <input placeholder="Zip Code" className="search-input" />
          <button className="material-icons">search</button>
        </div>
      </header>
    </div>
  );
}
export default WeatherContainer;
