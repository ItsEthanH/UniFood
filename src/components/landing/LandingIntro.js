import classes from './LandingIntro.module.css';
import appStore from '../../assets/landing/app-store.png';
import googlePlay from '../../assets/landing/google-play.png';

function LandingIntro() {
  return (
    <section className={classes.intro}>
      <h2>
        Struggling with <span class="color-primary">meal</span> ideas?
      </h2>
      <p>
        UniFood makes meals simpler by providing you delicious, easy to prepare
        recipes.
      </p>
      <div className={classes.downloads}>
        <img src={appStore} alt="Download on the app store" />
        <img src={googlePlay} alt="Android app on Google Play" />
      </div>
    </section>
  );
}

export default LandingIntro;
