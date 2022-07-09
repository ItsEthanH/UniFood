import { forwardRef } from 'react';
import classes from './PortalInput.module.css';

const PortalInput = forwardRef((props, ref) => {
  const errorStyles = props.hasError ? classes.invalid : '';

  return (
    <div className={`${classes.entry} ${errorStyles}`}>
      <label typeof={props.type} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
      />
    </div>
  );
});

export default PortalInput;
