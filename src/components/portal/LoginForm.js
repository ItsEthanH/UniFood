import { useNavigate } from 'react-router-dom';

import PortalInput from './PortalInput';

import classes from './PortalForm.module.css';

function LoginForm() {
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();

    navigate('/app/dashboard/');
  }

  return (
    <form className={classes.form}>
      <PortalInput
        id="email"
        label="Email"
        type="text"
        // value={emailValue}
        // onChange={emailValueChangeHandler}
        // onBlur={emailInputBlurHandler}
        // hasError={emailHasError}
      />

      <PortalInput
        id="password"
        label="Password"
        type="password"
        // value={passwordValue}
        // onChange={passwordValueChangeHandler}
        // onBlur={passwordInputBlurHandler}
        // hasError={passwordHasError}
      />

      <a href="">Forgotton your password?</a>
      <button onClick={submitHandler}>Sign In</button>
    </form>
  );
}

export default LoginForm;
