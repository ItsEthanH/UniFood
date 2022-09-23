function ResultSidebarButton(props) {
  function buttonClickHandler() {
    props.onClick();
  }

  return (
    <button className="primary-button margin-1r0" onClick={buttonClickHandler}>
      {props.text}
    </button>
  );
}

export default ResultSidebarButton;
