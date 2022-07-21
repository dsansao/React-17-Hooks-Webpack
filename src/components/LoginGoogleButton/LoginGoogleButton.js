import React from 'react';
import { useGoogleAuth } from './../../services/GoogleAuthService';

const LoginGoogleButton = ({ className }) => {

    const { signIn } = useGoogleAuth();

    return (
        <button className={`${className} btn btn-primary btn-block`} onClick={signIn}>Login with Google</button>
      );
};

export default LoginGoogleButton;