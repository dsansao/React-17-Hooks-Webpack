import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routers';

const App = () => {
    return (
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    );
}

export default App;