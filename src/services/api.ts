import axios from 'axios';

const googlePlacesApi = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/"
});

const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/"
});

export { googlePlacesApi, openWeatherApi }