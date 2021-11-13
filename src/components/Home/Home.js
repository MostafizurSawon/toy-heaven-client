import React from 'react';
import './Home.css';
import Banner from './../Home/Banner/Banner';
import Products from '../Products/Products';
import UserReviews from './UserReviews';
import TopSell from './TopSell';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner/>
            <div className="my-5"></div>
            <Products></Products>
            <UserReviews></UserReviews>
            <TopSell></TopSell>
            <Footer/>
        </>
    );
};

export default Home;