// Skills.js
import React, { Component } from "react";
import "../styles/ImageProfile.css";
import example from "./example";

class ImageProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: true,
      directionImage: example.imageProfile,
    };
  }

  handleToggle = () => {
    this.setState({
      activeImage: !this.state.activeImage,
    });
  };

  handleChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = () => {
        this.setState({ directionImage: reader.result });
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  render() {
    const { activeImage, directionImage } = this.state;

    // object that has inputsList and btnList for ModalForm component.

    return (
      <>
        <div className="conatiner-profile-image">
          <div className="conatiner-profile-image-space"></div>
          <button onClick={this.handleToggle} className="btn-image">
            {activeImage ? "Remove Image" : "Add Image"}
          </button>
          {activeImage && (
            <div className="container-image">
              <img
                onClick={this.handleToggle}
                className="image-profile"
                src={directionImage}
              ></img>
              <input
                className="input-image-profile"
                type="file"
                accept="image/*"
                onChange={this.handleChangeImage}
              ></input>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ImageProfile;
