import { useOutletContext } from 'react-router-dom';

import PortalActions from './PortalActions';
import PortalInput from './PortalInput';

import classes from './styles/PortalForm.module.css';

function PortalForm() {
  const { submitHandler, fetchHook, formInputs } = useOutletContext();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {formInputs.map((input) => {
        return (
          <PortalInput
            id={input.id}
            label={input.name}
            type={input.type}
            value={input.value}
            onChange={input.valueChangeHandler}
            onBlur={input.inputBlurHandler}
            hasError={input.hasError}
          />
        );
      })}
      <PortalActions fetchInfo={fetchHook} />
    </form>
  );
}

export default PortalForm;
