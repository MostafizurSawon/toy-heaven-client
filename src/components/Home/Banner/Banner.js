import React from 'react';
import './Banner.css';
import { Row, Col, Accordion, Button, Carousel } from 'react-bootstrap';
import './Banner.css';
import Input from '@mui/material/Input';
// import { Carousel } from 'bootstrap';
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
            <h1 className="banner-text">Welcome to <span className="banner-span">TOY HEAVEN</span> </h1>
            <p>Our best sellers list highlights toys and games that are most popular with our customers, showcasing top toys from brands like Baby Alive, American Girl Dolls, Lego Ninjago, and Shopkins.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className="banner-text">Collection of <span className="banner-span">Outdoor Toys</span> </h1>
      <p> If you’re looking for outdoor games and activities to encourage the entire family to get out and play, explore our sports & outdoors store, where you’ll find ride-ons, bubbles, kids pools, play tents, playsets, Nerf blasters, flying toys and more. Here you can also find safety and sport-specific gear like helmets, shin guards, racquets, and basketballs.</p>
    </Carousel.Caption>
    </Carousel.Item>
     <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="banner-text">Best <span className="banner-span">Collections</span> </h1>
      <p>Toys & Games store features thousands of products, including dolls, action figures, games and puzzles, advent calendars, hobbies, models and trains, drones, and much more. You can shop by age, favorite brands, new products, best sellers, and gifts for birthdays.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>


        {/* <Row className="custom-banner">
            <Col className="banner-container d-flex align-items-center">
                <div className="mx-auto w-100 text-center">
                    <h1 className="banner-text">Welcome to <span className="banner-span">TOY HEAVEN</span> </h1>
                    <div className="d-flex justify-content-center mt-5">
                    <Input defaultValue=""  />
                    <button className="banner-button"> Search</button>
                    </div>
                </div>
            </Col>
        </Row> */}
        </>
    );
};

export default Banner;