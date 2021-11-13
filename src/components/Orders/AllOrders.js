import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";

const AllOrders = () => {
  const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    // const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");

    useEffect(() => {
      fetch("https://murmuring-dusk-02031.herokuapp.com/login-orders")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, [isDelete]);

// delete an order
const handleDeleteOrder = (id) => {
    // console.log(id);
    const proceed = window.confirm(`Sure you want to delete?`);
    if(proceed) {
        fetch(`https://murmuring-dusk-02031.herokuapp.com/deleteOrder/${id}`, {
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

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`https://murmuring-dusk-02031.herokuapp.com/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
return (
    <div>
       <h2 className="global-text text-center">Since your an admin, you have access to this page.</h2>
        <h2 className="mt-3 mb-5 global-text text-center">Number of orders : {products.length}</h2>
        <Table responsive="sm">
                <thead>
                <tr>
                    <th>Toy Details</th>
                    <th>User Info</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
            {
                products.map((product) => 
                <tbody>
                <tr>
                <td>
                    {product.name}
                    <br />
                   Price : ${product.price}
                   
                </td>
                <td>
                    <h6>
                        Name :  {product.userName} 
                    </h6>
                    <h6>
                        Email :  {product.email} 
                    </h6>
                    <h6>
                        Phone : {product.phone}
                    </h6>
                    <h6>
                   Address : {product.address}
                    </h6>
                </td>
                
                <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(product._id)}
                    {...register("status")}
                  >
                    <option value={product?.status}>{product?.status}</option>
                    <option value="approve">Approve</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
                <td>
                <Button onClick={() => handleDeleteOrder(product._id)} variant="contained" color="error" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                </td>
            </tr>
            </tbody>
                )
            }
        </Table>
        <div className="bg-primary py-3 d-flex justify-content-around align-items-center text-light mt-5">
                <h4>Follow us on our social media for the latest updates.</h4>
                <div className="">
                    <i className="fab fa-facebook me-3 icon"></i>
                    <i className="fab fa-instagram me-3"></i>
                    <i className="fab fa-tiktok me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-pinterest-square"></i>
                </div>
            </div>
    </div>
);
};

export default AllOrders;