// Buttons
const numbers = document.querySelectorAll(".number");
const clearAll = document.querySelector(".clearAll");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");
const operators = document.querySelectorAll(".operators");
const deleteOneDigit = document.querySelector(".delete");

// Screen parts
const current = document.querySelector("#current");
const operation = document.querySelector("#operator");
const result = document.querySelector("#result");

// Write Numbers
numbers.forEach((e) => {
  if (e.textContent == "0") {
    e.addEventListener("click", () => {
      if (current.value != "-0") {
        write(e.textContent);
      }
    });
  } else {
    e.addEventListener("click", () => {
      write(e.textContent);
    });
  }
});

// Write Point
point.addEventListener("click", (e) => {
  if (check.point == false) {
    if (current.value != "" && current.value != "-") {
      write(e.target.textContent);
      check.point = true;
    } else if (current.value == "") {
      write("0.");
      check.point = true;
    }
  }
});

// AC button to clear all digits in all parts of screen
clearAll.addEventListener("click", () => {
  result.value = "";
  operation.value = "";
  current.value = "0";
  check.point = false;
});

// Check point and operators
const check = {
  point: false,
  operatorsCheck: [".", "0.", "-", "-0", "-0."],
};

// Delete function
const deleteOneDigit = document.querySelector(".delete");
deleteOneDigit.addEventListener("click", () => {
  if (current.value.length > 0) {
    let deleteDigit = current.value[current.value.length - 1];
    current.value = current.value.slice(0, -1);
    if ("." == deleteDigit) {
      check.point = false;
    }
  }
});

// Fucntion to write each sigle digit
function write(digit) {
  if (current.value.length < 20) {
    // Check to replace zero if write a number
    if (current.value == "0" && current.value.length == 1 && digit != ".") {
      current.value = digit;
    } else {
      current.value += digit;
    }
  }
}
