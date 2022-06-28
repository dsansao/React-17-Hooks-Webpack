import React from 'react';
import { Route, Routes, Navigate } from "react-router";

import LoginPage from './components/pages/login/login';
import Counter from './components/pages/counter/counter';
import Home from './components/pages/home/home';
import ProductList from './components/pages/productList/productList';
import Nav from './nav';
import PrivateRoute from './privateRoute';
import { useGoogleAuth } from "./services/google-auth-service";
import AuthService from "./services/login-auth-service";

export default function AppRoutes() {

    const isSignedIn = useGoogleAuth().isSignedIn || AuthService.isLogged();

    return (
        <React.Fragment>

            { isSignedIn ?
                <Nav/> :
                <></>
            }
            <Routes>            
                <Route path="/counter" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <Counter/> } />}></Route>
                <Route path="/home" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <Home/> } />}></Route>
                <Route path="/product-list" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <ProductList/> } />}></Route>
                <Route path="/" exact element={<LoginPage />}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </React.Fragment>
      );
}