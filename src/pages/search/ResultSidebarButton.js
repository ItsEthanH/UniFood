import classes from './styles/ResultSidebarButton.module.css';

function ResultSidebarButton(props) {
  function buttonClickHandler() {
    props.onClick();
  }

  return (
    <button className={`${classes.button} primary-button margin-1r0`} onClick={buttonClickHandler}>
      {props.text}
    </button>
  );
}

export default ResultSidebarButton;
