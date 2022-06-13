import LandingAbout from '../components/landing/about/LandingAbout';
import LandingHeader from '../components/landing/header/LandingHeader';
import LandingIntro from '../components/landing/header/LandingIntro';
import LandingPricing from '../components/landing/pricing/LandingPricing';
import LandingRecipes from '../components/landing/recipes/LandingRecipes';
import LandingApps from '../components/landing/apps/LandingApps';
import LandingFooter from '../components/landing/footer/LandingFooter';

import classes from './styles/LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <div className={classes.wrapper}>
        <LandingHeader />
        <main>
          <LandingIntro />
          <LandingAbout />
          <LandingRecipes />
          <LandingPricing />
          <LandingApps />
        </main>
      </div>
      <LandingFooter />
    </>
  );
}

export default LandingPage;
