import React, {Component} from "react";
import AvailableHotels from "./AvailableHotels";
import './HotelsPage.scss'
import HotelsList from "./HotelsList";
import FilterSidebar from "../common/FilterSidebar";

const apiResponse = {
    status: 200,
    data: {
        locationName: "Melbourne",
        hotels: [
            {
                id: "1",
                name: "Oaks on William",
                roomType: "Studio Apartment (No Housekeeping)",
                price: "282",
                rating: "4.5",
                image: "https://hotelimages.webjet.com.au/hotels/7000000/6430000/6428700/6428660/215090a4_z.jpg"
            },
            {
                id: "2",
                name: "Crowne Plaza Melbourne",
                roomType: "Standard Room, Non Smoking",
                price: "449",
                rating: "3",
                image: "https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg"
            },
            {
                id: "3",
                name: "Novotel Melbourne on Colling",
                roomType: "Deluxe King Room",
                price: "401",
                rating: "2",
                image: "https://hotelimages.webjet.com.au/hotels/1000000/20000/15800/15740/b99f8cd0_z.jpg"
            },
            {
                id: "4",
                name: "Novotel Melbourne on Colling",
                roomType: "Deluxe King Room",
                price: "551",
                rating: "",
                image: "https://hotelimages.webjet.com.au/hotels/1000000/20000/15800/15740/b99f8cd0_z.jpg"
            }
        ],
        count: 4
    }
}

class HotelsPage extends Component {
    state = {
        hotels: [],
        count: 0,
        locationName: '',
        filterName: '',
        filterRating: ''
    }

    componentDidMount() {
        if (apiResponse && apiResponse.status && Number(apiResponse.status) === 200) {
            const { locationName, count, hotels } = apiResponse.data

            this.setState({
                hotels,
                locationName,
                count
            })
        }

    }

    filterHotelsByName = (hotels, name) => hotels.filter((hotel) => String(hotel.name).toLowerCase().includes(String(name).toLowerCase()))

    filterHotelsByRating = (hotels, rating) => {
        switch (String(rating).toUpperCase()) {
            case 'ALL':
                return hotels
            case 'UNRATED':
                return hotels.filter((hotel) => !hotel.rating)
            case '5':
                return hotels.filter((hotel) => +hotel.rating === 5)
            default :
                return hotels.filter((hotel) => (+hotel.rating >= +rating) && (+hotel.rating < +rating + 1))
        }
    }


    render() {
        const { locationName, count, filterName, filterRating} = { ...this.state };
        let { hotels } = { ...this.state };

        if (filterRating) {
            hotels = this.filterHotelsByRating(hotels, filterRating);
        }

        if (filterName) {
            hotels = this.filterHotelsByName(hotels, filterName);
        }

        return (
            <div className="hotels-page">
                <div className="hotels-page__header">
                    <AvailableHotels count={ count } locationName={ locationName } />
                </div>
                <div className="hotels-page__content">
                    <div className="hotels-page__content__filter">
                        <FilterSidebar
                            filterByName={ (name) => this.setState({ filterName: name })}
                            filterByQuality={ (rating) => this.setState({ filterRating: rating })}
                        />
                    </div>
                    <div className="hotels-page__content__results">
                        {hotels && hotels.length > 0 ?
                            <HotelsList hotels={hotels}/>
                            :
                            <p>No hotels found!</p>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default HotelsPage;