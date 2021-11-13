import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';


const UserReviews = () => {
        const [reviews, setReviews] = useState([]);
        useEffect(() => {
          fetch("https://murmuring-dusk-02031.herokuapp.com/add-review")
            .then((response) => response.json())
            .then((data) => setReviews(data));
        }, []);
      

    return (
        <div>
            <div className="mt-5 text-center bg-light bold py-5">
              <h1 className="banner-text ">Our users Review</h1>
            </div>
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center gy-4">
            {reviews.map((review, index) => (
                <Col key={review._id}>
                    <Card>
                        <div className="d-flex justify-content-around mt-3">
                        <Avatar
                            alt="Remy Sharp"
                            src={review.image}
                            sx={{ width: 56, height: 56 }}
                        />
                        <div>
                        <Card.Title className="text-primary">@{review.userName}</Card.Title>
                        <Card.Text>
                           Email : {review.email}
                        </Card.Text>
                        </div>
                        </div>
                        <Card.Body>
                       
                        <Card.Text className="text-center">
                           {/* Review: {review.star} */}
                           <Rating sx={{color: 'yellow'}} name="read-only" value={review.star} readOnly />
                        </Card.Text>
                        <Card.Text>
                            {review.review}
                        </Card.Text>
                        </Card.Body>
                        
                        
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default UserReviews;