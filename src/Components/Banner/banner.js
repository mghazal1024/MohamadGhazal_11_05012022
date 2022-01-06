import React from 'react';
import './banner.scss';

import bannerImage from '../../images/banner-image.jpg'

class Banner extends React.Component {
    render() {
        return (
            <section className='banner'>
                <div className='banner__content'>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <img className='banner__img' src={bannerImage} alt="image" />
            </section>
        )
    }
}

export default Banner