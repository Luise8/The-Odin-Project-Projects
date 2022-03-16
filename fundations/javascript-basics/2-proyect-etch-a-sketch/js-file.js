// Create number of divs
const containerSheetParent = document.querySelector("#container-sheet-parent");
let containerSheet = document.querySelector("#container-sheet");
let rowContainer;
// Function that create the row-containers
function createAndAddElements(numberOfElments, parentElement, ...classesNames) {
  for (let i = 0; i < numberOfElments * numberOfElments; i++) {
    const div = document.createElement("div");
    div.classList.add(...classesNames);
    parentElement.appendChild(div);
  }
}

// Controls
const buttonContainer = document.querySelector("#buttonContainer");

// Select items to update and show the size of sheet dynamically
createAndAddElements(16, containerSheet, "row-container");
rowContainer = document.querySelectorAll(".row-container");
const sizeSheet = document.querySelector("#size-sheet");
sizeSheet.value = "16";
const sizeValue = document.querySelector("#size-value");

// Aplly color selected on div selected

// Drawing when hold down mouse javascript event
let mouseDown = false;
window.addEventListener("mouseup", () => {
  mouseDown = false;
});

function drawing() {
  containerSheet.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      if (event.target.classList.contains("row-container")) {
        event.target.style.cssText =
          buttonSelected === "rainbow-mode"
            ? buttonsModes[buttonSelected]()
            : buttonsModes[buttonSelected];

        mouseDown = true;
        return;
      }

      // To resolve select target over gap problem
      if (event.target.id == "container-sheet") {
        if (
          document
            .elementFromPoint(event.clientX + 1, event.clientY)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX + 1,
            event.clientY
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX - 1, event.clientY)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX - 1,
            event.clientY
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX, event.clientY + 1)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX,
            event.clientY + 1
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX, event.clientY - 1)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX,
            event.clientY - 1
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX - 1, event.clientY - 1)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX - 1,
            event.clientY - 1
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX - 1, event.clientY + 1)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX - 1,
            event.clientY + 1
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX + 1, event.clientY + 1)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX + 1,
            event.clientY + 1
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        } else if (
          document
            .elementFromPoint(event.clientX + 1, event.clientY - 1)
            .classList.contains("row-container")
        ) {
          document.elementFromPoint(
            event.clientX + 1,
            event.clientY - 1
          ).style.cssText =
            buttonSelected === "rainbow-mode"
              ? buttonsModes[buttonSelected]()
              : buttonsModes[buttonSelected];
        }
        mouseDown = true;
      }
    }
  });

  containerSheet.addEventListener("mouseover", (event) => {
    if (mouseDown && event.target.classList.contains("row-container")) {
      event.target.style.cssText =
        buttonSelected === "rainbow-mode"
          ? buttonsModes[buttonSelected]()
          : buttonsModes[buttonSelected];
    }
  });
}
drawing();

// Clear all divs sheet to white
const butttonClear = document.querySelector("#clear");
butttonClear.addEventListener("click", clearSheet);
function clearSheet() {
  rowContainer.forEach((element) => {
    element.style.backgroundColor = "#fff";
  });
}

// Color input
const inputColor = document.querySelector("#color");
inputColor.value = "#000";

// function to rainbow-mode can work
function randomColor() {
  let rgbRed = Math.floor(Math.random() * 256);
  let rgbGreen = Math.floor(Math.random() * 256);
  let rgbBlue = Math.floor(Math.random() * 256);
  let color = `background-color: rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
  return color;
}

// To apply mode to draw to divs
const buttonsModes = {
  "color-mode": `background-color: ${inputColor.value}`,
  "rainbow-mode": randomColor,
  "eraser-mode": `background-color: #fff`,
};

let buttonSelected = "color-mode";

// Controls of modes to draw
buttonContainer.addEventListener("click", (e) => {
  buttonSelected = e.target.id;

  for (let i = 0; i < buttonContainer.children.length; i++) {
    if (
      buttonContainer.children[i].id === e.target.id &&
      !buttonContainer.children[i].classList.contains("buttonSelected")
    ) {
      buttonContainer.children[i].classList.add("buttonSelected");
    } else if (
      buttonContainer.children[i].id !== e.target.id &&
      buttonContainer.children[i].classList.contains("buttonSelected")
    ) {
      buttonContainer.children[i].classList.remove("buttonSelected");
    }
  }
});

// Update color-mode
inputColor.addEventListener("change", (e) => {
  buttonsModes["color-mode"] = `background-color: ${e.target.value}`;
});

// Update dynamically size of sheet
sizeSheet.addEventListener("change", (e) => {
  containerSheetParent.removeChild(containerSheet);
  containerSheet = document.createElement("div");
  containerSheet.setAttribute("id", "container-sheet");
  if (gridShowHide.value === "yes") {
    containerSheet.setAttribute("class", "grid-lines");
  }
  containerSheetParent.appendChild(containerSheet);
  drawing();

  createAndAddElements(e.target.value, containerSheet, "row-container");
  rowContainer = document.querySelectorAll(".row-container");
  containerSheet.style.gridTemplate = `repeat(${e.target.value}, 1fr) / repeat(${e.target.value}, 1fr)`;
});

// Show dynamically the value of sheet when is changed
sizeSheet.addEventListener("input", showValue);
function showValue(e) {
  sizeValue.textContent = `${e.target.value} x ${e.target.value}`;
}

// Show and hide the grid
const gridShowHide = document.querySelector("#grid-show-hide");
gridShowHide.addEventListener("click", () => {
  if (gridShowHide.value === "yes") {
    containerSheet.classList.toggle("grid-lines");
    gridShowHide.value = "no";
  } else {
    containerSheet.classList.toggle("grid-lines");
    gridShowHide.value = "yes";
  }
});
