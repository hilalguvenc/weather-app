import React, { useState, useEffect } from "react";

function WeatherContainer() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/all?fields=name`
    );
    const json = await response.json();
    setCountries(json);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="weather-container">
      <header className="weather-header">
        <h3>Weather</h3>
        <div>
          <ul>
            {countries.map((country, index) => {
              return <li key={index}>{country.name}</li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}
export default WeatherContainer;
