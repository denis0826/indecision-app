import React from 'react';
import Modal from 'react-modal';

export default (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCLearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCLearSelectedOption}>Okay</button>
  </Modal>
);