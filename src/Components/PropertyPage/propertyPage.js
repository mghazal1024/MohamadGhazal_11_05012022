import React from 'react';
import './propertyPage.scss'
import PropertyAccordion from '../PropertyAccordion/propertyAccordion';
import PropertyHeader from '../PropertyHeader/propertyHeader';
import PropertySlider from '../PropertySlider/propertySlider';
import PropertyTagsRating from '../PropertyTagsRating/propertyTagsRating';

class PropertyPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyImages: [...document.querySelectorAll('.property-slider__list-item')]
        }
    }

    componentDidMount() {
        console.log(this.state.propertyImages)
        this.state.propertyImages.map(image => {
            image.classList.add('selected')
            console.log(image)
        })
    }



    render() {

        // const images = () => {
        //     this.setState({
        //         propertyImages: [...document.querySelectorAll('.property-slider__list-item')]
        //     })
        //     console.log(this.state.propertyImages)
        // }
        
        const {title, pictures, location, host, hostPicture, rating, tags, description, equipments} = this.props;

        const ratings = parseInt(rating);

        return (
            <>
                <PropertySlider
                    pictures={pictures}
                    title= {title}
                ></PropertySlider>
                <PropertyHeader
                    title = {title}
                    location = {location}
                    host = {host}
                    hostPicture = {hostPicture}
                ></PropertyHeader>
                <PropertyTagsRating
                    tags = {tags}
                    rating = {rating}
                ></PropertyTagsRating>
                <section className='property-content-section'>
                    <PropertyAccordion
                        title = 'Description'
                        content= {description}
                    ></PropertyAccordion>
                    <PropertyAccordion
                        title = 'Equipments'
                        content= {equipments}
                    ></PropertyAccordion>
                </section>
                {/* <section className='property-dropdown'>
                        <div className='property-dropdown__title'>
                            <p>Descriptions</p>
                        </div>
                        <div className='property-dropdown__content'>
                            <p>{description}</p>
                        </div>
                </section> */}
                {/* <section className='property-dropdown'>
                        <div className='property-dropdown__title'>
                            <p>Équipment</p>
                        </div>
                        <div className='property-dropdown__content'>
                            <p>{equipment}</p>
                        </div>
                </section> */}
            </>
        )
    }
}

export default PropertyPage