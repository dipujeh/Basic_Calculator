const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("#input");
const result = document.querySelector("#result");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = button.textContent;
    handalar(value);
  });
});

function handalar(value) {
  if (value === "AC") {
    input.value = "";
    result.value = "";
  } else if (value === "DEL") {
    input.value = input.value.slice(0, -1);
  } else if (value === "=") {
    if (input.value === "") return;
    else {
      result.value = eval(input.value);
    }
  } else if (value === "√") {
    if (input.value === "") {
      return;
    } else {
      result.value = Math.sqrt(eval(input.value)).toFixed(2);
    }
  } else if (value === "*") {
    if (input.value === "") {
      return;
    } else {
      input.value += value;
    }
  } else if (value === "/") {
    if (input.value === "") {
      return;
    } else {
      input.value += value;
    }
  } else {
    input.value += value;
  }
}
