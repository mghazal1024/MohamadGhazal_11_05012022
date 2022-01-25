import React from 'react';
import './propertyTagsRating.scss';
import fullStar from '../../images/star-full.svg';
import emptyStar from '../../images/star-empty.svg'

class PropertyTagsRating extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {rating, tags} = this.props;
        const ratingValue = parseInt(rating);
        

        const ratingStars = (n) => {
            let stars = [];
            for(let i = 0; i < n; i++){
                stars.push(<li key={i} className='property-info__rating-star'><img src={fullStar} alt='star'></img></li>);
            }
            return stars;
        }

        const ratingEmptyStars = (n, j) => {
            let emptyStars = [];
            for(let i = 0; i < (n - j); i++) {
                emptyStars.push(<li key={i} className='property-info__rating-star'><img src={emptyStar} alt='star'></img></li>);
            }
            return emptyStars;
        }



        return (
            <section className='property-info'>
                <ul className='property-info__tags'>
                    {tags.map((tag, i) => {
                        return(
                            <li key={i}>{tag}</li>
                        )
                    })}
                </ul>
                <ul className='property-info__rating'>
                    {ratingStars(ratingValue)}
                    {ratingEmptyStars(5, ratingValue)}
                </ul>
            </section>
        )
    }
}

export default PropertyTagsRating