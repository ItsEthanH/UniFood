import LandingSection from './LandingSection';

import classes from './LandingAbout.module.css';
import LandingTitle from './LandingTitle';
import MobileAccordion from './MobileAccordion';

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
