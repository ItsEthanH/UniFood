import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  let initialLoggedInState;
  const storedLoggedInState = localStorage.getItem('isLoggedIn');

  if (storedLoggedInState) {
    initialLoggedInState = storedLoggedInState;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

  function loginHandler() {
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const contextValue = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
