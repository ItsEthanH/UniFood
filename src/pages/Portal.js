import { useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import LandingTitle from '../components/landing/LandingTitle';

import classes from './styles/Portal.module.css';

import image from '../assets/landing/portal.jpg';

function Portal() {
  const location = useLocation();
  const navigate = useNavigate();
  //get the index of the last instance of a '/', add one to get the index of the first letter, then get the rest of the string. leetcode is paying off!
  let path = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  );

  const [isFormLogin, setIsFormLogin] = useState(path === 'signin');

  function changeForm() {
    if (isFormLogin) {
      navigate('/portal/register');
    } else {
      navigate('/portal/signin');
    }
    setIsFormLogin((prev) => !prev);
  }

  return (
    <div className={classes.wrapper}>
      <img
        src={image}
        alt="A colourful selection of vegetables on a dark oak table"
      />
      <main className={classes.page}>
        <LandingTitle>
          <span className="color-primary">
            {isFormLogin ? 'Login' : 'Register'}
          </span>
        </LandingTitle>
        <p className={classes.tagline}>
          {isFormLogin ? 'Log back into UniFood!' : 'Make a UniFood account!'}
        </p>
        <Outlet isFormLogin={isFormLogin} />
        <a onClick={changeForm}>
          {isFormLogin
            ? "Don't have an account? Sign up!"
            : 'Already have an account? Sign in!'}
        </a>
      </main>
    </div>
  );
}

export default Portal;
