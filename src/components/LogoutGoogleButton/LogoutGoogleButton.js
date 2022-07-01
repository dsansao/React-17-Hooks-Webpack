import React from 'react';
import { useGoogleAuth } from './../../services/GoogleAuthService';

const LogoutGoogleButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        <button onClick={signOut}>Logout</button>
      );
};

export default LogoutGoogleButton;