// frontend/src/App.js

// This file is the main entry point for the React frontend application.
// It defines the routes for the application using the React Router library.
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';

// Bootstrap CSS: Provides pre-built styles for a consistent and responsive design.
import 'bootstrap/dist/css/bootstrap.min.css'; 


// Router: Wraps the entire application and enables routing capabilities.
// Routes: Contains all the route definitions within the application.
// Route: Defines specific paths and 
  // the components that should be rendered when the path is accessed.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
