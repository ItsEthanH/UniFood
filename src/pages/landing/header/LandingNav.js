import { Link } from 'react-router-dom';

import classes from './styles/LandingNav.module.css';

function LandingNav() {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a className="body-large" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="body-large" href="#recipes">
            Recipes
          </a>
        </li>
        <li>
          <a className="body-large" href="#pricing">
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNav;
