import createDate from "./createDate.js";

const parseForecastData = (forecastData) => {

  const weatherForecast = forecastData["list"].map(forecast => {

    return {
      dateString: createDate(forecast["dt"]*1000),
      weatherid: forecast["weather"][0]["id"],
      weatherText: forecast["weather"][0]["description"],
      weatherIcon: forecast["weather"][0]["icon"],
      temp: `${Math.round(forecast["main"]["temp"] - 273.15).toString()}°C`
    }
  });

return weatherForecast;
};

export default parseForecastData;