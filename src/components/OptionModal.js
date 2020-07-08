import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    closeTimeoutMS={200}
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.clearSelectedOption}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.clearSelectedOption}>
      Yes!!
    </button>
  </Modal>
);

export default OptionModal;
