// App.js
import React, { Component } from "react";
import MainInformation from "./components/MainInformation";
import Experience from "./components/Experience";
import "./styles/styles.css";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <Sidebar />
          <div className="right-main-container">
            <MainInformation />
            <Education />
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
