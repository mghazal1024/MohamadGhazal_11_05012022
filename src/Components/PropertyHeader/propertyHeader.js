import React from 'react'
import './propertyHeader.scss'

class PropertyHeader extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        const {title, location, host, hostPicture} = this.props
        return (
            <section className='property-header'>
                <div className='property-header__intro'>
                    <h1 className='property-header__title'>{title}</h1>
                    <p className='text'>{location}</p>
                </div>
                <div className='property-header__host'>
                    <p className='text'>{host}</p>
                    <img src={hostPicture} alt={host} />
                </div>
            </section>
        )
    }
}

export default PropertyHeader