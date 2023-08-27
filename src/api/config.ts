import axios from 'axios';

export const CONFIG = {
  apiUrl:
    process.env.REACT_APP_API_BASE_URL ??
    'https://free-to-play-games-database.p.rapidapi.com/api/',
  apiKey: process.env.REACT_APP_API_KEY ?? '',
  apiHost: process.env.REACT_APP_API_HOST ?? '',
};

export const http = axios.create({
  baseURL: CONFIG.apiUrl,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
  },
});
