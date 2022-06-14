import classes from './LandingTitle.module.css';

function LandingTitle(props) {
  return (
    <h2 className={`${classes.title} ${props.styles}`}>{props.children}</h2>
  );
}

export default LandingTitle;
