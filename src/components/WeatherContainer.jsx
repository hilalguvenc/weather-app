import React, { useState, useEffect } from "react";

function WeatherContainer() {
  const [countries, setCountries] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const getCountries = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const json = await response.json();
    setCountries(json);
    console.log(json);
  };
  const getCoordinates = async () => {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=$capital&key=60cc6b02d2b241aea26852a4fe7a18a6`
    );
    const json = await response.json();
    setCoordinates(json.results);
    const lat = json.results[2].geometry.lat;
    const lon = json.results[2].geometry.lng;
    setLat(lat);
    setLon(lon);
    console.log(lat);
    console.log(lon);
  };
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    getCoordinates();
  }, []);
  return (
    <div className="weather-container">
      <header className="weather-header">
        <h3>Weather</h3>
        <div>
          <ul>
            {countries.map((country, index) => {
              return (
                <li key={index}>
                  <button>{country.name}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}
export default WeatherContainer;
