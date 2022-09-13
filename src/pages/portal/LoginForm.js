import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import PortalInput from './PortalInput';
import PortalActions from './PortalActions';

import classes from './styles/PortalForm.module.css';

let hasLoginBeenSubmitted;

function LoginForm() {
  const { isFormLogin, changeForm, authoriseAccess, fetchInfo, errorMessages, setErrorMessages } =
    useOutletContext();

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const emailInput = useInput((value) => emailRegex.test(value));
  const passwordInput = useInput((value) => value.length >= 8);
  const fieldIsIncomplete = emailInput.value.trim() === '' || passwordInput.value.trim() === '';

  const inputsToRender = [
    { id: 'email', label: 'Email', type: 'text', ...emailInput },
    { id: 'password', label: 'Password', type: 'password', ...passwordInput },
  ];

  const errorCheckArray = [
    { value: fieldIsIncomplete, message: 'Please ensure all fields are completed' },
    { value: !emailInput.isValid, message: 'Please enter a valid email' },
    { value: !passwordInput.isValid, message: 'Your password should be 8 characters or longer' },
  ];

  function submitHandler(event) {
    event.preventDefault();
    hasLoginBeenSubmitted = true;
    let formIsValid = true;

    for (const input of inputsToRender) {
      input.setIsTouched(true);
      if (!input.isValid) {
        formIsValid = false;
      }
    }

    if (!formIsValid) {
      return;
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
      header: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    authoriseAccess(options);
  }

  useEffect(() => {
    setErrorMessages([]);

    for (const check of errorCheckArray) {
      if (hasLoginBeenSubmitted && check.value) {
        setErrorMessages((prevMsgs) => [...prevMsgs, check.message]);
      }
    }
  }, [hasLoginBeenSubmitted, fieldIsIncomplete, emailInput.isValid, passwordInput.isValid]);

  // another useEffect to reset error messages and submit status for switching between register/sign in
  useEffect(() => {
    hasLoginBeenSubmitted = false;
    setErrorMessages([]);
  }, []);

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
      <a className="body-small" href="">
        Forgotton your password?
      </a>
      <PortalActions
        changeForm={changeForm}
        isFormLogin={isFormLogin}
        fetchInfo={fetchInfo}
        errorMessages={errorMessages}
      />
    </form>
  );
}

export default LoginForm;
