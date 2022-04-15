// Buttons
const numbers = document.querySelectorAll(".number");
const clearAll = document.querySelector(".clearAll");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");
const operators = document.querySelectorAll(".operators");

// Screen parts
const current = document.querySelector("#current");
const operation = document.querySelector("#operator");
const result = document.querySelector("#result");

// Numbers
numbers.forEach((e) => {
  if (e.textContent == "0") {
    e.addEventListener("click", () => {
      if (current.value != "-0") {
        current.value += e.textContent;
      }
    });
  } else {
    e.addEventListener("click", () => {
      current.value += e.textContent;
    });
  }
});

// Point
point.addEventListener("click", (e) => {
  if (!current.value.includes(".")) {
    if (current.value != "" && current.value != "-") {
      current.value += e.target.textContent;
    } else if (current.value == "") {
      current.value = "0.";
    }
  }
});

// AC button to clear all digits in all parts of screen
clearAll.addEventListener("click", () => {
  result.value = "";
  operation.value = "";
  current.value = "0";
});

// Delete function
const deleteOneDigit = document.querySelector(".delete");
deleteOneDigit.addEventListener("click", () => {
  if (current.value.length > 0) {
    let deleteDigit = current.value[current.value.length - 1];
    current.value = current.value.slice(0, -1);
  }
});
