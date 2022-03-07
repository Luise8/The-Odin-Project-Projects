// TO DO

/*  Create a webpage with a 16x16 grid of square divs.
        Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your html file! */

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
let inputColor = document.querySelector("#color");
inputColor.value = "#000";

// Drawing when hold down mouse javascript event
let mouseDown = false;
window.addEventListener("mouseup", () => {
  mouseDown = false;
});

function drawing() {
  containerSheet.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("row-container")) {
      event.target.style.backgroundColor = modeSelected;
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
        ).style.backgroundColor = modeSelected;
      } else if (
        document
          .elementFromPoint(event.clientX - 1, event.clientY)
          .classList.contains("row-container")
      ) {
        document.elementFromPoint(
          event.clientX - 1,
          event.clientY
        ).style.backgroundColor = modeSelected;
      } else if (
        document
          .elementFromPoint(event.clientX, event.clientY + 1)
          .classList.contains("row-container")
      ) {
        document.elementFromPoint(
          event.clientX,
          event.clientY + 1
        ).style.backgroundColor = modeSelected;
      } else if (
        document
          .elementFromPoint(event.clientX, event.clientY - 1)
          .classList.contains("row-container")
      ) {
        document.elementFromPoint(
          event.clientX,
          event.clientY - 1
        ).style.backgroundColor = modeSelected;
      }
      mouseDown = true;
    }
  });

  containerSheet.addEventListener("mouseover", (event) => {
    if (mouseDown && event.target.classList.contains("row-container")) {
      event.target.style.backgroundColor = modeSelected;
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

// Controls of modes to draw
// Update colorMode
const colorMode = document.querySelector("#color-mode");
colorMode.value = "#000";
inputColor.addEventListener("input", (e) => {
  console.log(e.target.value);
  colorMode.value = e.target.value;
  if (colorMode.classList.contains("buttonSelected")) {
    modeSelected = e.target.value;
  }
});

let modeSelected = inputColor.value;
const buttons = buttonContainer.children;
buttonContainer.addEventListener("click", (e) => {
  modeSelected = e.target.value;
  for (let i = 0; i < buttons.length; i++) {
    if (
      buttons[i].id === e.target.id &&
      !buttons[i].classList.contains("buttonSelected")
    ) {
      buttons[i].classList.add("buttonSelected");
    } else if (
      buttons[i].id !== e.target.id &&
      buttons[i].classList.contains("buttonSelected")
    ) {
      buttons[i].classList.remove("buttonSelected");
    }
  }
});

/* const rainbowMode = document.querySelector("#rainbow-mode");
rainbowMode.addEventListener("click", () => {}); */
// Modes to draw
/* let modeToDraw = "colorMode";
const containerControls = document.querySelector("#container-controls");
containerControls.addEventListener("click", (e) => {
  console.log(e.target.id);
}); */
// Erase mode
/* const eraserMode = document.querySelector("#eraser-mode");
eraserMode.addEventListener("click", eraser);
function eraser() {
  
} */
/* function drawDivs() {
  rowContainer.forEach((square) => {
        square.addEventListener("mousedown", () => {
      square.style.backgroundColor = inputColor.value;
      mouseDown = true;
    }); 
        square.addEventListener("mouseenter", () => {
      if (mouseDown) {
        square.style.backgroundColor = inputColor.value;
      }
    });
  });
}
drawDivs();
 */
// TO DO: EXPLORE IF YOU CAN SELECT THE CONTAINER AND APPLY FUNCTIONS ON IT THAT ARE IN EACH INDIVIDUAL CHILD, TO ACHIEVE GREATER PERFORMANCE,
/* console.log((containerSheet.firstElementChild.style.backgroundColor = "red"));
containerSheet.addEventListener("click"; (event) => {
  event.target.
}) */

// Update dynamically size of sheet
sizeSheet.addEventListener("change", (e) => {
  containerSheetParent.removeChild(containerSheet);
  containerSheet = document.createElement("div");
  containerSheet.setAttribute("id", "container-sheet");
  containerSheet.setAttribute("class", "grid-lines");
  containerSheetParent.appendChild(containerSheet);
  drawing();

  createAndAddElements(e.target.value, containerSheet, "row-container");
  rowContainer = document.querySelectorAll(".row-container");
  containerSheet.style.gridTemplate = `repeat(${e.target.value}, 1fr) / repeat(${e.target.value}, 1fr)`;
  /*  drawDivs(); */
});

// Show dynamically the value of sheet when is changed
sizeSheet.addEventListener("input", showValue);
function showValue(e) {
  sizeValue.textContent = `${e.target.value} x ${e.target.value}`;
}

/* const number = 16; */

/* Array.from(rowContainer);
for (let i = 0; i < 16; i++) {
  createAndAddElements(16, rowContainer[i], "row-childs");
} */
/* function updateGrid(number) {
  createAndAddElements(number, containerSheet, "row-container", "grid-lines");
  const rowContainer = document.querySelectorAll(".row-container");
  Array.from(rowContainer);
  createAndAddElements(number, rowContainer, "row-childs");
}
updateGrid(16); */
/* const div = document.querySelector("#container .row-container"); */
/* for (let i = 0; i < ) */

/* function addingElements(numberOfElements, parentElement, childElement) {
  for (let i = 0; i < numberOfElements; i++) {
    parentElement.appendChild(childElement);
  }
}

for (let i = 4; i < numberOfElements; i++) {
  parentElement.appendChild(childElement);
} */
/* function createRowContents(parentElement, class, number) {
  for (let j = 0; j < number; j++) {
      createNumberOfElements(number)
  }
} */
/* function test(a, ...casa) {
  console.log(casa);
  console.log(...casa);
}
test(2, 3, 4, 5, "def", "perro"); */
/* const container = document.querySelector("#container-sheet"); */

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
/* const container = document.querySelector("#container");
container.style.width = "100px";
container.style.height = "100px";
const lengt = 16;
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  alert(div.style.width);
    container.style.alignItems = "center";
  container.style.justifyContent = "center";
}
const div1 = document.querySelector("#container div");

container.style.width = lengt * 10 + 15 + "px";
alert(div1.offsetWidth); */

/*It’s best to put your grid squares inside another “container” div (which can go directly in your html).
        There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
            float/clear
            inline-block
            flexbox
            CSS Grid
        Be careful with borders and margins, as they can adjust the size of the squares!
        “OMG, why isn’t my grid being created???”
            Did you link your CSS stylesheet?
            Open your browser’s developer tools.
            Check if there are any errors in the JavaScript console.
            Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
            Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded. 
            
SEARCH:
  HOW TO ADD DIVS WITH EQUAL DIMENTIONS AND THE SAME BORDER INTER DIVS AND EDGE DIVS
  CALCULATE WIDTH AN HEIGHT FOR EACH SIZE FROM 16 TO 64 X 64
  CREATE A FUNCTIONS THAT WRAP DIVS IN AN FLEX CONTAINER BY EACH SIZE
            
            
            */

/* Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
        Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
        There are multiple ways to change the color of the divs, including:
            adding a new class to the div.
            changing the div’s background color using JavaScript. */

/* Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
        Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
        Also check out prompts.
        You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used. */

/* (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
    Push your project to GitHub! */
