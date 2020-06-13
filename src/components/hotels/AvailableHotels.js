import React from "react";
import PropTypes from 'prop-types';


const AvailableHotels = ({ count = 0, locationName = '0'}) => (
    <p style={{color: '#dc140a', padding: '15px 10px', margin: '0'}}>
        {`${ count } Hotels Available in ${ locationName }`}
    </p>
)

AvailableHotels.propTypes = {
    count: PropTypes.number.isRequired,
    locationName: PropTypes.string.isRequired
}
export default AvailableHotels;