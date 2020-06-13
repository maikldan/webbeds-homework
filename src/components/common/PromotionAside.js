import React from "react";
import './PromotionAside.scss';
import {numberWithCommas} from "../utils/Utils";
const data = {
    days: 27,
    locationName: 'Grand Scandinavia',
    companyName: 'Baltics cruise and flights',
    price: '6999',
    companyImage: 'https://cdn.travelpulse.com/images/43e6d25f-0ba4-df11-b471-006073e71405/51d13ef2-589b-42bc-a02d-2bf63485c13c/500x309.png',
    bannerImage: 'https://www.telegraph.co.uk/content/dam/Travel/Cruise/April-2020/Cruise-ship-in-the-fjords-istock-CROP.jpg?imwidth=1240',
    promotionLink: '/'
}
const PromotionAside = () => {
    const {
        days,
        locationName,
        companyName,
        price,
        companyImage,
        bannerImage,
        promotionLink
    } = data

    const generateTopHeaderTitle = () => {
        return <span>
            <strong>{`${days} day ${locationName} tour `}</strong>
            {`with ${companyName}`}
        </span>
    }

    const generateTopFooterTitle = () => {
        return [
            <span key={1}>
                Per person twin share from
            </span>,
            <span className="price" key={2}>
                { `$${numberWithCommas(price)}*`}
            </span>
        ]
    }

    return (
        <aside className="promotion-banner">
            <div className="promotion-banner__top-side">
                <div className="promotion-banner__top-side__header">
                    {generateTopHeaderTitle()}
                </div>
                <div className="promotion-banner__top-side__footer">
                    { generateTopFooterTitle() }
                </div>
            </div>
            <div className="promotion-banner__middle-side">
                <img src={ companyImage } alt={ companyName }/>
            </div>
            <div className="promotion-banner__bottom-side" style={{backgroundImage: `url(${ bannerImage })`}}>
                <a href={promotionLink}> >> </a>
            </div>
        </aside>
    )
}


export default PromotionAside