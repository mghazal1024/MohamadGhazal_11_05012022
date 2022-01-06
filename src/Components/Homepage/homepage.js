import React from 'react'
import Banner from '../Banner/banner'
import Listings from '../Listings/listings'

class Homepage extends React.Component {
    render() {
        const { listingsData } = this.props
        return (
            <>
                <Banner></Banner>
                <Listings
                    listingsData = {listingsData}
                ></Listings>
            </>
        )
    }
}

export default Homepage