import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useInput from '../../hooks/useInput';
import AuthContext from '../../context/AuthContext';

import PortalInput from './PortalInput';

import classes from './styles/PortalForm.module.css';

let hasLoginBeenSubmitted;

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [errorMessages, setErrorMessages] = useState([]);
  const { sendRequest, response, isLoading, error } = useFetch();
  const navigate = useNavigate();

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    setIsTouched: emailSetIsTouched,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    setIsTouched: passwordSetIsTouched,
    valueChangeHandler: passwordValueChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput((value) => value.length >= 8);

  const fieldIsIncomplete =
    emailValue.trim() === '' || passwordValue.trim() === '';

  useEffect(() => {
    setErrorMessages([]);

    if (hasLoginBeenSubmitted && fieldIsIncomplete) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please ensure all fields are completed',
      ]);
    }

    if (hasLoginBeenSubmitted && !emailIsValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please enter a valid email',
      ]);
    }

    if (hasLoginBeenSubmitted && !passwordIsValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Your password should be 8 characters or longer',
      ]);
    }
  }, [hasLoginBeenSubmitted, fieldIsIncomplete, emailIsValid, passwordIsValid]);

  // another useEffect to reset error messages and submit status for switching between register/sign in
  useEffect(() => {
    hasLoginBeenSubmitted = false;
    setErrorMessages([]);
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    hasLoginBeenSubmitted = true;

    emailSetIsTouched(true);
    passwordSetIsTouched(true);
    const formIsValid = emailIsValid && passwordIsValid;

    if (!formIsValid) {
      return;
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
      header: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    sendRequest('/login', options);
  }

  useEffect(() => {
    // a failed login means response === false. return an error message in that case
    if (response === false) {
      setErrorMessages([
        'Your email or password is incorrect. Please try again!',
      ]);
      return;
    }

    // on component mount, response is initialised as null. this returns the function without an error message, as no submission has occured
    if (!response) {
      return;
    }

    login();
    navigate('/app', { replace: true });
  }, [response]);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <PortalInput
        id="email"
        label="Email"
        type="text"
        value={emailValue}
        onChange={emailValueChangeHandler}
        onBlur={emailInputBlurHandler}
        hasError={emailHasError}
      />

      <PortalInput
        id="password"
        label="Password"
        type="password"
        value={passwordValue}
        onChange={passwordValueChangeHandler}
        onBlur={passwordInputBlurHandler}
        hasError={passwordHasError}
      />

      <a href="">Forgotton your password?</a>
      {errorMessages.map((msg) => (
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
      {!isLoading && <button>Sign In</button>}
    </form>
  );
}

export default LoginForm;
