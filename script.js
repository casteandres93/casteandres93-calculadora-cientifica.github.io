// Variables
let display = document.querySelector("#display");

// Function to append text to the display
function appendText(value) {
  let currentDisplay = display.textContent;
  display.textContent = currentDisplay === '0' ? value : currentDisplay + value;
}

// Function to delete the last character
function deleteLast() {
  let currentDisplay = display.textContent;
  display.textContent = currentDisplay.slice(0, -1);
}

// Function to clear the display
function clearDisplay() {
  display.textContent = "0";
}

// Function to calculate the result
function calculate() {
  let calculation = display.textContent;

  let result;
  try {
    result = math.evaluate(calculation);
    if (result === undefined || result === null || isNaN(result)) {
      throw new Error('Invalid input');
    }
  } catch (error) {
    result = "Error";
  }

  display.textContent = result;
}
