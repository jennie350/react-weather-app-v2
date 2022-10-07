import React, {useState} from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";

import './Weather.css'

export default function Weather() {
   
    let [weather, setWeather] = useState ({ready: false});

function showWeather(response) {
    
    setWeather({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt*1000),
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
}

if(weather.ready) {
    return(
<div className="Container">
        <div className="Wrapper">
            <div className="row">
                <div className="col-9">
               <form >
                <input 
                type="search" 
                placeholder="🔍 Type city and press Enter"
                className="form-control"
               
                />
                </form> 
        </div>
                    <div className="col-3">
                        <input  type="submit" value="Current location" className="btn btn-dark"/>
                         </div>
                         
                         </div>
                         <div className="row">
                            
                                <h1>
                                {weather.city}
                                </h1>
                                
                            </div>
                            <div className="row">
                                <p className="Last-updated">Last updated: <FormattedDate date={weather.date}/> </p>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <img src={weather.icon} alt={weather.description}/>
                                </div>
                                <div className="col-3">
                                    <h2>{Math.round(weather.temperature)}</h2><span className="Unit">°C</span>
                                    <p className="Feels-like">Feels like 25°C</p>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li>
                                            <strong className="text-capitalize">{weather.description}</strong>
                                
                                        </li>
                                        <li>
                                            Wind speed {Math.round(weather.wind)} km/h
                                        </li>
                                        <li>
                                            Humidity {weather.humidity}%
                                        </li>
                                    </ul>
                                </div>
                            </div>

            </div>
            <footer>
<a href="https://github.com/jennie350/react-weather-app-v2" target="_blank" rel="noreferrer" >Open source code</a> by Jenny Watts.
            </footer>
            </div>
    )
}
else {

    const apiKey = `231ed3df4994864b8ef548d669b7c1d7`;
    let city ="Berlin"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)

    return (
    "Loading..."
       
    )
} 
}

    