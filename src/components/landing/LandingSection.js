import classes from './LandingSection.module.css';

function LandingSection(props) {
  return (
    <section className={`${classes.section} ${props.styles}`}>
      {props.children}
    </section>
  );
}

export default LandingSection;
