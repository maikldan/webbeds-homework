import React from "react";
import RatingStars from "../common/RatingStars";
import './Hotel.scss'
import PropTypes from "prop-types";

const Hotel = ({
                   hotel = {
                       name: '',
                       image: '',
                       roomType: '',
                       rating: 0,
                       price: 0
                   }
               }) => {
    return (
        <section className="hotel-item">
            <div className="hotel-item__image">
                <img src={hotel.image} alt={hotel.name}/>
            </div>
            <div className="hotel-item__content">
                <div className="hotel-item__content__header">
                    <h3><strong>{hotel.name}</strong></h3>
                </div>
                <div className="hotel-item__content__rating">
                    <RatingStars count={Number(hotel.rating)}/>
                </div>
                <div className="hotel-item__content__room-type">
                    <p><strong>Room Type: </strong> {hotel.roomType}</p>
                </div>
            </div>
            <div className="hotel-item__price">
                <span>{`$${hotel.price}`}</span>
            </div>
        </section>
    )
}

RatingStars.propTypes = {
    count: PropTypes.object.isRequired
}

export default Hotel