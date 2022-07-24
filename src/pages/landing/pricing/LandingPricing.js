import LandingTitle from '../../../pages/landing/LandingTitle';
import LandingSection from '../LandingSection';
import PricingCard from './PricingCard';

import classes from './styles/LandingPricing.module.css';

function LandingPricing() {
  return (
    <LandingSection id="pricing">
      <LandingTitle>Pricing</LandingTitle>
      <p className={classes.paragraph}>
        With three different pricing plans to choose from, there is something
        for even the fussiest of eaters!
      </p>
      <div className={classes.cards}>
        <PricingCard styles={classes.bronze} type={0} />
        <PricingCard styles={classes.silver} type={1} />
        <PricingCard styles={classes.gold} type={2} />
      </div>
    </LandingSection>
  );
}

export default LandingPricing;
