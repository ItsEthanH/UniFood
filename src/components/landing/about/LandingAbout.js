import MobileAccordion from './MobileAccordion';
import LandingSection from '../LandingSection';
import LandingTitle from '../LandingTitle';

import classes from './LandingAbout.module.css';

function LandingAbout() {
  return (
    <LandingSection>
      <LandingTitle>
        About <span className="color-primary">us</span>
      </LandingTitle>
      <p className={classes.paragraph}>
        UniFood is an all-in-one meal planning and recipe app, designed to take
        the stress out of meals. Powered by the Spoonacular API, UniFood has
        access to over 5000 recipes and 2600 ingredients, so you are sure to
        find a recipe you will love.
      </p>
      <MobileAccordion />
    </LandingSection>
  );
}

export default LandingAbout;
