// MainInformation.js MainInformation information
import React, { Component } from "react";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import "../styles/MainInformation.css";

const DEFAULTITEMINFORMATION = [
  { key: "fullName", text: "Add your full name" },
  {
    key: "positionTitle",
    text: "Add your Position Title",
  },
  { key: "resume", text: "Add your resume" },
];

class MainInformation extends Component {
  constructor() {
    super();

    this.state = {
      // Item
      itemMainInformation: [...DEFAULTITEMINFORMATION],
      itemOverview: [...DEFAULTITEMINFORMATION],
      isActive: false, // Modal boolean
      activeDeleteAll: false, // Modal boolean
    };
    this.changeItem = this.changeItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  changeItem = () => {
    this.handleToggle();
    this.setState({
      itemMainInformation: [
        {
          text: this.state.itemOverview[0].text,
        },
        {
          text: this.state.itemOverview[1].text,
        },
        {
          text: this.state.itemOverview[2].text,
        },
      ],
    });
  };
  onSubmitItem = (e) => {
    e.preventDefault();
    let newItem = this.state.itemMainInformation.map((item, i) => {
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
  handleChange = (e) => {
    let item = [...this.state.itemMainInformation];
    let inputSelected = e.target.value;
    item[e.target.getAttribute("data-index-state-value")].text = inputSelected;
    this.setState({
      itemMainInformation: [...item],
    });
  };

  handleToggleDeleteAll = (e) => {
    e.preventDefault();
    this.state.itemOverview.forEach((item, i) => {
      if (item.text !== DEFAULTITEMINFORMATION[i].text) {
        this.setState({
          activeDeleteAll: !this.state.activeDeleteAll,
        });
      }
    });
  };
  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      itemOverview: [...DEFAULTITEMINFORMATION],
      activeDeleteAll: !this.state.activeDeleteAll,
    });
  };

  handleToggle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive, itemMainInformation, itemOverview, activeDeleteAll } =
      this.state;
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

    // Block scrolling when some modal is active
    if (isActive || activeDeleteAll) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return (
      <>
        <div className="container-main-information">
          <div>
            <h1>{itemOverview[0].text}</h1>
            <h2>{itemOverview[1].text}</h2>
            <p>{itemOverview[2].text}</p>
          </div>
          <div className="container-btn-main-inf">
            <button className="btn-main-inf" onClick={this.changeItem}>
              EDIT
            </button>
            <button
              className="btn-main-inf"
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
          text="Are you sure you want to delete your primary personal information?"
        />
        <ModalForm
          inputsList={form.inputList}
          btnList={form.btnList}
          modalActive={isActive}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange}
          stateInputValues={itemMainInformation}
        />
      </>
    );
  }
}

export default MainInformation;
