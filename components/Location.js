import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"

export default function Location({ data, location, setLocation }) {
    const city = data.find((city) => city.city == location)
    return (
        <div className="card">
            <div className="img-container">
                <img className="card-img-top"
                    src={
                        city.forecast == "Sunny" ?
                            sunny
                            : city.forecast == "Rainy" ?
                                rainy
                                : city.forecast == "Cloudy" ?
                                    cloudy
                                    : partlyCloudy

                    }
                    alt="Card image cap" id="icon" />
            </div>
            <div class="card-body">
                <h3 className="card-title">{city.city}</h3>
                <h5 className="card-text">{city.temperature}</h5>
                <h5 className="card-text">{city.forecast}</h5>
            </div>
        </div>
    );
};