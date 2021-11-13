import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './Order.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
        useEffect(() => {
          fetch("https://murmuring-dusk-02031.herokuapp.com/login-orders")
            .then((response) => response.json())
            .then((data) => setProducts(data));
        }, [isDelete]);

        // delete an user
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
    return (
        <div>
          <h1 className="global-text text-center"> Hello {user?.displayName}, This is your your Dashboard.</h1>
          <h1 className="global-text text-center"> Here are your order details</h1>
            {/* <h2 className="">Data For : {user.email}</h2> */}
            <br />
            
            <div className="login-orders">
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Toy Details</th>
                    <th>User Info</th>
                    
                    <th>status</th>
                    <th>Action</th>
                </tr>
                </thead>
               
            
            {products.filter(product => product.email === user.email)
             .map(product => (
                 <tbody key={product._id}>
                    <tr>
                    <td>
                        {product.name}
                        <br />
                       Price : ${product.price}
                       
                    </td>
                    <td>
                        <h6>
                            Name :  {user.displayName} 
                        </h6>
                        <h6>
                            Phone : {product.phone}
                        </h6>
                       Address : {product.address}
                    </td>
                    
                    <td>
                        <div className="bg-danger p-2 text-white">
                            {product.status}
                        </div>
                        
                    </td>
                    <td>
                    <Button onClick={() => handleDeleteOrder(product._id)} variant="contained" color="error" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                    </td>
                </tr>
                </tbody>
             ))}
             
                </Table>
             </div>
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

export default MyOrders;