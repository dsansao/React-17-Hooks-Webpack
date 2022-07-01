import React from 'react';
import { Navigate,  } from 'react-router-dom';

const PrivateRoute = ({ isSignedIn, component }) => {

    return isSignedIn ? component : <Navigate to="/" />
}

export default PrivateRoute;