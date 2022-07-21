import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { GoogleAuthProvider } from './services/GoogleAuthService';

ReactDOM.render(
  <GoogleAuthProvider>
    <App />
  </GoogleAuthProvider>,
  document.getElementById('root')
);
