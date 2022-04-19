// Buttons
const numbers = document.querySelectorAll(".number");
const clearAll = document.querySelector(".clearAll");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");
const operators = document.querySelectorAll(".operators");
const backspace = document.querySelector(".backspace");

// Screen parts
const currentScreen = document.querySelector("#current-screen");
const operationScreen = document.querySelector("#operator-screen");
const resultScreen = document.querySelector("#result-screen");

// Write Numbers
numbers.forEach((e) => {
  e.addEventListener("click", () => {
    if (currentScreen.value != "-0") write(e.textContent);
  });
});

// Write Point
point.addEventListener("click", (e) => {
  if (check.point == false) {
    if (currentScreen.value != "" && currentScreen.value != "-") {
      write(e.target.textContent);
      check.point = true;
    } else if (currentScreen.value == "") {
      write("0.");
      check.point = true;
    }
  }
});

// AC button to clear all digits in all parts of screen
clearAll.addEventListener("click", () => {
  resultScreen.value = "";
  operationScreen.value = "";
  currentScreen.value = "0";
  check.point = false;
});

// Check point and operators
const check = {
  point: false,
  operatorsCheck: [".", "0.", "-", "-0", "-0."],
};

// Backspace function
backspace.addEventListener("click", () => {
  if (currentScreen.value.length > 0) {
    let deleteDigit = currentScreen.value[currentScreen.value.length - 1];
    currentScreen.value = currentScreen.value.slice(0, -1);
    if ("." == deleteDigit) {
      check.point = false;
    }
  }
});

// Fucntion to write each sigle digit
function write(digit) {
  if (currentScreen.value.length < 20) {
    // Check to replace zero if write a number
    if (
      currentScreen.value == "0" &&
      currentScreen.value.length == 1 &&
      digit != "."
    ) {
      currentScreen.value = digit;
    } else {
      currentScreen.value += digit;
    }
  }
}

// Operators + - / * %
operators.forEach((e) => {
  // Only to negative symbol.
  if (e.textContent == "-") {
    e.addEventListener("click", () => {
      // Write this if there are not anything in currentScreen.
      if (currentScreen.value.length == 0) write(e.textContent);
    });
  }

  e.addEventListener("click", () => {
    if (
      !check.operatorsCheck.includes(currentScreen.value) &&
      currentScreen.value[currentScreen.value.length - 1] != "."
    ) {
      updateScreens(operationScreen.value, e.textContent);
    }
  });
});

// Equal =
equal.addEventListener("click", (e) => {
  if (
    !check.operatorsCheck.includes(currentScreen.value) &&
    currentScreen.value[currentScreen.value.length - 1] != "."
  )
    updateScreens(operationScreen.value, e.target.textContent);
});

// Object with functions
const operator = {
  "+": (num1, num2) => {
    return num1 + num2;
  },
  "-": (num1, num2) => {
    return num1 - num2;
  },
  x: (num1, num2) => {
    return num1 * num2;
  },
  "÷": (num1, num2) => {
    if (num2 == "0") {
      alert("Error, don't try to divide that");
      return "error";
    } else {
      return num1 / num2;
    }
  },
  "%": (num1, num2) => {
    return (num1 * num2) / 100;
  },
};

// Function to update screen when is pressed a valid operation
function updateScreens(operationSymbol, operationSymbolNew) {
  if (currentScreen.value != "" && resultScreen.value != "") {
    let resultOperation = operator[operationSymbol](
      +resultScreen.value,
      +currentScreen.value
    );
    if (resultOperation == "error") {
      return;
    }
    if (operationSymbolNew == "=") {
      currentScreen.value = resultOperation;
      resultScreen.value = "";
      operationScreen.value = operationSymbolNew;
      check.point = currentScreen.value.includes(".") ? true : false;
    } else {
      resultScreen.value = resultOperation;
      currentScreen.value = "0";
      operationScreen.value = operationSymbolNew;
      check.point = false;
    }
  } else if (
    currentScreen.value != "" &&
    resultScreen.value == "" &&
    operationSymbolNew != "="
  ) {
    resultScreen.value = currentScreen.value;
    currentScreen.value = "0";
    operationScreen.value = operationSymbolNew;
    check.point = false;
  } else if (
    currentScreen.value == "" &&
    resultScreen.value == "" &&
    operationSymbolNew != "="
  ) {
    resultScreen.value = "0";
    currentScreen.value = "0";
    operationScreen.value = operationSymbolNew;
    check.point = false;
  }
}

// Button Reference Keys
const buttonReferenceKeys = {
  Backspace: backspace,
  Delete: clearAll,
  ".": point,
  0: numbers[9],
  1: numbers[6],
  2: numbers[7],
  3: numbers[8],
  4: numbers[3],
  5: numbers[4],
  6: numbers[5],
  7: numbers[0],
  8: numbers[1],
  9: numbers[2],
  "/": operators[0],
  "*": operators[1],
  "-": operators[2],
  "+": operators[3],
  "%": operators[4],
  Enter: equal,
};

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName in buttonReferenceKeys) {
    buttonReferenceKeys[keyName].click();
  }
  console.log(keyName);
});
