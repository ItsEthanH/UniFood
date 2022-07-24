import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './styles/Modal.module.css';

const portalElement = document.getElementById('overlays');

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

function ModalCard(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalCard>{props.children}</ModalCard>, portalElement)}
    </Fragment>
  );
}

export default Modal;
