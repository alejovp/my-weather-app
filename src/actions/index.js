import axios from 'axios';
import Constants from '../constants';

const API_BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Constants.API_WEATHER_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${API_BASE_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}