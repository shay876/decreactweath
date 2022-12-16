import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <div>
          <span className="temperature">{Math.round(props.celcius)}</span>
          <span className="unit">
            °C |
            <a href="/" onClick={convertToFarenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div>
          <span className="temperature">{Math.round(farenheit)}</span>
          <span className="unit">
            <a href="/" onClick={convertToCelcius}>
              °C
            </a>{" "}
            | °F{" "}
          </span>
        </div>
      </div>
    );
  }
}
