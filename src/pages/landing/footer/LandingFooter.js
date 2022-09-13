import classes from './styles/LandingFooter.module.css';

function LandingFooter() {
  return (
    <footer className={classes.footer}>
      <ul className="body">
        <h3 className="subheading margin-2r0">Sitemap</h3>
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
    </footer>
  );
}

export default LandingFooter;
