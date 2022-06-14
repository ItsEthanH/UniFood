import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import classes from './Main.module.css';

import Dashboard from '../../pages/Dashboard';
import Results from '../../pages/Results';
import Recipe from '../../pages/Recipe';

function AppMain() {
  const location = useLocation();
  let style;

  switch (true) {
    case /\/dashboard/.test(location.pathname):
      style = classes.dashboard;
      break;
    case /\/results./.test(location.pathname):
      style = classes.results;
      break;
    case /\/recipe./.test(location.pathname):
      style = classes.recipe;
      break;
  }

  return (
    // <main className={`${style} ${classes.main}`}>
    //   <Routes>
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/results/:searchQuery" element={<Results />} />
    //     <Route path="/recipe/:recipeId" element={<Recipe />} />
    //   </Routes>
    // </main>
  );
}

export default AppMain;
