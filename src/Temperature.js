import React, {useState} from 'react';

export default function Temperature(props){
const[unit, setUnit]= useState("celsius")

function convertUnit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertUnitDefault(event){
    event.preventDefault();
    setUnit("celsius");

}

function fahrenheit(){
    return (
        (props.celsius * 9)/5+32
    );
}

function fahrenheitFeels(){
    return (
        (props.celsiusFeels * 9)/5+32
    );
}

if (unit === "celsius") {
    return (
        <div className="temperature">
            <h2>{Math.round(props.celsius)}</h2><span className="Unit">°C | <a href="/" onClick={convertUnit}>°F</a></span>
                                    <p className="Feels-like">Feels like {Math.round(props.celsiusFeels)}°C</p>
        </div>
    )
    }
    else {
        return (
        <div className="temperature">
            <h2>{Math.round(fahrenheit())}</h2><span className="Unit">°F | <a href="/" onClick={convertUnitDefault}>°C</a></span>
                                    <p className="Feels-like">Feels like {Math.round(fahrenheitFeels())}°F</p>
        </div>)
    }
}