import React from 'react';
import prevArrow from '../../images/prev-arrow.svg';
import nextArrow from '../../images/next-arrow.svg';

import './propertySlider.scss';

class PropertySlider extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            totalImages: this.props.pictures.length,
            propertyImages: [],
            currentImage: 0
        }

    }

    componentDidMount() {
        // this.setState({
        //     propertyImages: [...document.querySelectorAll('.property-slider__list-item')],
        // })
        this.firstImage = setTimeout(() => {
            this.setState({
                propertyImages: [...document.querySelectorAll('.property-slider__list-item')],
            })
            this.state.propertyImages[this.state.currentImage].classList.add('selected')
        }, 1000)
    }

    // componentWillUnmount() {
    //     clearTimeout(this.firstImage)
    // }



    handleNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
        this.state.propertyImages.map(image => {
            image.classList.remove('selected');
        })
        if(this.state.currentImage == this.state.totalImages - 1) {
            this.setState({
                currentImage: 0
            })
            this.state.propertyImages[0].classList.add('selected') 
        } else {
            this.state.propertyImages[this.state.currentImage + 1].classList.add('selected')    
        }
    }

    handlePrev = () => {
        this.setState({
            currentImage: this.state.currentImage == 0 ? this.state.totalImages - 1 : this.state.currentImage - 1,
        })
        if(this.state.currentImage == 0) {
            this.setState({
                currentImage: this.state.totalImages - 1
            })
            this.state.propertyImages.map(image => {
                image.classList.remove('selected');
            })
            this.state.propertyImages[this.state.totalImages - 1].classList.add('selected')
        } else {
            this.state.propertyImages.map(image => {
                image.classList.remove('selected');
            })
            this.state.propertyImages[this.state.currentImage - 1].classList.add('selected')
        }
    }
    
    render() {
        const {pictures, title} = this.props;
        const { totalImages, currentImage } = this.state;


        return (
            <section className='property-slider'>
                { totalImages > 1
                ?   <>
                    <img className='prev-arrow' onClick={this.handlePrev} src={prevArrow} alt="prev"/>
                    <img className='next-arrow' onClick={this.handleNext} src={nextArrow} alt="next"/>
                    </>
                : ""}

                <ul className='property-slider__list'>
                    {pictures.map((picture, i) => {
                        return(
                            <li key={i} className='property-slider__list-item'>
                                <img src={picture} alt={title}/>
                            </li>
                        )
                    })}
                </ul>

                <div className='property-slider__count'>
                    <p>{currentImage + 1}/{totalImages}</p>
                </div>
            </section>
        )
    }
}

export default PropertySlider