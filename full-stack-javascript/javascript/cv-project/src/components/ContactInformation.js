// ContactInformation.js
import React, { Component } from "react";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import "../styles/ContactInformation.css";

const DEFAULTITEMINFORMATION = [
  { key: "address", text: "Add your address" },
  { key: "phoneNumber", text: "Add your phone number" },
  { key: "email", text: "Add your email" },
  { key: "linkedin", text: "Add your Linkedin" },
  { key: "website", text: "Add your website" },
];

class ContactInformation extends Component {
  constructor() {
    super();

    this.state = {
      // Item
      itemContactInformation: [...DEFAULTITEMINFORMATION],
      itemOverview: [...DEFAULTITEMINFORMATION],
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
    const { isActive, itemContactInformation, itemOverview, activeDeleteAll } =
      this.state;
    const form = {};

    return (
      <>
        <div className="container-contact-information">
          <div className="container-contact-inf-child">
            <div>
              <h3>ADDRESS</h3>
              <p>{itemOverview[0].text}</p>
            </div>
            <div>
              <h3>PHONE</h3>
              <p>{itemOverview[1].text}</p>
            </div>
            <div>
              <h3>EMAIL</h3>
              <p>{itemOverview[2].text}</p>
            </div>
            <div>
              <h3>LINKEDIN</h3>
              <p>{itemOverview[3].text}</p>
            </div>
            <div>
              <h3>WEBSITE</h3>
              <p>{itemOverview[4].text}</p>
            </div>
          </div>
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
