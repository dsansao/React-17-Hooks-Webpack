import React from 'react';
import { useGoogleAuth } from '../../services/google-auth-service';

const LoginButton = () => {

    const { signIn } = useGoogleAuth();

    return (
        <button onClick={signIn}>Login</button>
      );
};

export default LoginButton;