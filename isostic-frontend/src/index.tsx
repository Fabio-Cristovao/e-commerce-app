import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import App from './App';
import { AuthProvider } from './contexts/Auth/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
