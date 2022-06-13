import React, { useContext } from 'react';
import AuthContext from './context/AuthContext';

import ApplicationPage from './pages/ApplicationPage';
import LandingPage from './pages/LandingPage';

import './assets/styles/global.css';

function App() {
  const ctx = useContext(AuthContext);

  return ctx.isLoggedIn ? <ApplicationPage /> : <LandingPage />;
}

export default App;
