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
        UniFood makes meals simpler by providing you delicious, easy to prepare recipes, with the
        tools needed to unify your meal times.
      </p>
      <div className={classes.downloads}>
        <img src={appStore} alt="Download on the app store" />
        <img src={googlePlay} alt="Android app on Google Play" />
      </div>
      <div className={classes.buttons}>
        <Link className="primary-button" to="/portal/signin">
          Sign in
        </Link>

        <Link className="outline-button" to="/portal/register">
          Register
        </Link>
      </div>
    </section>
  );
}

export default LandingIntro;
