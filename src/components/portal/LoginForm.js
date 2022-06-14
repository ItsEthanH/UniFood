import { useNavigate } from 'react-router-dom';

import classes from './PortalForm.module.css';

function LoginForm() {
  function submitHandler(event) {
    event.preventDefault();
    const navigate = useNavigate();

    navigate('/app/dashboard/');
  }

  return (
    <form className={classes.form}>
      <label for="email">Email</label>
      <input type="text" name="email" />

      <label for="password">Password</label>
      <input type="password" name="password" />
      <a href="">Forgotton your password?</a>
      <button onClick={submitHandler}>Sign In</button>
    </form>
  );
}

export default LoginForm;
