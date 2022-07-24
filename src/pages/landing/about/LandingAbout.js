import { useState, useEffect } from 'react';

import LandingTitle from '../LandingTitle';
import LandingSection from '../LandingSection';
import MobileAccordion from './MobileAccordion';
import DesktopShowcase from './DesktopShowcase';

import classes from './styles/LandingAbout.module.css';

function LandingAbout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 1280;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  });

  return (
    <LandingSection id="about">
      <LandingTitle>
        About <span className="color-primary">us</span>
      </LandingTitle>
      <p className={classes.paragraph}>
        UniFood is an all-in-one meal planning and recipe app, designed to take
        the stress out of meals. Powered by the Spoonacular API, UniFood has
        access to over 5000 recipes and 2600 ingredients, so you are sure to
        find a recipe you will love.
      </p>
      {windowWidth >= breakpoint ? <DesktopShowcase /> : <MobileAccordion />}
    </LandingSection>
  );
}

export default LandingAbout;
