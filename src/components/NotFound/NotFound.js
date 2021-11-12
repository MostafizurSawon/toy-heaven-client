import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container-fluid my-3">
            <div className="d-flex justify-content-center">
                
                <img className="w-50" src="https://miro.medium.com/max/1838/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" />

                

            </div>
            

            <div className="d-grid mt-2 w-50 mx-auto">
            <Button variant="success" size="lg">
                <Link to="/home">  
                <i className="fas fa-home"></i>   Back to Home           
                </Link>
            </Button>
            </div>
        </div>
    );
};

export default NotFound;