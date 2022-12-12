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
        <div className="col-6">
          <div className="temperature">{Math.round(props.celcius)}</div>
          <div className="unit">
            °C |{" "}
            <a href="/" onClick={convertToFarenheit}>
              °F
            </a>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="col-6">
          <div className="temperature">{Math.round(farenheit)}</div>
          <div className="unit">
            <a href="/" onClick={convertToCelcius}>
              °C
            </a>{" "}
            | °F{" "}
          </div>
        </div>
      </div>
    );
  }
}
