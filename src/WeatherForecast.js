import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]=useState(null);

    useEffect(() => {
setLoaded(false);
    }
    ,[props.coordinates]
    );

    function showForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);

    }

    function searchForecast(){
        let apiKey= "082d3d02ffdb12f2fd9b259e2ced1d0d";
        let lat =props.coordinates.lat;
        let lon = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast)
    }


if(loaded) {
    return (
        <div className="Weather-forecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {

                   if (index < 5) {
                return (
                    <div className="col" key={index}>

                    <WeatherForecastDay data={dailyForecast}/>
                   </div>
                )
                   }
                   else {
                    return null;
                   }


})}

            </div>
        </div>
    )
}

    else {

searchForecast();

    }
}