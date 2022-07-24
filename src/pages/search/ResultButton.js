import classes from './styles/ResultButton.module.css';

function ResultButton(props) {
  return <button className={classes.button}>{props.text}</button>;
}

export default ResultButton;
