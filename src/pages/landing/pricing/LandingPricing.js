import PricingCard from './PricingCard';

import classes from './styles/LandingPricing.module.css';

function LandingPricing() {
  return (
    <section id="pricing" className="landing-section">
      <h3 className="heading centered">Pricing</h3>
      <p className="body-large centered margin-1r0">
        With three different pricing plans to choose from, there is something for even the fussiest
        of eaters!
      </p>
      <div className={classes.cards}>
        <PricingCard styles={classes.bronze} type={0} />
        <PricingCard styles={classes.silver} type={1} />
        <PricingCard styles={classes.gold} type={2} />
      </div>
    </section>
  );
}

export default LandingPricing;
