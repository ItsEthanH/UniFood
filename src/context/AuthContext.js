import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContextProvider value={{ isLoggedIn: isLoggedIn }}>
      {props.children}
    </AuthContextProvider>
  );
}

export default AuthContext;
