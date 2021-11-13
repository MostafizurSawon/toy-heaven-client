import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/add-product", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
          alert('Added Successfully!!');
          reset()
      };
    return (
        <Container>
            
            <div className="my-3">
                <h2>
                     Add A New Toy Product here!
                     
                </h2>           
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="my-1 py-2 w-100" {...register("name")} placeholder="Toy Name" />
                <br />
                <input className="my-1 py-2 w-100" type="number" {...register("price")}  placeholder="Toy Price"/>
                <br />
                <textarea className="my-1 py-2 w-100" type="text" {...register("description")}  placeholder="short description"/>
                <br />
                <input className="my-1 py-2 w-100" type="url" {...register("image")}  placeholder="image-url"/>
                <br />
                <input className="my-1 py-2 w-100 banner-button" type="submit" />
            </form>

            <div className="my-5"></div>
        </Container>
    );
};

export default AddProduct;