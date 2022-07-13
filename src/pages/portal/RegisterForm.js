import { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import PortalInput from './PortalInput';
import PortalActions from './PortalActions';

import classes from './styles/PortalForm.module.css';

// hasRegisterBeenSubmitted is used so error messages don't show the first time the form is loaded
let hasRegisterBeenSubmitted;

function RegisterForm() {
  // refs are set up on the passwords to allow a more reactive validation. using the passwordValue and confirmPasswordValue cant be done, due to one being initialised after the other
  // ref values are forwarded and included in the validation function for the passwords, highlighting them red if they dont match, and clearing it if they do.
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { isFormLogin, changeForm, authoriseAccess, fetchInfo, errorMessages, setErrorMessages } =
    useOutletContext();

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const fnameInput = useInput((value) => value.trim() !== '');
  const lnameInput = useInput((value) => value.trim() !== '');
  const emailInput = useInput((value) => emailRegex.test(value));
  const passwordInput = useInput(
    (value) => value.length >= 8 && value === confirmPasswordRef.current.value
  );
  const confirmPasswordInput = useInput(
    (value) => value.length >= 8 && value === passwordRef.current.value
  );

  const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
  const fieldIsIncomplete =
    fnameInput.value === '' ||
    lnameInput.value === '' ||
    emailInput.value === '' ||
    passwordInput.value === '' ||
    confirmPasswordInput.value === '';

  const inputsToRender = [
    { id: 'fname', label: 'First Name', type: 'text', ...fnameInput },
    { id: 'lname', label: 'Last Name', type: 'test', ...lnameInput },
    { id: 'email', label: 'Email', type: 'email', ...emailInput },
    { id: 'password', label: 'Password', type: 'password', ...passwordInput },
    {
      id: 'confirm-password',
      label: 'Confirm Password',
      type: 'password',
      ...confirmPasswordInput,
    },
  ];

  const errorCheckArray = [
    { value: fieldIsIncomplete, message: 'Please ensure all fields are completed' },
    { value: !emailInput.isValid, message: 'Please enter a valid email' },
    {
      value: passwordInput.value.length < 8 || confirmPasswordInput.value.length < 8,
      message: 'Your password should be 8 characters or longer',
    },
    { value: !passwordsMatch, message: 'Please ensure both passwords match' },
  ];

  function submitHandler(event) {
    event.preventDefault();
    hasRegisterBeenSubmitted = true;
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
        firstName: fnameInput.value,
        lastName: lnameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
      }),
      header: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    authoriseAccess(options);
  }

  // error handling code runs whenever a value in the depenedencies array changes. won't run the first time the page is loaded due to hasRegisterBeenSubmitted
  // allows for the error messages to clear as the user inputs values. very nice UX, if i do say so myself!
  useEffect(() => {
    setErrorMessages([]);

    for (const check of errorCheckArray) {
      if (hasRegisterBeenSubmitted && check.value) {
        setErrorMessages((prevMsgs) => [...prevMsgs, check.message]);
      }
    }
  }, [
    hasRegisterBeenSubmitted,
    fieldIsIncomplete,
    !emailInput.isValid,
    !passwordInput.hasError,
    passwordsMatch,
  ]);

  // another useEffect to reset error messages and submit status for switching between register/sign in
  useEffect(() => {
    hasRegisterBeenSubmitted = false;
    setErrorMessages([]);
  }, []);

  function renderInputs(input) {
    let ref;
    let blur = input.inputBlurHandler;

    // both password inputs have not got blur handlers, to prevent a false error on the first password input
    // password refs are also forwarded here too
    if (input.id === 'password') {
      blur = null;
      ref = passwordRef;
    }

    if (input.id === 'confirm-password') {
      blur = null;
      ref = confirmPasswordRef;
    }

    return (
      <PortalInput
        key={input.id}
        id={input.id}
        label={input.label}
        type={input.type}
        value={input.value}
        onChange={input.valueChangeHandler}
        onBlur={blur}
        hasError={input.hasError}
        ref={ref}
      />
    );
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {inputsToRender.map((input) => renderInputs(input))}
      <PortalActions
        changeForm={changeForm}
        isFormLogin={isFormLogin}
        fetchInfo={fetchInfo}
        errorMessages={errorMessages}
      />
    </form>
  );
}

export default RegisterForm;
