import React, { Fragment } from "react";

import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return (
    <div className={classes.backdrop}></div>
    // <div className="backDrop"></div>
  );
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
      <BackDrop />
      <ModalOverlays>{props.children}</ModalOverlays>
      {/* React.createPortal takes two arguments first which element to render and
      second where to render */}
      {/* {React.createPortal(<BackDrop />, positionModal)}
      {React.createPortal(
        <ModalOverlays> {props.children} </ModalOverlays>,
        positionModal
      )} */}
    </Fragment>
  );
}

export default Modal;
