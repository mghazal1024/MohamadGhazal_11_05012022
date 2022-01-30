import React from 'react';
import './propertyAccordion.scss';
import chevron from '../../images/chevron.svg'

class PropertyAccordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen = () => {
        this.setState( prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        const {title, content} = this.props;

        const contentDisplay = () => {
            if(Array.isArray(content)) {
                return (
                    <ul className='property-accordion__list'>
                        {content.map((item, i) => {
                            return(
                                <li className='property-accordion__list-item' key={i}><p>{item}</p></li>
                            )
                        })}
                    </ul>
                )
            } else {
                return (
                    <p>{content}</p>
                )
            }
        }
        return (
            <section className={`property-accordion ${this.state.isOpen ? 'open' : '' }`}>
                <div className='property-accordion__top' onClick={this.handleOpen}>
                    <p>{title}</p>
                    <img src={chevron} alt="open accordion" />
                </div>
                <div className='property-accordion__content'>
                    {contentDisplay()}
                </div>
            </section>
        )
    }
}

export default PropertyAccordion