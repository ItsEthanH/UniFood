function PortalActions(props) {
  const { error, isLoading } = props.fetchInfo;

  return (
    <>
      {error && (
        <p className={classes.error}>
          There was an error sending the request. Please try again later!
        </p>
      )}
      {isLoading && <p>Sending...</p>}
      {!isLoading && <button>Sign In</button>}
    </>
  );
}

export default PortalActions;
