import React, { startTransition } from "react";
import WeatherIcon from "./WeatherIcon"
import axios from "axios";



export default function WeatherForecast(props) {
    
    function showForecast(response){
        console.log(response.data);
    }

    let apiKey= "082d3d02ffdb12f2fd9b259e2ced1d0d"
    let lat =props.coordinates.lat
    let lon = props.coordinates.lon
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(showForecast)

    return (
        <div className="Weather-forecast">
            <div className="row">
                <div className="col">
                    <h4>
                        Mon
                    </h4>
                    <span className="Forecast-temp-high">
                        20° 
                    </span>
                    <span className="Forecast-temp-low">
                    13°
                    </span>
                    <WeatherIcon iconCode="10n" size={40}/>
                </div>
            </div>
            
        </div>
    )
}