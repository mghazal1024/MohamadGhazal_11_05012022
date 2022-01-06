import React from 'react'
import './listings.scss'
import Thumbnail from '../Thumbnail/thumbnail'

class Listings extends React.Component {
    render() {
        const { listingsData } = this.props;
        return (
            <section className='listings'>
                <ul className='listings__list'>
                    {listingsData.map( listing => {
                        return (
                            <Thumbnail
                                title = {listing.title}
                            ></Thumbnail>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default Listings