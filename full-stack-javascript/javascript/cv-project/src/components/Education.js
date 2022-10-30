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

    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.onsubmitEditItem = this.onsubmitEditItem.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }
  // To handle the input changes in the form
  handleChange = (e) => {
    //e.target.getAttribute("")
    let item = [...this.state.eduItem];
    let inputSelected = e.target.value;
    item[e.target.getAttribute("data-index-state-value")].text = inputSelected;
    this.setState({
      eduItem: [...item],
    });
  };

  // To add new items button
  handleToggle = () => {
    this.setState({
      eduItem: [
        { id: uniqid() },
        { key: "institution", text: "", tag: "h3", className: "title" },
        { key: "degree", text: "", tag: "p", className: "para" },
        { key: "dateFrom", text: "", tag: "p", className: "para lowOpacity" },
        { key: "dateTo", text: "", tag: "p", className: "para lowOpacity" },
      ],
      isActive: !this.state.isActive,
    });
  };

  onSubmitItem = (e) => {
    e.preventDefault();
    this.setState({
      eduList: this.state.eduList.concat([this.state.eduItem]),
      eduItem: [
        { id: uniqid() },
        { key: "institution", text: "", tag: "h3", className: "title" },
        { key: "degree", text: "", tag: "p", className: "para" },
        { key: "dateFrom", text: "", tag: "p", className: "para lowOpacity" },
        { key: "dateTo", text: "", tag: "p", className: "para lowOpacity" },
      ],
      isActive: !this.state.isActive,
    });
  };

  // To delete all items button
  handleToggleDeleteAll(e) {
    e.preventDefault();
    if (this.state.eduList.length > 0) {
      this.setState({
        activeDeleteAll: !this.state.activeDeleteAll,
      });
    }
  }

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      eduItem: [
        { id: uniqid() },
        { key: "institution", text: "", tag: "h3", className: "title" },
        { key: "degree", text: "", tag: "p", className: "para" },
        { key: "dateFrom", text: "", tag: "p", className: "para lowOpacity" },
        { key: "dateTo", text: "", tag: "p", className: "para lowOpacity" },
      ],
      eduList: [],
      activeDeleteAll: false,
      itemSelectedIndex: -1,
    });
  };

  // To each single item buttons
  handleToggleEdit = () => {
    this.setState({
      isActiveEdit: !this.state.isActiveEdit,
    });
  };

  changeItem = (id) => {
    this.handleToggleEdit();
    let updateItem;
    let index = "";
    this.state.eduList.forEach((item, i) => {
      if (item[0].id === id) {
        updateItem = item;
        index = i;
      }
    });
    this.setState({
      eduItem: [
        { id: id },
        {
          key: "institution",
          text: updateItem[1].text,
          tag: "h3",
          className: "title",
        },
        {
          key: "degree",
          text: updateItem[2].text,
          tag: "p",
          className: "para",
        },
        {
          key: "dateFrom",
          text: updateItem[3].text,
          tag: "p",
          className: "para lowOpacity",
        },
        {
          key: "dateTo",
          text: updateItem[4].text,
          tag: "p",
          className: "para lowOpacity",
        },
      ],
      itemSelectedIndex: index,
    });
  };

  removeItem(id) {
    const newList = this.state.eduList.filter((eduItem) => {
      return eduItem[0].id !== id;
    });

    this.setState({
      eduList: [...newList],
      eduItem: [
        { id: uniqid() },
        { key: "institution", text: "", tag: "h3", className: "title" },
        { key: "degree", text: "", tag: "p", className: "para" },
        { key: "dateFrom", text: "", tag: "p", className: "para lowOpacity" },
        { key: "dateTo", text: "", tag: "p", className: "para lowOpacity" },
      ],
      isActive: false,
    });
  }

  onsubmitEditItem = (e) => {
    e.preventDefault();
    const newList = this.state.eduList.map((item, i) => {
      if (
        item[0].id === this.state.eduList[this.state.itemSelectedIndex][0].id
      ) {
        item = this.state.eduItem;
      }
      return item;
    });
    this.setState({
      eduList: [...newList],
      eduItem: [
        { id: uniqid() },
        { key: "institution", text: "", tag: "h3", className: "title" },
        { key: "degree", text: "", tag: "p", className: "para" },
        { key: "dateFrom", text: "", tag: "p", className: "para lowOpacity" },
        { key: "dateTo", text: "", tag: "p", className: "para lowOpacity" },
      ],
      isActiveEdit: false,
      itemSelectedIndex: -1,
    });
  };

  render() {
    const { eduList, isActive, eduItem, isActiveEdit, activeDeleteAll } =
      this.state;

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
        <Overview
          itemList={eduList}
          removeItem={this.removeItem}
          changeItem={this.changeItem}
        />
        {/* Modal confirmation to delete all */}
        <ModalConfirmation
          modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text="Are you sure you want to remove all of the education added?"
        />
        {/* Modal edit fornm */}
        <ModalForm
          modalActive={isActiveEdit}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={eduItem}
          btnTwoFunction={this.handleToggleEdit}
          btnOneFunction={this.onsubmitEditItem}
          onChange={this.handleChange}
        />
        {/* Modal fornm */}
        <ModalForm
          modalActive={isActive}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={eduItem}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Education;
