import LandingTitle from '../LandingTitle';
import LandingSection from '../LandingSection';

import classes from './LandingApps.module.css';
import appImg from '../../../assets/landing/devices.png';

function LandingApps() {
  return (
    <LandingSection>
      <LandingTitle>
        Takeaway the Uni<span className="color-primary">Food</span> apps!
      </LandingTitle>
      <p className={classes.paragraph}>
        Order up! With the UniFood apps for both Apple and Android, you can have
        your meals to go!
      </p>
      <img
        className={classes.img}
        src={appImg}
        alt="The UniFood Apps for desktop, tablet and mobile!"
      />
    </LandingSection>
  );
}

export default LandingApps;
