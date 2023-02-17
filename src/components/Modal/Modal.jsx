import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Backdrop = ({ onHideForm }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onHideForm}
    ></div>
  );
};

const ModalWindow = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onHideForm, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideForm={onHideForm} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
