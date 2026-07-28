const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultDisplay = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");

addBtn!.addEventListener("click", function() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);

  if (num1Input.value === "" || num2Input.value === "") {
    resultDisplay!.innerHTML = "Result: Please enter both numbers";
    return;
  }

  let sum = Math.round((num1 + num2) * 100) / 100;
  resultDisplay!.innerHTML = "Result: " + sum;
});

subBtn!.addEventListener("click", function() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);

  if (num1Input.value === "" || num2Input.value === "") {
    resultDisplay!.innerHTML = "Result: Please enter both numbers";
    return;
  }

 let difference = Math.round((num1 - num2) * 100) / 100;
  resultDisplay!.innerHTML = "Result: " + difference;
});

mulBtn!.addEventListener("click", function() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);

  if (num1Input.value === "" || num2Input.value === "") {
    resultDisplay!.innerHTML = "Result: Please enter both numbers";
    return;
  }

 let product = Math.round((num1 * num2) * 100) / 100;
  resultDisplay!.innerHTML = "Result: " + product;
});

divBtn!.addEventListener("click", function() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);

  if (num1Input.value === "" || num2Input.value === "") {
    resultDisplay!.innerHTML = "Result: Please enter both numbers";
    return;
  }

  if (num2 === 0) {
    resultDisplay!.innerHTML = "Result: Cannot divide by zero";
    return;
  }

 let quotient = Math.round((num1 / num2) * 100) / 100;
  resultDisplay!.innerHTML = "Result: " + quotient;
});
const clearBtn = document.getElementById("clearBtn");

clearBtn!.addEventListener("click", function() {
  num1Input.value = "";
  num2Input.value = "";
  resultDisplay!.innerHTML = "Result: ";
});
num2Input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addBtn!.click();
  }
});