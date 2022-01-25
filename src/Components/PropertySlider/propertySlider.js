import React from 'react';
import prevArrow from '../../images/prev-arrow.svg';
import nextArrow from '../../images/next-arrow.svg';

import './propertySlider.scss';

class PropertySlider extends React.Component {

    constructor (props) {
        super (props)
        // this.state = {
        //     imageIndex: 0,
        //     totalImages: this.props.pictures.length,
        //     propertyImages: []
        // }
    }

    // componentDidMount() {
    //     this.setState({
    //         propertyImages: [...document.querySelectorAll('property-slider__list-item')]
    //     })
    //     console.log(this.state.propertyImages)
    // }
    
    render() {
        const {pictures, title} = this.props;
        // const { imageIndex, totalImages } = this.state;

        // console.log(imageIndex);
        // console.log(totalImages)

        return (
            <section className='property-slider'>
                {/* { totalImages > 1
                ?   <>
                    <img className='prev-arrow' src={prevArrow} alt="prev"/>
                    <img className='next-arrow' src={nextArrow} alt="next"/>
                    </>
                : ""} */}

                <ul className='property-slider__list'>
                    {pictures.map((picture, i) => {
                        return(
                            <li key={i} className='property-slider__list-item'>
                                <img src={picture} alt={title}/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default PropertySlider