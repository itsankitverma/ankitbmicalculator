import React, { useState } from "react";
import "./weather.css";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Footer from "../Footer";
function Weather() {
  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [celcius, setcelcius] = useState("");
  const [humidity, sethumidity] = useState("");
  const [pressure, setpressure] = useState("");
  const [maxtemp, setmaxtemp] = useState("");
  const [mintemp, setmintemp] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [main, setmain] = useState("");

  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  function callweather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${weather},&APPID=767a7cce68ed2b3098d41e24364ec56c`
    )
      .then((res) => res.json())
      .then((result) => (
        <>
          {
            (settemp(result.main.temp),
            setcelcius(result.main.temp),
            sethumidity(result.main.humidity),
            setpressure(result.main.pressure),
            setmaxtemp(result.main.temp_max),
            setmintemp(result.main.temp_min),
            setcity(result.name),
            setcountry(result.sys.country),
            setmain(result.weather[0].main),
            console.log(result))
          }
        </>
      ));
  }

  const Handle = (e) => {
    setweather(e.target.value);
  };
  return (
    <div className="cityDetails">
      <div>
        <div className="cityText">
          <span style={{ fontSize: 20 }}>Enter Your City:</span>
          <input type="text" onChange={Handle} value={weather} />
          <button
            onClick={() => {
              callweather();
            }}
          >
            Enter
          </button>
        </div>
        <div className="cityDetail">
          <div className="cityTop">
            {" "}
            {city}, {country} | Weather
          </div>
          <div className="cityTemp"> {Math.round(celcius - 273.15)}°C</div>
          <div className="cityMain"> {main}</div>
          <div className="cityTime"> {time} IST</div>
          <div className="cityDayNight">
            <NightsStayIcon />
          </div>
        </div>
        <div className="callAtcenter">
          <br />
          Temperature in Celcius is : {Math.round(celcius - 273.15)}°C <br />
          Pressure : {pressure} <br />
          Humidity is : {humidity}% <br />
          Max Temp is : {Math.round(maxtemp - 273.15)} <br />
          Min Temp is : {Math.round(mintemp - 273.15)} <br />
          City is : {city} <br />
          Country is : {country} <br />
          Main is : {main} <br />
          <br />
          {/* <button
            style={{ position: "relative", top: -15 }}
            onClick={() => {
              setcelcius(celcius - 273.15);
            }}
          >
            convert to celcius
          </button> */}
        </div>
      </div>
      <div
        className="footer"
        style={{ color: "black", placeContent: "center", display: "grid" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Weather;
