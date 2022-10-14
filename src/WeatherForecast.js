import React from "react";
import WeatherIcon from "./WeatherIcon"
import axios from "axios";



export default function WeatherForecast() {

    function showForecast(response){
        console.log(response.data)
    }

    let apiKey= "231ed3df4994864b8ef548d669b7c1d7"
    let lat ="103.8198"
    let lon ="1.3521"
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`

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