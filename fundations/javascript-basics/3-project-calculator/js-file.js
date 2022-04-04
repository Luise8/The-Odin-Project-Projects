const calculatorBtn = document.querySelector("#calculator-btn");
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector("#calculator-screen");
const current = document.querySelector("#current");

calculatorBtn.addEventListener("click", (e) => {
  // Check max-length of digits
  if (current.textContent.length < 20) {
    // Check if pressed a number
    if (e.target.classList.contains("number")) {
      //Check if first digit is diferent to don't allow write two zeros continue
      if (current.textContent[0] != 0) {
        current.textContent += e.target.textContent;
      } else {
        current.textContent = e.target.textContent;
      }
    }
  }
});

// Delete function
const deleteOneDigit = document.querySelector(".delete");
deleteOneDigit.addEventListener("click", () => {
  if (current.textContent.length > 1) {
    current.textContent = current.textContent.slice(
      0,
      current.textContent.length - 1
    );
  } else if (current.textContent.length == 1) {
    current.textContent = 0;
  }
});

/* const clearAll = document.querySelector(".delete");
clearAll.addEventListener("click", () => {});

function clearAll() {
  calculatorScreen.textContent = 0;
}
 */
/* operators = {
  AC = 
} */
