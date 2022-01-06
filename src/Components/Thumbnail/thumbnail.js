import React from 'react'
import './thumbnail.scss'

import { Link } from 'react-router-dom'

class Thumbnail extends React.Component {
    render() {
        const { title, cover, id } = this.props
        return (
            <li className='thumbnail'>
                <Link className='thumbnail__link' to={`/${id}`}>
                    <p className='thumbnail__title'>{title}</p>
                    <img className='thumbnail__cover' src={cover} alt={title} />
                </Link>
            </li>
        )
    }
}

export default Thumbnail