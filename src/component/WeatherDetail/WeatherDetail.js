import React from "react";
import "./WeatherDetail.css";
const WeatherDetail = ({ Humidity, Pressure, Wind, Country }) => {
  return (
    <>
      <div className="weatherDetail_header">Weather Detail</div>
      <div className="weatherDetail">
        <div className="weatherComponent">
          <h6>Humidity</h6>
          <p>{Humidity} %</p>
        </div>
        <div className="weatherComponent">
          <h6>Pressure</h6>
          <p>{Pressure} hpa</p>
        </div>
        <div className="weatherComponent">
          <h6>Wind</h6>
          <p>{Wind} m/s</p>
        </div>
        <div className="weatherComponent">
          <h6>Country</h6>
          <p>{Country}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherDetail;
