import React from "react";
import './Weather.css'

export default function Weather(){
    return (
        <div className="Container">
        <div className="Wrapper">
            
            <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="🔍 Type city and press Enter"
                className="form-control"/>
        </div>
                    <div className="col-3">
                        <input  type="submit" value="Current location" className="btn btn-dark"/>
                         </div>
                         
                         </div>
                         <div className="row">
                            
                                <h1>
                                Singapore</h1>
                                
                            </div>
                            <div className="row">
                                <p className="Last-updated">Last updated: Friday 12:55</p>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
                                </div>
                                <div className="col-3">
                                    <h2>27</h2><span className="Unit">°C</span>
                                    <p className="Feels-like">Feels like 25°C</p>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li>
                                            <strong>Sunny</strong>
                                
                                        </li>
                                        <li>
                                            Wind speed 12 km/h
                                        </li>
                                        <li>
                                            Humidity 80%
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