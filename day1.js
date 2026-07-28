"use strict";
let username = "Kellz";
document.body.innerHTML = "Welcome, " + username;
let age = 20;
let userProfile = {
    name: "Kellz",
    age: 20,
    isActive: true,
    permissions: ["read", "write"]
};
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log(num * 5);
});
let products = [
    { name: "Laptop", price: 1200, quantity: 3 },
    { name: "Mouse", price: 25, quantity: 10 },
    { name: "Monitor", price: 1500, quantity: 5 },
    { name: "Keyboard", price: 45, quantity: 8 }
];
products.forEach(function (product) {
    if (product.price > 1000) {
        console.log(product.name + " costs $" + product.price);
    }
});
let phrase = "TypeScript Programming";
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());
console.log(phrase.length);
console.log(phrase.slice(11));
const students = ["John", "Mary", "Peter"];
const scores = [70, 85, 40];
for (let i = 0; i < students.length; i++) {
    let status = scores[i] >= 60 ? "Pass" : "Fail";
    console.log(students[i] + " scored " + scores[i] + " - " + status);
}
//# sourceMappingURL=day1.js.map