import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  let initialToken;
  const storedToken = localStorage.getItem('token');

  if (storedToken) {
    initialToken = storedToken;
  }

  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;

  function loginHandler(receivedToken) {
    setToken(receivedToken);
    localStorage.setItem('token', receivedToken);
  }

  function logoutHandler() {
    localStorage.removeItem('token');
  }

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
