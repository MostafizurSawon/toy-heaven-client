import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './products.css';


const Products = () => {
        const [products, setProducts] = useState([]);
        useEffect(() => {
          fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
        }, []);
      

    return (
        <div>
            <div className="mt-5 text-center bg-light bold py-5">
              <h1 className="banner-text">Some of our Toy Collections</h1>
            </div>
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center gy-4">
            {products.slice(0,6).map((product, index) => (
                <Col key={product._id}>
                    <Card>
                        <Card.Img className="image-height"  variant="top" src={product.image} />
                        <Card.Body>
                        <Card.Title>Toy Name : {product.name}</Card.Title>
                        <Card.Text>
                           Price: $ {product.price}
                        </Card.Text>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        </Card.Body>
                        
                        <Link to={`/products/${product._id}`}>
                        <div className="d-grid mx-auto">
                        <Button className="banner-button text-dark" variant="success" size="lg">Purchase Now</Button>
                        </div>
                        </Link>
                        
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default Products;