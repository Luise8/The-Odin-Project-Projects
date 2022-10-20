// Form.js
// Component that allows you to create a form with two buttons dynamically.
// You can choose the number and type of inputs.
// You can only have two buttons.
// For each input a corresponding label is created.

// YOU NEED FORM.CSS" IN THE FOLLOWING DIRECTION import "../styles/Form.css";
// YOU NEED THE FOLLOWING PROPERTIES: inputsList, btnList, btnTwoFunction, btnOneFunction,onChange, stateInputValues.

//- inputsList: is an array of objects. Each object contains 4 properties, which are string.
// 1. titleLabel: which contains the name that the label corresponding to the input will receive.
// 2. keyStateName: which will have the name that the key of the corresponding state object will receive when handling the input, stateInputValues.
// 3. typeInput: The type of input.
// 4. indexStateValue: The index of the corresponding state object to handle the input, stateInputValues.

// - btnList: It is an object that contains two properties, these are string.
// 1. btnOne: Contains the name of the first button.
// 1. btnTwo: Contains the name of the second button.

// - btnTwoFunction: function that receives onClick of the second button.

// - btnOneFunction: function that receives onClick of the first button.

// - onChange: Function that receives the onChange event of each input to update itself and update the value of the corresponding state.

// - stateInputValues: ​​is an array of objects of the state object.
// This must have at least the same number of objects as inputsList.
// Each object has a key property, this will be added to each keyStateName property of the corresponding inputList object.
// Each object has an index within the array, this index will be added to each indexStateValue property of the corresponding inputList object.
// Each object of the stateInputValues ​​array must have a text property, which will determine the value of each input.

import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      inputsList,
      btnList,
      btnTwoFunction,
      btnOneFunction,
      onChange,
      stateInputValues,
    } = this.props;
    return (
      <div className="container">
        <div className="containerForm">
          {inputsList.map((input, i) => {
            return (
              <div key={i}>
                <label>{input.titleLabel}</label>
                <input
                  data-index-state-value={input.indexStateValue}
                  value={stateInputValues[input.indexStateValue].text}
                  type={input.typeInput}
                  onChange={onChange}
                />
              </div>
            );
          })}
          <div className="contentBtn">
            <button onClick={btnOneFunction}>{btnList.btnOne}</button>
            <button onClick={btnTwoFunction}>{btnList.btnTwo}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
