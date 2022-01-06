import React from 'react'
import './listings.scss'
import Thumbnail from '../Thumbnail/thumbnail'

class Listings extends React.Component {
    render() {
        return (
            <section className='listings'>
                <ul className='listings__list'>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                </ul>
            </section>
        )
    }
}

export default Listings