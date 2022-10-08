import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import './Weather.css'

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity)
    const [weather, setWeather] = useState ({ready: false});
    

function showWeather(response) {
    
    setWeather({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt*1000),
        temperature: response.data.main.temp,
        feelsTemp: response.data.main.feels_like,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon
      });
}

function search(){
    const apiKey = `231ed3df4994864b8ef548d669b7c1d7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)
}

function handleSubmit(event){
    event.preventDefault();
    search()
}

function changeCity(event){
    setCity(event.target.value);
    }

if(weather.ready) {
    return(
        <div className="Container">
        <div className="Wrapper">
            <div className="row">
                <div className="col-9">
               <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                placeholder="🔍 Type city and press Enter"
                className="form-control"
                onChange={changeCity}
                />
                </form> 
        </div>
                    <div className="col-3">
                        <input  type="submit" value="Current location" className="btn btn-dark"/>
                         </div>
                         </div>
                         <WeatherInfo info={weather}/>
                         </div>
                         <footer>
                          <a href="https://github.com/jennie350/react-props-app-v2" target="_blank" rel="noreferrer" >Open source code</a> by Jenny Watts.
                                      </footer>
                         </div>
                         
                                     
 )
}
else {

    search()

    return (
       
    "Loading..."
       
    )
} 
}

    