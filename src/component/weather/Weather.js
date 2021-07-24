import React from "react";
import "./weather.css";

import ReactAnimatedWeather from "react-animated-weather";
const Weather = ({ temperature, weather, name }) => {
  const defaults = {
    animate: true,
    size: 63,
  };
  function Weathericon() {
    if (weather === "Clouds") {
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    }
    if (weather === "Clear") {
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    }
    if (weather === "Rain") {
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    }
    if (weather === "Wind") {
      return (
        <ReactAnimatedWeather
          icon="WIND"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    } else {
      console.error("err");
    }
  }
  return (
    <div>
      <div className="logo">
        <h6>weather app</h6>
      </div>
      <div className="temperature">
        <div className="current-temperature">
          <h1>{temperature}&deg;</h1>
        </div>
        <div className="city">
          <h2>{name}</h2>
          <p> 14th June 2021</p>
        </div>
        <div className="weather">
          <Weathericon />
          <p> {weather}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
