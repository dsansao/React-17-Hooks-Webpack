import React from 'react';
import { useGoogleAuth } from '../../services/google-auth-service';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        <button onClick={signOut}>Logout</button>
      );
};

export default LogoutButton;