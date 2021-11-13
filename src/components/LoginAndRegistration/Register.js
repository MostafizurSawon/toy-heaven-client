import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { AlertTitle } from '@mui/material';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history)
  }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register Your Account Here</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    <hr />
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    {isLoading && <LinearProgress />}
                    {user?.email && <Alert severity="success">
                          <AlertTitle>Done</AlertTitle>
                         User Created — <strong>Successfully!</strong>
                        </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
