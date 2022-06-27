import React from 'react';
import { Navigate,  } from 'react-router-dom';
import { useGoogleAuth } from "./services/google-auth-service";
import AuthService from "./services/login-auth-service";

const PrivateRoute = ({ component }) => {

    const isSignedIn = useGoogleAuth() || AuthService.isLogged();

    return isSignedIn ? component : <Navigate to="/" />
}

export default PrivateRoute;