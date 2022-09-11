import LandingNav from './LandingNav';

import classes from './styles/LandingHeader.module.css';

function LandingHeader() {
  return (
    <header className={classes.header}>
      <h1 className="title">
        Uni<span className="color-primary">Food</span>
      </h1>
      <hr className={classes.hr} />
      <LandingNav />
    </header>
  );
}

export default LandingHeader;
