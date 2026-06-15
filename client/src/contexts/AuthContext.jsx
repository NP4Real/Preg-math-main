import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restaurar token do localStorage ao carregar
  useEffect(() => {
    const storedToken = localStorage.getItem('pregmath_token');
    const storedUser = localStorage.getItem('pregmath_user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('pregmath_token', jwtToken);
    localStorage.setItem('pregmath_user', JSON.stringify(userData));
  };

  const loginAsGuest = () => {
    const guestUser = { name: 'Visitante', email: '', role: 'guest' };
    setUser(guestUser);
    setToken(null);
    localStorage.setItem('pregmath_user', JSON.stringify(guestUser));
    localStorage.removeItem('pregmath_token');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('pregmath_token');
    localStorage.removeItem('pregmath_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
