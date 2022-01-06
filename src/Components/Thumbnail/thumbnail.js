import React from 'react'
import './thumbnail.scss'

class Thumbnail extends React.Component {
    render() {
        return (
            <li className='thumbnail'>
                <a className='thumbnail__link'>
                    <p className='thumbnail__title'>Titre de la location</p>
                </a>
            </li>
        )
    }
}

export default Thumbnail