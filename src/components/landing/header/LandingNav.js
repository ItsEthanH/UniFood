import { Link } from 'react-router-dom';

import classes from './LandingNav.module.css';

function LandingNav() {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li className={classes.signin}>
          <Link to="/portal/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNav;
