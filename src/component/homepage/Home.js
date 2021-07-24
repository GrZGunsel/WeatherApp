import React, { useEffect, useState } from "react";
import "./Home.css";
import Weather from "../weather/Weather";
import { AiOutlineSearch } from "react-icons/ai";
import { getWeatherData } from "../getWeather/GetWeather";
import SearchHistory from "../SearchHistory/SearchHistory";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

const Home = () => {
  const [City, setCity] = useState("Kathmandu");
  const [weatherData, setweatherData] = useState(null);
  const [Loading, setLoading] = useState(false);
  let getData = async () => {
    try {
      const data = await getWeatherData(City);
      setweatherData(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {weatherData !== null ? (
        <div className={`background-image ${weatherData.weather[0].main}`}>
          <div className="main-content">
            <div className="left-container">
              <Weather
                weather={weatherData.weather[0].main}
                temperature={parseFloat(weatherData.main.temp - 272.15).toFixed(
                  0
                )}
                name={weatherData.name}
              />
            </div>
            <div className="right-container">
              <div className="searchbox">
                <input
                  type="text"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="search city"
                />
                <button type="submit" onClick={() => getData()}>
                  <AiOutlineSearch size={15} />
                </button>
              </div>
              <SearchHistory />
              <WeatherDetail
                Humidity={weatherData.main.humidity}
                Pressure={weatherData.main.pressure}
                Country={weatherData.sys.country}
                Wind={weatherData.wind.speed}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
