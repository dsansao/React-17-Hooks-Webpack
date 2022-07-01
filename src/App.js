import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routers/routers';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {    
    return (
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    );
}

export default App;