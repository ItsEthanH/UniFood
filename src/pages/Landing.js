import { useEffect } from 'react';

import LandingAbout from '../components/landing/about/LandingAbout';
import LandingHeader from '../components/landing/header/LandingHeader';
import LandingIntro from '../components/landing/header/LandingIntro';
import LandingPricing from '../components/landing/pricing/LandingPricing';
import LandingRecipes from '../components/landing/recipes/LandingRecipes';
import LandingApps from '../components/landing/apps/LandingApps';
import LandingFooter from '../components/landing/footer/LandingFooter';

import classes from './styles/Landing.module.css';

function Landing() {
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

export default Landing;
