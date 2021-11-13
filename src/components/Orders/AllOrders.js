import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const AllOrders = () => {
  const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
      fetch("http://localhost:5000/login-orders")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, [isDelete]);

// delete an order
const handleDeleteOrder = (id) => {
    // console.log(id);
    const proceed = window.confirm(`Sure you want to delete?`);
    if(proceed) {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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