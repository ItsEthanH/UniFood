import LandingTitle from '../LandingTitle';
import LandingSection from '../LandingSection';
import PricingCard from './PricingCard';

import classes from './LandingPricing.module.css';

function LandingPricing() {
  return (
    <LandingSection>
      <LandingTitle>Pricing</LandingTitle>
      <div className={classes.cards}>
        <PricingCard type={0} />
        <PricingCard type={1} />
        <PricingCard type={2} />
      </div>
    </LandingSection>
  );
}

export default LandingPricing;
