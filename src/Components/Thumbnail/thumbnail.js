import React from 'react'
import './thumbnail.scss'

class Thumbnail extends React.Component {
    render() {
        const { title } = this.props
        return (
            <li className='thumbnail'>
                <a className='thumbnail__link'>
                    <p className='thumbnail__title'>{title}</p>
                </a>
            </li>
        )
    }
}

export default Thumbnail