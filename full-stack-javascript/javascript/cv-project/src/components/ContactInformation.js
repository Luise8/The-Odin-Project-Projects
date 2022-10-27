// ContactInformation.js
import React, { Component } from "react";

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
    this.changeItem = this.changeItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleDeleteAll = this.handleToggleDeleteAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  render() {
    const { isActive, itemMainInformation, itemOverview, activeDeleteAll } =
      this.state;
    const form = {};

    return (
      <>
        <div className="container-main-information">
          <div></div>
          <button className="btn-main-inf" onClick={this.changeItem}>
            EDIT
          </button>
          <button className="btn-main-inf" onClick={this.handleToggleDeleteAll}>
            DEFAULT RESTORE
          </button>
        </div>
      </>
    );
  }
}

export default ContactInformation;
