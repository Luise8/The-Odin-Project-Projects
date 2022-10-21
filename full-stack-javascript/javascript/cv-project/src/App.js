// App.js
import React, { Component } from "react";
import MainInformation from "./components/MainInformation";
import Experience from "./components/Experience";
import "./styles/styles.css";
import SecondaryInformation from "./components/SecondaryInformation";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <SecondaryInformation />
          <div className="right-main-container">
            <MainInformation />
            <h2>Education</h2>
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
