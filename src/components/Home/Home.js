import React from 'react';
import './Home.css';
import Banner from './../Home/Banner/Banner';
import Products from '../Products/Products';
import UserReviews from './UserReviews';
import TopSell from './TopSell';

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="my-5"></div>
            <Products></Products>
            <UserReviews></UserReviews>
            <TopSell></TopSell>
        </>
    );
};

export default Home;