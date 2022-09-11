import classes from './styles/LandingApps.module.css';
import appImg from '../../../assets/landing/devices.png';

function LandingApps() {
  return (
    <section className="landing-section">
      <h3 className="heading centered">
        Takeaway the Uni<span className="color-primary">Food</span> apps!
      </h3>
      <p className="body-large margin-1r0 centered">
        Order up! With the UniFood apps for both Apple and Android, you can have your meals to go!
      </p>
      <img
        className={classes.img}
        src={appImg}
        alt="The UniFood Apps for desktop, tablet and mobile!"
      />
    </section>
  );
}

export default LandingApps;
