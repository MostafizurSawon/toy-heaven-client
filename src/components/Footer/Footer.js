import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Row className=" footer pt-5">
            <Col sm= {3}>
            <h1 className="d-flex align-items-center text-light">
           De-Tour</h1>
            <p>See the world with Super Duper. Discover how you can offset your adventure's
                </p>
                <p> carbon emissions and support the sustainable initiatives practiced by our operators worldwide.
            </p>
            </Col>
            <Col sm= {3}>
                <h2>Recent Posts <h2 className="footer-border"></h2> </h2>
                <Row className="d-flex align-items-center py-2">
                    
                    <Col sm={5}>
                        <img src="https://image.freepik.com/free-photo/friends-having-fun-traveling-by-car_23-2148771823.jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <h6 className="text-muted">October 27, 2021</h6>
                        <a href="http://www.google.com">Group of new Generation</a>
                    </Col>
                    
                </Row>
                <Row className="d-flex align-items-center py-2">
                    
                    <Col sm={5}>
                        <img src="https://img.freepik.com/free-photo/woman-man-playing-guitar-while-traveling-by-car_23-2148771828.jpg?size=338&ext=jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <h6 className="text-muted">October 25, 2021</h6>
                        <a href="http://www.google.com">Have a great time</a>
                    </Col>
                    
                </Row>
            </Col>
            <Col sm= {3}>
                <h2>Top Services <h2 className="footer-border"></h2> </h2>
                <Row className="d-flex align-items-center py-2">
                    <Col sm={5}>
                        <img src="https://image.freepik.com/free-photo/man-checking-map-while-traveling-by-car_23-2148771838.jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <a href="http://www.google.com">Top Guide</a>
                        <h6 className="text-muted">We have the best guides</h6>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center py-2">
                    <Col sm={5}>
                        <img src="https://img.freepik.com/free-photo/man-traveling-by-car-looking-map_23-2148771837.jpg?size=338&ext=jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <a href="http://www.google.com">Great tourplan</a>
                        <h6 className="text-muted">We have expert planner here</h6>
                    </Col>
                </Row>
            </Col>
            <Col sm= {3}>
                <h2>About us<h2 className="footer-border"></h2> </h2>
                
                <Row className="d-flex align-items-center py-2">
                    <p>The rain that falls today, doesn’t fall tomorrow.- Dutch saying Well, I’m not sure about that proverb, because the forecast is for rain again tomorrow. Ah well, we are used to rain and at least we got a mostly sunny day yesterday.</p>
                </Row>
            </Col>
            <div className="bg-dark py-3 d-flex justify-content-around align-items-center">
                <h6>© Copyright by De-TOUR 2021</h6>
                <div className="">
                    <i className="fab fa-facebook me-3 icon"></i>
                    <i className="fab fa-instagram me-3"></i>
                    <i className="fab fa-tiktok me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-pinterest-square"></i>
                </div>
            </div>
        </Row>
    );
};

export default Footer;