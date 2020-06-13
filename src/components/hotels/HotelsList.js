import React from "react";
import Hotel from "./Hotel";
import PropTypes from "prop-types";

const HotelsList = ( { hotels } ) => {
    return (
        <div className="hotels-list">
            {
                hotels.map((hotel, key) => (
                    <Hotel hotel={ hotel } key={ key } />
                ))
            }
        </div>

    )
}

HotelsList.propTypes = {
    hotels: PropTypes.array.isRequired
}

export default HotelsList