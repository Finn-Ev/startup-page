import React from 'react';
import Reviews from '../../components/reviews/reviews.component'
import MainHeader from '../../components/main-header/main-header.component';
import Services from '../../components/services/services.component';

const Homepage = () => {

    return ( 
        <div>
            <MainHeader />
            <Services/>
            <Reviews />

        </div>
    );
}

export default Homepage;