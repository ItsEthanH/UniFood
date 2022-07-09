import { useState, useEffect, useRef } from 'react';
import useInput from '../../hooks/useInput';

import PortalInput from './PortalInput';

import classes from './PortalForm.module.css';

// hasRegisterBeenSubmitted is used so error messages don't show the first time the form is loaded
let hasRegisterBeenSubmitted = false;

function RegisterForm() {
  // refs are set up on the passwords to allow a more reactive validation. using the passwordValue and confirmPasswordValue cant be done, due to one being initialised after the other
  // ref values are included in the validation function for the passwords, highlighting them red if they dont match, and clearing it if they do.
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [errorMessages, setErrorMessages] = useState([]);
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const {
    value: fnameValue,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    setIsTouched: fnameSetIsTouched,
    valueChangeHandler: fnameValueChangeHandler,
    inputBlurHandler: fnameInputBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lnameValue,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    setIsTouched: lnameSetIsTouched,
    valueChangeHandler: lnameValueChangeHandler,
    inputBlurHandler: lnameInputBlurHandler,
  } = useInput((value) => value.trim() !== '');

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
  } = useInput(
    (value) => value.length >= 8 && value === confirmPasswordRef.current.value
  );

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    setIsTouched: confirmPasswordSetIsTouched,
    valueChangeHandler: confirmPasswordValueChangeHandler,
    inputBlurHandler: confirmPasswordInputBlurHandler,
  } = useInput(
    (value) => value.length >= 8 && value === passwordRef.current.value
  );

  const fieldIsIncomplete =
    fnameHasError ||
    lnameHasError ||
    emailValue.trim() === '' ||
    passwordValue.trim() === '' ||
    confirmPasswordValue.trim() === '';

  const passwordsMatch = passwordValue === confirmPasswordValue;

  // error handling code runs whenever a value in the depenedencies array changes. won't run the first time the page is loaded due to hasRegisterBeenSubmitted
  // allows for the error messages to clear as the user inputs values. very nice UX, if i do say so myself!
  useEffect(() => {
    setErrorMessages([]);

    if (hasRegisterBeenSubmitted && fieldIsIncomplete) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please ensure all fields are completed',
      ]);
    }

    if (hasRegisterBeenSubmitted && !emailIsValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please enter a valid email',
      ]);
    }

    if (hasRegisterBeenSubmitted && !passwordIsValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Passwords need to be 8 characters or longer',
      ]);
    }

    if (hasRegisterBeenSubmitted && !passwordsMatch) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please ensure both passwords match',
      ]);
    }
  }, [
    hasRegisterBeenSubmitted,
    emailIsValid,
    passwordIsValid,
    fieldIsIncomplete,
    passwordsMatch,
  ]);

  function submitHandler(event) {
    event.preventDefault();
    hasRegisterBeenSubmitted = true;

    fnameSetIsTouched(true);
    lnameSetIsTouched(true);
    emailSetIsTouched(true);
    passwordSetIsTouched(true);
    confirmPasswordSetIsTouched(true);

    const formIsValid =
      fnameIsValid &&
      lnameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid &&
      passwordsMatch;

    if (!formIsValid) {
      return;
    }

    console.log('Sent!');
  }

  return (
    <form className={classes.form} action="POST" onSubmit={submitHandler}>
      <PortalInput
        id="fname"
        label="First Name"
        type="text"
        value={fnameValue}
        onChange={fnameValueChangeHandler}
        onBlur={fnameInputBlurHandler}
        hasError={fnameHasError}
      />

      <PortalInput
        id="lname"
        label="Last Name"
        type="text"
        value={lnameValue}
        onChange={lnameValueChangeHandler}
        onBlur={lnameInputBlurHandler}
        hasError={lnameHasError}
      />

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
        ref={passwordRef}
      />

      <PortalInput
        id="confirm-password"
        label="Confirm Password"
        type="password"
        value={confirmPasswordValue}
        onChange={confirmPasswordValueChangeHandler}
        onBlur={confirmPasswordInputBlurHandler}
        hasError={confirmPasswordHasError}
        ref={confirmPasswordRef}
      />
      <div className={classes.errors}>
        {errorMessages.map((msg) => (
          <p key={msg}>{msg}</p>
        ))}
      </div>
      <button>Sign Up</button>
    </form>
  );
}

export default RegisterForm;
