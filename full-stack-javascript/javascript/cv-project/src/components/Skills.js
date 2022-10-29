// Skills.js
import React, { Component } from "react";
import "../styles/Skills.css";
import OverviewArrayObjects from "./OverviewArrayObjects";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Item
      skillItem: [
        { id: uniqid() },
        { key: "skill", text: "", tag: "p", className: "para" },
      ],
      skillList: [], // Array of items
      isActive: false, // Modal boolean
      isActiveEdit: false, // Modal boolean
      activeDeleteAll: false, // Modal boolean
      itemSelectedIndex: -1, // pointer expList item for edit item
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    /*     
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this); */
  }

  // To handle the input changes in the form
  handleChange = (e) => {
    let item = [...this.state.skillItem];
    let inputSelected = e.target.value;
    item[1].text = inputSelected;
    this.setState({
      skillItem: [...item],
    });
  };

  // To add new items button
  handleToggle = () => {
    this.setState({
      skillItem: [
        { id: uniqid() },
        { key: "skill", text: "", tag: "p", className: "para" },
      ],
      isActive: !this.state.isActive,
    });
  };

  onSubmitItem = (e) => {
    e.preventDefault();
    this.setState({
      skillList: this.state.skillList.concat([this.state.skillItem]),
      skillItem: [
        { id: uniqid() },
        { key: "skill", text: "", tag: "p", className: "para" },
      ],
      isActive: !this.state.isActive,
    });
  };

  // To each single item buttons
  changeItem = (id) => {
    this.handleToggleEdit();
    let updateItem;
    let index = "";
    this.state.skillList.forEach((item, i) => {
      if (item[0].id === id) {
        updateItem = item;
        index = i;
      }
    });

    this.setState({
      skillItem: [
        { id: id },
        {
          key: "skill",
          text: updateItem[1].text,
          tag: "p",
          className: "para",
        },
      ],
      itemSelectedIndex: index,
    });
  };

  removeItem(id) {
    const newList = this.state.skillList.filter((skillItem) => {
      return skillItem[0].id !== id;
    });

    this.setState({
      skillList: [...newList],
      skillItem: [
        { id: uniqid() },
        { key: "skill", text: "", tag: "p", className: "para" },
      ],
      isActive: false,
    });
  }

  render() {
    const { skillList, isActive, skillItem, isActiveEdit, activeDeleteAll } =
      this.state;

    // object that has inputsList and btnList for ModalForm component.
    const form = {
      inputsList: [
        {
          titleLabel: "New Skill",
          keyStateName: "skill",
          typeInput: "text",
          indexStateValue: 1,
        },
      ],
      btnList: {
        btnOne: "Save",
        btnTwo: "Cancel",
      },
    };
    return (
      <>
        <div className="container-skills">
          <div className="container-header-skills">
            <div className="container-title-skills">
              <h3>SKILLS</h3>
            </div>
            <div className="container-btn-skills">
              <button className="btn-add-skills" onClick={this.handleToggle}>
                ADD
              </button>
              <button
                className="btn-add-skills"
                /* onClick={this.handleToggleDeleteAll} */
              >
                DELETE ALL
              </button>
            </div>
          </div>

          {/* Show all the items experience on the screen */}
          <OverviewArrayObjects
            itemList={skillList}
            removeItem={this.removeItem}
            changeItem={this.changeItem}
          />
        </div>
        {/* Modal confirmation to delete all */}
        {/*  <ModalConfirmation
          modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text=""
        /> */}
        {/* Modal edit fornm */}
        {/* <ModalForm
          modalActive={isActiveEdit}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={skillItem}
          btnTwoFunction={this.handleToggleEdit}
          btnOneFunction={this.onsubmitEditItem}
          onChange={this.handleChange}
        /> */}
        {/* Modal fornm */}
        <ModalForm
          modalActive={isActive}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={skillItem}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default Skills;
