// OverviewArrayObjects.js
// This component represents an array of items.
// Each items is an array of objects.
// Therefore, it is necessary that this component receives 3 properties: itemList, removeItem, changeItem

// itemList: Array of items. Each item is an array of objects.
// Each item must have an object with only one id property located at position 0 of the item array, this represents the key of the item.
// The following properties are strings:
// Each item must have in the following objects after 0 the tag property that will indicate the DOM tag.
// Each item must have in the following objects after 0 the text property that will indicate the text of the DOM tag.
// Each item must have the following items after 0 the key property that will indicate the key of the object that is a value related to the name of the object, such as an id.
// Each item must have the className property in the following objects after 0, which will indicate the classes that will be applied to the DOM tag.

// removeItem function that removes the selected item.

// changeItem function that opens a form to update the selected item.

import React, { Component } from "react";
import "../styles/OverviewArrayObjects.css";

class OverviewArrayObjects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemList, removeItem, changeItem } = this.props;

    return (
      <ul>
        {itemList.map((item, i) => {
          return (
            <li className="item-li" key={item[0].id}>
              {item.map((element, i) => {
                return element.text ? (
                  <element.tag key={element.key}>{element.text}</element.tag>
                ) : (
                  ""
                );
              })}
              <button
                className="btn-edit-exp"
                onClick={(e) => removeItem(item[0].id)}
              >
                Delete
              </button>
              <button
                className="btn-edit-exp"
                onClick={(e) => changeItem(item[0].id)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default OverviewArrayObjects;
