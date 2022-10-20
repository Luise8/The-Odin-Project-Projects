// ModalForm.js
// This component turns a Form component into a Modal.
// Need to import Form component in the following path "./Form"
// Need to import Modal.css in the following path "../styles/Modal.css";

// Need the Form properties, explained in the Form component:
//        inputsList
//        btnList
//        btnTwoFunction
//        btnOneFunction
//        onChange
//        stateInputValues

// Also need the modalActive property which is a boolean of the state of the parent component.

import React, { Component } from "react";
import Form from "./Form";
import "../styles/Modal.css";

class ModalForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      inputsList,
      btnList,
      modalActive,
      btnTwoFunction,
      btnOneFunction,
      onChange,
      stateInputValues,
    } = this.props;

    // class that will be applied to parent div
    let active = "";
    if (modalActive) {
      active = "active";
    } else {
      active = "";
    }
    return (
      <div className={active + " " + "overlay"}>
        <Form
          btnTwoFunction={btnTwoFunction}
          inputsList={inputsList}
          btnList={btnList}
          btnOneFunction={btnOneFunction}
          onChange={onChange}
          stateInputValues={stateInputValues}
        />
      </div>
    );
  }
}

export default ModalForm;
