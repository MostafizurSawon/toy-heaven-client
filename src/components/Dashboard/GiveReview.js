import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const GiveReview = () => {
    const { user } = useAuth();
    console.log(user.photoURL);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/add-review", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
          alert('Your review has been published!!');
          reset();
      };
    return (
        <Container>
            
            <div className="my-3">
                <h2>
                     Give us your honest Review
                     
                </h2>           
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  className="my-1 py-2 w-100"  defaultValue={user?.displayName} {...register("userName")} placeholder="Your Name" />
                <br />
                <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={user?.email} {...register("email")} />
                <br />
                <textarea className="my-1 py-2 w-100" type="text" {...register("review")}  placeholder="Your Review"/>
                <br />
                <input className="my-1 py-2 w-100" type="url" {...register("image")} defaultValue={user?.photoURL} placeholder="Your image-url"/>
                <br />
                <input  className="my-1 py-2 w-100"  defaultValue="5" type="number" min="1" max="5" {...register("star")}  placeholder="Please Rate between 1 to 5" />
                <br />
                <input className="my-1 py-2 w-100 custom-btnn btn-info" type="submit" />
            </form>

            <div className="my-5"></div>
        </Container>
    );
};

export default GiveReview;