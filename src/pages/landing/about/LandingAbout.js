import { useState, useEffect } from 'react';

import MobileAccordion from './MobileAccordion';
import DesktopShowcase from './DesktopShowcase';

function LandingAbout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function toggleShowcase() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', toggleShowcase);
    return () => {
      window.removeEventListener('resize', toggleShowcase);
    };
  }, []);

  return (
    <section className="landing-section" id="about">
      <h3 className="heading centered">
        About <span className="color-primary">us</span>
      </h3>
      <p className="body-large centered margin-1r0">
        UniFood is an all-in-one meal planning and recipe app, designed to take the stress out of
        meals. Powered by the Spoonacular API, UniFood has access to over 5000 recipes and 2600
        ingredients, so you are sure to find a recipe you will love.
      </p>
      {windowWidth >= 1280 ? <DesktopShowcase /> : <MobileAccordion />}
    </section>
  );
}

export default LandingAbout;
