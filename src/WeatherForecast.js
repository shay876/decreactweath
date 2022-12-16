import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Next Day</div>
          <div className="WeatherForecast-icon">🌞</div>
          <span className="WeatherForecast-max">High ° </span>|
          <span className="WeatherForecast-min"> Low °</span>
        </div>
      </div>
    </div>
  );
}
