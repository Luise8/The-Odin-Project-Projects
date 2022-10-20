// general.js general information
import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      photo: "",
      title: "" /*Professional title placeholder*/,
      resume: "",
      email: "",
      phoneNumber: "",
      /*       website: "",
      twitter: "",
      linkedin: "",
      github: "", */
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const {
      fullName,
      photo,
      title,
      resume,
      email,
      phoneNumber,
      /*       website,
      twitter,
      linkedin,
      github, */
    } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="photo">Enter your image </label>
          <input
            onChange={this.handleChange}
            value={photo}
            type="file"
            id="photo"
            accept="image/*"
          />
        </div>
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
        <div>
          <label htmlFor="email">Enter your Email </label>
          <input
            onChange={this.handleChange}
            value={email}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Enter your phone number </label>
          <input
            onChange={this.handleChange}
            value={phoneNumber}
            type="text"
            id="phoneNumber"
          />
        </div>
        {/* <label htmlFor="website">Enter First name</label>
        <input
          onChange={this.handleChange}
          value={website}
          type="text"
          id="website"
        />
        <label htmlFor="twitter">Enter First name</label>
        <input
          onChange={this.handleChange}
          value={twitter}
          type="text"
          id="twitter"
        />
        <label htmlFor="linkedin">Enter First name</label>
        <input
          onChange={this.handleChange}
          value={linkedin}
          type="text"
          id="linkedin"
        />
        <label htmlFor="github">Enter First name</label>
        <input
          onChange={this.handleChange}
          value={github}
          type="text"
          id="github"
        /> */}
      </div>
    );
  }
}

export default General;
