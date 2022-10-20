// ModalConfirmation.js
// This component creates a confirmation Modal, with two buttons: yes or no.
// This component needs the following 4 properties: modalActive, btnOneFunction, btnTwoFunction, text

// btnOneFunction is a function that will execute the onClick event of the first button

// btnTwoFunction is a function that will execute the onClick event of the second button

// text is a string with the confirmation message that will be displayed

// modalActive is a boolean of the state of the parent component.

import React, { Component } from "react";
import "../styles/Modal.css";
import "../styles/ModalConfirmation.css";

class ModalConfirmation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modalActive, btnOneFunction, btnTwoFunction, text } = this.props;

    // class that will be applied to parent div
    let active = "";
    if (modalActive) {
      active = "active";
    } else {
      active = "";
    }
    return (
      <div className={active + " " + "overlay"}>
        <div className="container">
          <div className="containerTwo">
            <h2>{text}</h2>
            <div className="contentBtn">
              <button onClick={btnOneFunction}>Yes</button>
              <button onClick={btnTwoFunction}>NO</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalConfirmation;
