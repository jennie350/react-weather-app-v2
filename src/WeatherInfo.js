import React from 'react';
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return (
   <div className="weather-info">
                         <div className="row">
                                <h1>
                                {props.info.city}
                                </h1>
                            </div>
                            <div className="row">
                                <p className="Last-updated">Last updated: <FormattedDate date={props.info.date}/> </p>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <img src={props.info.icon} alt={props.info.description}/>
                                </div>
                                <div className="col-3">
                                    <h2>{Math.round(props.info.temperature)}</h2><span className="Unit">°C</span>
                                    <p className="Feels-like">Feels like 25°C</p>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li>
                                            <strong className="text-capitalize">{props.info.description}</strong>
                                
                                        </li>
                                        <li>
                                            Wind speed {Math.round(props.info.wind)} km/h
                                        </li>
                                        <li>
                                            Humidity {props.info.humidity}%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>

           
            
    )
    
}