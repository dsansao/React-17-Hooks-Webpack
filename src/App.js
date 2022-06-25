import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import AppRoutes from './routers';

const App = () => {    
    return (
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    );
}

export default App;