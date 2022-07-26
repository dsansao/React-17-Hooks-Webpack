import React from 'react';
import { Route, Routes, Navigate } from "react-router";

import Login from './../pages/Login/Login';
import Counter from './../pages/Counter/Counter';
import Home from './../pages/Home/Home';
import ProductList from './../pages/ProductList/ProductList';
import ProductDetail from './../pages/ProductList/ProductDetail/ProductDetail';
import NameList from './../pages/NameList/NameList';
import UseRef from './../pages/UseRef/UseRef';
import UseCallback from './../pages/UseCallback/UseCallback';
import UseMemo from './../pages/UseMemo/UseMemo';
import Nav from './../components/Nav/Nav';
import PrivateRoute from './PrivateRoute';
import AuthService from "./../services/LoginAuthService";

export default function AppRoutes() {

    const isSignedIn = AuthService.isLogged();

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
                <Route path="/product" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <ProductDetail/> } />}></Route>
                <Route path="/name-list" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <NameList/> } />}></Route>
                <Route path="/use-ref" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <UseRef/> } />}></Route>
                <Route path="/use-callback" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <UseCallback/> } />}></Route>
                <Route path="/use-memo" element={< PrivateRoute isSignedIn={ isSignedIn } component={ <UseMemo/> } />}></Route>
                <Route path="/" exact element={<Login />}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </React.Fragment>
      );
}