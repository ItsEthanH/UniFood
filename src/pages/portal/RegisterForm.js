import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../context/AuthContext';

import PortalInput from './PortalInput';

import classes from './styles/PortalForm.module.css';

// hasRegisterBeenSubmitted is used so error messages don't show the first time the form is loaded
let hasRegisterBeenSubmitted;

function RegisterForm() {
  // refs are set up on the passwords to allow a more reactive validation. using the passwordValue and confirmPasswordValue cant be done, due to one being initialised after the other
  // ref values are included in the validation function for the passwords, highlighting them red if they dont match, and clearing it if they do.
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { sendRequest, response, isLoading, error } = useFetch();
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

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

    if (hasRegisterBeenSubmitted && passwordHasError) {
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

  // another useEffect to reset error messages and submit status for switching between register/sign in
  useEffect(() => {
    hasRegisterBeenSubmitted = false;
    setErrorMessages([]);
  }, []);

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

    const options = {
      method: 'POST',
      body: JSON.stringify({
        firstName: fnameValue,
        lastName: lnameValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
      }),
      header: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    sendRequest('/register', options).then(() => {
      console.log(response);
      if (!response) {
        setErrorMessages([
          'There was an error with registration. Please try again!',
        ]);
        return;
      }
      login();
      navigate('/app', { replace: true });
    });
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

      <PortalInput // Both password inputs have not got blur handlers, to prevent a false error on the first password input
        id="password"
        label="Password"
        type="password"
        value={passwordValue}
        onChange={passwordValueChangeHandler}
        hasError={passwordHasError}
        ref={passwordRef}
      />

      <PortalInput
        id="confirm-password"
        label="Confirm Password"
        type="password"
        value={confirmPasswordValue}
        onChange={confirmPasswordValueChangeHandler}
        hasError={confirmPasswordHasError}
        ref={confirmPasswordRef}
      />

      {errorMessages.map((msg) => (
        <p className={classes.error} key={msg}>
          {msg}
        </p>
      ))}
      {isLoading && <p>Sending...</p>}
      {!isLoading && <button>Sign Up</button>}
      {isLoggedIn && <p>test</p>}
    </form>
  );
}

export default RegisterForm;
