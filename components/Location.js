import React, { useState, useEffect } from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"

export default function Location({ data, location, setLocation }) {

    const [currentTemp, setCurrentTemp] = useState(10)

    const city = data.find((city) => city.city == location)

    const getCurrentWeather = async (city) => {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`)
        const data = await response.json()
        console.log(data)
        setCurrentTemp(data.current_weather.temperature) 
    }

    useEffect(() => {
        if (city) {
            getCurrentWeather(city)
        }
    }, [location])

    if (!city) {
        return (
            <div className="card">
            <div className="card-body">
                <h3 className="card-title">City not found</h3>
            </div>
        </div>
        )
    }
    if (city) {
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
            <div className="card-body">
                <h3 className="card-title">{city.city}</h3>
                <h5 className="card-text">{currentTemp}</h5>
                <h5 className="card-text">{city.forecast}</h5>
            </div>
        </div>
    );
}
};