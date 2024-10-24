import React, { useState } from "react";



function Form({ location, setLocation }) {
    const [typedLocation, setTypedLocation] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(typedLocation)
        setTypedLocation('')
    }
    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label className="city">City:
                    <input type="text" value={typedLocation} onChange={(e) => {setTypedLocation(e.target.value)}}/>
                </label>
                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

// Export the Form

module.exports = {
    Form
}