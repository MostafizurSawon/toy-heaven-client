import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Row className=" footer pt-5">
            <Col sm= {3}>
           
            </Col>
            <Col sm= {3}>
            <h2>About us<h2 className="footer-border"></h2> </h2>
                
                <Row className="d-flex align-items-center py-2">
                    <p>The rain that falls today, doesn’t fall tomorrow.- Dutch saying Well, I’m not sure about that proverb, because the forecast is for rain again tomorrow. Ah well, we are used to rain and at least we got a mostly sunny day yesterday.</p>

                    <p>All i have to say is, We are a growing company. Please support us and we will make sure to make your experience best. Vice versa</p>
                </Row>
            </Col>
            <Col sm= {3}>
                <h2>Top Services <h2 className="footer-border"></h2> </h2>
                <Row className="d-flex align-items-center py-2">
                    <Col sm={5}>
                        <img src="https://image.freepik.com/free-vector/illustration-helping-hands-support-icons_53876-6156.jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <h6 className="text-muted">Follow us on social media. We post our latest update there.</h6>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center py-2">
                    <Col sm={5}>
                        <img src="https://img.freepik.com/free-vector/call-center_24877-49053.jpg?size=338&ext=jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <h6 className="text-muted">24/7 support for any kind of query. We beleive user satisfaction is a must.</h6>
                    </Col>
                </Row>
            </Col>
            <Col sm= {3}>
                
            </Col>
            <div className="bg-dark py-3 d-flex justify-content-around align-items-center text-light">
                <h6>© Copyright by Toy Heaven 2021</h6>
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