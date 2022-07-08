import { useRef } from 'react';
import useFetch from '../../hooks/useFetch';

import classes from './PortalForm.module.css';

function RegisterForm() {
  const { sendRequest, response, isLoading, error } = useFetch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmailValue = emailInputRef.current.value;
    const enteredPasswordValue = passwordInputRef.current.value;
    const enteredConfirmPasswordValue = confirmPasswordInputRef.current.value;

    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: enteredEmailValue,
        password: enteredPasswordValue,
        'confirm-password': enteredConfirmPasswordValue,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    sendRequest('/register', options, 'REGISTER');
  }

  return (
    <form className={classes.form} action="POST" onSubmit={submitHandler}>
      <label for="fname">First Name</label>
      <input type="text" name="fname" />

      <label for="lname">Last Name</label>
      <input type="text" name="lname" />

      <label for="email">Email</label>
      <input type="text" name="email" ref={emailInputRef} />

      <label for="password">Password</label>
      <input type="password" name="password" ref={passwordInputRef} />

      <label for="confirm-password">Confirm Password</label>
      <input
        type="password"
        name="confirm-password"
        ref={confirmPasswordInputRef}
      />
      <button>Sign Up</button>
    </form>
  );
}

export default RegisterForm;
