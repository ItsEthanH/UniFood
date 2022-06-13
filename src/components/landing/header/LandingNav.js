import classes from './LandingNav.module.css';

function LandingNav() {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Recipes</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Sign In</a>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNav;
