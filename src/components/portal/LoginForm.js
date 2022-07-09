import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import PortalInput from './PortalInput';

import classes from './PortalForm.module.css';

let hasLoginBeenSubmitted;

function LoginForm() {
  const [errorMessages, setErrorMessages] = useState([]);
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

    navigate('/app/dashboard/');
  }

  return (
    <form className={classes.form}>
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
      <button onClick={submitHandler}>Sign In</button>
    </form>
  );
}

export default LoginForm;
