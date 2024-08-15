// frontend/src/context/AuthContext.js

import React, { createContext, useState } from 'react';

// Create an authentication context using createContext.
export const AuthContext = createContext();

// Create an AuthProvider component to manage authentication state:
// Initializes the token and isAuthenticated state variables.
// Provides login and logout functions to update the authentication state.
// Stores the token in local storage to persist the user's login status.
// Renders the children components within the AuthContext.Provider.

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: false,
  });

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token, isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
