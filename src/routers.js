import React from 'react';
import { Route, Routes, Navigate } from "react-router";

import LoginPage from './components/pages/login/login';
import Counter from './components/pages/counter/counter';
import Home from './components/pages/home/home';
import PrivateRoute from './privateRoute';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/counter" element={< PrivateRoute component={Counter} />}></Route>
            <Route path="/home" element={< PrivateRoute component={Home} />}></Route>
            <Route path="/" exact element={<LoginPage />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      );
}