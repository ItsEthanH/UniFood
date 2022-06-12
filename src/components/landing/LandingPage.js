import LandingAbout from './LandingAbout';
import LandingHeader from './LandingHeader';
import LandingIntro from './LandingIntro';

import classes from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={classes.wrapper}>
      <LandingHeader />
      <main>
        <LandingIntro />
        <LandingAbout />
      </main>
    </div>
  );
}

export default LandingPage;
