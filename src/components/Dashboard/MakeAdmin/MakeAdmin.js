import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import admin from "./../../../images/admin.gif"

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://murmuring-dusk-02031.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    
    return (
        <div>
             <h2 className="global-text text-center">Beware, Admin can delete product and orders or even make another admin.</h2>
            <h2 className="mt-3 mb-5 text-center">Make an Admin</h2>
           <Row>
               <Col sm={7} className="d-flex align-items-center justify-content-center">
               <form onSubmit={handleAdminSubmit} className="w-100">
                <TextField
                    sx={{ width: '60%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
               </Col>
               <Col sm={5}>
                   <img className="w-100" src={admin} alt="" />
               </Col>
           </Row>
        </div>
    );
};

export default MakeAdmin;