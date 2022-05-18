import './global.css';
import Header from './components/header/Header';
import React from 'react';
import NavSiderbar from './components/navigation-sidebar/NavSidebar';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavSiderbar />
    </React.Fragment>
  );
}

export default App;
