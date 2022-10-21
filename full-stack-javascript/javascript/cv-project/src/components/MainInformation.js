// MainInformation.js MainInformation information
import React, { Component } from "react";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import "../styles/MainInformation.css";

class MainInformation extends Component {
  constructor() {
    super();

    this.state = {
      // Item
      itemMainInformation: [
        { key: "fullName", text: "Add your full name" },
        {
          key: "positionTitle",
          text: "Add your Position Title",
        },
        { key: "resume", text: "Add your resume" },
      ],
      isActive: false, // Modal boolean
    };
  }

  render() {
    const { isActive, itemMainInformation } = this.state;
    const form = {
      inputList: [
        {
          titleLabel: "Enter your full Name:",
          keyStateName: "fullName",
          typeInput: "text",
          indexStateValue: 0,
        },
        {
          titleLabel: "Enter your position Title:",
          keyStateName: "positionTitle",
          typeInput: "text",
          indexStateValue: 1,
        },

        {
          titleLabel: "Enter your resume",
          keyStateName: "resume",
          typeInput: "text",
          indexStateValue: 2,
        },
      ],
      btnList: {
        btnOne: "Save",
        btnTwo: "Cancel",
      },
    };
    return (
      <>
        <div className="container-main-information">
          <div>
            <h1>{itemMainInformation[0].text}</h1>
            <h2>{itemMainInformation[1].text}</h2>
            <p>{itemMainInformation[2].text}</p>
          </div>
          <button className="btn-main-inf" onClick={this.handleToggle}>
            EDIT
          </button>
          <button className="btn-main-inf" onClick={this.handleToggleDeleteAll}>
            DEFAULT RESTORE
          </button>
        </div>
        <ModalForm
          inputsList={form.inputList}
          btnList={form.btnList}
          modalActive={isActive}
          /*       btnTwoFunction={}
      btnOneFunction={}
      onChange={} */
          stateInputValues={itemMainInformation}
        />
      </>
    );
  }
}

export default MainInformation;
