import React, { useState } from 'react';
// Import data and WeatherCard here
import { WeatherCard } from './components/WeatherCard'
import { Form } from './components/Form'
import cities from './data'
import Location from './components/Location';


function App() {
    const [location, setLocation] = useState("London")
    return (
        <>
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>

            <div className="app" style={{ display: "flex", flexDirection: 'column' }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <Location
                        data={cities}
                        location={location}
                        setLocation={setLocation}
                    />
                    <Form 
                        location={location}
                        setLocation={setLocation}
                    />
                </div>
                <hr />
                <div
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    {cities.map((city, index) => (
                        <WeatherCard
                            city={city.city}
                            temperature={city.temperature}
                            forecast={city.forecast}
                            key={index}
                        />
                    ))}
                </div>



            </div>

        </>
    )
}

export default App;