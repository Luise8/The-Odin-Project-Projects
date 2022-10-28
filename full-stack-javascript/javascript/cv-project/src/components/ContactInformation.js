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

    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeItem = this.changeItem.bind(this);
    /*     ;
   

    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this); */
  }

  handleChange = (e) => {
    let item = [...this.state.itemContactInformation];
    let inputSelected = e.target.value;
    item[e.target.getAttribute("data-index-state-value")].text = inputSelected;
    this.setState({
      itemContactInformation: [...item],
    });
  };

  handleToggle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  changeItem = () => {
    this.handleToggle();
    /*     let newItem = this.state.itemOverview.map((item, i) => {
      return item;
    }); */
    this.setState({
      itemContactInformation: [
        { text: this.state.itemOverview[0].text },
        { text: this.state.itemOverview[1].text },
        { text: this.state.itemOverview[2].text },
        { text: this.state.itemOverview[3].text },
        { text: this.state.itemOverview[4].text },
      ],
    });
  };

  onSubmitItem = (e) => {
    e.preventDefault();
    let newItem = this.state.itemContactInformation.map((item, i) => {
      if (item.text == "") {
        item.text = DEFAULTITEMINFORMATION[i].text;
      }
      return item;
    });
    this.setState({
      itemOverview: [...newItem],
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive, itemContactInformation, itemOverview, activeDeleteAll } =
      this.state;

    const form = {
      inputList: [
        {
          titleLabel: DEFAULTITEMINFORMATION[0].text,
          keyStateName: "address",
          typeInput: "text",
          indexStateValue: 0,
        },
        {
          titleLabel: DEFAULTITEMINFORMATION[1].text,
          keyStateName: "phoneNumber",
          typeInput: "text",
          indexStateValue: 1,
        },
        {
          titleLabel: DEFAULTITEMINFORMATION[2].text,
          keyStateName: "email",
          typeInput: "text",
          indexStateValue: 2,
        },
        {
          titleLabel: DEFAULTITEMINFORMATION[3].text,
          keyStateName: "linkedin",
          typeInput: "text",
          indexStateValue: 3,
        },
        {
          titleLabel: "Enter your website URL",
          keyStateName: "website",
          typeInput: "text",
          indexStateValue: 4,
        },
      ],
      btnList: {
        btnOne: "Save",
        btnTwo: "Cancel",
      },
    };

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
          <div className="container-btn-contact-inf">
            <button className="btn-contact-inf" onClick={this.changeItem}>
              EDIT
            </button>
            <button
              className="btn-contact-inf"
              /*   onClick={this.handleToggleDeleteAll} */
            >
              DEFAULT RESTORE
            </button>
          </div>
        </div>
        {/* <ModalConfirmation
                 modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text="Are you sure you want to delete your primary personal information?" 
    />*/}
        <ModalForm
          inputsList={form.inputList}
          btnList={form.btnList}
          modalActive={isActive}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange}
          stateInputValues={itemContactInformation}
        />
      </>
    );
  }
}

export default ContactInformation;
