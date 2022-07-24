import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

import LandingSection from '../LandingSection';

import classes from './styles/LandingIntro.module.css';
import appStore from '../../../assets/landing/app-store.png';
import googlePlay from '../../../assets/landing/google-play.png';
import headerImage from '../../../assets/landing/header-image.png';

function LandingIntro() {
  const { login } = useContext(AuthContext);

  function guestLogin() {
    login();
  }

  return (
    <LandingSection styles={classes.intro}>
      <img src={headerImage} alt="Header image of a pizza" />
      <h2>
        Struggling with <span class="color-primary">meal</span> ideas?
      </h2>
      <p className={classes.tagline}>
        UniFood makes meals simpler by providing you delicious, easy to prepare recipes.
      </p>
      <div className={classes.downloads}>
        <img src={appStore} alt="Download on the app store" />
        <img src={googlePlay} alt="Android app on Google Play" />
      </div>
      <div className={classes.buttons}>
        <button class="primary-button">
          <Link to="/portal/signin">Sign in</Link>
        </button>
        <button class="outline-button">
          <Link to="/portal/register">Register</Link>
        </button>
      </div>
      <p className={classes.guest}>
        Visiting from one of our portfoilos, and just want to test what we've done?{' '}
        <Link onClick={guestLogin} to="/app">
          Click here!
        </Link>
      </p>
    </LandingSection>
  );
}

export default LandingIntro;
