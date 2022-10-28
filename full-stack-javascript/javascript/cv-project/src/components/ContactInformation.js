// ContactInformation.js
import React, { Component } from "react";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import "../styles/ContactInformation.css";

const DEFAULTITEMINFORMATION = [];

class ContactInformation extends Component {
  constructor() {
    super();

    this.state = {
      // Item
      itemMainInformation: [],
      itemOverview: [],
      isActive: false, // Modal boolean
      activeDeleteAll: false, // Modal boolean
    };
    /*     this.changeItem = this.changeItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this); */
  }

  render() {
    const { isActive, itemMainInformation, itemOverview, activeDeleteAll } =
      this.state;
    const form = {};

    return (
      <>
        <div className="container-contact-information">
          <div></div>
          <button className="btn-contact-inf" /* onClick={this.changeItem} */>
            EDIT
          </button>
          <button
            className="btn-contact-inf"
            /*   onClick={this.handleToggleDeleteAll} */
          >
            DEFAULT RESTORE
          </button>
        </div>
        {/* <ModalConfirmation
                 modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text="Are you sure you want to delete your primary personal information?" 
        />
        <ModalForm
                  inputsList={form.inputList}
          btnList={form.btnList}
          modalActive={isActive}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange} 
          stateInputValues={}
        /> */}
      </>
    );
  }
}

export default ContactInformation;
