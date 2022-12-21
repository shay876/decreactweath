import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <div className="WeatherForecast-icon">
              {forecast[0].weather[0].icon}
            </div>
            <span className="WeatherForecast-max">
              {Math.round(forecast[0].temp.max)}°{" "}
            </span>
            |
            <span className="WeatherForecast-min">
              {" "}
              {Math.round(forecast[0].temp.min)}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
