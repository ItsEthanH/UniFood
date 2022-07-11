import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './pages/App';
import Landing from './pages/Landing';
import Portal from './pages/Portal';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Recipe from './pages/Recipe';
import MealPlan from './pages/MealPlan';

import LoginForm from './components/portal/LoginForm';
import RegisterForm from './components/portal/RegisterForm';

import './assets/styles/global.css';

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="/portal/signin" element={<LoginForm />} />
          <Route path="/portal/register" element={<RegisterForm />} />
        </Route>

        <Route path="/app" element={<App />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/results" element={<Results />}>
            <Route path="/app/results/:searchQuery" />
          </Route>
          <Route path="/app/recipe/:recipeId" element={<Recipe />} />
          <Route path="/app/meal-plan" element={<MealPlan />} />
          <Route path="/app/*" element={<Navigate to="/app/dashboard" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
