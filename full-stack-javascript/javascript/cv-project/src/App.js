// App.js
import React, { Component } from "react";
import General from "./components/General";
import Experience from "./components/Experience";
import "./styles/styles.css";
import Personal from "./components/Personal";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="centerContainer">
          <Personal />
          <div className="rightCenterContainer">
            <General />
            <h2>Education</h2>
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
