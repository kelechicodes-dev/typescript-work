"use strict";
const button = document.getElementById("myButton");
const message = document.getElementById("message");
button.addEventListener("click", function () {
    message.innerHTML = "You clicked the button!";
});
const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
greetButton.addEventListener("click", function () {
    let typedName = nameInput.value;
    message.innerHTML = "Hello, " + typedName + "!";
});
let clickCount = 0;
const counterDisplay = document.getElementById("counterDisplay");
const counterButton = document.getElementById("counterButton");
counterButton.addEventListener("click", function () {
    clickCount = clickCount + 1;
    counterDisplay.innerHTML = "Clicks: " + clickCount;
});
//# sourceMappingURL=extra.js.map