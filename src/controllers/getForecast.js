import axios from 'axios';



const weatherKey = process.env.REACT_APP_WEATHER_KEY;

console.log(process.env);
console.log(weatherKey);

const getForecast = (query) => {
if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${weatherKey}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
 }
};

export default getForecast;