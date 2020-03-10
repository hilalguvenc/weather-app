import React, { useState, useEffect } from "react";
import { format, addDays } from "date-fns";

function WeatherContainer() {
  const [countries, setCountries] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [dailyWeather, setDailyWeather] = useState(0);
  const [weeklyWeather, setWeeklyWeather] = useState(0);
  const [startDate, setStartDate] = useState(0);

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
    const lat = json.results[0].geometry.lat;
    const lon = json.results[0].geometry.lng;
    setLat(lat);
    setLon(lon);
    console.log(lat);
    console.log(lon);
  };
  const getDailyWeather = async () => {
    const strtdate = format(startDate, "yyyy-MM-dd");
    const enddt = format(addDays(startDate, 1), "yyyy-MM-dd");
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lon}&start_date=${strtdate}&end_date=${enddt}&key=a317f6a1df6846e4b668ce089528ba71`
    );
    const json = await response.json();
    setDailyWeather(json);
    console.log(json);
  };
  useEffect(() => {
    getCountries();
    getCoordinates();
    getDailyWeather();
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
