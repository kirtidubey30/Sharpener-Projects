import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  const positionModal = document.getElementById("modalOverlays");
  return (
    <Fragment>
      {createPortal(<BackDrop />, positionModal)}
      {createPortal(
        <ModalOverlays> {props.children} </ModalOverlays>,
        positionModal
      )}
    </Fragment>
  );
}

export default Modal;
