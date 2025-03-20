import { useEffect, useState } from "react";
import temperatureService from "../services/temperature";

const Country = ({ country }) => {
  if (!country) return null;

  const {
    name: { common: countryName },
    area,
    languages,
    flags,
    capitalInfo,
  } = country;

  const [currentWeather, setCurrentWeather] = useState({
    icon: null,
    tempCelsius: null,
    speedWind: null,
    description: null
  });

  const countryCapital = country.capital[0];
  const [lat, lng] = capitalInfo.latlng;

  useEffect(() => {
    temperatureService
      .getWeather(lat, lng)
      .then((data) => {
        // console.log(data);
        setCurrentWeather({
          icon: data.weather[0].icon,
          tempCelsius: (data.main.temp - 273.15).toFixed(2),
          speedWind: data.wind.speed,
          description: data.weather[0].description
        });
      });
  }, [country]);

  return (
    <>
      <div>
        <h1>{countryName}</h1>
        <p>
          Capital {countryCapital} <br /> Area {area}
        </p>

        <h2>Languages</h2>
        <ul>
          {Object.values(languages).map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>

        <img src={flags.png} alt={flags.alt} />

        {currentWeather ? (
          <>
            <h2>Weather in {countryCapital}</h2>
            <p>Temperature {currentWeather.tempCelsius} Celsius</p>
            <img
              src={`https://openweathermap.org/img/wn/${currentWeather.icon}.png`}
              alt={currentWeather.description}
            />
            <p>Wind {currentWeather.speedWind} m/s</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  );
};

export default Country;
