import axios from 'axios';

const getWeather = (query) => {
if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${key}`) //TODO: Create env variable for key
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
 }
};

export default getWeather;