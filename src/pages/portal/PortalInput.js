import { forwardRef } from 'react';
import classes from './styles/PortalInput.module.css';

const PortalInput = forwardRef((props, ref) => {
  const errorStyles = props.hasError ? classes.invalid : '';

  return (
    <>
      <label
        className={`${classes.label} ${errorStyles}`}
        typeof={props.type}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className={`${classes.input} ${errorStyles}`}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
      />
    </>
  );
});

export default PortalInput;
