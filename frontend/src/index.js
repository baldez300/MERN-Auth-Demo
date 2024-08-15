// frontend/src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './i18n';

// Create a root and render the App inside it
const container = document.getElementById('root');
const root = createRoot(container); // Create the root element

// Render the App component inside the root element wrapped in the AuthProvider component.
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

