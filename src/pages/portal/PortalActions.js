import classes from './styles/PortalForm.module.css';

function PortalActions(props) {
  const { error, isLoading } = props.fetchInfo;
  const buttonText = props.isFormLogin ? 'Sign In' : 'Sign Up';

  return (
    <>
      {props.errorMessages.map((msg) => (
        <p className={classes.error} key={msg}>
          {msg}
        </p>
      ))}
      {error && (
        <p className={classes.error}>
          There was an error sending the request. Please try again later!
        </p>
      )}
      {isLoading && <p>Sending...</p>}
      {!isLoading && <button>{buttonText}</button>}
    </>
  );
}

export default PortalActions;
