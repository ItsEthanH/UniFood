import classes from './LandingFooter.module.css';

function LandingFooter() {
  return (
    <footer className={classes.footer}>
      <ul>
        <h3>Sitemap</h3>
        <li>
          <a href="#top">Back to Top</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#apps">Apps</a>
        </li>
      </ul>
      <ul>
        <h3>Links</h3>
        <li>
          <a href="">Copyright Notice</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default LandingFooter;
