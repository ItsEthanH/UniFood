import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from './styles/LandingNav.module.css';

function LandingNav() {
  const [isMobile, setIsMobile] = useState(true);

  function toggleSignIn() {
    if (window.innerWidth >= 1280) setIsMobile(false);
    else setIsMobile(true);
  }

  useEffect(() => {
    window.addEventListener('resize', toggleSignIn);
    return () => {
      window.removeEventListener('resize', toggleSignIn);
    };
  }, []);

  console.log(isMobile);

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
        {!isMobile && (
          <li className={`${classes.signin} body-large`}>
            <Link to="/portal/signin">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default LandingNav;
