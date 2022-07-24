import { useEffect } from 'react';

import LandingAbout from './about/LandingAbout';
import LandingHeader from './header/LandingHeader';
import LandingIntro from './header/LandingIntro';
import LandingPricing from './pricing/LandingPricing';
import LandingRecipes from './recipes/LandingRecipes';
import LandingApps from './apps/LandingApps';
import LandingFooter from './footer/LandingFooter';

import classes from './styles/LandingPage.module.css';

function LandingPage() {
  // sets the height to initial for when the user logs out. undo's the setting of height to 100vh when App.js is initialised
  useEffect(() => {
    document.getElementById('root').style.height = 'initial';
  }, []);

  return (
    <>
      <LandingHeader />
      <main className={classes.main}>
        <LandingIntro />
        <LandingAbout />
        <LandingRecipes />
        <LandingPricing />
        <LandingApps />
      </main>
      <LandingFooter />
    </>
  );
}

export default LandingPage;
