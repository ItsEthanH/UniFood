import { Link } from 'react-router-dom';

import classes from './styles/LandingIntro.module.css';
import appStore from '../../../assets/landing/app-store.png';
import googlePlay from '../../../assets/landing/google-play.png';
import headerImage from '../../../assets/landing/header-image.png';

function LandingIntro() {
  return (
    <section style={{ marginTop: '2rem' }} className={`${classes.intro} landing-section`}>
      <img classes={classes.image} src={headerImage} alt="Header image of a pizza" />
      <h2 className="heading">
        Struggling with <span class="color-primary">meal</span> ideas?
      </h2>
      <p className={'body-large margin-2r0'}>
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
    </section>
  );
}

export default LandingIntro;
