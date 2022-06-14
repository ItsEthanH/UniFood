import LandingTitle from '../LandingTitle';
import LandingSection from '../LandingSection';
import PricingCard from './PricingCard';

import classes from './LandingPricing.module.css';

function LandingPricing() {
  return (
    <LandingSection>
      <LandingTitle>Pricing</LandingTitle>
      <div className={classes.cards}>
        <PricingCard styles={classes.bronze} type={0} />
        <PricingCard styles={classes.silver} type={1} />
        <PricingCard styles={classes.gold} type={2} />
      </div>
    </LandingSection>
  );
}

export default LandingPricing;
