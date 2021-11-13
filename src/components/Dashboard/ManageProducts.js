import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, [isDelete]);

    // delete an user
const handleDeleteOrder = (id) => {
    // console.log(id);
    const proceed = window.confirm(`Are you sure you want to delete?`);
    if(proceed) {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result);
        if (result.deletedCount) {
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
    }
  };
  
    return (
        <>
         <h2 className="global-text text-center">Since your an admin, you have access to this page.</h2>
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center gy-4">
            {products.map((product, index) => (
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
                        <div className="d-grid mx-auto">
                        <Button 
                        onClick={() => handleDeleteOrder(product._id)}
                        className="btn-danger" 
                        variant="success" size="lg">Delete</Button>
                        </div>
                    </Card>
                </Col>
            ))}
            </Row>
        </>
    );
};

export default ManageProducts;