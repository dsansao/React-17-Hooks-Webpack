import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './../../services/LoginAuthService';
import './logoutButton.scss';

const LogoutButton = () => {
    let navigate = useNavigate();

    const handleClick = () => {
      AuthService.logout();
      navigate("/login");
      window.location.reload();      
    };    

    return (
        <button className="logout-btn" onClick={handleClick}>Logout</button>
      );
};

export default LogoutButton;