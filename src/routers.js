import React from 'react';
import { Route, Routes, Navigate } from "react-router";

import LoginPage from './components/pages/login/login';
import Counter from './components/pages/counter/counter.js';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="products" element={<Counter />}></Route>
            <Route path="counter" element={<Counter />}></Route>
            <Route path="/" element={<LoginPage />}>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      );
}