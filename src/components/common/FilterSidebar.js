import React, {useState} from "react";
import PropTypes from 'prop-types';
import RatingStars from "./RatingStars";
import './FilterSidebar.scss';

const FilterSidebar = ({filterByName, filterByQuality}) => {
    const [hotelName, setHotelName] = useState('')
    const [hotelRating, setHotelRating] = useState('ALL')
    const [isHotelNameInputVisible, setHotelNameInputVisible] = useState(true)
    const [isHotelQualityVisible, setHotelQualityVisible] = useState(true)

    const arrowDirection = (value) => value ?
        <i className="fa fa-caret-down" aria-hidden="true"/>
        :
        <i className="fa fa-caret-up" aria-hidden="true"/>;

    const onChange = (key) => {
        if (key === 'hotel-name') {
            setHotelNameInputVisible(!isHotelNameInputVisible)
            return
        }
        setHotelQualityVisible(!isHotelQualityVisible)
    }

    const generateCheckboxLabel = (value) => {
        if (isNaN(value)) {
            return value
        }
        else {
            return <RatingStars count={Number(value)} />
        }
    }

    const generateQualityCheckboxes = (checkboxes) => {
        const checkboxesArray = []
        checkboxes.map((value, key) => {
            const valueUp = String(value).toUpperCase()
            const valueLow = String(value).toLowerCase()
            checkboxesArray.push(
                <span key={key} className="filter__body__search__rating-input__checkbox-row">
                    <label className="container" htmlFor={`checkbox-${String(value).toLowerCase()}`}>{generateCheckboxLabel(value)}
                    <input type="radio"
                           name={value}
                           value={`${valueUp}`}
                           id={`checkbox-${valueLow}`}
                           onChange={() => {
                               setHotelRating(valueUp)
                               filterByQuality(valueUp)
                           }}
                           checked={valueUp === hotelRating}
                    />
                     <span className="checkmark" />
                    </label>
                </span>
            )
            return true
        })

        return checkboxesArray
    }

    return (
        <div className="filter">
            <div className="filter__header">
                <span className="filter__header__title">Filter Results</span>
            </div>
            <div className="filter__body">
                <div className="filter__body__search">
                    <div className="filter__body__search__header">
                        <span onClick={() => onChange('hotel-name')}>{arrowDirection(isHotelNameInputVisible)} Hotel Name</span>
                    </div>
                    {
                        isHotelNameInputVisible &&
                        <div className="filter__body__search__name-input">
                            <input
                                type="text"
                                onChange={(e) => setHotelName(e.target.value)}
                                placeholder="Enter Hotel Name"
                            />
                            <button onClick={() => filterByName(hotelName)}>Go</button>
                        </div>
                    }
                </div>

                <div className="filter__body__search">
                    <div className="filter__body__search__header">
                        <span onClick={() => onChange('hotel-rating')}>{arrowDirection(isHotelQualityVisible)} Quality Rating</span>
                    </div>

                    {
                        isHotelQualityVisible &&
                        <div className="filter__body__search__rating-input"
                             style={{display: 'flex', flexDirection: 'column'}}>
                            {
                                generateQualityCheckboxes(['all', 5, 4, 3, 2, 1, 'unrated'])
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

FilterSidebar.propTypes = {
    filterByName: PropTypes.func.isRequired,
    filterByQuality: PropTypes.func.isRequired
}

export default FilterSidebar