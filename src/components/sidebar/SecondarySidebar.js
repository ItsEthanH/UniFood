import classes from './styles/SecondarySidebar.module.css';

function SecondarySidebar(props) {
  return <aside className={classes.sidebar}>{props.children}</aside>;
}

export default SecondarySidebar;
