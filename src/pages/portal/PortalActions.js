import classes from './styles/PortalForm.module.css';

function PortalActions(props) {
  const { changeForm, isFormLogin, fetchInfo, errorMessages } = props;

  const changeText = isFormLogin
    ? "Don't have an account? Sign up!"
    : 'Already have an account? Sign in!';

  const buttonText = isFormLogin ? 'Sign In' : 'Sign Up';

  return (
    <>
      {errorMessages.map((msg) => (
        <p className={`${classes.error} body-small`} key={msg}>
          {msg}
        </p>
      ))}
      {fetchInfo.error && (
        <p className={`${classes.error} body-small margin-2r0`}>{fetchInfo.error}</p>
      )}
      {fetchInfo.isLoading && <p className="body-small">Sending...</p>}
      {!fetchInfo.isLoading && <button className="primary-button">{buttonText}</button>}
      <a className={`${classes.swap} body`} onClick={changeForm}>
        {changeText}
      </a>
    </>
  );
}

export default PortalActions;
