// Experience.js
// This component has a CV app section
import React, { Component } from "react";
import Overview from "./OverviewArrayObjects";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import uniqid from "uniqid";
import "../styles/Section.css";
import example from "./example";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Item
      expItem: [
        { id: uniqid() },
        { key: "positionTitle", text: "", tag: "h3", className: "title" },
        { key: "companyName", text: "", tag: "p", className: "para" },
        {
          key: "dateFrom",
          text: "",
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: "",
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        { key: "Location", text: "", tag: "p", className: "para lowOpacity" },
        { key: "mainTasks", text: "", tag: "p", className: "para" },
      ],

      expList: [...example.experience], // Array of items
      isActive: false, // Modal boolean
      isActiveEdit: false, // Modal boolean
      activeDeleteAll: false, // Modal boolean
      itemSelectedIndex: -1, // pointer expList item for edit item
    };
    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  // To handle the input changes in the form
  handleChange = (e) => {
    //e.target.getAttribute("")
    let item = [...this.state.expItem];
    let inputSelected = e.target.value;
    item[e.target.getAttribute("data-index-state-value")].text = inputSelected;
    this.setState({
      expItem: [...item],
    });
  };

  // To add new items button
  handleToggle = () => {
    this.setState({
      expItem: [
        { id: uniqid() },
        { key: "positionTitle", text: "", tag: "h3", className: "title" },
        { key: "companyName", text: "", tag: "p", className: "para" },
        {
          key: "dateFrom",
          text: "",
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: "",
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        { key: "Location", text: "", tag: "p", className: "para lowOpacity" },
        { key: "mainTasks", text: "", tag: "p", className: "para" },
      ],
      isActive: !this.state.isActive,
    });
  };

  onSubmitItem = (e) => {
    e.preventDefault();
    this.setState({
      expList: this.state.expList.concat([this.state.expItem]),
      expItem: [
        { id: uniqid() },
        { key: "positionTitle", text: "casa", tag: "h3", className: "title" },
        { key: "companyName", text: "", tag: "p", className: "para" },
        {
          key: "dateFrom",
          text: "",
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: "",
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        { key: "Location", text: "", tag: "p", className: "para lowOpacity" },
        { key: "mainTasks", text: "", tag: "p", className: "para" },
      ],
      isActive: !this.state.isActive,
    });
  };

  // To delete all items button
  handleToggleDeleteAll(e) {
    e.preventDefault();
    if (this.state.expList.length > 0) {
      this.setState({
        activeDeleteAll: !this.state.activeDeleteAll,
      });
    }
  }

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      expItem: [
        { id: uniqid() },
        { key: "positionTitle", text: "casa", tag: "h3", className: "title" },
        { key: "companyName", text: "", tag: "p", className: "para" },
        {
          key: "dateFrom",
          text: "",
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: "",
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        { key: "Location", text: "", tag: "p", className: "para lowOpacity" },
        { key: "mainTasks", text: "", tag: "p", className: "para" },
      ],
      expList: [],
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
    this.state.expList.forEach((item, i) => {
      if (item[0].id === id) {
        updateItem = item;
        index = i;
      }
    });

    this.setState({
      expItem: [
        { id: id },
        {
          key: "positionTitle",
          text: updateItem[1].text,
          tag: "h3",
          className: "title",
        },
        {
          key: "companyName",
          text: updateItem[2].text,
          tag: "p",
          className: "para",
        },
        {
          key: "dateFrom",
          text: updateItem[3].text,
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: updateItem[4].text,
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        {
          key: "Location",
          text: updateItem[5].text,
          tag: "p",
          className: "para lowOpacity",
        },
        {
          key: "mainTasks",
          text: updateItem[6].text,
          tag: "p",
          className: "para",
        },
      ],
      itemSelectedIndex: index,
    });
  };

  removeItem(id) {
    const newList = this.state.expList.filter((expItem) => {
      return expItem[0].id !== id;
    });

    this.setState({
      expList: [...newList],
      expItem: [
        { id: uniqid() },
        { key: "positionTitle", text: "", tag: "h3", className: "title" },
        { key: "companyName", text: "", tag: "p", className: "para" },
        {
          key: "dateFrom",
          text: "",
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: "",
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        { key: "Location", text: "", tag: "p", className: "para lowOpacity" },
        { key: "mainTasks", text: "", tag: "p", className: "para" },
      ],
      isActive: false,
    });
  }

  onsubmitEditItem = (e) => {
    e.preventDefault();
    const newList = this.state.expList.map((item, i) => {
      if (
        item[0].id === this.state.expList[this.state.itemSelectedIndex][0].id
      ) {
        item = this.state.expItem;
      }
      return item;
    });
    this.setState({
      expList: [...newList],
      expItem: [
        { id: uniqid() },
        { key: "positionTitle", text: "", tag: "h3", className: "title" },
        { key: "companyName", text: "", tag: "p", className: "para" },
        {
          key: "dateFrom",
          text: "",
          tag: "p",
          className: "para lowOpacity date",
        },
        {
          key: "dateTo",
          text: "",
          tag: "p",
          className: "para lowOpacity date dateTo",
        },
        { key: "Location", text: "", tag: "p", className: "para lowOpacity" },
        { key: "mainTasks", text: "", tag: "p", className: "para" },
      ],
      isActiveEdit: false,
      itemSelectedIndex: -1,
    });
  };

  render() {
    const { expList, isActive, expItem, isActiveEdit, activeDeleteAll } =
      this.state;

    // object that has inputsList and btnList for ModalForm component.
    const form = {
      inputsList: [
        {
          titleLabel: "Position Title:",
          keyStateName: "positionTitle",
          typeInput: "text",
          indexStateValue: 1,
        },

        {
          titleLabel: "Company Name:",
          keyStateName: "CompanyName",
          typeInput: "text",
          indexStateValue: 2,
        },

        {
          titleLabel: "Date From:",
          keyStateName: "datefromWork",
          typeInput: "date",
          indexStateValue: 3,
        },

        {
          titleLabel: "Date to:",
          keyStateName: "dateToWork",
          typeInput: "date",
          indexStateValue: 4,
        },

        {
          titleLabel: "Location:",
          keyStateName: "locationWork",
          typeInput: "text",
          indexStateValue: 5,
        },

        {
          titleLabel: "Main Tasks:",
          keyStateName: "mainTasks",
          typeInput: "text",
          indexStateValue: 6,
        },
      ],
      btnList: {
        btnOne: "Save",
        btnTwo: "Cancel",
      },
    };

    //Block scrolling when some modal is active
    if (isActive || isActiveEdit || activeDeleteAll) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return (
      <div className="container-section experience">
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="container-btn-section-header">
            <button className="btn add-exp" onClick={this.handleToggle}>
              ADD
            </button>
            <button
              className="btn dlt-exp"
              onClick={this.handleToggleDeleteAll}
            >
              DELETE ALL
            </button>
          </div>
        </div>
        {/* Show all the items experience on the screen */}
        <Overview
          itemList={expList}
          removeItem={this.removeItem}
          changeItem={this.changeItem}
        />
        {/* Modal confirmation to delete all */}
        <ModalConfirmation
          modalActive={activeDeleteAll}
          btnOneFunction={this.clearAll}
          btnTwoFunction={this.handleToggleDeleteAll}
          text="Are you sure you want to remove all added experiences?"
        />
        {/* Modal edit fornm */}
        <ModalForm
          modalActive={isActiveEdit}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={expItem}
          btnTwoFunction={this.handleToggleEdit}
          btnOneFunction={this.onsubmitEditItem}
          onChange={this.handleChange}
        />
        {/* Modal fornm */}
        <ModalForm
          modalActive={isActive}
          inputsList={form.inputsList}
          btnList={form.btnList}
          stateInputValues={expItem}
          btnTwoFunction={this.handleToggle}
          btnOneFunction={this.onSubmitItem}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Experience;
