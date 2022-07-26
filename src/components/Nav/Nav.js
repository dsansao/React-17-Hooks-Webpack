import React from 'react';
import { Link } from "react-router-dom";
import LogoutButton from '../LogoutButton/LogoutButton';
import './nav.scss';

const Nav = () => {    

    return (
        <nav className="nav-bar">
            <div className="nav-bar-container">
                <ul className="nav-bar-wrapper">
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-home" to="/home">Home</Link>
                    </li>
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-counter" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-product-list" to="/product-list">Product List</Link>
                    </li>
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-name-list" to="/name-list">Name List</Link>
                    </li>
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-use-ref" to="/use-ref">Use Ref</Link>
                    </li>
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-use-callback" to="/use-callback">Use Callback</Link>
                    </li>
                    <li className="nav-bar-container-item">
                        <Link className="nav-bar-container-item-use-memo" to="/use-memo">Use Memo</Link>
                    </li>
                    <li className="nav-bar-logout-button nav-bar-container-item">
                        <LogoutButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}  

export default Nav;