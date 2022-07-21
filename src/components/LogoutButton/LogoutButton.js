import React from 'react';
import { useGoogleAuth } from '../../services/GoogleAuthService';
import { useNavigate } from 'react-router-dom';
import AuthService from './../../services/LoginAuthService';
import './logoutButton.scss';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();
    let navigate = useNavigate();

    const handleClick = () => {
      AuthService.logout();
      //signOut();
      navigate("/login");
      window.location.reload();      
    };    

    return (
        <button className="logout-btn" onClick={handleClick}>Logout</button>
      );
};

export default LogoutButton;