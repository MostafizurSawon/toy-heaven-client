import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllOrders = () => {
  const { user } = useAuth();
    const [products, setServices] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const [title, setTitle] = useState("Click here");

    const Title = () => {
      const [title, setTitle] = useState("Click here");
   
      return <h1 onClick={() => setTitle("New title")}>{title}</h1>;
   }
    useEffect(() => {
      fetch("http://localhost:5000/login-orders")
        .then((response) => response.json())
        .then((data) => setServices(data));
    }, [isDelete]);

// delete an user
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
        <h2 >All user : {products.length}</h2>
        <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Place name</th>
                    <th>User Info</th>
                    <th>status</th>
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
                <button onClick={() => handleDeleteOrder(product._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
            </tbody>
                )
            }
        </Table>
    </div>
);
};

export default AllOrders;