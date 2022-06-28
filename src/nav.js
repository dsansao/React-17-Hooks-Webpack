import React from 'react';
import { Link } from "react-router-dom";
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
                        <Link className="nav-bar-container-item-product-list" to="/product">Product List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}  

export default Nav;