import classes from './styles/SecondarySidebar.module.css';

function SecondarySidebar(props) {
  return <aside className={`${classes.sidebar} ${props.styles}`}>{props.children}</aside>;
}

export default SecondarySidebar;
