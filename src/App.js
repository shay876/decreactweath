import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather defaultCity="Calgary" />
        <footer>
          <a href="https://github.com/shay876/decreactweath" target="_blank">
            {" "}
            Open Source by Shayla
          </a>
        </footer>
      </div>
    </div>
  );
}
