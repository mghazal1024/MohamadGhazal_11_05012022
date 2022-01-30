import React from 'react';
import './propertyPage.scss'
import PropertyAccordion from '../../Components/PropertyAccordion/propertyAccordion';
import PropertyHeader from '../../Components/PropertyHeader/propertyHeader';
import PropertySlider from '../../Components/PropertySlider/propertySlider';

class PropertyPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        const {title, pictures, location, host, hostPicture, rating, tags, description, equipments} = this.props;

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
                    tags = {tags}
                    rating = {rating}
                ></PropertyHeader>
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
            </>
        )
    }
}

export default PropertyPage