import React from 'react';
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from './Temperature';



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
                            <div className="row mt-3">
                                <div className="col-4">
                                    
                                    <WeatherIcon iconCode={props.info.icon}/>
                                
                                </div>
                                <div className="col-3">
                                    <Temperature celsius={props.info.temperature} celsiusFeels={props.info.feelsTemp}/>
                                </div>
                                <div className="col-5">
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