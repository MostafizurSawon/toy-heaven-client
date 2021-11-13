import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner from './../../../images/banner.jpg'
import banner2 from './../../../images/banner2.jpg'
import banner3 from './../../../images/banner3.jpg'

const Banner = () => {
   
    return (
        <>

        <Carousel fade>
        <Carousel.Item>
         <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            />
            <Carousel.Caption>
            <h1 className="global-text">Welcome to <span className="banner-span">TOY HEAVEN</span> </h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className="global-text">Collection of <span className="banner-span">Outdoor Toys</span> </h1>
    </Carousel.Caption>
    </Carousel.Item>
     <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="global-text">Best <span className="banner-span">Collections</span> </h1>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
        </>
    );
};

export default Banner;