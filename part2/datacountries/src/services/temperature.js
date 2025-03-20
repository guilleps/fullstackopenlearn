import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const open_weather_key = import.meta.env.VITE_WEATHER_KEY

const getWeather = async (lat, lon) => {
    return axios
        .get(`${baseUrl}/?lat=${lat}&lon=${lon}&appid=${open_weather_key}`)
        .then(res => res.data);
}

export default {
    getWeather
}