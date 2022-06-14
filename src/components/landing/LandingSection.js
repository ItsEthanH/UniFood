import classes from './LandingSection.module.css';

function LandingSection(props) {
  return (
    <section id={props.id} className={`${classes.section} ${props.styles}`}>
      {props.children}
    </section>
  );
}

export default LandingSection;
