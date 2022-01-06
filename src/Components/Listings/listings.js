import React from 'react'
import './listings.scss'
import Thumbnail from '../Thumbnail/thumbnail'

class Listings extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { listingsData } = this.props;
        return (
            <section className='listings'>
                <ul className='listings__list'>
                    {console.log(listingsData)}
                    {listingsData.map( (listing) => {
                        return (
                            <Thumbnail
                                key={listing.id}
                                title = {listing.title}
                                cover = {listing.cover}
                                id={listing.id}
                            ></Thumbnail>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default Listings