import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext, { AuthContextProvider } from './context/AuthContext';

import App from './pages/App';
import LandingPage from './pages/landing/_LandingPage';
import PortalPage from './pages/portal/_PortalPage';
import DashboardPage from './pages/dashboard/_DashboardPage';
import SearchPage from './pages/search/_SearchPage';
import RecipePage from './pages/recipe/_RecipePage';
import MealPlanPage from './pages/mealplan/_MealPlanPage';

import LoginForm from './pages/portal/LoginForm';
import RegisterForm from './pages/portal/RegisterForm';

import './assets/global.css';
function Index() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<PortalPage />}>
          <Route path="/portal/signin" element={<LoginForm />} />
          <Route path="/portal/register" element={<RegisterForm />} />
        </Route>
        {isLoggedIn && (
          <Route path="/app" element={<App />}>
            <Route path="/app" element={<DashboardPage />} />
            <Route path="/app/results" element={<SearchPage />}>
              <Route path=":searchQuery" />
            </Route>
            <Route path="/app/recipe/:recipeid" element={<RecipePage />} />
            <Route path="/app/meal-plan" element={<MealPlanPage />} />
            <Route path="/app/*" element={<Navigate to="/app" />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <Index />
  </AuthContextProvider>
);
