import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]=useState(null);

    function showForecast(response){
        setLoaded(true);
        setForecast(response.data.daily);
        
    }

    function searchForecast(){
        let apiKey= "082d3d02ffdb12f2fd9b259e2ced1d0d";
        let lat =props.coordinates.lat;
        let lon = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showForecast)
    }
  

if(loaded) {
    console.log(forecast)
    return (
        
        <div className="Weather-forecast">
            <div className="row">
               <WeatherForecastDay data={forecast}/>
            </div>
            
        </div>
    )
}

    else {
      
searchForecast();
        
    }
}