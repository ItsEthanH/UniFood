import classes from './styles/ResultSidebarButton.module.css';

function ResultSidebarButton(props) {
  return <button className={classes.button}>{props.text}</button>;
}

export default ResultSidebarButton;
