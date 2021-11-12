import React from 'react';
import './Home.css';
import Banner from './../Home/Banner/Banner';
import Products from '../Products/Products';
import UserReviews from './UserReviews';

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="my-5"></div>
            <Products></Products>
            <UserReviews></UserReviews>
        </>
    );
};

export default Home;