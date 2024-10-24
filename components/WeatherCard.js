import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"



function WeatherCard({ city, temperature, forecast }) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="card-img-top"
                    src={
                        forecast == "Sunny" ?
                            sunny
                            : forecast == "Rainy" ?
                                rainy
                                : forecast == "Cloudy" ?
                                    cloudy
                                    : partlyCloudy

                    }
                    alt="Card image cap" id="icon" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{city}</h3>
                <h5 className="card-text">{temperature}</h5>
                <h5 className="card-text">{forecast}</h5>
            </div>
        </div>
    );
};

// Export the WeatherCard

module.exports = {
    WeatherCard
}