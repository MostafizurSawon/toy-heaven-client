import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

const Pay = () => {
    const [value, setValue] = useState('Visa');
const handleChange = (event) => {
  setValue(event.target.value);
};
    return (
        <div>
            <h2 className="global-text text-center">Please Select your Payment Method</h2>
            <Row>
                <Col className="d-flex align-items-center">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Your payment method</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
                        <FormControlLabel value="Bkash" control={<Radio />} label="Bkash" />
                        <FormControlLabel value="Nagad" control={<Radio />} label="Nagad" />
                        <FormControlLabel value="uCash" control={<Radio />} label="uCash" />
                    </RadioGroup>
                    </FormControl>
                </Col>
                <Col>
                <img src="https://image.freepik.com/free-vector/man-transferring-money-woman-via-smartphone-online-transaction-banking-flat-vector-illustration-finance-digital-technology-concept_74855-10107.jpg" alt="" />
                </Col>
            </Row>



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

export default Pay;