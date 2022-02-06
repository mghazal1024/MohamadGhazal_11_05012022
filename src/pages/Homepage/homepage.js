import React from 'react'
import Banner from '../../Components/Banner/banner'
import Listings from '../../Components/Listings/listings'
import bannerImage from '../../images/banner-image.jpg'


class Homepage extends React.Component {
    render() {
        const { listingsData } = this.props
        return (
            <>
                <Banner
                    bannerImage = {bannerImage}
                    bannerText = "Chez vous, partout et ailleurs"
                ></Banner>
                <Listings
                    listingsData = {listingsData}
                ></Listings>
            </>
        )
    }
}

export default Homepage