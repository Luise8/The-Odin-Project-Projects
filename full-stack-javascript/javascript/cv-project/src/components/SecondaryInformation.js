// SecondaryInformation.js
// Sidebar
import React, { Component } from "react";
import ModalForm from "./ModalForm";
import ModalConfirmation from "./ModalConfirmation";
import "../styles/SecondaryInformation.css";

class SecondaryInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Item
    };
  }

  render() {
    return (
      <div className="containerSidebar">
        <div className="container-two"></div>
      </div>
    );
  }
}

export default SecondaryInformation;
