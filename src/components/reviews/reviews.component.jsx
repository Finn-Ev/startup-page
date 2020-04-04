import React from 'react'
import "./reviews.styles.scss"
import Carousel  from './carousel/carousel.component'

const Reviews = (props) => {
    return(
        <section className="reviews py-4 mb-4" id="reviews">
            <h3 className="mb-2 pt-4 light">Was unsere Kunden sagen</h3>
            <Carousel/>
        </section>
    )
}

export default Reviews