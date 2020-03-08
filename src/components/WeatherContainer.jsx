import React ,{useState,useEffect} from "react";

function WeatherContainer() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const json = await response.json();
    setCountries(json[0]);
    console.log(json)
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="weather-container">
      <header className="weather-header">
        <h3>Weather</h3>
        <div>
          <p>{countries.name}</p>
          </div>
      </header>
    </div>
  );
}
export default WeatherContainer;
