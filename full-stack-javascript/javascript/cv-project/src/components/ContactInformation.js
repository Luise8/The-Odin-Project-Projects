// ContactInformation.js
import React, { Component } from "react";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import "../styles/ContactInformation.css";
import example from "./example";

class ContactInformation extends Component {
  constructor() {
    super();

    this.state = {
      // Item
      itemContactInformation: [...example.contactInformation], // To handle change in the form
      itemOverview: [...example.contactInformation], //To display on screen
      isActive: false, // Modal boolean
      activeDeleteAll: false, // Modal boolean
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  // To handle the input changes in the form
  handleChange = (e) => {
    let item = [...this.state.itemContactInformation];
    let inputSelected = e.target.value;
    item[e.target.getAttribute("data-index-state-value")].text = inputSelected;
    this.setState({
      itemContactInformation: [...item],
    });
  };

  // To change iformation
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
        item.text = example.contactInformation[i].text;
      }
      return item;
    });
    this.setState({
      itemOverview: [...newItem],
      isActive: !this.state.isActive,
    });
  };

  // To restore to default information
  handleToggleDeleteAll = (e) => {
    e.preventDefault();
    this.state.itemOverview.forEach((item, i) => {
      if (item.text !== example.contactInformation[i].text) {
        this.setState({
          activeDeleteAll: !this.state.activeDeleteAll,
        });
      }
    });
  };

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      itemOverview: [...example.contactInformation],
      activeDeleteAll: !this.state.activeDeleteAll,
    });
  };

  render() {
    const { isActive, itemContactInformation, itemOverview, activeDeleteAll } =
      this.state;

    const form = {
      inputList: [
        {
          titleLabel: "Enter your address",
          keyStateName: "address",
          typeInput: "text",
          indexStateValue: 0,
        },
        {
          titleLabel: "Enter your phone",
          keyStateName: "phoneNumber",
          typeInput: "text",
          indexStateValue: 1,
        },
        {
          titleLabel: "Enter your email",
          keyStateName: "email",
          typeInput: "text",
          indexStateValue: 2,
        },
        {
          titleLabel: "Enter your LinkedIn",
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

    // Block scrolling when some modal is active
    if (isActive || activeDeleteAll) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

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
              <a href={itemOverview[3].text} target="_blank">
                <p>{itemOverview[3].text}</p>
              </a>
            </div>
            <div>
              <h3>WEBSITE</h3>
              <a href={itemOverview[4].text} target="_blank">
                <p>{itemOverview[4].text}</p>
              </a>
            </div>
          </div>
          <div className="container-btn-contact-inf">
            <button className="btn-contact-inf" onClick={this.changeItem}>
              EDIT
            </button>
            <button
              className="btn-contact-inf"
              onClick={this.handleToggleDeleteAll}
            >
              DEFAULT RESTORE
            </button>
          </div>
        </div>
        <ModalConfirmation
          modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text="Are you sure you want to delete your contact information?"
        />
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
