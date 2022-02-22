import React from 'react';
import { Route, Routes, Navigate } from "react-router";

import LoginPage from './pages/login';
import CounterPage from './pages/counter';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="counter" element={<CounterPage />}>
            </Route>
            <Route path="/" element={<LoginPage />}>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      );
}