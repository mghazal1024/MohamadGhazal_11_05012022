import React from 'react'
import './propertyHeader.scss'
import fullStar from '../../images/star-full.svg';
import emptyStar from '../../images/star-empty.svg'

class PropertyHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {title, location, host, hostPicture, rating, tags} = this.props;
        const ratingValue = parseInt(rating);
        

        const ratingStars = (n) => {
            let stars = [];
            for(let i = 0; i < n; i++){
                stars.push(<li key={i} className='property-header__rating-star'><img src={fullStar} alt='star'></img></li>);
            }
            return stars;
        }

        const ratingEmptyStars = (n, j) => {
            let emptyStars = [];
            for(let i = 0; i < (n - j); i++) {
                emptyStars.push(<li key={i} className='property-header__rating-star'><img src={emptyStar} alt='star'></img></li>);
            }
            return emptyStars;
        }

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
                <ul className='property-header__tags'>
                    {tags.map((tag, i) => {
                        return(
                            <li key={i}><p className='white'>{tag}</p></li>
                        )
                    })}
                </ul>
                <ul className='property-header__rating'>
                    {ratingStars(ratingValue)}
                    {ratingEmptyStars(5, ratingValue)}
                </ul>
            </section>
        )
    }
}

export default PropertyHeader