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

  const emailInput = useInput((value) => emailRegex.test(value));
  const passwordInput = useInput((value) => value.length >= 8);

  const inputsToRender = [
    { id: 'email', label: 'Email', type: 'text', ...emailInput },
    { id: 'password', label: 'Password', type: 'password', ...passwordInput },
  ];

  const fieldIsIncomplete =
    emailInput.value.trim() === '' || passwordInput.value.trim() === '';

  useEffect(() => {
    setErrorMessages([]);

    if (hasLoginBeenSubmitted && fieldIsIncomplete) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please ensure all fields are completed',
      ]);
    }

    if (hasLoginBeenSubmitted && !emailInput.isValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please enter a valid email',
      ]);
    }

    if (hasLoginBeenSubmitted && !passwordInput.isValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Your password should be 8 characters or longer',
      ]);
    }
  }, [
    hasLoginBeenSubmitted,
    fieldIsIncomplete,
    emailInput.isValid,
    passwordInput.isValid,
  ]);

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
      {inputsToRender.map((input) => {
        return (
          <PortalInput
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            value={input.value}
            onChange={input.valueChangeHandler}
            onBlur={input.inputBlurHandler}
            hasError={input.hasError}
          />
        );
      })}

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
