import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) return <LinearProgress />
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} />;
};

export default PrivateRoute;