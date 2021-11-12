import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) return <Container className="w-25 d-flex justify-content-between align-items-center my-5 py-5">
        <Spinner variant="dark" animation="grow" size="sm" />
        <Spinner variant="success" animation="grow" size="sm" />
        <Spinner variant="danger" animation="grow" size="sm" />
        <h2> Loading</h2>
        <Spinner variant="danger" animation="grow" size="sm" />
        <Spinner variant="success" animation="grow" size="sm" />
        <Spinner variant="dark" animation="grow" size="sm" />
    </Container>;
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;