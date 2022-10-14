import React from 'react';

export default function Temperature(props){


    return (
        <div className="temperature">
            <h2>{Math.round(props.celsius)}</h2><span className="Unit">°C </span>
                                    <p className="Feels-like">Feels like {Math.round(props.celsiusFeels)}°C</p>
        </div>
    )


}