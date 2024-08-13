// frontend/src/context/AuthContext.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

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
