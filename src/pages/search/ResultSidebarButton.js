import classes from './styles/ResultSidebarButton.module.css';

function ResultSidebarButton(props) {
  function buttonClickHandler() {
    props.onClick();
  }

  return (
    <button className={classes.button} onClick={buttonClickHandler}>
      {props.text}
    </button>
  );
}

export default ResultSidebarButton;
