import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './products.css';

const TakeProduct = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);
    const [product, setService] = useState({});
    useEffect(() => {
      fetch(`http://localhost:5000/singleproduct/${productId}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [productId, isUpdate]);
  
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = (data) => {
      console.log(data);
      fetch("http://localhost:5000/add-orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result))
        alert("Successfully Booked!!")
        reset();
    };


    return (
        <div className=" py-5">
            <h1 className="my-2 text-center banner-text mt-3">
                Please provide your information.  
            </h1>
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center">
              <Col sm={12} md={5} className="custom-card border-0 ps-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                {product.name && <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={product.name} type="text" {...register("name")} />}
                <br />
                {product.price && <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={product.price} type="price" {...register("price")} />}
                <br />
                <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={user?.email} {...register("email")} />
                <br />
                <input  className="my-1 py-2 w-100"  defaultValue={user?.displayName} {...register("userName")} placeholder="Your Name" />
                <br />
                <input  className="my-1 py-2 w-100"   {...register("address")} type="text" placeholder="Your Adress" />
                <br />
                <input  className="my-1 py-2 w-100"  type="text" {...register("phone")} placeholder="Your Phone Number" />
                <br />
                <input  className="my-1 py-2 w-100"  readOnly={true} type="text" defaultValue="Pending" {...register("status")} />
                <br />
                <input  className="my-1 py-2 w-100 custom-btnn"  type="submit" />
            </form>
            </Col>
            <Col sm={12} md={7} className="ps-4">
                <img className="img-fluid" src="https://image.freepik.com/free-vector/place-your-curbside-pickup-order-online-abstract-concept_335657-3122.jpg" alt="" />
            </Col>
            </Row>
        </div>
    );
};

export default TakeProduct;