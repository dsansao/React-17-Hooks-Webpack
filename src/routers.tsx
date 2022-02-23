import React from 'react';
import { Route, Routes, Navigate } from "react-router";

import LoginPage from './pages/login';
import CounterTSXPage from './pages/counterTSX';
import CounterJs from './pages/counterJs';
import CounterHooks from './pages/counterHooks';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="counter" element={<CounterTSXPage />}></Route>
            <Route path="counter2" element={<CounterJs />}></Route>
            <Route path="counter3" element={<CounterHooks />}></Route>            
            <Route path="/" element={<LoginPage />}>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      );
}