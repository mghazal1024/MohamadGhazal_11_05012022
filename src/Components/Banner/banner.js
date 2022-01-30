import React from 'react';
import './banner.scss';

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { bannerImage, bannerText } = this.props;
        return (
            <section className='banner'>
                <div className='banner__content'>
                    <h1 className='white'>{bannerText}</h1>
                </div>
                <img className='banner__img' src={bannerImage} alt="image" />
            </section>
        )
    }
}

export default Banner