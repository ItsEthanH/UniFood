import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: true,
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <AuthContextProvider value={{ isLoggedIn: isLoggedIn }}>
      {props.children}
    </AuthContextProvider>
  );
}

export default AuthContext;
