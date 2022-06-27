import React from 'react';
import { useGoogleAuth } from '../../services/google-auth-service';

const LoginButton = ({ className }) => {

    const { signIn } = useGoogleAuth();

    return (
        <button className={`${className} btn btn-primary btn-block`} onClick={signIn}>Login</button>
      );
};

export default LoginButton;