import { forwardRef } from 'react';
import classes from './styles/PortalInput.module.css';

const PortalInput = forwardRef((props, ref) => {
  const errorStyles = props.hasError ? classes.invalid : '';
  const onBlur = props.type === 'password' ? null : props.onblur;

  return (
    <>
      <label
        className={`${classes.label} ${errorStyles} body-bold`}
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
        onBlur={onBlur}
        ref={ref}
      />
    </>
  );
});

export default PortalInput;
