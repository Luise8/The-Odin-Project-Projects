// MainInformation.js MainInformation information
import React, { Component } from "react";

class MainInformation extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      title: "" /*Professional title placeholder*/,
      resume: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { fullName, title, resume } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="fullName">Enter your name </label>
          <input
            onChange={this.handleChange}
            value={fullName}
            type="text"
            id="fullName"
          />
        </div>
        <div>
          <label htmlFor="title">Professional title </label>
          <input
            onChange={this.handleChange}
            value={title}
            type="text"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="resume">Enter your resume </label>
          <input
            onChange={this.handleChange}
            value={resume}
            type="text"
            id="resume"
          />
        </div>
      </div>
    );
  }
}

export default MainInformation;
