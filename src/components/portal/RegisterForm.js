import classes from './PortalForm.module.css';

function submitHandler() {}

function RegisterForm() {
  return (
    <form className={classes.form} action="POST" onSubmit={submitHandler}>
      <label for="fname">First Name</label>
      <input type="text" name="fname" />

      <label for="lname">Last Name</label>
      <input type="text" name="lname" />

      <label for="email">Email</label>
      <input type="text" name="email" />

      <label for="password">Password</label>
      <input type="password" name="password" />

      <label for="confirm-password">Confirm Password</label>
      <input type="password" name="confirm-password" />
      <button>Sign Up</button>
    </form>
  );
}

export default RegisterForm;
