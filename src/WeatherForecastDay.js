import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    let minTemp =Math.round(props.data.temp.min)
    let maxTemp =Math.round(props.data.temp.max)

    function showDay() {
    let date= new Date(props.data.dt*1000)
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <h4>{days[day]}</h4>
    )
    }

    return (
        <div className="Forecast-day">
            {showDay()}
         <span className="Forecast-temp-high">
             {maxTemp}°
         </span>
         <span className="Forecast-temp-low">
         {minTemp}°
         </span>
         <WeatherIcon iconCode={props.data.weather[0].icon} size={40}/>
     </div>

    )
}


