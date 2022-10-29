// Education.js
import React, { Component } from "react";
import Overview from "./OverviewArrayObjects";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import uniqid from "uniqid";
import "../styles/SectionHeader.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Item
      eduItem: [
        { id: uniqid() },
        { key: "institution", text: "", tag: "h3", className: "title" },
        { key: "degree", text: "", tag: "p", className: "para" },
        { key: "dateFrom", text: "", tag: "p", className: "para lowOpacity" },
        { key: "dateTo", text: "", tag: "p", className: "para lowOpacity" },
      ],
      eduList: [], // Array of items
      isActive: false, // Modal boolean
      isActiveEdit: false, // Modal boolean
      activeDeleteAll: false, // Modal boolean
      itemSelectedIndex: -1, // pointer item for edit
    };
    /*    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this); */
  }

  render() {
    // object that has inputsList and btnList for ModalForm component.
    const form = {
      inputsList: [
        {
          titleLabel: "Educational Institution:",
          keyStateName: "institution",
          typeInput: "text",
          indexStateValue: 1,
        },

        {
          titleLabel: "Degree:",
          keyStateName: "degree",
          typeInput: "text",
          indexStateValue: 2,
        },

        {
          titleLabel: "Date From:",
          keyStateName: "datefrom",
          typeInput: "date",
          indexStateValue: 3,
        },

        {
          titleLabel: "Date to:",
          keyStateName: "dateTo",
          typeInput: "date",
          indexStateValue: 4,
        },
      ],
      btnList: {
        btnOne: "Save",
        btnTwo: "Cancel",
      },
    };

    return (
      <div>
        <div className="section-header">
          <h2>Education</h2>
          <button className="btn add-edu" onClick={this.handleToggle}>
            ADD
          </button>
          <button className="btn dlt-edu" onClick={this.handleToggleDeleteAll}>
            DELETE ALL
          </button>
        </div>

        {/* Show all the items Education on the screen */}
        {/*         <Overview
          itemList={}
          removeItem={this.removeItem}
          changeItem={this.changeItem}
        /> */}
        {/* Modal confirmation to delete all */}
        {/*         <ModalConfirmation
          modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text=""
        /> */}
        {/* Modal edit fornm */}
        {/*  <ModalForm
          modalActive={isActiveEdit}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={}
          btnTwoFunction={this.handleToggleEdit}
          btnOneFunction={this.onsubmitEditItem}
          onChange={this.handleChange}
        /> */}
        {/* Modal fornm */}
        {/* <ModalForm
          modalActive={isActive}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange}
        /> */}
      </div>
    );
  }
}

export default Education;
