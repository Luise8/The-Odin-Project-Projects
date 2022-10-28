// Sidebar.js

import React, { Component } from "react";
import "../styles/Sidebar.css";
import ContactInformation from "./ContactInformation";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Item
    };
  }

  render() {
    return (
      <div className="containerSidebar">
        <ContactInformation />
      </div>
    );
  }
}

export default Sidebar;
