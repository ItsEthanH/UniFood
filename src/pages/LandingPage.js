import LandingAbout from '../components/landing/about/LandingAbout';
import LandingHeader from '../components/landing/header/LandingHeader';
import LandingIntro from '../components/landing/header/LandingIntro';
import LandingRecipes from '../components/landing/recipes/LandingRecipes';

import classes from './styles/LandingPage.module.css';

function LandingPage() {
  return (
    <div className={classes.wrapper}>
      <LandingHeader />
      <main>
        <LandingIntro />
        <LandingAbout />
        <LandingRecipes />
      </main>
    </div>
  );
}

export default LandingPage;
