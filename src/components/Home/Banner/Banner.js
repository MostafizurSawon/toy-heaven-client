import React from 'react';
import './Banner.css';
import { Row, Col, Accordion, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
   
    return (
        <>
        <Row className="custom-banner">
            <Col className="banner-container d-flex align-items-center">
                <div className="mx-auto w-100 text-center">
                    <h1 className="banner-text">Welcome to <span className="text-info">TOY HEAVEN</span> </h1>
                    <div className="d-flex justify-content-center">
                    <button className="banner-button"> See All Offers</button>
                    </div>
                </div>
            </Col>
        </Row>
        </>
    );
};

export default Banner;