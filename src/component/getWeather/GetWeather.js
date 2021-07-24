import axios from "axios";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "c6a3f9bc1d4cd1d44fe185ed01d28006";

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};
