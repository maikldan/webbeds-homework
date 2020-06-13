import React from "react";
import PropTypes from 'prop-types';

import './RatingStars.scss'

const RatingStars = ({ count }) => {

    const starTotal = 5

    const getRating = (rating) => {
        //Get percentage
        const startPercentage = (rating / starTotal) * 100;

        //Round to nearest 10
        const startPercentageRounded = `${ Math.round(startPercentage / 10) * 10}%`;

        return (
            <div className="stars-wrapper">
                <div className="stars-wrapper__outer">
                    <div className="stars-wrapper__inner" style={{width: startPercentageRounded}}/>
                </div>
                <span className="number-rating" />
            </div>
        )
    }


    return (
        getRating(count)
    )
}

RatingStars.propTypes = {
    count: PropTypes.number.isRequired
}

export default RatingStars